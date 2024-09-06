/**
 * Função responsável por renderizar os resultados de uma pesquisa em uma seção específica da página.
 * 
 * @param {Array} dados - Um array de objetos, onde cada objeto representa um resultado da pesquisa.
 *                       Cada objeto deve conter as propriedades:
 *                       - titulo: O título do resultado.
 *                       - esporte: O esporte relacionado ao resultado.
 *                       - descricao: A descrição do resultado.
 *                       - link: O link para mais informações sobre o resultado.
 */

function pesquisar () {
  // Seleciona a seção onde os resultados serão exibidos
  let section = document.getElementById("resultados-pesquisa");
  // Inicializa uma string vazia para armazenar a marcação HTML dos resultados
  let resultados = '';
    for (let dado of dados) {
        let arquivo_imagem = 'fotos\\FRJ'+dado.SQ_CANDIDATO+'_div.jpg';
        let nome_urna = dado.NM_URNA_CANDIDATO;
        let numero_candidato = dado.NR_CANDIDATO;
        let nome_candidato = dado.NM_CANDIDATO;
        let partido_candidato = dado.SG_PARTIDO;
        let cargo_candidato = dado.DS_CARGO;
              
        resultados +=  `<div class="item-resultado">
                    <h3>
                    ${nome_urna} - ${numero_candidato}
                    </h3>
                    
                    <img src="${arquivo_imagem}" alt="foto do candidato">
                    <p class="descricao-meta">${nome_candidato}</p>
                    <p class="descricao-meta">Partido: ${partido_candidato}</p>
                    <p class="descricao-meta">Cargo: ${cargo_candidato}</p>
                    </div>
                `;
    }
  // Atribui a marcação HTML construída à seção
  section.innerHTML = resultados;
}

