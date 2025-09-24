package exercicio_4;

public class Carro implements IMeioTransporte{
    private int velocidade = 0;
    private static final int VELOCIDADE_MAX = 180;

    public Carro() {
    }

    @Override
    public void acelerar() {
        if (velocidade + 20 > VELOCIDADE_MAX) {
            throw new IllegalStateException("Carro não pode ultrapassar " + VELOCIDADE_MAX + " km/h");
        }
        velocidade += 20;
        System.out.println("O carro está acelerando. O carro está a "+velocidade+"km/h");
    }

    @Override
    public void frear() {
        if (velocidade == 0) {
            throw new IllegalStateException("Carro está parado");
        }
        velocidade -= 20;
        System.out.println("O carro está freando. O carro está a "+velocidade+"km/h");
    }
}
