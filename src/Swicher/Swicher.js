export default function loadDoc() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
        alert(this.responseText)
    }
    xhttp.open("GET", "account.txt");
    xhttp.send();
}