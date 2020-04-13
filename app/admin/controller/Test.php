<?php

namespace app\admin\controller;


use app\admin\model\system\SystemCity;
use crmeb\services\ExpressService;
use crmeb\services\HttpService;
use crmeb\services\JsonService;
use crmeb\utils\Queue;
use think\facade\Queue as QueueJob;

class Test
{
    public function index($page = 1, $limit = 50, $level = 0)
    {


        var_dump(is_file('uploads/981_1_user.jpg'));


//        $appCode = 'c1655bb781364dbeafd1bb8919ee265a';
//        $list = HttpService::getRequest('https://api02.aliyun.venuscn.com/area/all', [
//            'level' => $level,
//            'page' => $page,
//            'size' => 50
//        ], ['Authorization:APPCODE ' . $appCode]);
//        $list = json_decode($list, true);
//        $data = [];
//        foreach ($list['data'] as $item) {
//            $data[] = [
//                'level' => $item['level'],
//                'parent_id' => $item['parent_id'],
//                'area_code' => $item['area_code'],
//                'name' => $item['name'],
//                'merger_name' => $item['merger_name'],
//                'lng' => $item['lng'],
//                'lat' => $item['lat'],
//                'city_id' => $item['id'],
//            ];
//        }
//        $res = SystemCity::insertAll($data);
//        return JsonService::successful(['count' => $res]);
    }


}