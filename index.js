function onCheckToDo(index){
    let elem = document.querySelector('.inside-tasks'+index)
    console.log(elem.parentNode.classList);
    if (elem.parentNode.classList.contains('tasks')){
        
        elem.parentNode.removeChild(elem);
        document.querySelector('.done').appendChild(elem);
    }
    else if (elem.parentNode.classList.contains('done')){
        elem.parentNode.removeChild(elem);
        document.querySelector('.tasks').appendChild(elem);
    }
}
let cnt = 3;
function addTask(){
    let data = document.querySelector(".txt").value;
    // console.log(data);
    let newelem = document.createElement('div');
    newelem.className="inside-tasks"+cnt;
    newelem.innerHTML=`<input type="checkbox" onclick="onCheckToDo(${cnt})">
    <h3>${data}</h3>`
    cnt++;
    document.querySelector('.tasks').appendChild(newelem);
}