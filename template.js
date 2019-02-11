var problems = document.getElementsByClassName('problems')[0];
var answerBox = document.getElementsByClassName('answerBox')[0];
var co_ordinates = {}

function generateProblem(){
    co_ordinates.x1 = Math.floor(1+ ( Math.random()*10 ) );
    co_ordinates.y1 = Math.floor(1+ ( Math.random()*10 ) );
    co_ordinates.x2 = Math.floor(1+ ( Math.random()*10 ) );
    co_ordinates.y2 = Math.floor(1+ ( Math.random()*10 ) );
    co_ordinates.answer = Math.floor((co_ordinates.y2 - co_ordinates.y1)/(co_ordinates.x2 - co_ordinates.x1));
    problems.innerHTML = `<p>co-ordinates of first point is (${co_ordinates.x1} , ${co_ordinates.y1}) and the co-ordinates of the second point is (${co_ordinates.x2},${co_ordinates.y2})</p>
                            <p>what is the slope of the line that connects the two points?</p>`;
}


function checkAnswer(){
    if (answerBox.value == co_ordinates.answer){
        alert('correct answer')}else{
            alert('try again');
        }
    }


// var a = 5;
// var b = 10;

// console.log(`fifteen is ${a  + b}`)


// console.log(x1,y1,x2,y2);
