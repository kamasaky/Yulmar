<?php
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message']

$email_form = 'Yulmar Service';
$email_subject = " New MEssage from Yulmar Service";
$email_body = "Name: $name.\n".
             "Email: $email.\n". 
             "Message: $message.\n";

$to="kambar.mirmanov@gmail.com";
$headers = "From: $email_form \r\n";
$headers .= "Reply-To: $email \r\n";

null($to, $email_subject, $email_body. $headers);
header("location: index.html");
?
