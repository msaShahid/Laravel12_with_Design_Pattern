<?php

namespace App\Singletons;

use Illuminate\Support\Facades\Log;

class Logger
{
    /**
     * Create a new class instance.
     */
    public function __construct()
    {
        //
    }

    public function dumpLog($message){
       $object_id = spl_object_id($this);
        Log::info("$message Object id : {$object_id}" );
    }
}
