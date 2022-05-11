!/bin/bash

#Script BASH soma dos quadrados dos n primeiros inteiros positivos.

#Projeto Mathematical Ramblings (http://bit.ly/mathematicalrambings).

#Comunicar erro: "a.vandre.g@gmail.com".

echo "Script BASH soma dos quadrados dos n primeiros inteiros positivos."

echo "Projeto Mathematical Ramblings (http://bit.ly/mathematicalrambings)"

echo "Entre com n:"

read -r n

s="0"

for i in $(seq 1 $n); do s=$(expr $(expr $i \* $i) + $s); done

echo $s

unset s

unset n
