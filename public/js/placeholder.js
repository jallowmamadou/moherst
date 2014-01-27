(function($){
	// read a hover from input fields
	// read clicks
	// hover or active
		// hover show tooltip
		//active activate focus on input field
	// onchange then remove span text
	// 
 var Placeholder = {
 	init: function  (config) {
 		this.mainContainer = config.mainContainer;
 		this.events.click.call(this);
 		this.events.hover.call(this);
 		this.events.active.call(this);
 		this.events.keys.call(this);
 	},

 	events: {
 		click: function(){
 			var $this = this;
 			$this.mainContainer.find('input').on('click',$this.focusInput);
 			$this.mainContainer.find('select').on('click',$this.focusInput);
 			$this.mainContainer.find('.placeholder-text').on('click',$this.focusInput);
 		},
 		hover: function(){
 			var $this = this;
 			$this.mainContainer.find('input').on('mouseenter',$this.turnOnTooltip);
 			$this.mainContainer.find('select').on('mouseenter',$this.turnOnTooltip);
 		},
 		active: function(){
 			var $this = this;
      // $this.mainContainer.find('input').on('change',$this.hideSpan);
 			$this.mainContainer.find('input').on('change',function(){
        console.log(this)
      });
 		},
 		keys: function(){
  			var $this = this;
 			$this.mainContainer.find('input').on('keyup',$this.keychecker);
 			$this.mainContainer.find('select').on('keyup',$this.keychecker);
 		}
  	},
  	hideSpan: function(){
		$(this).prev('span.placeholder-text').slideUp(300);
  	},
  	focusInput: function(){
  		if ($(this).is('span')) {
  			$(this).css('top','-30px');
  			$(this).next('input').focus();
  		}else {
	  			$(this).prev('span.placeholder-text').css('top','-30px');
	  			// console.log(this)
  		}
  	},
  	turnOnTooltip: function(){  		
  		 $(this).tooltip();
  	},
  	keychecker: function(k){
  		if (k.keyCode == '9') {
	  		if ($(this).is('span')) {
	  			$(this).css('top','-30px');
	  			$(this).next('input').focus();
	  		}else if($(this).is('input')) {
		  			$(this).prev('span.placeholder-text').css('top','-30px');
		  			
	  		}
  		}else if (k.keyCode == '8'){
  			// console.log($(this).lenght)
  		}else if (k.keyCode == '37'){
  		}
  	}
 }

Placeholder.init({
	mainContainer: $('.entry-typing'),
	theWholeForm: $('#thewholeform'),
});
})(jQuery);