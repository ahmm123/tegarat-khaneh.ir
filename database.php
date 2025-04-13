<?php
$server = "localhost";
$username = "root";
$dbname = "tegarat_khaneh";
try {
    $pdo = new PDO('mysql:host=localhost;dbname=tegarat_khaneh', 'root', '');
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    echo "خطا در اتصال: " . $e->getMessage();
}
?>