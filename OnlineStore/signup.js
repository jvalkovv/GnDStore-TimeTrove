function showSignupContainer() {
  var container = document.getElementById("signupContainer");
  container.innerHTML = `
<div id="signup01" class="modal">
  <div id="signup01" class="modal">
    <span
      onclick="document.getElementById('signup01').style.display='none'"
      class="close"
      title="Close Modal"
      >&times;</span
    >
    <form class="modal-content" action="/action_page.php">
      <div class="container">
        <h1>Sign Up</h1>
        <p><b>Please fill in this form to create an account.</b></p>
        <hr />
        <label for="text"><b>Username</b></label>
        <input type="text" placeholder="Enter Username" name="text" required />
        <label for="email"><b>Email</b></label>
        <input type="email" placeholder="Enter Email" name="email" required />
        <label for="psw"><b>Password</b></label>
        <input
          type="password"
          placeholder="Enter Password"
          name="psw"
          required
        />
        <label for="psw-repeat"><b>Repeat Password</b></label>
        <input
          type="password"
          placeholder="Repeat Password"
          name="psw-repeat"
          required
        />
        <div class="clearfix">
          <button
            type="button"
            onclick="document.getElementById('signup01').style.display='none'"
            class="cancelbtn"
          >
            Cancel
          </button>
          <button type="submit" class="signupbtn">Sign Up</button>
        </div>
      </div>
    </form>
  </div>
</div>
`;
}
