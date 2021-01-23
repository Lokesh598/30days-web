
var ul = document.getElementById('list');


var addButton = document.getElementById('add');
addButton.addEventListener('click',addItem);

var removeButton = document.getElementById('remove');
removeButton.addEventListener('click',removeItem);

function addItem() {
    //console.log('clicked button');
    var input = document.getElementById('input');
    var item = input.value;
    ul = document.getElementById('list');
    var textnode = document.createTextNode(item)

    if(item === ''){
        return false;
        //add a p tag and assign a value of "enter your todo"
    }else {
        // create lo
        li = document.createElement('li');
        //create checkbox
        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.setAttribute('id','check');
        //create label
        var label = document.createElement('label');
        label.setAttribute('for','item')//optional
        //add these element on web page
        ul.appendChild(label);
        li.appendChild(checkbox);
        label.appendChild(textnode);
        li.appendChild(label);
        ul.insertBefore(li, ul.childNodes[0]);
        
        setTimeout( () => {
            li.className = 'visual';
        },100);
        input.value = ""
    }
}

function removeItem() {
//    console.log('remove button clicked');
    li = ul.children
    for (let index = 0; index < li.length; index++) {
        //const element = li[index];
        //console.log(element);
        while (li[index] && li[index].children[0].checked) {
            ul.removeChild(li[index]);
        }
    }
}

