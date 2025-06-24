



let items = [];

    function addItem() {
      let input = document.getElementById('itemInput');
      let newItem = input.value.trim();
      if (newItem !== '') {
        items.push(newItem);
        input.value = '';
        updateList();
      }
    }

    function removeLastItem() {
      if (items.length > 0) {
        items.pop();
        updateList();
      }
    }

    function updateList() {
      let list = document.getElementById('itemList');
      list.innerHTML = ''; 

      items.forEach(item => {
        let li = document.createElement('li');
        li.textContent = item;
        list.appendChild(li);
      });
    }





    let input = document.getElementById('itemInput');
let addButton = document.getElementById('addButton');
let removeButton = document.getElementById('removeButton');


    

    addButton.addEventListener('click',()=>{
      addItem(input.value);
      input.value='';
    });
    removeButton.addEventListener('click',removeLastItem);

    itemInput.addEventListener('keypress',(e)=>{

      if(e.key==='Enter'){
        addItem(input.value);
        input.value ='';

      }
    })