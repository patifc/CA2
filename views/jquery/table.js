function draw_table(){ ///////////This code is from https://github.com/mikhail-cct/CA1-In-class-Demo mikhail-cct
    $("#results").empty();
    $.getJSONuncached = function(url) {
        return $.ajax({
            url: url,
            type: 'GET',
            cache: false,
            success: function(html) {
                $("#results").append(html);
                select_row();
               
            }
        });
    };

    $.getJSONuncached("/get/html")
};

function select_row()
{
	$("#results tbody tr[id]").click(function ()
	{
		$(".selected").removeClass("selected");
		$(this).addClass("selected");
		var puppyListing = $(this).prevAll("tr").children("td[colspan='3']").length - 1;
		var puppy = $(this).attr("id") - 1;
		delete_row(puppyListing, puppy);
	})
};

function delete_row(sec, ent)
{
	$("#delete").click(function ()
	{
		$.ajax(
		{
			url: "/post/delete",
			type: "POST",
			data:
			{
				puppyListing: sec,
				puppy: ent
			},
			cache: false,
			success: setTimeout(draw_table, 1000)
		})
    })
    //This code in from sweetalert.com
$("#delete, .close").click(function () {
        $("#buttonDelete").toggleClass("hidden");
        swal("Deleted!", "You just deleted a row", "info");
});
};
//Function to validade the form, this code is from https://www.w3schools.com/js/js_validation.asp
function validateForm() {
  var x = document.forms["form"]["name"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
  var x = document.forms["form"]["description"].value;
  if (x == "") {
    alert("description must be filled out");
    return false;
  }
   var x = document.forms["form"]["breed"].value;
  if (x == "") {
    alert("breed must be filled out");
    return false;
}
 var x = document.forms["form"]["age"].value;
  if (x == "") {
    alert("age must be filled out");
    return false;
}
 var x = document.forms["form"]["sex"].value;
  if (x == "") {
    alert("sex must be filled out");
    return false;
  }
//This code in from sweetalert.com
$("#botao, .close").click(function () {
        $("#buttonSuccess").toggleClass("hidden");
        swal("Yay!", "You added a new dog!", "success");

});

}


////////////////////////////////////////////////////////////////////////
$(document).ready(function(){
    draw_table();
})