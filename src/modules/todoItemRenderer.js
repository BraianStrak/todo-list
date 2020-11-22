const renderItem = (content) => {    
    let newItem = document.createElement('P');
    newItem.textContent = content;
    newItem.classList.add("d-block", "todoText");

    let itemContainer = document.getElementById('todo-item-container');
    itemContainer.appendChild(newItem);
}

export {renderItem};