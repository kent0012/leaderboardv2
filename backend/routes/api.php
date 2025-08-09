<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LeaderboardController;
use App\Http\Controllers\AuthController;

Route::get('/', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


Route::apiResource('leaderboards', LeaderboardController::class);

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::post('/logout', [AuthController::class, 'logout'])->middleware('auth:sanctum');

