<?php

$username = ($_POST['name']);

$email = ($_POST['email']);

$password = ($_POST['password']);

$fo = fopen("Data.txt", 'r');

while (!feof($fo)) {

$str1 = fgets($fo);

if ($str1 == "") {

break;

}

if (strncmp($username, $str1, strlen($username)) == 0) {

echo "Такой логин уже есть!";

exit(0);

}

$str2 = fgets($fo);

if (strncmp($email, $str2, strlen($email)) == 0) {

echo "Такой email уже есть!";

exit(0);

}

$str3 = fgets($fo);

}

fclose($fo);

$in = fopen("Data.txt", 'a');

fwrite($in, $username);

fwrite($in, "\n");

fwrite($in, $email);

fwrite($in, "\n");

fwrite($in, $password);

fwrite($in, "\n");

fclose($in);

echo "Данные успешно сохранены";

?