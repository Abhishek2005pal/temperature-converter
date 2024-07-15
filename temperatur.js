let celciusInput= document.querySelector('#celcius > input')
let farenhiteInput= document.querySelector('#farenhite > input')
let kelvinInput= document.querySelector('#kelvin > input')

let btn =document.querySelector('.button button');


function roundNumber(number){
    return Math.round(number*100)/100
}

celciusInput.addEventListener('click',function(){ 
    let ctemp=parseFloat(celciusInput.value)
    let ftemp=(ctemp*(9/5))+32
    let ktemp=ctemp + 273.15

    farenhiteInput.value=roundNumber(ftemp)
    kelvinInput.value=roundNumber(ktemp)
})
farenhiteInput.addEventListener('click',function(){
    let ftemp=parseFloat(farenhiteInput.value)
    let ctemp=(ftemp-32)*(5/9)
    let ktemp=(ftemp-32)*(5/9)+273.15

    celciusInput.value=roundNumber(ctemp)
    kelvinInput.value=roundNumber(ktemp)
})

kelvinInput.addEventListener('click',function(){
    let ktemp=parseFloat(kelvinInput.value)
    let ctemp=ktemp-273.15
    let ftemp=(ktemp-273.15)*(9/5)+32

    celciusInput.value=roundNumber(ctemp)
    farenhiteInput.value=roundNumber(ftemp)
})

btn.addEventListener('click',()=>{
    celciusInput.value=""
    farenhiteInput.value=""
    kelvinInput.value=""

})