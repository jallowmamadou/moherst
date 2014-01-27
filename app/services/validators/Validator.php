<?php namespace Services\Validators;
abstract class Validator{

	protected $attributes;
	protected $errors;

	public function __construct($attributes = null){
		$this->attributes = $attributes ?: Input::all();
	}

	public function passes(){
		$Validation = \Validator::make($this->attributes, static::$rules);
		if ($Validation->passes()) return true;

		$this->errors = $Validation->messages();
	}
}