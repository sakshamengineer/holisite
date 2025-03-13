let btn = document.querySelector('.access');
let cs = document.querySelectorAll('.access1');
let cc = document.querySelector('.access2');
let c = document.querySelector('.access3');
let img = document.querySelectorAll("img");
btn.addEventListener('click',()=>{
    cs.forEach((element) => {
        element.classList.toggle("cube-side");
    });
    img.forEach((element) => {
        element.classList.toggle('img1');
    });
    cc.classList.toggle("cube-container");
    cc.classList.toggle("cube-container-1");
    c.classList.toggle("cube");
    if (btn.innerText === "Expand the box"){
        btn.innerText = "Shrink to cube";
    }
    else if (btn.innerText === "Shrink to cube"){
        btn.innerText = "Expand the box";
    }
})