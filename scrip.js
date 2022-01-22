/* This Code And Js Work on input program  */
let namasteBtn = document.querySelector("button");
namasteBtn.addEventListener('click', ShowMsg);

function ShowMsg(){
  let name = prompt('Enter Your Name');
  namasteBtn.textContent = "Roll No. 1:" + name;

  var time = prompt("Hey Whats the time:")
  if (time>5 && time<12){
      alert("Good Morning");
  }
  else if(time>12 && time<17){
      alert("Good AfterNoon");
  }
  else if(time>17 && time<21){
      alert("Good Evening");
  }
  else{
      alert("Good Night");
  }
}


/* This Program Write For practice Purpose */
//let namasteBtn = document.querySelector('button');
//namasteBtn.addEventListener('click', showMsg);


/* This is a On-CLick & ALert Function  */
// let namasteBtn = document.querySelector('button');
// namasteBtn.addEventListener('click', showMsg);

// function showMsg(){
//     alert("Hello World");
// }
