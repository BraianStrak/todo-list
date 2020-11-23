const renderList = (content) => {    
    let newList = document.createElement('button');
    newList.textContent = content;
    newList.classList.add("d-block", "todoText", "w-100", "bg-secondary", "mb-2");
    newList.id = "dynamicButton";

    let listContainer = document.getElementById('todo-lists-container');
    listContainer.appendChild(newList);
}

export {renderList}