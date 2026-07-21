let weather = "rainy";

switch(weather){
    case "Summer":
        console.log("half wear");
        break;

    case "rainy":
        console.log("Raincoat");
        break;

    case "Winter":
        console.log("Sweater");
        break;

    default: 
        console.log("Invalid");

}

function AgeCheck(age){
    if(age<10) return "Kid";
    if(age<18) return "Teen";
    if(age<35) return "Adult";
    else return "Senior";
}
console.log(AgeCheck(10));

function Grade(marks){
    if(marks>0 && marks<=25) return "F";
    if(marks>25 && marks<=35) return "D";
    if(marks>35 && marks<=75) return "C";
    if(marks>75 && marks<=90) return "B";
    else return "A";
}
console.log(Grade(50));

function rps(user,computer){
    if(user === computer) return "Draw";
    if(user === "rock" && computer === "scissor") return "user";
    if(user === "scissor" && computer === "paper") return "user";
    if(user === "paper" && computer === "rock") return "user";
    else return "computer";
}3
console.log(rps("rock","paper"));
console.log(rps("rock","rock"));
console.log(rps("scissor","paper"));