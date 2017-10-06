$(document).ready(function() {
	 $('.readless').hide();
	 $('.hide').hide();
	 $('.paragraph').hide();

  
 });

function showmore(faq){
	var paragraphid = '#paragraph-'+faq
	// console.log(paragraphid) // >> this would be '#paragraph-1'
	var readlessid = '#less-'+faq
	var readmoreid = '#more-'+faq


    $(paragraphid).slideDown()
    $(readlessid).show()
    $(readmoreid).hide()
     
    event.preventDefault();
   }

   function showless(faq){
	var paragraphid = '#paragraph-'+faq
	var readlessid = '#less-'+faq
	var readmoreid = '#more-'+faq
    $(paragraphid).slideUp()
    $(readlessid).hide()
    $(readmoreid).show()
     
    event.preventDefault();
   }


   

$(document).ready(function(){

    $('form').submit(function(event){

        var firstName = $('#firstname').val();

        if (firstName === ""){
            alert(" Name must be filled out");
            event.preventDefault();
        }

        });

    $('form').submit(function(event){

        var email = $('#email').val();

        if (email === ""){
            alert("email must be filled out");
            event.preventDefault();
        }

        });

});