<!DOCTYPE HTML>
<html lang="en">

<head>
  <title>Interviews</title>
  <?php include '../includes/head.php'; ?>
</head>

<body>
<div class="wrapper">
 <header>
  <h1>CIT 301: Interviews</h1>
 </header>
 <section>

   <?php
    // Create connection using argument list
    $dc = new mysqli("localhost", "interviews", "member6@", "jasonbl7_p01");
    // Check connection
    if ($dc->connect_error) {
        die("Connection failed: " . $dc->connect_error);
    }
    $rs = $dc->query("SELECT student, notes, dateSelected FROM interviews");
    ?>
	<table>
         <tr>
          <th>Date/Time</th>
          <th>Student</th>
          <th>Notes</th>
          <th>Action</th>
         </tr>
         <tbody>
	 <?php while ($row = $rs->fetch_assoc()) { ?> 
         <form action="update01.php" method="post">
	        <input type="hidden" name="id" value="<?php echo $row["id"] ?>">
            <input type="hidden" name="topic" value="<?php echo $row["topic"] ?>">
            <tr>
                <td class="right"><?php echo $row["topic"] ?></td>
		        <td class="center"><?php echo $row["lesson"] ?></td>
		        <td class="center">
                 <?php if ($row["student"] == "") { ?>
                    <input type="text" required="required" name="student" placeholder="Your full name">
                 <?php } else {echo $row["dateSelected"];} ?>
		</td>
		<td class="center"><?php if ($row["student"] == "") { ?><input type="submit" value="Select Topic"> 
              <?php } else {echo "Not Available";} ?>
		</td>
            </tr>   
	 </form>
	 <?php
	  }
          $dc->close();
	 ?>
         </tbody>
	</table>
   <div class="clear"> </div>
  </article>
 </section>  
 
 <footer>
  <?php include '../includes/footer.php'; ?>
 </footer>
</div>
</body>
</html>