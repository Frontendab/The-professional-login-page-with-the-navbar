
let register = document.querySelector('.register');
let wrapper = document.getElementById('wrapper');
let linkLogin = document.querySelector('.link-login');
let btnLogin = document.getElementById('login');
let Close = document.getElementById('close');


btnLogin.addEventListener('click', ()=>{
    wrapper.classList.add('active-scale')
});

register.addEventListener('click', ()=>{
    wrapper.classList.add('active');
});

linkLogin.addEventListener('click', ()=>{
    wrapper.classList.remove('active');
});

Close.addEventListener('click', ()=>{
    wrapper.classList.remove('active-scale')
});


















































































