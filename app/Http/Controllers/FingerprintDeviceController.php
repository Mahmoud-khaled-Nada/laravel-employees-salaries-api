<?php

namespace App\Http\Controllers;

use App\Models\FingerprintDevice;
use App\Http\Requests\StoreFingerprintDeviceRequest;
use App\Models\User;
use Carbon\Carbon;

class FingerprintDeviceController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function createFingerprintDevice(StoreFingerprintDeviceRequest $request)
    {
        $data = $request->validated();
        $user = $request->user();
        $startTime = $data['start_time'];
        $endTime = $data['end_time'];
        $done = $this->calculateAttendance($startTime, $endTime);
        $time = $done->original['time'];
        $status = $done->original['overtime']['status'];
        $total = $done->original['overtime']['total'];

        $fingTime = FingerprintDevice::create([
            'name' => $user->name,
            'user_id' => $user->id,
            'start_time' => $startTime,
            'end_time' => $endTime,
            'all_time' => $time,
            'status_time' => $status,
            'total_time' => $total,
        ]);

        return response()->json([
            'result' => $fingTime
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */

    public function getFingerprintDevice()
    {
        $getData = FingerprintDevice::orderByRaw('updated_at - created_at DESC')->get();
        return response()->json([
            'data' => $getData,
        ]);
    }

    private function calculateAttendance($startTime, $endTime)
    {
        $totalTime = $this->subtractTime($startTime, $endTime);
        $overtime = $this->subtractTime_two($totalTime, '08:00:00');

        return response()->json([
            'time' => $totalTime,
            'overtime' => $overtime,
        ], 201);
    }
    private function subtractTime($initialHour, $finalHour)
    {
        $initialTime = Carbon::createFromFormat('g:i:s a', $initialHour);
        $finalTime = Carbon::createFromFormat('g:i:s a', $finalHour);
        $diff = $finalTime->diff($initialTime);
        return $diff->format('%H:%I:%S');
    }
    private function subtractTime_two($initialHour, $finalHour)
    {
        $initialTime = Carbon::parse($initialHour);
        $finalTime = Carbon::parse($finalHour);
        if ($initialTime > $finalTime) {
            $initialTime->addDay();
            $status = 'increased';
        } else {
            $status = 'decrease';
        }
        $diff = $initialTime->diff($finalTime)->format('%H:%I:%S');
        $array = ['status' => $status, 'total' => $diff];

        return $array;
    }
}
