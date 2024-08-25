let menu = document.querySelector('.menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    navbar.classList.toggle('open-menu')
    menu.classList.toggle('move')
}
window.onscroll = () =>{
    navbar.classList.remove('open-menu')
    menu.classList.remove('move')
}

// Scroll Top

// let scrollTop = document.querySelector(".scroll-top");

// window.addEventListener("scroll", () =>{
//     scrollTop.classList.toggle("scroll-active", window.scrollY > 400);
// });

// Question

// Reviews

var swiper = new Swiper(".reviews-content", {
    spaceBetween: 30,
    centeredSlidaes: true,
    autoplay:{
        deplay: 5000,
        disableOnInteraction: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });


// EMAILJS

// function validate(){
//     let name = document.querySelector('.name');
//     let email = document.querySelector('.email');
//     let message = document.querySelector('.message');
//     let sendBtn = document.querySelector('.send-btn');

//     sendBtn.addEventListener('click', (e) => {
//         e.preventDefault();
//         if (name.value == "" || email.value == "" || message.value === ""){
//             emptyerror();
//         } else {
//             sendemail(name.value, email.value, message.value);
//             success();
//         }
//     });
// }
// validate();

// function sendemail(name, email, message){
//     emailjs.send("service_xi2c1bu", "template_blx3468", {
//         name: name,
//         email: email,
//         message: message,
//         reply_to: "CyberEducação",
//     });
// }

// function emptyerror(){
//     alert('Mensagem não enviada');
// } 

// function success(){
//     alert('Mensagem enviada!');
// }

function validate(){
    let name = document.querySelector('.name')
    let email = document.querySelector('.email')
    let message = document.querySelector('.message')
    let sendBtn = document.querySelector('.send-btn')

    sendBtn.addEventListener('click',(e) =>{
        e.preventDefault();
        if (name.value == "" || email.value == "" || message.value === ""){
            emptyerror();
        } else{
            sendemail (name.value, email.value, msg.value);
            success();
        }
    });
}
validate();

function sendemail(name,email,message){
    emailjs.send("service_xi2c1bu","template_blx3468",{
        name: name,
        email: email,
        message: message,
        reply_to: "CyberEducação",
        });
}

function emptyerror(){
      alert('Mensagem não enviada')
} 
function success(){
        alert('Mensagem enviada!')     
}