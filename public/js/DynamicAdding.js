function DynamicAdding(MainDiv,MainForm,Seen,FHidden){
	this.maindiv =  MainDiv;
	this.mainform = MainForm;
	this.seen = Seen;
	this.hidden = FHidden;
	this.bindEvents.click.call(this);
	this.bindEvents.submit.call(this);
	// the button clicked / submited
	//takes the data from the button and disable it
	// look for the connent for that button
	// replace the form zone with the button content
	// submit the form data by ajax
	// return the data and remove the button

}

DynamicAdding.prototype.bindEvents ={
		click: function(){
			var $this = this;
			$(this.mainform).find('button').on('click',function(){
				var id = "#"+$(this).data('id'),
					hdiv = $($this.hidden).find(id),
					actdiv = $($this.hidden).find(hdiv),
					inputzonediv = $($this.seen).find('.inputzone').children(),
					inputzone =$($this.seen).find('.inputzone');
					$(this)
							.text('loading.....')
							.addClass('btn-warning')
							.attr('disabled','disabled');
			$(inputzonediv).hide();
			$(actdiv).appendTo(inputzone);
			$(this).hide();
			});
		},
		submit: function(){
			var $this = this;
			// console.log($(this.mainform).find('button'));
			$(this.mainform).on('submit',$this.workwith);
		}
};
DynamicAdding.prototype.workwith = function(e){
	var self = $(this);
	e.preventDefault();
	// $.ajax({
	// 	url: '../controllers/exchange.php',
	// 	type: 'POST',
	// 	data: self.serialize(),
	// });
console.log(self.serialize())
}
DynamicAdding.prototype.switchContent = function(){

};
DynamicAdding.prototype.changePageTitle = function(){

};
DynamicAdding.prototype.changeBreadcrums = function(){

};


