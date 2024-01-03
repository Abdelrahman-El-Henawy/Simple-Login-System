//^══════════════════════════════════════════════════════════════════════════════
//& ═════════════════════▶ Sign Up Variables ◀══════════════════════════════════
const userNameInput = document.getElementById("userNameInput");
const userEmailInput = document.getElementById("userEmailInput");
const userPasswordInput = document.getElementById("userPasswordInput");

const userNameAlert = document.getElementById("userNameAlert");
const successNameIcon = document.getElementById("successNameIcon");
const wrongNameIcon = document.getElementById("wrongNameIcon");

const userEmailAlert = document.getElementById("userEmailAlert");
const successEmailIcon = document.getElementById("successEmailIcon");
const wrongEmailIcon = document.getElementById("wrongEmailIcon");

const userPasswordAlert = document.getElementById("userPasswordAlert");
const successPasswordIcon = document.getElementById("successPasswordIcon");
const wrongPasswordIcon = document.getElementById("wrongPasswordIcon");

const successMsg = document.getElementById("successMsg");
const errorMsg = document.getElementById("errorMsg");
const repeatedMsg = document.getElementById("repeatedMsg");

const addUserBtn = document.getElementById("addUserBtn");

let userInfo;

//^═══════════════════▶ Switching from SignUp to Login ◀═════════════════════════
const spans = document.querySelectorAll(".spans span");
const register = document.getElementById("register");
const login = document.getElementById("login");
spans.forEach((span) => {
  span.addEventListener("click", function () {
    register.classList.toggle("d-none");
    login.classList.toggle("d-none");
    errorMsg.classList.replace("d-block", "d-none");
    successMsg.classList.replace("d-block", "d-none");
    repeatedMsg.classList.replace("d-block", "d-none");
    successNameIcon.classList.replace("d-block", "d-none");
    wrongNameIcon.classList.replace("d-block", "d-none");
    userNameAlert.classList.replace("d-block", "d-none");
    successEmailIcon.classList.replace("d-block", "d-none");
    wrongEmailIcon.classList.replace("d-block", "d-none");
    userEmailAlert.classList.replace("d-block", "d-none");
    successPasswordIcon.classList.replace("d-block", "d-none");
    wrongPasswordIcon.classList.replace("d-block", "d-none");
    userPasswordAlert.classList.replace("d-block", "d-none");
  });
});

//&══════════════════════════════════════════════════════════════════════════════
//* ═════════════════════════════▶  Functions ◀═════════════════════════════════
if (JSON.parse(localStorage.getItem("allUsers")) != null) {
  userInfo = JSON.parse(localStorage.getItem("allUsers"));
} else {
  userInfo = [];
}
addUserBtn.addEventListener("click", function () {
  addUser();
});
function addUser() {
  if (allInputsValid()) {
    if (isExist() == false) {
      var user = {
        name: userNameInput.value,
        email: userEmailInput.value,
        password: userPasswordInput.value,
      };
      userInfo.push(user);
      localStorage.setItem("allUsers", JSON.stringify(userInfo));
      clearRegisterForm();
      successMsg.classList.replace("d-none", "d-block");
      errorMsg.classList.replace("d-block", "d-none");
      repeatedMsg.classList.replace("d-block", "d-none");
    } else {
      successMsg.classList.replace("d-block", "d-none");
      errorMsg.classList.replace("d-block", "d-none");
      repeatedMsg.classList.replace("d-none", "d-block");
    }
  } else {
    errorMsg.classList.replace("d-none", "d-block");
    successMsg.classList.replace("d-block", "d-none");
    repeatedMsg.classList.replace("d-block", "d-none");
  }
}

function allInputsValid() {
  if (
    userNameInput.value !== "" &&
    userEmailInput.value !== "" &&
    userPasswordInput.value !== ""
  ) {
    console.log("all inputs are valid");
    return true;
  } else {
    console.log("all inputs are not valid");
    return false;
  }
}

function validName() {
  var term = userNameInput.value;
  var regexName = /^[A-Za-z0-9_]{3,}$/;
  if (regexName.test(term)) {
    return true;
  } else {
    return false;
  }
}

userNameInput.addEventListener("input", function () {
  if (validName()) {
    successNameIcon.classList.replace("d-none", "d-block");
    wrongNameIcon.classList.replace("d-block", "d-none");
    userNameAlert.classList.replace("d-block", "d-none");
  } else {
    successNameIcon.classList.replace("d-block", "d-none");
    wrongNameIcon.classList.replace("d-none", "d-block");
    userNameAlert.classList.replace("d-none", "d-block");
  }
});
userNameInput.addEventListener("blur", function () {
  if (validName()) {
    successNameIcon.classList.replace("d-none", "d-block");
    wrongNameIcon.classList.replace("d-block", "d-none");
    userNameAlert.classList.replace("d-block", "d-none");
  } else {
    successNameIcon.classList.replace("d-block", "d-none");
    wrongNameIcon.classList.replace("d-block", "d-none");
    userNameAlert.classList.replace("d-block", "d-none");
  }
});

function validEmail() {
  var text = userEmailInput.value;
  var regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (regexEmail.test(text)) {
    return true;
  } else {
    return false;
  }
}

userEmailInput.addEventListener("input", function () {
  if (validEmail()) {
    successEmailIcon.classList.replace("d-none", "d-block");
    wrongEmailIcon.classList.replace("d-block", "d-none");
    userEmailAlert.classList.replace("d-block", "d-none");
  } else {
    successEmailIcon.classList.replace("d-block", "d-none");
    wrongEmailIcon.classList.replace("d-none", "d-block");
    userEmailAlert.classList.replace("d-none", "d-block");
  }
});
userEmailInput.addEventListener("blur", function () {
  if (validEmail()) {
    successEmailIcon.classList.replace("d-none", "d-block");
    wrongEmailIcon.classList.replace("d-block", "d-none");
    userEmailAlert.classList.replace("d-block", "d-none");
  } else {
    successEmailIcon.classList.replace("d-block", "d-none");
    wrongEmailIcon.classList.replace("d-block", "d-none");
    userEmailAlert.classList.replace("d-block", "d-none");
  }
});

function validPass() {
  var num = userPasswordInput.value;
  var regexPass = /^.{4,}$/;

  if (regexPass.test(num)) {
    return true;
  } else {
    return false;
  }
}

userPasswordInput.addEventListener("input", function () {
  if (validPass()) {
    successPasswordIcon.classList.replace("d-none", "d-block");
    wrongPasswordIcon.classList.replace("d-block", "d-none");
    userPasswordAlert.classList.replace("d-block", "d-none");
  } else {
    successPasswordIcon.classList.replace("d-block", "d-none");
    wrongPasswordIcon.classList.replace("d-none", "d-block");
    userPasswordAlert.classList.replace("d-none", "d-block");
  }
});
userPasswordInput.addEventListener("blur", function () {
  if (validPass()) {
    successPasswordIcon.classList.replace("d-none", "d-block");
    wrongPasswordIcon.classList.replace("d-block", "d-none");
    userPasswordAlert.classList.replace("d-block", "d-none");
  } else {
    successPasswordIcon.classList.replace("d-block", "d-none");
    wrongPasswordIcon.classList.replace("d-block", "d-none");
    userPasswordAlert.classList.replace("d-block", "d-none");
  }
});

function clearRegisterForm() {
  userNameInput.value = "";
  userEmailInput.value = "";
  userPasswordInput.value = "";
}

function isExist() {
  for (var i = 0; i < userInfo.length; i++) {
    if (userInfo[i].email.toLowerCase() == userEmailInput.value.toLowerCase()) {
      return true;
    }
  }
  return false;
}

// //*? ═════════════════════════▶  Login process ◀══════════════════════════════
const userEmailInputLogin = document.getElementById("userEmailInputLogin");
const userPasswordInputLogin = document.getElementById(
  "userPasswordInputLogin"
);
const userName = document.getElementById("userName");
const loginBtn = document.getElementById("loginBtn");

const wrongLoginMsg = document.getElementById("wrongLoginMsg");

const successLoginMsg = document.getElementById("successLoginMsg");
const welcomePage = document.getElementById("welcomePage");
const form = document.getElementById("form");

const logOutBtn = document.getElementById("logOutBtn");

loginBtn.addEventListener("click", function () {
  signIn();
});
function signIn() {
  for (var i = 0; i < userInfo.length; i++) {
    if (
      userInfo[i].email.toLowerCase() ==
        userEmailInputLogin.value.toLowerCase() &&
      userInfo[i].password.toLowerCase() ==
        userPasswordInputLogin.value.toLowerCase()
    ) {
      successLoginMsg.classList.replace("d-none", "d-block");
      setTimeout(() => {
        welcomePage.classList.replace("d-none", "d-block");
        form.classList.replace("d-block", "d-none");
      }, 1200);

      let userNameSession = userInfo[i].name;
      userName.innerHTML = userNameSession;
      wrongLoginMsg.classList.replace("d-block", "d-none");
      clearLoginForm();
      return true;
    }
  }
  welcomePage.classList.replace("d-block", "d-none");
  form.classList.replace("d-none", "d-block");
  wrongLoginMsg.classList.replace("d-none", "d-block");
  successLoginMsg.classList.replace("d-block", "d-none");
}
function clearLoginForm() {
  userEmailInputLogin.value = "";
  userPasswordInputLogin.value = "";
}
logOutBtn.addEventListener("click", function () {
  welcomePage.classList.replace("d-block", "d-none");
  form.classList.replace("d-none", "d-block");
  successLoginMsg.classList.replace("d-block", "d-none");
});

//*? ═════════════════════════════════════════════════════════════════════════
//*? ═════════════════════════▶  End Project ◀═══════════════════════════════
