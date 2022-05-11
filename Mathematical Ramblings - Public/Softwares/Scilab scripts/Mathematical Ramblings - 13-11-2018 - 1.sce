// Projeto Mathematical Ramblings (http://bit.ly/mathematicalrambings).

// Script Scilab n-ésima determinação positiva de um arco.

// Comunicar erro: "a.vandre.g@gmail.com".

// Licença de uso: Atribuição-NãoComercial-CompartilhaIgual (CC BY-NC-SA).

disp ("Projeto Mathematical Ramblings (http://bit.ly/mathematicalrambings).")
disp ("Script Scilab n-ésima determinação positiva de um arco.")

a = input ("Entre com o arco em graus:")

n = input ("Entre com n:")

disp ("A ", n, "- ésima determinação positiva de ", a, " é ", modulo (a, 360) + (n - 1) * 360)
