<?php

namespace App\Services;

use App\Interfaces\TodoInterface;

class TodoService
{

    public $todoInterface;

    /**
     * Create a new class instance.
     */
    public function __construct(TodoInterface $todoInterface)
    {
        $this->todoInterface = $todoInterface;
    }

    /**
     * Function: getTodos.
     * Description: This fetch all todos.
     */
    public function getTodos(){
        return $this->todoInterface->getTodos();
    }

    public function saveTodo($request){

        # Organize Todo form Data
        $todo = $this->mapTodoFormData($request);

        #Save Todo
       return $this->todoInterface->saveTodo($todo);
    }

    public function mapTodoFormData($request){
        return [
            'title' => $request->title,
            'description' => $request->description,
        ];
    }
}
