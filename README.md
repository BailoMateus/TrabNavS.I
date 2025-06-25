MoneyTrack - Aplicativo de Controle Financeiro
Este é um aplicativo web para controle e gerenciamento de finanças pessoais, concebido como o projeto para a disciplina de Experiência Criativa, sob a orientação dos professores Cleverson e Marina. O projeto foi construído com foco em funcionalidades essenciais e uma interface limpa, utilizando apenas HTML, CSS e JavaScript puro, sem frameworks, para um controle fundamental sobre o código.

Status do Projeto: Em Desenvolvimento 🚀

📋 Índice
Sobre o Projeto
✨ Funcionalidades
🛠️ Tecnologias Utilizadas
📂 Estrutura de Arquivos
🚀 Como Executar o Projeto
📸 Screenshots
✒️ Autor
📝 Sobre o Projeto
MoneyTrack foi desenvolvido como uma ferramenta para ajudar usuários a terem uma visão clara de suas finanças. O aplicativo permite o cadastro de despesas, sua classificação em categorias, visualização de relatórios gráficos, definição de metas e configurações de perfil. Todos os dados são salvos localmente no navegador do usuário, utilizando a Web Storage API (localStorage e sessionStorage).

✨ Funcionalidades
Autenticação de Usuário:
[x] Página de Cadastro de novos usuários.
[x] Página de Login para usuários existentes.
[x] Os dados de usuário são salvos no localStorage.
Dashboard Principal:
[x] Visão geral com gráfico de barras de gastos.
[x] Feed de "Últimas Atualizações" com as despesas recentes.
[x] Botões de acesso rápido para adicionar despesas e ver a lista completa.
Gerenciamento de Despesas:
[x] Fluxo de adição de despesa em duas etapas (dados básicos e classificação).
[x] Lista completa de despesas com paginação.
[x] Opções de "Editar" e "Deletar" na lista (interface pronta).
Relatórios Gráficos:
[x] Relatório por Categoria: Gráfico de rosca (doughnut) mostrando a proporção de gastos em cada categoria.
[x] Relatório por Período: Gráfico de linha (line) mostrando a evolução dos gastos ao longo do tempo, com filtros de mês e ano.
Metas e Configurações:
[x] Página para gerenciamento de metas financeiras.
[x] Página de configurações para alterar dados do usuário, como e-mail, senha e moeda.
[x] Interface com seções expansíveis (acordeão) para melhor organização.
🛠️ Tecnologias Utilizadas
Este projeto foi construído utilizando apenas as tecnologias base da web, conforme os requisitos.

Frontend:
HTML5
CSS3 (com Grid Layout e Flexbox para responsividade)
JavaScript (ES6+ com Módulos)
Armazenamento de Dados:
localStorage (para dados persistentes como usuários e despesas).
sessionStorage (para dados temporários no formulário de múltiplas etapas).
Bibliotecas (links CDN):
Chart.js: Para a renderização dos gráficos nos dashboards e relatórios.
Font Awesome: Para a utilização de ícones em toda a interface.
📂 Estrutura de Arquivos
O projeto está organizado da seguinte forma para facilitar a manutenção:

.
├── assets/
│   └── logo.png
├── modules/
│   ├── auth.js
│   ├── config_handler.js
│   ├── despesas.js
│   ├── despesa_etapa1.js
│   ├── despesa_finalizar.js
│   ├── despesa_listar.js
│   ├── grafico.js
│   ├── header.js
│   ├── relatorio_categoria.js
│   └── relatorio_periodo.js
├── adicionar_despesa.html
├── cadastro.html
├── class_custos.html
├── configurações.html
├── dashboard.html
├── lista_despesas.html
├── login.html
├── metas.html
├── relatorio_categoria.html
├── relatorio_periodo.html
├── style.css
└── README.md
🚀 Como Executar o Projeto
Como este projeto utiliza Módulos JavaScript (import/export), ele precisa ser executado a partir de um servidor local para funcionar corretamente devido às políticas de segurança (CORS) dos navegadores.

Opção 1: Usando a extensão Live Server (VS Code)

Clone o repositório: git clone https://github.com/seu-usuario/seu-repositorio.git
Abra a pasta do projeto no Visual Studio Code.
Instale a extensão Live Server.
Clique com o botão direito no arquivo login.html e selecione "Open with Live Server".
O projeto será aberto no seu navegador padrão e estará pronto para uso.
Opção 2: Usando um servidor Python simples

Certifique-se de que você tem Python instalado.
Abra um terminal na pasta raiz do projeto.
Execute o comando: python -m http.server
Abra seu navegador e acesse http://localhost:8000/.
Clique no arquivo login.html para iniciar.
