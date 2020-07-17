var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

//Form Submit event
form.addEventListener('submit', addItem);
//Delete Event
itemList.addEventListener('click', removeItem);

filter.addEventListener('keyup', filterItems);

function addItem(e){
    e.preventDefault();    

    //Get input value
    var newItem = document.getElementById('item').value;

    //Create New li
    var li = document.createElement('li');

    //add class name
    li.className = 'list-group-item';

    //add text node with input vale
    li.appendChild(document.createTextNode(newItem));

    //Create delete button element
    var delButton = document.createElement('button');
    
    //add class to del button
    delButton.className = 'btn btn-danger btn-sm float-right delete';

    //appand text node
    delButton.appendChild(document.createTextNode('X'));

    li.appendChild(delButton);

    itemList.appendChild(li);
}

function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm(`Ary you sure want to delete ${e.target.parentElement.innerText} item ?`)){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

//filter items
function filterItems(e){
    // convert to lower
    var text = e.target.value.toLowerCase();
    var items = itemList.getElementsByTagName('li');

    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;

        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        } else{
            item.style.display = 'none';
        }
    });
}