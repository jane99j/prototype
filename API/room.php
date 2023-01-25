<?php
    require_once "connect.php";

    /*$params= array(
        'typeroom' => $_GET['key'],
    );*/
    $sql ="SELECT * FROM room WHERE typeroom = :typeroom ";
    $stmt = $conn->prepare($sql);
    $stmt->execute($params);

    $result = $stmt->fetchAll(PDO::FETCH_ASSOC);

    if(count($result)){
        $response =array(
            'status' => true,
            'response'=>$result
        );
        http_response_code(200);
        echo  json_encode($response);
    }else{
        http_response_code(404);
        echo json_encode(array('status'=>false));
    }
?>