<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
$connection = mysqli_connect("localhost", "root", "","afya_bora"); // Establishing Connection with Server
if(!$connection)
{
    die('Could not connect to database: ' . mysql_error());
}
// Selecting Database from Server
if(isset($_POST['submit'])){ // Fetching variables of the form which travels in URL
$fname = $_POST['fname'];
$lname = $_POST['lname'];
$username = $_POST['uname'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$dd = $_POST['dd'];
$mm = $_POST['nn'];
$yy = $_POST['yyyy'];
$password = $_POST['pword'];
if($name !=''||$email !=''){
//Insert Query of SQL
$query = mysqli_query($connection, "INSERT INTO users(first_name,last_name,email,phone,dd,mm,yy,username,password) VALUES ('$fname','$lname','$email','$phone', '$dd', '$mm', '$yy', '$username','$password')");
if(!$query){
    die("issue here" . mysqli_error($connection));
}
echo "<br/><br/><span>Data Inserted successfully...!!</span>";
}
else{
echo "<p>Insertion Failed <br/> Some Fields are Blank....!!</p>";
}
}
mysqli_close($connection); // Closing Connection with Server
?>