const modalAdd= document.querySelector('.modal-btn');
const closeBtn = document.querySelector('.close-btn');
const modal = document.querySelector('.modal-overlay');

modalAdd.addEventListener('click',()=>{
  modal.classList.add("open-modal");
});
closeBtn.addEventListener('click',()=>{
  modal.classList.remove("open-modal");
});
