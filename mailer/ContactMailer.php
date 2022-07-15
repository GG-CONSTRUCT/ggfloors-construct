<?php

use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;

require_once __DIR__ . '/PHPMailer/src/Exception.php';
require_once __DIR__ . '/PHPMailer/src/PHPMailer.php';
require_once __DIR__ . '/PHPMailer/src/SMTP.php';

class ContactMailer
{
    /**
     * @var string
     */
    private static $emailFrom = 'client@ggvloerbekleding.be';
    /**
     * @var string
     */
    
    /**
     * @param string $name
     * @param string $email
     * @param string $phone
     * @param string $message
     * @return boolean
     */
    public static function send($name, $phone, $email, $message)
    {
        $body = "Name: {$_POST['name']}<br>";
        $body .= "Phone: {$_POST['phone']}<br>";
        $body .= "Email: {$_POST['email']}<br>";
        $body .= "Message: {$_POST['message']}";
        
        
        $mailer = new PHPMailer();
        $mailer->isSMTP();
        $mailer->Host = 'smtp.ggvloerbekleding.be';
        $mailer->SMTPAuth = true;
        $mailer->Username = self::$emailFrom;
        $mailer->Password = 'h862f3nj';
        $mailer->SMTPSecure = 'ssl';
        $mailer->Port = '465';
        
        $mailer->CharSet = 'UTF-8';
        $mailer->setFrom(self::$emailFrom, 'ggfloors-construct.be');
        $mailer->addAddress('boris.krasko@icloud.com');
        $mailer->isHTML(true);
        $mailer->Subject = "Order from ggfloors-construct.be";
        $mailer->Body = $body;
        
        if ($mailer->send()) {
            return true;
        }
        return false;
    }
}
