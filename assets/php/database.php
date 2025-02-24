<?php
// vars //

$server = "localhost";
$username = "root";
$password = "";
$dbname = "tegarat_khaneh";

// ---- //

// connect to sql //

$conn = new mysqli($server, $username, $password, $dbname);
if ($conn->connect_error) {
    die("<div class='no-connected'>اتصال به سرور نا موقق بود.لطفا مجدد تلاش کنید</div>");
}

// -------------- //