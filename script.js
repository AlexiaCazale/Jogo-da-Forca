var forca = ["i0.png", "i1.png", "i2.png", "i3.png", "i4.png", "i5.png", "i6.png", "i7.png"];
var erro = 0;
var palavra = "";
var acertos = 0;

function preparar_jogo() {

    document.getElementById('div1').style = 'display: none;';

    palavra = document.getElementById('palavra').value.toUpperCase();

    for (let x = 0; x < palavra.length; x++) {

        var div = document.createElement('div');
        div.setAttribute("id", "d" + x);
        document.getElementById("resposta").appendChild(div);

    }

    document.getElementById("imagem").src = "imagens/" + forca[0];
    document.getElementById("imagem").style = "display:inline";
    document.getElementById("letras").style = "display:inline";
}

function verificar(ev) {

    var id = ev.dataTransfer.getData('id');
    let tem = false;

    for (var x = 0; x < palavra.length; x++) {
        //Acertou a letra
        if (palavra[x] == id) {
            acertos++;
            tem = true;
            document.getElementById("d" + x).innerHTML = id;
            document.getElementById("d" + x).style = 'background-color: white; color: black';

            document.getElementById(id).style.visibility = "hidden";

            setTimeout(function () {
                document.getElementById("d" + x).innerHTML = id;
            }, 2000);
        }
    }
    if (!tem) {
        //Errou a letra
        erro++;
        document.getElementById('imagem').src = "imagens/" + forca[erro];
        document.getElementById(id).style.visibility = "hidden";
    }

    //Fim de jogo
    if (erro == 7) {

        document.getElementById('erro').innerHTML = 'Você morreu!';
        document.getElementById('respota_gameOver').innerHTML = palavra;
        document.getElementById('respota_gameOver').style = "color: red";

        for (var i = 0; i < palavra.length; i++) {
            if (!document.getElementById('d' + i).innerHTML) {
                document.getElementById('d' + i).innerHTML = palavra[i];
                document.getElementById('d' + i).style.color = 'red';
            }
        }

    }

    if (acertos == palavra.length) {
        document.getElementById('resposta').innerHTML = 'Parabéns! Você acertou!';
    }
}

function comeco(ev) {

    ev.dataTransfer.setData("id", ev.target.id);
}

function fim(ev) {

    ev.preventDefault();
    ev.dataTransfer.clearData();
}

function emCima(ev) {

    ev.preventDefault();
}