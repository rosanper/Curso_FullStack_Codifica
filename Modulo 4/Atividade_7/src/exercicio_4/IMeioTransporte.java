//Exercício 4 — Polimorfismo com Interface (IMeioTransporte)
//Defina a interface IMeioTransporte com acelerar() e frear(). Implemente Carro,
//Bicicleta e Trem, cada um com lógica própria de variação de velocidade e limites.
//No método principal, crie uma lista de IMeioTransporte, percorra e invoque
//acelerar()/frear() demonstrando polimorfismo. Trate operações inválidas com
//exceções apropriadas.


package exercicio_4;

public interface IMeioTransporte {
    void acelerar();
    void frear();
}
