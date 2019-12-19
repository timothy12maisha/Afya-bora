
   $(document).ready(function() { 
    $("form").submit(function() {
        event.preventDefault(); 
        (document).getElementById('form').reset()
    }); 

    $("#guest").click(function()
    {
        $("#onesha").slideToggle()
    })
    $("#back").click(function goback(){
        window.history.back()
        })

    


}); 





