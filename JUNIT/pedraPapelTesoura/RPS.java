package JUNIT.pedraPapelTesoura;
import java.util.Arrays;
import java.util.List;

public class RPS {
    public static boolean isValidChoice(String choice) {
        List<String> validChoices = Arrays.asList("pedra", "papel", "tesoura");
        return validChoices.contains(choice);
    }
}
