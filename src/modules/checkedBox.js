
import { taskList } from "./enterValue.js";
import { iconHover } from "./iconHover.js";

export const checkedBoxItem = (checkBoxInput, listContainer, listBox, listInfo, iconImg, descr) =>{
    checkBoxInput.addEventListener('change', (e) =>{
        e.preventDefault();
        let box = e.target;
        let parent = box.parentNode;
        let checkedBox = parent.getElementsByClassName('check-box')[0];
     
        
        if(checkedBox.checked === true){
         checkBoxInput.classList.toggle('checked')  
        listInfo.classList = "line-through";
        iconImg.classList = "fa-solid fa-trash icon";
       
       
        }else if(checkedBox.checked === false){
            checkBoxInput.classList = 'check-box'
            listInfo.classList = "list-info";
            iconImg.classList = "fa-solid fa-ellipsis-vertical icon";
           
           
        }
        let storedData = JSON.parse(localStorage.getItem('taskList'))
        const checkBoxItem =document.querySelectorAll('.check-box')
        const checkedItem = document.querySelectorAll('checked')
   
 
    checkBoxItem.forEach(i => {
        i.addEventListener('change', () => {
        
      
    for(let i = 0; i < storedData.length; i++){
    
         if (checkBoxItem[i].classList === "check-box") {
            
        storedData[i].completed = false;
       
        
        
         }else if (checkBoxItem[i].classList.contains('checked')){ 
            
            storedData[i].completed = true
          
           
         }
         
            }
            localStorage.setItem('taskList', JSON.stringify(storedData))
          })
    
   
   })
              


      iconImg.addEventListener('click', () => {
          listContainer.remove();
          
        

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
           
        
            } 
        }               
      })

      let clearBtn = document.querySelector('#clear-btn');
      clearBtn.addEventListener('click', () => {
          if(checkedBox.checked === true){
              listContainer.remove();
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
            }         
          }
      })

    })
    

    listContainer.appendChild(listBox)
    listBox.append(checkBoxInput, listInfo, iconImg)    
   
    const itemStorage = JSON.parse(localStorage.getItem('taskList'));
 

     

           
}


