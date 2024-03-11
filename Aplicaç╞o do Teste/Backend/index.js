
//Classe que cria um "pacote de dados/objeto" que contém as informações de cada Unidade do banco.
class Unidades{ 
    constructor(id,name,cnpj) {
        this.id = id;
        this.name = name;
        this.cnpj = cnpj;
        this.clientes = [];
    }
//Adiciona um cliente dentro da nova unidade.
    adicionarClientes(clientes){
        this.clientes.push(clientes);
    }
}

//Unidades do Banco.
const Unidade1 = new Unidades(1,'Agência BB Futuro','12.345.678/0001-90');
const Unidade2 = new Unidades(2,'Agência BB Mais','12.345.678/0002-70');
const Unidade3 = new Unidades(3,'Agência BB Conecta','12.345.678/0003-50');

//Classe que cria um "pacote de dados/objeto" que contém as informações de cada cliente.
class Clientes{
    constructor(id, cliente, saldo) {
      this.id = id;
      this.cliente = cliente;
      this.saldo = saldo;
    }

// Faz uma consulta de saldo de um cliente.
    verSaldo() {
      console.log('O seu saldo atual é: R$ ${saldo}');
    }

// Faz um depósito de um valor na conta do cliente.
    depositar(valor) {
      this.saldo += valor;
      console.log('Depósito realizado com sucesso!')
    }

// Faz um saque de um valor na conta do cliente.
    sacar(valor) {
      if (valor <= this.saldo) {
        this.saldo -= valor;
        console.log('Saque realizado com sucesso!');
      }
      else{
        console.log('Saldo insuficiente para realizar o saque.')
      }
    }
// Faz um retorno de todos os dados de um cliente.
    obterDados() {
      return {
        id: this.id,
        nome: this.cliente.name,
        saldo: this.saldo,
      };
    }
}


//Clientes da Unidade1.
const Cliente1 = new Clientes(123456789,'João Silva','12345-6',1.000);
const Cliente2 = new Clientes(987654321,'Maria Oliveira','65432-1',2.000);
const Cliente3 = new Clientes(112233445,'Pedro Souza','22334-5',3.000);
const Cliente4 = new Clientes(223344556,'Ana Costa','33445-6',4.000);
const Cliente5 = new Clientes(334455667,'Carlos Santos','44556-7',5.000);

//Clientes da Unidade2.
const Cliente6 = new Clientes(445566778,'Fernanda Rodrigues','55667-8',6.000);
const Cliente7 = new Clientes(556677889,'Gabriela Martins','66778-9',7.000);
const Cliente8 = new Clientes(667788990,'Eduardo Fernandes','77889-0',8.000);
const Cliente9 = new Clientes(778899001,'Rafael Silva','88990-1',9.000);
const Cliente10 = new Clientes(889900112,'Roberto Pereira','99001-2',10.000);

//Clientes da Unidade3.
const Cliente11 = new Clientes(123456790,'Bruno Moura','12345-7',1.500);
const Cliente12 = new Clientes(987654322,'Camila Andrade','65432-2',2.500);
const Cliente13 = new Clientes(112233446,'Diego Freitas','22334-6',3.500);
const Cliente14 = new Clientes(223344557,'Eduardo Gomes','33445-7',4.500);
const Cliente15 = new Clientes(334455668,'Felipe Lima','44556-8',5.500);

// Criando lista de clientes para cada unidade.
const clientesUnidade1 = [Cliente1, Cliente2, Cliente3, Cliente4, Cliente5];
const clientesUnidade2 = [Cliente6, Cliente7, Cliente8, Cliente9, Cliente10];
const clientesUnidade3 = [Cliente11, Cliente12, Cliente13, Cliente14, Cliente15];

// Associando clientes a cada unidade.
Unidade1.clientes = clientesUnidade1;
Unidade2.clientes = clientesUnidade2;
Unidade3.clientes = clientesUnidade3;



