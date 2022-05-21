let logo = document.getElementById("userlogo1");
let form = document.getElementById("login");
let cross = document.getElementById("cross");

logo.addEventListener("click",()=>{
    form.classList.add("popup");    
});

cross.addEventListener("click",()=>{
    form.classList.remove("popup");
});

const toTop = document.querySelector(".materialicons");
window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
        toTop.classList.add("active");
    } else {
        toTop.classList.remove("active");
    }
})

let btnscrolltoup = document.getElementById('btnscrolltoup');
btnscrolltoup.addEventListener("click", () => {
    // btnscrolltoup.style.backgroundColor = "purple";
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
});


window.addEventListener('scroll',revealR);
function revealR(){
    var reveal = document.querySelectorAll('.revealR');

    for (var i = 0  ; i< reveal.length; i++)
    {
        var windowheight= window.innerHeight;
        var revealtop = reveal[i].getBoundingClientRect().top;
        var revealpoint  = 150;

        if(revealtop < windowheight - revealpoint){
            reveal[i].classList.add('active');
        }
        else{
            reveal[i].classList.remove('active');
        }
    }
}

window.addEventListener('scroll',revealL);
function revealL(){
    var revealL = document.querySelectorAll('.revealL');

    for (var i = 0  ; i< revealL.length; i++)
    {
        var windowheight= window.innerHeight;
        var revealtop = revealL[i].getBoundingClientRect().top;
        var revealpoint  = 150;

        if(revealtop < windowheight - revealpoint){
            revealL[i].classList.add('active');
        }
        else{
            revealL[i].classList.remove('active');
        }
    }
}

