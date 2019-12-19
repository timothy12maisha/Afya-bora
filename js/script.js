$(document).ready(function () {
    $("form").submit(function () {
        event.preventDefault();
        (document).getElementById('form').reset()
    });

    $("#guest").click(function () {
        $("#onesha").slideToggle()
    })
    $("#back").click(function goback() {
        window.history.back()
    })
    $("#submit").click(function () {
        var fname = $("#fname3").val();
        var lname = $("lname3").val();
        var email = $("#email3").val();
        var phone = $("#phone3").val();
        var day = $("#day3").val();
        var month = $("#month3").val();
        var year = $("#year3").val();
        var username = $("#uname3").val();
        var password = $("#pword3").val();
        // Returns successful data submission message when the entered information is stored in database.
        var dataString = 'fname=' + fname + '&lname=' + lname + '&uname=' + username + '&email=' + email + '&phone=' + phone + '&dd=' + day + '&mm=' + month + '&yy=' + year + '&password=' + password;
        if (fname == '' || lname == '' || email == '' || phone == '' || day == '' || month == '' || year == '' || username == '' || password == '') {
            alert("Please Fill All Fields");
        } else {
            // AJAX Code To Submit Form.
            $.ajax({
                type: "POST",
                url: "ajaxsubmit.php",
                data: dataString,
                cache: false,
                success: function (result) {
                    alert(result);
                }
            });
        }
        return false;
    });



});
