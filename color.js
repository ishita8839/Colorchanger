const buttons =document.querySelectorAll('.button');
const body= document.querySelector('body');
buttons.forEach(function(btn){
    console.log(btn);
    btn.addEventListener('click',function(e){
        e.preventDefault();
        console.log(e);
        console.log(e.target);
        if (e.target.id === 'grey'){
            body.style.backgroundColor=e.target.id;
        }
        if (e.target.id === 'blue'){
            body.style.backgroundColor=e.target.id;
        }
        if (e.target.id === 'red'){
            body.style.backgroundColor=e.target.id;
        }
        if (e.target.id === 'green'){
            body.style.backgroundColor=e.target.id;
        }
        if (e.target.id === 'purple'){
            body.style.backgroundColor=e.target.id;
        }
        if (e.target.id === 'pink'){
            body.style.backgroundColor=e.target.id;
        }
        if (e.target.id === 'orange'){
            body.style.backgroundColor=e.target.id;
        }
        if (e.target.id === 'magenta'){
            body.style.backgroundColor=e.target.id;
        }
        if (e.target.id === 'darkblue'){
            body.style.backgroundColor=e.target.id;
        }
        if (e.target.id === 'yellow'){
            body.style.backgroundColor=e.target.id;
        }
        if (e.target.id === 'darkgreen'){
            body.style.backgroundColor=e.target.id;
        }
        if (e.target.id === 'maroon'){
            body.style.backgroundColor=e.target.id;
        }
        if (e.target.id === 'lightyellow'){
            body.style.backgroundColor=e.target.id;
        }
        if (e.target.id === 'cyan'){
            body.style.backgroundColor=e.target.id;
        }
        if (e.target.id === 'lightblue'){
            body.style.backgroundColor=e.target.id;
        }

})})