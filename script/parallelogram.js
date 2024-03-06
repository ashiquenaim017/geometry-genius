document.getElementById('calculate-btn-parallelogram').addEventListener('click',function(){
    const base = getInputById('base-parallelogram');
    const height= getInputById('height-parallegram');
    const area= base*height;
    document.getElementById('area-parallelogram').innerText=area;
    
})

function getInputById(idName){
     const value=parseFloat(document.getElementById(idName).value);
     return value;
}
document.getElementById('parallelogram').addEventListener('mouseover',function(){
    document.getElementById('parallelogram').style.backgroundColor='goldenrod';
})
document.getElementById('parallelogram').addEventListener('mouseout',function(){
    document.getElementById('parallelogram').style.backgroundColor='';
})