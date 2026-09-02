# Documentação do Projeto

## Integrantes

* Marcus Vinicius
* Matheus Leffa

## Tecnologias utilizadas

* Docker — Criação e execução dos containers da aplicação.
* Docker Compose — Orquestração dos containers e criação da rede de comunicação entre os serviços.
* Node.js — Ambiente de execução utilizado no Back-end.
* Express — Framework utilizado para criar a API e disponibilizar o endpoint GET /api/alunos.
* HTML, CSS e JavaScript — Tecnologias utilizadas para desenvolver o Front-end.
* NGINX — Servidor web responsável por disponibilizar os arquivos estáticos do Front-end e atuar como proxy reverso, encaminhando as     requisições da API para o serviço Back-end.

## Como executar o projeto

Para executar o projeto, é necessário ter o Docker instalado. No terminal, dentro da pasta do projeto, execute:

bash
docker compose up

Esse comando inicia os serviços definidos no arquivo compose.yml.

## Como acessar o Front-end

Após iniciar os containers, o Front-end pode ser acessado pelo navegador através da porta definida em ports no arquivo compose.yml.

## Como o Front-end encontra o Back-end

O Front-end encontra o Back-end através do nome do serviço definido no Docker Compose. Dentro da rede Docker, o nome do serviço funciona como endereço para comunicação entre os containers.

## Rede Docker utilizada

O Docker Compose cria automaticamente uma rede para os serviços do projeto. Dessa forma, os containers conseguem se comunicar entre si utilizando os nomes dos serviços.

## Ports

A propriedade ports permite conectar uma porta do computador a uma porta do container.

Por exemplo:

yaml
ports:
  - "8080:80"


Nesse caso, a porta 8080 do computador é direcionada para a porta 80 do container.

## Environment

A propriedade environment é utilizada para definir variáveis de ambiente dentro de um container.

Neste projeto, ela é utilizada no serviço do Front-end para definir o endereço do Back-end:

environment:
      API_URL: backend
      API_PORT: "3000"

A variável API_URL e API_PORT recebem backend e 3000 respectivamente, onde backend é o nome do serviço definido no Docker Compose.

Essas variáveis são utilizada pelo NGINX na configuração de proxy reverso. Quando o Front-end recebe uma requisição para /api/alunos, o NGINX utiliza as variáveis para encaminhar a requisição para o container do Back-end. Dessa forma: proxy_pass http://${API_URL}:${API_PORT};

## Depends_on

A propriedade depends_on é utilizada para indicar que um serviço possui uma dependência em relação a outro serviço.

Neste projeto, o serviço do Front-end possui a seguinte configuração:

depends_on:
  - backend

Isso indica que o serviço frontend depende do serviço backend.

Portanto, ao iniciar os serviços utilizando o Docker Compose, o Docker inicia o serviço backend antes do serviço frontend.

É importante destacar que o depends_on controla principalmente a ordem de inicialização dos containers. Ele não garante, por si só, que a aplicação dentro do Back-end já esteja totalmente pronta para receber requisições.

No projeto, essa configuração ajuda a organizar a inicialização dos serviços e representa a relação de dependência existente entre o Front-end e o Back-end.

## Dificuldades encontradas

Durante o desenvolvimento da aplicação, enfrentamos algumas dificuldades relacionadas à comunicação entre os serviços e à configuração do ambiente de desenvolvimento.

CORS

Inicialmente, tivemos problemas relacionados ao CORS (Cross-Origin Resource Sharing). O navegador estava impedindo que o Front-end realizasse requisições diretamente para o Back-end em localhost:3000, pois o Front-end e o Back-end estavam sendo executados em origens diferentes.

Para resolver esse problema, foi necessário configurar corretamente a comunicação entre os serviços.

Instalação do Node.js e Express no Ubuntu

Também tivemos dificuldades com o ambiente de desenvolvimento utilizando o Ubuntu via WSL. Inicialmente, o Node.js estava instalado apenas no Windows, o que causou problemas durante a execução da aplicação dentro do ambiente Linux.

Foi necessário instalar e configurar novamente o Node.js e as dependências do projeto, incluindo o Express, diretamente no Ubuntu para que a aplicação pudesse ser executada corretamente no WSL.

Configuração do NGINX e da variável API_URL

Também enfrentamos problemas durante a configuração do NGINX. Inicialmente, a variável de ambiente API_URL, definida no arquivo compose.yml, não estava sendo utilizada corretamente na configuração do NGINX.

Além disso, percebemos que alterações realizadas nos arquivos do projeto não eram refletidas ao executar apenas o comando:

docker compose up

Isso ocorria porque o Docker estava utilizando uma imagem criada anteriormente. Para que as alterações fossem incluídas na imagem e nos containers, foi necessário reconstruir as imagens utilizando:

docker compose up --build

Dessa forma, o Docker recria as imagens utilizando a versão atualizada dos arquivos do projeto antes de iniciar os containers.
