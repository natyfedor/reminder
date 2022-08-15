var add = document.getElementById('add');
var hour = document.getElementById('hour');
var minute = document.getElementById('minute');
var ul = document.getElementById('list');
var h1 = document.getElementById('h1');
var audio = document.getElementById('audio');


//create hour option
for (i = 0; i < 25; i++){
    var ho = document.createElement('option');
   
    if(i < 10){ho.appendChild(document.createTextNode('0' + i))}
    else if(i < 24) {ho.appendChild(document.createTextNode(i))}
    else{ho.appendChild(document.createTextNode('00'))};

    hour.appendChild(ho);
}

//create minute option
for (i = 0; i < 61; i++){
    var min = document.createElement('option');
   
    if(i < 10){min.appendChild(document.createTextNode('0' + i))}
    else if(i < 60) {min.appendChild(document.createTextNode(i))}
    else{min.appendChild(document.createTextNode('00'))};

    minute.appendChild(min);

}


//show real time 

{setInterval(() => {
    var now = new Date;
    formatTime(now);

}, 300);}


function formatTime(now){
var hours = now.getHours();

if (hours < 10){
    var hours = '0'+ hours.toString();
    h1.innerHTML = hours + ':' + minutes;
}else{
    hours = hours.toString();
    h1.innerHTML = hours + ':' + minutes;
}

var minutes = now.getMinutes();
if (minutes < 10){
    var minutes = '0'+ minutes.toString();
    h1.innerHTML = hours + ':' + minutes;
}else{
    minutes = minutes.toString();
    h1.innerHTML = hours + ':' + minutes;
}

//alert needed?

var when = document.getElementsByClassName('when');
for (i = 0; i < when.length; i++){
    var whenHour = when[i].innerHTML.substring(0,2);
    var whenMin = when[i].innerHTML.substring(3,5);

   if (whenHour === hours && whenMin === minutes){
    var thisLi = when[i].parentElement;
    audio.play();

    if (window.confirm(thisLi.firstChild.innerHTML))
{
   
   when[i].parentElement.remove();
   audio.pause();
   audio.currentTime = 0;
}

   } 

}
}

//click on add button
add.addEventListener('click', (e) => {
    e.preventDefault();

    var line = document.createElement('li');
    

    var note = (document.getElementById('mynote')).value;
    var p = document.createElement('p');
    p.appendChild(document.createTextNode(note));
    line.appendChild(p);
    document.getElementById('mynote').value = '';
    
    var time = document.createElement('p');
    time.appendChild(document.createTextNode(hour.value + ':' + minute.value));
    time.classList.add('when');
    line.appendChild(time);

    var img = document.createElement('img');
    img.classList.add('del'); 
    img.setAttribute('src', 'style/trash-svgrepo-com.svg');
    line.appendChild(img);
    
 
  document.getElementById('list').prepend(line);

  //delete new items
  for (let i = 0; i < document.getElementsByClassName('del').length; i++) {
    const element = document.getElementsByClassName('del')[i];

    element.addEventListener('click', function(){
        element.parentElement.style.display = 'none';
    })
  }
 
  })


 //delete existing items
 
for (let i = 0; i <  document.getElementsByClassName('del').length; i++) {
    const del = document.getElementsByClassName('del')[i];
    del.addEventListener('click', function(){
        del.parentElement.style.display = 'none';
       
    })
    }