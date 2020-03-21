<html>
<body>
  <main class="container">
<h2>Sign-Up Form</h2>
<div class="row">
  <div class="col-md-8">
    <form method="POST" action="/user/signup">
      <div class="form-group">
        <label>Username:</label>
        <input type="text" name="username" placeholder="Enter Username" class="form-control"/>
      </div>
      <div class="form-group">
        <label>Email:</label>
        <input type="email" name="email" placeholder="Enter Email" class="form-control"/>
      </div>
      <div class="form-group">
        <label>Password:</label>
        <input type="password" name="password" placeholder="Enter Password" class="form-control"/>
      </div>
      <div class="form-group">
        <label>Password:</label>
        <input type="password" name="password_conf" placeholder="Enter Password Confirmation" class="form-control"/>
      </div>
      <input type="submit" value="Sign-Up" class="btn btn-primary"/>
    </form>
  </div>
</div>
</body>
</html>
