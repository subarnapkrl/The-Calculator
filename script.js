let operator='';
let previousValue='';
let currentValue='';

document.addEventListener("DOMContentLoaded",function(){
    //STORE ALL COMPONENTS OF HTML IN OUR JS

    let clearBtn=document.querySelector("#clear-btn");
    let equalBtn=document.querySelector(".equal");
    let decimal=document.querySelector(".decimal");

    let numbers=document.querySelectorAll(".number");
    let operators=document.querySelectorAll(".operator");

    let previousScreen=document.querySelector(".previous");
    let currentScreen=document.querySelector(".current");

    
    //EVENT LISTENER FOR ALL THE NUMBERS
    numbers.forEach((number)=>number.addEventListener('click',function(e){
        
        handleNumber(e.target.textContent)
        currentScreen.textContent=currentValue;
    }));

    //EVENT LISTENER FOR ALL THE OPERATORS
    operators.forEach((operatorz)=>operatorz.addEventListener('click',function(e){
        console.log(e.target.textContent)
        handleOperator(e.target.textContent);
        previousScreen.textContent=previousValue+ " " +operator;
        currentScreen.textContent=currentValue;
    }));

    //EVENT LISTENER FOR CLEAR BUTTON
    clearBtn.addEventListener('click',function()
    {
        operator='';
        previousValue='';
        currentValue='';
        previousScreen.textContent=currentValue;
        currentScreen.textContent=currentValue;
    })

    //EVENT LISTENER FOR EQUAL BUTTON
    equalBtn.addEventListener('click',function(){

        if(currentValue!='' && previousValue!='')
        {
            doCalculation();
        
        previousScreen.textContent='';
        if(previousValue.length<=7){
            currentScreen.textContent=previousValue;
        }else{
            currentScreen.textContent=previousValue.slice(0,7)+"..."
        }
        
        }
        
    });


    //EVENT LISTENER FOR DECIMAL
    decimal.addEventListener('click',function(){
        handleDecimal()
    })

});



//FUNCTION FOR HANDLING NUMBER
function handleNumber(num){
    console.log(num)
    if(currentValue.length<=7)
    {
        currentValue+=num;
    }
    
}


//FUNCTION FOR HANDLING OPERATOR
function handleOperator(op){
    operator=op;
    previousValue=currentValue;
    currentValue='';
}

//FUNCTION FOR DOING CALCULATION
function doCalculation(){
    previousValue=Number(previousValue);
    currentValue=Number(currentValue);

    if(operator==="+"){
        previousValue+=currentValue;
    }
    else if(operator==="-"){
        previousValue-=currentValue;
    }
    else if(operator==="x"){
        previousValue*=currentValue;
    }
    else if(operator==="/"){
        previousValue/=currentValue;
    }

    previousValue=roundNumber(previousValue);

    previousValue=previousValue.toString();
    currentValue=previousValue.toString();

}

//FUNCTION FOR DECIMAL
function handleDecimal()
{
    if(!currentValue.includes('.')){
        currentValue+='.';
    }
}

function roundNumber(num){
    return Math.round(num*1000)/1000;
}