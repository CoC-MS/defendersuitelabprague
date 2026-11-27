(function(){
  var boxes=[].slice.call(document.querySelectorAll('input.chk'));
  var key='defender-lab-prague-nov';
  var saved={};try{saved=JSON.parse(localStorage.getItem(key)||'{}')}catch(e){}
  function update(){
    var n=boxes.filter(function(b){return b.checked}).length;
    document.getElementById('pct').textContent=n+' / '+boxes.length+' steps done';
    document.querySelector('#bar i').style.width=(100*n/boxes.length)+'%';
  }
  boxes.concat([].slice.call(document.querySelectorAll('input.optional-chk'))).forEach(function(b){
    b.checked=!!saved[b.id];
    b.closest('section').classList.toggle('complete',b.checked);
    b.addEventListener('change',function(){
      saved[b.id]=b.checked;
      try{localStorage.setItem(key,JSON.stringify(saved))}catch(e){}
      b.closest('section').classList.toggle('complete',b.checked);
      update();
    });
  });
  update();
  var lb=document.getElementById('lightbox'),li=lb.querySelector('img');
  document.querySelectorAll('figure img').forEach(function(i){
    i.addEventListener('click',function(){li.src=i.src;lb.style.display='flex'});
  });
  lb.addEventListener('click',function(){lb.style.display='none'});
})();
