import { todoItemFactory } from './modules/todoItem.js';
import { renderAllItems, clearAllItems } from './modules/todoItemRenderer.js';

import { todoListFactory } from './modules/todoList.js';
import { renderList } from './modules/todoListRenderer.js';    

var addItemBtn = document.querySelector('#addItemBtn');
addItemBtn.addEventListener('click', addItem);

var addListBtn = document.querySelector('#addListBtn');
addListBtn.addEventListener('click', addList);

let lists = [];
let listButtons = [];
let currentListIndex = 0;

//the current todo list we are adding stuff to, by default it is the default one
let defaultList = todoListFactory("default");
renderList(defaultList.content);
lists.push(defaultList);

let listContainer = document.getElementById('todo-lists-container');
let defaultListButton = listContainer.lastElementChild;
listButtons.push(defaultListButton);
initialiseListButton(defaultListButton, 0);


function addItem() {
    //maybe this should be adding exclusively to a list
    const thing = todoItemFactory(document.getElementById("todoItemName").value);
    document.getElementById('todoItemName').value = todoItemName.defaultValue;

    //this works
    lists[currentListIndex].addItem(thing);

    clearAllItems();

    //this works
    renderAllItems(lists[currentListIndex].items);
}

function addList() {
    const thing = todoListFactory(document.getElementById("todoListName").value);
    renderList(thing.content);
    lists.push(thing);
    document.getElementById('todoListName').value = todoListName.defaultValue; 

    //thanks to this, the list button will be the same index as the list on both arrays

    let listButton = listContainer.lastElementChild;
    listButtons.push(listButton);

    switchList(lists.length-1);
    initialiseListButton(listButton, lists.length-1);
}


function switchList(listIndex) {
    console.log("i am switching list to " + listIndex)
    currentListIndex = listIndex; //one of these is null for some reason 
    clearAllItems();
    renderAllItems(lists[currentListIndex].items);
}

//when the button is clicked, switch to that list
function initialiseListButton(button, index){
    console.log("button being initialised");

    //hack to add a listener to a dynamically created button
    button.addEventListener('click',function(e){
        if(e.target && e.target.id== 'dynamicButton'){
              //do something
              button.addEventListener('click', switchList(index));
         }
    });
}

//it calls switch then init then switch again whenever I create a new list, find out why.
