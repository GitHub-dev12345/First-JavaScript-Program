let namasteBtn = document.querySelector("button");
namasteBtn.addEventListener('click', ShowMsg);

function ShowMsg(){
    let name = prompt('Enter Your Name');
    namasteBtn.textContent = "Roll No. 1:" + name;
}



/* This is a On-CLick & ALert Function  */

// let namasteBtn = document.querySelector('button');
// namasteBtn.addEventListener('click', showMsg);

// function showMsg(){
//     alert("Hello World");
// }
