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

}

const deleteItem = (storedDataFromLocalStorage) => {
  
  for (let index in storedDataFromLocalStorage){ 
  if(storedDataFromLocalStorage[index].completed === true){
    storedDataFromLocalStorage.splice(index, 1)
  }
}
}

export {addItem, deleteItem}
