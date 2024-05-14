function userchoice () {
    let num;
    do {
        num = prompt("Enter a number:");
    } while (isNaN(num) || num == null);
    return parseInt(num);
}

function shapee(num) {
    let shape = "";
    if (num%2 === 0) {
        for (let a = num; a > 0; a--){
            shape += (a + "").repeat(a) + "<br>";
        }
    } 
    else {
        for (let a = num; a > 0; a--) {
            shape += (a + "").repeat(num) + "<br>";
        }
    }
    return shape;
}

let num1 = userchoice();
document.write("Number inputted: " + num1 + "<br>");
document.write(shapee(num1));

