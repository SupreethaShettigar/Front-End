<?php
session_start();
?>
<?php
  $con=mysqli_connect("localhost","root","","trail");
	if(isset($_POST['signin']))
 {
     extract($_POST);
     $query="select * from register where name='$uname' AND password='$passwd'";
     $run_query=mysqli_query($con,$query);
	 if($run_query)
	 {
		 if(mysqli_num_rows($run_query)>0)
		 {
			 $_SESSION['name']=$uname;
			 $_SESSION['password']=$passwd;
			 header("location:lightbox2.php");
		 }
		 else
		 {
			 echo '<script type="text/javascript">  window.onload = function(){
			 alert("Invalid credentials.Try again!!!!!!!!!!!!!!!!!!!");
			 }</script>';		
		 }
	 }		 
}
?>
<html>
<head>
  <title>Sign In Box</title>
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="SignInForGuest.css">
</head>
<body>
   <div class="responsive">
   <form action="SignInForGuest.php" method="POST"><center>
     
      <div class="banner3"></div>
      <div class="banner2"></div>
      <div class="banner1"><br>T<br>E<br>N<br>A<br>N<br>T<br>O</div>
      <div class="loginbox3"></div>
      <div class="loginbox2"></div>
      <div class="loginbox1"></div>
	  <div class="loginbox">
	     <h2><b>Back Again!</h2><br>
	     <form>
	      
		  <input type="text" name="uname" placeholder="Username" required=""><br><br><br>
		    
		  <input type="password" name="passwd" placeholder="Password" required="">
		    <br><br><br>
			<input type="submit" id="btnsignin" value="Sign In" name="signin">
			<br><br>
			<input type="button" id="btnsignup" value="Sign Up" onclick="location.href='Register.php';"name="signup">
		 </form>
	   </div>
    </form>
    </div>
	 <div class="heading">Login to life...</div>
</body>
</html>