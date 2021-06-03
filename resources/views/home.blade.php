@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            @foreach ($contatos as $contato)
                <div class="card mt-5">
                    <div class="card-header">Registrado às {{ date('H:m\h \d\e d-m-Y', strtotime($contato->created_at)) }}</div>
                    <div class="card-body">
                        <p><strong>Nome:</strong> {{$contato->name}}</p>
                        <p><strong>Telefone:</strong> {{$contato->phone}}</p>
                        <p><strong>Email:</strong> {{$contato->email}}</p>
                        <p><strong>Mensagem:</strong> {{$contato->message}}</p>
                    </div>
                </div>
            @endforeach
        </div>
    </div>
</div>
@endsection
