<?php

namespace App\Http\Controllers;

use App\Singletons\Logger;
use Illuminate\Http\Request;

class SingletonController extends Controller
{

    // protected $logger;
    // public function __construct(Logger $logger){
    //     $this->logger = $logger;
    // }

    public function singletonLog(){

        $log = Logger::getInstance();

        // $serialzedObj = serialize($log);
        // $unserialzedObj = unserialize($serialzedObj);
    

        // $logger = new Logger;
         $log->dumpLog('Singleton Log Message');

        // $loggerTwo = new Logger;
         $log->dumpLog('Singleton Log Message 2');

        return 'Log Message Added';
    }
}
