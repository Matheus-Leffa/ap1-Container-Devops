# Trabalho em Dupla — Nuvem e DevOps

## Docker Compose: Comunicação entre Front-end e Back-end

### 1. O que é o Docker Compose?

É uma ferramenta onde podemos executar vários containers simultaneamente e interligados.

### 2. Qual é a finalidade de um arquivo compose.yml?

Serve para definir como a aplicação deve ser executada, definindo serviços, portas, imagens, volumes e redes.

### 3. Qual a diferença entre imagem, container, serviço, volume e rede?

*Imagem:* modelo usado para criar o container. Contém a aplicação, dependências e configurações.

*Container:* é uma instância criada a partir de uma imagem, onde a aplicação é executada.

*Serviço:* é uma definição de como um ou mais containers devem ser executados.

*Volume:* é uma maneira de armazenar dados persistentes, que permanecem mesmo se o container for excluído.

*Rede:* permite que os containers se comuniquem e troquem informações entre si.

### 4. Para que serve a propriedade services?

Serve para definir e organizar os diferentes serviços que fazem parte da aplicação, como front-end, back-end e banco de dados.

### 5. O que significa?

yaml
ports:
  - "8080:80"


Significa que a porta 8080 do computador será redirecionada para a porta 80 do container.

### 6. Qual a diferença entre ports e expose?

*ports:* permite acessar o serviço de fora do Docker utilizando uma porta do computador.

*expose:* disponibiliza a porta para comunicação entre os containers, sem publicá-la para o computador.

### 7. Como o Docker Compose cria uma rede entre os serviços?

Ele cria uma rede própria para os serviços e permite que eles se comuniquem entre si usando o nome dos serviços. Essa rede é interna ao ambiente Docker, permitindo a comunicação entre os containers de forma organizada e sem a necessidade de utilizar localhost.

### 8. Como um container consegue acessar outro container?

Ele usa o nome do serviço como endereço para se comunicar com outro container dentro da rede Docker.

### 9. Por que usamos o nome do serviço em vez de localhost?

Porque localhost acessa o próprio container, e não o container que queremos acessar. Por isso, usamos o nome do serviço como referência.

### 10. Para que serve environment?

Serve para declarar variáveis de ambiente dentro dos containers, utilizadas para configurar APIs, bancos de dados, URLs e outras informações da aplicação sem precisar alterar diretamente o código.

### 11. O que significa depends_on?

Serve para indicar que um serviço depende de outro serviço para ser iniciado, ajudando a definir a ordem de inicialização.

### 12. O que significa restart?

A propriedade define quando o Docker deve tentar reiniciar um container. Existem opções que alteram o comportamento da reinicialização.

Por exemplo:

yaml
restart: unless-stopped


Faz com que o Docker tente reiniciar automaticamente o container, exceto quando ele foi parado manualmente.