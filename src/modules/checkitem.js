let taskList = [];

const numberIndex = () => {
  const dataStorage = JSON.parse(localStorage.getItem('taskList'));

  let newIndex = 1;
  for (let i = 0; i < dataStorage.length; i += 1) {
    dataStorage[i].index = newIndex;
    newIndex += 1;
  }
  localStorage.setItem('taskList', JSON.stringify(dataStorage));
};

const checkItem = () => {
  const listItem = document.querySelectorAll('.list-item');

  listItem.forEach(() => {
    const checkbox = document.querySelectorAll('.check-box');
    const listInfo = document.querySelectorAll('.list-info');
    const iconImg = document.querySelectorAll('.icon');
    const clearBtn = document.querySelector('#clear-btn');
    const storageData = JSON.parse(localStorage.getItem('taskList'));

    for (let i = 0; i < checkbox.length; i += 1) {
      if (checkbox[i].checked) {
        listInfo[i].classList.add('line-through');
        iconImg[i].classList = 'fa-solid fa-trash icon';

        storageData[i].completed = true;
      } else if (checkbox[i].checked === false && listInfo[i]) {
        listInfo[i].classList = 'list-info';
        iconImg[i].classList = 'fa-solid fa-ellipsis-vertical icon';
        storageData[i].completed = false;
      }
      localStorage.setItem('taskList', JSON.stringify(storageData));
    }
    iconImg.forEach((i) => i.addEventListener('click', () => {
      for (let i = 0; i < checkbox.length; i += 1) {
        if (iconImg[i].classList.contains('fa-trash')) {
          listItem[i].remove();
          const storedData = JSON.parse(localStorage.getItem('taskList'));

          const newData = storedData.filter((arr) => arr.descr !== listInfo[i].innerHTML);
          taskList = taskList.filter((arr) => arr.descr !== listInfo[i].innerHTML);

          localStorage.setItem('taskList', JSON.stringify(newData));
          numberIndex();
        }
      }
    }));

    clearBtn.addEventListener('click', () => {
      for (let i = 0; i < checkbox.length; i += 1) {
        if (iconImg[i].classList.contains('fa-trash')) {
          listItem[i].remove();
          const storedData = JSON.parse(localStorage.getItem('taskList'));

          const newData = storedData.filter((arr) => arr.descr !== listInfo[i].innerHTML);
          taskList = taskList.filter((arr) => arr.descr !== listInfo[i].innerHTML);

          localStorage.setItem('taskList', JSON.stringify(newData));

          numberIndex();
        }
      }
    });
  });
};

export { checkItem as default };