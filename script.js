function openTab(i){
  document.querySelectorAll('.content')
    .forEach(c=>c.style.display='none');
  document.getElementById('c'+i).style.display = 'block';
}

openTab(0);
