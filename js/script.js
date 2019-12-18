
   $(document).ready(function() { 
    $("form").submit(function() {
        event.preventDefault(); 
        alert("Form submitted Successfully"); 
        (document).getElementById('form').reset()
    }); 

    $("#guest").click(function()
    {
        $("#onesha").toggle()
    })


}); 
