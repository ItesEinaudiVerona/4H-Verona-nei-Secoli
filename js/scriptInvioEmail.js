
function Modulo() {
    // Variabili associate ai campi del modulo
    var nome = document.modulo.name.value;
    var email = document.modulo.email.value;
    var oggetto = document.modulo.oggetto.value;
    var messaggio = document.modulo.message.value;
   
    // Espressione regolare dell'email
    var email_reg_exp = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-]{2,})+.)+([a-zA-Z0-9]{2,})+$/;
    //Effettua il controllo sul campo Cognome e Nome
    if ((nome == "") || (nome == "undefined")) {
    alert("Il campo Nome è obbligatorio.");
    document.modulo.nome.focus();
    return false;
    }
    //Effettua il controllo sul campo oggetto
    if ((oggetto == "") || (oggetto == "undefined")) {
    alert("Il campo Oggetto è obbligatorio.");
    document.modulo.nome.focus();
    return false;
    }
    
    else if (!email_reg_exp.test(email) || (email == "") || (email == "undefined")) {
    alert("Inserire un indirizzo email corretto.");
    document.modulo.email.select();
    return false;
    }
    //Effettua il controllo sul campo HOMEPAGE
    else if ((messaggio == "") || (messaggio == "undefined")) {
    alert("Il campo messaggio non può essere vuoto");
    document.modulo.message.select();
    return false;
    }

    //INVIA IL MODULO
    else {
        location.href = "mailto: infoVNS@gmail.com" + "?Subject=" + oggetto + "&Body=" + messaggio + "%0A%0A%0A" + nome + "%0A" + "email: " + email;
    }
    }