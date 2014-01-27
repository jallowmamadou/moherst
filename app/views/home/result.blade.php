@extends('master')

@section('container')
	<h1>Here is your short url!</h1>
	{{ HTML::link($shortened,"http://localhost/url-shortener/public/$shortened") }}	
@stop
