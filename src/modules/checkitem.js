let taskList = [];

const checkItem = () => {
    const listItem = document.querySelectorAll('.list-item');

    listItem.forEach(i => {
        const checkbox = document.querySelectorAll('.check-box');
        const listInfo = document.querySelectorAll('.list-info');
        const iconImg = document.querySelectorAll('.icon')
        const clearBtn =document.querySelector('#clear-btn')
         
         for (let i = 0; i < checkbox.length;i+=1){
             if(checkbox[i].checked){
            
             listInfo[i].classList.add('line-through')
             iconImg[i].classList = 'fa-solid fa-trash icon'
             }else if(checkbox[i].checked ===false && listInfo[i]){
                 listInfo[i].classList = 'list-info'
                 iconImg[i].classList = 'fa-solid fa-ellipsis-vertical icon'
             }

             if (iconImg[i].classList.contains('fa-trash')){
                 
                 iconImg[i].addEventListener('click', () => {
                     listItem[i].remove();
                     numberIndex();
                 })
             }
             if (iconImg[i].classList.contains('fa-trash')){
                 clearBtn.addEventListener('click', () => {
                     listItem[i].remove();
     const storedData = JSON.parse(localStorage.getItem('taskList'))
       
       const newData = storedData.filter(arr => arr.descr !==  listInfo[i].innerHTML)
       taskList = taskList.filter(arr => arr.descr !== listInfo[i].innerHTML )
       console.log(taskList)
       localStorage.setItem('taskList', JSON.stringify(newData))
       
       numberIndex();
                     
                 })
             }
         }
    })

    
}

const numberIndex = () => {
    const dataStorage = JSON.parse(localStorage.getItem('taskList'))
            console.log(dataStorage)
            let newIndex = 0;
            for (let i = 0; i < dataStorage.length; i+=1){
                dataStorage[i].index = newIndex+=1
                
            }
            console.log(dataStorage)               
            localStorage.setItem('taskList', JSON.stringify(dataStorage))
}


export {checkItem as default}