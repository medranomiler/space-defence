const loginBtn = document.querySelector('#login-btn');
console.log(loginBtn)

loginBtn.addEventListener('click', (e) => {
    e.preventDefault()
    document.location.replace('/login')
})  
 