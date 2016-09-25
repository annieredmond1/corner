
$(document).ready(function() {
  console.log('sanity check');

  $("#createSupporterForm").submit(function(e) {
  	console.log('inside submit');
  	e.preventDefault();
  	console.log('form submitted');
    var formData = $(this).serialize();
    console.log("formData is: ", formData);
    $('#createSupporterForm')[0].reset();
    $.ajax({
      url: '/api/supporters',
      type: "POST",
      data: formData
    })
    .done(function(data) {
      console.log('supporter is: ', data);

      window.location.href = "/supporters";
    });
	});

	$(".media").on('click', function($index) {
		$('#detailsModal' + $index.currentTarget.id).modal('show');
	});

	$(".back-to-supporters").on('click', function() {
		window.location.href = "/supporters";
	});

	$(".contact-me-button").on('click', function() {
		console.log('clicked contact button');
		$('.profile-info').addClass('hidden');
		$('.contact-form').removeClass('hidden');
		$('.back-to-profile').removeClass('hidden');

	});

	$(".back-to-profile").on('click', function() {
		console.log('clicked back button');
		$('.profile-info').removeClass('hidden');
		$('.contact-form').addClass('hidden');
		$('.back-to-profile').addClass('hidden');
	});

});