import static org.junit.Assert.assertTrue;
import static org.junit.Assert.assertFalse;
import org.junit.Test;

public class ColorCheckTest {

    @Test
    public void testValidColorRed() {
        assertTrue(ColorCheck.isValidColor("vermelho"));
    }

    @Test
    public void testValidColorBlue() {
        assertTrue(ColorCheck.isValidColor("azul"));
    }

    @Test
    public void testInvalidColorPurple() {
        assertFalse(ColorCheck.isValidColor("roxo"));
    }

    @Test
    public void testInvalidColorEmptyString() {
        assertFalse(ColorCheck.isValidColor(""));
    }
}
