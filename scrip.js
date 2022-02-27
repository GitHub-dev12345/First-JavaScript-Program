// First Program ShowMsg 
let firstBtn = document.getElementById('firstBtn');
firstBtn.addEventListener('click', showMsg);
function showMsg(){
    alert('Hello World I am Dev Rathore, The first program in this planet Earth');
}

// Second Program inpuMsg
let secondBtn = document.getElementById('secondBtn');
secondBtn.addEventListener('click', inpuMsg);
function inpuMsg(){
    let name = prompt('Enter Your Name');
    secondBtn.textContent = "Roll No. 1: " + name;
}