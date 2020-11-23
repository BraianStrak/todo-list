const renderItem = (content) => {    
    let newItem = document.createElement('P');
    newItem.textContent = content;
    newItem.classList.add("d-block", "todoText");

    let itemContainer = document.getElementById('todo-item-container');
    itemContainer.appendChild(newItem);
}

const renderAllItems = (list) => {
    let i = 0;

    for (i = 0; i < list.length; i++) { 
        renderItem(list[i].content); 
    }
}

const clearAllItems = () => {
    let itemContainer = document.getElementById('todo-item-container');
    itemContainer.innerHTML = '';
}

export {renderAllItems, clearAllItems};