<!DOCTYPE HTML>
<html lang="en">

<head>
  <title>CIT 160 Poll</title>
  <?php include 'includes/head.php'; ?>
</head>

<body>
<div class="wrapper">
 <header>
   <h1>CIT 160 Poll Results</h1>
 </header>
 <section class="supercenter">
   <h2 class="center">CIT 230 Winter 2016</h2>
   <?php
    // Create connection using argument list
    $dc = new mysqli("localhost", "jasonbl7_cit230", "member6@", "jasonbl7_cit160");
    // Check connection
    if ($dc->connect_error) {
        die("Connection failed: " . $dc->connect_error);
    }
    $count = 0;
    $rs1 = $dc->query("SELECT cit160 FROM cit160poll WHERE cit160='completed'");
    $rs2 = $dc->query("SELECT cit160 FROM cit160poll WHERE cit160='concurrent'");
    $rs3 = $dc->query("SELECT cit160 FROM cit160poll WHERE cit160='transfer'");
    $rs4 = $dc->query("SELECT cit160 FROM cit160poll WHERE cit160='none'");
   ?>
    <table>
     <tr>
       <th>Completed</th>
       <th>Concurrent</th>
       <th>Transfer</th>
       <th>None</th>
     </tr>
     <tbody>
	 <tr>
       <td class="center"><?php echo $rs1->num_rows; ?></td>
       <td class="center"><?php echo $rs2->num_rows; ?></td>
       <td class="center"><?php echo $rs3->num_rows; ?></td>
       <td class="center"><?php echo $rs4->num_rows; ?></td>
     </tr>  
     </tbody>
    </table>
    <div class="clear">&nbsp;</div>
  </article>
 </section>  
 
 <footer>
  <?php include 'includes/footer.php'; ?>
 </footer>
</div>
</body>
</html>