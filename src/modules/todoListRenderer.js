const renderList = (content) => {    
    let newList = document.createElement('P');
    newList.textContent = content;
    newList.classList.add("d-block", "todoText");

    let listContainer = document.getElementById('todo-lists-container');
    listContainer.appendChild(newList);
}

/*const renderAllItems = (list) => {
    for (i = 0; i < list.length; i++) { 
        renderItem(list[i]); 
    }
}*/

export {renderList}