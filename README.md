# Space Flight News - Demo: https://steady-elf-b5f45f.netlify.app/
O projeto se trata de um feed de notícias relacionadas ao espaço sideral e assuntos satélites ao tema.

Utilizando a API Spaceflight News API (https://api.spaceflightnewsapi.net/v3/documentation) que agrega notícias de diversos portais de notícias

As **funcionalidades** desse feed são:

* Procurar por título de notícia;
 * Ajustar quantidade de notícias por vez no feed;
* Ordenar por notícias mais novas ou antigas;

**Nota**: É possível compartilhar o resultado do feed com os parâmetros da URL utilizando:
* _limit: Para a quantidade de artigos por vez na tela
* _contains: Para filtrar notícias com o título da notícia
> 
Exemplo: http://url?_limit=10&_contains=nasa

Utilizando o **VueJS**, **Vite**, **Bootstrap**, **Sass** e **Docker**
![Desktop 1920x1080](https://i.ibb.co/Pm3LwL0/resume-space-flight-news.png)


## Linguagens/Framework/Tecnologias:

- **Space Flight News API**: 3.4.0
- **VueJS**: 3.2.45
- **Bootstrap**: 5.2.3
- **@popperjs/core**: 2.11.6
- **Sass**: 1.57.1
- **Vite**: 4.0.0
- **Docker**: 20.10.22

# Instalando o projeto:
1. Baixar o arquivo do projeto
2. Setup do projeto: 
>**> `npm run instal`**
- Compilar e minificar arquivos para producao: 
>**> `npm run build`**

- Compilar e hot-reload para desenvolvimento: npm run dev
>**> `npm run dev`**

## QueryParams

É possível compartilhar o resultado do feed com os **parâmetros da URL** utilizando:
- _limit: Para a quantidade de artigos por vez na tela
- _contains: Para filtrar notícias com o título da notícia

Os parâmetros podem ser utilizados **separadamente** ou **em conjunto**:
Exemplo 1: http://url?_limit=10
Exemplo 2: http://url?_contains=nasa
Exemplo 3: http://url?_limit=10&_contains=nasa


## Dockerfile configurado no projeto

Para maior facilidade em **desenvolvimento em conjunto** e **agilidade** de deploys
>Arquivo **Dockerfile**

# Processo de investigação para o desenvolvimento do desafio:

Separei o processo completo do desenvolvimento do desafio em dias e tópicos abordados em cada dia para facilitar a compreensão.
## [ Dia 1 ]
**1. Análise do que foi solicitado do desafio (Ler o Readme.md do desafio no GitHub**
Identificação dos pontos obrigatórios e diferenciais

 **Obrigatórios**
>- **[DESENVOLVIDO]** - Obrigatório 1 - Seguir o wireframe para a página de listagem de artigos;

> - **[DESENVOLVIDO]** - Obrigatório 2 - Seguir o wireframe do modal. Esse modal deverá ser aberto com informações dos artigos no momento que o usuário clicar no botão "Ver Mais";

> - **[DESENVOLVIDO]** - Obrigatório 3 - Seguir a paleta de cores e as fontes definidas na imagem acima;

> - **[DESENVOLVIDO]** - Obrigatório 4 - Desenvolver a funcionalidade do buscador para que seja possível listar artigos que contenham as palavras no título;

> - **[DESENVOLVIDO]** - Obrigatório 5 - Desenvolver a funcionalidade para ordenar os artigos por data, da mais antiga para a mais nova e da mais nova para a mais antiga;

> - **[DESENVOLVIDO]** - Obrigatório 6 - Ao clicar no botão "Carregar mais" deve fazer uma nova requisição para carregar mais 10 artigos na página.
			
**Diferencial**
> - **[DESENVOLVIDO]** - Diferencial 1 Utilizar Query Params para permitir que a URL seja compartilhada com os parâmetros de busca;

> - **[DESENVOLVIDO]** - Diferencial 3 Configurar Docker no Projeto para facilitar o Deploy da equipe de DevOps;

> **[MELHORIA FUTURA]** - Diferencial 2 Escrever Unit Tests ou E2E Test. Escolher a melhor abordagem e biblioteca;

**2. Ler a documentação referente a API Space Flight News**

**3. Planejamento e organização do cronograma para a entrega do desafio dentro do prazo de 5 dias, sendo as etapas do projeto:**
> **3.1** - **Começar** um novo projeto VueJS + Vite + Bootstrap + Sass

> **3.2** - Adquirir as informações dos artigos com **request de API**

> **3.3** - **Desenvolver a lógica** de tratamento de informações, parâmetros na url, busca, ordenação, carregar mais notícias (A princípio de forma centralizada em um único componente)

> **3.4** - **Estruturar informações adquiridas** no layout proposto pensando em: Mobile-First, Responsividade e Acessibilidade:
> - NavBar: buscar por título do artigo e ordenar por ordem de publicação; 
> - Banner; 
> - Artigos: Imagem, Título, Data, Site fonte, Resumo, Botão 'Ver Mais';
> - Modal: Imagem, Título, Data, noticia inteira, Botão 'Ir para o site';
		
>**3.5** - Separa a lógica de acordo com a **responsabilidade de cada componente** dentro do projeto (utilizando props, emits events)

> **3.6** - Tempo extra para **correções** caso necessário

> **3.7** - Configurar o **Docker**

> **3.8** - Entregar


## [ Dia 2 ] - 4. Início da Execução do que havia planejado
Realizei as etapas **3.1**, **3.2** e **3.3** que havia planejado no dia anterior sem muitos problemas
> * **Nota:** Na etapa **3.2**, na documentação da API não estava especificado que para receber as notícias relacionados o título da notícia era necessário 'title_contains' sendo '_contains' genérico para receber utilizar os campos de retorno, entrei na comunidade do Discord e o desenvolvedor da API respondeu a minha dúvida e atualizou a documentação para futuros novos usuários =)
			
## [ Dia 3 ]
Realizei as etapas **3.4** e **3.5** sem problemas
		
## [ Dia 4 ]
No dia seguinte após ter terminado a parte principal utilizei a etapa **3.6** para navegar com calma por toda a aplicação, melhorar alguns aspectos da logica desenvolvida e buscar pontos possíveis pontos de diminuição na complexidade do código e pedir para outra pessoa testar minha aplicação para verificar a usabilidade.

## [ Dia 5 ]
Realizei a etapa **3.7**, além de revisar todos os aspectos do desafio, escrever esse **README** e realizar a etapa **3.8** =)

# Imagens
A seguir algumas imagens do projeto em diferentes viewports: **Mobile**, **Tablet** e **Desktop**;

## Mobile - 425x1080
![Mobile](https://i.ibb.co/XCNPskk/mobile-view.png)
## Tablet - 768x1080
![Tablet](https://i.ibb.co/1dVWnmR/tablet-view.png)
## Desktop - 1920x1080
![Desktop](https://i.ibb.co/FWRLVZ6/desktop-view.png)
