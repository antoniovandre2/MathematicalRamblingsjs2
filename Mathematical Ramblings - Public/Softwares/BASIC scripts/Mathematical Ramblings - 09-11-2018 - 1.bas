REM Projeto Mathematical Rambings (http://bit.ly/mathematicalramblings).
REM Script BASIC produto escalar.
REM Comunicar erro: "a.vandre.g@gmail.com".

REM Por dificuldades técnicas, trabalha apenas no universo inteiro.

CLS

PRINT "Projeto Mathematical Rambings (http://bit.ly/mathematicalramblings)."
PRINT
PRINT "Script BASIC..."
PRINT

INPUT "Entre com o número de componentes dos vetores:", n
DIM u%(n)
DIM v%(n)
LET p = 0
FOR i = 1 TO n
PRINT "Entre com a componente "; i; " de u:"
INPUT u%(i)
PRINT
PRINT "Entre com a componente "; i; " de v:"
INPUT v%(i)
PRINT
LET p = p + u%(i) * v%(i)
NEXT
PRINT "O produto escalar uxv é: "; p; "."
