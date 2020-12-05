<!DOCTYPE html>
<html lang="en">
<head>
  <title>CIT 160 Registration Poll</title>
  <?php include 'includes/head.php'; ?>
  <link href="styles/phpform.css" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css?family=Gloria+Hallelujah" rel="stylesheet">
</head>

<body>
 <div class="wrapper">
  <header>
    <?php include 'includes/header.php'; ?>
  </header>
  <section class="supercenter">
    <h2>What is your CIT 160 experience?</h2>
    <div class="instructions">CIT 160 is an introduction to programming course using JavaScript at BYU-I</div>
   	<form action="cit160pollwrite.php" method="post" class="success">
	    <label for="fullName">Enter your full name: </label>
      <input type="text" name="fullName" placeholder="Full Name" size="40" required patter="[A-Za-z -]*">
   	  <fieldset>
        <label for="cit160">Which of the following applies to you?</label><br>
        <input type="radio" name="cit160" value="completed" required> Completed CIT 160<br>
        <input type="radio" name="cit160" value="concurrent"> Concurrently enrolled in CIT 160<br>
        <input type="radio" name="cit160" value="transfer"> Transferred in an equivalent course to CIT 160<br>
        <input type="radio" name="cit160" value="none"> Not completed nor am I currently enrolled in CIT 160
      </fieldset>
      <br>
      <input type="submit" value="Submit Poll">
  	</form>
    <div class="clear"> </div>
  </section>
  <footer>
    <?php include 'includes/footer.php'; ?>
  </footer>
 </div>
</body>
</html>