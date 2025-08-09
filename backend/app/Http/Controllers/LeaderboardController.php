<?php

namespace App\Http\Controllers;

use App\Models\Leaderboard;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Illuminate\Routing\Controllers\HasMiddleware;
use Illuminate\Routing\Controllers\Middleware;
use Illuminate\Support\Facades\Gate;


class LeaderboardController extends Controller implements HasMiddleware
{
    public static function middleware()
    {
      return [
        new Middleware('auth:sanctum', except: ['index', 'show']),
      ];
    }

    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $query = Leaderboard::query();

        // filter by single date (exact match)
        if ($request->has('date')) {
            $query->whereDate('created_at', Carbon::parse($request->date));
        }

        // filter by date range
       if ($request->has('start_date') && $request->has('end_date')) {
            $start = Carbon::parse($request->start_date)->startOfDay();
            $end = Carbon::parse($request->end_date)->endOfDay();

            $query->whereBetween('created_at', [$start, $end]);
        }
        return $query->get();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $fields = $request->validate([
            'description' => 'required|string|max:500',
            'totalValue' => 'required|numeric',
            'buttonText' => 'required|string|max:100',
            'monthlyRanking' => 'required|string|max:50',
        ]);

        $leaderboard =  $request->user()->leaderboard()->create($fields);

        return ['leaderboard' => $leaderboard];
    }

    /**
     * Display the specified resource.
     */
    public function show(Leaderboard $leaderboard)
    {
        return $leaderboard;
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Leaderboard $leaderboard)
    {
        Gate::authorize('modify', $leaderboard);

        $fields = $request->validate([
            'description' => 'required|string|max:500',
            'totalValue' => 'required|numeric',
            'buttonText' => 'required|string|max:100',
            'monthlyRanking' => 'required|string|max:50',
        ]);

        $leaderboard->update($fields);

        return ['leaderboard' => $leaderboard];
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Leaderboard $leaderboard)
    {
        Gate::authorize('modify', $leaderboard);

        $leaderboard->delete();

        return ['message' => 'Leaderboard deleted successfully'];
    }
}
