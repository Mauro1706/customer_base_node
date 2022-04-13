# Sobre o Projeto

Esse e um projeto em Node.js desenvolido na versão v17.8.0 utilizando SOLID

#### Documentação do projeto: **[documenter.getpostman.com/myclient](https://documenter.getpostman.com/view/15672873/UVz1MXHY#fc23d9a1-1ae5-40ea-ac06-072e0c757f9c)**

## O Desafio
#### Requisitos

- Criar uma API que de uma visão clara e simplificada de clientes para possa definir certas ações.
- Listar e filtrar clientes por condições pré-definidas com, ‘Em Atraso’, ‘Dentro do Prazo’, ‘Pago’. Aplicar ações como, ‘Agradecer Pagamento’, ‘Cobrar’, ‘Cancelar Contrato’. 

- O registro de clientes deve conter pelo menos os seguintes dados:

  - Nome; CPF/CNPF;
  - Telefone;
  - Numero de Contrato; Data de Contrato; Valor de Contrato;
  - Situação Contrato;
  - Ação; 

- Desenvolver formulário para cadastrar, atualizar e eliminar o cliente.

- Desenvolver uma página de Listagem, onde possam ser aplicados filtros, Ex.: ‘Em Atraso’, ‘Dentro do Prazo’, ‘Pago’. Importante: Realizar filtro no Backend por meio de parâmetros enviados pela aplicação Frontend.

- Na listagem de cliente, permitir aplicar ação por cliente, Ex.: ‘Agradecer Pagamento’, ‘Cobrar’, ‘Cancelar Contrato’.

#### Requisitos Técnicos

– Desenvolver o Backend em NodeJs. 2 – Utilizar MongoDb para persistência dos dados.

- Desenvolver o Frontend com HTML, CSS, JavaScript. Podendo ser utilizado Vanilla JS ou qualquer Framework JS.

## A solução

#### Como rodar o projeto

**Antes de seguir os passos abaixo tenha certeza que o docker e docker-compose estão instalados na maquina. Para rodar este projeto:**

1\. Clone este repositorio  e entre na pasta

```
git clone https://github.com/Mauro1706/customer_base_node.git
cd customer_base_node/
```

2\.Instale a imagem docker com o comando:

```
docker build -t maurowcosta/api-ts .
```

2\. Faça o build dos containers \, o container **api_dev** utilizara a porta 5000 e o container **link-db** utilizara a porta 27017, certifique-se que essas portas estejam livres antes de continuar. Se seu usuário não estiver incluido no grupo de permissões do **docker e docker-compose**  será necessário executar os comandos como administrador (sudo)

```
docker-compose up -d
```

4\. Agora você pode acessar aplicação em localhost:5000 ou [clique aqui!](http://localhost:5000)

## DUVIDAS E CONTATOS
- **[Whatsapp - Mauro Wendel Rodrigues Costa ](https://api.whatsapp.com/send?phone=5561983486393)**
- **[Repo: GITHUB - Mauro1706 ](https://github.com/Mauro1706)**
