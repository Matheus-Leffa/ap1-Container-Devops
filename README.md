# Documentação do Projeto

## Integrantes

* Marcus Vinicius
* Matheus Leffa

## Tecnologias utilizadas

* Docker
* Docker Compose
* HTML
* CSS
* JavaScript
* Node.js

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

> A preencher de acordo com a configuração utilizada no projeto.

## Depends_on

> A preencher de acordo com a configuração utilizada no projeto.

## Dificuldades encontradas