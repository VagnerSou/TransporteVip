const formulario=document.getElementById("formViagem");

const nome=document.getElementById("nome");
const data=document.getElementById("data");
const hora=document.getElementById("hora");
const origem=document.getElementById("origem");
const destino=document.getElementById("destino");

window.onload=()=>{

const hoje=new Date().toISOString().split("T")[0];

data.min=hoje;

nome.focus();

};

formulario.addEventListener("submit",(e)=>{

e.preventDefault();

if(nome.value==""){

alert("Informe o nome.");
return;

}

if(data.value==""){

alert("Informe a data.");
return;

}

if(hora.value==""){

alert("Informe a hora.");
return;

}

if(origem.value==""){

alert("Informe a origem.");
return;

}

if(destino.value==""){

alert("Informe o destino.");
return;

}

const mensagem=
`🚖 *EXCLUVIP MOBILIDADE*

👤 Passageiro:
${nome.value}

📅 Data:
${data.value}

🕒 Hora:
${hora.value}

📍 Origem:
${origem.value}

🏁 Destino:
${destino.value}`;

const numero="5516997570917";

setTimeout(()=>{

window.open(`https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`,"_blank");

formulario.reset();

const hoje=new Date().toISOString().split("T")[0];

data.min=hoje;

nome.focus();

},1200);

});