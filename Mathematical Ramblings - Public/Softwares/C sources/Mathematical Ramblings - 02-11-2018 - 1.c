//Projeto Mathematical Ramblings (http://bit.ly/mathematicalrambings).

//C source fatorial.

//Comunicar erro: "a.vandre.g@gmail.com". 

#include <stdio.h>

main ()
	{
	unsigned int n, i, f;

	printf ("Projeto Mathematical Ramblings (http://bit.ly/mathematicalrambings).\n\nC source fatorial.\n\nEntre com o valor de n: ");

	scanf ("%u", &n);

	f = 1;

	for (i = n; i > 1; i--)
		{
		f = f * i;
		}

	printf ("O fatorial de %u é %u\n", n, f);

	return (0);
	}
