document.getElementById('calculate-btn-rectangle').addEventListener('click',function(){
    const width = getInputById('width-rectangle');
    const height= getInputById('height-rectangle');
    const area= width*height;
    document.getElementById('area-rectangle').innerText=area;
    document.getElementById('rectancle-calculation area').innerText=area;

   
    
})

function getInputById(idName){
     const value=parseFloat(document.getElementById(idName).value);
     return value;
}
document.getElementById('rectangle').addEventListener('mouseover',function(){
    document.getElementById('rectangle').style.backgroundColor='gray';
})
document.getElementById('rectangle').addEventListener('mouseout',function(){
    document.getElementById('rectangle').style.backgroundColor='';
})
document.getElementById('rectangle-convert-to-meter').addEventListener('click',function(){
    const width = getInputById('width-rectangle');
    const height= getInputById('height-rectangle');
    const area= (width*height)/10000;
    document.getElementById('rectancle-calculation area').innerText=area;
    document.getElementById('rectangle-cm').innerText='m';
})