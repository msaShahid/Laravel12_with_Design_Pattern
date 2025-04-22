<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;
use App\Mail\WelcomeMail;
use Illuminate\Http\Request;
use App\Services\UserService;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;
use App\Notifications\NewUserNotification;
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
      $user = $this->userService->createAndSaveUser($request->validated());

      if($user){

        // Send Welcome Mail to new user
        Mail::to($user->email)->send(new WelcomeMail($user->name));

        // Log user creation
        Log::info('New User created: ' . $user->email  . ' at ' . now());

        // Notify admins
        $admins = User::activeAdmins()->get();
        Notification::send($admins, new NewUserNotification($user));

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
