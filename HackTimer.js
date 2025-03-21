// ==UserScript==
// @name         hacktimerjs
// @namespace    http://tampermonkey.net/
// @version      1.1.0
// @description  浏览器后台
// @author       turuslan
// @grant        none
// ==/UserScript==
(function(s) {
	var w, f = {},
	o = window,
	l = console,
	m = Math,
	z = 'postMessage',
	x = 'HackTimer.js by turuslan: ',
	v = 'Initialisation failed',
	p = 0,
	r = 'hasOwnProperty',
	y = [].slice,
	b = o.Worker;
	function d() {
		do {
			p = 0x7FFFFFFF > p ? p + 1 : 0
		} while ( f [ r ](p));
		return p
	}
	if (!/MSIE 10/i.test(navigator.userAgent)) {
		try {
			s = o.URL.createObjectURL(new Blob(["var f={},p=postMessage,r='hasOwnProperty';onmessage=function(e){var d=e.data,i=d.i,t=d[r]('t')?d.t:0;switch(d.n){case'a':f[i]=setInterval(function(){p(i)},t);break;case'b':if(f[r](i)){clearInterval(f[i]);delete f[i]}break;case'c':f[i]=setTimeout(function(){p(i);if(f[r](i))delete f[i]},t);break;case'd':if(f[r](i)){clearTimeout(f[i]);delete f[i]}break}}"]))
		} catch(e) {}
	}
	if (typeof(b) !== 'undefined') {
		try {
			w = new b(s);
			console.log('test');
			o.setInterval = function(c, t) {
							console.log('tes1t');

				var i = d();
				f[i] = {
					c: c,
					p: y.call(arguments, 2)
				};
				w[z]({
					n: 'a',
					i: i,
					t: t
				});
				return i
			};
			o.clearInterval = function(i) {
				if (f[r](i)) delete f[i],
				w[z]({
					n: 'b',
					i: i
				})
			};
			o.setTimeout = function(c, t) {
				var i = d();
				f[i] = {
					c: c,
					p: y.call(arguments, 2),
					t: !0
				};
				w[z]({
					n: 'c',
					i: i,
					t: t
				});
				return i
			};
			o.clearTimeout = function(i) {
				if (f[r](i)) delete f[i],
				w[z]({
					n: 'd',
					i: i
				})
			};
			w.onmessage = function(e) {
				var i = e.data,
				c, n;
				if (f[r](i)) {
					n = f[i];
					c = n.c;
					if (n[r]('t')) delete f[i]
				}
				if (typeof(c) == 'string') try {
					c = new Function(c)
				} catch(k) {
					l.log(x + 'Error parsing callback code string: ', k)
				}
				if (typeof(c) == 'function') c.apply(o, n.p)
			};
			w.onerror = function(e) {
				l.log(e)
			};
			l.log(x + 'Initialisation succeeded')
		} catch(e) {
			l.log(x + v);
			l.error(e)
		}
	} else l.log(x + v + ' - HTML5 Web Worker is not supported')
})('HackTimerWorker.min.js');
