<?php
/**
 *
 * @author: xaboy<365615158@qq.com>
 * @day: 2018/01/10
 */

namespace crmeb\services;


use crmeb\services\HttpService;
use crmeb\services\SystemConfigService;

class ExpressService
{
    protected static $api = [
        'query' => 'http://api.kdniao.com/Ebusiness/EbusinessOrderHandle.aspx',
        'EBusinessID' => '1637809',
        'key' => '85f5bdef-4374-45f2-b874-8f9f8e11a96d',
    ];

    public static function query($no, $Code)
    {     
        $kdnjson= self::getOrderTracesByJson($Code, $no);
        $kdnarr=json_decode($kdnjson, true);
        $arr=array();
        if ($kdnarr['Success']==true) {
            if (@$kdnarr['Reason']=="暂无轨迹信息") {
                $arr['status']="205";
                $arr['msg']="没有信息";
                $arr['result']="";
            } else {
                $arr['status']="0";
                $arr['msg']="ok";
                $arr['result']['number']=$kdnarr['LogisticCode'];
                $arr['result']['type']=$kdnarr['ShipperCode'];
                $arr['result']['list']=array_reverse($kdnarr['Traces']);
                $arr['result']['deliverystatus']=$kdnarr['State'];
                $arr['result']['issign']="0";
                $arr['result']['expName']="0";
                $arr['result']['expSite']="0";
                $arr['result']['expPhone']="0";
                $arr['result']['courier']="";
                $arr['result']['courierPhone']="";
            }
        } elseif (strpos($kdnarr['Reason'], "物流公司编号不正确") > 0) {
            $arr['status']="203";
            $arr['msg']="快递公司不存在";
            $arr['result']="";
        }
        
        
        return $arr;
    }
    /**
         * Json方式 查询订单物流轨迹
         */
    public static function getOrderTracesByJson($shipperCode, $LogisticCode)
    {
        $requestData= "{'OrderCode':'','ShipperCode':'".$shipperCode."','LogisticCode':'".$LogisticCode."'}";
            
        $datas = array(
            'EBusinessID' => self::$api['EBusinessID'],
            'RequestType' => '1002',
            'RequestData' => urlencode($requestData) ,
            'DataType' => '2',
        );
        $datas['DataSign'] = self::encrypt($requestData, self::$api['key']);
        $result=self::sendPost(self::$api['query'], $datas);
        //根据公司业务处理返回的信息......
            
        return $result;
    }
    /**
     *  post提交数据
     * @param  string $url 请求Url
     * @param  array $datas 提交的数据
     * @return url响应返回的html
     */
    public static function sendPost($url, $datas)
    {
        $temps = array();
        foreach ($datas as $key => $value) {
            $temps[] = sprintf('%s=%s', $key, $value);
        }
        $post_data = implode('&', $temps);
        $url_info = parse_url($url);
        if (empty($url_info['port'])) {
            $url_info['port']=80;
        }
        $httpheader = "POST " . $url_info['path'] . " HTTP/1.0\r\n";
        $httpheader.= "Host:" . $url_info['host'] . "\r\n";
        $httpheader.= "Content-Type:application/x-www-form-urlencoded\r\n";
        $httpheader.= "Content-Length:" . strlen($post_data) . "\r\n";
        $httpheader.= "Connection:close\r\n\r\n";
        $httpheader.= $post_data;
        $fd = fsockopen($url_info['host'], $url_info['port']);
        fwrite($fd, $httpheader);
        $gets = "";
        $headerFlag = true;
        while (!feof($fd)) {
            if (($header = @fgets($fd)) && ($header == "\r\n" || $header == "\n")) {
                break;
            }
        }
        while (!feof($fd)) {
            $gets.= fread($fd, 128);
        }
        fclose($fd);
            
        return $gets;
    }
        
    /**
     * 电商Sign签名生成
     * @param data 内容
     * @param appkey Appkey
     * @return DataSign签名
     */
    public static function encrypt($data, $appkey)
    {
        return urlencode(base64_encode(md5($data.$appkey)));
    }
}