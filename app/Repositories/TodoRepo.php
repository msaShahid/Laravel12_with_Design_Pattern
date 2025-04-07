<?php

namespace App\Repositories;

use App\Interfaces\TodoInterface;

class TodoRepo implements TodoInterface
{
    /**
     * Create a new class instance.
     */
    public function __construct()
    {
        //
    }

    public function getTodos(){
        dd('Fetchin todos');

    }
}
