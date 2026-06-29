const today=new Date().toLocaleDateString();
document.getElementById('today').textContent='Today: '+today;
function load(){let arr=JSON.parse(localStorage.getItem('journal')||'[]');
history.innerHTML=arr.reverse().map(e=>`<div class="entry"><b>${e.date}</b><br>Dose: ${e.dose}<br>Pain: ${e.pain}/10<br>Sleep: ${e.sleep}<br>Mood: ${e.mood}<br>Victory: ${e.victory}<br>${e.notes}</div>`).join('')}
function save(){
let arr=JSON.parse(localStorage.getItem('journal')||'[]');
arr.push({date:today,dose:dose.value,pain:pain.value,sleep:sleep.value,mood:mood.value,victory:victory.value,notes:notes.value});
localStorage.setItem('journal',JSON.stringify(arr));
alert('Saved');load();}
load();