<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;
use App\Mail\WelcomeMail;
use Illuminate\Http\Request;
use App\Services\UserService;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;
use App\Http\Requests\UserRegistrationFormRequest;

class UserController extends Controller
{

    public $userService;
    
    public function __construct(UserService $userService){
        $this->userService = $userService;
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('registration');
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
    public function store(UserRegistrationFormRequest $request)
    {
      $data = $this->userService->createAndSaveUser($request->validated());

      Mail::to($user->email)->send(new WelcomeMail($user->name));

      if($data){
        Mail::to($user->email)->send(new WelcomeMail($user->name));

        Log::info('New User created: ' . $user->email  . ' at ' . now());

        $admins = User::activeAdmins()->get();




       // return redirect()->back()->with('success', 'User created successfully.');
      };
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
