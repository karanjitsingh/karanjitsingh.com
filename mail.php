<?php
$to      = 'karan1866@gmail.com';
$subject = 'test';
$message = 'it worked';
$headers = 'From: no-reply@karanjitsingh.com' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

mail($to, $subject, $message, $headers);

$message = 'this worked too';
$headers = 'From: no-reply2@karanjitsingh.com' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

mail($to, $subject, $message, $headers);
?>