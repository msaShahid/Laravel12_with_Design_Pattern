<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TodoController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\GreetingController;
use App\Http\Controllers\SingletonController;
use App\Http\Controllers\Superadmin\SettingsController;
use App\Http\Controllers\Admin\UserManagementController;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');

    Route::resource('products', ProductController::class);

});

// Admin-only
Route::middleware(['auth', 'verified', 'role:admin,superadmin'])->prefix('admin')->name('admin.')->group(function () {
    Route::get('/user', [UserManagementController::class, 'index']);
});

// SuperAdmin-only
Route::middleware(['auth', 'verified', 'role:superadmin'])->prefix('superadmin')->name('superadmin.')->group(function () {
    Route::get('/settings', [SettingsController::class, 'index']);
});



Route::resource('todos',TodoController::class);
Route::resource('users', UserController::class);

Route::get('singleton', [SingletonController::class,'singletonLog']);

Route::get('greeting/{role}', [GreetingController::class,'showGreetings']);

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
