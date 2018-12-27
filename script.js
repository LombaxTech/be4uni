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

var physics = document.getElementsByClassName('Physics')[0]

// var  = false;

// function toggle(){
//     if( == true){
//         .style.display = 'none';
//          = false;
//     }else{
//         .style.display = 'block';
//          = true;
//     }
// }

var mathContent = document.getElementsByClassName('mathContent')[0];
var mathContnetDisplay = false;

function toggleMathContentDisplay(){
    if(mathContnetDisplay == true){
        mathContent.style.display = 'none';
        mathContnetDisplay = false;
    }else{
        mathContent.style.display = 'block';
        mathContnetDisplay = true;
    }
}

var physicsContent = document.getElementsByClassName('physicsContent')[0];
var physicsContnetDisplay = false;

function togglePhysicsContentDisplay(){
    if(physicsContnetDisplay == true){
        physicsContent.style.display = 'none';
        physicsContnetDisplay = false;
    }else{
        physicsContent.style.display = 'block';
        physicsContnetDisplay = true;
    }
}

var mathUnitOneContent = document.getElementsByClassName('mathUnitOneContent')[0];
var mathUnitOneContentDisplay = false;

function toggleMathUnitOneContentDisplay(){
    if(mathUnitOneContentDisplay == true){
        mathUnitOneContent.style.display = 'none';
        mathUnitOneContentDisplay = false;
    }else{
        mathUnitOneContent.style.display = 'block';
        mathUnitOneContentDisplay = true;
    }
}

