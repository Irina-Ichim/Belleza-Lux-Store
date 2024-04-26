package org.example;

// No changes needed, remove the unused import statement for org.example.Usuario

public class App {
    public static void main(String[] args) {
        // Crear una instancia de Usuario con los datos de Irina Ichim
        Usuario irinaIchim = new Usuario();
        irinaIchim.setId(1L);  // ID de Irina Ichim en la base de datos
        irinaIchim.setNombreApellido("Irina Ichim");
        irinaIchim.setDireccion("Paseo Gracia 46 Barcelona");
        irinaIchim.setDni("12345678A");
        irinaIchim.setNombreUsuario("irina_ichim");
        irinaIchim.setContrasena("irina");
        irinaIchim.setAdmin("si");

        // Imprimir los detalles de Irina Ichim usando el método toString() de Usuario
        System.out.println(irinaIchim.toString());
    }
}
