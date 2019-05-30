<!DOCTYPE HTML>
<html lang="en">

<head>
  <title>Presentation List Working - Update</title>
  <?php include '../includes/head.php'; ?>
</head>

<body>
<div class="wrapper">
 <header>
     <h1>CIT 230 Section 12: Student Presentations</h1>
 </header>
 <section>
   
   <div class="warning">
   <?php
    // Create connection using argument list
    $dc = new mysqli("localhost", "jasonbl7_cit230", "member6@", "jasonbl7_p01");
    // Check connection
    if ($dc->connect_error) {
        die("Connection failed: " . $dc->connect_error);
    }
    $pid = $_POST["id"];
    $stu = $_POST["student"];
    $sql = "UPDATE class01 SET student='$stu' WHERE id = $pid";
    if ($dc->query($sql) ===  TRUE) {
        echo "Record updated. You have been assigned " . $_POST["topic"];
    } else {
        echo "Error updating record: " . $dc->query_error . "Hit back and try again and/or contact blazzardj@byui.edu";
    }
    $dc->close();
    ?>
   </div>
<div class="clear">&nbsp;</div>
  </article>
 </section>  
 
 <footer>
  <?php include '../includes/footer.php'; ?>
 </footer>
</div>
</body>
</html>