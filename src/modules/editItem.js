let taskList = [];

class Task {
    constructor(descr, completed, index = 0) {
      this.descr = descr;
      this.completed = completed;
      this.index = index;
    }
  }
  
  let index = 0;
const numberIndex = () => {
      const dataStorage = JSON.parse(localStorage.getItem('taskList'));
    
      let newIndex = 1;
      for (let i = 0; i < dataStorage.length; i += 1) {
        dataStorage[i].index = newIndex;
        newIndex += 1;
      }
      localStorage.setItem('taskList', JSON.stringify(dataStorage));
    };
const editContainer = document.querySelector('.to-do-cont')
console.log(editContainer)


const editFunction = (e) => {
    
      const listItem = document.querySelector('.list-item');
      const editIcon = document.querySelector('.icon');
   // console.log(e.target);
    if(e.target.classList.contains('fa-solid')){
        //console.log(e.target.parentElement.firstElementChild.nextElementSibling)
        const oldInput = e.target.parentElement.firstElementChild.nextElementSibling
        const listInfo = document.querySelector('.list-info');
        const editCont = document.createElement('div');
      
          editCont.classList.add('edit-con');

          const editInput = document.createElement('input');
          editInput.classList.add('edit-input');

          const editMsg = document.createElement('span');
          editMsg.classList.add('edit-msg');

          editMsg.innerHTML = "Press 'Enter' to save changes";

          editCont.append(editInput, editMsg);
          e.target.parentElement.replaceChild(editCont, oldInput);
         
         editInput.value = oldInput.value;

    
        let editIndex;
        // Create new input node and replace the old node on edit button click
    //   const listInfo = document.querySelector('.list-info');
    //   const listItem = document.querySelector('.list-item');
    //   const editIcon = document.querySelector('.icon');

        //editIcon.forEach(i => {
           // i.addEventListener('click', () => {
        //   const editCont = document.createElement('div');
        //   editCont.classList.add('edit-con');
        //   const editInput = document.createElement('input');
        //   editInput.classList.add('edit-input');
        //   const editMsg = document.createElement('span');
        //   editMsg.classList.add('edit-msg');
        //   editMsg.innerHTML = "Press 'Enter' to save changes";

        //   editCont.append(editInput, editMsg);
        //   listItem.replaceChild(editCont, listInfo);
        //   editInput.value = listInfo.innerHTML;
      
        //   const storedData = JSON.parse(localStorage.getItem('taskList'));
      
        //   const newData = storedData.filter((arr) => arr.descr !== listInfo.innerHTML);
      
        //   taskList = taskList.filter((arr, i) => {
        //     if (arr.descr === listInfo.innerHTML) {
        //       editIndex = i;
        //     }
        //     return arr.descr !== listInfo.innerHTML;
        //   });
      
        //   localStorage.setItem('taskList', JSON.stringify(newData));
         
          // Replace input node with another node and also holding the value of the input node
         
    }

    const editInput = document.querySelector('.edit-input')
    const editCont = document.querySelector('.edit-con')
    //const listItem = document.querySelector('.list-item');
   // console.log(listItem)
         
        //   listItem.addEventListener('keypress', (e) => {
            
        //         if (e.key === 'Enter') {
        //             e.preventDefault();
        //          console.log('hi')
        //    const listInfo = document.createElement('div');
        //    listInfo.classList.add('list-info')

        //    console.log(editCont)
           
        //    let oldInput = editCont.parentElement.firstElementChild.nextElementSibling
           
        //    listItem.replaceChild(listInfo, editCont);
        //       listInfo.innerHTML = editInput.value;
        //       const storedData = JSON.parse(localStorage.getItem('taskList'));
      
        //       const editedTask = new Task(listInfo.innerHTML, false, index);
      
        //       storedData.splice(editIndex, 0, editedTask);
      
        //       taskList.splice(editIndex, 0, editedTask);
      
        //       localStorage.setItem('taskList', JSON.stringify(storedData));
      
        //       numberIndex();
            }
        //   });

        
       });
    
   // })
        numberIndex();
      };

      

      export {editFunction as default}
    