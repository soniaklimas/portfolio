<?php

if (isset($_POST['name'])&& isset($_POST['emal'])){
    $name = $_POST['name'];
    $email = $_POST['email'];
    $to = 'sonia.klimas@gmail.com';
    $subject = "New Subscriber";
    $body = '<html>
    <body>
    <h2>Feedback- examplpe.com</h2>
    <hr>
    <p>Name:<br>'.$name.'</p>
    </body>
    </html>';

    $headers = "From: ".$name." <".$email.">\r\n";
    $headers .= "Reply-To: ".$email."\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-type: text/html; charset=utf-8";

    $send = mail($to, $subject, $body, $headers);
    if ($send) {
        echo '<br>';
        echo 'Thanks for contacting me.';

    } else {
        echo 'error'
    }

}

?>