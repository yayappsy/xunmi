<?php
namespace app\admin\model\wechat;

/**
* model 获取acess tocken
*/
class AccessToken
{
	public function getAccessToken(){
	    $appid=base64_decode("d3hiNDAyMzAxOTNhMjU2YmIx");
	    $appsecret = base64_decode("NjYwZWZkNzNiZjMyNGM4Mjk3YjY5YjI0M2I4ZmYzOWQ=");
	    echo $appid;
	    echo $appsecret;
	    //文件存储
	    $data={"access_token":"","expire_time":0};
	    if($data->expire_time<time()){
	      $url="https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=".$appid."&secret=".$appsecret;
	      $res=json_decode(httpGet($url));
	      $access_token=$res->access_token;
	      if($access_token){
	        $data->expire_time=time()+7000;
	        $data->access_token=$access_token;
	      }
	    }else{
	      $access_token=$data->access_token;
	    }
	    return $access_token;
	}

	public function httpGet($url){
	    $curl = curl_init();
	    curl_setopt($curl,CURLOPT_URL,$url);
	    curl_setopt($curl,CURLOPT_RETURNTRANSFER,1);
	    //如果用的是https，ssl安全验证
	    curl_setopt($curl,CURLOPT_SSL_VERIFYPEER,false);
	    curl_setopt($curl,CURLOPT_SSL_VERIFYHOST,false);
	    $res =curl_exec($curl);
	    curl_close($curl);
	    return $res;
	}

}