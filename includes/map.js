
$(document).ready(function() {

  //Show and hide dots based on selected option
  $("#map-form").change(function() {
    var selectedContinent = $("#map-form option:selected").val();

    if(selectedContinent == 'ALL') {
      $('.dot').show(1000);
    } else {
      $('.dot[continent*='+selectedContinent+']').show(1000);
      $('.dot[continent!='+selectedContinent+']').hide(1000);
    };
  });
  
  $('.dot').click(function() {
    //select the cities by using the selected class
    $('.dot').removeClass('selected');
    $(this).addClass('selected');

    //store the city attr in a var
    var city = $('.city-detail#'+$(this).attr('city'));
    var htmlCode = $(city).html();

    $('.detail-container').fadeOut(500, function() {
      $('.detail-container .city-detail').html(htmlCode);
      $(this).fadeIn(500);
    })
  });

});
