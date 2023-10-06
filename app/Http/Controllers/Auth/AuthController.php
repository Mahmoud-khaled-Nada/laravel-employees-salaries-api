<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\AuthRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;


class AuthController extends Controller
{
    public function createRegister(AuthRequest $request)
    {
        $data = $request->validated();
        $check = User::where('email', $data['email'])->first();
        if ($check) {
            return response()->json([
                'error' => 'This user has already been created',
            ], 201);
        }

        $user = User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => bcrypt($data['password']),
        ]);

        // Revoke all existing tokens for the user
        $user->tokens()->delete();

        // Create a new token with a 24-hour expiration
        $token = $user->createToken('main', ['expires_in' => 60 * 24])->plainTextToken;

        return response()->json([
            'user' => $user,
            'token' => $token,
        ], 201);
    }

    public function createLogin(AuthRequest $request)
    {
        $data = $request->validated();
        if (!Auth::attempt($data)) {
            return response()->json([
                'message' => 'Provided email or password is incorrect'
            ], 422);
        }

        $user = Auth::user();

        // Revoke all existing tokens for the user
        $user->tokens()->delete();

        // Create a new token with a 24-hour expiration
        $token = $user->createToken('main', ['expires_in' => 60 * 24])->plainTextToken;

        return response()->json([
            'user' => $user,
            'token' => $token,
        ], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
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
