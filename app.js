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
  // Obtém o filtro de pesquisa informado
  let filtro_pesquisa = document.getElementById("filtro_pesquisa").value.toUpperCase();
  // Obtém o filtro de cargo selecionado
  let filtro_cargo = document.getElementById("filtro_cargo").value.toUpperCase();
  // Se não informou filtro, termina
  if (filtro_pesquisa=="") {
    section.innerHTML = '<div class="item-resultado"><p class="descricao-meta">Nenhum candidato foi encontrado</p></div>';
    return;
  }
  else
  {
    // Inicializa uma string vazia para armazenar a marcação HTML dos resultados
    let resultados = '';

    for (let dado of dados) {
        let arquivo_imagem = 'fotos\\FRJ'+dado.SQ_CANDIDATO+'_div.jpg';
        let nome_urna = dado.NM_URNA_CANDIDATO;
        let numero_candidato = dado.NR_CANDIDATO;
        let nome = dado.NM_CANDIDATO;
        let nome_social = dado.NM_SOCIAL_CANDIDATO;
        let partido = dado.SG_PARTIDO;
        if (dado.NM_FEDERACAO!="") {
          partido = dado.NM_FEDERACAO + "(" + dado.SG_FEDERACAO + ")"
        }
        let cargo = dado.DS_CARGO;
        let data_nascimento = dado.DT_NASCIMENTO;

        // Formatando para DD/MM/YYYY
        let data_nascimento_formatada = data_nascimento.slice(-4)+"-"+data_nascimento.substr(3,2)+"-"+data_nascimento.substr(0,2);

        let idade = calcularIdade(data_nascimento_formatada);
        let cargo_candidato = dado.DS_CARGO;
        let titulo_eleitoral = dado.NR_TITULO_ELEITORAL_CANDIDATO;
        let genero = dado.DS_GENERO;
        let grau_instrucao = dado.DS_GRAU_INSTRUCAO;
        let estado_civil = dado.DS_ESTADO_CIVIL;
        let cor_raca = dado.DS_COR_RACA;
        let ocupacao = dado.DS_OCUPACAO;

        if((filtro_cargo=="TODOS") || (cargo_candidato==filtro_cargo)) {
                
          if((nome_urna.includes(filtro_pesquisa)) || (numero_candidato.includes(filtro_pesquisa)) || (partido.includes(filtro_pesquisa))) {
            resultados +=  `<div class="item-resultado">
                      <h3>
                      ${nome_urna} - ${numero_candidato}
                      </h3>
                      <p class="descricao-meta"><b>${nome}</b> - Nasc.: <b>${data_nascimento} (${idade} anos)</b></p>
                      
                      <img src="${arquivo_imagem}" alt="foto indisponível">
                      <p class="descricao-meta-menor">${nome_social}</b></p>
                      <p class="descricao-meta-menor">Partido: <b>${partido}</b></p>
                      <p class="descricao-meta-menor">Cargo: <b>${cargo}</b></p>
                      <p class="descricao-meta-menor">Grau de instrução: <b>${grau_instrucao}</b></p>
                      <p class="descricao-meta-menor">Estado civil: <b>${estado_civil}</b></p>
                      <p class="descricao-meta-menor">Cor/Raça: <b>${cor_raca}</b></p>
                      <p class="descricao-meta-menor">Ocupação: <b>${ocupacao}</b></p>
                      </div>
                  `;
          }
        }
    }
    // Atribui a marcação HTML construída à seção
    section.innerHTML = resultados;
  }
}

function calcularIdade(dataNascimento) {
  // Cria objetos Date para a data de nascimento e a data atual
  const dataNasc = new Date(dataNascimento);
  const hoje = new Date();

  // Calcula a diferença em milissegundos e converte para anos
  let idade = hoje.getFullYear() - dataNasc.getFullYear();

  // Ajusta a idade considerando meses e dias
  const m = hoje.getMonth() - dataNasc.getMonth();
  if (m < 0 || (m === 0 && hoje.getDate() < dataNasc.getDate())) {
    idade--;
  }

  return idade;
}