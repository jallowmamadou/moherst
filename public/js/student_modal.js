(function($){
var studentModal = {
		container : $('.student_modal'),
	init: function(config){
		var $this = this;
		var studentId = 0;
		config.tr.on('click',$this.getdata);
	},
	openloading: function(){
		$('.loading').show();
	},
	closeloading: function(){
		$('.loading').hide();
		   $('#myModal').modal();
		   studentModal.completed();
		   // console.log(window.location)

	},
	getdata: function(){
		var self = studentModal;
		if ( ($(this).data('mtype')) == 'student' ) {
			studentModal.studentId = $(this).data('rnum');
			studentModal.ajaxpull().then(function(e){
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
		data: {pid:studentModal.studentId},
		dataType: 'json',
		success: dfd.resolve,
		beforeSend: self.openloading,
		complete: self.closeloading,
		error: function(e){
			console.log(e);
		}
	});
	return dfd.promise();
	},
	completed: function(){
		if($("#modal").is("hidden")){
		var locat = window.location.href;
// var loc = window.location.pathname;
// var dir = loc.substring(0, loc.lastIndexOf('/'));
// var url = window.location.origin +dir+"/"+"redirector.php?wget="+window.location.href;
        window.location.replace(locat);
        // console.log(window.location)
		}else{
			//console.log("not");
		}
	},
	addinfo: function(){
		var self = studentModal;
		var modalbox = self.container;
		var $this = this;
// console.log(this);
		var 
			student_status = modalbox.find('#action'),
			bDay = modalbox.find('#bday'),
			bMonth = modalbox.find('#bmonth'),
			bYear = modalbox.find('#byear'),
			student_enit = modalbox.find('#enit'),
			student_fname = modalbox.find('#firstName'),
			student_mname = modalbox.find('#middleName'),
			student_lname = modalbox.find('#lastName'),
			student_gender = modalbox.find('#gender'),
			student_nation = modalbox.find('#nation'),
			student_street = modalbox.find('#street'),
			student_town = modalbox.find('#town'),
			student_district = modalbox.find('#district'),
			student_region = modalbox.find('#region'),
			student_pobox = modalbox.find('#pobox'),
			student_email = modalbox.find('#email'),
			student_phone = modalbox.find('#phone'),
			student_delete = modalbox.find('#deleting'),
			class_details = modalbox.find('#class_details');

			var mname = ($this.std_record['Pers_MiddleName'] !== null )? $this.std_record['Pers_MiddleName'] : ' ';
			student_fname.val($this.std_record['Pers_FirstName']);
			student_mname.val(mname);
			student_lname.val($this.std_record['Pers_LastName']);
		// console.log(this)
			student_status.find('option').each(function(e,option){
				if($(option).text() === $this.std_record['Pers_Standing'] ){
					$(option).attr('selected','selected');
					$(student_status).prepend(option);

				}
			});

			student_gender.find('option').each(function(e,option){
				if($(option).text().toLowerCase() === $this.std_record['Pers_Gender'].toLowerCase() ){
					$(option).attr('selected','selected');
					$(student_gender).prepend(option);

				}
			});
			student_nation.find('option').each(function(e,option){
				if($(option).text() === $this.std_record['Pers_Nationality'] ){
					$(option).attr('selected','selected');
					$(student_nation).prepend(option);
				}
			});

			if ($this.std_record['Pers_Ethnicity'] != null) {
				student_enit.find('option').each(function(e,option){
				if($(option).text().toLowerCase() === $this.std_record['Pers_Ethnicity'].toLowerCase() ){
					$(option).attr('selected','selected');
					$(option).addClass('selected');
					 $(student_enit).prepend(option);
				}
			});
			};

			if (student_enit.find('option').is(".selected")) {

			}else{
				 $(student_enit).prepend('<option selected="selected" class="selected">'+$this.std_record['Pers_Ethnicity']+'</option>');
				// $('<option></option>', {
				// 	text: $this.std_record['Pers_Ethnicity'],
				// 	class: 'selected'
				// }).prependTo(student_enit);
			}
			// console.log($this.std_record);

                        if($this['sci_record'] !== null){
                                if($this['sci_record']['Cont_ContactType'] == 'Phone'){
                                        student_phone.val($this['sci_record']['Cont_Contact']);
                                }
                                if($this['sci_record']['Cont_ContactType'] == 'Email'){
                                        student_email.val($this['sci_record']['Cont_Contact']);
                                }				
                        }

                        if($this['sci_email'] !== null){
                                        if($this['sci_email']['Cont_ContactType'] == 'Email'){
                                        student_email.val($this['sci_email']['Cont_Contact']);
                                }
                        }
			if ($this.std_record['Pers_DOB'] != null) {
                            var studentDate = $this.std_record['Pers_DOB'].split(' ');

				if ((studentDate[0].match("/"))) {
				 
				var dobArray = studentDate[0].split("/");
				var year = dobArray[2];
				var month = dobArray[1];
				var day = dobArray[0];
				bDay.val(day);
				bMonth.val(month);
				bYear.val(year);
				console.log(day)
				console.log(dobArray)
			}else if(studentDate[0].match(":")){
				var dobArray = studentDate[0].split(":");
				var day = dobArray[2];
				var month = dobArray[1];
				var year = dobArray[0];
				bDay.val(day);
				bMonth.val(month);
				bYear.val(year);
			}else if(studentDate[0].match("-")){
                            
				var dobArray = studentDate[0].split("-");
				var day = dobArray[2];
				var month = dobArray[1];
				var year = dobArray[0];
				bDay.val(day);
				bMonth.val(month);
				bYear.val(year);
			}

			};


		modalbox.find('#persId').val($this.std_record['Pers_PersonID']);
										var delete_url_link = 'deleting.php?what=student&std_id='+$this.std_record['Pers_PersonID']+'&lcid='+$this.std_record['Pers_LearningCenterID']+'&what=student';
										profile_url_link = 'profile.php?pid='+$this.std_record['Pers_PersonID']+'&sid='+$this.std_record['Pers_LearningCenterID']+'&what=student',
										student_delete.attr('href',delete_url_link);
										// here we start to loop the student class
									if ( $this['class'] != null) {

										var content =  $this['class'];
										var template = $.trim( $('#classtemplate').html() );
										var spans = $(template).find('span');
										$.each( content, function( index, value ){
											var admit = value['Clas_AdmissionDate'].split(' ');
											var admdate = admit[0];
											var grat = value['Clas_GraduationDate'].split(' ');
											var gratdate = grat[0];
										var temp = template.replace( /{{number}}/ig, index+1 )
															.replace( /{{class_name}}/ig, value['Clas_LocalClassName'] )
															.replace( /{{class_date}}/ig, admdate )
															.replace( /{{class_status}}/ig, value['Clas_AttendanceStatus'] )
															.replace( /{{class_qualification}}/ig, value['Clas_EntryQualification'] )
															.replace( /{{class_award}}/ig, value['Clas_Award'] )
															.replace( /{{class_grad}}/ig, gratdate );
															$('#class_details').append($(temp));
										});


									};


	
										//				//looping student classes ends

	// GETTING STUDENTS ADDRESS

		if($this.std_address != null ){
	
				student_district.find('option').each(function(e,option){
				if($(option).text() === $this.std_address['Addr_District'] ){
					$(option).attr('selected','selected');
					$(student_district).prepend(option);

				}
			});

			student_region.find('option').each(function(e,option){
				if($(option).text() === $this.std_address['Addr_Region'] ){
					$(option).attr('selected','selected');
					$(student_region).prepend(option);

				}
			});

		$(student_street).val($this.std_address['Addr_AddressStreet']);
		$(student_town).val($this.std_address['Addr_Town']);
		$(student_pobox).val($this.std_address['Addr_POBox']);	
		$('#add_id').val($this.std_address['Addr_AddressID']);	

		}
	// GETTING STUDENTS ADDRESS STOPS
			$('#delete').attr('href',delete_url_link);	
			$('#profile').attr('href',profile_url_link);	
			// console.log(delete_url_link);

						
	}

};
studentModal.init({
	tr: $('.onmodal')
});
})(jQuery);