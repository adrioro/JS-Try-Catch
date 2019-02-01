// Try and Catch is similar to if/else, but it looks for an error.
//Try: code that runs if no errors.
//Catch: code that runs if there is an error.

try {
    allert("This, the word alert, is typed bad intentionally!. So, it will not alert.")
} catch (e) // e for error. Could use error instead too.
{
    e = "This error occurred: \n" + e; //\n creates a new line.
    alert(e);
}

// After that it's going to run the following:


var Name = prompt("Enter your name:");
try {
    var leng = Name.length; //Length of user input.
    if (leng > 5) {
        throw "Long Name";
    } else if (leng < 5) {
        throw "Short Name";
    } else {
        throw "5 letter name";
    }
} catch (e) {
    alert(e);
}



//If there were a mistake in the try, it'll rund the alert error.