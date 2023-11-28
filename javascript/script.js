function carregarPagina(tipos) {
  var precos = [0, 10, 20, 30];
  var precototal = 0;

  switch (tipos) {
    case '1':
      precototal = precos[1];
      break;

    case '2':
      precototal = precos[2];
      break;

    case '3':
      precototal = precos[3];
      break;
  }

  var resultado = document.getElementById("valoracumulado");
  var resultadoo = document.getElementById("valortotal");
  var resultado12 = document.getElementById("valor12");
  resultado.value = precototal + '€';
  resultado12.value = precototal + '€';
  resultadoo.value = precototal + '€';
}

  function carregarMeses() { 
    var valor1 = parseFloat(document.getElementById("meses").value);
    var valor2 = "";   
    var submitButton = document.getElementById("compra");
    if (valor1 == 0) {
        submitButton.disabled = true;
        document.getElementById("DescFrase").innerHTML = "";

    }
    if (valor1 == 1) { 
      valor2 = parseFloat(document.getElementById("valoracumulado").value) * parseFloat("0.8");
      document.getElementById("valortotal").value = valor2 + "€";
      document.getElementById("DescFrase").innerHTML = "O desconto aplicado será de 20% :)";
      submitButton.disabled = false;
    }
    else if (valor1 == 2) { 
      valor2 = parseFloat(document.getElementById("valoracumulado").value) * parseFloat("0.85");
      document.getElementById("valortotal").value = valor2 + "€";
      document.getElementById("DescFrase").innerHTML = "O desconto aplicado será de 15% :)";
      submitButton.disabled = false;
    }
    else if (valor1 == 3) { 
      valor2 = parseFloat(document.getElementById("valoracumulado").value) * parseFloat("0.90");
      document.getElementById("valortotal").value = valor2 + "€";
      document.getElementById("DescFrase").innerHTML = "O desconto aplicado será de 10% :)";
      submitButton.disabled = false;
    }
    else if (valor1 == 4) { 
      valor2 = parseFloat(document.getElementById("valoracumulado").value) * parseFloat("0.95");
      document.getElementById("valortotal").value = valor2 + "€";
      document.getElementById("DescFrase").innerHTML = "O desconto aplicado será de 5% :)";
      submitButton.disabled = false;
    }
    else if (valor1 == 5) { 
      valor2 = parseFloat(document.getElementById("valoracumulado").value);
      document.getElementById("valortotal").value = valor2 + "€";
      document.getElementById("DescFrase").innerHTML = "Não há desconto aplicado! :(";
      submitButton.disabled = false;
    }
    

  }
function carregarSeparador1(form) { 
var separador1 = document.getElementById("quem").checked;
var separador2 = ""; 
 if (separador1 == true) { 
  separador2 = parseFloat(document.getElementById("valoracumulado").value) + parseFloat("400");
  document.getElementById("valoracumulado").value = separador2 + "€";
  document.getElementById("valortotal").value = separador2 + "€";
   
 }
 else { 
  separador2 = parseFloat(document.getElementById("valoracumulado").value) - parseFloat("400");
  document.getElementById("valoracumulado").value = separador2 + "€";
  document.getElementById("valortotal").value = separador2 + "€";


 }
}
function carregarSeparador2(form) { 
var separador1 = document.getElementById("onde").checked;
var separador2 = ""; 
if (separador1 == true) { 
  separador2 = parseFloat(document.getElementById("valoracumulado").value) + parseFloat("400");
  document.getElementById("valoracumulado").value = separador2 + "€";
  document.getElementById("valortotal").value = separador2 + "€";
   
 }
 else { 
  separador2 = parseFloat(document.getElementById("valoracumulado").value) - parseFloat("400");
  document.getElementById("valoracumulado").value = separador2 + "€";
  document.getElementById("valortotal").value = separador2 + "€";

 }
}
function carregarSeparador3(form) { 
var separador1 = document.getElementById("galeria").checked;
var separador2 = ""; 
if (separador1 == true) { 
  separador2 = parseFloat(document.getElementById("valoracumulado").value) + parseFloat("400");
  document.getElementById("valoracumulado").value = separador2 + "€";
  document.getElementById("valortotal").value = separador2 + "€";
   
 }
 else { 
  separador2 = parseFloat(document.getElementById("valoracumulado").value) - parseFloat("400");
  document.getElementById("valoracumulado").value = separador2 + "€";
  document.getElementById("valortotal").value = separador2 + "€";

 }
}
function carregarSeparador4(form) { 
var separador1 = document.getElementById("commerce").checked;
var separador2 = ""; 
if (separador1 == true) { 
  separador2 = parseFloat(document.getElementById("valoracumulado").value) + parseFloat("400");
  document.getElementById("valoracumulado").value = separador2 + "€";
  document.getElementById("valortotal").value = separador2 + "€";
   
 }
 else { 
  separador2 = parseFloat(document.getElementById("valoracumulado").value) - parseFloat("400");
  document.getElementById("valoracumulado").value = separador2 + "€";
  document.getElementById("valortotal").value = separador2 + "€";

 }
}
function carregarSeparador5(form) { 
var separador1 = document.getElementById("gestao").checked;
var separador2 = ""; 
if (separador1 == true) { 
  separador2 = parseFloat(document.getElementById("valoracumulado").value) + parseFloat("400");
  document.getElementById("valoracumulado").value = separador2 + "€";
  document.getElementById("valortotal").value = separador2 + "€";
   
 }
 else { 
  separador2 = parseFloat(document.getElementById("valoracumulado").value) - parseFloat("400");
  document.getElementById("valoracumulado").value = separador2 + "€";
  document.getElementById("valortotal").value = separador2 + "€";

 }
}
function carregarSeparador6(form) { 
var separador1 = document.getElementById("noticias").checked;
var separador2 = ""; 
if (separador1 == true) { 
  separador2 = parseFloat(document.getElementById("valoracumulado").value) + parseFloat("400");
  document.getElementById("valoracumulado").value = separador2 + "€";
  document.getElementById("valortotal").value = separador2 + "€";
   
 }
 else { 
  separador2 = parseFloat(document.getElementById("valoracumulado").value) - parseFloat("400");
  document.getElementById("valoracumulado").value = separador2 + "€";
  document.getElementById("valortotal").value = separador2 + "€";

 }
}
function carregarSeparador7(form) { 
var separador1 = document.getElementById("redes").checked;
var separador2 = ""; 
if (separador1 == true) { 
  separador2 = parseFloat(document.getElementById("valoracumulado").value) + parseFloat("400");
  document.getElementById("valoracumulado").value = separador2 + "€";
  document.getElementById("valortotal").value = separador2 + "€";
   
 }
 else { 
  separador2 = parseFloat(document.getElementById("valoracumulado").value) - parseFloat("400");
  document.getElementById("valoracumulado").value = separador2 + "€";
  document.getElementById("valortotal").value = separador2 + "€";

 }
}
function Desconto() { 
var valor1 = parseFloat(document.getElementById("meses").value);
    var valor2 = "";
    if (valor1 == 1) { 
      valor2 = parseFloat(document.getElementById("valortotal").value) * parseFloat("0.8");
      document.getElementById("valortotal").value = valor2 + "€";
    }
    else if (valor1 == 2) { 
      valor2 = parseFloat(document.getElementById("valortotal").value) * parseFloat("0.85");
      document.getElementById("valortotal").value = valor2 + "€";
    }
    else if (valor1 == 3) { 
      valor2 = parseFloat(document.getElementById("valortotal").value) * parseFloat("0.9");
      document.getElementById("valortotal").value = valor2 + "€";
    }
    else if (valor1 == 4) { 
      valor2 = parseFloat(document.getElementById("valortotal").value) * parseFloat("0.95");
      document.getElementById("valortotal").value = valor2 + "€";
    }
    else if (valor1 == 5) { 
      valor2 = parseFloat(document.getElementById("valortotal").value) * parseFloat("1");
      document.getElementById("valortotal").value = valor2 + "€";
    }
    
}

function Mudar() { 
    const formulario = document.getElementById("form1");
    const checkboxes = formulario.querySelectorAll('input[type="checkbox"]');
    const tipos = document.getElementById("tipos");
    if (tipos.selectedIndex > 0) {
      for (let i = 0; i < checkboxes.length; i++) {
        checkboxes[i].disabled = false;
      }
    } else {
      for (let i = 0; i < checkboxes.length; i++) {
        checkboxes[i].disabled = true;
      }
    }
  }
  
function Mudar2() { 
var total = document.getElementById("valortotal").value;
total = document.getElementById("valoracumulado").value + parseFloat("0");
}

function Mudar3() { 
document.getElementById("meses").value = "0";
document.getElementById("DescFrase").innerHTML = "";
}
function Mudar4() { 
    const checkbox1 = document.getElementById("quem");
    const checkbox2 = document.getElementById("onde");
    const checkbox3 = document.getElementById("galeria");
    const checkbox4 = document.getElementById("commerce");
    const checkbox5 = document.getElementById("gestao");
    const checkbox6 = document.getElementById("noticias");
    const checkbox7 = document.getElementById("redes");
    
    checkbox1.checked = false;
    checkbox2.checked = false;
    checkbox3.checked = false;
    checkbox4.checked = false;
    checkbox5.checked = false;
    checkbox6.checked = false;
    checkbox7.checked = false;
}
  function updateButton() {
    const meses = document.getElementById("meses");
    const checkbox1 = document.getElementById("quem");
    const checkbox2 = document.getElementById("onde");
    const checkbox3 = document.getElementById("galeria");
    const checkbox4 = document.getElementById("commerce");
    const checkbox5 = document.getElementById("gestao");
    const checkbox6 = document.getElementById("noticias");
    const checkbox7 = document.getElementById("redes");
    const submitButton = document.getElementById("compra");

    if (checkbox1.checked || checkbox2.checked || checkbox3.checked || checkbox4.checked || checkbox5.checked || checkbox6.checked || checkbox7.checked) {
      meses.disabled = false;
      submitButton.disabled = true;

    } else {
      meses.disabled = true;
      submitButton.disabled = true;

    }
  }
  function formDesabilitado() {
const formulario = document.getElementById("form1");
const checkboxes = formulario.querySelectorAll('input[type="checkbox"]');
for (let i = 0; i < checkboxes.length; i++) {
  checkboxes[i].disabled = true;
}
  }
  function ValidarNome(id) { 
    if (nome.value.length == 0) { 
     document.getElementById("nome").style.border = "2px solid red";
    }
    else { 
     document.getElementById("nome").style.border = "2px solid green";
    }
    if (apelido.value.length == 0) { 
     document.getElementById("apelido").style.border = "2px solid red";
    }
    else { 
     document.getElementById("apelido").style.border = "2px solid green";
    }
   }
 
   function ValidarTelemovel(id) { 
    if (telemovel.value.length < 9) { 
     document.getElementById("telemovel").style.border = "2px solid red";
    }
    else { 
     document.getElementById("telemovel").style.border = "2px solid green";
    }
   }
 
 
