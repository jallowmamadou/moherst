(function($){
var courseModal = {
		container : $('.course_modal'),
	init: function(config){
		var $this = this;
		var courseId = 0;
		config.tr.on('click',$this.getdata);
	},
	openloading: function(){
		$('.loading').show();
	},
	closeloading: function(){
		$('.loading').hide();
		   $('#myModal').modal();
		   courseModal.completed();
	},
	getdata: function(){
		var self = courseModal;
		if ( ($(this).data('mtype')) == 'course' ) {
			courseModal.courseId = $(this).data('rnum');
			courseModal.ajaxpull().then(function(e){
				self.addinfo.call(e);
			});
		}
	},
	ajaxpull: function(){
	var self = this;
	var dfd = new $.Deferred();
	$.ajax({
		url: '../../app/controllers/exchange.php',
		type: 'POST',
		data: {cid:courseModal.courseId},
		dataType: 'json',
		success: dfd.resolve,
		beforeSend: self.openloading,
		complete: self.closeloading,
		error: function(){
			// console.log(this);
		}
	});
	return dfd.promise();
	},
	completed: function(){
		if($("#modal").is("hidden")){
		var locat = window.location.href;
        window.location.replace(locat);
		}else{
			//console.log("not");
		}
	},
	addinfo: function(){
		var self = courseModal;
		var modalbox = self.container;
		var $this = this;
var $this =  this,
course_delete = modalbox.find('#deleting');
console.log(this);

modalbox.find('#courname').val($this['cour']['Cour_CourseLocalName']);
modalbox.find('#couryear').val($this['cour']['Cour_Year']);
modalbox.find('#enroll').val($this['cour']['Cour_EntryQualification']);
modalbox.find('#award').val($this['cour']['Cour_Award']);
modalbox.find('#fee').val('D '+$this['cour']['Cour_Tuition']);
modalbox.find('#status').val($this['cour']['Cour_Status']);
modalbox.find('#added').text($this['cour']['Cour_UpdatedDate']);
modalbox.find('#updated').text($this['cour']['Cour_AddDate']);
var delete_url_link = 'deleting.php?what=course&crs_id='+$this['cour']['Cour_CourseID']+'&lcid='+$this['cour']['Cour_LearningCenterID'];
course_delete.attr('href',delete_url_link);
// modalbox.find('#courname').val($this['cour']['Cour_CourseLocalName']);
// modalbox.find('#courname').val($this['cour']['Cour_CourseLocalName']);
// modalbox.find('#courname').val($this['cour']['Cour_CourseLocalName']);
// modalbox.find('#courId').val($this['cour']['Cour_CourseID']);
// console.log(modalbox.find('input#CourId').val($this['cour']['Cour_CourseID']));

// console.log($this['cour']['Cour_CourseID']);
modalbox.find('input#CourId').val($this['cour']['Cour_CourseID']);

						
	}

};
courseModal.init({
	tr: $('.onmodal')
});
})(jQuery);