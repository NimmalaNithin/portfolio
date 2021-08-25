var calculator=document.getElementById("calculator")
var survey=document.getElementById("survey-form")
var tribute=document.getElementById("tribute")
var count=0

function next(){
    if(count==0){
        calculator.style.left="-400px";
        survey.style.left="0px";
        tribute.style.left="400px";
        count+=1;
        console.log(count)
    }
    else if(count==1){
        calculator.style.left="-800px";
        survey.style.left="-400px";
        tribute.style.left="0px";
        count+=1;
        console.log(count)
    }
    
}

function before(){
    if(count==2){
        calculator.style.left="-400px";
        survey.style.left="0px";
        tribute.style.left="400px";
        count-=1;
        console.log(count)
    }
    else if(count==1){
        calculator.style.left="0px";
        survey.style.left="400px";
        tribute.style.left="800px";
        count-=1;
        console.log(count)
    }
    
}