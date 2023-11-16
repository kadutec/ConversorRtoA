function converterNumeroRomano() {
    const numeroInput = document.getElementById("numeroInput").value;
    const numero = parseInt(numeroInput);

    if (isNaN(numero) || numero < 0 || numero > 3999) {
        document.getElementById("numeroRomanoResultado").innerText = "O número não pode ser \nrepresentado em algarismos romanos.";
        return;
    }

    const milhar = Math.floor(numero / 1000);
    const centena = Math.floor((numero % 1000) / 100);
    const dezena = Math.floor((numero % 100) / 10);
    const unidade = numero % 10;

    const algarismosRomanos = [
        ["", "M", "MM", "MMM"],
        ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"],
        ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"],
        ["","I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"]
    ];

    const resultado = algarismosRomanos[0][milhar] +
                    algarismosRomanos[1][centena] +
                    algarismosRomanos[2][dezena] +
                    algarismosRomanos[3][unidade];

    document.getElementById("numeroRomanoResultado").innerText = "O numero em romano é: " + resultado;
}

function converterRomanoParaNumero() {
    const romanoInput = document.getElementById("romanoInput").value.toUpperCase();
    const algarismosRomanos = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let resultado = 0;
    let anterior = 0;

    for (let i = romanoInput.length - 1; i >= 0; i--) {
        const valorAtual = algarismosRomanos[romanoInput[i]];

        if (!valorAtual) {
            document.getElementById("romanoNumeroResultado").innerText = "Número romano inválido.";
            return;
        }

        if (valorAtual < anterior) {
            resultado -= valorAtual;
        } else {
            resultado += valorAtual;
        }

        anterior = valorAtual;
    }

    if (resultado < 0 || resultado > 4000) {
        document.getElementById("romanoNumeroResultado").innerText = "Número romano está compreendido apenas entre 1 a 3999.";
        return;
    }

    document.getElementById("romanoNumeroResultado").innerText = "O algarismo romano em inteiro é: " + resultado;
}