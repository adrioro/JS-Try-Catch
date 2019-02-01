try {
    allert("This, the word alert, is typed bad intentionally!. So, it will not alert.")
} catch (e) // e for error. Could use error instead too.
{
    e = "This error occurred: \n" + e; //\n creates a new line.
    alert(e);
}