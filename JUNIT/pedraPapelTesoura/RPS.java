package JUNIT.pedraPapelTesoura;

import java.util.Arrays;
import java.util.List;
import java.util.Scanner;

public class RPS {
    public static boolean isValidChoice(String choice) {
        List<String> validChoices = Arrays.asList("pedra", "papel", "tesoura");
        return validChoices.contains(choice);
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        System.out.println("Escolha pedra, papel ou tesoura:");
        String userChoice = scanner.nextLine().toLowerCase();

        if (isValidChoice(userChoice)) {
            System.out.println("Você escolheu: " + userChoice);
        } else {
            System.out.println("Escolha inválida! Tente novamente.");
        }

        scanner.close();
    }
}

