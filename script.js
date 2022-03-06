var hlId=document.getElementById('hl');
var buttonId=document.getElementById('button');
var counter=0;
buttonId.addEventListener('click',function(){
   counter++;
   hlId.textContent='Кликов сделано:'+counter;
});