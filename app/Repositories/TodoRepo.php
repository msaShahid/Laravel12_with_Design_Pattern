<?php

namespace App\Repositories;

use App\Models\Todo;
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
        return Todo::all();

    }

    public function saveTodo($request){
        dd($request->all());
    }
}
