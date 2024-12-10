let title = document.createElement("h1"), yes;
let upperdiv = document.createElement("div");
let array = ["Break", "Gym", "Study", "Tv", "Friends", "Work", "Deselect All"];
let array2 = ["red", "blue", "pink", "plum", "green", "gray", "death"];
upperdiv.appendChild(title);
let buttondiv = document.createElement("div");
upperdiv.appendChild(buttondiv);
for(let i = 0; i<7; i++){
    array.push(document.createElement("button"));
    array[array.length-1].style.cssText = `
    height: 5vh;
    width: 5vw;
    margin-right: 1vw;
    border: 0.2px solid black;
    vertical-align: middle;
    font-size: 0.8vw;`;
    array[array.length-1].setAttribute("onclick", `color("${array2[i]}", ${i})`)
    array[array.length-1].innerHTML = array[0];
    buttondiv.appendChild(array[array.length-1]);
    array.shift();
}
function color(n, i){
    if(yes != null){
        array[yes[0]].style.backgroundColor = "rgb(239, 239, 239)";
        array[yes[0]].style.border = "0.2px solid black";
    }
    yes = [i, n];
    if(yes[1]=="death"){
        for(let c = 0; c<otherarray.length; c++){
            otherarray[c].style.backgroundColor = "white";
        }
    }else{
    array[i].style.backgroundColor = n;
    }
}
//array[array.length-1].style.transform = "translateY(16%)";
title.innerHTML = "Select a task"
upperdiv.style.cssText = `
display: flex;
flex-flow: column nowrap;
align-items: center;`;
let h3 = document.createElement("h3");
h3.innerHTML = "Add selected task to the schedule";
upperdiv.appendChild(h3);
h3.style.marginTop = "5vh";
let bottombox = document.createElement("div");
bottombox.style.cssText = `
display: flex;
flex-flow: column nowrap;
background-color: silver;
width: 57vw;
height: 65vh;
padding: 1vw;`;
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let daysd = document.createElement("div");
daysd.style.cssText = `
display: flex;
flex-flow: row nowrap; 
transform: translateX(6.15%);
`;
for(let i = 0; i<7; i++){
    days.push(document.createElement("div"));
    days[days.length-1].style.cssText = `
    display: flex;
    align-items: center;
    justify-content: center;
    height: 8vh;
    margin-right: 0.5vw;
    width: 7vw;
    font-size: 0.8vw; 
    border: 0.1vw solid white;`;
    let p = document.createElement("p");
    days[days.length-1].appendChild(p);
    p.innerHTML = days[0];
    daysd.appendChild(days[days.length-1]);
    days.shift();
}
bottombox.appendChild(daysd);
let date = document.createElement("div");
date.style.cssText = `
display: flex;
flex-flow: row nowrap;
`;
let extradiv = document.createElement("div");
extradiv.style.marginRight = "0.55vw";
let dates = ["8am",  "-", "12pm", "12pm",  "-", "2pm", "2pm",  "-", "6pm", "6pm",  "-", "9pm", "9pm",  "-", "11pm"];
for(let i = 0; i<15; i+=3){
    dates.push(document.createElement("div"));
    dates[dates.length-1].style.cssText = `
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    background-color: plum;
    height: 10vh;
    margin-bottom: 1vh;
    width: 3vw;
    font-size: 1.1vw;`;
    for(let b = 0; b<3; b++){
        let p = document.createElement("p");
        p.style.margin = 0;
        p.innerHTML = dates[b];
        dates[dates.length-1].appendChild(p);
    }
    if(i%3===0){ 
    extradiv.appendChild(dates[dates.length-1]);
    dates.shift();
    dates.shift();
    dates.shift();
    }
}
date.appendChild(extradiv);
let otherarray = [];
let biggerdiv = document.createElement("div");
biggerdiv.style.cssText = `
display: flex;
flex-flow: column nowrap;
`;
for(let b = 0; b<5; b++){
let moredivs = document.createElement("div");
moredivs.style.cssText = `
display: flex;
flex-flow: row nowrap;
`;
for(let i = 0; i<7; i++){
    otherarray.push(document.createElement("div"));
    otherarray[i+(b*7)].style.cssText = `
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    height: 10vh;
    margin-bottom: 1vh;
    margin-right: 0.58vw;
    width: 7.06vw;
    font-size: 1vw;`;
    moredivs.appendChild(otherarray[i+(b*7)]);
    otherarray[i+(b*7)].addEventListener("click", function(){
        if(yes!=null){
            this.style.backgroundColor = yes[1];
        }
    });
    biggerdiv.appendChild(moredivs);
    date.appendChild(biggerdiv);
}
}
bottombox.appendChild(date);
upperdiv.appendChild(bottombox);
document.body.appendChild(upperdiv);