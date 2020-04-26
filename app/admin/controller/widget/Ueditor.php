<?php

namespace app\admin\controller\widget;

use crmeb\services\storage\COS;
use crmeb\services\storage\OSS;
use crmeb\services\storage\Qiniu;
use think\facade\Route as Url;
use app\admin\model\system\SystemAttachment as SystemAttachmentModel;
use app\admin\model\system\SystemAttachmentCategory as Category;
use app\admin\controller\AuthController;
use crmeb\services\UploadService as Upload;
use crmeb\services\JsonService as Json;
use crmeb\services\UtilService as Util;
use crmeb\services\FormBuilder as Form;

/**
 * TODO 附件控制器
 * Class Images
 * @package app\admin\controller\widget
 */
class Ueditor extends AuthController {

    public function api() {

        $action = $_REQUEST['action'];
        switch ($action) {
            case 'config':
                echo $this->getConfig();
                break;
            /* 上传文件 */
            case 'uploadimage':
                $this->upload();
                break;
            default:
                $result = json_encode(array(
                    'state' => '请求地址出错'
                ));
                break;
        }
    }

    public function getConfig() {
        $con = file_get_contents("./system/plug/ueditor/php/config.json");
        return preg_replace("/\/\*[\s\S]+?\*\//", "", $con);
    }

    /**
     * 图片管理上传图片
     * @return \think\response\Json
     */
    public function upload() {
        $pid = 1;
        $upload_type = $this->request->get('upload_type', 0);
        try {
            $path = make_path('attach');
                     //   $res = Upload::image('file',$path,true,true,null,'uniqid',$upload_type);
  $res = Upload::instance()->setUploadPath($path)->image('file');

            if (is_object($res) && $res->status === false) {
                $info = array(
                    'state' => 400,
                    'msg' => '上传失败：' . $res->error,
                    'url' => ''
                    
                );
            } else if (is_string($res)) {
                $info = array(
                    'code' => 400,
                    'msg' => '上传失败：' . $res,
                    'url' => ''
                   
                );
            } else if (is_array($res)) {
                $res['dir'] = str_replace('\\', '/', $res['dir']);
                $res['thumb_path'] = str_replace('\\', '/', $res['thumb_path']);
                SystemAttachmentModel::attachmentAdd($res['name'], $res['size'], $res['type'], $res['dir'], $res['thumb_path'], $pid, $res['image_type'], $res['time']);
                $info = array(
                    'state' => "SUCCESS",
                    'msg' => '上传成功',
                    'url' => $res['dir']
                    
                );
            }
        } catch (\Exception $e) {
            $info = [
                'code' => 400,
                'msg' => '上传失败：' . $e->getMessage(),
                'url' => ''
               
            ];
        }
        echo json_encode($info);
    }

}
