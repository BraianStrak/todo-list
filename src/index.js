import { todoItemFactory } from './modules/todoItem.js';
import { renderAllItems, clearAllItems } from './modules/todoItemRenderer.js';

import { todoListFactory } from './modules/todoList.js';
import { renderList } from './modules/todoListRenderer.js';    

var addItemBtn = document.querySelector('#addItemBtn');
addItemBtn.addEventListener('click', addItem);

var addListBtn = document.querySelector('#addListBtn');
addListBtn.addEventListener('click', addList);


//the current todo list we are adding stuff to, by default it is the default one
let currentList = todoListFactory("default");
renderList(currentList.content);

function addItem() {
    //maybe this should be adding exclusively to a list
    const thing = todoItemFactory(document.getElementById("todoItemName").value);
    document.getElementById('todoItemName').value = todoItemName.defaultValue;

    currentList.addItem(thing);

    clearAllItems();
    renderAllItems(currentList.items);
}

function addList() {
    const thing = todoListFactory(document.getElementById("todoListName").value);
    renderList(thing.content);
    document.getElementById('todoListName').value = todoListName.defaultValue; 
}


