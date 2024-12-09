let add = document.createElement("button");
let remove = document.createElement("button");
let upperdiv = document.createElement("div");
let lowerdiv = document.createElement("div");
upperdiv.appendChild(add);
upperdiv.appendChild(remove);
add.innerHTML = "Add";
remove.innerHTML = "Remove";
add.style.cssText = `margin-right: 10vw;`;
upperdiv.style.cssText = `
display: flex;
flex-flow: row nowrap;
justify-content: center;`;
lowerdiv.style.cssText = `
display: flex;
flex-flow: row wrap;    
justify-content: center;`;
document.body.style.cssText = `
display: flex;
flex-flow: column nowrap;`;
add.addEventListener("click", function(){
let card = document.createElement("div");
card.style.height = "25vh";
card.style.width = "10vw";
card.style.backgroundImage = "linear-gradient(125deg, red, blue)";
card.style.marginRight = "5vw";
card.style.marginBottom = "5vh";
card.style.boxShadow = "1vw 1vh 2vw"
lowerdiv.appendChild(card);
});
remove.addEventListener("click", function(){
    lowerdiv.lastElementChild.remove();
 });
 let hr = document.createElement("hr");
 hr.style.width = "100%";
document.body.appendChild(upperdiv);
document.body.appendChild(hr);
document.body.appendChild(lowerdiv);
