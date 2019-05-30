<?php
  header("Access-Control-Allow-Origin: *");
  header("Content-Type: application/json; charset=UTF-8");

  $dc = new mysqli("localhost", "jasonbl7_cit230", "member6@", "jasonbl7_p01");
  if ($dc->connect_error) {
        die("Connection failed: " . $dc->connect_error);
    }
  $rs = $dc->query("SELECT id, topic, lesson, student, dateSelected FROM class01");

  $outp = "";
  while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
    if ($output != "") {$outp .= ",";}
	$outp .= '{"Topic":"' . $rs["topic"] . '",';
    $outp .= '"Lesson":"'  . $rs["lesson"] . '",';
    $outp .= '"Student":"'. $rs["student"] . '"}';
	$outp .= '"DateSelected":"'. $rs["dateSelected"] . '"}';
  }
  $outp ='{"records":['.$outp.']}';
  $conn->close();

  echo($outp);
?>