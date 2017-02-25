
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

});
