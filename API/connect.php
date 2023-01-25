<?php
    $servername ="localhost";
    $username ="root";
    $password ="";
    $dbname="dormitory";


    try{
        $conn = new PDO("mysql: host=$servername;dbname=$dbname",$username,$password);
        //ตั้งค่า err//
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    } catch (PDOException $e){
        echo "Connection failed".$e->getMessage();
        //ให้ exit ออกถ ถ้าติดต่อไม่ได้
        each();
    }
?>