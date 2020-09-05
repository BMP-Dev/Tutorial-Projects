const sidebarToggle = document.querySelector('.sidebar-toggle');
const sidebar = document.querySelector('.sidebar');
const closBtn = document.querySelector('.sidebar');
sidebarToggle.addEventListener('click',()=>{

  sidebar.classList.toggle("show-sidebar");
});
closBtn.addEventListener('click',()=>{
  sidebar.classList.remove(" show-sidebar");
});
