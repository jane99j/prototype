<?php
    require_once "connect.php";
    //สร้างตัวแปล sql เลือกข้อมูลใน ตาราง dormitory ทั้งหมด//
    $sql ="SELECT * FROM dormitory_name";
    $stmt = $conn->query($sql);
    $stmt->execute();

    ///ดึงข้อมูลออกมาทั้งหมด แบบ array//
    $result = $stmt->fetchAll(PDO::FETCH_ASSOC);

    /*แสดงข้อมูลทั้งหมด
    print_r($result);*/

    //ใช้ count เพื่อนับตัว array //
    //เช็ค arry ข้อมูล $result ว่า มี หรือ ไม่มี //
    if(count($result)){
        $response =array(
            'status' => true,
            'response'=>$result
        );
        http_response_code(200);
        //แปลงเป็น json//
        echo  json_encode($response);
    }else{
        //ไม่มีข้อมูล//
        http_response_code(404);
        echo json_encode(array('status'=>false));
    }
?>