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
        return Todo::latest()->get();
    }

    public function saveTodo($todoRequest){
        //dd(todoRequest);
       return Todo::create($todoRequest);
    }
}
