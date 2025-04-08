<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Interfaces\TodoInterface;

class TodoController extends Controller
{

    public $todoInterface;
    
    public function __construct(TodoInterface $todoInterface){
        $this->todoInterface = $todoInterface;
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $todos = $this->todoInterface->getTodos();
        return Inertia::render('todo');
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
    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required',
            'description' => 'required',
        ]);
        $this->todoInterface->saveTodo($request);
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
