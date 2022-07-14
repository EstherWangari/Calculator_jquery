function isOperator(value){


    // This function checks if the value given is an operator
    //or not.If it is an operator it re turns true, if not it returns false
    //This is a simple way to return boolean values from conditionals without using
    return value === '/' || value ==='*' || value === '+'
    || value === '-' 
}
 
function isNumber(value){

    //The inbuilt function isNan()checks whether the value given is Not a number
    //Adding the exclamation mark allows to check for the opposite of Not a number
    //So the resultant value will be true if the value is a number and false if
    //the value is not a number 
    return !isNaN(value)
}

function updateScreen (displayValue){

    //The toString() inbuilt function basically adds quotes to any number or symbol
    //Making it a string
    let dispValue = displayValue.toString();
    //The substring inbuilt function extracts characters in between the given
    //position/indices.In this case the first position and the 10th position
    $(".screen").html(dispValue.substring(0,10))

}

function operate(a,b, operation){
    a=parseFloat(a)
    b=parseFloat(b)
    console.log(a,b, operation)

    if (operation === '+') return a+b;
    if (operation === '-') return a-b;
    if (operation === '*') return a*b;
    if (operation === '/') return a/b;


}

$(document).ready(function(){ 


    var result = 0;
    var prevEntry =0 ;
    var operation = null;
    var currentEntry = "0";
    updateScreen(result)

    $(".button").click(function(event){

        var buttonPressed = $(this).html();
        console.log(buttonPressed);

        if (buttonPressed === "C"){
            result = 0
            currentEntry = '0'
        }

        else if (buttonPressed==="CE"){
            currentEntry = '0'
        }

        else if (buttonPressed==="back"){
            currentEntry = currentEntry.substring (0, currentEntry.length-1)
        }

        else if (buttonPressed=== "+/-"){
            currentEntry *= -1;
        }

        else if (buttonPressed==="."){
            currentEntry += "."
        }

        else if ( isNumber(buttonPressed)){
           if(currentEntry === '0') currentEntry = buttonPressed
           else currentEntry = currentEntry + buttonPressed
        }
        else if(isOperator(buttonPressed)){
            prevEntry = parseFloat(currentEntry)
            operation = buttonPressed;
            currentEntry=""
        }

        else if(buttonPressed ==="%"){
           currentEntry = currentEntry/ 100
        }

        else if(buttonPressed === "sqrt"){
            currentEntry = Math.sqrt(currentEntry)
         }
         else if(buttonPressed === "1/x"){
            currentEntry = 1/currentEntry
         }

         else if(buttonPressed ==="pi"){
            currentEntry = Math.PI
         }
       
         else if(buttonPressed ==="="){
            currentEntry = operate(prevEntry,currentEntry,operation)
            operation= null;
         }
         updateScreen(currentEntry)
    })
})