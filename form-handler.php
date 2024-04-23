<!--Este ficheiro vai servir para pôr os forms de perguntas dos clientes a funcionar-->

<!--os nomes entre '' são os mesmos que metemos no name="" no contacto.html-->
<?php
$name = $_POST['nome'];
$visitor_email = $_POST['email'];
$subject = $_POST['assunto'];
$message = $_POST['mensagem'];

$email_from = 'ibsm.consulting.ibsm@gmail.com';
$email_subject = 'New Form Submission';

$email_body = "User Message: $message.\n"; #usamos o ; para que o programa pare aqui

$to = 'inescapabarros@gmail.com';

$headers = "From: $email_from \r\n";
$headers .= "Reply-To: $visitor_email \r\n";

#vai mandar toda esta informação para o email ID
mail($to,$email_subject,$email_body,$headers);

header("Location: contacto.html");
?>