package exercicio_4;

public class Trem implements IMeioTransporte{
    private int velocidade = 0;
    private static final int VELOCIDADE_MAX = 600;

    public Trem() {
    }

    @Override
    public void acelerar() {
        if (velocidade + 100 > VELOCIDADE_MAX) {
            throw new IllegalStateException("O Trem não pode ultrapassar " + VELOCIDADE_MAX + " km/h");
        }
        velocidade += 100;
        System.out.println("O Trem está acelerando. O Trem está a "+velocidade+"km/h");
    }

    @Override
    public void frear() {
        if (velocidade == 0) {
            throw new IllegalStateException("O Trem está parado");
        }
        velocidade -= 100;
        System.out.println("O Trem está freando. O Trem está a "+velocidade+"km/h");
    }
}
