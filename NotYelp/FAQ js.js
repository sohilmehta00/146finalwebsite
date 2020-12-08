function askquestion() {
    var mail = prompt("Enter a question!");
    if (mail != null){
        document.getElementById('popup').innerHTML = "Thank you, please remeber this is a manual system, so please be patient!"
    }
}