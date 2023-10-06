<?php

use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\FingerprintDeviceController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::prefix('auth')->group(function () {
    Route::post('/register', [AuthController::class, 'createRegister']);
    Route::post('/login', [AuthController::class, 'createLogin']);
});


Route::middleware('auth:sanctum')->group(function () {
    Route::post('/fingerprint-device', [FingerprintDeviceController::class, 'createFingerprintDevice']);
});
Route::get('/fingerprint-device', [FingerprintDeviceController::class, 'getFingerprintDevice']);

Route::get('/calculateAttendance', [FingerprintDeviceController::class, 'calculateAttendance']);

