(function($){
var staffModal = {
		container : $('.staff_modal'),
	init: function(config){
		var $this = this;
		var staffId = 0;
		config.tr.on('click',$this.getdata);
	},
	openloading: function(){
		$('.loading').show();
	},
	closeloading: function(){
		$('.loading').hide();
		   $('#myModal').modal();
		   // console.log($('#myModal'));
		   staffModal.completed();
	},
	getdata: function(){
		var self = staffModal;
		if ( ($(this).data('mtype')) == 'staff' ) {
			staffModal.staffId = $(this).data('rnum');
			staffModal.ajaxpull().then(function(e){
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
		data: {stff:staffModal.staffId},
		dataType: 'json',
		success: dfd.resolve,
		beforeSend: self.openloading,
		complete: self.closeloading,
		error: function(e){
			// console.log(e.['responseText']); //dfd.resolve,
		}
	});
	return dfd.promise();
	},
	completed: function(){
		// console.log(this)
		if($("#modal").is("hidden")){
		var locat = window.location.href;
		// console.log(locat)
		     window.location.replace(locat);

		}else{
			// console.log(this);
		}
	},
	addinfo: function(){
		var self = staffModal;
		var modalbox = self.container;
		var $this = this;
// console.log(this);
		var 
			staff_status = modalbox.find('#action'),
			bDay = modalbox.find('#bday'),
			bMonth = modalbox.find('#bmonth'),
			bYear = modalbox.find('#byear'),
			staff_enit = modalbox.find('#enit'),
			staff_fname = modalbox.find('#firstName'),
			staff_mname = modalbox.find('#middleName'),
			staff_lname = modalbox.find('#lastName'),
			staff_gender = modalbox.find('#gender'),
			staff_nation = modalbox.find('#nation'),
			staff_street = modalbox.find('#street'),
			staff_town = modalbox.find('#town'),
			staff_district = modalbox.find('#district'),
			staff_region = modalbox.find('#region'),
			staff_pobox = modalbox.find('#pobox'),
			staff_email = modalbox.find('#email'),
			staff_phone = modalbox.find('#phone'),
			staff_delete = modalbox.find('#deleting');
			console.log(bMonth)
			var mname = ($this.staff['Pers_MiddleName'] !== null )? $this.staff['Pers_MiddleName'] : ' ';
			staff_fname.val($this.staff['Pers_FirstName']);
			staff_mname.val(mname);
			staff_lname.val($this.staff['Pers_LastName']);
		// 	staff_status.find('option').each(function(e,option){
		// 		if($(option).text() === $this.staff['Pers_Standing'] ){
		// 			$(option).attr('selected','selected');
		// 			$(staff_status).prepend(option);

		// 		}
		// 	});

			staff_gender.find('option').each(function(e,option){
				if($(option).text().toLowerCase() === $this.staff['Pers_Gender'].toLowerCase() ){
					$(option).attr('selected','selected');
					$(staff_gender).prepend(option);

				}
			});
			staff_nation.find('option').each(function(e,option){
				if($(option).text() === $this.staff['Pers_Nationality'] ){
					$(option).attr('selected','selected');
					$(staff_nation).prepend(option);
				}
			});

			if ($this.staff['Pers_Ethnicity'] != null) {
				staff_enit.find('option').each(function(e,option){
				if($(option).text().toLowerCase() === $this.staff['Pers_Ethnicity'].toLowerCase() ){
					$(option).attr('selected','selected');
					$(option).addClass('selected');
					 $(staff_enit).prepend(option);
				}
			});
			};

			if (staff_enit.find('option').is(".selected")) {

			}else{
				 $(staff_enit).prepend('<option selected="selected" class="selected">'+$this.staff['Pers_Ethnicity']+'</option>');
				// $('<option></option>', {
				// 	text: $this.staff['Pers_Ethnicity'],
				// 	class: 'selected'
				// }).prependTo(staff_enit);
			}

 //                        if($this['sci_record'] !== null){
 //                                if($this['sci_record']['Cont_ContactType'] == 'Phone'){
 //                                        staff_phone.val($this['sci_record']['Cont_Contact']);
 //                                }
 //                                if($this['sci_record']['Cont_ContactType'] == 'Email'){
 //                                        staff_email.val($this['sci_record']['Cont_Contact']);
 //                                }				
 //                        }

 //                        if($this['sci_email'] !== null){
 //                                        if($this['sci_email']['Cont_ContactType'] == 'Email'){
 //                                        staff_email.val($this['sci_email']['Cont_Contact']);
 //                                }
 //                        }
			if ($this.staff['Pers_DOB'] != null) {
                var staffDate = $this.staff['Pers_DOB'].split(' ');
				if ((staffDate[0].match("/"))) {
				
				var dobArray = staffDate[0].split("/");
				var day = dobArray[2];
				var month = dobArray[1];
				var year = dobArray[0];
				bDay.val(month);
				bMonth.val(year);
				bYear.val(day);
			}else if(staffDate[0].match(":")){
				var dobArray = staffDate[0].split(":");
				var day = dobArray[2];
				var month = dobArray[1];
				var year = dobArray[0];
				bDay.val(month);
				bMonth.val(year);
				bYear.val(day);

			}else if(staffDate[0].match("-")){
                            
				var dobArray = staffDate[0].split("-");
				var day = dobArray[2];
				var month = dobArray[1];
				var year = dobArray[0];
				bDay.val(month);
				bMonth.val(year);
				bYear.val(day);
			}

			};


		modalbox.find('#persId').val($this.staff['Pers_PersonID']);
										var delete_url_link = 'deleting.php?what=staff&std_id='+$this.staff['Pers_PersonID']+'&lcid='+$this.staff['Pers_LearningCenterID'];
										profile_url_link = 'profile.php?pid='+$this.staff['Pers_PersonID']+'&sid='+$this.staff['Pers_LearningCenterID'],
										staff_delete.attr('href',delete_url_link);


	// // GETTING staffS ADDRESS

		if($this.stff_address!= null ){
	
				staff_district.find('option').each(function(e,option){
				if($(option).text() === $this.stff_address['Addr_District'] ){
					$(option).attr('selected','selected');
					$(staff_district).prepend(option);

				}
			});

			staff_region.find('option').each(function(e,option){
				if($(option).text() === $this.stff_address['Addr_Region'] ){
					$(option).attr('selected','selected');
					$(staff_region).prepend(option);

				}
			});

		$(staff_street).val($this.stff_address['Addr_AddressStreet']);
		$(staff_town).val($this.stff_address['Addr_Town']);
		$(staff_pobox).val($this.stff_address['Addr_POBox']);	
		$('#add_id').val($this.stff_address['Addr_AddressID']);	

		}


if($this['staff_info'] !== null){



 if ($this['staff_info']['Staff_HireDate'] != '0000-00-00 00:00:00') {
 	modalbox.find('#edate').attr('type','text');
 	  modalbox.find('#edate').val($this['staff_info']['Staff_HireDate']);
 }else{
 	 modalbox.find('#edate').attr('type','date');
 }

if ($this['staff_info']['Staff_Rank'] != null) {
	 modalbox.find('#rank').val($this['staff_info']['Staff_Rank']);
};
if ($this['staff_info']['Staff_EmploymentType'] != null) {
	modalbox.find('#type').val($this['staff_info']['Staff_EmploymentType']);
};
if ($this['staff_info']['Staff_Role'] != null) {
	 modalbox.find('#role').val($this['staff_info']['Staff_Role']);
};
if ($this['staff_info']['Staff_Status'] != null) {
	modalbox.find('#status').find('option').each(function(e,option){
	if($(option).text() === $this['staff_info']['Staff_Status'] ){
		$(option).attr('selected','selected');
		$(staff_status).prepend(option);

			}
		});
};
if ($this['staff_info']['Staff_HighestQualification'] != null) {
	modalbox.find('#hquali').find('option').each(function(e,option){
	if($(option).text() === $this['staff_info']['Staff_HighestQualification'] ){
		$(option).attr('selected','selected');
		$(staff_status).prepend(option);

			}
		});

};
if ($this['staff_info']['Staff_OtherQualification'] != null) {
	modalbox.find('#oqulifi').val($this['staff_info']['Staff_OtherQualification']);
};
if ($this['staff_info']['Staff_MainLevelTeaching'] != null) {
	modalbox.find('#level').find('option').each(function(e,option){
	if($(option).text() === $this['staff_info']['Staff_MainLevelTeaching'] ){
		$(option).attr('selected','selected');
		$(staff_status).prepend(option);

			}
		});
};
if ($this['staff_info']['Staff_Year'] != null) {
	modalbox.find('#year').val($this['staff_info']['Staff_Year']);
};
if ($this['staff_info']['Staff_HireDate'] != null) {
	
};
// 
//
// 
// 
// 
//
// 
modalbox.find('#staffId').val($this['staff_info']['Staff_StaffID']);
modalbox.find('#personId').val($this['staff']['Pers_PersonID']);	
// var testing = ($.trim(modalbox.find('#rank').val())) ? 'emtpy' : 'ready' ;
// console.log($.trim(modalbox.find('#rank')).length);
// console.log('something');


}




	// // GETTING staffS ADDRESS STOPS
			$('#delete').attr('href',delete_url_link);	
			$('#profile').attr('href',profile_url_link);	
	// 		// console.log(delete_url_link);

						
	}

};
staffModal.init({
	tr: $('.onmodal')
});
})(jQuery);