export const showStorage = () => {
const storedData = JSON.parse(localStorage.getItem('taskList'))

const container = document.querySelector('.to-do-cont');
if (storedData){
for (let i = 0; i < storedData.length; i += 1) {
  const listContainer = document.createElement('div');
  listContainer.classList.add('list');
  listContainer.innerHTML = `
       <ul>
       <input id="check-box" class="check-box" type="checkbox">
       <li class="list-info">${storedData[i].descr}</li>
       <i class="fa-solid fa-ellipsis-vertical icon"></i>
       </ul>
       `;
  container.appendChild(listContainer);
}
}
const checkBox = document.querySelectorAll('ul input');
const listInfo = document.querySelectorAll('.list-info');
const icon = document.querySelectorAll('.icon');

const markedItem = () => {
  for (let i = 0; i < listInfo.length; i += 1) {
    if (checkBox[i].checked === true) {
      listInfo[i].style.textDecoration = 'line-through';
      icon[i].classList = 'fa-solid fa-trash icon';
    } else if (checkBox[i].checked === false) {
      listInfo[i].style.textDecoration = 'none';
      icon[i].classList = 'fa-solid fa-ellipsis-vertical icon';
    }
  }
};

container.addEventListener('click', markedItem);
}