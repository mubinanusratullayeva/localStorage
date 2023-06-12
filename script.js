//LOCALSTORAGE

// const body = document.querySelector('body')
//       elInput = document.querySelector('.toDoInput')
//       modeBtn = document.querySelector('.ModeBtn')
//       toDoBtn = document.querySelector('.toDoBtn')
//       elUl = document.querySelector('.wrapper')
//       clearBtn = document.querySelector('.clearBtn')


// let themeStatus = localStorage.getItem('theme')

// if (themeStatus !== "dark") {
//       body.classList.remove('dark')
// }else{
//       body.classList.add('dark')
// }

// modeBtn.addEventListener('click', () => {
//       let theme = localStorage.getItem('theme')
//       if(theme === 'dark'){
//             body.classList.remove('dark');
//             localStorage.setItem('theme', 'light')
//       }else{
//             body.classList.toggle('dark')
//             localStorage.setItem('theme', 'dark')
//       }
     
// })


// toDoBtn.addEventListener('click', ()=> {

//       let valueIn = elInput.value;

//       function name(params) {

//             if (valueIn.trim() === '') {
//                   return
//             }

//         let elLi = document.createElement('li');
//         elLi.textContent = valueIn;
//         let delBtn = document.createElement('button');

//         let smth = localStorage.getItem('smth')

//         if(smth){
//               elLi.textContent = valueIn
//         }

//       localStorage.setItem('smth', valueIn)

//         delBtn.textContent = 'Delete';
//         delBtn.classList.add('delBtn');
    
//         delBtn.addEventListener('click', ()=> {
//           elLi.remove();
//         });
    
//         elLi.append(delBtn);
//         params.append(elLi);

//       }
//       name(elUl);
    
//       elInput.value = '';
//     });

//     clearBtn.addEventListener('click', ()=>{
//       localStorage.removeItem('smth')
//     })




// //JSONPLACEHOLDER


// fetch('https://jsonplaceholder.typicode.com/users')
// .then(res => res.json())
// .then((data)=> {
//     // console.log(data);
//     data.forEach(item => {
//     let usersUl = document.querySelector('.users')
//     let text = document.querySelector('.text')
//     text.innerHTML = `name: ${item.name}<br>
//     username: ${item.username}<br>
//     email: ${item.email}`
//         let liEl = document.createElement('li')
//         liEl.classList.add('card')
//         liEl.innerHTML = `name: ${item.name}<br>
//         username: ${item.username}<br>
//         email: ${item.email}`
//         liEl.classList.add('btn')
//         liEl.setAttribute('data-bs-target', '#exampleModalToggle')
//         liEl.setAttribute('data-bs-toggle', 'modal')
//         usersUl.append(liEl)
//     });
// }).catch(err => console.error(err))



//8-HOMEWORK

window.addEventListener('DOMContentLoaded', () => {
    let token = localStorage.getItem('token')

    if(token){
        window.location.href = 'file:///C:/Users/Mubina/Desktop/MIT%20homework/4__4%20month/6%20homework/home.html'
    }
})


let elForm = document.querySelector('.elForm')
let elinp = document.querySelector('.elForm__inp')
let elPassW = document.querySelector('.elForm__pass')

elForm.addEventListener('submit', (a) =>{
    a.preventDefault();

    fetch('https://reqres.in/api/login', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email: elinp.value,
            password: elPassW.value,
        })
    })
    .then(res => res.json())
    .then((data => {
        if (data.token) {
            localStorage.setItem('token', JSON.stringify(data.token))
            window.location.href = 'file:///C:/Users/Mubina/Desktop/MIT%20homework/4__4%20month/6%20homework/home.html'
        }
        if(data.error){
            alert(data.error)
        }
    })).catch(err => alert(err))
})