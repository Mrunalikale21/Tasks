function showTab(tab) {
  const signupForm = document.getElementById("signupForm");
  const loginForm = document.getElementById("loginForm");

  if (tab === "signup") {
    signupForm.classList.remove("hidden");
    loginForm.classList.add("hidden");
  } else {
    loginForm.classList.remove("hidden");
    signupForm.classList.add("hidden");
  }
}
