class Task {
  constructor(descr, completed, index = 0) {
    this.descr = descr;
    this.completed = completed;
    this.index = index;
  }
}

const addItem = (taskList, inputAdd) => {
  const newItem = new Task(inputAdd.value, false, 1);
  taskList.push(newItem);
};

const deleteItem = (storedDataFromLocalStorage) => {
  for (let i = 0; i < storedDataFromLocalStorage.length; i += 1) {
    if (storedDataFromLocalStorage[i].completed === true) {
      storedDataFromLocalStorage.splice(i, 1);
    }
  }
};

export { addItem, deleteItem };
