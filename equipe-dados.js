// Dados do Mapa da Equipe (transcritos do quadro "Audiovisual - Pecege" no Miro).
// Para atualizar: edite as listas abaixo e a data de atualização.
//
// Campos de cada pessoa:
//   nome    — obrigatório
//   gestao  — 'raoni' | 'paulo' | 'coord'  (cor da borda, igual à legenda do Miro)
//   anos    — 5 | 10 | 15                  (selo de tempo de casa)
//   novo    — true                         (selo NOVO)
//   freela  — true                         (vínculo freela)

const EQUIPE = {
  atualizacao: '29/07/2026',
  total: 53,
  miro: 'https://miro.com/app/board/uXjVORwJtBg=/?share_link_id=547994466562',

  gestao: [
    { nome: 'Raoni Sato Teixeira', gestao: 'raoni', anos: 10 },
    { nome: 'Paulo Vergilio Gomes', gestao: 'paulo', anos: 15 },
  ],
  relacionados: ['Dani Flores', 'Matheus (Sorriso)'],

  areas: [
    {
      nome: 'Produção, Planejamento e Mediação',
      cargo: 'Direção / Coordenação',
      coordenacao: [{ nome: 'Lívia Maria da Silva', gestao: 'coord', anos: 10 }],
      times: [
        {
          nome: 'Planejamento',
          pessoas: [
            { nome: 'Matheus Soares Pereira', gestao: 'raoni' },
            { nome: 'Thais Pompeu Esteves', gestao: 'raoni', anos: 5 },
          ],
        },
        {
          nome: 'Produção',
          subtimes: [
            {
              nome: 'Roteiro',
              pessoas: [
                { nome: 'Claudio Bierbaumer Avancini', gestao: 'raoni' },
                { nome: 'Felipe Eduardo Amaral', gestao: 'raoni', anos: 5 },
              ],
            },
            {
              nome: 'Produção e Cenografia',
              pessoas: [
                { nome: 'Juliana Aparecida de Oliveira', gestao: 'raoni', anos: 5 },
                { nome: 'Tiphany de Souza Inácio', gestao: 'raoni', anos: 5 },
                { nome: 'Luisa Almeida Nunes', gestao: 'raoni', anos: 5 },
              ],
            },
            {
              nome: 'Produção',
              pessoas: [
                { nome: 'Fernanda Dojcsar', gestao: 'raoni', anos: 5 },
                { nome: 'Pedro Moraes da Silveira', gestao: 'raoni' },
              ],
            },
          ],
        },
        {
          nome: 'Produção SP',
          pessoas: [{ nome: 'Milene Oliveira', gestao: 'paulo' }],
        },
        {
          nome: 'Mediação',
          pessoas: [
            { nome: 'Ana Paula Nazatto', gestao: 'paulo', anos: 5 },
            { nome: 'Ariadne Fernandes do Nascimento Maia', gestao: 'paulo' },
            { nome: 'Camila Lima de Oliveira Margato', gestao: 'paulo' },
            { nome: 'Eduardo Oliveira', gestao: 'paulo' },
            { nome: 'Julia Lopes Moreira', gestao: 'paulo' },
            { nome: 'Larissa Martins Reis', gestao: 'paulo' },
            { nome: 'Lorisa Maria de Paula Cesso', gestao: 'paulo' },
            { nome: 'Renata Cristina Soares Santos', gestao: 'paulo' },
            { nome: 'Soraia de Moraes Fessel', gestao: 'paulo', anos: 5 },
          ],
        },
        {
          nome: 'Mediação Freelas',
          pessoas: [
            { nome: 'Cássia Vieira', gestao: 'paulo', freela: true },
            { nome: 'Juliana Diniz', gestao: 'paulo', freela: true },
          ],
        },
        {
          nome: 'Mediação SP',
          pessoas: [
            { nome: 'Luciano Aparecido dos Santos', gestao: 'paulo' },
            { nome: 'Maria Karina Fernandes do Nascimento', gestao: 'paulo' },
            { nome: 'Sérgio Ricardo Duarte Palhas', gestao: 'paulo' },
            { nome: 'Weinny Gorato Eirado', gestao: 'paulo' },
          ],
        },
      ],
    },

    {
      nome: 'Técnica',
      cargo: 'Gestor / Coordenação',
      coordenacao: [{ nome: 'Paulo Vergilio Gomes', gestao: 'paulo', anos: 15 }],
      times: [
        {
          nome: 'Técnica',
          subtimes: [
            {
              nome: 'Fotografia',
              pessoas: [
                { nome: 'Andre Henrique Gozetto', gestao: 'paulo' },
                { nome: 'Robson Ricardo Aparecido Ribeiro', gestao: 'paulo' },
                { nome: 'Samuel Rodrigues da Silva', gestao: 'paulo' },
              ],
            },
            {
              nome: 'Câmera e Mesa de corte',
              pessoas: [
                { nome: 'Adriana Caberlin de Souza', gestao: 'paulo' },
                { nome: 'Amanda Cristina Girotto', gestao: 'paulo' },
                { nome: 'Arthur Pereira e Magalhães', gestao: 'paulo', anos: 5 },
                { nome: 'Felipe de Ponte', gestao: 'paulo' },
                { nome: 'Gabriel Franco Annunciato', gestao: 'paulo', anos: 5 },
                { nome: 'Mariana Sigrist Demori', gestao: 'paulo' },
                { nome: 'Mateus Leonardo Barbosa', gestao: 'paulo' },
                { nome: 'Sabrina da Silva Rodrigues', gestao: 'paulo' },
              ],
            },
          ],
        },
        {
          nome: 'Técnica SP',
          subtimes: [
            {
              nome: 'Câmera e Mesa de corte',
              pessoas: [
                { nome: 'Marcus Vinícius Guimarães de Pinho Junior', gestao: 'paulo' },
                { nome: 'Mariana de Souza Lima', gestao: 'paulo' },
                { nome: 'Roney Themiski de Barros', gestao: 'paulo', novo: true },
              ],
            },
          ],
        },
      ],
    },

    {
      nome: 'Pós-produção',
      cargo: 'Pós-produção / Coordenação',
      coordenacao: [{ nome: 'Henrique Zerati Neves', gestao: 'coord', anos: 5 }],
      times: [
        {
          nome: 'Coordenação Técnica',
          pessoas: [{ nome: 'Gabriela Torres de Oliveira Melo', gestao: 'raoni', anos: 10 }],
        },
        {
          nome: 'Edição',
          pessoas: [
            { nome: 'Giovane Parisotto Capeletti', gestao: 'raoni', anos: 5 },
            { nome: 'Thales Charbel Medeiros', gestao: 'raoni', anos: 5 },
            { nome: 'Caroline Soares de Oliveira Menegali', gestao: 'raoni' },
            { nome: 'Daniel Dinardi Francisco', gestao: 'raoni', anos: 5 },
            { nome: 'Jonathan Martins de Lima', gestao: 'raoni' },
            { nome: 'Keiciane Tesche Ievenes', gestao: 'raoni', anos: 10 },
            { nome: 'Natalia Paiva de Morais', gestao: 'raoni', anos: 5 },
            { nome: 'Vinicius do Carmo Cruz', gestao: 'raoni', anos: 5 },
            { nome: 'Yuri Henrique Moreto', gestao: 'raoni' },
          ],
        },
      ],
    },
  ],

  // Bloco de Marketing que aparece ao lado no mesmo quadro do Miro
  marketing: {
    nome: 'Marketing e Design',
    times: [
      { nome: 'Marketing', pessoas: [{ nome: 'Thiago Novaes', anos: 5 }] },
      { nome: 'Design / Coordenação', pessoas: [{ nome: 'Wesllei Manoel Figueiredo de Souza', anos: 5 }] },
      {
        nome: 'Design',
        subtimes: [
          {
            nome: 'Planejamento',
            pessoas: [
              { nome: 'Lívia Nastaro Fassiroli' },
              { nome: 'Marcos Saito (Kitos)', anos: 10 },
            ],
          },
          {
            nome: 'Direção de Arte',
            pessoas: [
              { nome: 'Alexandre da Silva Pereira' },
              { nome: 'José Lucas Forcineti', anos: 5 },
              { nome: 'João Gabriel Rodrigues das Neves' },
              { nome: 'Izequieli Israelita' },
            ],
          },
          {
            nome: 'Design Gráfico',
            pessoas: [
              { nome: 'Caio César de Oliveira Alves Salla', novo: true },
              { nome: 'Caroline Milheiro' },
              { nome: 'Lorena Bortolazzo' },
              { nome: 'Maria Fernanda Sartori' },
              { nome: 'Maurício Luis Engler' },
              { nome: 'Matheus Henrique dos Santos Camargo' },
              { nome: 'Matheus de Paula', novo: true },
            ],
          },
        ],
      },
    ],
  },
};
