<?php namespace Services\Validators;

class Login extends Validator
{
	
	public static $rules = [
		'username' => 'required',
		'password' => 'required'
	];
	// |unique:users,username
}