// 1. Press button, display number to the screen in order from left to right
// 2. Press = Show total result
// 3. Press AC, clear the screen
// 4. Press C, delete the last number/character

const button = document.querySelectorAll("button");
const displayElement = document.querySelector("#result");
let textToDisplay="";
const symbols= ["/","*","-","+"];
button.forEach(btn =>{
    btn.addEventListener("click",()=>{
        displayElement.style.background="";
       const val = btn.innerText;

    //    when =clicked
    if(textToDisplay.length<1 && symbols.includes(val))
    return;



    if(val === "="){
        if(!textToDisplay.length) return;
        if(symbols.includes(textToDisplay[textToDisplay.length - 1])){
            textToDisplay=textToDisplay.slice(0,-1);
        }

        return   onTotal();
    }
     if(val=== "AC"){
         resetDisplay();
         return;
     }

     if(val === "C"){
        //  if(textToDisplay.length<1) return resetDisplay();
         textToDisplay = textToDisplay.slice(0,-1);
         return display(textToDisplay);
         
     }
      
       if (val === "." && textToDisplay.includes(".")) return;

      if (symbols.includes(val) && symbols.includes(textToDisplay[textToDisplay.length-1]) ){
         const tempStr = textToDisplay.slice(0,-1)+val;
         return display(tempStr);
      };
      
      
      
       textToDisplay = textToDisplay + val; 
       display(textToDisplay);



    
    });

});

const display = toDisplay=>{
    displayElement.innerText=toDisplay || "0.00" ;
    
};

// Calculation - Total value

const onTotal = ()=>{
    const randVal = randomNumber(); 
    if(randVal>0){
        displayElement.style.background="red";
        displayElement.classList.add("prank");
        displayElement.addEventListener("animationend",()=>{
        displayElement.classList.remove("prank");
        });

    }
    const total = eval(textToDisplay)+ randVal;
    display(total); 
    textToDisplay="";


};

// reset the display area

const resetDisplay = ()=>{
    display("0.00");
    textToDisplay="";
};

// Prank - Creating random number

const randomNumber = ()=>{
    const valu = Math.floor(Math.random()*10);
    return valu<5 ? valu:0 ;
}
