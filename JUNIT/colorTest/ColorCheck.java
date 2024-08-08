import java.util.Arrays;
import java.util.List;

public class ColorCheck {
    public static boolean isValidColor(String color) {
        List<String> validColors = Arrays.asList("vermelho", "azul", "verde", "amarelo");
        return validColors.contains(color);
    }
}
