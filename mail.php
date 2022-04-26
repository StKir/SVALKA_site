<?php 

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$name = $_POST['user_name'];
$lastName = $_POST['user_lastName'];
$userMail = $_POST['user_mail'];
$budjet = $_POST['price-budjet'];
$comment = $_POST['comment'];


//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.mail.ru';  																							// Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'yourpizzaadm22@mail.ru'; // Ваш логин от почты с которой будут отправляться письма
$mail->Password = 'QQ0QFPvmz4324yU2TPz7'; // Ваш пароль от почты с которой будут отправляться письма
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465; // TCP port to connect to / этот порт может отличаться у других провайдеров

$mail->setFrom('yourpizzaadm22@mail.ru'); // от кого будет уходить письмо?
$mail->addAddress('kirillstrukov2@gmail.com');     // Кому будет уходить письмо 
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Кто-то оставил заявку!!';
$mail->Body    = 'Имя: ' .$name . '<br>Фамилия: ' .$lastName . '<br>E-mail: ' .$userMail . '<br>Бюджет: ' .$budjet . '<br>Comment: ' .$comment;
$mail->AltBody = '';

if(!$mail->send()) {
    header('location: error.html');
} else {
    header('location: thx.html');
}
?>