// creating drop down form

const addBtn = document.querySelector(".add-button");
let formVisibility = false;
addBtn.addEventListener("click", () => {
  const cityForm = document.querySelector(".city-form");
  if (formVisibility) {
    cityForm.style.display = "none";
  } else {
    cityForm.style.display = "grid";
  }
  formVisibility = !formVisibility;
});
// creating a side menu
const menuBtn=document.querySelector('.menu-btn');
let menuVisibility=false;
menuBtn.addEventListener('click',()=>{
    const hiddenMenu=document.querySelector('.hidden-menu');
    if(menuVisibility){
        hiddenMenu.style.display='none';
    }else{
        hiddenMenu.style.display='grid';
    }
    menuVisibility=!menuVisibility;
})