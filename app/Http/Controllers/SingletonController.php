<?php

namespace App\Http\Controllers;

use App\Singletons\Logger;
use Illuminate\Http\Request;

class SingletonController extends Controller
{
    public function singletonLog(){
        $logger = new Logger;
        $logger->dumpLog('Singleton Log Message');

        return 'Log Message Added';
    }
}
