function goTo(page) {
  window.location.href = page;
}

function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const error = document.getElementById("error");

  if (!email || !password) {
    error.textContent = "Please enter username and password";
    return;
  }

  // TEMP fake login system (we replace with Firebase later)
  let role = "Staff";

  if (username.includes("slt")) {
    role = "SLT";
  } else if (username.includes("staff")) {
    role = "Staff";
  }

  localStorage.setItem("role", role);

  // Go to dashboard
  window.location.href = "dashboard.html";
}
