const body = document.querySelector('body')
      elInput = document.querySelector('.toDoInput')
      modeBtn = document.querySelector('.ModeBtn')
      toDoBtn = document.querySelector('.toDoBtn')
      elUl = document.querySelector('.wrapper')
      clearBtn = document.querySelector('.clearBtn')


let themeStatus = localStorage.getItem('theme')

if (themeStatus !== "dark") {
      body.classList.remove('dark')
}else{
      body.classList.add('dark')
}

modeBtn.addEventListener('click', () => {
      let theme = localStorage.getItem('theme')
      if(theme === 'dark'){
            body.classList.remove('dark');
            localStorage.setItem('theme', 'light')
      }else{
            body.classList.toggle('dark')
            localStorage.setItem('theme', 'dark')
      }
     
})


toDoBtn.addEventListener('click', ()=> {

      let valueIn = elInput.value;

      function name(params) {

            if (valueIn.trim() === '') {
                  return
            }

        let elLi = document.createElement('li');
        elLi.textContent = valueIn;
        let delBtn = document.createElement('button');

        let smth = localStorage.getItem('smth')

        if(smth){
              elLi.textContent = valueIn
        }

      localStorage.setItem('smth', valueIn)

        delBtn.textContent = 'Delete';
        delBtn.classList.add('delBtn');
    
        delBtn.addEventListener('click', ()=> {
          elLi.remove();
        });
    
        elLi.append(delBtn);
        params.append(elLi);

      }
      name(elUl);
    
      elInput.value = '';
    });

    clearBtn.addEventListener('click', ()=>{
      localStorage.removeItem('smth')
    })