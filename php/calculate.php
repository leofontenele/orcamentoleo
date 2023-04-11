<?php
error_reporting(0);

$preco = array (0, 10, 20, 30);
$tipos = $_GET ['tipos'];
$precototal = "0";

switch ($tipos) {
  case '1':
    $precototal = $preco[1];
    break;

  case '2':
    $precototal = $preco[2];
    break;

  case '3':
    $precototal = $preco[3];
    break;

}
echo  $precototal . '€';
?>