document.getElementById('calculate-btn').addEventListener('click',function(){
    const base = getInputById('base');
    const height= getInputById('height');
    const area= 0.5*base*height;
    document.getElementById('area').innerText=area;
    document.getElementById('triangle-calculation area').innerText=area;
    
})

function getInputById(idName){
     const value=parseFloat(document.getElementById(idName).value);
     return value;
}
document.getElementById('triangle').addEventListener('mouseover',function(){
    document.getElementById('triangle').style.backgroundColor='pink';
})
document.getElementById('triangle').addEventListener('mouseout',function(){
    document.getElementById('triangle').style.backgroundColor='';
})

document.getElementById('triangle-convert-to-meter').addEventListener('click',function(){
    const base = getInputById('base');
    const height= getInputById('height');
    const area= (0.5*base*height)/10000;
    document.getElementById('triangle-calculation area').innerText=area;
    document.getElementById('triangle-cm').innerText='m';
})