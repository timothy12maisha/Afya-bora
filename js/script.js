
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

    var modal = document.getElementById('onesha')
    Window.onclick = function(event){
        if(event.target == modal){
            modal.style.display="none"
        }
    }


}); 





