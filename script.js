var unitOneTopics = document.getElementsByClassName('unitOneTopics')[0];
var unitTwoTopics = document.getElementsByClassName('unitTwoTopics')[0];

// console.log(unitOneTopics[0])
var unitOneTopicsDisplay = false;

function toggleUnitOne(){
    if(unitOneTopicsDisplay == true){
        unitOneTopics.style.display = 'none';
        unitOneTopicsDisplay = false;
    }else{
        unitOneTopics.style.display = 'block';
        unitOneTopicsDisplay = true;
    }
}

var unitTwoTopicsDisplay = true;

function toggleUnitTwo(){
    if(unitTwoTopicsDisplay == true){
        unitTwoTopics.style.display = 'none';
        unitTwoTopicsDisplay = false;
    }else{
        unitTwoTopics.style.display = 'block';
        unitTwoTopicsDisplay = true;
    }
}