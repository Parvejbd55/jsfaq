function explain_callback(name, age, task){
    console.log('Hello', name);
    console.log('Your age', age);
    task();
}

function washHand(){
    console.log('Wash hand with Soap');
}

function takeShower(){
    console.log('Take shower');
}
function scrollFacebook(){
    console.log('Scroll Facebook but don,t like any post');
}

explain_callback('Asowad Ahmed', 17, washHand);
explain_callback('Jabalul Ahmed', 13, takeShower);
explain_callback('Sogir Ahmed', 15, scrollFacebook);
