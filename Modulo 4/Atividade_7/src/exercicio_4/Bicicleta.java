package exercicio_4;

public class Bicicleta implements IMeioTransporte{
    private int velocidade = 0;
    private static final int VELOCIDADE_MAX = 30;

    public Bicicleta() {
    }

    @Override
    public void acelerar() {
        if (velocidade + 5 > VELOCIDADE_MAX) {
            throw new IllegalStateException("A Bicilceta não pode ultrapassar " + VELOCIDADE_MAX + " km/h");
        }
        velocidade += 5;
        System.out.println("A Bicicleta está acelerando. A bicicleta está a "+velocidade+"km/h");
    }

    @Override
    public void frear() {
        if (velocidade == 0) {
            throw new IllegalStateException("A Bicicleta está parada");
        }
        velocidade -= 5;
        System.out.println("A Bicicleta está freando. A bicicleta está a "+velocidade+"km/h");
    }
}
