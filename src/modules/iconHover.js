
import {checkedBoxItem} from "./checkedBox.js"
import { Task, index, taskList } from "./enterValue.js";


export const iconHover = (descr, checkBoxInput, listContainer, listBox) => {   
    const iconImg = document.createElement('i');
    iconImg.classList.add('fa-solid' ,'fa-ellipsis-vertical', 'icon');

    const listInfo = document.createElement('li');
    listInfo.classList.add('list-info');
    listInfo.innerHTML = descr;

    iconImg.addEventListener('mouseover', (e) => {
        let mouseOver = e.target;
        let parent = mouseOver.parentNode;
        let iconFan = parent.getElementsByClassName('icon')[0];
  
        iconFan.style.cursor = "move"
    })

   iconImg.addEventListener('mouseout', (e) => {
        let mouseOver = e.target;
        let parent = mouseOver.parentNode;
        let iconFan = parent.getElementsByClassName('icon')[0];
        iconFan.classList = "fa-solid fa-ellipsis-vertical icon";
    })

    iconImg.addEventListener('click', (e) => {
        let trashClick = e.target;
        let parent = trashClick.parentNode;
        let iconFan = parent.getElementsByClassName('icon')[0];
        listInfo.classList.toggle("edit"); 
        
        if(listInfo.classList.contains('edit')){
            listInfo.remove();
            let newInput = document.createElement('input');
            listBox.insertBefore(newInput, iconImg);
            newInput.classList = 'newInput'
            newInput.value = descr;
const newInputDiv = document.querySelectorAll('.newInput')


        newInputDiv.forEach(i => {
            i.addEventListener('keypress', e => {
                if (e.key === "Enter"){
          const editTask = new Task(newInput.value, false, index);
          
                   taskList.push(editTask)  
                  
                   for (let i in taskList){
                    if(taskList[i].descr === descr){                           
                       
                        taskList.splice(i,1) 
                          
                        localStorage.setItem("taskList", JSON.stringify(taskList)) 
                        const storedItem = JSON.parse(localStorage.getItem(('taskList'))) 
           
           let index = 0;
           for (let i = 0;i < storedItem.length; i++){ 
           if (storedItem[i].index > 0){
               storedItem[i].index = index+=1
               
           }
           
           }
        
           localStorage.setItem('taskList', JSON.stringify(storedItem)) 
                                       
                    }                                              
                    newInput.remove();
                    listBox.insertBefore(listInfo, iconImg);                              
                    listInfo.innerHTML = newInput.value  

                    

                }    
            }   
                          
           
                })
            })
        } 
       
    })

    checkedBoxItem(checkBoxInput, listContainer, listBox, listInfo, iconImg, descr)
        
}