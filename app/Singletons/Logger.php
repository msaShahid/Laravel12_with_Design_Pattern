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
        Log::info($message);
    }
}
