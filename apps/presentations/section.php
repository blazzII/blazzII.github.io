<!DOCTYPE HTML>
<html lang="en">
  <head>
    <title>Presentation List Home</title>
    <?php include $_SERVER['DOCUMENT_ROOT'].'/includes/head.php' ?>
  </head>

  <?php
	    // determine Section
		section = Request.QueryString('section');
  ?>

  <body>
    <header>
	  <h1>CIT 230 Section <?php echo(section) ?>: Student Presentations</h1>
    </header>
    <main>
	  <?php
		// Create connection using argument list
		$dc = new mysqli("localhost", "jasonbl7_cit230", "member6@", "jasonbl7_p01");
		// Check data connection
        if ($dc->connect_error) {
          die("Connection failed: " . $dc->connect_error);
        }
        $rs = $dc->query("SELECT id, topic, lesson, student, dateSelected FROM class01");
      ?>

	  <table>
         <tr>
          <th>Topic</th>
          <th>Lesson Due</th>
          <th>Availability/Date Selected</th>
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
      <?php include $_SERVER['DOCUMENT_ROOT'].'/includes/footer.php' ?>
 </footer>
</div>
</body>
</html>