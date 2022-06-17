import { addItem, deleteItem, editItem, updateStatus, clearItems } from '../mock/addItem.js';

describe('To add and remove items from todo lis', () => {
  test('To add new item to the list', () => {
    const taskList = [];
    document.body.innerHTML = `
      <div class="input-field">
          
      <input id="to-do-input" type="text" value="Join morning session">
      <i class="fa-solid fa-arrow-right-to-bracket"></i>   
      
      </div>`;
    const inputAdd = document.querySelector('#to-do-input');
    document.body.innerHTML = `
      <div class="to-do-cont" id="to-do-cont">
      <div class='list'>
      <ul class='list-item'></ul>
      <input type='checkbox' class='check-box'>
      <li class='list-info'>${inputAdd.value}</li>
      <i class='fa-solid fa-ellipsis-vertical icon'></i>
      </div>
      </div>
      <button type="button" id="clear-btn" class="clear-btn">Clear all completed</button>
      `;
    addItem(taskList, inputAdd);

    expect(taskList[0].descr).toBe('Join morning session');
  });

  test('To remove item from tasklist', () => {
    const storedDataFromLocalStorage = [
      { descr: 'join morning session', completed: false, index: 1 },
      { descr: 'first session pair programming', completed: false, index: 2 },
      { descr: 'take lunch', completed: false, index: 3 },
    ];

    deleteItem(storedDataFromLocalStorage);
    expect(storedDataFromLocalStorage).toHaveLength(2);
  });

  test('To edit item in the taskList', () => {
    const storedDataFromLocalStorage = [
        { descr: 'join morning session', completed: false, index: 1 },
        { descr: 'first session pair programming', completed: false, index: 2 },
        { descr: 'take lunch', completed: false, index: 3 },
      ];

    editItem('Join stand-up team session', storedDataFromLocalStorage);
    expect(storedDataFromLocalStorage[2].descr).toBe('Join stand-up team session')
  })

  test('To update comleted status', () => {
    document.body.innerHTML = `
      
      <input type='checkbox' class='check-box'>
      <input type='checkbox' class='check-box checked' checked>
      <input type='checkbox' class='check-box'>
     `

      const storedDataFromLocalStorage = [
        { descr: 'join morning session', completed: false, index: 1 },
        { descr: 'first session pair programming', completed: false, index: 2 },
        { descr: 'take lunch', completed: false, index: 3 },
      ];
    const checkBox = document.querySelectorAll('.check-box');
   
    updateStatus(storedDataFromLocalStorage, checkBox );
    
    expect(storedDataFromLocalStorage[1].completed).toBeTruthy();
  })

  test('To clear all completed item from tasklist', () => {
    const storedDataFromLocalStorage = [
      { descr: 'join morning session', completed: true, index: 1 },
      { descr: 'first session pair programming', completed: false, index: 2 },
      { descr: 'take lunch', completed: true, index: 3 },
    ];

    clearItems(storedDataFromLocalStorage);
    expect(storedDataFromLocalStorage).toHaveLength(1);
  });
});