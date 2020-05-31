<?php

namespace app\models\store;

class Kuaidi100Api {

    #校验回调信息的sign
    static function callbackVerify($callbackData) {
        ksort($callbackData);
        $str = '';
        foreach($callbackData AS $key=>$val) {
            if ($key != 'sign') {
                if (is_array($val)) {
                    $str.= $key.json_encode($val,JSON_UNESCAPED_UNICODE);//PHP5.4+
                } else {
                    $str.= $key.$val;
                }
            }
        }
        $str = sys_config("appSecret").$str.sys_config("appSecret");
        $sign = strtoupper(md5($str));
        return $sign == $callbackData['sign'];
    }

    #生成授权地址
    static function authorize($state = '') {
        $timestamp = self::msectime();
        $data = array(
            "client_id"=>sys_config("appKey"),
            "response_type"=>"code",
            "redirect_uri"=>sys_config("redirectUri"),
            "state"=>$state,
            "timestamp"=>$timestamp
        );
        $sign = self::generateSign($data);
        return "https://b.kuaidi100.com/open/oauth/authorize?response_type=code&client_id=".sys_config("appKey")."&redirect_uri=".urlencode(sys_config("redirectUri"))."&state=".$state."&timestamp=".$timestamp."&sign=".$sign;
    }

    #用授权得到的code换取accessToken
    static function accessToken($code) {
        $timestamp = self::msectime();
        $data = array(
            "client_id"=>sys_config("appKey"),
            "client_secret"=>sys_config("appSecret"),
            "grant_type"=>"authorization_code",
            "code"=>$code,
            "redirect_uri"=>sys_config("redirectUri"),
            "timestamp"=>$timestamp
        );
        $sign = self::generateSign($data);
        $data['sign'] = $sign;
        $res = self::https_request("https://b.kuaidi100.com/open/oauth/accessToken", $data);
        $res_arr = json_decode($res,true);
        return $res_arr;
    }

    #刷新accessToken
    static function refreshToken($refreshToken) {
        $timestamp = self::msectime();
        $data = array(
            "client_id"=>sys_config("appKey"),
            "client_secret"=>sys_config("appSecret"),
            "refresh_token"=>$refreshToken,
            "grant_type"=>"refresh_token",
            "timestamp"=>$timestamp
        );
        $sign = self::generateSign($data);
        $data['sign'] = $sign;
        $res = self::https_request("https://b.kuaidi100.com/open/oauth/refreshToken", $data);
        $res_arr = json_decode($res,true);
        return $res_arr;
    }

    #导入订单
    static function send($accessToken, $orderData) {
        if (is_array($orderData)) {
            $orderData = json_encode($orderData,JSON_UNESCAPED_UNICODE);//PHP5.4+
        }
        $timestamp = self::msectime();
        $data = array(
            "appid"=>sys_config("appKey"),
            "access_token"=>$accessToken,
            "data"=>$orderData,
            "timestamp"=>$timestamp
        );
        $sign = self::generateSign($data);
        $data['sign'] = $sign;
        $res = self::https_request("https://b.kuaidi100.com/v6/open/api/send", $data);
        $res_arr = json_decode($res,true);
        return $res_arr;
    }

    #修改订单
    static function update($accessToken, $orderData) {
        if (is_array($orderData)) {
            $orderData = json_encode($orderData,JSON_UNESCAPED_UNICODE);//PHP5.4+
        }
        $timestamp = self::msectime();
        $data = array(
            "appid"=>sys_config("appKey"),
            "access_token"=>$accessToken,
            "data"=>$orderData,
            "timestamp"=>$timestamp
        );
        $sign = self::generateSign($data);
        $data['sign'] = $sign;
        $res = self::https_request("https://b.kuaidi100.com/v6/open/api/update", $data);
        $res_arr = json_decode($res,true);
        return $res_arr;
    }

    #修改订单
    static function cancel($accessToken, $orderList) {
        $timestamp = self::msectime();
        $data = array(
            "appid"=>sys_config("appKey"),
            "access_token"=>$accessToken,
            "timestamp"=>$timestamp,
            "orderList"=>$orderList
        );
        $sign = self::generateSign($data);
        $data['sign'] = $sign;
        $res = self::https_request("https://b.kuaidi100.com/v6/open/api/cancel", $data);
        $res_arr = json_decode($res,true);
        return $res_arr;
    }

    #生成快递打印地址
    static function quickPrint($accessToken, $printList) {
        $timestamp = self::msectime();
        if (is_array($printList)) {
            $printList = implode(",", $printList);
        }
        $data = array(
            "appid"=>sys_config("appKey"),
            "access_token"=>$accessToken,
            "printlist"=>$printList,
            "timestamp"=>$timestamp
        );
        $sign = self::generateSign($data);
        return "https://b.kuaidi100.com/v6/open/api/print?appid=".sys_config("appKey")."&access_token=".$accessToken."&printlist=".$printList."&timestamp=".$timestamp."&sign=".$sign;
    }

    #自动打印
    static function autoPrint($accessToken, $printList) {
        $timestamp = self::msectime();
        if (is_array($printList)) {
            $printList = implode(",", $printList);
        }
        $data = array(
            "appid"=>sys_config("appKey"),
            "access_token"=>$accessToken,
            "printlist"=>$printList,
            "timestamp"=>$timestamp
        );
        $sign = self::generateSign($data);
        $data['sign'] = $sign;
        $res = self::https_request("https://b.kuaidi100.com/v6/open/api/autoPrint", $data);
        $res_arr = json_decode($res,true);
        return $res_arr;
    }

    #生成调用接口的sign
    static function generateSign($data) {
        ksort($data);
        $str = '';
        foreach($data AS $key=>$val) {
            $str.= $key.$val;
        }
        $str = sys_config("appSecret").$str.sys_config("appSecret");
        $sign = strtoupper(md5($str));
        return $sign;
    }

    #发送http请求
    static function https_request($url, $data = null) {
        $headers = array("Content-type: application/x-www-form-urlencoded", "Accept: application/json", "Cache-Control: no-cache", "Pragma: no-cache");
        $fields = (is_array($data)) ? http_build_query($data) : $data;
        $curl = curl_init();
        curl_setopt($curl, CURLOPT_URL, $url);
        curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, FALSE);
        curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, FALSE);
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($curl, CURLOPT_HTTPHEADER, $headers);
        if (!empty($data)){
            curl_setopt($curl, CURLOPT_POST, 1);
            curl_setopt($curl, CURLOPT_POSTFIELDS, $fields);
        }
        $output = curl_exec($curl);
        curl_close($curl);
        return $output;
    }

    #获取当前系统时间，毫秒
    static function msectime() {
        list($msec, $sec) = explode(' ', microtime());
        $msectime = (float)sprintf('%.0f', (floatval($msec) + floatval($sec)) * 1000);
        return $msectime;
    }
}

/*
$orderData = array(
			"recMobile"=>"13888685555",
			"recTel"=>"",
			"recName"=>"刘生",
			"recAddr"=>"安徽亳州涡阳县牌坊镇 陈兰大药房",
			"reccountry"=>"中国",
			"sendMobile"=>"18675586237",
			"sendTel"=>"",
			"sendName"=>"刘三石",
			"sendAddr"=>"广东深圳南山区科技南十二路金蝶软件园",
			"orderNum"=>"123456",
			"cargo"=>"",
			"kuaidiCom"=>"",
			"weight"=>"1",
			"valins"=>"",
			"collection"=>"",
			"payment"=>"",
			"comment"=>"",
			"recCompany"=>"",
			"sendCompany"=>"",
			"items"=>array(
			   "itemName"=>"小米 MIX3",
			   "itemSpec"=>"",
			   "itemCount"=>"2",
			   "itemUnit"=>"件",
			   "itemOuterId"=>"",
			 ),
         );

echo Kuaidi100Api::authorize();
var_dump(Kuaidi100Api::accessToken(''));
var_dump(Kuaidi100Api::refreshToken(''));
echo Kuaidi100Api::quickPrint('', '123');
var_dump(Kuaidi100Api::autoPrint('', '123'));
var_dump(Kuaidi100Api::send('', $orderData));
var_dump(Kuaidi100Api::update('', $orderData));
echo Kuaidi100Api::callbackVerify(json_decode('{"sign":"F01FAFE9DE72160C65B30483690600F5","timestamp":12346789,"data":"{\"message\":\"成功\",\"orderNum\":\"123456\",\"status\":\"200\"}","appid":"","openid":"654321","type":"SEND"}', true));
*/
?>