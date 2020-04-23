<!-- <?php

if (isset($_POST['name'])&& isset($_POST['email'])){
    $name = $_POST['name'];
    $email = $_POST['email'];
    $to = 'sonia.klimas@gmail.com';
    $subject = "Contact";
    $body = '<html>
    <body>
    <h2>Feedback - soniaklimas.com</h2>
    <hr>
    <p>Name:<br>'.$name.' <br>'.$email.'</p>
    </body>
    </html>';

    $headers = "From: ".$name." <".$email.">\r\n";
    $headers .= "Reply-To: ".$email."\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-type: text/html; charset=utf-8";

    $send = mail($to, $subject, $body, $headers);
    if ($send) {
        header('Location: redirect.html');

    } else {
        echo 'error';}
}
?> -->


<?php

//Subject
$subject ="Contact Form Submission";

// Name
$name =$_POST['name'];

// Message
$message =$_POST['message'];

//Mail of Sender
$email =$_POST['email'];

//From
$header = "From:$name<$email>";

$send_contact=mail("sonia.klimas@gmail.com",$subject,$message,$header);

//Check if mail was sent
if($send_contact){
    header('Location: redirect.html');
}
else {
echo "Error!";
}
?>
