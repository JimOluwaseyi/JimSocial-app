const theme = document.querySelector("#theme");
const hideTheme = document.querySelector(".hideTheme");
const hide = document.querySelectorAll(".hide");
const input = document.querySelector("#input");
const msgBtn = document.querySelector("#msgBtn");
const searchName = document.querySelectorAll(".searchName");
let showing = false;

theme.addEventListener("click", (e) => {
  if (showing === false) {
    hideTheme.style.display = "block";
    document.body.style.backgroundColor = "rgba(0, 0, 0, 0.4)";
    showing = true;
  } else {
    hideTheme.style.display = "none";
    document.body.style.backgroundColor = "";
    showing = false;
  }
});

const messageInput = () => {
  let inputValue = input.value.toLowerCase();
  console.log(inputValue);
  for (let i = 0; i < searchName.length; i++) {
    if (searchName[i].textContent.toLowerCase().includes(inputValue)) {
      console.log("Yes");
      hide[i].style.display = "block";
    } else {
      console.log("No");
      hide[i].style.display = "none";
    }
  }
};


input.addEventListener("input", messageInput);


 const navButton = document.querySelector("#navButton");

const rightSide= document.querySelector(".rightSide")

const postProfile= document.querySelector(".postProfile")
 navButton.addEventListener("click", (e)=>{
  console.log("font-size");
  rightSide.style.fontSize ="10px"
  postProfile.style.fontSize ="10px"
  
 })
