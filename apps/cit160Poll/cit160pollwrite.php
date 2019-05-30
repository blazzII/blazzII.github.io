<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8"> 
  <title>CIT 230: CIT 160 Requisite Poll</title>
  <?php include '../../includes/head.php'; ?>
</head>
<body>
 <div class="wrapper">
  <header>
     <h1>CIT 230: Poll</h1>
  </header>
  <section class="supercenter"> 
   <div class="warning">
   <?php
    // Create connection using argument list
    $dc = new mysqli("localhost", "jasonbl7_cit230", "member6@", "jasonbl7_cit160");
    // Check connection
    if ($dc->connect_error) {
        die("Connection failed: " . $dc->connect_error);
    }
    $stu = $_POST["fullName"];
    $status = $_POST["cit160"];
    $sql = "INSERT INTO cit160poll (fullName, cit160) VALUES ('$stu', '$status')";

    if ($dc->query($sql) ===  TRUE) {
        echo "Thank you for participating in the poll.";
    } else {
        echo "Error adding survey: " . $dc->query_error . "Hit back and try again and/or contact blazzardj@byui.edu";
    }

    $dc->close();
    ?>
    </div>
    <div class="clear">&nbsp;</div>
  </section>  
  <footer>
    <?php include '../../includes/footer.php'; ?>
  </footer>
 </div>
</body>
</html>