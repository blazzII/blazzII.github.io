<!DOCTYPE HTML>
<html lang="en">

<head>
  <title>Presentation List Home</title>
  <?php include '../includes/head.php'; ?>
  <style>
      h3 {
          background-color: #444; color: #eee;
      }
  </style>
</head>

<body>
<div class="wrapper">
 <header>
    <h1>Presentation Assignments/Selections</h1>
 </header>
 <section>
   <h3 class="center">CIT 230 Section 12</h3>
   <?php
    // Create connection using argument list
    $dc = new mysqli("localhost", "jasonbl7_cit230", "member6@", "jasonbl7_p01");
    // Check connection
    if ($dc->connect_error) {
        die("Connection failed: " . $dc->connect_error);
    }
    $count = 0;
    $rs = $dc->query("SELECT id, topic, lesson, student, dateSelected FROM class01");
    ?>
	<table>
         <tr>
          <th>ID</th>
          <th>Topic</th>
          <th>Lesson Due</th>
          <th>Student</th>
          <th>Date Submitted</th>
         </tr>
         <tbody>
	<?php while ($row = $rs->fetch_assoc()) {  ?>
	 <tr>
	  <td class="center"><?php echo $row["id"] ?></td>
          <td class="center"><?php echo $row["topic"] ?></td>
	  <td class="center"><?php echo $row["lesson"] ?></td>
	  <td class="center"><?php echo $row["student"] ?></td>
	  <td class="center"><?php echo $row["dateSelected"] ?></td>
         </tr>  
         
	<?php
          if ($row["student"]!=="") {
            $count++;
          }
	 }
        
	?>
         <tr><td colspan="4">Total Signups</td><td><?php echo $count ?></td>
         </tbody>
	 </table>
   <div class="clear">&nbsp;</div>
    <h3 class="center">CIT 230 Section 13</h3>
    <?php 
       $count = 0;
       $rs2 = $dc->query("SELECT id, topic, lesson, student, dateSelected FROM class02");
    ?>
	<table>
         <tr>
          <th>ID</th>
          <th>Topic</th>
          <th>Lesson Due</th>
          <th>Student</th>
          <th>Date Submitted</th>
         </tr>
         <tbody>
	<?php while ($row = $rs2->fetch_assoc()) { ?>
	 <tr>
	  <td class="center"><?php echo $row["id"] ?></td>
          <td class="center"><?php echo $row["topic"] ?></td>
	  <td class="center"><?php echo $row["lesson"] ?></td>
	  <td class="center"><?php echo $row["student"] ?></td>
	  <td class="center"><?php echo $row["dateSelected"] ?></td>
         </tr>  
         
	<?php
	  if ($row["student"]!=="") {
            $count++;
          }
          
          }
         $dc->close();
	?>
         <tr><td colspan="4">Total Signups</td><td><?php echo $count ?></td>
         </tbody>
	 </table>
      <div class="clear">&nbsp;</div>
  </article>
 </section>  
 
 <footer>
  <?php include '../includes/footer.php'; ?>
 </footer>
</div>
</body>
</html>