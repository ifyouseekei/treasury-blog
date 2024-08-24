<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\BlogController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});


Route::get('/blogs/', [BlogController::class, 'list'])->name('blogs.list');
Route::get('/blog/{id}', [BlogController::class, 'view'])->name('blog.view');

Route::middleware('auth')->group(function () {
    Route::get('user/blog/{id}', [BlogController::class, 'edit'])->name('blog.edit');
    Route::patch('/blog/{id}', [BlogController::class, 'update'])->name('blog.update');
    Route::delete('/blog/{id}', [BlogController::class, 'destroy'])->name('blog.destroy');
});

require __DIR__ . '/auth.php';
