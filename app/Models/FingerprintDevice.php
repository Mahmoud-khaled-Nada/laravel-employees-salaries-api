<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FingerprintDevice extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'user_id',
        'start_time',
        'end_time',
        'all_time',
        'status_time',
        'total_time'
    ];
}
