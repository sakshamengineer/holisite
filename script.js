let btn = document.querySelector('.access');
cs = document.querySelectorAll('.access1');
cc = document.querySelector('.access2');
c = document.querySelector('.access3');
img = document.querySelectorAll("img");
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
})