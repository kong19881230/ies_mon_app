<?php include('sdba/sdba.php'); ?>
<?php
// クライアントからのPOSTを受け取る


 
// 下記をレスポンスヘッダーに含める
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: X-Requested-With");

print_r($_FILES);
$new_image_name = "namethisimage.jpg";
move_uploaded_file($_FILES["file"]["tmp_name"], "/upload/".$new_image_name);s
?>