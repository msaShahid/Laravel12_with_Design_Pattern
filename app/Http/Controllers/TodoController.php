<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Services\TodoService;
use App\Http\Requests\TodoFormRequest;

class TodoController extends Controller
{

    public $todoService;
    
    public function __construct(TodoService $todoService){
        $this->todoService = $todoService;
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $todos = $this->todoService->getTodos();
        return Inertia::render('todo',[
            'todos' => $todos,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(TodoFormRequest $request)
    {
       $todo = $this->todoService->saveTodo($request);

        if ($todo) {
            return Inertia::render('todo', [
                'success' => 'Todo has been created',
            ]);
        } else {
            return Inertia::render('todo', [
                'error' => 'Unable to create todo',
            ]);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
