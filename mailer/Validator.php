<?php

class Validator
{
  /**
     * @param string $email
     * @return boolean
     */
  public static function isValidEmail($email)
  {
    return filter_var($email, FILTER_VALIDATE_EMAIL);
  }

  /**
     * @param string $phone
     * @return boolean
     */
  public static function isValidPhone($phone)
  {
    return preg_match("#\+32 \(\d{3}\) \d{2}\-\d{2}-\d{2}#", $phone);
  }

  /**
     * @return boolean
     */
  public static function isPost()
  {
    return $_SERVER['REQUEST_METHOD'] === 'POST';
  }

  /**
     * @return boolean
     */
  public static function isAjax()
  {
    return isset($_SERVER['HTTP_X_REQUESTED_WITH']) && $_SERVER['HTTP_X_REQUESTED_WITH'] === 'XMLHttpRequest';
  }
}
