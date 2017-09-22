

function submitForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var purpose = document.getElementById("purpose").value;
    var message = document.getElementById("message").value;
    if( name.length != 0 && email.length != 0 && purpose.length != 0 && message.length != 0 )
        alert(name + " " + email + " " + purpose + " " + message);
}