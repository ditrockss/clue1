const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const btn3 = document.querySelector('#btn3');
const btn4 = document.querySelector('#btn4');
const btn5 = document.querySelector('#btn5');
const hint = document.querySelector('#hint');
let cnt1 = 6;
let cnt2 = 6;
let cnt3 = 6;
let cnt4 = 6;
let cnt5 = 6;


btn1.addEventListener('click', function(e){
    e.preventDefault();
    if(cnt1>0){
        btn1.innerHTML = `<h3>${cnt1-1}</h3>`
        cnt1--;
    }
    if(cnt1 == 0){
        btn1.remove()
        btn2.style.display = 'block' 
    }
})

btn2.addEventListener('click', function(e){
    e.preventDefault();
    if(cnt2>0){
        btn2.innerHTML = `<h3>${cnt2-1}</h3>`
        cnt2--;
    }
    if(cnt2 == 0){
        btn2.remove()
        btn3.style.display = 'block' 
    }
})

btn3.addEventListener('click', function(e){
    e.preventDefault();
    if(cnt3>0){
        btn3.innerHTML = `<h3>${cnt3-1}</h3>`
        cnt3--;
    }
    if(cnt3 == 0){
        btn3.remove()
        btn4.style.display = 'block' 
    }
})

btn4.addEventListener('click', function(e){
    e.preventDefault();
    if(cnt4>0){
        btn4.innerHTML = `<h3>${cnt4-1}</h3>`
        cnt4--;
    }
    if(cnt4 == 0){
        btn4.remove()
        btn5.style.display = 'block' 
    }
})

btn5.addEventListener('click', function(e){
    e.preventDefault();
    if(cnt5>0){
        btn5.innerHTML = `<h3>${cnt5-1}</h3>`
        cnt5--;
    }
    if(cnt5 == 0){
        btn5.remove()
        hint.style.display = 'block' 
    }
})