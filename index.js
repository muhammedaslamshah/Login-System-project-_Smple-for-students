const h1 = document.querySelector("#h1");
const input = document.querySelector("input");
const logInBtn = document.querySelector("#login");
const logOutBtn = document.querySelector("#logout");

const checkToken = () =>{
    return localStorage.getItem("token");
}
;

if(checkToken()){
    h1.innerHTML = "Signup Successfully";
    input.style.display = "none"
    logInBtn.style.display = "none";
}else{
    logOutBtn.style.display = "none";
}

login.onclick = () => {
  if (input.value) {
    localStorage.setItem("token", input.value);
    h1.innerHTML = "SignUp Successfully";
    input.style.display = "none"
    logInBtn.style.display = "none";
    logOutBtn.style.display = "block";
  }
};

logOutBtn.onclick = () => {
  localStorage.clear();
  location.reload();
  logOutBtn.style.display = "none"
};
