<?php

require_once __DIR__ . '/mailer/Validator.php';
require_once __DIR__ . '/mailer/ContactMailer.php';

if (!Validator::isAjax() || !Validator::isPost()) {
  echo 'Access denied!';
  exit;
}

$name = isset($_POST['name']) ? trim(strip_tags($_POST['name'])) : null;
$email = isset($_POST['email']) ? trim(strip_tags($_POST['email'])) : null;
$phone = isset($_POST['phone']) ? trim(strip_tags($_POST['phone'])) : null;
$message = isset($_POST['message']) ? trim(strip_tags($_POST['message'])) : null;

if (empty($name) || empty($email) || empty($phone)) {
  echo 'Dit vield is verplicht.';
  exit;
}

if (!Validator::isValidEmail($email)) {
  echo 'E-mail komt niet overeen met het formaat.';
  exit;
}

if (!Validator::isValidPhone($phone)) {
  echo 'Telefoonnummer komt niet overeen met het formaat.';
  exit;
}

if (ContactMailer::send($name, $email, $phone, $message)) {
  echo htmlspecialchars($name) . ', uw gegevens werden succesvol verstuurd, wij contacteren u zo spoedig mogelijk terug.';
} else {
  echo 'Er is een fout opgetreden! Verzenden mislukt.';
}
exit;
