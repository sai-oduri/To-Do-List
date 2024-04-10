const inputBox=document.getElementById("input-box");
let listCon=document.getElementById("list-con");
const btn=document.querySelector(".btn");

/*
btn.addEventListener("click",()=>{
    if(inputBox.value === ''){
        alert("You must write something!");
    }else{
        let s=inputBox.value;
        let cnt=0;
        for(let i=0;i<s.length;i++){
            if(s.charAt(i)==' ') cnt++;
        }
        if(cnt==s.length){
            alert("You must write something!");
        }
        else{
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        listCon.append(li);
        let span = document.createElement ("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span)
        inputBox.value = '';
        saveData();
        }
    }

});
*/

btn.addEventListener("click",addTas);

inputBox.addEventListener("keypress",function(event){
    if(event.key==="Enter"){
        event.preventDefault();
        addTas();
    }
})

function addTas(){
    if(inputBox.value === ''){
        alert("You must write something!");
    }else{
        let s=inputBox.value;
        let cnt=0;
        for(let i=0;i<s.length;i++){
            if(s.charAt(i)==' ') cnt++;
        }
        if(cnt==s.length){
            alert("You must write something!");
            inputBox.value = '';
        }
        else{
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        listCon.append(li);
        // listCon.insertBefore(li,listCon.firstChild);
        let span = document.createElement ("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span)
        inputBox.value = '';
        saveData();
        }
    }
};

listCon.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN" ){
        e.target.parentElement.remove();
        saveData();
    }
});

function saveData(){
    localStorage.setItem("data",listCon.innerHTML);
}

function showTask(){
listCon.innerHTML = localStorage.getItem("data");
}

showTask();