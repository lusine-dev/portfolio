<?php
// feedback
if ($_GET['cmd'] == 'feedback') {
    // data
    $name = trim(htmlspecialchars($_POST['name']));
    $phone = trim(htmlspecialchars($_POST['phone']));
    $u_subject = trim(htmlspecialchars($_POST['subject']));
    $message = trim(htmlspecialchars($_POST['message']));
    // email
    $to = 'lusine.a.amiraghyan@gmail.com';
    $subject = 'Lusines portfolio';
    $body = '<html>
                <body>
                    <h2>Feedback</h2>
                    <hr>
                    <p>Name<br>'.$name.'</p>
                    <p>Phone<br>'.$phone.'</p>
                    <p>Them<br>'.$u_subject.'</p>
                    <p>message<br>'.$message.'</p>
                </body>
            </html>';
    // headers
    $headers  = "From: ".$name." <".$phone.">\r\n"; 
    $headers .= "Reply-To: ".$phone."\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-type: text/html; charset=utf-8";
    // send
    $send = mail($to, $subject, $body, $headers);
    if ($send) {
        header('location: ../index.html');
    } else {
        header('location: ../index.html');
    }
}
?>