<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Contato;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        $contatos = Contato::all();
        return view('home', ['contatos' => $contatos]);
    }
    
}
