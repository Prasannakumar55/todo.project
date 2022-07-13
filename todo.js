var Add = document.getElementById("AddButton");

var OpenCard = document.getElementsByClassName("Addtrip")[0];

const hidepage = document.getElementsByClassName("hidepage")[0];
const showpage = document.getElementsByClassName("showpage")[0];

const AddedItems = document.getElementsByClassName("Cards-container")[0];

const Items = document.getElementsByClassName("Items")[0]

var menuElement  ;

const addMenu = (e) => {
    Items.style.display = "flex";
    menuElement = (e);
}

const AddMenuitems = () => {
    let MenuList = document.getElementById("AddText2").value;
    let div = document.createElement("div");
        div.innerText = MenuList;
    let button = document.createElement("button");
        button.innerText = "Mark Done";
        button.addEventListener ("click" , (e) => {
            e.target.style.display = "none";
            e.target.parentNode.style.textDecoration = "line-through";
        })  
        div.append(button);     
        menuElement.append(div);    
        Items.style.display ="none"
}

const trippage = (newcard) => {
    hidepage.style.display = "none";
    console.log(newcard);
    showpage.append(newcard);
    showpage.style.display = "block";
let back = document.createElement("span");
    back.className = "back material-icons";
    back.innerText = "back";
    back.style.background = "red";
}

// Creating Cards
const CreateCard = (AddingTrip) => {
    var CreateCard = document.createElement("div");
        CreateCard.className = ("Cards");
    let h4 =document.createElement("h4");
        h4.innerText = AddingTrip;
        h4.addEventListener("click" , (e) => {
            trippage(e.target.parentNode)
        })

    let hr = document.createElement("hr");
    
    let A = document.createElement("span");
        A.className = "add material-icons";
        A.innerText = "add";
    let D = document.createElement("span");
        D.className = "delete material-icons"; 
        D.innerHTML = "delete";

    A.addEventListener("click" , (Aded) => {
        addMenu(Aded.target.parentNode)
    })
        
    D.addEventListener ("click" , (del) => {
        DeleteCard(del);
    })    

    CreateCard.append(h4);
    CreateCard.append(hr);
    CreateCard.append(A);
    CreateCard.append(D); 
    AddedItems.append(CreateCard);

    OpenCard.style.display = "none";
}


Add.addEventListener ("click" , () => {
    OpenCard.style.display = "flex";
    })

const DeleteCard = (e) => {
    e.target.parentNode.style.display = "none";
}

const AddCard = () => {
    let Created = document.getElementById("AddText").value;
    CreateCard(Created);
} 
 