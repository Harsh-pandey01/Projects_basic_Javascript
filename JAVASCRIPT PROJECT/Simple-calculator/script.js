let btn = document.querySelectorAll('.btns')
let screen = document.querySelector('#display')
let clear = document.querySelector('.clear')
let equal = document.querySelector('.equal')

btn.forEach((element) => {
    element.addEventListener('click',()=>{
        let screen_val = element.value ;
        screen.value += screen_val ; 
    })
});

equal.addEventListener('click',()=>{
    if(screen.value !== ''){
     let ans= eval(screen.value);
     if(ans!==undefined && ans!== NaN && ans!==Infinity){
        screen.value = ans 
     }else{
        screen.value = "Invalid Operations"
     }
    }
})
clear.addEventListener('click',()=>{
    screen.value = '';
})