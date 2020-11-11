let reply = (reply1) => {
    reply1 = document.getElementById('reply1')
    console.log(reply1);
    
}

// click on like button 

let like = document.getElementById('like');
const singleClick = () =>{
    like.style.fontWeight = 'bold'
    like.style.background = '#bbe1fa'
    like.style.color = '#1b262c'
    like.innerHTML = `"Liked"`
}
const dubleClick = () =>{
    like.style.fontWeight = 'normal'
    like.style.background = '#3282b8'
    like.style.color = '#fff'
    like.innerHTML = "Like"
}


// 2nd step to call function on click and duble click 
var clickCount = 0;

like.addEventListener('click' , () =>{
    clickCount ++;
    if (clickCount===1) {
        singleClickTimer = setTimeout(() => {
            clickCount = 0;
            singleClick()
        }, 400);
    }else if(clickCount===2) {
        clearTimeout(singleClickTimer)
        clickCount = 0
        dubleClick()
    }
    
})

