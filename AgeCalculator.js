function calAge(){
    var userInput = document.getElementById('date').value.split('-');
    // console.log(userInput);
    let year, month, days;
    
    //calculating age
    year = 2023 - userInput[0];

    // calculating month
    if(userInput[0] === 2023){
        month = 10 - userInput[1];
    }else{
        month = 12 - userInput[1];
    }

    // calculating days
    if(userInput[1] == 1 || userInput[1] == 3 || userInput[1] == 5 || userInput[1] == 7 || userInput[1] == 8 || userInput[1] == 10 || userInput[1] == 12){
        days = 31 - userInput[2];
    } else if(userInput[1] == 4 || userInput[1]==6 || userInput[1]== 9 || userInput[1]== 11){
        days  = 30 - userInput[2];
    }else if(userInput[1] == 2) {
        days = 28 - userInput[2];
    }
    console.log(year,month,days);

    if (userInput[0] < 2023 || (userInput[0] == 2023 && userInput[1] <= 10)){
        document.querySelector('.result').innerHTML = `Your age is ${year} years ${month} months and ${days} days old`
    }else{
        document.querySelector('.result').innerHTML = "Please enter date of birth befor 31-10-2023 "
    }
}