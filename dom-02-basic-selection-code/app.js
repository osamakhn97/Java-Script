// const h1 = document.getElementById('main-title');

// h1.textContent = 'Some new title!';
// h1.style.color = 'white';
// h1.style.backgroundColor = 'black';

// const li = document.querySelector('li:last-of-type');
// li.textContent = li.textContent + ' (Changed!)';

// const body = document.body;

// // const listItemElements = document.querySelectorAll('li');
// const listItemElements = document.getElementsByTagName('li');

// for (const listItemEl of listItemElements) {
//   console.dir(listItemEl);
// }

//--------------------------------------------
const lItems = document.querySelectorAll('li');
console.log(lItems);
lItems.forEach(e=>{
  e.style.backgroundColor = "blue"
})
let h1 = document.getElementById('main-title');
h1.textContent = "New Title";
h1.style.color = "white";
h1.style.backgroundColor = "black"
console.log(h1);
let sec = document.getElementById('sec');
sec.className = "invisible";
let btn = document.getElementById('btn');

btn.addEventListener('click',()=>{
  console.log(sec.classList)
  sec.classList.toggle('invisible')
console.log(sec.classList)
})