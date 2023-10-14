<?php

function random_string($length) {
  $chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  $random_string = '';
  for ($i = 0; $i < $length; $i++) {
    $random_string .= $chars[rand(0, strlen($chars) - 1)];
  }
  return $random_string;
}
$random_string = random_string(20);
echo $random_string;

//**************** */

$str = "";
$words = explode("%", $str);

print_r($words);
