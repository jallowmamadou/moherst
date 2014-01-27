(function($){
	// HIDDING THE NAVIGATION BELOW
	$('nav.addnav').hide();
// get add and edit drop downs
 var GettingAddEdit = {
 	init: function(config){
 		var self = this;
 		this.container = config['Container'];
 		this.buttons = $(this.container).find('button');
 		this.uls = $(this.container).find('ul');
 		$(this.container).show();
 		 this.buttons.on('click',this.action);
 	},
 	action: function(){
 		var $this = $(this),
 			self =  GettingAddEdit,
 			ul = $this.siblings('ul');
 			ul.slideDown(200);
 			ul.parent().siblings('div').find('ul.droplist').hide();
 			$('html').click(function(){
 				self.uls.slideUp(200);
			});
			$('#setadd').click(function(e){
			e.stopPropagation();
			});
 	}
 };

// here initialising al function and objects
/*obj 1*/ GettingAddEdit.init({
	Container: 'div#setadd',
});
})(jQuery);

(function($){
function Table( details ) {
this.details = details;
this.table = this.details.table;
this.thead = this.table.children('thead');
this.tbody = this.table.children('tbody');
this.tr = this.table.children('tbody').children('tr');
this.landing = details.detailbox;
this.modalbox = this.landing.find('#modalzone');
this.courseTable = this.details.courseTable;
this.cttbody = this.courseTable.find('tbody');
this.ctthead = this.courseTable.find('thead');
this.cttr = this.cttbody.find('tr');
this.stafftable = this.details.stafftable;
this.sttr = this.stafftable.children('tbody').find('tr');
this.bindevents.click.call(this);
}
Table.prototype.bindevents = {
	click : function(){
		var $this = this;
		$this.tr.on('click',$this.getdata);
		$this.cttr.on('click',$this.getdata);
		$this.sttr.on('click',$this.getdata);
		$("input[type='checkbox']").on('click',function(){
			$(this)
				.siblings("input[type='checkbox']")
				.removeAttr('checked')
				.end()
				.attr('checked','checked');
		});
	}
};
Table.prototype.getdata = function(){
	var tbody = $(this).parent().data('tbtype');
	
	if( tbody == 'students'){
		var $this = $(this),
		personId = $this.data('rnum');	
		table.stdexch(personId).then(function(e){
			table.addstddata.call(e);

		},function(){
			console.log('error');
		},function(){
			console.log('loading');
		});
	}else if(tbody == 'courses'){
		var $this = $(this),
		id = $this.data('cid');	
		table.crsexch(id).then(function(e){
			table.addcrsdata.call(e);
		});
	}else if(tbody == 'staff'){
		var $this = $(this),
		id = $this.data('pid');	
		table.stfexch(id).then(function(e){
			table.addstfdata.call(e);
		});
	}		
};
Table.prototype.stdexch = function( id ){
	var self = this;
	// console.log(self);
	var dfd = new $.Deferred();
	$.ajax({
		url: 'ajax/processor.php',
		type: 'POST',
		data: {pid:id},
		dataType: 'json',
		success: dfd.resolve,
		beforeSend: self.loading,
		complete: self.completed
	});
	return dfd.promise();
};
Table.prototype.crsexch = function( id ){
	var self = this;
	var dfd = new $.Deferred();
	$.ajax({
		url: 'ajax/processor.php',
		type: 'POST',
		data: {cid:id},
		dataType: 'json',
		success: dfd.resolve,
		beforeSend: self.loading,
		complete: self.completed
	});
	return dfd.promise();
};
Table.prototype.stfexch = function( id ){
	var self = this;
	var dfd = new $.Deferred();
	$.ajax({
		url: 'ajax/processor.php',
		type: 'POST',
		data: {stff:id},
		dataType: 'json',
		success: dfd.resolve,
		beforeSend: self.loading,
		complete: self.completed
	});
	return dfd.promise();
};
Table.prototype.loading = function(){
};
Table.prototype.completed = function(){
	table.modal.init(table.landing);
};
Table.prototype.addstddata = function(){
	console.log(this);
	var self = table,
		$this = this,
		modalbox = self.modalbox,		 
		student_status = modalbox.find('#action'),
		student_gender = modalbox.find('#gender'),
		student_nation = modalbox.find('#nation'),
		student_street = modalbox.find('#street'),
		student_town = modalbox.find('#town'),
		student_region = modalbox.find('#region'),
		student_pobox = modalbox.find('#pobox'),
		student_email = modalbox.find('#email'),
		student_phone = modalbox.find('#phone'),
		student_delete = modalbox.find('#deleting'),
		class_details = modalbox.find('#class_details');
		var mname = ($this.std_record['Pers_MiddleName'] !== null )? $this.std_record['Pers_MiddleName'] : ' ';
		modalbox.find('#stdname').val($this.std_record['Pers_FirstName']+' ' + mname + ' '+$this.std_record['Pers_LastName']);
		student_status.find('option').each(function(e,option){
			if($(option).text() === $this.std_record['Pers_Standing'] ){
				$(option).attr('selected','selected');
			}
		});
		student_nation.find('option').each(function(e,option){
			if($(option).text() === $this.std_record['Pers_Nationality'] ){
				$(option).attr('selected','selected');
			}
		});
if($this['sci_record'] !== null){
	if($this['sci_record']['Cont_ContactType'] == 'Phone'){
		student_phone.val($this['sci_record']['Cont_Contact']);
	}
	// if($this['sci_record']['Cont_ContactType'] == 'Email'){
	// 	student_email.val($this['sci_record']['Cont_Contact']);
	// }

	
}
if($this['sci_email'] !== null){
		if($this['sci_email']['Cont_ContactType'] == 'Email'){
		student_email.val($this['sci_email']['Cont_Contact']);
	}
}
		modalbox.find('#bday').val($this.std_record['Pers_DOB']);
		modalbox.find('#sponsor').val('N/A');
		modalbox.find('#enit').val($this.std_record['Pers_Ethnicity']);
		// modalbox.find('#persId').val($this.std_record['Pers_Ethnicity']);
		var delete_url_link = 'deleting.php?what=student&std_id='+$this.std_record['Pers_PersonID']+'&lcid='+$this.std_record['Pers_LearningCenterID'];
		student_delete.attr('href',delete_url_link);
//				// here we start to loop the student class
var content =  $this['class'];
var template = $.trim( $('#classtemplate').html() );
var spans = $(template).find('span');
$.each( content, function( index, value ){
var temp = template.replace( /{{class_name}}/ig, value['Clas_LocalClassName'] )
					.replace( /{{class_date}}/ig, value['Clas_AdmissionDate'] )
					.replace( /{{class_award}}/ig, value['Clas_AttendanceStatus'] )
					.replace( /{{class_programme}}/ig, value['Clas_Course'] )
					.replace( /{{class_entry}}/ig, value['Clas_EntryQualification'] );
					$('#class_details').append($(temp));
});

//				//looping student classes ends
// GETTING STUDENTS ADDRESS
// $this.std_address['Addr_AddressStreet']
// console.log($this.std_address);
if($this.std_address !== null){
$(student_street).val($this.std_address['Addr_AddressStreet']);
$(student_town).val($this.std_address['Addr_Town']);
$(student_region).val($this.std_address['Addr_Region']);
$(student_pobox).val($this.std_address['Addr_POBox']);	
}

// GETTING STUDENTS ADDRESS STOPS
		modalbox.find('#persId').val($this.std_record['Pers_PersonID']);
		student_gender.find('input').each(function(ind,opt){
			if($(opt).attr('value') === $this.std_record['Pers_Gender']){
				$(opt)
					.siblings('input')
					.removeAttr('checked')
					.end()
					.attr('checked','checked');
			}			
		});
};
Table.prototype.addcrsdata = function(){
var $this =  this,
course_delete = table.modalbox.find('#deleting');
console.log(this);

table.modalbox.find('#courname').val($this['cour']['Cour_CourseLocalName']);
table.modalbox.find('#couryear').val($this['cour']['Cour_Year']);
table.modalbox.find('#enroll').val($this['cour']['Cour_EntryQualification']);
table.modalbox.find('#award').val($this['cour']['Cour_Award']);
table.modalbox.find('#fee').val('D '+$this['cour']['Cour_Tuition']);
table.modalbox.find('#status').val($this['cour']['Cour_Status']);
table.modalbox.find('#added').text($this['cour']['Cour_UpdatedDate']);
table.modalbox.find('#updated').text($this['cour']['Cour_AddDate']);
var delete_url_link = 'deleting.php?what=course&crs_id='+$this['cour']['Cour_CourseID']+'&lcid='+$this['cour']['Cour_LearningCenterID'];
course_delete.attr('href',delete_url_link);
// table.modalbox.find('#courname').val($this['cour']['Cour_CourseLocalName']);
// table.modalbox.find('#courname').val($this['cour']['Cour_CourseLocalName']);
// table.modalbox.find('#courname').val($this['cour']['Cour_CourseLocalName']);
// table.modalbox.find('#courId').val($this['cour']['Cour_CourseID']);
// console.log(table.modalbox.find('input#CourId').val($this['cour']['Cour_CourseID']));

// console.log($this['cour']['Cour_CourseID']);
table.modalbox.find('input#CourId').val($this['cour']['Cour_CourseID']);
};
Table.prototype.addstfdata = function(){
console.log(this);
var $this =  this,
	self = table,
	modalbox = self.modalbox;
var mname = ($this.staff['Pers_MiddleName'] !== null )? $this.staff['Pers_MiddleName'] : ' ';
modalbox.find('#sffname').val($this['staff']['Cour_CourseLocalName']);
modalbox.find('#sffname').val($this.staff['Pers_FirstName'] + ' ' + mname + ' '+ $this.staff['Pers_LastName']);
modalbox.find('#action').find('option').each(function(ind,opt){
	if($(opt).text() == $this.staff['Pers_Standing']){
		$(opt)
			.siblings()
			.removeAttr('selected')
			.end()
			.attr('selected','selected');
	}
});
// gender below
modalbox.find('#gender').find('input').each(function(ind,opt){
			if($(opt).attr('value') === $this.staff['Pers_Gender']){
				$(opt)
					.siblings('input')
					.removeAttr('checked')
					.end()
					.attr('checked','checked');
			}			
		});
modalbox.find('#enit').val($this.staff['Pers_Ethnicity']);
// modalbox.find('#action').val($this.staff['Pers_Standing']);
		var staff_street = modalbox.find('#street'),
		staff_town = modalbox.find('#town'),
		staff_region = modalbox.find('#region'),
		staff_pobox = modalbox.find('#pobox'),
		staff_email = modalbox.find('#email'),
		staff_phone = modalbox.find('#phone');
		// console.log();
if($this.stff_address !== null){
$(staff_street).val($this.stff_address['Addr_AddressStreet']);
$(staff_town).val($this.stff_address['Addr_Town']);
$(staff_region).val($this.stff_address['Addr_Region']);
$(staff_pobox).val($this.stff_address['Addr_POBox']);	
}
// console.log($this['stff_contact']['Cont_Contact']);
if($this['stff_contact'] !== null){
	if($this['stff_contact']['Cont_ContactType'] == 'Phone'){
		staff_phone.val($this['stff_contact']['Cont_Contact']);
	}
	// if($this['sci_record']['Cont_ContactType'] == 'Email'){
	// 	student_email.val($this['sci_record']['Cont_Contact']);
	// }

	
}
if($this['stff_email'] !== null){
		if($this['stff_email']['Cont_ContactType'] == 'Email'){
		staff_email.val($this['stff_email']['Cont_Contact']);
	}
}
modalbox.find('#bday').val($this.staff['Pers_DOB']);
modalbox.find('#nation').find('option').each(function(e,option){
			if($(option).text() === $this.staff['Pers_Nationality'] ){
				$(option).attr('selected','selected');
			}
		});
// console.log($this['staff']['Pers_PersonID']);
modalbox.find('#personId').val($this['staff']['Pers_PersonID']);
if($this['staff_info'] !== null){


 modalbox.find('#rank').val($this['staff_info']['Staff_Rank']);
modalbox.find('#role').val($this['staff_info']['Staff_Role']);
modalbox.find('#status').val($this['staff_info']['Staff_Status']);
modalbox.find('#field').val($this['staff_info']['Staff_MainFieldTeaching']);
modalbox.find('#hdate').val($this['staff_info']['Staff_HireDate']);
modalbox.find('#qualifi').val($this['staff_info']['Staff_HighestQualification']);
modalbox.find('#level').val($this['staff_info']['Staff_MainLevelTeaching']);
modalbox.find('#type').val($this['staff_info']['Staff_EmploymentType']);
modalbox.find('#staffId').val($this['staff_info']['Staff_StaffID']);
// modalbox.find('#personId').val($this['staff']['Pers_PersonID']);	
// var testing = ($.trim(modalbox.find('#rank').val())) ? 'emtpy' : 'ready' ;
// console.log($.trim(modalbox.find('#rank')).length);
// console.log('something');


}

// console.log($this['staff_info']);

// modalbox.find('#personId).val($this['staff']['Pers_PersonID']);
// modalbox.find('#rank').val($this['staff_info']['Staff_Rank']);
// table.modalbox.find('#courname').val($this['cour']['Cour_CourseLocalName']);
// modalbox.find('#sffname').val($this.staff['Pers_FirstName'] + ' ' + mname + ' '+ $this.staff['Pers_LastName']);
// modalbox.find('#sffname').val($this.staff['Pers_FirstName'] + ' ' + mname + ' '+ $this.staff['Pers_LastName']);
};
Table.prototype.modal= {
    init: function(config){
        this.landing = config;
        this.xicon = $(this.landing).find('b#close');
        var $this = table.modal;
        $this.addOverlay();
        // console.log($this);
        $this.bindEvents();
    },
    bindEvents: function(){
	$(this.xicon).on('click',this.quit);
	$('div.overlay').on('click',this.quit);
	$(document).on('keydown',function(e){
           if(e.which == 27){
            table.modal.quit();
           }
        });
    },

    show: function(){
    	$(this.landing).fadeIn(300);
    },
    addOverlay: function(){
    	$('body').css('postion:relative');
        $("<div class='overlay transparency'></div>").appendTo(document.body);     
        table.modal.show();
    },
    quit: function(){
        $(table.modal.landing).fadeOut();
        table.modal.removeOverlay();
        // reload the page here
        var locat = window.location.href;
        window.location.replace(locat);
        // console.log(window.location.href);
    },
    removeOverlay: function(){
         $('div.overlay').detach();
    },
}
var table = new Table({
	table : $('table.pupinfo'),
	detailbox : $('#landing'),
	courseTable : $('#courseTable'),
	stafftable : $('#stafftable')
});
})(jQuery);