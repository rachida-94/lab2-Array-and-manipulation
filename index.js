let shoppingList=[];

//
function addItem(item){

shoppingList.push(item);
}
//

function removeLastItem(){
    shoppingList.pop()
}

//
function displayList(){

    console.log(shoppingList);

    for (i=0;i<shoppingList.length,i++ ; ) {

        console.log(` ${shoppingList[i]}`)
    }
}


//task2
 
function addItem(item){
    if( !shoppingList.includes(item)){
        shoppingList.push(item);
        return true;
    }
    else  {return false ;}
}

function filterItems(searchTerm){
    return shoppingList.filter(item=>item.toLowerCase().includes(searchTerm.toLowerCase()));}


    /////task 3 in file index1.js

    