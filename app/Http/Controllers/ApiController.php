<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;

class ApiController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        try {
            $apiUrl = 'https://jsonplaceholder.typicode.com/posts';
            $apiData = json_decode(file_get_contents($apiUrl), true);
            foreach ($apiData as $postData) {
                Post::create([
                    'userId' => $postData['userId'],
                    'title' => $postData['title'],
                    'body' => $postData['body'],
                ]);
            }

            return response()->json([
                "done" => 'Success',
            ]);
        } catch (\Exception $e) {
            return response()->json([
                "error" => $e,
            ]);
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
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
