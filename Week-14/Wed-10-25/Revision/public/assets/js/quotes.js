// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {

  // jQuery event handlers should go here.
  $('.delquote').on('click',function(event) {
  	var theId = $(this).data('id');
  	$.ajax({
  		url: '/'+theId,
  		method: 'DELETE',
  	})
  	.done(function(dt) {
  		location.reload();
  	})
  	.fail(function(e) {
  		alert(e);
  	});
  });

  $('.create-form').on('submit',function(event) {
  	event.preventDefault();
  	var quo = $('#quo').val().trim();
  	var auth = $('#auth').val().trim();
  	$.ajax({
  		url:'/',
  		method:'POST',
  		data: {author:auth,quote:quo}
  	})
  	.done(function(dt) {
  		alert("created id:"+dt.id);
  		location.reload();
  	})
  	.fail(function(e) {
  		// body...
  	});
  });

  $('.update-form').on('submit',function(event) {
  	event.preventDefault();
  	var theId = $(this).data('id');
  	var quo = $('#quo').val().trim();
  	var auth = $('#auth').val().trim();
  	$.ajax({
  		url:'/'+theId,
  		method:'PUT',
  		data: {author:auth,quote:quo}
  	})
  	.done(function(dt) {
  		//alert("created id:"+dt.id);
  		location.assign('/');
  	})
  	.fail(function(e) {
  		// body...
  	});
  });

});
