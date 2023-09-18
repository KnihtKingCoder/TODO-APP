const userInput = document.getElementById('userinp'); //Take Input From the user
const btn = document.querySelector('.butt')            //Button for sumbmit item
const itemContainer = document.querySelector('.item-container')   //This is container in which we show item
const itemNum = document.querySelector('.item-num')             //In that we show item number 
let itemNumber = 0;


//Event listner for sumbit item
btn.addEventListener('click', (event) => {
    const inputitem = userInput.value;
    if (inputitem === "") {
        //Check input is none or not
        alert("Please Provide Some Input")
    }
    else {
        itemNumber++;
        //call the Function for show item
        showItem(inputitem, itemNumber)
        userInput.value = ""
    }
})

function showItem(item, itemNumber) {
    //create div element where we save item and delete button
    const box = document.createElement('div');
    box.classList = "boxContainer";

    //create li element where we save item name
    const listItem = document.createElement('li');
    listItem.classList = "liElement"


    itemContainer.appendChild(box)

    //create item delete button 
    const delBtn = document.createElement('button')
    delBtn.textContent = "X"

    //add item and element
    listItem.textContent = item;
    box.appendChild(listItem)
    box.appendChild(delBtn)
   


    //delete button
    // delBtn.addEventListener('click', (event) => {
    //     // box.innerHTML = "";
    //     // box.classList = "";
    //     box.remove()
    //     itemNumber--;
    //     updateItemNumber();
    //     console.log(itemNumber);
    // })
    delBtn.addEventListener('click', (event) => {
        listItem.remove(); // Remove the list item
        box.remove(); // Remove the box element
        itemNumber--; // Decrement the item number
        updateItemNumber();
    });

   
    //show item number
    // itemNum.textContent = itemNumber;

    updateItemNumber();




}

function updateItemNumber() {
    itemNum.textContent = itemNumber;
}


//function for after click enter submit item
function addListAfterKeypress(event) {
    const inputitem = userInput.value;
    if (inputitem.length > 0 && event.which === 13) {
        itemNumber++;
        showItem(inputitem, itemNumber);
        userInput.value = ""
        updateItemNumber();
    }

}

userInput.addEventListener("keypress", addListAfterKeypress)
