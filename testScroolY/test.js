let stars=document.getElementById('stars')
let moon=document.getElementById('moon')
let mountains3=document.getElementById('mountains3')
let mountains4=document.getElementById('mountains4')
let boat=document.getElementById('boat')
let river=document.getElementById('river')
let rad=document.querySelector('.rad')
window.addEventListener('scroll',function(){ //window.scroll=function(){.....}
    let value =scrollY
    stars.style.left=value+'px'
    moon.style.top=value*2+'px'
    mountains3.style.top=value+'px'
    mountains4.style.top=value+'px'
    river.style.top=value+'px'
    boat.style.top=value+'px'
    boat.style.left=value+'px'
    rad.style.fontSize=value+'px'
    if(scrollY>=67){
        rad.style.fontSize=67+'px'
        rad.style.position='fixed'
        if(scrollY>=423){
            rad.style.display='none'
        }
        else{
            rad.style.display='block'
        }
        if(scrollY>=206){
            document.querySelector('.main').style.background='#376284'
        }
        else{
            document.querySelector('.main').style.background='#200016'
        }
    }
})