import { todoItemFactory } from './modules/todoItem.js';
import { renderItem } from './modules/todoItemRenderer.js';

import { todoListFactory } from './modules/todoList.js';
import { renderList, renderAllItems } from './modules/todoListRenderer.js';    

var addItemBtn = document.querySelector('#addItemBtn');
addItemBtn.addEventListener('click', addItem);

var addListBtn = document.querySelector('#addListBtn');
addListBtn.addEventListener('click', addList);

/*
//list of todo lists
let lists = [];

//the current todo list we are adding stuff to, by default it is the default one
let currentList = todoListFactory("default");
renderList(currentList.content);
lists.push(currentList);
*/

function addItem() {
    const thing = todoItemFactory(document.getElementById("todoItemName").value);
    renderItem(thing.content);
    document.getElementById('todoItemName').value = todoItemName.defaultValue;

    //currentList.addItem(thing);
}

function addList() {
    const thing = todoListFactory(document.getElementById("todoListName").value);
    renderList(thing.content);
    document.getElementById('todoListName').value = todoListName.defaultValue;
    
    //add the list to the array of all the lists
    //lists.push(thing);

    //need to make the new list the currentList, make a separate function for that. 
}


