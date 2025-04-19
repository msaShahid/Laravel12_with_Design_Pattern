<?php

namespace App\Singletons;

use Illuminate\Support\Facades\Log;

class Logger
{

    private static $instance = null;

    private function __construct(){
        
    }

    public static function getInstance(){
        if (self::$instance === null) {
            self::$instance = new self();
        }
        return self::$instance;
    }

    public function dumpLog($message){
       $object_id = spl_object_id($this);
        Log::info("$message Object id : {$object_id}" );
    }
}
