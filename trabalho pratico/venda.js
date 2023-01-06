function calcularPrecoFinal() {
    // Obter os valores dos campos de inserção de dados
    var marca = document.getElementById("marca").value;
    var modelo = document.getElementById("modelo").value;
    var precoAquisicao = document.getElementById("preco-aquisicao").value;
    var anoMatricula = document.getElementById("ano-matricula").value;
    var quilometragem = document.getElementById("quilometragem").value;
    var estadoConservacao = document.getElementById("estado-conservacao").value;
  
    // Calcular o coeficiente de desvalorização 𝑐1 com base no ano da matrícula do automóvel
    var c1;
    if (anoMatricula <= 10) {
      c1 = 0.05 / anoMatricula;
    } else {
      c1 = 0.04 / anoMatricula;
    }
  
    // Calcular o coeficiente de desvalorização 𝑐2 com base na quilometragem do automóvel
    var c2;
    if (quilometragem <= 30000) {
      c2 = 1;
    } else if (quilometragem <= 70000) {
      c2 = 0.95;
    } else {
      c2 = 0.9;
    }


    // Calcular o preço final 𝑃𝑟𝑒ç𝑜𝑓𝑖𝑛𝑎𝑙 utilizando os coeficientes de desvalorização 𝑐1 e 𝑐2 e o preço de aquisição do automóvel
    var precoFinalMau = precoAquisicao * (1 - anoMatricula * c1) * c2 * 0.6;
    var precoFinalBom = precoAquisicao * (1 - anoMatricula * c1) * c2 * 1;
    var precoFinalMuitoBom = precoAquisicao * (1 - anoMatricula * c1) * c2 * 1.1;
  
    // Assegurar que o preço final não é inferior a 500€
    if (precoFinalMau < 500){
      precoFinalMau = 500;
    }
    if (precoFinalBom < 500){
        precoFinalBom = 500;
    }
    if (precoFinalMuitoBom < 500){
        precoFinalMuitoBom = 500;
    }
  
    // Atualizar os resultados nas divs correspondentes
  document.getElementById("resultado-mau").innerHTML = "Preço Final (Mau Estado): " + precoFinalMau + "€";
  document.getElementById("resultado-bom").innerHTML = "Preço Final (Bom Estado): " + precoFinalBom + "€";
  document.getElementById("resultado-muito-bom").innerHTML = "Preço Final (Muito bom/Extras): " + precoFinalMuitoBom + "€";
}

function mostrarDetalhes(estado) {
    var marca = document.getElementById("marca").value;
    var modelo = document.getElementById("modelo").value;

  // Mostrar os detalhes do carro quando o usuário passar o mouse sobre a div do resultado correspondente
    var detalhes = "Marca: " + marca + "<br>" + "Modelo: " + modelo + "<br>" + "Estado de Conservação: " + estado;
    document.getElementById("detalhes").innerHTML = detalhes;
    document.getElementById("detalhes").style.display = "block";
}

function esconderDetalhes() {
  // Esconder os detalhes do carro quando o usuário tirar o mouse da div do resultado
  document.getElementById("detalhes").style.display = "none";
}
  
    
