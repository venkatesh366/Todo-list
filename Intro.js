
var textInput = document.getElementById("text-box")
var submitBtn = document.getElementById("submit-btn")

var dataStorage = localStorage.getItem("data") === null ? []: JSON.parse(localStorage.getItem("data"));

for(var i=0; i<dataStorage.length;i++){
    renderTodo(dataStorage[i].message, dataStorage[i].date);
}

function renderTodo(message,time){

    var listText = document.createElement("h3")
    listText.id="list-text"
    // listText.innerHTML = textInput.value
    listText.innerHTML = message;
    var listPara = document.createElement("p")
    listPara.id="list-para"
    // var date =new Date()
    // listPara.innerHTML=date.getDate()+"-"+(date.getMonth()+1)+"-"+date.getFullYear()+" "+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds(); 
    listPara.innerHTML=time;
    var listDiv= document.createElement("div")
    listDiv.id="list-div"
    listDiv.append(listText,listPara)
    var icon1 = document.createElement("i")
    icon1.className="fas fa-edit"
    var icon2 = document.createElement("i")
    icon2.className="fas fa-trash-alt"
    var icons = document.createElement("div")
    icons.id="icons"
    icons.append(icon1,icon2)
    var listItem =document.createElement("li")
    listItem.id= "list-item"
    listItem.append(listDiv,icons)
    var ulList = document.getElementById("ul-list")
    ulList.append(listItem)
    textInput.value=""
    icon2.addEventListener("click",function(){
        listItem.remove();
        // console.log("Delete icon Clicked")
        })

//    var mArr = localStorage.getItem("data") === null ? []: JSON.parse(localStorage.getItem("data"))
//    mArr.push({
//        message:listText.innerHTML,
//        date:listPara.innerHTML
//    })    
   
//    localStorage.setItem("data",JSON.stringify(mArr))
}



submitBtn.addEventListener("click", function(e){
    e.preventDefault();

    if (textInput.value === "")
    {       
     console.log("Please enter the value:")         
    }

    else{
        var date =new Date()
        var time =date.getDate()+"-"+(date.getMonth()+1)+"-"+date.getFullYear()+" "+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds(); 
        var mArr = localStorage.getItem("data") === null ? []: JSON.parse(localStorage.getItem("data"))
        mArr.push({
            message:textInput.value,
            date:time
        })    
        
        localStorage.setItem("data",JSON.stringify(mArr))
        renderTodo(textInput.value, time);
    }

})
