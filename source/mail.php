<?php
// Получаем значения переменных из пришедших данных
$myemail = 'julia.suslennikova@gmail.com';
$email = $_POST['email'];
$message = $_POST['message'];
// Формируем сообщение для отправки, в нём мы соберём всё, что ввели в форме
$mes = "E-mail: $email \nТекст: $message";

if (!preg_match(
    "/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/i", 
    $email)) {
    $errors .= "\n Error: Invalid email address";
}
if( 
    empty($_POST['email']) || 
    empty($_POST['message'])) {
    $errors .= "\n Error: all fields are required";
}
// Пытаемся отправить письмо по заданному адресу
// Если нужно, чтобы письма всё время уходили на ваш адрес — замените первую переменную $email на свой адрес электронной почты

if (empty($errors)) {
    $send = mail($myemail, $header, $mes, "Content-type:text/plain; charset = UTF-8\r\nFrom:$email");

// Если отправка прошла успешно — так и пишем
if ($send == 'true') {
    echo "Сообщение отправлено";
    header('Location: index.html');
}
// Если письмо не ушло — выводим сообщение об ошибке
else {
    echo "Ой, что-то пошло не так";
    header('Location: index.html');
}
}
?>