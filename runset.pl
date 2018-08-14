#!/bin/perl


for ($i=0; $i < 10000; $i++) {

	system('node setLoopTest.js >> text.txt');
};

#pandoc -f markdown -t html5 --toc +smart --standalone --template template.html -V title=input --output input.html input.md