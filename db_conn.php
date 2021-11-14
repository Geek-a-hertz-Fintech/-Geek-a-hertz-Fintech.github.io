<?php

$sname = "Localhost";
$unmame = "root";
$password = "";

$db_name = "test_db";

$conn = mysqli_connect($sname, $unmame, $password, $db_name);

if(!$conn) {
    echo "Connection Failed";
}