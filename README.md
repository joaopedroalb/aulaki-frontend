# Frontend Aulaki - Trabalho de ****Desenvolvimento de software em nuvem****

## Desafio: Criação de uma site que irá consumir a API criada na outra parte do trabalho

Repositório da API: https://github.com/joaopedroalb/aulaki-backend

# **💡**Aplicação

Eu escolhi fazer um site chamado aulaki, onde basicamente ele iria ser um site para pessoas que gostariam de divulgar aulas particulares e pessoas que buscam essas aulas. Basicamente o foco seria nesses 2 casos. A API traz informações relacionada aos professores e as aulas com isso é possível consumir e aplicar na aplicação os dados 

# **🗺️ Paginas**

## **🏠 Home**

<img  src="https://github.com/joaopedroalb/aulaki-frontend/blob/main/_readmeasserts/home_gif.gif" />

Como a home page é mais uma pagina mais informativa então não tinha muito no que fazer requisição, mas só pra não ficar em branco eu criei a section de quantidade de professores e quantidade de cursos pra ele fazer esse consumo da API

<img  src="https://github.com/joaopedroalb/aulaki-frontend/blob/main/_readmeasserts/home_img.png" />

## **✍️** Aulas

<img  src="https://github.com/joaopedroalb/aulaki-frontend/blob/main/_readmeasserts/lessons_page_gif.gif" />

Nessa pagina podemos verificar a parte de pesquisa em cima, nela temos um input que irá alterar uma variavel de titulo onde quando o usuário clicar para pesquisar vai fazer uma requisição usando o parâmetro **title** dessa rota. A parte do dropdown de **tags** foi feita por uma requisição onde recebe as 10 tags mais usadas e os filtros dela é feito por baixo dos panos e não por outra requisição. 

<img  src="https://github.com/joaopedroalb/aulaki-frontend/blob/main/_readmeasserts/lessons_page_search.png" />

Os cards dessa pagina são componentes feitos por informações recebidas da requisição atual e também é feito em cada um uma requisição por id pelo professor daquela aula, para achar as informações de **nome**, **whatsapp** e **facebook** dele. 

<img  src="https://github.com/joaopedroalb/aulaki-frontend/blob/main/_readmeasserts/lessons_page_card.png" />

## **👩‍🏫 Professores**

<img  src="https://github.com/joaopedroalb/aulaki-frontend/blob/main/_readmeasserts/teachers_page_gif.gif" /> 

Nessa pagina é possível ver que também tem inputs para pesquisa, neles o usuário pode buscar por nome do professor e nome da cidade, já que são parâmetros de filtro dessa rota 

<img  src="https://github.com/joaopedroalb/aulaki-frontend/blob/main/_readmeasserts/teachers_page_search.png" />

Os cards usam os dados que foram pegos da requisição atual para popular o componente, mas também podemos verificar que além das informações do professor tem o **número de aula** que ele fez, isso é outra requisição das rotas de aulas que é usado para cada componente usando como query o **id** do professor 

<img  src="https://github.com/joaopedroalb/aulaki-frontend/blob/main/_readmeasserts/teachers_page_card.png" />
