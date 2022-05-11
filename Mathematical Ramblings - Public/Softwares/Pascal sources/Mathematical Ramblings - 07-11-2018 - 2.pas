(*
Projeto Mathematical Rambings (http://bit.ly/mathematicalramblings).

Pascal source divisibilidade.

Comunicar erro: "a.vandre.g@gmail.com".
*)

program Divisibilidade;

var
	n, m: integer;

begin
	writeln ('Projeto Mathematical Rambings (http://bit.ly/mathematicalramblings).');
	writeln ('Pascal source divisibilidade.');
	writeln ('Entre com um inteiro n:');
	readln (n);
	writeln ('Entre com um inteiro m:');
	readln (m);
	if
		n mod m = 0
	then
		writeln ('n é divisível por m.')
	else
		writeln ('n não é divisível por m.');
end.
