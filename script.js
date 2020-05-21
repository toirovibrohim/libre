
init();

function init() {
    document.getElementById("picks").style.visibility = "hidden";

    const books = document.querySelectorAll(`#picks div.book-picks`);
    const colors = [ "started-color","finished-color", "cur-read-color", "loaned-color"];
    let forColor = 0;
    for (let i = 0; i < books.length; i++) {
        const element = books[i];
        let color = colors[forColor]
        forColor++;
        if(forColor > colors.length) {
            forColor = 0;
        }

        element.classList.add(color);
    }
    onGetSelect();
}

function onLibraryChange() {
    document.getElementById("picks").style.visibility = "hidden";
    document.getElementById("library").style.visibility = "visible";
    document.getElementById("library-tab").classList.add("active-tab");
    document.getElementById("picks-tab").classList.remove("active-tab");
}

function onPicksChange() {
    document.getElementById("library").style.visibility = "hidden";
    document.getElementById("picks").style.visibility = "visible";
    document.getElementById("picks-tab").classList.add("active-tab");
    document.getElementById("library-tab").classList.remove("active-tab");
}

function onChangeColor(value, elem) {
    const colors = [ "started-color","finished-color", "cur-read-color", "loaned-color"];
    
    const element = elem.previousSibling.previousSibling;
    
    if(value == "started"){
        element.classList.remove(colors[0],colors[1],colors[2],colors[3])
        element.classList.add(colors[0])
    } else if(value == "finished"){
        element.classList.remove(colors[0],colors[1],colors[2],colors[3])
        element.classList.add(colors[1])
    } else if(value == "cur-read"){
        element.classList.remove(colors[0],colors[1],colors[2],colors[3])
        element.classList.add(colors[2])
    } else if(value == "loaned"){
        element.classList.remove(colors[0],colors[1],colors[2],colors[3])
        element.classList.add(colors[3])
    } else {
        console.log("Error! Not right number was send!")
    }
}

function onGetSelect() {
    const selects = document.querySelectorAll(".popover-status")

    selects.forEach((elem) => {
        elem.addEventListener('change', function(changes){
            const value = elem.value || elem.options[elem.selectedIndex].value
            onChangeColor(value, elem);
        })
    })
}


function onToggle() {
    const toggleItem = document.getElementById("categories-id").classList
    const addStyle = "open";
    const removeStyle = "close";
    for(let i = 1; i < toggleItem.length; i++){
        if(toggleItem[i] == addStyle){
            toggleItem.remove(addStyle)
            toggleItem.add(removeStyle)
        } else if(toggleItem[i] == removeStyle){
            toggleItem.remove(removeStyle)
            toggleItem.add(addStyle)
        } else {
            console.log("ERROR: Class " + toggleItem[i] + "not matched")
        }
    }
}

function onChangeActive(num) {
    const badges = document.querySelectorAll(".notifications");
    const activeText = document.querySelectorAll(".category-text");

    badges.forEach(el => {
        el.classList.remove("add-badge");
    })

    activeText.forEach(text => {
        text.classList.remove("notify");
    })
    badges[num].classList.add("add-badge");
    activeText[num].classList.add("notify");
}

