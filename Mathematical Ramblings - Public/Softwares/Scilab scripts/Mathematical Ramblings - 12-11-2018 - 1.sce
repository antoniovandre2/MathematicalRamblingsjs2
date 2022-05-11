// Projeto Mathematical Ramblings (http://bit.ly/mathematicalrambings).

// Script Scilab triângulos pitagóricos.

// Comunicar erro: "a.vandre.g@gmail.com".

// Licença de uso: Atribuição-NãoComercial-CompartilhaIgual (CC BY-NC-SA).

disp ("Projeto Mathematical Ramblings (http://bit.ly/mathematicalrambings).")
disp ("Script Scilab triângulos pitagóricos.")

bmax = input ("Entre com o máximo valor do cateto b a ser escaneado:")
cmax = input ("Entre com o máximo valor do cateto c a ser escaneado:")

for b = 1:bmax
    for c=1:cmax
        a = sqrt (b * b + c * c)
        for i = 1:(int (a))
            if modulo (a, i) == 0 then
                disp (c, " ", b, " ", a)
                pause
                break
            end
        end
    end
end
