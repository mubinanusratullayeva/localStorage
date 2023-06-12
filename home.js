window.addEventListener('DOMContentLoaded', () => {
    let token = localStorage.getItem('token')

    if(!token){
        window.location.href = 'file:///C:/Users/Mubina/Desktop/MIT%20homework/4__4%20month/6%20homework/index.html'
    }
})