let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newgamebtn = document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turno = true;

const winpatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
const resetgame = () =>{
  turno = true;
  enableboxes();
  msgcontainer.classList.add("hide");
}
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("box was clicked");
    if (turno) {
      box.innerText = "0";
      turno = false;
    } else {
      box.innerText = "x";
      turno = true;
    }
    box.Disabled = true;
    checkwinner();
  });
});
const Disabledboxes = () =>{
  for (let box of boxes){
    box.Disabled = true;
  }
}
const enableboxes = () =>{
  for (let box of boxes){
    box.Disabled = false;
    box.innerText = "";
  }
};
const showwinner = (winner) => {
  msg.innerText = `congratulations, winner is ${winner}`
  msgcontainer.classList.remove("hide");
  Disabledboxes();
}

const checkwinner = () => {
  for (let pattern of winpatterns) {
    let post1val = boxes[pattern[0]].innerText;
    let post2val =  boxes[pattern[1]].innerText;
    let post3val = boxes[pattern[2]].innerText;
    
    if (post1val != "" && post2val != "" && post3val != ""){
      if (post1val === post2val && post2val === post3val){
        console.log("winner", post1val);

        showwinner(post1val);
      }
    }
  }
};
function btn = (newgamebtn) =>{
  alert(   )
}
newgamebtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);