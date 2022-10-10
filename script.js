const pwd1 = document.getElementById('password');
const pwd2 = document.getElementById('confirm-password');
const button = document.querySelector('button');
const section = document.querySelector('#password-section');
const message = document.createElement('p');
message.textContent = '*Passwords do not match';
message.style.color = "red";
message.style.fontSize = "14px";

button.addEventListener('click', () => {
    console.log(pwd1);
    console.log(pwd2)

    if(pwd1.value !== pwd2.value){
        pwd1.classList.add('error-input');
        pwd2.classList.add('error-input');
        section.appendChild(message);
    }
    else{
        pwd1.classList = '';
        pwd2.classList = '';
        section.removeChild(message);
        alert("This is a scam website! We just stole your information. lmao");
    }
})


