var a = Number(prompt("<To check the number is odd or even press 1> OR <To get a string of odd or even number press 2> OR <To get a string of specific number press 3> OR <To check your result press 4>"))

if (a == 1) {
    var i = Number(prompt("Enter a number to check odd or even: "));

    if (i % 2 == 0) {
        document.write(i + " is an Even number.");
    } else {
        document.write(i + " is an Odd number.");
    }
} 

else if (a == 2) {
    var i = Number(prompt("Press 1 for odd and 2 for even: "));


    if (i == 1) {
        var range = Number(prompt("How many odd number you want: "));
        for (var x = 1; x <= range; x++) {
            document.write(i + "<br/>")
            i += 2;
        }
    } else if (i == 2) {
        var range = Number(prompt("How many even number you want: "));
        for (var x = 0; x <= range; x++) {
            document.write(i + "<br/>")
            i += 2;
        }
    } else {
        alert("Invalid Input")
    }
} 

else if (a == 3) {
    var range = Number(prompt("Enter a range: "));
    var i = 0;
    do {
        document.write(i + "<br/>");
        i++;
    } while (i <= range);

} 

else if (a == 4) {
    var i = Number(prompt("Enter your marks: "));

    if (i >= 90 && i <= 100) {
        alert("You got A+")
    } else if (i >= 80 && i <= 89) {
        alert("You got A")
    } else if (i >= 70 && i <= 79) {
        alert("You got A-")
    } else if (i >= 60 && i <= 69) {
        alert("You got B+")
    } else if (i >= 50 && i <= 59) {
        alert("You got B")
    } else if (i >= 0 && i <= 49) {
        alert("You got F")
    }
}