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
    if (storedDataFromLocalStorage[i].descr === 'first session pair programming') {
      storedDataFromLocalStorage.splice(i, 1);
    }
  }
};

const editItem = (editedItem,storedDataFromLocalStorage) => {
 const replaceItem = new Task(editedItem, false, 3)
  for (let index = 0; index < storedDataFromLocalStorage.length; index+=1){
    if(storedDataFromLocalStorage[index].descr === 'take lunch'){
      storedDataFromLocalStorage.splice(index, 1, replaceItem)
    }
  }

}

const updateStatus = (storedDataFromLocalStorage, checkBox) => {
  for (let i = 0; i <checkBox.length; i+=1 ){ 
  if(checkBox[i].classList.contains('checked')){
    storedDataFromLocalStorage[i].completed = true;
  }
  }
}

const clearItems = (storedDataFromLocalStorage) => {
  for (let i = 0; i < storedDataFromLocalStorage.length; i += 1) {
    if (storedDataFromLocalStorage[i].completed === true) {
      storedDataFromLocalStorage.splice(i, 1);
    }
  }
};

export { addItem, deleteItem, editItem, updateStatus, clearItems };
