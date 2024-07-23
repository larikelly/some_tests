package JUNIT.pedraPapelTesoura;
import static org.junit.Assert.assertTrue;
import static org.junit.Assert.assertFalse;
import org.junit.Test;

public class RPSTest {

    @Test
    public void testValidChoiceRock() {
        assertTrue(RPS.isValidChoice("pedra"));
    }

    @Test
    public void testValidChoicePaper() {
        assertTrue(RPS.isValidChoice("papel"));
    }

    @Test
    public void testValidChoiceScissors() {
        assertTrue(RPS.isValidChoice("tesoura"));
    }

    @Test
    public void testInvalidChoiceLizard() {
        assertFalse(RPS.isValidChoice("garrafa"));
    }

    @Test
    public void testInvalidChoiceEmptyString() {
        assertFalse(RPS.isValidChoice(""));
    }
}
