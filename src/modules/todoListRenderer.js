const renderList = (content) => {    
    let newList = document.createElement('P');
    newList.textContent = content;
    newList.classList.add("d-block", "todoText");

    let listContainer = document.getElementById('todo-lists-container');
    listContainer.appendChild(newList);
}

export {renderList}