const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
const btn = document.getElementById('btn');
const color = document.querySelector(".color");

btn.addEventListener('click', ()=>{
  const randomHEX = getRndHex();
  document.body.style.backgroundColor = randomHEX;
  color.textContent = randomHEX;
});

function getRndHex(){
  let hexString = "#";
  for (var i = 0; i < 6; i++) {
  hexString +=hex[Math.floor(Math.random() * hex.length)];
  }
  return hexString;
}
