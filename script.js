function validateForm()
{
  var fields = ["FirstNameForm", "LastNameForm", "WoonplaatsForm", "AgeForm", "AdresForm", "NumberForm", "UserNameForm", "PasswordForm", "PasswordCheckForm", "EmailForm", "EmailFormCheckForm"]
  var i, l = fields.length;
  var fieldname;
  for (i = 0; i < l; i++) {
    fieldname = fields[i];
    if (document.forms["Accountform"][fieldname].value === "") {
        document.getElementById('formemptyspan').innerHTML = ( fieldname + " moet ook ingevuld zijn!");
      return false;
    }

    var minage = document.getElementById('age').value;
    if (minage <= 18) {
        document.getElementById('agespan').innerHTML = ("Minimale leeftijd is 18");
        document.getElementById('age').classList.add('ErrorBorder');
        setTimeout(() => {
            document.getElementById('age').classList.remove('ErrorBorder');
        }, 2500);
        return false;
    }
    var emailsinput = document.getElementById('email1').value;
    if (emailsinput.indexOf('@') == -1) {
        document.getElementById("emailspan").innerHTML =("E-mail is niet correct");
        document.getElementById('email1').classList.add('ErrorBorder');
        document.getElementById('email2').classList.add('ErrorBorder');
        setTimeout(() => {
            document.getElementById('email1').classList.remove('ErrorBorder');
            document.getElementById('email2').classList.remove('ErrorBorder');
        }, 3500);
        return false;
    } 
    if (document.getElementById('email1').value !=  document.getElementById('email2').value)
    {
        document.getElementById("emailspan").innerHTML =("E-mailadressen komen niet overeen");
        document.getElementById('email1').classList.add('ErrorBorder');
        document.getElementById('email2').classList.add('ErrorBorder');
        setTimeout(() => {
            document.getElementById('email1').classList.remove('ErrorBorder');
            document.getElementById('email2').classList.remove('ErrorBorder');
        }, 3500);
        return false;
    }

    if (document.getElementById('pass1').value != document.getElementById('pass2').value)
    {
        document.getElementById("passspan").innerHTML =("Wachtwoorden komen niet overeen");
        document.getElementById('pass1').classList.add('ErrorBorder');
        document.getElementById('pass2').classList.add('ErrorBorder');
        setTimeout(() => {
            document.getElementById('pass1').classList.remove('ErrorBorder');
            document.getElementById('pass2').classList.remove('ErrorBorder');
        }, 3500)
        return false;
    }

    if (document.getElementById('pass1').value.length <= 8) {
        document.getElementById("passspan").innerHTML =("Wachtwoord moet minimaal 8 tekens lang zijn");
        document.getElementById('pass1').classList.add('ErrorBorder');
        document.getElementById('pass2').classList.add('ErrorBorder');
        setTimeout(() => {
            document.getElementById('pass1').classList.remove('ErrorBorder');
            document.getElementById('pass2').classList.remove('ErrorBorder');
        }, 3500)
        return false;
    }
  }
document.Accountform.submit();
return true;
}

function Showpass() {
    var x = document.getElementById("pass1");
    var y = document.getElementById("pass2");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
    if (y.type === "password") {
        y.type = "text";
      } else {
        y.type = "password";
      }
  }
















