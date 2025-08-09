<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Leaderboard extends Model
{
    /** @use HasFactory<\Database\Factories\LeaderboardFactory> */
    use HasFactory;

    protected $fillable = [
        'description',
        'totalValue',
        'buttonText',
        'monthlyRanking',
    ];

    public function user() {
        return $this->belonsgsTo(User::class);
    }
}


// id: number;
//     vendorName: string;
//     description: string;
//     totalValue: number;
//     buttonText: string;
//     monthlyRanking: string;
//     created_at: string;
//     updated_at: string;
