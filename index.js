try {
    allert("This, the word alert, is typed bad intentionally!. So, it will not alert.")
} catch (e) // e for error. Could use error instead too.
{
    e = "This error occurred: \n" + e; //\n creates a new line.
    alert(e);
}

//------------------

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
} catch (e); {
    alert(e);
}