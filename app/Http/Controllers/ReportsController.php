<?php

namespace App\Http\Controllers;

use App\Models\Reports;
use Illuminate\Http\Request;

class ReportsController extends Controller
{
    public function store(Request $request)
    {
        $user = $request->user();
        $data = $request->validate([
            'number_hours' => 'required',
            'date' => 'required|string',
            'description' => 'required|string'
        ]);

        $createReport = Reports::create([
            'user_id' => $user->id,
            'number_hours' => $data['number_hours'],
            'date' => $data['date'],
            'description' => $data['description']
        ]);

        return response()->json([
            'message' => 'success',
            'data' => $createReport
        ]);
    }
}
