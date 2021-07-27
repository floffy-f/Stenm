(function(scope){
'use strict';

function F(arity, fun, wrapper) {
  wrapper.a = arity;
  wrapper.f = fun;
  return wrapper;
}

function F2(fun) {
  return F(2, fun, function(a) { return function(b) { return fun(a,b); }; })
}
function F3(fun) {
  return F(3, fun, function(a) {
    return function(b) { return function(c) { return fun(a, b, c); }; };
  });
}
function F4(fun) {
  return F(4, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return fun(a, b, c, d); }; }; };
  });
}
function F5(fun) {
  return F(5, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return fun(a, b, c, d, e); }; }; }; };
  });
}
function F6(fun) {
  return F(6, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return fun(a, b, c, d, e, f); }; }; }; }; };
  });
}
function F7(fun) {
  return F(7, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return fun(a, b, c, d, e, f, g); }; }; }; }; }; };
  });
}
function F8(fun) {
  return F(8, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) {
    return fun(a, b, c, d, e, f, g, h); }; }; }; }; }; }; };
  });
}
function F9(fun) {
  return F(9, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) { return function(i) {
    return fun(a, b, c, d, e, f, g, h, i); }; }; }; }; }; }; }; };
  });
}

function A2(fun, a, b) {
  return fun.a === 2 ? fun.f(a, b) : fun(a)(b);
}
function A3(fun, a, b, c) {
  return fun.a === 3 ? fun.f(a, b, c) : fun(a)(b)(c);
}
function A4(fun, a, b, c, d) {
  return fun.a === 4 ? fun.f(a, b, c, d) : fun(a)(b)(c)(d);
}
function A5(fun, a, b, c, d, e) {
  return fun.a === 5 ? fun.f(a, b, c, d, e) : fun(a)(b)(c)(d)(e);
}
function A6(fun, a, b, c, d, e, f) {
  return fun.a === 6 ? fun.f(a, b, c, d, e, f) : fun(a)(b)(c)(d)(e)(f);
}
function A7(fun, a, b, c, d, e, f, g) {
  return fun.a === 7 ? fun.f(a, b, c, d, e, f, g) : fun(a)(b)(c)(d)(e)(f)(g);
}
function A8(fun, a, b, c, d, e, f, g, h) {
  return fun.a === 8 ? fun.f(a, b, c, d, e, f, g, h) : fun(a)(b)(c)(d)(e)(f)(g)(h);
}
function A9(fun, a, b, c, d, e, f, g, h, i) {
  return fun.a === 9 ? fun.f(a, b, c, d, e, f, g, h, i) : fun(a)(b)(c)(d)(e)(f)(g)(h)(i);
}

console.warn('Compiled in DEBUG mode. Follow the advice at https://elm-lang.org/0.19.1/optimize for better performance and smaller assets.');


var _JsArray_empty = [];

function _JsArray_singleton(value)
{
    return [value];
}

function _JsArray_length(array)
{
    return array.length;
}

var _JsArray_initialize = F3(function(size, offset, func)
{
    var result = new Array(size);

    for (var i = 0; i < size; i++)
    {
        result[i] = func(offset + i);
    }

    return result;
});

var _JsArray_initializeFromList = F2(function (max, ls)
{
    var result = new Array(max);

    for (var i = 0; i < max && ls.b; i++)
    {
        result[i] = ls.a;
        ls = ls.b;
    }

    result.length = i;
    return _Utils_Tuple2(result, ls);
});

var _JsArray_unsafeGet = F2(function(index, array)
{
    return array[index];
});

var _JsArray_unsafeSet = F3(function(index, value, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = array[i];
    }

    result[index] = value;
    return result;
});

var _JsArray_push = F2(function(value, array)
{
    var length = array.length;
    var result = new Array(length + 1);

    for (var i = 0; i < length; i++)
    {
        result[i] = array[i];
    }

    result[length] = value;
    return result;
});

var _JsArray_foldl = F3(function(func, acc, array)
{
    var length = array.length;

    for (var i = 0; i < length; i++)
    {
        acc = A2(func, array[i], acc);
    }

    return acc;
});

var _JsArray_foldr = F3(function(func, acc, array)
{
    for (var i = array.length - 1; i >= 0; i--)
    {
        acc = A2(func, array[i], acc);
    }

    return acc;
});

var _JsArray_map = F2(function(func, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = func(array[i]);
    }

    return result;
});

var _JsArray_indexedMap = F3(function(func, offset, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = A2(func, offset + i, array[i]);
    }

    return result;
});

var _JsArray_slice = F3(function(from, to, array)
{
    return array.slice(from, to);
});

var _JsArray_appendN = F3(function(n, dest, source)
{
    var destLen = dest.length;
    var itemsToCopy = n - destLen;

    if (itemsToCopy > source.length)
    {
        itemsToCopy = source.length;
    }

    var size = destLen + itemsToCopy;
    var result = new Array(size);

    for (var i = 0; i < destLen; i++)
    {
        result[i] = dest[i];
    }

    for (var i = 0; i < itemsToCopy; i++)
    {
        result[i + destLen] = source[i];
    }

    return result;
});



// LOG

var _Debug_log_UNUSED = F2(function(tag, value)
{
	return value;
});

var _Debug_log = F2(function(tag, value)
{
	console.log(tag + ': ' + _Debug_toString(value));
	return value;
});


// TODOS

function _Debug_todo(moduleName, region)
{
	return function(message) {
		_Debug_crash(8, moduleName, region, message);
	};
}

function _Debug_todoCase(moduleName, region, value)
{
	return function(message) {
		_Debug_crash(9, moduleName, region, value, message);
	};
}


// TO STRING

function _Debug_toString_UNUSED(value)
{
	return '<internals>';
}

function _Debug_toString(value)
{
	return _Debug_toAnsiString(false, value);
}

function _Debug_toAnsiString(ansi, value)
{
	if (typeof value === 'function')
	{
		return _Debug_internalColor(ansi, '<function>');
	}

	if (typeof value === 'boolean')
	{
		return _Debug_ctorColor(ansi, value ? 'True' : 'False');
	}

	if (typeof value === 'number')
	{
		return _Debug_numberColor(ansi, value + '');
	}

	if (value instanceof String)
	{
		return _Debug_charColor(ansi, "'" + _Debug_addSlashes(value, true) + "'");
	}

	if (typeof value === 'string')
	{
		return _Debug_stringColor(ansi, '"' + _Debug_addSlashes(value, false) + '"');
	}

	if (typeof value === 'object' && '$' in value)
	{
		var tag = value.$;

		if (typeof tag === 'number')
		{
			return _Debug_internalColor(ansi, '<internals>');
		}

		if (tag[0] === '#')
		{
			var output = [];
			for (var k in value)
			{
				if (k === '$') continue;
				output.push(_Debug_toAnsiString(ansi, value[k]));
			}
			return '(' + output.join(',') + ')';
		}

		if (tag === 'Set_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Set')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, $elm$core$Set$toList(value));
		}

		if (tag === 'RBNode_elm_builtin' || tag === 'RBEmpty_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Dict')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, $elm$core$Dict$toList(value));
		}

		if (tag === 'Array_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Array')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, $elm$core$Array$toList(value));
		}

		if (tag === '::' || tag === '[]')
		{
			var output = '[';

			value.b && (output += _Debug_toAnsiString(ansi, value.a), value = value.b)

			for (; value.b; value = value.b) // WHILE_CONS
			{
				output += ',' + _Debug_toAnsiString(ansi, value.a);
			}
			return output + ']';
		}

		var output = '';
		for (var i in value)
		{
			if (i === '$') continue;
			var str = _Debug_toAnsiString(ansi, value[i]);
			var c0 = str[0];
			var parenless = c0 === '{' || c0 === '(' || c0 === '[' || c0 === '<' || c0 === '"' || str.indexOf(' ') < 0;
			output += ' ' + (parenless ? str : '(' + str + ')');
		}
		return _Debug_ctorColor(ansi, tag) + output;
	}

	if (typeof DataView === 'function' && value instanceof DataView)
	{
		return _Debug_stringColor(ansi, '<' + value.byteLength + ' bytes>');
	}

	if (typeof File !== 'undefined' && value instanceof File)
	{
		return _Debug_internalColor(ansi, '<' + value.name + '>');
	}

	if (typeof value === 'object')
	{
		var output = [];
		for (var key in value)
		{
			var field = key[0] === '_' ? key.slice(1) : key;
			output.push(_Debug_fadeColor(ansi, field) + ' = ' + _Debug_toAnsiString(ansi, value[key]));
		}
		if (output.length === 0)
		{
			return '{}';
		}
		return '{ ' + output.join(', ') + ' }';
	}

	return _Debug_internalColor(ansi, '<internals>');
}

function _Debug_addSlashes(str, isChar)
{
	var s = str
		.replace(/\\/g, '\\\\')
		.replace(/\n/g, '\\n')
		.replace(/\t/g, '\\t')
		.replace(/\r/g, '\\r')
		.replace(/\v/g, '\\v')
		.replace(/\0/g, '\\0');

	if (isChar)
	{
		return s.replace(/\'/g, '\\\'');
	}
	else
	{
		return s.replace(/\"/g, '\\"');
	}
}

function _Debug_ctorColor(ansi, string)
{
	return ansi ? '\x1b[96m' + string + '\x1b[0m' : string;
}

function _Debug_numberColor(ansi, string)
{
	return ansi ? '\x1b[95m' + string + '\x1b[0m' : string;
}

function _Debug_stringColor(ansi, string)
{
	return ansi ? '\x1b[93m' + string + '\x1b[0m' : string;
}

function _Debug_charColor(ansi, string)
{
	return ansi ? '\x1b[92m' + string + '\x1b[0m' : string;
}

function _Debug_fadeColor(ansi, string)
{
	return ansi ? '\x1b[37m' + string + '\x1b[0m' : string;
}

function _Debug_internalColor(ansi, string)
{
	return ansi ? '\x1b[36m' + string + '\x1b[0m' : string;
}

function _Debug_toHexDigit(n)
{
	return String.fromCharCode(n < 10 ? 48 + n : 55 + n);
}


// CRASH


function _Debug_crash_UNUSED(identifier)
{
	throw new Error('https://github.com/elm/core/blob/1.0.0/hints/' + identifier + '.md');
}


function _Debug_crash(identifier, fact1, fact2, fact3, fact4)
{
	switch(identifier)
	{
		case 0:
			throw new Error('What node should I take over? In JavaScript I need something like:\n\n    Elm.Main.init({\n        node: document.getElementById("elm-node")\n    })\n\nYou need to do this with any Browser.sandbox or Browser.element program.');

		case 1:
			throw new Error('Browser.application programs cannot handle URLs like this:\n\n    ' + document.location.href + '\n\nWhat is the root? The root of your file system? Try looking at this program with `elm reactor` or some other server.');

		case 2:
			var jsonErrorString = fact1;
			throw new Error('Problem with the flags given to your Elm program on initialization.\n\n' + jsonErrorString);

		case 3:
			var portName = fact1;
			throw new Error('There can only be one port named `' + portName + '`, but your program has multiple.');

		case 4:
			var portName = fact1;
			var problem = fact2;
			throw new Error('Trying to send an unexpected type of value through port `' + portName + '`:\n' + problem);

		case 5:
			throw new Error('Trying to use `(==)` on functions.\nThere is no way to know if functions are "the same" in the Elm sense.\nRead more about this at https://package.elm-lang.org/packages/elm/core/latest/Basics#== which describes why it is this way and what the better version will look like.');

		case 6:
			var moduleName = fact1;
			throw new Error('Your page is loading multiple Elm scripts with a module named ' + moduleName + '. Maybe a duplicate script is getting loaded accidentally? If not, rename one of them so I know which is which!');

		case 8:
			var moduleName = fact1;
			var region = fact2;
			var message = fact3;
			throw new Error('TODO in module `' + moduleName + '` ' + _Debug_regionToString(region) + '\n\n' + message);

		case 9:
			var moduleName = fact1;
			var region = fact2;
			var value = fact3;
			var message = fact4;
			throw new Error(
				'TODO in module `' + moduleName + '` from the `case` expression '
				+ _Debug_regionToString(region) + '\n\nIt received the following value:\n\n    '
				+ _Debug_toString(value).replace('\n', '\n    ')
				+ '\n\nBut the branch that handles it says:\n\n    ' + message.replace('\n', '\n    ')
			);

		case 10:
			throw new Error('Bug in https://github.com/elm/virtual-dom/issues');

		case 11:
			throw new Error('Cannot perform mod 0. Division by zero error.');
	}
}

function _Debug_regionToString(region)
{
	if (region.start.line === region.end.line)
	{
		return 'on line ' + region.start.line;
	}
	return 'on lines ' + region.start.line + ' through ' + region.end.line;
}



// EQUALITY

function _Utils_eq(x, y)
{
	for (
		var pair, stack = [], isEqual = _Utils_eqHelp(x, y, 0, stack);
		isEqual && (pair = stack.pop());
		isEqual = _Utils_eqHelp(pair.a, pair.b, 0, stack)
		)
	{}

	return isEqual;
}

function _Utils_eqHelp(x, y, depth, stack)
{
	if (x === y)
	{
		return true;
	}

	if (typeof x !== 'object' || x === null || y === null)
	{
		typeof x === 'function' && _Debug_crash(5);
		return false;
	}

	if (depth > 100)
	{
		stack.push(_Utils_Tuple2(x,y));
		return true;
	}

	/**/
	if (x.$ === 'Set_elm_builtin')
	{
		x = $elm$core$Set$toList(x);
		y = $elm$core$Set$toList(y);
	}
	if (x.$ === 'RBNode_elm_builtin' || x.$ === 'RBEmpty_elm_builtin')
	{
		x = $elm$core$Dict$toList(x);
		y = $elm$core$Dict$toList(y);
	}
	//*/

	/**_UNUSED/
	if (x.$ < 0)
	{
		x = $elm$core$Dict$toList(x);
		y = $elm$core$Dict$toList(y);
	}
	//*/

	for (var key in x)
	{
		if (!_Utils_eqHelp(x[key], y[key], depth + 1, stack))
		{
			return false;
		}
	}
	return true;
}

var _Utils_equal = F2(_Utils_eq);
var _Utils_notEqual = F2(function(a, b) { return !_Utils_eq(a,b); });



// COMPARISONS

// Code in Generate/JavaScript.hs, Basics.js, and List.js depends on
// the particular integer values assigned to LT, EQ, and GT.

function _Utils_cmp(x, y, ord)
{
	if (typeof x !== 'object')
	{
		return x === y ? /*EQ*/ 0 : x < y ? /*LT*/ -1 : /*GT*/ 1;
	}

	/**/
	if (x instanceof String)
	{
		var a = x.valueOf();
		var b = y.valueOf();
		return a === b ? 0 : a < b ? -1 : 1;
	}
	//*/

	/**_UNUSED/
	if (typeof x.$ === 'undefined')
	//*/
	/**/
	if (x.$[0] === '#')
	//*/
	{
		return (ord = _Utils_cmp(x.a, y.a))
			? ord
			: (ord = _Utils_cmp(x.b, y.b))
				? ord
				: _Utils_cmp(x.c, y.c);
	}

	// traverse conses until end of a list or a mismatch
	for (; x.b && y.b && !(ord = _Utils_cmp(x.a, y.a)); x = x.b, y = y.b) {} // WHILE_CONSES
	return ord || (x.b ? /*GT*/ 1 : y.b ? /*LT*/ -1 : /*EQ*/ 0);
}

var _Utils_lt = F2(function(a, b) { return _Utils_cmp(a, b) < 0; });
var _Utils_le = F2(function(a, b) { return _Utils_cmp(a, b) < 1; });
var _Utils_gt = F2(function(a, b) { return _Utils_cmp(a, b) > 0; });
var _Utils_ge = F2(function(a, b) { return _Utils_cmp(a, b) >= 0; });

var _Utils_compare = F2(function(x, y)
{
	var n = _Utils_cmp(x, y);
	return n < 0 ? $elm$core$Basics$LT : n ? $elm$core$Basics$GT : $elm$core$Basics$EQ;
});


// COMMON VALUES

var _Utils_Tuple0_UNUSED = 0;
var _Utils_Tuple0 = { $: '#0' };

function _Utils_Tuple2_UNUSED(a, b) { return { a: a, b: b }; }
function _Utils_Tuple2(a, b) { return { $: '#2', a: a, b: b }; }

function _Utils_Tuple3_UNUSED(a, b, c) { return { a: a, b: b, c: c }; }
function _Utils_Tuple3(a, b, c) { return { $: '#3', a: a, b: b, c: c }; }

function _Utils_chr_UNUSED(c) { return c; }
function _Utils_chr(c) { return new String(c); }


// RECORDS

function _Utils_update(oldRecord, updatedFields)
{
	var newRecord = {};

	for (var key in oldRecord)
	{
		newRecord[key] = oldRecord[key];
	}

	for (var key in updatedFields)
	{
		newRecord[key] = updatedFields[key];
	}

	return newRecord;
}


// APPEND

var _Utils_append = F2(_Utils_ap);

function _Utils_ap(xs, ys)
{
	// append Strings
	if (typeof xs === 'string')
	{
		return xs + ys;
	}

	// append Lists
	if (!xs.b)
	{
		return ys;
	}
	var root = _List_Cons(xs.a, ys);
	xs = xs.b
	for (var curr = root; xs.b; xs = xs.b) // WHILE_CONS
	{
		curr = curr.b = _List_Cons(xs.a, ys);
	}
	return root;
}



var _List_Nil_UNUSED = { $: 0 };
var _List_Nil = { $: '[]' };

function _List_Cons_UNUSED(hd, tl) { return { $: 1, a: hd, b: tl }; }
function _List_Cons(hd, tl) { return { $: '::', a: hd, b: tl }; }


var _List_cons = F2(_List_Cons);

function _List_fromArray(arr)
{
	var out = _List_Nil;
	for (var i = arr.length; i--; )
	{
		out = _List_Cons(arr[i], out);
	}
	return out;
}

function _List_toArray(xs)
{
	for (var out = []; xs.b; xs = xs.b) // WHILE_CONS
	{
		out.push(xs.a);
	}
	return out;
}

var _List_map2 = F3(function(f, xs, ys)
{
	for (var arr = []; xs.b && ys.b; xs = xs.b, ys = ys.b) // WHILE_CONSES
	{
		arr.push(A2(f, xs.a, ys.a));
	}
	return _List_fromArray(arr);
});

var _List_map3 = F4(function(f, xs, ys, zs)
{
	for (var arr = []; xs.b && ys.b && zs.b; xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A3(f, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_map4 = F5(function(f, ws, xs, ys, zs)
{
	for (var arr = []; ws.b && xs.b && ys.b && zs.b; ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A4(f, ws.a, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_map5 = F6(function(f, vs, ws, xs, ys, zs)
{
	for (var arr = []; vs.b && ws.b && xs.b && ys.b && zs.b; vs = vs.b, ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A5(f, vs.a, ws.a, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_sortBy = F2(function(f, xs)
{
	return _List_fromArray(_List_toArray(xs).sort(function(a, b) {
		return _Utils_cmp(f(a), f(b));
	}));
});

var _List_sortWith = F2(function(f, xs)
{
	return _List_fromArray(_List_toArray(xs).sort(function(a, b) {
		var ord = A2(f, a, b);
		return ord === $elm$core$Basics$EQ ? 0 : ord === $elm$core$Basics$LT ? -1 : 1;
	}));
});



// MATH

var _Basics_add = F2(function(a, b) { return a + b; });
var _Basics_sub = F2(function(a, b) { return a - b; });
var _Basics_mul = F2(function(a, b) { return a * b; });
var _Basics_fdiv = F2(function(a, b) { return a / b; });
var _Basics_idiv = F2(function(a, b) { return (a / b) | 0; });
var _Basics_pow = F2(Math.pow);

var _Basics_remainderBy = F2(function(b, a) { return a % b; });

// https://www.microsoft.com/en-us/research/wp-content/uploads/2016/02/divmodnote-letter.pdf
var _Basics_modBy = F2(function(modulus, x)
{
	var answer = x % modulus;
	return modulus === 0
		? _Debug_crash(11)
		:
	((answer > 0 && modulus < 0) || (answer < 0 && modulus > 0))
		? answer + modulus
		: answer;
});


// TRIGONOMETRY

var _Basics_pi = Math.PI;
var _Basics_e = Math.E;
var _Basics_cos = Math.cos;
var _Basics_sin = Math.sin;
var _Basics_tan = Math.tan;
var _Basics_acos = Math.acos;
var _Basics_asin = Math.asin;
var _Basics_atan = Math.atan;
var _Basics_atan2 = F2(Math.atan2);


// MORE MATH

function _Basics_toFloat(x) { return x; }
function _Basics_truncate(n) { return n | 0; }
function _Basics_isInfinite(n) { return n === Infinity || n === -Infinity; }

var _Basics_ceiling = Math.ceil;
var _Basics_floor = Math.floor;
var _Basics_round = Math.round;
var _Basics_sqrt = Math.sqrt;
var _Basics_log = Math.log;
var _Basics_isNaN = isNaN;


// BOOLEANS

function _Basics_not(bool) { return !bool; }
var _Basics_and = F2(function(a, b) { return a && b; });
var _Basics_or  = F2(function(a, b) { return a || b; });
var _Basics_xor = F2(function(a, b) { return a !== b; });



var _String_cons = F2(function(chr, str)
{
	return chr + str;
});

function _String_uncons(string)
{
	var word = string.charCodeAt(0);
	return !isNaN(word)
		? $elm$core$Maybe$Just(
			0xD800 <= word && word <= 0xDBFF
				? _Utils_Tuple2(_Utils_chr(string[0] + string[1]), string.slice(2))
				: _Utils_Tuple2(_Utils_chr(string[0]), string.slice(1))
		)
		: $elm$core$Maybe$Nothing;
}

var _String_append = F2(function(a, b)
{
	return a + b;
});

function _String_length(str)
{
	return str.length;
}

var _String_map = F2(function(func, string)
{
	var len = string.length;
	var array = new Array(len);
	var i = 0;
	while (i < len)
	{
		var word = string.charCodeAt(i);
		if (0xD800 <= word && word <= 0xDBFF)
		{
			array[i] = func(_Utils_chr(string[i] + string[i+1]));
			i += 2;
			continue;
		}
		array[i] = func(_Utils_chr(string[i]));
		i++;
	}
	return array.join('');
});

var _String_filter = F2(function(isGood, str)
{
	var arr = [];
	var len = str.length;
	var i = 0;
	while (i < len)
	{
		var char = str[i];
		var word = str.charCodeAt(i);
		i++;
		if (0xD800 <= word && word <= 0xDBFF)
		{
			char += str[i];
			i++;
		}

		if (isGood(_Utils_chr(char)))
		{
			arr.push(char);
		}
	}
	return arr.join('');
});

function _String_reverse(str)
{
	var len = str.length;
	var arr = new Array(len);
	var i = 0;
	while (i < len)
	{
		var word = str.charCodeAt(i);
		if (0xD800 <= word && word <= 0xDBFF)
		{
			arr[len - i] = str[i + 1];
			i++;
			arr[len - i] = str[i - 1];
			i++;
		}
		else
		{
			arr[len - i] = str[i];
			i++;
		}
	}
	return arr.join('');
}

var _String_foldl = F3(function(func, state, string)
{
	var len = string.length;
	var i = 0;
	while (i < len)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		i++;
		if (0xD800 <= word && word <= 0xDBFF)
		{
			char += string[i];
			i++;
		}
		state = A2(func, _Utils_chr(char), state);
	}
	return state;
});

var _String_foldr = F3(function(func, state, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		state = A2(func, _Utils_chr(char), state);
	}
	return state;
});

var _String_split = F2(function(sep, str)
{
	return str.split(sep);
});

var _String_join = F2(function(sep, strs)
{
	return strs.join(sep);
});

var _String_slice = F3(function(start, end, str) {
	return str.slice(start, end);
});

function _String_trim(str)
{
	return str.trim();
}

function _String_trimLeft(str)
{
	return str.replace(/^\s+/, '');
}

function _String_trimRight(str)
{
	return str.replace(/\s+$/, '');
}

function _String_words(str)
{
	return _List_fromArray(str.trim().split(/\s+/g));
}

function _String_lines(str)
{
	return _List_fromArray(str.split(/\r\n|\r|\n/g));
}

function _String_toUpper(str)
{
	return str.toUpperCase();
}

function _String_toLower(str)
{
	return str.toLowerCase();
}

var _String_any = F2(function(isGood, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		if (isGood(_Utils_chr(char)))
		{
			return true;
		}
	}
	return false;
});

var _String_all = F2(function(isGood, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		if (!isGood(_Utils_chr(char)))
		{
			return false;
		}
	}
	return true;
});

var _String_contains = F2(function(sub, str)
{
	return str.indexOf(sub) > -1;
});

var _String_startsWith = F2(function(sub, str)
{
	return str.indexOf(sub) === 0;
});

var _String_endsWith = F2(function(sub, str)
{
	return str.length >= sub.length &&
		str.lastIndexOf(sub) === str.length - sub.length;
});

var _String_indexes = F2(function(sub, str)
{
	var subLen = sub.length;

	if (subLen < 1)
	{
		return _List_Nil;
	}

	var i = 0;
	var is = [];

	while ((i = str.indexOf(sub, i)) > -1)
	{
		is.push(i);
		i = i + subLen;
	}

	return _List_fromArray(is);
});


// TO STRING

function _String_fromNumber(number)
{
	return number + '';
}


// INT CONVERSIONS

function _String_toInt(str)
{
	var total = 0;
	var code0 = str.charCodeAt(0);
	var start = code0 == 0x2B /* + */ || code0 == 0x2D /* - */ ? 1 : 0;

	for (var i = start; i < str.length; ++i)
	{
		var code = str.charCodeAt(i);
		if (code < 0x30 || 0x39 < code)
		{
			return $elm$core$Maybe$Nothing;
		}
		total = 10 * total + code - 0x30;
	}

	return i == start
		? $elm$core$Maybe$Nothing
		: $elm$core$Maybe$Just(code0 == 0x2D ? -total : total);
}


// FLOAT CONVERSIONS

function _String_toFloat(s)
{
	// check if it is a hex, octal, or binary number
	if (s.length === 0 || /[\sxbo]/.test(s))
	{
		return $elm$core$Maybe$Nothing;
	}
	var n = +s;
	// faster isNaN check
	return n === n ? $elm$core$Maybe$Just(n) : $elm$core$Maybe$Nothing;
}

function _String_fromList(chars)
{
	return _List_toArray(chars).join('');
}




function _Char_toCode(char)
{
	var code = char.charCodeAt(0);
	if (0xD800 <= code && code <= 0xDBFF)
	{
		return (code - 0xD800) * 0x400 + char.charCodeAt(1) - 0xDC00 + 0x10000
	}
	return code;
}

function _Char_fromCode(code)
{
	return _Utils_chr(
		(code < 0 || 0x10FFFF < code)
			? '\uFFFD'
			:
		(code <= 0xFFFF)
			? String.fromCharCode(code)
			:
		(code -= 0x10000,
			String.fromCharCode(Math.floor(code / 0x400) + 0xD800, code % 0x400 + 0xDC00)
		)
	);
}

function _Char_toUpper(char)
{
	return _Utils_chr(char.toUpperCase());
}

function _Char_toLower(char)
{
	return _Utils_chr(char.toLowerCase());
}

function _Char_toLocaleUpper(char)
{
	return _Utils_chr(char.toLocaleUpperCase());
}

function _Char_toLocaleLower(char)
{
	return _Utils_chr(char.toLocaleLowerCase());
}



/**/
function _Json_errorToString(error)
{
	return $elm$json$Json$Decode$errorToString(error);
}
//*/


// CORE DECODERS

function _Json_succeed(msg)
{
	return {
		$: 0,
		a: msg
	};
}

function _Json_fail(msg)
{
	return {
		$: 1,
		a: msg
	};
}

function _Json_decodePrim(decoder)
{
	return { $: 2, b: decoder };
}

var _Json_decodeInt = _Json_decodePrim(function(value) {
	return (typeof value !== 'number')
		? _Json_expecting('an INT', value)
		:
	(-2147483647 < value && value < 2147483647 && (value | 0) === value)
		? $elm$core$Result$Ok(value)
		:
	(isFinite(value) && !(value % 1))
		? $elm$core$Result$Ok(value)
		: _Json_expecting('an INT', value);
});

var _Json_decodeBool = _Json_decodePrim(function(value) {
	return (typeof value === 'boolean')
		? $elm$core$Result$Ok(value)
		: _Json_expecting('a BOOL', value);
});

var _Json_decodeFloat = _Json_decodePrim(function(value) {
	return (typeof value === 'number')
		? $elm$core$Result$Ok(value)
		: _Json_expecting('a FLOAT', value);
});

var _Json_decodeValue = _Json_decodePrim(function(value) {
	return $elm$core$Result$Ok(_Json_wrap(value));
});

var _Json_decodeString = _Json_decodePrim(function(value) {
	return (typeof value === 'string')
		? $elm$core$Result$Ok(value)
		: (value instanceof String)
			? $elm$core$Result$Ok(value + '')
			: _Json_expecting('a STRING', value);
});

function _Json_decodeList(decoder) { return { $: 3, b: decoder }; }
function _Json_decodeArray(decoder) { return { $: 4, b: decoder }; }

function _Json_decodeNull(value) { return { $: 5, c: value }; }

var _Json_decodeField = F2(function(field, decoder)
{
	return {
		$: 6,
		d: field,
		b: decoder
	};
});

var _Json_decodeIndex = F2(function(index, decoder)
{
	return {
		$: 7,
		e: index,
		b: decoder
	};
});

function _Json_decodeKeyValuePairs(decoder)
{
	return {
		$: 8,
		b: decoder
	};
}

function _Json_mapMany(f, decoders)
{
	return {
		$: 9,
		f: f,
		g: decoders
	};
}

var _Json_andThen = F2(function(callback, decoder)
{
	return {
		$: 10,
		b: decoder,
		h: callback
	};
});

function _Json_oneOf(decoders)
{
	return {
		$: 11,
		g: decoders
	};
}


// DECODING OBJECTS

var _Json_map1 = F2(function(f, d1)
{
	return _Json_mapMany(f, [d1]);
});

var _Json_map2 = F3(function(f, d1, d2)
{
	return _Json_mapMany(f, [d1, d2]);
});

var _Json_map3 = F4(function(f, d1, d2, d3)
{
	return _Json_mapMany(f, [d1, d2, d3]);
});

var _Json_map4 = F5(function(f, d1, d2, d3, d4)
{
	return _Json_mapMany(f, [d1, d2, d3, d4]);
});

var _Json_map5 = F6(function(f, d1, d2, d3, d4, d5)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5]);
});

var _Json_map6 = F7(function(f, d1, d2, d3, d4, d5, d6)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6]);
});

var _Json_map7 = F8(function(f, d1, d2, d3, d4, d5, d6, d7)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7]);
});

var _Json_map8 = F9(function(f, d1, d2, d3, d4, d5, d6, d7, d8)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7, d8]);
});


// DECODE

var _Json_runOnString = F2(function(decoder, string)
{
	try
	{
		var value = JSON.parse(string);
		return _Json_runHelp(decoder, value);
	}
	catch (e)
	{
		return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, 'This is not valid JSON! ' + e.message, _Json_wrap(string)));
	}
});

var _Json_run = F2(function(decoder, value)
{
	return _Json_runHelp(decoder, _Json_unwrap(value));
});

function _Json_runHelp(decoder, value)
{
	switch (decoder.$)
	{
		case 2:
			return decoder.b(value);

		case 5:
			return (value === null)
				? $elm$core$Result$Ok(decoder.c)
				: _Json_expecting('null', value);

		case 3:
			if (!_Json_isArray(value))
			{
				return _Json_expecting('a LIST', value);
			}
			return _Json_runArrayDecoder(decoder.b, value, _List_fromArray);

		case 4:
			if (!_Json_isArray(value))
			{
				return _Json_expecting('an ARRAY', value);
			}
			return _Json_runArrayDecoder(decoder.b, value, _Json_toElmArray);

		case 6:
			var field = decoder.d;
			if (typeof value !== 'object' || value === null || !(field in value))
			{
				return _Json_expecting('an OBJECT with a field named `' + field + '`', value);
			}
			var result = _Json_runHelp(decoder.b, value[field]);
			return ($elm$core$Result$isOk(result)) ? result : $elm$core$Result$Err(A2($elm$json$Json$Decode$Field, field, result.a));

		case 7:
			var index = decoder.e;
			if (!_Json_isArray(value))
			{
				return _Json_expecting('an ARRAY', value);
			}
			if (index >= value.length)
			{
				return _Json_expecting('a LONGER array. Need index ' + index + ' but only see ' + value.length + ' entries', value);
			}
			var result = _Json_runHelp(decoder.b, value[index]);
			return ($elm$core$Result$isOk(result)) ? result : $elm$core$Result$Err(A2($elm$json$Json$Decode$Index, index, result.a));

		case 8:
			if (typeof value !== 'object' || value === null || _Json_isArray(value))
			{
				return _Json_expecting('an OBJECT', value);
			}

			var keyValuePairs = _List_Nil;
			// TODO test perf of Object.keys and switch when support is good enough
			for (var key in value)
			{
				if (value.hasOwnProperty(key))
				{
					var result = _Json_runHelp(decoder.b, value[key]);
					if (!$elm$core$Result$isOk(result))
					{
						return $elm$core$Result$Err(A2($elm$json$Json$Decode$Field, key, result.a));
					}
					keyValuePairs = _List_Cons(_Utils_Tuple2(key, result.a), keyValuePairs);
				}
			}
			return $elm$core$Result$Ok($elm$core$List$reverse(keyValuePairs));

		case 9:
			var answer = decoder.f;
			var decoders = decoder.g;
			for (var i = 0; i < decoders.length; i++)
			{
				var result = _Json_runHelp(decoders[i], value);
				if (!$elm$core$Result$isOk(result))
				{
					return result;
				}
				answer = answer(result.a);
			}
			return $elm$core$Result$Ok(answer);

		case 10:
			var result = _Json_runHelp(decoder.b, value);
			return (!$elm$core$Result$isOk(result))
				? result
				: _Json_runHelp(decoder.h(result.a), value);

		case 11:
			var errors = _List_Nil;
			for (var temp = decoder.g; temp.b; temp = temp.b) // WHILE_CONS
			{
				var result = _Json_runHelp(temp.a, value);
				if ($elm$core$Result$isOk(result))
				{
					return result;
				}
				errors = _List_Cons(result.a, errors);
			}
			return $elm$core$Result$Err($elm$json$Json$Decode$OneOf($elm$core$List$reverse(errors)));

		case 1:
			return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, decoder.a, _Json_wrap(value)));

		case 0:
			return $elm$core$Result$Ok(decoder.a);
	}
}

function _Json_runArrayDecoder(decoder, value, toElmValue)
{
	var len = value.length;
	var array = new Array(len);
	for (var i = 0; i < len; i++)
	{
		var result = _Json_runHelp(decoder, value[i]);
		if (!$elm$core$Result$isOk(result))
		{
			return $elm$core$Result$Err(A2($elm$json$Json$Decode$Index, i, result.a));
		}
		array[i] = result.a;
	}
	return $elm$core$Result$Ok(toElmValue(array));
}

function _Json_isArray(value)
{
	return Array.isArray(value) || (typeof FileList !== 'undefined' && value instanceof FileList);
}

function _Json_toElmArray(array)
{
	return A2($elm$core$Array$initialize, array.length, function(i) { return array[i]; });
}

function _Json_expecting(type, value)
{
	return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, 'Expecting ' + type, _Json_wrap(value)));
}


// EQUALITY

function _Json_equality(x, y)
{
	if (x === y)
	{
		return true;
	}

	if (x.$ !== y.$)
	{
		return false;
	}

	switch (x.$)
	{
		case 0:
		case 1:
			return x.a === y.a;

		case 2:
			return x.b === y.b;

		case 5:
			return x.c === y.c;

		case 3:
		case 4:
		case 8:
			return _Json_equality(x.b, y.b);

		case 6:
			return x.d === y.d && _Json_equality(x.b, y.b);

		case 7:
			return x.e === y.e && _Json_equality(x.b, y.b);

		case 9:
			return x.f === y.f && _Json_listEquality(x.g, y.g);

		case 10:
			return x.h === y.h && _Json_equality(x.b, y.b);

		case 11:
			return _Json_listEquality(x.g, y.g);
	}
}

function _Json_listEquality(aDecoders, bDecoders)
{
	var len = aDecoders.length;
	if (len !== bDecoders.length)
	{
		return false;
	}
	for (var i = 0; i < len; i++)
	{
		if (!_Json_equality(aDecoders[i], bDecoders[i]))
		{
			return false;
		}
	}
	return true;
}


// ENCODE

var _Json_encode = F2(function(indentLevel, value)
{
	return JSON.stringify(_Json_unwrap(value), null, indentLevel) + '';
});

function _Json_wrap(value) { return { $: 0, a: value }; }
function _Json_unwrap(value) { return value.a; }

function _Json_wrap_UNUSED(value) { return value; }
function _Json_unwrap_UNUSED(value) { return value; }

function _Json_emptyArray() { return []; }
function _Json_emptyObject() { return {}; }

var _Json_addField = F3(function(key, value, object)
{
	object[key] = _Json_unwrap(value);
	return object;
});

function _Json_addEntry(func)
{
	return F2(function(entry, array)
	{
		array.push(_Json_unwrap(func(entry)));
		return array;
	});
}

var _Json_encodeNull = _Json_wrap(null);



// TASKS

function _Scheduler_succeed(value)
{
	return {
		$: 0,
		a: value
	};
}

function _Scheduler_fail(error)
{
	return {
		$: 1,
		a: error
	};
}

function _Scheduler_binding(callback)
{
	return {
		$: 2,
		b: callback,
		c: null
	};
}

var _Scheduler_andThen = F2(function(callback, task)
{
	return {
		$: 3,
		b: callback,
		d: task
	};
});

var _Scheduler_onError = F2(function(callback, task)
{
	return {
		$: 4,
		b: callback,
		d: task
	};
});

function _Scheduler_receive(callback)
{
	return {
		$: 5,
		b: callback
	};
}


// PROCESSES

var _Scheduler_guid = 0;

function _Scheduler_rawSpawn(task)
{
	var proc = {
		$: 0,
		e: _Scheduler_guid++,
		f: task,
		g: null,
		h: []
	};

	_Scheduler_enqueue(proc);

	return proc;
}

function _Scheduler_spawn(task)
{
	return _Scheduler_binding(function(callback) {
		callback(_Scheduler_succeed(_Scheduler_rawSpawn(task)));
	});
}

function _Scheduler_rawSend(proc, msg)
{
	proc.h.push(msg);
	_Scheduler_enqueue(proc);
}

var _Scheduler_send = F2(function(proc, msg)
{
	return _Scheduler_binding(function(callback) {
		_Scheduler_rawSend(proc, msg);
		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
});

function _Scheduler_kill(proc)
{
	return _Scheduler_binding(function(callback) {
		var task = proc.f;
		if (task.$ === 2 && task.c)
		{
			task.c();
		}

		proc.f = null;

		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
}


/* STEP PROCESSES

type alias Process =
  { $ : tag
  , id : unique_id
  , root : Task
  , stack : null | { $: SUCCEED | FAIL, a: callback, b: stack }
  , mailbox : [msg]
  }

*/


var _Scheduler_working = false;
var _Scheduler_queue = [];


function _Scheduler_enqueue(proc)
{
	_Scheduler_queue.push(proc);
	if (_Scheduler_working)
	{
		return;
	}
	_Scheduler_working = true;
	while (proc = _Scheduler_queue.shift())
	{
		_Scheduler_step(proc);
	}
	_Scheduler_working = false;
}


function _Scheduler_step(proc)
{
	while (proc.f)
	{
		var rootTag = proc.f.$;
		if (rootTag === 0 || rootTag === 1)
		{
			while (proc.g && proc.g.$ !== rootTag)
			{
				proc.g = proc.g.i;
			}
			if (!proc.g)
			{
				return;
			}
			proc.f = proc.g.b(proc.f.a);
			proc.g = proc.g.i;
		}
		else if (rootTag === 2)
		{
			proc.f.c = proc.f.b(function(newRoot) {
				proc.f = newRoot;
				_Scheduler_enqueue(proc);
			});
			return;
		}
		else if (rootTag === 5)
		{
			if (proc.h.length === 0)
			{
				return;
			}
			proc.f = proc.f.b(proc.h.shift());
		}
		else // if (rootTag === 3 || rootTag === 4)
		{
			proc.g = {
				$: rootTag === 3 ? 0 : 1,
				b: proc.f.b,
				i: proc.g
			};
			proc.f = proc.f.d;
		}
	}
}



function _Process_sleep(time)
{
	return _Scheduler_binding(function(callback) {
		var id = setTimeout(function() {
			callback(_Scheduler_succeed(_Utils_Tuple0));
		}, time);

		return function() { clearTimeout(id); };
	});
}




// PROGRAMS


var _Platform_worker = F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.init,
		impl.update,
		impl.subscriptions,
		function() { return function() {} }
	);
});



// INITIALIZE A PROGRAM


function _Platform_initialize(flagDecoder, args, init, update, subscriptions, stepperBuilder)
{
	var result = A2(_Json_run, flagDecoder, _Json_wrap(args ? args['flags'] : undefined));
	$elm$core$Result$isOk(result) || _Debug_crash(2 /**/, _Json_errorToString(result.a) /**/);
	var managers = {};
	var initPair = init(result.a);
	var model = initPair.a;
	var stepper = stepperBuilder(sendToApp, model);
	var ports = _Platform_setupEffects(managers, sendToApp);

	function sendToApp(msg, viewMetadata)
	{
		var pair = A2(update, msg, model);
		stepper(model = pair.a, viewMetadata);
		_Platform_enqueueEffects(managers, pair.b, subscriptions(model));
	}

	_Platform_enqueueEffects(managers, initPair.b, subscriptions(model));

	return ports ? { ports: ports } : {};
}



// TRACK PRELOADS
//
// This is used by code in elm/browser and elm/http
// to register any HTTP requests that are triggered by init.
//


var _Platform_preload;


function _Platform_registerPreload(url)
{
	_Platform_preload.add(url);
}



// EFFECT MANAGERS


var _Platform_effectManagers = {};


function _Platform_setupEffects(managers, sendToApp)
{
	var ports;

	// setup all necessary effect managers
	for (var key in _Platform_effectManagers)
	{
		var manager = _Platform_effectManagers[key];

		if (manager.a)
		{
			ports = ports || {};
			ports[key] = manager.a(key, sendToApp);
		}

		managers[key] = _Platform_instantiateManager(manager, sendToApp);
	}

	return ports;
}


function _Platform_createManager(init, onEffects, onSelfMsg, cmdMap, subMap)
{
	return {
		b: init,
		c: onEffects,
		d: onSelfMsg,
		e: cmdMap,
		f: subMap
	};
}


function _Platform_instantiateManager(info, sendToApp)
{
	var router = {
		g: sendToApp,
		h: undefined
	};

	var onEffects = info.c;
	var onSelfMsg = info.d;
	var cmdMap = info.e;
	var subMap = info.f;

	function loop(state)
	{
		return A2(_Scheduler_andThen, loop, _Scheduler_receive(function(msg)
		{
			var value = msg.a;

			if (msg.$ === 0)
			{
				return A3(onSelfMsg, router, value, state);
			}

			return cmdMap && subMap
				? A4(onEffects, router, value.i, value.j, state)
				: A3(onEffects, router, cmdMap ? value.i : value.j, state);
		}));
	}

	return router.h = _Scheduler_rawSpawn(A2(_Scheduler_andThen, loop, info.b));
}



// ROUTING


var _Platform_sendToApp = F2(function(router, msg)
{
	return _Scheduler_binding(function(callback)
	{
		router.g(msg);
		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
});


var _Platform_sendToSelf = F2(function(router, msg)
{
	return A2(_Scheduler_send, router.h, {
		$: 0,
		a: msg
	});
});



// BAGS


function _Platform_leaf(home)
{
	return function(value)
	{
		return {
			$: 1,
			k: home,
			l: value
		};
	};
}


function _Platform_batch(list)
{
	return {
		$: 2,
		m: list
	};
}


var _Platform_map = F2(function(tagger, bag)
{
	return {
		$: 3,
		n: tagger,
		o: bag
	}
});



// PIPE BAGS INTO EFFECT MANAGERS
//
// Effects must be queued!
//
// Say your init contains a synchronous command, like Time.now or Time.here
//
//   - This will produce a batch of effects (FX_1)
//   - The synchronous task triggers the subsequent `update` call
//   - This will produce a batch of effects (FX_2)
//
// If we just start dispatching FX_2, subscriptions from FX_2 can be processed
// before subscriptions from FX_1. No good! Earlier versions of this code had
// this problem, leading to these reports:
//
//   https://github.com/elm/core/issues/980
//   https://github.com/elm/core/pull/981
//   https://github.com/elm/compiler/issues/1776
//
// The queue is necessary to avoid ordering issues for synchronous commands.


// Why use true/false here? Why not just check the length of the queue?
// The goal is to detect "are we currently dispatching effects?" If we
// are, we need to bail and let the ongoing while loop handle things.
//
// Now say the queue has 1 element. When we dequeue the final element,
// the queue will be empty, but we are still actively dispatching effects.
// So you could get queue jumping in a really tricky category of cases.
//
var _Platform_effectsQueue = [];
var _Platform_effectsActive = false;


function _Platform_enqueueEffects(managers, cmdBag, subBag)
{
	_Platform_effectsQueue.push({ p: managers, q: cmdBag, r: subBag });

	if (_Platform_effectsActive) return;

	_Platform_effectsActive = true;
	for (var fx; fx = _Platform_effectsQueue.shift(); )
	{
		_Platform_dispatchEffects(fx.p, fx.q, fx.r);
	}
	_Platform_effectsActive = false;
}


function _Platform_dispatchEffects(managers, cmdBag, subBag)
{
	var effectsDict = {};
	_Platform_gatherEffects(true, cmdBag, effectsDict, null);
	_Platform_gatherEffects(false, subBag, effectsDict, null);

	for (var home in managers)
	{
		_Scheduler_rawSend(managers[home], {
			$: 'fx',
			a: effectsDict[home] || { i: _List_Nil, j: _List_Nil }
		});
	}
}


function _Platform_gatherEffects(isCmd, bag, effectsDict, taggers)
{
	switch (bag.$)
	{
		case 1:
			var home = bag.k;
			var effect = _Platform_toEffect(isCmd, home, taggers, bag.l);
			effectsDict[home] = _Platform_insert(isCmd, effect, effectsDict[home]);
			return;

		case 2:
			for (var list = bag.m; list.b; list = list.b) // WHILE_CONS
			{
				_Platform_gatherEffects(isCmd, list.a, effectsDict, taggers);
			}
			return;

		case 3:
			_Platform_gatherEffects(isCmd, bag.o, effectsDict, {
				s: bag.n,
				t: taggers
			});
			return;
	}
}


function _Platform_toEffect(isCmd, home, taggers, value)
{
	function applyTaggers(x)
	{
		for (var temp = taggers; temp; temp = temp.t)
		{
			x = temp.s(x);
		}
		return x;
	}

	var map = isCmd
		? _Platform_effectManagers[home].e
		: _Platform_effectManagers[home].f;

	return A2(map, applyTaggers, value)
}


function _Platform_insert(isCmd, newEffect, effects)
{
	effects = effects || { i: _List_Nil, j: _List_Nil };

	isCmd
		? (effects.i = _List_Cons(newEffect, effects.i))
		: (effects.j = _List_Cons(newEffect, effects.j));

	return effects;
}



// PORTS


function _Platform_checkPortName(name)
{
	if (_Platform_effectManagers[name])
	{
		_Debug_crash(3, name)
	}
}



// OUTGOING PORTS


function _Platform_outgoingPort(name, converter)
{
	_Platform_checkPortName(name);
	_Platform_effectManagers[name] = {
		e: _Platform_outgoingPortMap,
		u: converter,
		a: _Platform_setupOutgoingPort
	};
	return _Platform_leaf(name);
}


var _Platform_outgoingPortMap = F2(function(tagger, value) { return value; });


function _Platform_setupOutgoingPort(name)
{
	var subs = [];
	var converter = _Platform_effectManagers[name].u;

	// CREATE MANAGER

	var init = _Process_sleep(0);

	_Platform_effectManagers[name].b = init;
	_Platform_effectManagers[name].c = F3(function(router, cmdList, state)
	{
		for ( ; cmdList.b; cmdList = cmdList.b) // WHILE_CONS
		{
			// grab a separate reference to subs in case unsubscribe is called
			var currentSubs = subs;
			var value = _Json_unwrap(converter(cmdList.a));
			for (var i = 0; i < currentSubs.length; i++)
			{
				currentSubs[i](value);
			}
		}
		return init;
	});

	// PUBLIC API

	function subscribe(callback)
	{
		subs.push(callback);
	}

	function unsubscribe(callback)
	{
		// copy subs into a new array in case unsubscribe is called within a
		// subscribed callback
		subs = subs.slice();
		var index = subs.indexOf(callback);
		if (index >= 0)
		{
			subs.splice(index, 1);
		}
	}

	return {
		subscribe: subscribe,
		unsubscribe: unsubscribe
	};
}



// INCOMING PORTS


function _Platform_incomingPort(name, converter)
{
	_Platform_checkPortName(name);
	_Platform_effectManagers[name] = {
		f: _Platform_incomingPortMap,
		u: converter,
		a: _Platform_setupIncomingPort
	};
	return _Platform_leaf(name);
}


var _Platform_incomingPortMap = F2(function(tagger, finalTagger)
{
	return function(value)
	{
		return tagger(finalTagger(value));
	};
});


function _Platform_setupIncomingPort(name, sendToApp)
{
	var subs = _List_Nil;
	var converter = _Platform_effectManagers[name].u;

	// CREATE MANAGER

	var init = _Scheduler_succeed(null);

	_Platform_effectManagers[name].b = init;
	_Platform_effectManagers[name].c = F3(function(router, subList, state)
	{
		subs = subList;
		return init;
	});

	// PUBLIC API

	function send(incomingValue)
	{
		var result = A2(_Json_run, converter, _Json_wrap(incomingValue));

		$elm$core$Result$isOk(result) || _Debug_crash(4, name, result.a);

		var value = result.a;
		for (var temp = subs; temp.b; temp = temp.b) // WHILE_CONS
		{
			sendToApp(temp.a(value));
		}
	}

	return { send: send };
}



// EXPORT ELM MODULES
//
// Have DEBUG and PROD versions so that we can (1) give nicer errors in
// debug mode and (2) not pay for the bits needed for that in prod mode.
//


function _Platform_export_UNUSED(exports)
{
	scope['Elm']
		? _Platform_mergeExportsProd(scope['Elm'], exports)
		: scope['Elm'] = exports;
}


function _Platform_mergeExportsProd(obj, exports)
{
	for (var name in exports)
	{
		(name in obj)
			? (name == 'init')
				? _Debug_crash(6)
				: _Platform_mergeExportsProd(obj[name], exports[name])
			: (obj[name] = exports[name]);
	}
}


function _Platform_export(exports)
{
	scope['Elm']
		? _Platform_mergeExportsDebug('Elm', scope['Elm'], exports)
		: scope['Elm'] = exports;
}


function _Platform_mergeExportsDebug(moduleName, obj, exports)
{
	for (var name in exports)
	{
		(name in obj)
			? (name == 'init')
				? _Debug_crash(6, moduleName)
				: _Platform_mergeExportsDebug(moduleName + '.' + name, obj[name], exports[name])
			: (obj[name] = exports[name]);
	}
}




// HELPERS


var _VirtualDom_divertHrefToApp;

var _VirtualDom_doc = typeof document !== 'undefined' ? document : {};


function _VirtualDom_appendChild(parent, child)
{
	parent.appendChild(child);
}

var _VirtualDom_init = F4(function(virtualNode, flagDecoder, debugMetadata, args)
{
	// NOTE: this function needs _Platform_export available to work

	/**_UNUSED/
	var node = args['node'];
	//*/
	/**/
	var node = args && args['node'] ? args['node'] : _Debug_crash(0);
	//*/

	node.parentNode.replaceChild(
		_VirtualDom_render(virtualNode, function() {}),
		node
	);

	return {};
});



// TEXT


function _VirtualDom_text(string)
{
	return {
		$: 0,
		a: string
	};
}



// NODE


var _VirtualDom_nodeNS = F2(function(namespace, tag)
{
	return F2(function(factList, kidList)
	{
		for (var kids = [], descendantsCount = 0; kidList.b; kidList = kidList.b) // WHILE_CONS
		{
			var kid = kidList.a;
			descendantsCount += (kid.b || 0);
			kids.push(kid);
		}
		descendantsCount += kids.length;

		return {
			$: 1,
			c: tag,
			d: _VirtualDom_organizeFacts(factList),
			e: kids,
			f: namespace,
			b: descendantsCount
		};
	});
});


var _VirtualDom_node = _VirtualDom_nodeNS(undefined);



// KEYED NODE


var _VirtualDom_keyedNodeNS = F2(function(namespace, tag)
{
	return F2(function(factList, kidList)
	{
		for (var kids = [], descendantsCount = 0; kidList.b; kidList = kidList.b) // WHILE_CONS
		{
			var kid = kidList.a;
			descendantsCount += (kid.b.b || 0);
			kids.push(kid);
		}
		descendantsCount += kids.length;

		return {
			$: 2,
			c: tag,
			d: _VirtualDom_organizeFacts(factList),
			e: kids,
			f: namespace,
			b: descendantsCount
		};
	});
});


var _VirtualDom_keyedNode = _VirtualDom_keyedNodeNS(undefined);



// CUSTOM


function _VirtualDom_custom(factList, model, render, diff)
{
	return {
		$: 3,
		d: _VirtualDom_organizeFacts(factList),
		g: model,
		h: render,
		i: diff
	};
}



// MAP


var _VirtualDom_map = F2(function(tagger, node)
{
	return {
		$: 4,
		j: tagger,
		k: node,
		b: 1 + (node.b || 0)
	};
});



// LAZY


function _VirtualDom_thunk(refs, thunk)
{
	return {
		$: 5,
		l: refs,
		m: thunk,
		k: undefined
	};
}

var _VirtualDom_lazy = F2(function(func, a)
{
	return _VirtualDom_thunk([func, a], function() {
		return func(a);
	});
});

var _VirtualDom_lazy2 = F3(function(func, a, b)
{
	return _VirtualDom_thunk([func, a, b], function() {
		return A2(func, a, b);
	});
});

var _VirtualDom_lazy3 = F4(function(func, a, b, c)
{
	return _VirtualDom_thunk([func, a, b, c], function() {
		return A3(func, a, b, c);
	});
});

var _VirtualDom_lazy4 = F5(function(func, a, b, c, d)
{
	return _VirtualDom_thunk([func, a, b, c, d], function() {
		return A4(func, a, b, c, d);
	});
});

var _VirtualDom_lazy5 = F6(function(func, a, b, c, d, e)
{
	return _VirtualDom_thunk([func, a, b, c, d, e], function() {
		return A5(func, a, b, c, d, e);
	});
});

var _VirtualDom_lazy6 = F7(function(func, a, b, c, d, e, f)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f], function() {
		return A6(func, a, b, c, d, e, f);
	});
});

var _VirtualDom_lazy7 = F8(function(func, a, b, c, d, e, f, g)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f, g], function() {
		return A7(func, a, b, c, d, e, f, g);
	});
});

var _VirtualDom_lazy8 = F9(function(func, a, b, c, d, e, f, g, h)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f, g, h], function() {
		return A8(func, a, b, c, d, e, f, g, h);
	});
});



// FACTS


var _VirtualDom_on = F2(function(key, handler)
{
	return {
		$: 'a0',
		n: key,
		o: handler
	};
});
var _VirtualDom_style = F2(function(key, value)
{
	return {
		$: 'a1',
		n: key,
		o: value
	};
});
var _VirtualDom_property = F2(function(key, value)
{
	return {
		$: 'a2',
		n: key,
		o: value
	};
});
var _VirtualDom_attribute = F2(function(key, value)
{
	return {
		$: 'a3',
		n: key,
		o: value
	};
});
var _VirtualDom_attributeNS = F3(function(namespace, key, value)
{
	return {
		$: 'a4',
		n: key,
		o: { f: namespace, o: value }
	};
});



// XSS ATTACK VECTOR CHECKS


function _VirtualDom_noScript(tag)
{
	return tag == 'script' ? 'p' : tag;
}

function _VirtualDom_noOnOrFormAction(key)
{
	return /^(on|formAction$)/i.test(key) ? 'data-' + key : key;
}

function _VirtualDom_noInnerHtmlOrFormAction(key)
{
	return key == 'innerHTML' || key == 'formAction' ? 'data-' + key : key;
}

function _VirtualDom_noJavaScriptUri_UNUSED(value)
{
	return /^javascript:/i.test(value.replace(/\s/g,'')) ? '' : value;
}

function _VirtualDom_noJavaScriptUri(value)
{
	return /^javascript:/i.test(value.replace(/\s/g,''))
		? 'javascript:alert("This is an XSS vector. Please use ports or web components instead.")'
		: value;
}

function _VirtualDom_noJavaScriptOrHtmlUri_UNUSED(value)
{
	return /^\s*(javascript:|data:text\/html)/i.test(value) ? '' : value;
}

function _VirtualDom_noJavaScriptOrHtmlUri(value)
{
	return /^\s*(javascript:|data:text\/html)/i.test(value)
		? 'javascript:alert("This is an XSS vector. Please use ports or web components instead.")'
		: value;
}



// MAP FACTS


var _VirtualDom_mapAttribute = F2(function(func, attr)
{
	return (attr.$ === 'a0')
		? A2(_VirtualDom_on, attr.n, _VirtualDom_mapHandler(func, attr.o))
		: attr;
});

function _VirtualDom_mapHandler(func, handler)
{
	var tag = $elm$virtual_dom$VirtualDom$toHandlerInt(handler);

	// 0 = Normal
	// 1 = MayStopPropagation
	// 2 = MayPreventDefault
	// 3 = Custom

	return {
		$: handler.$,
		a:
			!tag
				? A2($elm$json$Json$Decode$map, func, handler.a)
				:
			A3($elm$json$Json$Decode$map2,
				tag < 3
					? _VirtualDom_mapEventTuple
					: _VirtualDom_mapEventRecord,
				$elm$json$Json$Decode$succeed(func),
				handler.a
			)
	};
}

var _VirtualDom_mapEventTuple = F2(function(func, tuple)
{
	return _Utils_Tuple2(func(tuple.a), tuple.b);
});

var _VirtualDom_mapEventRecord = F2(function(func, record)
{
	return {
		message: func(record.message),
		stopPropagation: record.stopPropagation,
		preventDefault: record.preventDefault
	}
});



// ORGANIZE FACTS


function _VirtualDom_organizeFacts(factList)
{
	for (var facts = {}; factList.b; factList = factList.b) // WHILE_CONS
	{
		var entry = factList.a;

		var tag = entry.$;
		var key = entry.n;
		var value = entry.o;

		if (tag === 'a2')
		{
			(key === 'className')
				? _VirtualDom_addClass(facts, key, _Json_unwrap(value))
				: facts[key] = _Json_unwrap(value);

			continue;
		}

		var subFacts = facts[tag] || (facts[tag] = {});
		(tag === 'a3' && key === 'class')
			? _VirtualDom_addClass(subFacts, key, value)
			: subFacts[key] = value;
	}

	return facts;
}

function _VirtualDom_addClass(object, key, newClass)
{
	var classes = object[key];
	object[key] = classes ? classes + ' ' + newClass : newClass;
}



// RENDER


function _VirtualDom_render(vNode, eventNode)
{
	var tag = vNode.$;

	if (tag === 5)
	{
		return _VirtualDom_render(vNode.k || (vNode.k = vNode.m()), eventNode);
	}

	if (tag === 0)
	{
		return _VirtualDom_doc.createTextNode(vNode.a);
	}

	if (tag === 4)
	{
		var subNode = vNode.k;
		var tagger = vNode.j;

		while (subNode.$ === 4)
		{
			typeof tagger !== 'object'
				? tagger = [tagger, subNode.j]
				: tagger.push(subNode.j);

			subNode = subNode.k;
		}

		var subEventRoot = { j: tagger, p: eventNode };
		var domNode = _VirtualDom_render(subNode, subEventRoot);
		domNode.elm_event_node_ref = subEventRoot;
		return domNode;
	}

	if (tag === 3)
	{
		var domNode = vNode.h(vNode.g);
		_VirtualDom_applyFacts(domNode, eventNode, vNode.d);
		return domNode;
	}

	// at this point `tag` must be 1 or 2

	var domNode = vNode.f
		? _VirtualDom_doc.createElementNS(vNode.f, vNode.c)
		: _VirtualDom_doc.createElement(vNode.c);

	if (_VirtualDom_divertHrefToApp && vNode.c == 'a')
	{
		domNode.addEventListener('click', _VirtualDom_divertHrefToApp(domNode));
	}

	_VirtualDom_applyFacts(domNode, eventNode, vNode.d);

	for (var kids = vNode.e, i = 0; i < kids.length; i++)
	{
		_VirtualDom_appendChild(domNode, _VirtualDom_render(tag === 1 ? kids[i] : kids[i].b, eventNode));
	}

	return domNode;
}



// APPLY FACTS


function _VirtualDom_applyFacts(domNode, eventNode, facts)
{
	for (var key in facts)
	{
		var value = facts[key];

		key === 'a1'
			? _VirtualDom_applyStyles(domNode, value)
			:
		key === 'a0'
			? _VirtualDom_applyEvents(domNode, eventNode, value)
			:
		key === 'a3'
			? _VirtualDom_applyAttrs(domNode, value)
			:
		key === 'a4'
			? _VirtualDom_applyAttrsNS(domNode, value)
			:
		((key !== 'value' && key !== 'checked') || domNode[key] !== value) && (domNode[key] = value);
	}
}



// APPLY STYLES


function _VirtualDom_applyStyles(domNode, styles)
{
	var domNodeStyle = domNode.style;

	for (var key in styles)
	{
		domNodeStyle[key] = styles[key];
	}
}



// APPLY ATTRS


function _VirtualDom_applyAttrs(domNode, attrs)
{
	for (var key in attrs)
	{
		var value = attrs[key];
		typeof value !== 'undefined'
			? domNode.setAttribute(key, value)
			: domNode.removeAttribute(key);
	}
}



// APPLY NAMESPACED ATTRS


function _VirtualDom_applyAttrsNS(domNode, nsAttrs)
{
	for (var key in nsAttrs)
	{
		var pair = nsAttrs[key];
		var namespace = pair.f;
		var value = pair.o;

		typeof value !== 'undefined'
			? domNode.setAttributeNS(namespace, key, value)
			: domNode.removeAttributeNS(namespace, key);
	}
}



// APPLY EVENTS


function _VirtualDom_applyEvents(domNode, eventNode, events)
{
	var allCallbacks = domNode.elmFs || (domNode.elmFs = {});

	for (var key in events)
	{
		var newHandler = events[key];
		var oldCallback = allCallbacks[key];

		if (!newHandler)
		{
			domNode.removeEventListener(key, oldCallback);
			allCallbacks[key] = undefined;
			continue;
		}

		if (oldCallback)
		{
			var oldHandler = oldCallback.q;
			if (oldHandler.$ === newHandler.$)
			{
				oldCallback.q = newHandler;
				continue;
			}
			domNode.removeEventListener(key, oldCallback);
		}

		oldCallback = _VirtualDom_makeCallback(eventNode, newHandler);
		domNode.addEventListener(key, oldCallback,
			_VirtualDom_passiveSupported
			&& { passive: $elm$virtual_dom$VirtualDom$toHandlerInt(newHandler) < 2 }
		);
		allCallbacks[key] = oldCallback;
	}
}



// PASSIVE EVENTS


var _VirtualDom_passiveSupported;

try
{
	window.addEventListener('t', null, Object.defineProperty({}, 'passive', {
		get: function() { _VirtualDom_passiveSupported = true; }
	}));
}
catch(e) {}



// EVENT HANDLERS


function _VirtualDom_makeCallback(eventNode, initialHandler)
{
	function callback(event)
	{
		var handler = callback.q;
		var result = _Json_runHelp(handler.a, event);

		if (!$elm$core$Result$isOk(result))
		{
			return;
		}

		var tag = $elm$virtual_dom$VirtualDom$toHandlerInt(handler);

		// 0 = Normal
		// 1 = MayStopPropagation
		// 2 = MayPreventDefault
		// 3 = Custom

		var value = result.a;
		var message = !tag ? value : tag < 3 ? value.a : value.message;
		var stopPropagation = tag == 1 ? value.b : tag == 3 && value.stopPropagation;
		var currentEventNode = (
			stopPropagation && event.stopPropagation(),
			(tag == 2 ? value.b : tag == 3 && value.preventDefault) && event.preventDefault(),
			eventNode
		);
		var tagger;
		var i;
		while (tagger = currentEventNode.j)
		{
			if (typeof tagger == 'function')
			{
				message = tagger(message);
			}
			else
			{
				for (var i = tagger.length; i--; )
				{
					message = tagger[i](message);
				}
			}
			currentEventNode = currentEventNode.p;
		}
		currentEventNode(message, stopPropagation); // stopPropagation implies isSync
	}

	callback.q = initialHandler;

	return callback;
}

function _VirtualDom_equalEvents(x, y)
{
	return x.$ == y.$ && _Json_equality(x.a, y.a);
}



// DIFF


// TODO: Should we do patches like in iOS?
//
// type Patch
//   = At Int Patch
//   | Batch (List Patch)
//   | Change ...
//
// How could it not be better?
//
function _VirtualDom_diff(x, y)
{
	var patches = [];
	_VirtualDom_diffHelp(x, y, patches, 0);
	return patches;
}


function _VirtualDom_pushPatch(patches, type, index, data)
{
	var patch = {
		$: type,
		r: index,
		s: data,
		t: undefined,
		u: undefined
	};
	patches.push(patch);
	return patch;
}


function _VirtualDom_diffHelp(x, y, patches, index)
{
	if (x === y)
	{
		return;
	}

	var xType = x.$;
	var yType = y.$;

	// Bail if you run into different types of nodes. Implies that the
	// structure has changed significantly and it's not worth a diff.
	if (xType !== yType)
	{
		if (xType === 1 && yType === 2)
		{
			y = _VirtualDom_dekey(y);
			yType = 1;
		}
		else
		{
			_VirtualDom_pushPatch(patches, 0, index, y);
			return;
		}
	}

	// Now we know that both nodes are the same $.
	switch (yType)
	{
		case 5:
			var xRefs = x.l;
			var yRefs = y.l;
			var i = xRefs.length;
			var same = i === yRefs.length;
			while (same && i--)
			{
				same = xRefs[i] === yRefs[i];
			}
			if (same)
			{
				y.k = x.k;
				return;
			}
			y.k = y.m();
			var subPatches = [];
			_VirtualDom_diffHelp(x.k, y.k, subPatches, 0);
			subPatches.length > 0 && _VirtualDom_pushPatch(patches, 1, index, subPatches);
			return;

		case 4:
			// gather nested taggers
			var xTaggers = x.j;
			var yTaggers = y.j;
			var nesting = false;

			var xSubNode = x.k;
			while (xSubNode.$ === 4)
			{
				nesting = true;

				typeof xTaggers !== 'object'
					? xTaggers = [xTaggers, xSubNode.j]
					: xTaggers.push(xSubNode.j);

				xSubNode = xSubNode.k;
			}

			var ySubNode = y.k;
			while (ySubNode.$ === 4)
			{
				nesting = true;

				typeof yTaggers !== 'object'
					? yTaggers = [yTaggers, ySubNode.j]
					: yTaggers.push(ySubNode.j);

				ySubNode = ySubNode.k;
			}

			// Just bail if different numbers of taggers. This implies the
			// structure of the virtual DOM has changed.
			if (nesting && xTaggers.length !== yTaggers.length)
			{
				_VirtualDom_pushPatch(patches, 0, index, y);
				return;
			}

			// check if taggers are "the same"
			if (nesting ? !_VirtualDom_pairwiseRefEqual(xTaggers, yTaggers) : xTaggers !== yTaggers)
			{
				_VirtualDom_pushPatch(patches, 2, index, yTaggers);
			}

			// diff everything below the taggers
			_VirtualDom_diffHelp(xSubNode, ySubNode, patches, index + 1);
			return;

		case 0:
			if (x.a !== y.a)
			{
				_VirtualDom_pushPatch(patches, 3, index, y.a);
			}
			return;

		case 1:
			_VirtualDom_diffNodes(x, y, patches, index, _VirtualDom_diffKids);
			return;

		case 2:
			_VirtualDom_diffNodes(x, y, patches, index, _VirtualDom_diffKeyedKids);
			return;

		case 3:
			if (x.h !== y.h)
			{
				_VirtualDom_pushPatch(patches, 0, index, y);
				return;
			}

			var factsDiff = _VirtualDom_diffFacts(x.d, y.d);
			factsDiff && _VirtualDom_pushPatch(patches, 4, index, factsDiff);

			var patch = y.i(x.g, y.g);
			patch && _VirtualDom_pushPatch(patches, 5, index, patch);

			return;
	}
}

// assumes the incoming arrays are the same length
function _VirtualDom_pairwiseRefEqual(as, bs)
{
	for (var i = 0; i < as.length; i++)
	{
		if (as[i] !== bs[i])
		{
			return false;
		}
	}

	return true;
}

function _VirtualDom_diffNodes(x, y, patches, index, diffKids)
{
	// Bail if obvious indicators have changed. Implies more serious
	// structural changes such that it's not worth it to diff.
	if (x.c !== y.c || x.f !== y.f)
	{
		_VirtualDom_pushPatch(patches, 0, index, y);
		return;
	}

	var factsDiff = _VirtualDom_diffFacts(x.d, y.d);
	factsDiff && _VirtualDom_pushPatch(patches, 4, index, factsDiff);

	diffKids(x, y, patches, index);
}



// DIFF FACTS


// TODO Instead of creating a new diff object, it's possible to just test if
// there *is* a diff. During the actual patch, do the diff again and make the
// modifications directly. This way, there's no new allocations. Worth it?
function _VirtualDom_diffFacts(x, y, category)
{
	var diff;

	// look for changes and removals
	for (var xKey in x)
	{
		if (xKey === 'a1' || xKey === 'a0' || xKey === 'a3' || xKey === 'a4')
		{
			var subDiff = _VirtualDom_diffFacts(x[xKey], y[xKey] || {}, xKey);
			if (subDiff)
			{
				diff = diff || {};
				diff[xKey] = subDiff;
			}
			continue;
		}

		// remove if not in the new facts
		if (!(xKey in y))
		{
			diff = diff || {};
			diff[xKey] =
				!category
					? (typeof x[xKey] === 'string' ? '' : null)
					:
				(category === 'a1')
					? ''
					:
				(category === 'a0' || category === 'a3')
					? undefined
					:
				{ f: x[xKey].f, o: undefined };

			continue;
		}

		var xValue = x[xKey];
		var yValue = y[xKey];

		// reference equal, so don't worry about it
		if (xValue === yValue && xKey !== 'value' && xKey !== 'checked'
			|| category === 'a0' && _VirtualDom_equalEvents(xValue, yValue))
		{
			continue;
		}

		diff = diff || {};
		diff[xKey] = yValue;
	}

	// add new stuff
	for (var yKey in y)
	{
		if (!(yKey in x))
		{
			diff = diff || {};
			diff[yKey] = y[yKey];
		}
	}

	return diff;
}



// DIFF KIDS


function _VirtualDom_diffKids(xParent, yParent, patches, index)
{
	var xKids = xParent.e;
	var yKids = yParent.e;

	var xLen = xKids.length;
	var yLen = yKids.length;

	// FIGURE OUT IF THERE ARE INSERTS OR REMOVALS

	if (xLen > yLen)
	{
		_VirtualDom_pushPatch(patches, 6, index, {
			v: yLen,
			i: xLen - yLen
		});
	}
	else if (xLen < yLen)
	{
		_VirtualDom_pushPatch(patches, 7, index, {
			v: xLen,
			e: yKids
		});
	}

	// PAIRWISE DIFF EVERYTHING ELSE

	for (var minLen = xLen < yLen ? xLen : yLen, i = 0; i < minLen; i++)
	{
		var xKid = xKids[i];
		_VirtualDom_diffHelp(xKid, yKids[i], patches, ++index);
		index += xKid.b || 0;
	}
}



// KEYED DIFF


function _VirtualDom_diffKeyedKids(xParent, yParent, patches, rootIndex)
{
	var localPatches = [];

	var changes = {}; // Dict String Entry
	var inserts = []; // Array { index : Int, entry : Entry }
	// type Entry = { tag : String, vnode : VNode, index : Int, data : _ }

	var xKids = xParent.e;
	var yKids = yParent.e;
	var xLen = xKids.length;
	var yLen = yKids.length;
	var xIndex = 0;
	var yIndex = 0;

	var index = rootIndex;

	while (xIndex < xLen && yIndex < yLen)
	{
		var x = xKids[xIndex];
		var y = yKids[yIndex];

		var xKey = x.a;
		var yKey = y.a;
		var xNode = x.b;
		var yNode = y.b;

		var newMatch = undefined;
		var oldMatch = undefined;

		// check if keys match

		if (xKey === yKey)
		{
			index++;
			_VirtualDom_diffHelp(xNode, yNode, localPatches, index);
			index += xNode.b || 0;

			xIndex++;
			yIndex++;
			continue;
		}

		// look ahead 1 to detect insertions and removals.

		var xNext = xKids[xIndex + 1];
		var yNext = yKids[yIndex + 1];

		if (xNext)
		{
			var xNextKey = xNext.a;
			var xNextNode = xNext.b;
			oldMatch = yKey === xNextKey;
		}

		if (yNext)
		{
			var yNextKey = yNext.a;
			var yNextNode = yNext.b;
			newMatch = xKey === yNextKey;
		}


		// swap x and y
		if (newMatch && oldMatch)
		{
			index++;
			_VirtualDom_diffHelp(xNode, yNextNode, localPatches, index);
			_VirtualDom_insertNode(changes, localPatches, xKey, yNode, yIndex, inserts);
			index += xNode.b || 0;

			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNextNode, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 2;
			continue;
		}

		// insert y
		if (newMatch)
		{
			index++;
			_VirtualDom_insertNode(changes, localPatches, yKey, yNode, yIndex, inserts);
			_VirtualDom_diffHelp(xNode, yNextNode, localPatches, index);
			index += xNode.b || 0;

			xIndex += 1;
			yIndex += 2;
			continue;
		}

		// remove x
		if (oldMatch)
		{
			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNode, index);
			index += xNode.b || 0;

			index++;
			_VirtualDom_diffHelp(xNextNode, yNode, localPatches, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 1;
			continue;
		}

		// remove x, insert y
		if (xNext && xNextKey === yNextKey)
		{
			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNode, index);
			_VirtualDom_insertNode(changes, localPatches, yKey, yNode, yIndex, inserts);
			index += xNode.b || 0;

			index++;
			_VirtualDom_diffHelp(xNextNode, yNextNode, localPatches, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 2;
			continue;
		}

		break;
	}

	// eat up any remaining nodes with removeNode and insertNode

	while (xIndex < xLen)
	{
		index++;
		var x = xKids[xIndex];
		var xNode = x.b;
		_VirtualDom_removeNode(changes, localPatches, x.a, xNode, index);
		index += xNode.b || 0;
		xIndex++;
	}

	while (yIndex < yLen)
	{
		var endInserts = endInserts || [];
		var y = yKids[yIndex];
		_VirtualDom_insertNode(changes, localPatches, y.a, y.b, undefined, endInserts);
		yIndex++;
	}

	if (localPatches.length > 0 || inserts.length > 0 || endInserts)
	{
		_VirtualDom_pushPatch(patches, 8, rootIndex, {
			w: localPatches,
			x: inserts,
			y: endInserts
		});
	}
}



// CHANGES FROM KEYED DIFF


var _VirtualDom_POSTFIX = '_elmW6BL';


function _VirtualDom_insertNode(changes, localPatches, key, vnode, yIndex, inserts)
{
	var entry = changes[key];

	// never seen this key before
	if (!entry)
	{
		entry = {
			c: 0,
			z: vnode,
			r: yIndex,
			s: undefined
		};

		inserts.push({ r: yIndex, A: entry });
		changes[key] = entry;

		return;
	}

	// this key was removed earlier, a match!
	if (entry.c === 1)
	{
		inserts.push({ r: yIndex, A: entry });

		entry.c = 2;
		var subPatches = [];
		_VirtualDom_diffHelp(entry.z, vnode, subPatches, entry.r);
		entry.r = yIndex;
		entry.s.s = {
			w: subPatches,
			A: entry
		};

		return;
	}

	// this key has already been inserted or moved, a duplicate!
	_VirtualDom_insertNode(changes, localPatches, key + _VirtualDom_POSTFIX, vnode, yIndex, inserts);
}


function _VirtualDom_removeNode(changes, localPatches, key, vnode, index)
{
	var entry = changes[key];

	// never seen this key before
	if (!entry)
	{
		var patch = _VirtualDom_pushPatch(localPatches, 9, index, undefined);

		changes[key] = {
			c: 1,
			z: vnode,
			r: index,
			s: patch
		};

		return;
	}

	// this key was inserted earlier, a match!
	if (entry.c === 0)
	{
		entry.c = 2;
		var subPatches = [];
		_VirtualDom_diffHelp(vnode, entry.z, subPatches, index);

		_VirtualDom_pushPatch(localPatches, 9, index, {
			w: subPatches,
			A: entry
		});

		return;
	}

	// this key has already been removed or moved, a duplicate!
	_VirtualDom_removeNode(changes, localPatches, key + _VirtualDom_POSTFIX, vnode, index);
}



// ADD DOM NODES
//
// Each DOM node has an "index" assigned in order of traversal. It is important
// to minimize our crawl over the actual DOM, so these indexes (along with the
// descendantsCount of virtual nodes) let us skip touching entire subtrees of
// the DOM if we know there are no patches there.


function _VirtualDom_addDomNodes(domNode, vNode, patches, eventNode)
{
	_VirtualDom_addDomNodesHelp(domNode, vNode, patches, 0, 0, vNode.b, eventNode);
}


// assumes `patches` is non-empty and indexes increase monotonically.
function _VirtualDom_addDomNodesHelp(domNode, vNode, patches, i, low, high, eventNode)
{
	var patch = patches[i];
	var index = patch.r;

	while (index === low)
	{
		var patchType = patch.$;

		if (patchType === 1)
		{
			_VirtualDom_addDomNodes(domNode, vNode.k, patch.s, eventNode);
		}
		else if (patchType === 8)
		{
			patch.t = domNode;
			patch.u = eventNode;

			var subPatches = patch.s.w;
			if (subPatches.length > 0)
			{
				_VirtualDom_addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
			}
		}
		else if (patchType === 9)
		{
			patch.t = domNode;
			patch.u = eventNode;

			var data = patch.s;
			if (data)
			{
				data.A.s = domNode;
				var subPatches = data.w;
				if (subPatches.length > 0)
				{
					_VirtualDom_addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
				}
			}
		}
		else
		{
			patch.t = domNode;
			patch.u = eventNode;
		}

		i++;

		if (!(patch = patches[i]) || (index = patch.r) > high)
		{
			return i;
		}
	}

	var tag = vNode.$;

	if (tag === 4)
	{
		var subNode = vNode.k;

		while (subNode.$ === 4)
		{
			subNode = subNode.k;
		}

		return _VirtualDom_addDomNodesHelp(domNode, subNode, patches, i, low + 1, high, domNode.elm_event_node_ref);
	}

	// tag must be 1 or 2 at this point

	var vKids = vNode.e;
	var childNodes = domNode.childNodes;
	for (var j = 0; j < vKids.length; j++)
	{
		low++;
		var vKid = tag === 1 ? vKids[j] : vKids[j].b;
		var nextLow = low + (vKid.b || 0);
		if (low <= index && index <= nextLow)
		{
			i = _VirtualDom_addDomNodesHelp(childNodes[j], vKid, patches, i, low, nextLow, eventNode);
			if (!(patch = patches[i]) || (index = patch.r) > high)
			{
				return i;
			}
		}
		low = nextLow;
	}
	return i;
}



// APPLY PATCHES


function _VirtualDom_applyPatches(rootDomNode, oldVirtualNode, patches, eventNode)
{
	if (patches.length === 0)
	{
		return rootDomNode;
	}

	_VirtualDom_addDomNodes(rootDomNode, oldVirtualNode, patches, eventNode);
	return _VirtualDom_applyPatchesHelp(rootDomNode, patches);
}

function _VirtualDom_applyPatchesHelp(rootDomNode, patches)
{
	for (var i = 0; i < patches.length; i++)
	{
		var patch = patches[i];
		var localDomNode = patch.t
		var newNode = _VirtualDom_applyPatch(localDomNode, patch);
		if (localDomNode === rootDomNode)
		{
			rootDomNode = newNode;
		}
	}
	return rootDomNode;
}

function _VirtualDom_applyPatch(domNode, patch)
{
	switch (patch.$)
	{
		case 0:
			return _VirtualDom_applyPatchRedraw(domNode, patch.s, patch.u);

		case 4:
			_VirtualDom_applyFacts(domNode, patch.u, patch.s);
			return domNode;

		case 3:
			domNode.replaceData(0, domNode.length, patch.s);
			return domNode;

		case 1:
			return _VirtualDom_applyPatchesHelp(domNode, patch.s);

		case 2:
			if (domNode.elm_event_node_ref)
			{
				domNode.elm_event_node_ref.j = patch.s;
			}
			else
			{
				domNode.elm_event_node_ref = { j: patch.s, p: patch.u };
			}
			return domNode;

		case 6:
			var data = patch.s;
			for (var i = 0; i < data.i; i++)
			{
				domNode.removeChild(domNode.childNodes[data.v]);
			}
			return domNode;

		case 7:
			var data = patch.s;
			var kids = data.e;
			var i = data.v;
			var theEnd = domNode.childNodes[i];
			for (; i < kids.length; i++)
			{
				domNode.insertBefore(_VirtualDom_render(kids[i], patch.u), theEnd);
			}
			return domNode;

		case 9:
			var data = patch.s;
			if (!data)
			{
				domNode.parentNode.removeChild(domNode);
				return domNode;
			}
			var entry = data.A;
			if (typeof entry.r !== 'undefined')
			{
				domNode.parentNode.removeChild(domNode);
			}
			entry.s = _VirtualDom_applyPatchesHelp(domNode, data.w);
			return domNode;

		case 8:
			return _VirtualDom_applyPatchReorder(domNode, patch);

		case 5:
			return patch.s(domNode);

		default:
			_Debug_crash(10); // 'Ran into an unknown patch!'
	}
}


function _VirtualDom_applyPatchRedraw(domNode, vNode, eventNode)
{
	var parentNode = domNode.parentNode;
	var newNode = _VirtualDom_render(vNode, eventNode);

	if (!newNode.elm_event_node_ref)
	{
		newNode.elm_event_node_ref = domNode.elm_event_node_ref;
	}

	if (parentNode && newNode !== domNode)
	{
		parentNode.replaceChild(newNode, domNode);
	}
	return newNode;
}


function _VirtualDom_applyPatchReorder(domNode, patch)
{
	var data = patch.s;

	// remove end inserts
	var frag = _VirtualDom_applyPatchReorderEndInsertsHelp(data.y, patch);

	// removals
	domNode = _VirtualDom_applyPatchesHelp(domNode, data.w);

	// inserts
	var inserts = data.x;
	for (var i = 0; i < inserts.length; i++)
	{
		var insert = inserts[i];
		var entry = insert.A;
		var node = entry.c === 2
			? entry.s
			: _VirtualDom_render(entry.z, patch.u);
		domNode.insertBefore(node, domNode.childNodes[insert.r]);
	}

	// add end inserts
	if (frag)
	{
		_VirtualDom_appendChild(domNode, frag);
	}

	return domNode;
}


function _VirtualDom_applyPatchReorderEndInsertsHelp(endInserts, patch)
{
	if (!endInserts)
	{
		return;
	}

	var frag = _VirtualDom_doc.createDocumentFragment();
	for (var i = 0; i < endInserts.length; i++)
	{
		var insert = endInserts[i];
		var entry = insert.A;
		_VirtualDom_appendChild(frag, entry.c === 2
			? entry.s
			: _VirtualDom_render(entry.z, patch.u)
		);
	}
	return frag;
}


function _VirtualDom_virtualize(node)
{
	// TEXT NODES

	if (node.nodeType === 3)
	{
		return _VirtualDom_text(node.textContent);
	}


	// WEIRD NODES

	if (node.nodeType !== 1)
	{
		return _VirtualDom_text('');
	}


	// ELEMENT NODES

	var attrList = _List_Nil;
	var attrs = node.attributes;
	for (var i = attrs.length; i--; )
	{
		var attr = attrs[i];
		var name = attr.name;
		var value = attr.value;
		attrList = _List_Cons( A2(_VirtualDom_attribute, name, value), attrList );
	}

	var tag = node.tagName.toLowerCase();
	var kidList = _List_Nil;
	var kids = node.childNodes;

	for (var i = kids.length; i--; )
	{
		kidList = _List_Cons(_VirtualDom_virtualize(kids[i]), kidList);
	}
	return A3(_VirtualDom_node, tag, attrList, kidList);
}

function _VirtualDom_dekey(keyedNode)
{
	var keyedKids = keyedNode.e;
	var len = keyedKids.length;
	var kids = new Array(len);
	for (var i = 0; i < len; i++)
	{
		kids[i] = keyedKids[i].b;
	}

	return {
		$: 1,
		c: keyedNode.c,
		d: keyedNode.d,
		e: kids,
		f: keyedNode.f,
		b: keyedNode.b
	};
}



var _Bitwise_and = F2(function(a, b)
{
	return a & b;
});

var _Bitwise_or = F2(function(a, b)
{
	return a | b;
});

var _Bitwise_xor = F2(function(a, b)
{
	return a ^ b;
});

function _Bitwise_complement(a)
{
	return ~a;
};

var _Bitwise_shiftLeftBy = F2(function(offset, a)
{
	return a << offset;
});

var _Bitwise_shiftRightBy = F2(function(offset, a)
{
	return a >> offset;
});

var _Bitwise_shiftRightZfBy = F2(function(offset, a)
{
	return a >>> offset;
});




// HELPERS


function _Debugger_unsafeCoerce(value)
{
	return value;
}



// PROGRAMS


var _Debugger_element = F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		A3($elm$browser$Debugger$Main$wrapInit, _Json_wrap(debugMetadata), _Debugger_popout(), impl.init),
		$elm$browser$Debugger$Main$wrapUpdate(impl.update),
		$elm$browser$Debugger$Main$wrapSubs(impl.subscriptions),
		function(sendToApp, initialModel)
		{
			var view = impl.view;
			var title = _VirtualDom_doc.title;
			var domNode = args && args['node'] ? args['node'] : _Debug_crash(0);
			var currNode = _VirtualDom_virtualize(domNode);
			var currBlocker = $elm$browser$Debugger$Main$toBlockerType(initialModel);
			var currPopout;

			var cornerNode = _VirtualDom_doc.createElement('div');
			domNode.parentNode.insertBefore(cornerNode, domNode.nextSibling);
			var cornerCurr = _VirtualDom_virtualize(cornerNode);

			initialModel.popout.a = sendToApp;

			return _Browser_makeAnimator(initialModel, function(model)
			{
				var nextNode = A2(_VirtualDom_map, $elm$browser$Debugger$Main$UserMsg, view($elm$browser$Debugger$Main$getUserModel(model)));
				var patches = _VirtualDom_diff(currNode, nextNode);
				domNode = _VirtualDom_applyPatches(domNode, currNode, patches, sendToApp);
				currNode = nextNode;

				// update blocker

				var nextBlocker = $elm$browser$Debugger$Main$toBlockerType(model);
				_Debugger_updateBlocker(currBlocker, nextBlocker);
				currBlocker = nextBlocker;

				// view corner

				var cornerNext = $elm$browser$Debugger$Main$cornerView(model);
				var cornerPatches = _VirtualDom_diff(cornerCurr, cornerNext);
				cornerNode = _VirtualDom_applyPatches(cornerNode, cornerCurr, cornerPatches, sendToApp);
				cornerCurr = cornerNext;

				if (!model.popout.b)
				{
					currPopout = undefined;
					return;
				}

				// view popout

				_VirtualDom_doc = model.popout.b; // SWITCH TO POPOUT DOC
				currPopout || (currPopout = _VirtualDom_virtualize(model.popout.b));
				var nextPopout = $elm$browser$Debugger$Main$popoutView(model);
				var popoutPatches = _VirtualDom_diff(currPopout, nextPopout);
				_VirtualDom_applyPatches(model.popout.b.body, currPopout, popoutPatches, sendToApp);
				currPopout = nextPopout;
				_VirtualDom_doc = document; // SWITCH BACK TO NORMAL DOC
			});
		}
	);
});


var _Debugger_document = F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		A3($elm$browser$Debugger$Main$wrapInit, _Json_wrap(debugMetadata), _Debugger_popout(), impl.init),
		$elm$browser$Debugger$Main$wrapUpdate(impl.update),
		$elm$browser$Debugger$Main$wrapSubs(impl.subscriptions),
		function(sendToApp, initialModel)
		{
			var divertHrefToApp = impl.setup && impl.setup(function(x) { return sendToApp($elm$browser$Debugger$Main$UserMsg(x)); });
			var view = impl.view;
			var title = _VirtualDom_doc.title;
			var bodyNode = _VirtualDom_doc.body;
			var currNode = _VirtualDom_virtualize(bodyNode);
			var currBlocker = $elm$browser$Debugger$Main$toBlockerType(initialModel);
			var currPopout;

			initialModel.popout.a = sendToApp;

			return _Browser_makeAnimator(initialModel, function(model)
			{
				_VirtualDom_divertHrefToApp = divertHrefToApp;
				var doc = view($elm$browser$Debugger$Main$getUserModel(model));
				var nextNode = _VirtualDom_node('body')(_List_Nil)(
					_Utils_ap(
						A2($elm$core$List$map, _VirtualDom_map($elm$browser$Debugger$Main$UserMsg), doc.body),
						_List_Cons($elm$browser$Debugger$Main$cornerView(model), _List_Nil)
					)
				);
				var patches = _VirtualDom_diff(currNode, nextNode);
				bodyNode = _VirtualDom_applyPatches(bodyNode, currNode, patches, sendToApp);
				currNode = nextNode;
				_VirtualDom_divertHrefToApp = 0;
				(title !== doc.title) && (_VirtualDom_doc.title = title = doc.title);

				// update blocker

				var nextBlocker = $elm$browser$Debugger$Main$toBlockerType(model);
				_Debugger_updateBlocker(currBlocker, nextBlocker);
				currBlocker = nextBlocker;

				// view popout

				if (!model.popout.b) { currPopout = undefined; return; }

				_VirtualDom_doc = model.popout.b; // SWITCH TO POPOUT DOC
				currPopout || (currPopout = _VirtualDom_virtualize(model.popout.b));
				var nextPopout = $elm$browser$Debugger$Main$popoutView(model);
				var popoutPatches = _VirtualDom_diff(currPopout, nextPopout);
				_VirtualDom_applyPatches(model.popout.b.body, currPopout, popoutPatches, sendToApp);
				currPopout = nextPopout;
				_VirtualDom_doc = document; // SWITCH BACK TO NORMAL DOC
			});
		}
	);
});


function _Debugger_popout()
{
	return {
		b: undefined,
		a: undefined
	};
}

function _Debugger_isOpen(popout)
{
	return !!popout.b;
}

function _Debugger_open(popout)
{
	return _Scheduler_binding(function(callback)
	{
		_Debugger_openWindow(popout);
		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
}

function _Debugger_openWindow(popout)
{
	var w = $elm$browser$Debugger$Main$initialWindowWidth,
		h = $elm$browser$Debugger$Main$initialWindowHeight,
	 	x = screen.width - w,
		y = screen.height - h;

	var debuggerWindow = window.open('', '', 'width=' + w + ',height=' + h + ',left=' + x + ',top=' + y);
	var doc = debuggerWindow.document;
	doc.title = 'Elm Debugger';

	// handle arrow keys
	doc.addEventListener('keydown', function(event) {
		event.metaKey && event.which === 82 && window.location.reload();
		event.key === 'ArrowUp'   && (popout.a($elm$browser$Debugger$Main$Up  ), event.preventDefault());
		event.key === 'ArrowDown' && (popout.a($elm$browser$Debugger$Main$Down), event.preventDefault());
	});

	// handle window close
	window.addEventListener('unload', close);
	debuggerWindow.addEventListener('unload', function() {
		popout.b = undefined;
		popout.a($elm$browser$Debugger$Main$NoOp);
		window.removeEventListener('unload', close);
	});

	function close() {
		popout.b = undefined;
		popout.a($elm$browser$Debugger$Main$NoOp);
		debuggerWindow.close();
	}

	// register new window
	popout.b = doc;
}



// SCROLL


function _Debugger_scroll(popout)
{
	return _Scheduler_binding(function(callback)
	{
		if (popout.b)
		{
			var msgs = popout.b.getElementById('elm-debugger-sidebar');
			if (msgs && msgs.scrollTop !== 0)
			{
				msgs.scrollTop = 0;
			}
		}
		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
}


var _Debugger_scrollTo = F2(function(id, popout)
{
	return _Scheduler_binding(function(callback)
	{
		if (popout.b)
		{
			var msg = popout.b.getElementById(id);
			if (msg)
			{
				msg.scrollIntoView(false);
			}
		}
		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
});



// UPLOAD


function _Debugger_upload(popout)
{
	return _Scheduler_binding(function(callback)
	{
		var doc = popout.b || document;
		var element = doc.createElement('input');
		element.setAttribute('type', 'file');
		element.setAttribute('accept', 'text/json');
		element.style.display = 'none';
		element.addEventListener('change', function(event)
		{
			var fileReader = new FileReader();
			fileReader.onload = function(e)
			{
				callback(_Scheduler_succeed(e.target.result));
			};
			fileReader.readAsText(event.target.files[0]);
			doc.body.removeChild(element);
		});
		doc.body.appendChild(element);
		element.click();
	});
}



// DOWNLOAD


var _Debugger_download = F2(function(historyLength, json)
{
	return _Scheduler_binding(function(callback)
	{
		var fileName = 'history-' + historyLength + '.txt';
		var jsonString = JSON.stringify(json);
		var mime = 'text/plain;charset=utf-8';
		var done = _Scheduler_succeed(_Utils_Tuple0);

		// for IE10+
		if (navigator.msSaveBlob)
		{
			navigator.msSaveBlob(new Blob([jsonString], {type: mime}), fileName);
			return callback(done);
		}

		// for HTML5
		var element = document.createElement('a');
		element.setAttribute('href', 'data:' + mime + ',' + encodeURIComponent(jsonString));
		element.setAttribute('download', fileName);
		element.style.display = 'none';
		document.body.appendChild(element);
		element.click();
		document.body.removeChild(element);
		callback(done);
	});
});



// POPOUT CONTENT


function _Debugger_messageToString(value)
{
	if (typeof value === 'boolean')
	{
		return value ? 'True' : 'False';
	}

	if (typeof value === 'number')
	{
		return value + '';
	}

	if (typeof value === 'string')
	{
		return '"' + _Debugger_addSlashes(value, false) + '"';
	}

	if (value instanceof String)
	{
		return "'" + _Debugger_addSlashes(value, true) + "'";
	}

	if (typeof value !== 'object' || value === null || !('$' in value))
	{
		return '…';
	}

	if (typeof value.$ === 'number')
	{
		return '…';
	}

	var code = value.$.charCodeAt(0);
	if (code === 0x23 /* # */ || /* a */ 0x61 <= code && code <= 0x7A /* z */)
	{
		return '…';
	}

	if (['Array_elm_builtin', 'Set_elm_builtin', 'RBNode_elm_builtin', 'RBEmpty_elm_builtin'].indexOf(value.$) >= 0)
	{
		return '…';
	}

	var keys = Object.keys(value);
	switch (keys.length)
	{
		case 1:
			return value.$;
		case 2:
			return value.$ + ' ' + _Debugger_messageToString(value.a);
		default:
			return value.$ + ' … ' + _Debugger_messageToString(value[keys[keys.length - 1]]);
	}
}


function _Debugger_init(value)
{
	if (typeof value === 'boolean')
	{
		return A3($elm$browser$Debugger$Expando$Constructor, $elm$core$Maybe$Just(value ? 'True' : 'False'), true, _List_Nil);
	}

	if (typeof value === 'number')
	{
		return $elm$browser$Debugger$Expando$Primitive(value + '');
	}

	if (typeof value === 'string')
	{
		return $elm$browser$Debugger$Expando$S('"' + _Debugger_addSlashes(value, false) + '"');
	}

	if (value instanceof String)
	{
		return $elm$browser$Debugger$Expando$S("'" + _Debugger_addSlashes(value, true) + "'");
	}

	if (typeof value === 'object' && '$' in value)
	{
		var tag = value.$;

		if (tag === '::' || tag === '[]')
		{
			return A3($elm$browser$Debugger$Expando$Sequence, $elm$browser$Debugger$Expando$ListSeq, true,
				A2($elm$core$List$map, _Debugger_init, value)
			);
		}

		if (tag === 'Set_elm_builtin')
		{
			return A3($elm$browser$Debugger$Expando$Sequence, $elm$browser$Debugger$Expando$SetSeq, true,
				A3($elm$core$Set$foldr, _Debugger_initCons, _List_Nil, value)
			);
		}

		if (tag === 'RBNode_elm_builtin' || tag == 'RBEmpty_elm_builtin')
		{
			return A2($elm$browser$Debugger$Expando$Dictionary, true,
				A3($elm$core$Dict$foldr, _Debugger_initKeyValueCons, _List_Nil, value)
			);
		}

		if (tag === 'Array_elm_builtin')
		{
			return A3($elm$browser$Debugger$Expando$Sequence, $elm$browser$Debugger$Expando$ArraySeq, true,
				A3($elm$core$Array$foldr, _Debugger_initCons, _List_Nil, value)
			);
		}

		if (typeof tag === 'number')
		{
			return $elm$browser$Debugger$Expando$Primitive('<internals>');
		}

		var char = tag.charCodeAt(0);
		if (char === 35 || 65 <= char && char <= 90)
		{
			var list = _List_Nil;
			for (var i in value)
			{
				if (i === '$') continue;
				list = _List_Cons(_Debugger_init(value[i]), list);
			}
			return A3($elm$browser$Debugger$Expando$Constructor, char === 35 ? $elm$core$Maybe$Nothing : $elm$core$Maybe$Just(tag), true, $elm$core$List$reverse(list));
		}

		return $elm$browser$Debugger$Expando$Primitive('<internals>');
	}

	if (typeof value === 'object')
	{
		var dict = $elm$core$Dict$empty;
		for (var i in value)
		{
			dict = A3($elm$core$Dict$insert, i, _Debugger_init(value[i]), dict);
		}
		return A2($elm$browser$Debugger$Expando$Record, true, dict);
	}

	return $elm$browser$Debugger$Expando$Primitive('<internals>');
}

var _Debugger_initCons = F2(function initConsHelp(value, list)
{
	return _List_Cons(_Debugger_init(value), list);
});

var _Debugger_initKeyValueCons = F3(function(key, value, list)
{
	return _List_Cons(
		_Utils_Tuple2(_Debugger_init(key), _Debugger_init(value)),
		list
	);
});

function _Debugger_addSlashes(str, isChar)
{
	var s = str
		.replace(/\\/g, '\\\\')
		.replace(/\n/g, '\\n')
		.replace(/\t/g, '\\t')
		.replace(/\r/g, '\\r')
		.replace(/\v/g, '\\v')
		.replace(/\0/g, '\\0');
	if (isChar)
	{
		return s.replace(/\'/g, '\\\'');
	}
	else
	{
		return s.replace(/\"/g, '\\"');
	}
}



// BLOCK EVENTS


function _Debugger_updateBlocker(oldBlocker, newBlocker)
{
	if (oldBlocker === newBlocker) return;

	var oldEvents = _Debugger_blockerToEvents(oldBlocker);
	var newEvents = _Debugger_blockerToEvents(newBlocker);

	// remove old blockers
	for (var i = 0; i < oldEvents.length; i++)
	{
		document.removeEventListener(oldEvents[i], _Debugger_blocker, true);
	}

	// add new blockers
	for (var i = 0; i < newEvents.length; i++)
	{
		document.addEventListener(newEvents[i], _Debugger_blocker, true);
	}
}


function _Debugger_blocker(event)
{
	if (event.type === 'keydown' && event.metaKey && event.which === 82)
	{
		return;
	}

	var isScroll = event.type === 'scroll' || event.type === 'wheel';
	for (var node = event.target; node; node = node.parentNode)
	{
		if (isScroll ? node.id === 'elm-debugger-details' : node.id === 'elm-debugger-overlay')
		{
			return;
		}
	}

	event.stopPropagation();
	event.preventDefault();
}

function _Debugger_blockerToEvents(blocker)
{
	return blocker === $elm$browser$Debugger$Overlay$BlockNone
		? []
		: blocker === $elm$browser$Debugger$Overlay$BlockMost
			? _Debugger_mostEvents
			: _Debugger_allEvents;
}

var _Debugger_mostEvents = [
	'click', 'dblclick', 'mousemove',
	'mouseup', 'mousedown', 'mouseenter', 'mouseleave',
	'touchstart', 'touchend', 'touchcancel', 'touchmove',
	'pointerdown', 'pointerup', 'pointerover', 'pointerout',
	'pointerenter', 'pointerleave', 'pointermove', 'pointercancel',
	'dragstart', 'drag', 'dragend', 'dragenter', 'dragover', 'dragleave', 'drop',
	'keyup', 'keydown', 'keypress',
	'input', 'change',
	'focus', 'blur'
];

var _Debugger_allEvents = _Debugger_mostEvents.concat('wheel', 'scroll');




// ELEMENT


var _Debugger_element;

var _Browser_element = _Debugger_element || F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.init,
		impl.update,
		impl.subscriptions,
		function(sendToApp, initialModel) {
			var view = impl.view;
			/**_UNUSED/
			var domNode = args['node'];
			//*/
			/**/
			var domNode = args && args['node'] ? args['node'] : _Debug_crash(0);
			//*/
			var currNode = _VirtualDom_virtualize(domNode);

			return _Browser_makeAnimator(initialModel, function(model)
			{
				var nextNode = view(model);
				var patches = _VirtualDom_diff(currNode, nextNode);
				domNode = _VirtualDom_applyPatches(domNode, currNode, patches, sendToApp);
				currNode = nextNode;
			});
		}
	);
});



// DOCUMENT


var _Debugger_document;

var _Browser_document = _Debugger_document || F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.init,
		impl.update,
		impl.subscriptions,
		function(sendToApp, initialModel) {
			var divertHrefToApp = impl.setup && impl.setup(sendToApp)
			var view = impl.view;
			var title = _VirtualDom_doc.title;
			var bodyNode = _VirtualDom_doc.body;
			var currNode = _VirtualDom_virtualize(bodyNode);
			return _Browser_makeAnimator(initialModel, function(model)
			{
				_VirtualDom_divertHrefToApp = divertHrefToApp;
				var doc = view(model);
				var nextNode = _VirtualDom_node('body')(_List_Nil)(doc.body);
				var patches = _VirtualDom_diff(currNode, nextNode);
				bodyNode = _VirtualDom_applyPatches(bodyNode, currNode, patches, sendToApp);
				currNode = nextNode;
				_VirtualDom_divertHrefToApp = 0;
				(title !== doc.title) && (_VirtualDom_doc.title = title = doc.title);
			});
		}
	);
});



// ANIMATION


var _Browser_cancelAnimationFrame =
	typeof cancelAnimationFrame !== 'undefined'
		? cancelAnimationFrame
		: function(id) { clearTimeout(id); };

var _Browser_requestAnimationFrame =
	typeof requestAnimationFrame !== 'undefined'
		? requestAnimationFrame
		: function(callback) { return setTimeout(callback, 1000 / 60); };


function _Browser_makeAnimator(model, draw)
{
	draw(model);

	var state = 0;

	function updateIfNeeded()
	{
		state = state === 1
			? 0
			: ( _Browser_requestAnimationFrame(updateIfNeeded), draw(model), 1 );
	}

	return function(nextModel, isSync)
	{
		model = nextModel;

		isSync
			? ( draw(model),
				state === 2 && (state = 1)
				)
			: ( state === 0 && _Browser_requestAnimationFrame(updateIfNeeded),
				state = 2
				);
	};
}



// APPLICATION


function _Browser_application(impl)
{
	var onUrlChange = impl.onUrlChange;
	var onUrlRequest = impl.onUrlRequest;
	var key = function() { key.a(onUrlChange(_Browser_getUrl())); };

	return _Browser_document({
		setup: function(sendToApp)
		{
			key.a = sendToApp;
			_Browser_window.addEventListener('popstate', key);
			_Browser_window.navigator.userAgent.indexOf('Trident') < 0 || _Browser_window.addEventListener('hashchange', key);

			return F2(function(domNode, event)
			{
				if (!event.ctrlKey && !event.metaKey && !event.shiftKey && event.button < 1 && !domNode.target && !domNode.hasAttribute('download'))
				{
					event.preventDefault();
					var href = domNode.href;
					var curr = _Browser_getUrl();
					var next = $elm$url$Url$fromString(href).a;
					sendToApp(onUrlRequest(
						(next
							&& curr.protocol === next.protocol
							&& curr.host === next.host
							&& curr.port_.a === next.port_.a
						)
							? $elm$browser$Browser$Internal(next)
							: $elm$browser$Browser$External(href)
					));
				}
			});
		},
		init: function(flags)
		{
			return A3(impl.init, flags, _Browser_getUrl(), key);
		},
		view: impl.view,
		update: impl.update,
		subscriptions: impl.subscriptions
	});
}

function _Browser_getUrl()
{
	return $elm$url$Url$fromString(_VirtualDom_doc.location.href).a || _Debug_crash(1);
}

var _Browser_go = F2(function(key, n)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function() {
		n && history.go(n);
		key();
	}));
});

var _Browser_pushUrl = F2(function(key, url)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function() {
		history.pushState({}, '', url);
		key();
	}));
});

var _Browser_replaceUrl = F2(function(key, url)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function() {
		history.replaceState({}, '', url);
		key();
	}));
});



// GLOBAL EVENTS


var _Browser_fakeNode = { addEventListener: function() {}, removeEventListener: function() {} };
var _Browser_doc = typeof document !== 'undefined' ? document : _Browser_fakeNode;
var _Browser_window = typeof window !== 'undefined' ? window : _Browser_fakeNode;

var _Browser_on = F3(function(node, eventName, sendToSelf)
{
	return _Scheduler_spawn(_Scheduler_binding(function(callback)
	{
		function handler(event)	{ _Scheduler_rawSpawn(sendToSelf(event)); }
		node.addEventListener(eventName, handler, _VirtualDom_passiveSupported && { passive: true });
		return function() { node.removeEventListener(eventName, handler); };
	}));
});

var _Browser_decodeEvent = F2(function(decoder, event)
{
	var result = _Json_runHelp(decoder, event);
	return $elm$core$Result$isOk(result) ? $elm$core$Maybe$Just(result.a) : $elm$core$Maybe$Nothing;
});



// PAGE VISIBILITY


function _Browser_visibilityInfo()
{
	return (typeof _VirtualDom_doc.hidden !== 'undefined')
		? { hidden: 'hidden', change: 'visibilitychange' }
		:
	(typeof _VirtualDom_doc.mozHidden !== 'undefined')
		? { hidden: 'mozHidden', change: 'mozvisibilitychange' }
		:
	(typeof _VirtualDom_doc.msHidden !== 'undefined')
		? { hidden: 'msHidden', change: 'msvisibilitychange' }
		:
	(typeof _VirtualDom_doc.webkitHidden !== 'undefined')
		? { hidden: 'webkitHidden', change: 'webkitvisibilitychange' }
		: { hidden: 'hidden', change: 'visibilitychange' };
}



// ANIMATION FRAMES


function _Browser_rAF()
{
	return _Scheduler_binding(function(callback)
	{
		var id = _Browser_requestAnimationFrame(function() {
			callback(_Scheduler_succeed(Date.now()));
		});

		return function() {
			_Browser_cancelAnimationFrame(id);
		};
	});
}


function _Browser_now()
{
	return _Scheduler_binding(function(callback)
	{
		callback(_Scheduler_succeed(Date.now()));
	});
}



// DOM STUFF


function _Browser_withNode(id, doStuff)
{
	return _Scheduler_binding(function(callback)
	{
		_Browser_requestAnimationFrame(function() {
			var node = document.getElementById(id);
			callback(node
				? _Scheduler_succeed(doStuff(node))
				: _Scheduler_fail($elm$browser$Browser$Dom$NotFound(id))
			);
		});
	});
}


function _Browser_withWindow(doStuff)
{
	return _Scheduler_binding(function(callback)
	{
		_Browser_requestAnimationFrame(function() {
			callback(_Scheduler_succeed(doStuff()));
		});
	});
}


// FOCUS and BLUR


var _Browser_call = F2(function(functionName, id)
{
	return _Browser_withNode(id, function(node) {
		node[functionName]();
		return _Utils_Tuple0;
	});
});



// WINDOW VIEWPORT


function _Browser_getViewport()
{
	return {
		scene: _Browser_getScene(),
		viewport: {
			x: _Browser_window.pageXOffset,
			y: _Browser_window.pageYOffset,
			width: _Browser_doc.documentElement.clientWidth,
			height: _Browser_doc.documentElement.clientHeight
		}
	};
}

function _Browser_getScene()
{
	var body = _Browser_doc.body;
	var elem = _Browser_doc.documentElement;
	return {
		width: Math.max(body.scrollWidth, body.offsetWidth, elem.scrollWidth, elem.offsetWidth, elem.clientWidth),
		height: Math.max(body.scrollHeight, body.offsetHeight, elem.scrollHeight, elem.offsetHeight, elem.clientHeight)
	};
}

var _Browser_setViewport = F2(function(x, y)
{
	return _Browser_withWindow(function()
	{
		_Browser_window.scroll(x, y);
		return _Utils_Tuple0;
	});
});



// ELEMENT VIEWPORT


function _Browser_getViewportOf(id)
{
	return _Browser_withNode(id, function(node)
	{
		return {
			scene: {
				width: node.scrollWidth,
				height: node.scrollHeight
			},
			viewport: {
				x: node.scrollLeft,
				y: node.scrollTop,
				width: node.clientWidth,
				height: node.clientHeight
			}
		};
	});
}


var _Browser_setViewportOf = F3(function(id, x, y)
{
	return _Browser_withNode(id, function(node)
	{
		node.scrollLeft = x;
		node.scrollTop = y;
		return _Utils_Tuple0;
	});
});



// ELEMENT


function _Browser_getElement(id)
{
	return _Browser_withNode(id, function(node)
	{
		var rect = node.getBoundingClientRect();
		var x = _Browser_window.pageXOffset;
		var y = _Browser_window.pageYOffset;
		return {
			scene: _Browser_getScene(),
			viewport: {
				x: x,
				y: y,
				width: _Browser_doc.documentElement.clientWidth,
				height: _Browser_doc.documentElement.clientHeight
			},
			element: {
				x: x + rect.left,
				y: y + rect.top,
				width: rect.width,
				height: rect.height
			}
		};
	});
}



// LOAD and RELOAD


function _Browser_reload(skipCache)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function(callback)
	{
		_VirtualDom_doc.location.reload(skipCache);
	}));
}

function _Browser_load(url)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function(callback)
	{
		try
		{
			_Browser_window.location = url;
		}
		catch(err)
		{
			// Only Firefox can throw a NS_ERROR_MALFORMED_URI exception here.
			// Other browsers reload the page, so let's be consistent about that.
			_VirtualDom_doc.location.reload(false);
		}
	}));
}



// DECODER

var _File_decoder = _Json_decodePrim(function(value) {
	// NOTE: checks if `File` exists in case this is run on node
	return (typeof File !== 'undefined' && value instanceof File)
		? $elm$core$Result$Ok(value)
		: _Json_expecting('a FILE', value);
});


// METADATA

function _File_name(file) { return file.name; }
function _File_mime(file) { return file.type; }
function _File_size(file) { return file.size; }

function _File_lastModified(file)
{
	return $elm$time$Time$millisToPosix(file.lastModified);
}


// DOWNLOAD

var _File_downloadNode;

function _File_getDownloadNode()
{
	return _File_downloadNode || (_File_downloadNode = document.createElement('a'));
}

var _File_download = F3(function(name, mime, content)
{
	return _Scheduler_binding(function(callback)
	{
		var blob = new Blob([content], {type: mime});

		// for IE10+
		if (navigator.msSaveOrOpenBlob)
		{
			navigator.msSaveOrOpenBlob(blob, name);
			return;
		}

		// for HTML5
		var node = _File_getDownloadNode();
		var objectUrl = URL.createObjectURL(blob);
		node.href = objectUrl;
		node.download = name;
		_File_click(node);
		URL.revokeObjectURL(objectUrl);
	});
});

function _File_downloadUrl(href)
{
	return _Scheduler_binding(function(callback)
	{
		var node = _File_getDownloadNode();
		node.href = href;
		node.download = '';
		node.origin === location.origin || (node.target = '_blank');
		_File_click(node);
	});
}


// IE COMPATIBILITY

function _File_makeBytesSafeForInternetExplorer(bytes)
{
	// only needed by IE10 and IE11 to fix https://github.com/elm/file/issues/10
	// all other browsers can just run `new Blob([bytes])` directly with no problem
	//
	return new Uint8Array(bytes.buffer, bytes.byteOffset, bytes.byteLength);
}

function _File_click(node)
{
	// only needed by IE10 and IE11 to fix https://github.com/elm/file/issues/11
	// all other browsers have MouseEvent and do not need this conditional stuff
	//
	if (typeof MouseEvent === 'function')
	{
		node.dispatchEvent(new MouseEvent('click'));
	}
	else
	{
		var event = document.createEvent('MouseEvents');
		event.initMouseEvent('click', true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
		document.body.appendChild(node);
		node.dispatchEvent(event);
		document.body.removeChild(node);
	}
}


// UPLOAD

var _File_node;

function _File_uploadOne(mimes)
{
	return _Scheduler_binding(function(callback)
	{
		_File_node = document.createElement('input');
		_File_node.type = 'file';
		_File_node.accept = A2($elm$core$String$join, ',', mimes);
		_File_node.addEventListener('change', function(event)
		{
			callback(_Scheduler_succeed(event.target.files[0]));
		});
		_File_click(_File_node);
	});
}

function _File_uploadOneOrMore(mimes)
{
	return _Scheduler_binding(function(callback)
	{
		_File_node = document.createElement('input');
		_File_node.type = 'file';
		_File_node.multiple = true;
		_File_node.accept = A2($elm$core$String$join, ',', mimes);
		_File_node.addEventListener('change', function(event)
		{
			var elmFiles = _List_fromArray(event.target.files);
			callback(_Scheduler_succeed(_Utils_Tuple2(elmFiles.a, elmFiles.b)));
		});
		_File_click(_File_node);
	});
}


// CONTENT

function _File_toString(blob)
{
	return _Scheduler_binding(function(callback)
	{
		var reader = new FileReader();
		reader.addEventListener('loadend', function() {
			callback(_Scheduler_succeed(reader.result));
		});
		reader.readAsText(blob);
		return function() { reader.abort(); };
	});
}

function _File_toBytes(blob)
{
	return _Scheduler_binding(function(callback)
	{
		var reader = new FileReader();
		reader.addEventListener('loadend', function() {
			callback(_Scheduler_succeed(new DataView(reader.result)));
		});
		reader.readAsArrayBuffer(blob);
		return function() { reader.abort(); };
	});
}

function _File_toUrl(blob)
{
	return _Scheduler_binding(function(callback)
	{
		var reader = new FileReader();
		reader.addEventListener('loadend', function() {
			callback(_Scheduler_succeed(reader.result));
		});
		reader.readAsDataURL(blob);
		return function() { reader.abort(); };
	});
}



// CREATE

var _Regex_never = /.^/;

var _Regex_fromStringWith = F2(function(options, string)
{
	var flags = 'g';
	if (options.multiline) { flags += 'm'; }
	if (options.caseInsensitive) { flags += 'i'; }

	try
	{
		return $elm$core$Maybe$Just(new RegExp(string, flags));
	}
	catch(error)
	{
		return $elm$core$Maybe$Nothing;
	}
});


// USE

var _Regex_contains = F2(function(re, string)
{
	return string.match(re) !== null;
});


var _Regex_findAtMost = F3(function(n, re, str)
{
	var out = [];
	var number = 0;
	var string = str;
	var lastIndex = re.lastIndex;
	var prevLastIndex = -1;
	var result;
	while (number++ < n && (result = re.exec(string)))
	{
		if (prevLastIndex == re.lastIndex) break;
		var i = result.length - 1;
		var subs = new Array(i);
		while (i > 0)
		{
			var submatch = result[i];
			subs[--i] = submatch
				? $elm$core$Maybe$Just(submatch)
				: $elm$core$Maybe$Nothing;
		}
		out.push(A4($elm$regex$Regex$Match, result[0], result.index, number, _List_fromArray(subs)));
		prevLastIndex = re.lastIndex;
	}
	re.lastIndex = lastIndex;
	return _List_fromArray(out);
});


var _Regex_replaceAtMost = F4(function(n, re, replacer, string)
{
	var count = 0;
	function jsReplacer(match)
	{
		if (count++ >= n)
		{
			return match;
		}
		var i = arguments.length - 3;
		var submatches = new Array(i);
		while (i > 0)
		{
			var submatch = arguments[i];
			submatches[--i] = submatch
				? $elm$core$Maybe$Just(submatch)
				: $elm$core$Maybe$Nothing;
		}
		return replacer(A4($elm$regex$Regex$Match, match, arguments[arguments.length - 2], count, _List_fromArray(submatches)));
	}
	return string.replace(re, jsReplacer);
});

var _Regex_splitAtMost = F3(function(n, re, str)
{
	var string = str;
	var out = [];
	var start = re.lastIndex;
	var restoreLastIndex = re.lastIndex;
	while (n--)
	{
		var result = re.exec(string);
		if (!result) break;
		out.push(string.slice(start, result.index));
		start = re.lastIndex;
	}
	out.push(string.slice(start));
	re.lastIndex = restoreLastIndex;
	return _List_fromArray(out);
});

var _Regex_infinity = Infinity;
var $elm$core$List$cons = _List_cons;
var $elm$core$Elm$JsArray$foldr = _JsArray_foldr;
var $elm$core$Array$foldr = F3(
	function (func, baseCase, _v0) {
		var tree = _v0.c;
		var tail = _v0.d;
		var helper = F2(
			function (node, acc) {
				if (node.$ === 'SubTree') {
					var subTree = node.a;
					return A3($elm$core$Elm$JsArray$foldr, helper, acc, subTree);
				} else {
					var values = node.a;
					return A3($elm$core$Elm$JsArray$foldr, func, acc, values);
				}
			});
		return A3(
			$elm$core$Elm$JsArray$foldr,
			helper,
			A3($elm$core$Elm$JsArray$foldr, func, baseCase, tail),
			tree);
	});
var $elm$core$Array$toList = function (array) {
	return A3($elm$core$Array$foldr, $elm$core$List$cons, _List_Nil, array);
};
var $elm$core$Dict$foldr = F3(
	function (func, acc, t) {
		foldr:
		while (true) {
			if (t.$ === 'RBEmpty_elm_builtin') {
				return acc;
			} else {
				var key = t.b;
				var value = t.c;
				var left = t.d;
				var right = t.e;
				var $temp$func = func,
					$temp$acc = A3(
					func,
					key,
					value,
					A3($elm$core$Dict$foldr, func, acc, right)),
					$temp$t = left;
				func = $temp$func;
				acc = $temp$acc;
				t = $temp$t;
				continue foldr;
			}
		}
	});
var $elm$core$Dict$toList = function (dict) {
	return A3(
		$elm$core$Dict$foldr,
		F3(
			function (key, value, list) {
				return A2(
					$elm$core$List$cons,
					_Utils_Tuple2(key, value),
					list);
			}),
		_List_Nil,
		dict);
};
var $elm$core$Dict$keys = function (dict) {
	return A3(
		$elm$core$Dict$foldr,
		F3(
			function (key, value, keyList) {
				return A2($elm$core$List$cons, key, keyList);
			}),
		_List_Nil,
		dict);
};
var $elm$core$Set$toList = function (_v0) {
	var dict = _v0.a;
	return $elm$core$Dict$keys(dict);
};
var $elm$core$Basics$EQ = {$: 'EQ'};
var $elm$core$Basics$GT = {$: 'GT'};
var $elm$core$Basics$LT = {$: 'LT'};
var $elm$core$Result$Err = function (a) {
	return {$: 'Err', a: a};
};
var $elm$json$Json$Decode$Failure = F2(
	function (a, b) {
		return {$: 'Failure', a: a, b: b};
	});
var $elm$json$Json$Decode$Field = F2(
	function (a, b) {
		return {$: 'Field', a: a, b: b};
	});
var $elm$json$Json$Decode$Index = F2(
	function (a, b) {
		return {$: 'Index', a: a, b: b};
	});
var $elm$core$Result$Ok = function (a) {
	return {$: 'Ok', a: a};
};
var $elm$json$Json$Decode$OneOf = function (a) {
	return {$: 'OneOf', a: a};
};
var $elm$core$Basics$False = {$: 'False'};
var $elm$core$Basics$add = _Basics_add;
var $elm$core$Maybe$Just = function (a) {
	return {$: 'Just', a: a};
};
var $elm$core$Maybe$Nothing = {$: 'Nothing'};
var $elm$core$String$all = _String_all;
var $elm$core$Basics$and = _Basics_and;
var $elm$core$Basics$append = _Utils_append;
var $elm$json$Json$Encode$encode = _Json_encode;
var $elm$core$String$fromInt = _String_fromNumber;
var $elm$core$String$join = F2(
	function (sep, chunks) {
		return A2(
			_String_join,
			sep,
			_List_toArray(chunks));
	});
var $elm$core$String$split = F2(
	function (sep, string) {
		return _List_fromArray(
			A2(_String_split, sep, string));
	});
var $elm$json$Json$Decode$indent = function (str) {
	return A2(
		$elm$core$String$join,
		'\n    ',
		A2($elm$core$String$split, '\n', str));
};
var $elm$core$List$foldl = F3(
	function (func, acc, list) {
		foldl:
		while (true) {
			if (!list.b) {
				return acc;
			} else {
				var x = list.a;
				var xs = list.b;
				var $temp$func = func,
					$temp$acc = A2(func, x, acc),
					$temp$list = xs;
				func = $temp$func;
				acc = $temp$acc;
				list = $temp$list;
				continue foldl;
			}
		}
	});
var $elm$core$List$length = function (xs) {
	return A3(
		$elm$core$List$foldl,
		F2(
			function (_v0, i) {
				return i + 1;
			}),
		0,
		xs);
};
var $elm$core$List$map2 = _List_map2;
var $elm$core$Basics$le = _Utils_le;
var $elm$core$Basics$sub = _Basics_sub;
var $elm$core$List$rangeHelp = F3(
	function (lo, hi, list) {
		rangeHelp:
		while (true) {
			if (_Utils_cmp(lo, hi) < 1) {
				var $temp$lo = lo,
					$temp$hi = hi - 1,
					$temp$list = A2($elm$core$List$cons, hi, list);
				lo = $temp$lo;
				hi = $temp$hi;
				list = $temp$list;
				continue rangeHelp;
			} else {
				return list;
			}
		}
	});
var $elm$core$List$range = F2(
	function (lo, hi) {
		return A3($elm$core$List$rangeHelp, lo, hi, _List_Nil);
	});
var $elm$core$List$indexedMap = F2(
	function (f, xs) {
		return A3(
			$elm$core$List$map2,
			f,
			A2(
				$elm$core$List$range,
				0,
				$elm$core$List$length(xs) - 1),
			xs);
	});
var $elm$core$Char$toCode = _Char_toCode;
var $elm$core$Char$isLower = function (_char) {
	var code = $elm$core$Char$toCode(_char);
	return (97 <= code) && (code <= 122);
};
var $elm$core$Char$isUpper = function (_char) {
	var code = $elm$core$Char$toCode(_char);
	return (code <= 90) && (65 <= code);
};
var $elm$core$Basics$or = _Basics_or;
var $elm$core$Char$isAlpha = function (_char) {
	return $elm$core$Char$isLower(_char) || $elm$core$Char$isUpper(_char);
};
var $elm$core$Char$isDigit = function (_char) {
	var code = $elm$core$Char$toCode(_char);
	return (code <= 57) && (48 <= code);
};
var $elm$core$Char$isAlphaNum = function (_char) {
	return $elm$core$Char$isLower(_char) || ($elm$core$Char$isUpper(_char) || $elm$core$Char$isDigit(_char));
};
var $elm$core$List$reverse = function (list) {
	return A3($elm$core$List$foldl, $elm$core$List$cons, _List_Nil, list);
};
var $elm$core$String$uncons = _String_uncons;
var $elm$json$Json$Decode$errorOneOf = F2(
	function (i, error) {
		return '\n\n(' + ($elm$core$String$fromInt(i + 1) + (') ' + $elm$json$Json$Decode$indent(
			$elm$json$Json$Decode$errorToString(error))));
	});
var $elm$json$Json$Decode$errorToString = function (error) {
	return A2($elm$json$Json$Decode$errorToStringHelp, error, _List_Nil);
};
var $elm$json$Json$Decode$errorToStringHelp = F2(
	function (error, context) {
		errorToStringHelp:
		while (true) {
			switch (error.$) {
				case 'Field':
					var f = error.a;
					var err = error.b;
					var isSimple = function () {
						var _v1 = $elm$core$String$uncons(f);
						if (_v1.$ === 'Nothing') {
							return false;
						} else {
							var _v2 = _v1.a;
							var _char = _v2.a;
							var rest = _v2.b;
							return $elm$core$Char$isAlpha(_char) && A2($elm$core$String$all, $elm$core$Char$isAlphaNum, rest);
						}
					}();
					var fieldName = isSimple ? ('.' + f) : ('[\'' + (f + '\']'));
					var $temp$error = err,
						$temp$context = A2($elm$core$List$cons, fieldName, context);
					error = $temp$error;
					context = $temp$context;
					continue errorToStringHelp;
				case 'Index':
					var i = error.a;
					var err = error.b;
					var indexName = '[' + ($elm$core$String$fromInt(i) + ']');
					var $temp$error = err,
						$temp$context = A2($elm$core$List$cons, indexName, context);
					error = $temp$error;
					context = $temp$context;
					continue errorToStringHelp;
				case 'OneOf':
					var errors = error.a;
					if (!errors.b) {
						return 'Ran into a Json.Decode.oneOf with no possibilities' + function () {
							if (!context.b) {
								return '!';
							} else {
								return ' at json' + A2(
									$elm$core$String$join,
									'',
									$elm$core$List$reverse(context));
							}
						}();
					} else {
						if (!errors.b.b) {
							var err = errors.a;
							var $temp$error = err,
								$temp$context = context;
							error = $temp$error;
							context = $temp$context;
							continue errorToStringHelp;
						} else {
							var starter = function () {
								if (!context.b) {
									return 'Json.Decode.oneOf';
								} else {
									return 'The Json.Decode.oneOf at json' + A2(
										$elm$core$String$join,
										'',
										$elm$core$List$reverse(context));
								}
							}();
							var introduction = starter + (' failed in the following ' + ($elm$core$String$fromInt(
								$elm$core$List$length(errors)) + ' ways:'));
							return A2(
								$elm$core$String$join,
								'\n\n',
								A2(
									$elm$core$List$cons,
									introduction,
									A2($elm$core$List$indexedMap, $elm$json$Json$Decode$errorOneOf, errors)));
						}
					}
				default:
					var msg = error.a;
					var json = error.b;
					var introduction = function () {
						if (!context.b) {
							return 'Problem with the given value:\n\n';
						} else {
							return 'Problem with the value at json' + (A2(
								$elm$core$String$join,
								'',
								$elm$core$List$reverse(context)) + ':\n\n    ');
						}
					}();
					return introduction + ($elm$json$Json$Decode$indent(
						A2($elm$json$Json$Encode$encode, 4, json)) + ('\n\n' + msg));
			}
		}
	});
var $elm$core$Array$branchFactor = 32;
var $elm$core$Array$Array_elm_builtin = F4(
	function (a, b, c, d) {
		return {$: 'Array_elm_builtin', a: a, b: b, c: c, d: d};
	});
var $elm$core$Elm$JsArray$empty = _JsArray_empty;
var $elm$core$Basics$ceiling = _Basics_ceiling;
var $elm$core$Basics$fdiv = _Basics_fdiv;
var $elm$core$Basics$logBase = F2(
	function (base, number) {
		return _Basics_log(number) / _Basics_log(base);
	});
var $elm$core$Basics$toFloat = _Basics_toFloat;
var $elm$core$Array$shiftStep = $elm$core$Basics$ceiling(
	A2($elm$core$Basics$logBase, 2, $elm$core$Array$branchFactor));
var $elm$core$Array$empty = A4($elm$core$Array$Array_elm_builtin, 0, $elm$core$Array$shiftStep, $elm$core$Elm$JsArray$empty, $elm$core$Elm$JsArray$empty);
var $elm$core$Elm$JsArray$initialize = _JsArray_initialize;
var $elm$core$Array$Leaf = function (a) {
	return {$: 'Leaf', a: a};
};
var $elm$core$Basics$apL = F2(
	function (f, x) {
		return f(x);
	});
var $elm$core$Basics$apR = F2(
	function (x, f) {
		return f(x);
	});
var $elm$core$Basics$eq = _Utils_equal;
var $elm$core$Basics$floor = _Basics_floor;
var $elm$core$Elm$JsArray$length = _JsArray_length;
var $elm$core$Basics$gt = _Utils_gt;
var $elm$core$Basics$max = F2(
	function (x, y) {
		return (_Utils_cmp(x, y) > 0) ? x : y;
	});
var $elm$core$Basics$mul = _Basics_mul;
var $elm$core$Array$SubTree = function (a) {
	return {$: 'SubTree', a: a};
};
var $elm$core$Elm$JsArray$initializeFromList = _JsArray_initializeFromList;
var $elm$core$Array$compressNodes = F2(
	function (nodes, acc) {
		compressNodes:
		while (true) {
			var _v0 = A2($elm$core$Elm$JsArray$initializeFromList, $elm$core$Array$branchFactor, nodes);
			var node = _v0.a;
			var remainingNodes = _v0.b;
			var newAcc = A2(
				$elm$core$List$cons,
				$elm$core$Array$SubTree(node),
				acc);
			if (!remainingNodes.b) {
				return $elm$core$List$reverse(newAcc);
			} else {
				var $temp$nodes = remainingNodes,
					$temp$acc = newAcc;
				nodes = $temp$nodes;
				acc = $temp$acc;
				continue compressNodes;
			}
		}
	});
var $elm$core$Tuple$first = function (_v0) {
	var x = _v0.a;
	return x;
};
var $elm$core$Array$treeFromBuilder = F2(
	function (nodeList, nodeListSize) {
		treeFromBuilder:
		while (true) {
			var newNodeSize = $elm$core$Basics$ceiling(nodeListSize / $elm$core$Array$branchFactor);
			if (newNodeSize === 1) {
				return A2($elm$core$Elm$JsArray$initializeFromList, $elm$core$Array$branchFactor, nodeList).a;
			} else {
				var $temp$nodeList = A2($elm$core$Array$compressNodes, nodeList, _List_Nil),
					$temp$nodeListSize = newNodeSize;
				nodeList = $temp$nodeList;
				nodeListSize = $temp$nodeListSize;
				continue treeFromBuilder;
			}
		}
	});
var $elm$core$Array$builderToArray = F2(
	function (reverseNodeList, builder) {
		if (!builder.nodeListSize) {
			return A4(
				$elm$core$Array$Array_elm_builtin,
				$elm$core$Elm$JsArray$length(builder.tail),
				$elm$core$Array$shiftStep,
				$elm$core$Elm$JsArray$empty,
				builder.tail);
		} else {
			var treeLen = builder.nodeListSize * $elm$core$Array$branchFactor;
			var depth = $elm$core$Basics$floor(
				A2($elm$core$Basics$logBase, $elm$core$Array$branchFactor, treeLen - 1));
			var correctNodeList = reverseNodeList ? $elm$core$List$reverse(builder.nodeList) : builder.nodeList;
			var tree = A2($elm$core$Array$treeFromBuilder, correctNodeList, builder.nodeListSize);
			return A4(
				$elm$core$Array$Array_elm_builtin,
				$elm$core$Elm$JsArray$length(builder.tail) + treeLen,
				A2($elm$core$Basics$max, 5, depth * $elm$core$Array$shiftStep),
				tree,
				builder.tail);
		}
	});
var $elm$core$Basics$idiv = _Basics_idiv;
var $elm$core$Basics$lt = _Utils_lt;
var $elm$core$Array$initializeHelp = F5(
	function (fn, fromIndex, len, nodeList, tail) {
		initializeHelp:
		while (true) {
			if (fromIndex < 0) {
				return A2(
					$elm$core$Array$builderToArray,
					false,
					{nodeList: nodeList, nodeListSize: (len / $elm$core$Array$branchFactor) | 0, tail: tail});
			} else {
				var leaf = $elm$core$Array$Leaf(
					A3($elm$core$Elm$JsArray$initialize, $elm$core$Array$branchFactor, fromIndex, fn));
				var $temp$fn = fn,
					$temp$fromIndex = fromIndex - $elm$core$Array$branchFactor,
					$temp$len = len,
					$temp$nodeList = A2($elm$core$List$cons, leaf, nodeList),
					$temp$tail = tail;
				fn = $temp$fn;
				fromIndex = $temp$fromIndex;
				len = $temp$len;
				nodeList = $temp$nodeList;
				tail = $temp$tail;
				continue initializeHelp;
			}
		}
	});
var $elm$core$Basics$remainderBy = _Basics_remainderBy;
var $elm$core$Array$initialize = F2(
	function (len, fn) {
		if (len <= 0) {
			return $elm$core$Array$empty;
		} else {
			var tailLen = len % $elm$core$Array$branchFactor;
			var tail = A3($elm$core$Elm$JsArray$initialize, tailLen, len - tailLen, fn);
			var initialFromIndex = (len - tailLen) - $elm$core$Array$branchFactor;
			return A5($elm$core$Array$initializeHelp, fn, initialFromIndex, len, _List_Nil, tail);
		}
	});
var $elm$core$Basics$True = {$: 'True'};
var $elm$core$Result$isOk = function (result) {
	if (result.$ === 'Ok') {
		return true;
	} else {
		return false;
	}
};
var $elm$json$Json$Decode$andThen = _Json_andThen;
var $elm$json$Json$Decode$map = _Json_map1;
var $elm$json$Json$Decode$map2 = _Json_map2;
var $elm$json$Json$Decode$succeed = _Json_succeed;
var $elm$virtual_dom$VirtualDom$toHandlerInt = function (handler) {
	switch (handler.$) {
		case 'Normal':
			return 0;
		case 'MayStopPropagation':
			return 1;
		case 'MayPreventDefault':
			return 2;
		default:
			return 3;
	}
};
var $elm$browser$Debugger$Expando$ArraySeq = {$: 'ArraySeq'};
var $elm$browser$Debugger$Overlay$BlockMost = {$: 'BlockMost'};
var $elm$browser$Debugger$Overlay$BlockNone = {$: 'BlockNone'};
var $elm$browser$Debugger$Expando$Constructor = F3(
	function (a, b, c) {
		return {$: 'Constructor', a: a, b: b, c: c};
	});
var $elm$browser$Debugger$Expando$Dictionary = F2(
	function (a, b) {
		return {$: 'Dictionary', a: a, b: b};
	});
var $elm$browser$Debugger$Main$Down = {$: 'Down'};
var $elm$browser$Debugger$Expando$ListSeq = {$: 'ListSeq'};
var $elm$browser$Debugger$Main$NoOp = {$: 'NoOp'};
var $elm$browser$Debugger$Expando$Primitive = function (a) {
	return {$: 'Primitive', a: a};
};
var $elm$browser$Debugger$Expando$Record = F2(
	function (a, b) {
		return {$: 'Record', a: a, b: b};
	});
var $elm$browser$Debugger$Expando$S = function (a) {
	return {$: 'S', a: a};
};
var $elm$browser$Debugger$Expando$Sequence = F3(
	function (a, b, c) {
		return {$: 'Sequence', a: a, b: b, c: c};
	});
var $elm$browser$Debugger$Expando$SetSeq = {$: 'SetSeq'};
var $elm$browser$Debugger$Main$Up = {$: 'Up'};
var $elm$browser$Debugger$Main$UserMsg = function (a) {
	return {$: 'UserMsg', a: a};
};
var $elm$browser$Debugger$Main$Export = {$: 'Export'};
var $elm$browser$Debugger$Main$Import = {$: 'Import'};
var $elm$browser$Debugger$Main$Open = {$: 'Open'};
var $elm$browser$Debugger$Main$OverlayMsg = function (a) {
	return {$: 'OverlayMsg', a: a};
};
var $elm$browser$Debugger$Main$Resume = {$: 'Resume'};
var $elm$browser$Debugger$Main$isPaused = function (state) {
	if (state.$ === 'Running') {
		return false;
	} else {
		return true;
	}
};
var $elm$browser$Debugger$History$size = function (history) {
	return history.numMessages;
};
var $elm$browser$Debugger$Overlay$Accept = function (a) {
	return {$: 'Accept', a: a};
};
var $elm$browser$Debugger$Overlay$Choose = F2(
	function (a, b) {
		return {$: 'Choose', a: a, b: b};
	});
var $elm$html$Html$div = _VirtualDom_node('div');
var $elm$json$Json$Encode$string = _Json_wrap;
var $elm$html$Html$Attributes$stringProperty = F2(
	function (key, string) {
		return A2(
			_VirtualDom_property,
			key,
			$elm$json$Json$Encode$string(string));
	});
var $elm$html$Html$Attributes$id = $elm$html$Html$Attributes$stringProperty('id');
var $elm$virtual_dom$VirtualDom$Normal = function (a) {
	return {$: 'Normal', a: a};
};
var $elm$virtual_dom$VirtualDom$on = _VirtualDom_on;
var $elm$html$Html$Events$on = F2(
	function (event, decoder) {
		return A2(
			$elm$virtual_dom$VirtualDom$on,
			event,
			$elm$virtual_dom$VirtualDom$Normal(decoder));
	});
var $elm$html$Html$Events$onClick = function (msg) {
	return A2(
		$elm$html$Html$Events$on,
		'click',
		$elm$json$Json$Decode$succeed(msg));
};
var $elm$html$Html$span = _VirtualDom_node('span');
var $elm$virtual_dom$VirtualDom$style = _VirtualDom_style;
var $elm$html$Html$Attributes$style = $elm$virtual_dom$VirtualDom$style;
var $elm$virtual_dom$VirtualDom$text = _VirtualDom_text;
var $elm$html$Html$text = $elm$virtual_dom$VirtualDom$text;
var $elm$html$Html$a = _VirtualDom_node('a');
var $elm$browser$Debugger$Overlay$goodNews1 = '\nThe good news is that having values like this in your message type is not\nso great in the long run. You are better off using simpler data, like\n';
var $elm$browser$Debugger$Overlay$goodNews2 = '\nfunction can pattern match on that data and call whatever functions, JSON\ndecoders, etc. you need. This makes the code much more explicit and easy to\nfollow for other readers (or you in a few months!)\n';
var $elm$html$Html$Attributes$href = function (url) {
	return A2(
		$elm$html$Html$Attributes$stringProperty,
		'href',
		_VirtualDom_noJavaScriptUri(url));
};
var $elm$core$List$foldrHelper = F4(
	function (fn, acc, ctr, ls) {
		if (!ls.b) {
			return acc;
		} else {
			var a = ls.a;
			var r1 = ls.b;
			if (!r1.b) {
				return A2(fn, a, acc);
			} else {
				var b = r1.a;
				var r2 = r1.b;
				if (!r2.b) {
					return A2(
						fn,
						a,
						A2(fn, b, acc));
				} else {
					var c = r2.a;
					var r3 = r2.b;
					if (!r3.b) {
						return A2(
							fn,
							a,
							A2(
								fn,
								b,
								A2(fn, c, acc)));
					} else {
						var d = r3.a;
						var r4 = r3.b;
						var res = (ctr > 500) ? A3(
							$elm$core$List$foldl,
							fn,
							acc,
							$elm$core$List$reverse(r4)) : A4($elm$core$List$foldrHelper, fn, acc, ctr + 1, r4);
						return A2(
							fn,
							a,
							A2(
								fn,
								b,
								A2(
									fn,
									c,
									A2(fn, d, res))));
					}
				}
			}
		}
	});
var $elm$core$List$foldr = F3(
	function (fn, acc, ls) {
		return A4($elm$core$List$foldrHelper, fn, acc, 0, ls);
	});
var $elm$core$List$map = F2(
	function (f, xs) {
		return A3(
			$elm$core$List$foldr,
			F2(
				function (x, acc) {
					return A2(
						$elm$core$List$cons,
						f(x),
						acc);
				}),
			_List_Nil,
			xs);
	});
var $elm$html$Html$p = _VirtualDom_node('p');
var $elm$html$Html$ul = _VirtualDom_node('ul');
var $elm$html$Html$code = _VirtualDom_node('code');
var $elm$browser$Debugger$Overlay$viewCode = function (name) {
	return A2(
		$elm$html$Html$code,
		_List_Nil,
		_List_fromArray(
			[
				$elm$html$Html$text(name)
			]));
};
var $elm$browser$Debugger$Overlay$addCommas = function (items) {
	if (!items.b) {
		return '';
	} else {
		if (!items.b.b) {
			var item = items.a;
			return item;
		} else {
			if (!items.b.b.b) {
				var item1 = items.a;
				var _v1 = items.b;
				var item2 = _v1.a;
				return item1 + (' and ' + item2);
			} else {
				var lastItem = items.a;
				var otherItems = items.b;
				return A2(
					$elm$core$String$join,
					', ',
					_Utils_ap(
						otherItems,
						_List_fromArray(
							[' and ' + lastItem])));
			}
		}
	}
};
var $elm$html$Html$li = _VirtualDom_node('li');
var $elm$browser$Debugger$Overlay$problemToString = function (problem) {
	switch (problem.$) {
		case 'Function':
			return 'functions';
		case 'Decoder':
			return 'JSON decoders';
		case 'Task':
			return 'tasks';
		case 'Process':
			return 'processes';
		case 'Socket':
			return 'web sockets';
		case 'Request':
			return 'HTTP requests';
		case 'Program':
			return 'programs';
		default:
			return 'virtual DOM values';
	}
};
var $elm$browser$Debugger$Overlay$viewProblemType = function (_v0) {
	var name = _v0.name;
	var problems = _v0.problems;
	return A2(
		$elm$html$Html$li,
		_List_Nil,
		_List_fromArray(
			[
				$elm$browser$Debugger$Overlay$viewCode(name),
				$elm$html$Html$text(
				' can contain ' + ($elm$browser$Debugger$Overlay$addCommas(
					A2($elm$core$List$map, $elm$browser$Debugger$Overlay$problemToString, problems)) + '.'))
			]));
};
var $elm$browser$Debugger$Overlay$viewBadMetadata = function (_v0) {
	var message = _v0.message;
	var problems = _v0.problems;
	return _List_fromArray(
		[
			A2(
			$elm$html$Html$p,
			_List_Nil,
			_List_fromArray(
				[
					$elm$html$Html$text('The '),
					$elm$browser$Debugger$Overlay$viewCode(message),
					$elm$html$Html$text(' type of your program cannot be reliably serialized for history files.')
				])),
			A2(
			$elm$html$Html$p,
			_List_Nil,
			_List_fromArray(
				[
					$elm$html$Html$text('Functions cannot be serialized, nor can values that contain functions. This is a problem in these places:')
				])),
			A2(
			$elm$html$Html$ul,
			_List_Nil,
			A2($elm$core$List$map, $elm$browser$Debugger$Overlay$viewProblemType, problems)),
			A2(
			$elm$html$Html$p,
			_List_Nil,
			_List_fromArray(
				[
					$elm$html$Html$text($elm$browser$Debugger$Overlay$goodNews1),
					A2(
					$elm$html$Html$a,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$href('https://guide.elm-lang.org/types/custom_types.html')
						]),
					_List_fromArray(
						[
							$elm$html$Html$text('custom types')
						])),
					$elm$html$Html$text(', in your messages. From there, your '),
					$elm$browser$Debugger$Overlay$viewCode('update'),
					$elm$html$Html$text($elm$browser$Debugger$Overlay$goodNews2)
				]))
		]);
};
var $elm$virtual_dom$VirtualDom$map = _VirtualDom_map;
var $elm$html$Html$map = $elm$virtual_dom$VirtualDom$map;
var $elm$browser$Debugger$Overlay$Cancel = {$: 'Cancel'};
var $elm$browser$Debugger$Overlay$Proceed = {$: 'Proceed'};
var $elm$html$Html$button = _VirtualDom_node('button');
var $elm$browser$Debugger$Overlay$viewButtons = function (buttons) {
	var btn = F2(
		function (msg, string) {
			return A2(
				$elm$html$Html$button,
				_List_fromArray(
					[
						A2($elm$html$Html$Attributes$style, 'margin-right', '20px'),
						$elm$html$Html$Events$onClick(msg)
					]),
				_List_fromArray(
					[
						$elm$html$Html$text(string)
					]));
		});
	var buttonNodes = function () {
		if (buttons.$ === 'Accept') {
			var proceed = buttons.a;
			return _List_fromArray(
				[
					A2(btn, $elm$browser$Debugger$Overlay$Proceed, proceed)
				]);
		} else {
			var cancel = buttons.a;
			var proceed = buttons.b;
			return _List_fromArray(
				[
					A2(btn, $elm$browser$Debugger$Overlay$Cancel, cancel),
					A2(btn, $elm$browser$Debugger$Overlay$Proceed, proceed)
				]);
		}
	}();
	return A2(
		$elm$html$Html$div,
		_List_fromArray(
			[
				A2($elm$html$Html$Attributes$style, 'height', '60px'),
				A2($elm$html$Html$Attributes$style, 'line-height', '60px'),
				A2($elm$html$Html$Attributes$style, 'text-align', 'right'),
				A2($elm$html$Html$Attributes$style, 'background-color', 'rgb(50, 50, 50)')
			]),
		buttonNodes);
};
var $elm$browser$Debugger$Overlay$viewMessage = F4(
	function (config, title, details, buttons) {
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$id('elm-debugger-overlay'),
					A2($elm$html$Html$Attributes$style, 'position', 'fixed'),
					A2($elm$html$Html$Attributes$style, 'top', '0'),
					A2($elm$html$Html$Attributes$style, 'left', '0'),
					A2($elm$html$Html$Attributes$style, 'width', '100vw'),
					A2($elm$html$Html$Attributes$style, 'height', '100vh'),
					A2($elm$html$Html$Attributes$style, 'color', 'white'),
					A2($elm$html$Html$Attributes$style, 'pointer-events', 'none'),
					A2($elm$html$Html$Attributes$style, 'font-family', '\'Trebuchet MS\', \'Lucida Grande\', \'Bitstream Vera Sans\', \'Helvetica Neue\', sans-serif'),
					A2($elm$html$Html$Attributes$style, 'z-index', '2147483647')
				]),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							A2($elm$html$Html$Attributes$style, 'position', 'absolute'),
							A2($elm$html$Html$Attributes$style, 'width', '600px'),
							A2($elm$html$Html$Attributes$style, 'height', '100vh'),
							A2($elm$html$Html$Attributes$style, 'padding-left', 'calc(50% - 300px)'),
							A2($elm$html$Html$Attributes$style, 'padding-right', 'calc(50% - 300px)'),
							A2($elm$html$Html$Attributes$style, 'background-color', 'rgba(200, 200, 200, 0.7)'),
							A2($elm$html$Html$Attributes$style, 'pointer-events', 'auto')
						]),
					_List_fromArray(
						[
							A2(
							$elm$html$Html$div,
							_List_fromArray(
								[
									A2($elm$html$Html$Attributes$style, 'font-size', '36px'),
									A2($elm$html$Html$Attributes$style, 'height', '80px'),
									A2($elm$html$Html$Attributes$style, 'background-color', 'rgb(50, 50, 50)'),
									A2($elm$html$Html$Attributes$style, 'padding-left', '22px'),
									A2($elm$html$Html$Attributes$style, 'vertical-align', 'middle'),
									A2($elm$html$Html$Attributes$style, 'line-height', '80px')
								]),
							_List_fromArray(
								[
									$elm$html$Html$text(title)
								])),
							A2(
							$elm$html$Html$div,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$id('elm-debugger-details'),
									A2($elm$html$Html$Attributes$style, 'padding', ' 8px 20px'),
									A2($elm$html$Html$Attributes$style, 'overflow-y', 'auto'),
									A2($elm$html$Html$Attributes$style, 'max-height', 'calc(100vh - 156px)'),
									A2($elm$html$Html$Attributes$style, 'background-color', 'rgb(61, 61, 61)')
								]),
							details),
							A2(
							$elm$html$Html$map,
							config.wrap,
							$elm$browser$Debugger$Overlay$viewButtons(buttons))
						]))
				]));
	});
var $elm$virtual_dom$VirtualDom$attribute = F2(
	function (key, value) {
		return A2(
			_VirtualDom_attribute,
			_VirtualDom_noOnOrFormAction(key),
			_VirtualDom_noJavaScriptOrHtmlUri(value));
	});
var $elm$core$Basics$negate = function (n) {
	return -n;
};
var $elm$virtual_dom$VirtualDom$nodeNS = function (tag) {
	return _VirtualDom_nodeNS(
		_VirtualDom_noScript(tag));
};
var $elm$core$String$fromFloat = _String_fromNumber;
var $elm$browser$Debugger$Overlay$viewShape = F4(
	function (x, y, angle, coordinates) {
		return A4(
			$elm$virtual_dom$VirtualDom$nodeNS,
			'http://www.w3.org/2000/svg',
			'polygon',
			_List_fromArray(
				[
					A2($elm$virtual_dom$VirtualDom$attribute, 'points', coordinates),
					A2(
					$elm$virtual_dom$VirtualDom$attribute,
					'transform',
					'translate(' + ($elm$core$String$fromFloat(x) + (' ' + ($elm$core$String$fromFloat(y) + (') rotate(' + ($elm$core$String$fromFloat(-angle) + ')'))))))
				]),
			_List_Nil);
	});
var $elm$browser$Debugger$Overlay$elmLogo = A4(
	$elm$virtual_dom$VirtualDom$nodeNS,
	'http://www.w3.org/2000/svg',
	'svg',
	_List_fromArray(
		[
			A2($elm$virtual_dom$VirtualDom$attribute, 'viewBox', '-300 -300 600 600'),
			A2($elm$virtual_dom$VirtualDom$attribute, 'xmlns', 'http://www.w3.org/2000/svg'),
			A2($elm$virtual_dom$VirtualDom$attribute, 'fill', 'currentColor'),
			A2($elm$virtual_dom$VirtualDom$attribute, 'width', '24px'),
			A2($elm$virtual_dom$VirtualDom$attribute, 'height', '24px')
		]),
	_List_fromArray(
		[
			A4(
			$elm$virtual_dom$VirtualDom$nodeNS,
			'http://www.w3.org/2000/svg',
			'g',
			_List_fromArray(
				[
					A2($elm$virtual_dom$VirtualDom$attribute, 'transform', 'scale(1 -1)')
				]),
			_List_fromArray(
				[
					A4($elm$browser$Debugger$Overlay$viewShape, 0, -210, 0, '-280,-90 0,190 280,-90'),
					A4($elm$browser$Debugger$Overlay$viewShape, -210, 0, 90, '-280,-90 0,190 280,-90'),
					A4($elm$browser$Debugger$Overlay$viewShape, 207, 207, 45, '-198,-66 0,132 198,-66'),
					A4($elm$browser$Debugger$Overlay$viewShape, 150, 0, 0, '-130,0 0,-130 130,0 0,130'),
					A4($elm$browser$Debugger$Overlay$viewShape, -89, 239, 0, '-191,61 69,61 191,-61 -69,-61'),
					A4($elm$browser$Debugger$Overlay$viewShape, 0, 106, 180, '-130,-44 0,86  130,-44'),
					A4($elm$browser$Debugger$Overlay$viewShape, 256, -150, 270, '-130,-44 0,86  130,-44')
				]))
		]));
var $elm$core$String$length = _String_length;
var $elm$browser$Debugger$Overlay$viewMiniControls = F2(
	function (config, numMsgs) {
		var string = $elm$core$String$fromInt(numMsgs);
		var width = $elm$core$String$fromInt(
			2 + $elm$core$String$length(string));
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					A2($elm$html$Html$Attributes$style, 'position', 'fixed'),
					A2($elm$html$Html$Attributes$style, 'bottom', '2em'),
					A2($elm$html$Html$Attributes$style, 'right', '2em'),
					A2($elm$html$Html$Attributes$style, 'width', 'calc(42px + ' + (width + 'ch)')),
					A2($elm$html$Html$Attributes$style, 'height', '36px'),
					A2($elm$html$Html$Attributes$style, 'background-color', '#1293D8'),
					A2($elm$html$Html$Attributes$style, 'color', 'white'),
					A2($elm$html$Html$Attributes$style, 'font-family', 'monospace'),
					A2($elm$html$Html$Attributes$style, 'pointer-events', 'auto'),
					A2($elm$html$Html$Attributes$style, 'z-index', '2147483647'),
					A2($elm$html$Html$Attributes$style, 'display', 'flex'),
					A2($elm$html$Html$Attributes$style, 'justify-content', 'center'),
					A2($elm$html$Html$Attributes$style, 'align-items', 'center'),
					A2($elm$html$Html$Attributes$style, 'cursor', 'pointer'),
					$elm$html$Html$Events$onClick(config.open)
				]),
			_List_fromArray(
				[
					$elm$browser$Debugger$Overlay$elmLogo,
					A2(
					$elm$html$Html$span,
					_List_fromArray(
						[
							A2($elm$html$Html$Attributes$style, 'padding-left', 'calc(1ch + 6px)'),
							A2($elm$html$Html$Attributes$style, 'padding-right', '1ch')
						]),
					_List_fromArray(
						[
							$elm$html$Html$text(string)
						]))
				]));
	});
var $elm$browser$Debugger$Overlay$explanationBad = '\nThe messages in this history do not match the messages handled by your\nprogram. I noticed changes in the following types:\n';
var $elm$browser$Debugger$Overlay$explanationRisky = '\nThis history seems old. It will work with this program, but some\nmessages have been added since the history was created:\n';
var $elm$core$List$intersperse = F2(
	function (sep, xs) {
		if (!xs.b) {
			return _List_Nil;
		} else {
			var hd = xs.a;
			var tl = xs.b;
			var step = F2(
				function (x, rest) {
					return A2(
						$elm$core$List$cons,
						sep,
						A2($elm$core$List$cons, x, rest));
				});
			var spersed = A3($elm$core$List$foldr, step, _List_Nil, tl);
			return A2($elm$core$List$cons, hd, spersed);
		}
	});
var $elm$browser$Debugger$Overlay$viewMention = F2(
	function (tags, verbed) {
		var _v0 = A2(
			$elm$core$List$map,
			$elm$browser$Debugger$Overlay$viewCode,
			$elm$core$List$reverse(tags));
		if (!_v0.b) {
			return $elm$html$Html$text('');
		} else {
			if (!_v0.b.b) {
				var tag = _v0.a;
				return A2(
					$elm$html$Html$li,
					_List_Nil,
					_List_fromArray(
						[
							$elm$html$Html$text(verbed),
							tag,
							$elm$html$Html$text('.')
						]));
			} else {
				if (!_v0.b.b.b) {
					var tag2 = _v0.a;
					var _v1 = _v0.b;
					var tag1 = _v1.a;
					return A2(
						$elm$html$Html$li,
						_List_Nil,
						_List_fromArray(
							[
								$elm$html$Html$text(verbed),
								tag1,
								$elm$html$Html$text(' and '),
								tag2,
								$elm$html$Html$text('.')
							]));
				} else {
					var lastTag = _v0.a;
					var otherTags = _v0.b;
					return A2(
						$elm$html$Html$li,
						_List_Nil,
						A2(
							$elm$core$List$cons,
							$elm$html$Html$text(verbed),
							_Utils_ap(
								A2(
									$elm$core$List$intersperse,
									$elm$html$Html$text(', '),
									$elm$core$List$reverse(otherTags)),
								_List_fromArray(
									[
										$elm$html$Html$text(', and '),
										lastTag,
										$elm$html$Html$text('.')
									]))));
				}
			}
		}
	});
var $elm$browser$Debugger$Overlay$viewChange = function (change) {
	return A2(
		$elm$html$Html$li,
		_List_fromArray(
			[
				A2($elm$html$Html$Attributes$style, 'margin', '8px 0')
			]),
		function () {
			if (change.$ === 'AliasChange') {
				var name = change.a;
				return _List_fromArray(
					[
						A2(
						$elm$html$Html$span,
						_List_fromArray(
							[
								A2($elm$html$Html$Attributes$style, 'font-size', '1.5em')
							]),
						_List_fromArray(
							[
								$elm$browser$Debugger$Overlay$viewCode(name)
							]))
					]);
			} else {
				var name = change.a;
				var removed = change.b.removed;
				var changed = change.b.changed;
				var added = change.b.added;
				var argsMatch = change.b.argsMatch;
				return _List_fromArray(
					[
						A2(
						$elm$html$Html$span,
						_List_fromArray(
							[
								A2($elm$html$Html$Attributes$style, 'font-size', '1.5em')
							]),
						_List_fromArray(
							[
								$elm$browser$Debugger$Overlay$viewCode(name)
							])),
						A2(
						$elm$html$Html$ul,
						_List_fromArray(
							[
								A2($elm$html$Html$Attributes$style, 'list-style-type', 'disc'),
								A2($elm$html$Html$Attributes$style, 'padding-left', '2em')
							]),
						_List_fromArray(
							[
								A2($elm$browser$Debugger$Overlay$viewMention, removed, 'Removed '),
								A2($elm$browser$Debugger$Overlay$viewMention, changed, 'Changed '),
								A2($elm$browser$Debugger$Overlay$viewMention, added, 'Added ')
							])),
						argsMatch ? $elm$html$Html$text('') : $elm$html$Html$text('This may be due to the fact that the type variable names changed.')
					]);
			}
		}());
};
var $elm$browser$Debugger$Overlay$viewReport = F2(
	function (isBad, report) {
		switch (report.$) {
			case 'CorruptHistory':
				return _List_fromArray(
					[
						$elm$html$Html$text('Looks like this history file is corrupt. I cannot understand it.')
					]);
			case 'VersionChanged':
				var old = report.a;
				var _new = report.b;
				return _List_fromArray(
					[
						$elm$html$Html$text('This history was created with Elm ' + (old + (', but you are using Elm ' + (_new + ' right now.'))))
					]);
			case 'MessageChanged':
				var old = report.a;
				var _new = report.b;
				return _List_fromArray(
					[
						$elm$html$Html$text('To import some other history, the overall message type must' + ' be the same. The old history has '),
						$elm$browser$Debugger$Overlay$viewCode(old),
						$elm$html$Html$text(' messages, but the new program works with '),
						$elm$browser$Debugger$Overlay$viewCode(_new),
						$elm$html$Html$text(' messages.')
					]);
			default:
				var changes = report.a;
				return _List_fromArray(
					[
						A2(
						$elm$html$Html$p,
						_List_Nil,
						_List_fromArray(
							[
								$elm$html$Html$text(
								isBad ? $elm$browser$Debugger$Overlay$explanationBad : $elm$browser$Debugger$Overlay$explanationRisky)
							])),
						A2(
						$elm$html$Html$ul,
						_List_fromArray(
							[
								A2($elm$html$Html$Attributes$style, 'list-style-type', 'none'),
								A2($elm$html$Html$Attributes$style, 'padding-left', '20px')
							]),
						A2($elm$core$List$map, $elm$browser$Debugger$Overlay$viewChange, changes))
					]);
		}
	});
var $elm$browser$Debugger$Overlay$view = F5(
	function (config, isPaused, isOpen, numMsgs, state) {
		switch (state.$) {
			case 'None':
				return isOpen ? $elm$html$Html$text('') : (isPaused ? A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$id('elm-debugger-overlay'),
							A2($elm$html$Html$Attributes$style, 'position', 'fixed'),
							A2($elm$html$Html$Attributes$style, 'top', '0'),
							A2($elm$html$Html$Attributes$style, 'left', '0'),
							A2($elm$html$Html$Attributes$style, 'width', '100vw'),
							A2($elm$html$Html$Attributes$style, 'height', '100vh'),
							A2($elm$html$Html$Attributes$style, 'cursor', 'pointer'),
							A2($elm$html$Html$Attributes$style, 'display', 'flex'),
							A2($elm$html$Html$Attributes$style, 'align-items', 'center'),
							A2($elm$html$Html$Attributes$style, 'justify-content', 'center'),
							A2($elm$html$Html$Attributes$style, 'pointer-events', 'auto'),
							A2($elm$html$Html$Attributes$style, 'background-color', 'rgba(200, 200, 200, 0.7)'),
							A2($elm$html$Html$Attributes$style, 'color', 'white'),
							A2($elm$html$Html$Attributes$style, 'font-family', '\'Trebuchet MS\', \'Lucida Grande\', \'Bitstream Vera Sans\', \'Helvetica Neue\', sans-serif'),
							A2($elm$html$Html$Attributes$style, 'z-index', '2147483646'),
							$elm$html$Html$Events$onClick(config.resume)
						]),
					_List_fromArray(
						[
							A2(
							$elm$html$Html$span,
							_List_fromArray(
								[
									A2($elm$html$Html$Attributes$style, 'font-size', '80px')
								]),
							_List_fromArray(
								[
									$elm$html$Html$text('Click to Resume')
								])),
							A2($elm$browser$Debugger$Overlay$viewMiniControls, config, numMsgs)
						])) : A2($elm$browser$Debugger$Overlay$viewMiniControls, config, numMsgs));
			case 'BadMetadata':
				var badMetadata_ = state.a;
				return A4(
					$elm$browser$Debugger$Overlay$viewMessage,
					config,
					'Cannot use Import or Export',
					$elm$browser$Debugger$Overlay$viewBadMetadata(badMetadata_),
					$elm$browser$Debugger$Overlay$Accept('Ok'));
			case 'BadImport':
				var report = state.a;
				return A4(
					$elm$browser$Debugger$Overlay$viewMessage,
					config,
					'Cannot Import History',
					A2($elm$browser$Debugger$Overlay$viewReport, true, report),
					$elm$browser$Debugger$Overlay$Accept('Ok'));
			default:
				var report = state.a;
				return A4(
					$elm$browser$Debugger$Overlay$viewMessage,
					config,
					'Warning',
					A2($elm$browser$Debugger$Overlay$viewReport, false, report),
					A2($elm$browser$Debugger$Overlay$Choose, 'Cancel', 'Import Anyway'));
		}
	});
var $elm$browser$Debugger$Main$cornerView = function (model) {
	return A5(
		$elm$browser$Debugger$Overlay$view,
		{exportHistory: $elm$browser$Debugger$Main$Export, importHistory: $elm$browser$Debugger$Main$Import, open: $elm$browser$Debugger$Main$Open, resume: $elm$browser$Debugger$Main$Resume, wrap: $elm$browser$Debugger$Main$OverlayMsg},
		$elm$browser$Debugger$Main$isPaused(model.state),
		_Debugger_isOpen(model.popout),
		$elm$browser$Debugger$History$size(model.history),
		model.overlay);
};
var $elm$core$Dict$RBEmpty_elm_builtin = {$: 'RBEmpty_elm_builtin'};
var $elm$core$Dict$empty = $elm$core$Dict$RBEmpty_elm_builtin;
var $elm$core$Set$foldr = F3(
	function (func, initialState, _v0) {
		var dict = _v0.a;
		return A3(
			$elm$core$Dict$foldr,
			F3(
				function (key, _v1, state) {
					return A2(func, key, state);
				}),
			initialState,
			dict);
	});
var $elm$browser$Debugger$Main$getCurrentModel = function (state) {
	if (state.$ === 'Running') {
		var model = state.a;
		return model;
	} else {
		var model = state.b;
		return model;
	}
};
var $elm$browser$Debugger$Main$getUserModel = function (model) {
	return $elm$browser$Debugger$Main$getCurrentModel(model.state);
};
var $elm$browser$Debugger$Main$initialWindowHeight = 420;
var $elm$browser$Debugger$Main$initialWindowWidth = 900;
var $elm$core$Dict$Black = {$: 'Black'};
var $elm$core$Dict$RBNode_elm_builtin = F5(
	function (a, b, c, d, e) {
		return {$: 'RBNode_elm_builtin', a: a, b: b, c: c, d: d, e: e};
	});
var $elm$core$Dict$Red = {$: 'Red'};
var $elm$core$Dict$balance = F5(
	function (color, key, value, left, right) {
		if ((right.$ === 'RBNode_elm_builtin') && (right.a.$ === 'Red')) {
			var _v1 = right.a;
			var rK = right.b;
			var rV = right.c;
			var rLeft = right.d;
			var rRight = right.e;
			if ((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Red')) {
				var _v3 = left.a;
				var lK = left.b;
				var lV = left.c;
				var lLeft = left.d;
				var lRight = left.e;
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Red,
					key,
					value,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, rK, rV, rLeft, rRight));
			} else {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					color,
					rK,
					rV,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, key, value, left, rLeft),
					rRight);
			}
		} else {
			if ((((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Red')) && (left.d.$ === 'RBNode_elm_builtin')) && (left.d.a.$ === 'Red')) {
				var _v5 = left.a;
				var lK = left.b;
				var lV = left.c;
				var _v6 = left.d;
				var _v7 = _v6.a;
				var llK = _v6.b;
				var llV = _v6.c;
				var llLeft = _v6.d;
				var llRight = _v6.e;
				var lRight = left.e;
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Red,
					lK,
					lV,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, llK, llV, llLeft, llRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, key, value, lRight, right));
			} else {
				return A5($elm$core$Dict$RBNode_elm_builtin, color, key, value, left, right);
			}
		}
	});
var $elm$core$Basics$compare = _Utils_compare;
var $elm$core$Dict$insertHelp = F3(
	function (key, value, dict) {
		if (dict.$ === 'RBEmpty_elm_builtin') {
			return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, key, value, $elm$core$Dict$RBEmpty_elm_builtin, $elm$core$Dict$RBEmpty_elm_builtin);
		} else {
			var nColor = dict.a;
			var nKey = dict.b;
			var nValue = dict.c;
			var nLeft = dict.d;
			var nRight = dict.e;
			var _v1 = A2($elm$core$Basics$compare, key, nKey);
			switch (_v1.$) {
				case 'LT':
					return A5(
						$elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						A3($elm$core$Dict$insertHelp, key, value, nLeft),
						nRight);
				case 'EQ':
					return A5($elm$core$Dict$RBNode_elm_builtin, nColor, nKey, value, nLeft, nRight);
				default:
					return A5(
						$elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						nLeft,
						A3($elm$core$Dict$insertHelp, key, value, nRight));
			}
		}
	});
var $elm$core$Dict$insert = F3(
	function (key, value, dict) {
		var _v0 = A3($elm$core$Dict$insertHelp, key, value, dict);
		if ((_v0.$ === 'RBNode_elm_builtin') && (_v0.a.$ === 'Red')) {
			var _v1 = _v0.a;
			var k = _v0.b;
			var v = _v0.c;
			var l = _v0.d;
			var r = _v0.e;
			return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, k, v, l, r);
		} else {
			var x = _v0;
			return x;
		}
	});
var $elm$browser$Debugger$Main$cachedHistory = function (model) {
	var _v0 = model.state;
	if (_v0.$ === 'Running') {
		return model.history;
	} else {
		var history = _v0.e;
		return history;
	}
};
var $elm$virtual_dom$VirtualDom$node = function (tag) {
	return _VirtualDom_node(
		_VirtualDom_noScript(tag));
};
var $elm$html$Html$node = $elm$virtual_dom$VirtualDom$node;
var $elm$browser$Debugger$Main$DragEnd = {$: 'DragEnd'};
var $elm$browser$Debugger$Main$getDragStatus = function (layout) {
	if (layout.$ === 'Horizontal') {
		var status = layout.a;
		return status;
	} else {
		var status = layout.a;
		return status;
	}
};
var $elm$browser$Debugger$Main$Drag = function (a) {
	return {$: 'Drag', a: a};
};
var $elm$browser$Debugger$Main$DragInfo = F5(
	function (x, y, down, width, height) {
		return {down: down, height: height, width: width, x: x, y: y};
	});
var $elm$json$Json$Decode$field = _Json_decodeField;
var $elm$json$Json$Decode$at = F2(
	function (fields, decoder) {
		return A3($elm$core$List$foldr, $elm$json$Json$Decode$field, decoder, fields);
	});
var $elm$json$Json$Decode$float = _Json_decodeFloat;
var $elm$browser$Debugger$Main$decodeDimension = function (field) {
	return A2(
		$elm$json$Json$Decode$at,
		_List_fromArray(
			['currentTarget', 'ownerDocument', 'defaultView', field]),
		$elm$json$Json$Decode$float);
};
var $elm$json$Json$Decode$int = _Json_decodeInt;
var $elm$json$Json$Decode$map5 = _Json_map5;
var $elm$browser$Debugger$Main$onMouseMove = A2(
	$elm$html$Html$Events$on,
	'mousemove',
	A2(
		$elm$json$Json$Decode$map,
		$elm$browser$Debugger$Main$Drag,
		A6(
			$elm$json$Json$Decode$map5,
			$elm$browser$Debugger$Main$DragInfo,
			A2($elm$json$Json$Decode$field, 'pageX', $elm$json$Json$Decode$float),
			A2($elm$json$Json$Decode$field, 'pageY', $elm$json$Json$Decode$float),
			A2(
				$elm$json$Json$Decode$field,
				'buttons',
				A2(
					$elm$json$Json$Decode$map,
					function (v) {
						return v === 1;
					},
					$elm$json$Json$Decode$int)),
			$elm$browser$Debugger$Main$decodeDimension('innerWidth'),
			$elm$browser$Debugger$Main$decodeDimension('innerHeight'))));
var $elm$html$Html$Events$onMouseUp = function (msg) {
	return A2(
		$elm$html$Html$Events$on,
		'mouseup',
		$elm$json$Json$Decode$succeed(msg));
};
var $elm$browser$Debugger$Main$toDragListeners = function (layout) {
	var _v0 = $elm$browser$Debugger$Main$getDragStatus(layout);
	if (_v0.$ === 'Static') {
		return _List_Nil;
	} else {
		return _List_fromArray(
			[
				$elm$browser$Debugger$Main$onMouseMove,
				$elm$html$Html$Events$onMouseUp($elm$browser$Debugger$Main$DragEnd)
			]);
	}
};
var $elm$browser$Debugger$Main$toFlexDirection = function (layout) {
	if (layout.$ === 'Horizontal') {
		return 'row';
	} else {
		return 'column-reverse';
	}
};
var $elm$browser$Debugger$Main$DragStart = {$: 'DragStart'};
var $elm$html$Html$Events$onMouseDown = function (msg) {
	return A2(
		$elm$html$Html$Events$on,
		'mousedown',
		$elm$json$Json$Decode$succeed(msg));
};
var $elm$browser$Debugger$Main$toPercent = function (fraction) {
	return $elm$core$String$fromFloat(100 * fraction) + '%';
};
var $elm$browser$Debugger$Main$viewDragZone = function (layout) {
	if (layout.$ === 'Horizontal') {
		var x = layout.b;
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					A2($elm$html$Html$Attributes$style, 'position', 'absolute'),
					A2($elm$html$Html$Attributes$style, 'top', '0'),
					A2(
					$elm$html$Html$Attributes$style,
					'left',
					$elm$browser$Debugger$Main$toPercent(x)),
					A2($elm$html$Html$Attributes$style, 'margin-left', '-5px'),
					A2($elm$html$Html$Attributes$style, 'width', '10px'),
					A2($elm$html$Html$Attributes$style, 'height', '100%'),
					A2($elm$html$Html$Attributes$style, 'cursor', 'col-resize'),
					$elm$html$Html$Events$onMouseDown($elm$browser$Debugger$Main$DragStart)
				]),
			_List_Nil);
	} else {
		var y = layout.c;
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					A2($elm$html$Html$Attributes$style, 'position', 'absolute'),
					A2(
					$elm$html$Html$Attributes$style,
					'top',
					$elm$browser$Debugger$Main$toPercent(y)),
					A2($elm$html$Html$Attributes$style, 'left', '0'),
					A2($elm$html$Html$Attributes$style, 'margin-top', '-5px'),
					A2($elm$html$Html$Attributes$style, 'width', '100%'),
					A2($elm$html$Html$Attributes$style, 'height', '10px'),
					A2($elm$html$Html$Attributes$style, 'cursor', 'row-resize'),
					$elm$html$Html$Events$onMouseDown($elm$browser$Debugger$Main$DragStart)
				]),
			_List_Nil);
	}
};
var $elm$browser$Debugger$Main$TweakExpandoModel = function (a) {
	return {$: 'TweakExpandoModel', a: a};
};
var $elm$browser$Debugger$Main$TweakExpandoMsg = function (a) {
	return {$: 'TweakExpandoMsg', a: a};
};
var $elm$browser$Debugger$Main$toExpandoPercents = function (layout) {
	if (layout.$ === 'Horizontal') {
		var x = layout.b;
		return _Utils_Tuple2(
			$elm$browser$Debugger$Main$toPercent(1 - x),
			'100%');
	} else {
		var y = layout.c;
		return _Utils_Tuple2(
			'100%',
			$elm$browser$Debugger$Main$toPercent(y));
	}
};
var $elm$browser$Debugger$Main$toMouseBlocker = function (layout) {
	var _v0 = $elm$browser$Debugger$Main$getDragStatus(layout);
	if (_v0.$ === 'Static') {
		return 'auto';
	} else {
		return 'none';
	}
};
var $elm$browser$Debugger$Expando$Field = F2(
	function (a, b) {
		return {$: 'Field', a: a, b: b};
	});
var $elm$browser$Debugger$Expando$Index = F3(
	function (a, b, c) {
		return {$: 'Index', a: a, b: b, c: c};
	});
var $elm$browser$Debugger$Expando$Key = {$: 'Key'};
var $elm$browser$Debugger$Expando$None = {$: 'None'};
var $elm$browser$Debugger$Expando$Toggle = {$: 'Toggle'};
var $elm$browser$Debugger$Expando$Value = {$: 'Value'};
var $elm$browser$Debugger$Expando$blue = A2($elm$html$Html$Attributes$style, 'color', 'rgb(28, 0, 207)');
var $elm$core$Basics$composeL = F3(
	function (g, f, x) {
		return g(
			f(x));
	});
var $elm$browser$Debugger$Expando$leftPad = function (maybeKey) {
	if (maybeKey.$ === 'Nothing') {
		return _List_Nil;
	} else {
		return _List_fromArray(
			[
				A2($elm$html$Html$Attributes$style, 'padding-left', '4ch')
			]);
	}
};
var $elm$browser$Debugger$Expando$makeArrow = function (arrow) {
	return A2(
		$elm$html$Html$span,
		_List_fromArray(
			[
				A2($elm$html$Html$Attributes$style, 'color', '#777'),
				A2($elm$html$Html$Attributes$style, 'padding-left', '2ch'),
				A2($elm$html$Html$Attributes$style, 'width', '2ch'),
				A2($elm$html$Html$Attributes$style, 'display', 'inline-block')
			]),
		_List_fromArray(
			[
				$elm$html$Html$text(arrow)
			]));
};
var $elm$browser$Debugger$Expando$purple = A2($elm$html$Html$Attributes$style, 'color', 'rgb(136, 19, 145)');
var $elm$browser$Debugger$Expando$lineStarter = F3(
	function (maybeKey, maybeIsClosed, description) {
		var arrow = function () {
			if (maybeIsClosed.$ === 'Nothing') {
				return $elm$browser$Debugger$Expando$makeArrow('');
			} else {
				if (maybeIsClosed.a) {
					return $elm$browser$Debugger$Expando$makeArrow('▸');
				} else {
					return $elm$browser$Debugger$Expando$makeArrow('▾');
				}
			}
		}();
		if (maybeKey.$ === 'Nothing') {
			return A2($elm$core$List$cons, arrow, description);
		} else {
			var key = maybeKey.a;
			return A2(
				$elm$core$List$cons,
				arrow,
				A2(
					$elm$core$List$cons,
					A2(
						$elm$html$Html$span,
						_List_fromArray(
							[$elm$browser$Debugger$Expando$purple]),
						_List_fromArray(
							[
								$elm$html$Html$text(key)
							])),
					A2(
						$elm$core$List$cons,
						$elm$html$Html$text(' = '),
						description)));
		}
	});
var $elm$browser$Debugger$Expando$red = A2($elm$html$Html$Attributes$style, 'color', 'rgb(196, 26, 22)');
var $elm$core$Tuple$second = function (_v0) {
	var y = _v0.b;
	return y;
};
var $elm$browser$Debugger$Expando$seqTypeToString = F2(
	function (n, seqType) {
		switch (seqType.$) {
			case 'ListSeq':
				return 'List(' + ($elm$core$String$fromInt(n) + ')');
			case 'SetSeq':
				return 'Set(' + ($elm$core$String$fromInt(n) + ')');
			default:
				return 'Array(' + ($elm$core$String$fromInt(n) + ')');
		}
	});
var $elm$core$String$slice = _String_slice;
var $elm$core$String$left = F2(
	function (n, string) {
		return (n < 1) ? '' : A3($elm$core$String$slice, 0, n, string);
	});
var $elm$core$String$right = F2(
	function (n, string) {
		return (n < 1) ? '' : A3(
			$elm$core$String$slice,
			-n,
			$elm$core$String$length(string),
			string);
	});
var $elm$browser$Debugger$Expando$elideMiddle = function (str) {
	return ($elm$core$String$length(str) <= 18) ? str : (A2($elm$core$String$left, 8, str) + ('...' + A2($elm$core$String$right, 8, str)));
};
var $elm$core$Dict$isEmpty = function (dict) {
	if (dict.$ === 'RBEmpty_elm_builtin') {
		return true;
	} else {
		return false;
	}
};
var $elm$browser$Debugger$Expando$viewExtraTinyRecord = F3(
	function (length, starter, entries) {
		if (!entries.b) {
			return _Utils_Tuple2(
				length + 1,
				_List_fromArray(
					[
						$elm$html$Html$text('}')
					]));
		} else {
			var field = entries.a;
			var rest = entries.b;
			var nextLength = (length + $elm$core$String$length(field)) + 1;
			if (nextLength > 18) {
				return _Utils_Tuple2(
					length + 2,
					_List_fromArray(
						[
							$elm$html$Html$text('…}')
						]));
			} else {
				var _v1 = A3($elm$browser$Debugger$Expando$viewExtraTinyRecord, nextLength, ',', rest);
				var finalLength = _v1.a;
				var otherHtmls = _v1.b;
				return _Utils_Tuple2(
					finalLength,
					A2(
						$elm$core$List$cons,
						$elm$html$Html$text(starter),
						A2(
							$elm$core$List$cons,
							A2(
								$elm$html$Html$span,
								_List_fromArray(
									[$elm$browser$Debugger$Expando$purple]),
								_List_fromArray(
									[
										$elm$html$Html$text(field)
									])),
							otherHtmls)));
			}
		}
	});
var $elm$browser$Debugger$Expando$viewTinyHelp = function (str) {
	return _Utils_Tuple2(
		$elm$core$String$length(str),
		_List_fromArray(
			[
				$elm$html$Html$text(str)
			]));
};
var $elm$core$Maybe$withDefault = F2(
	function (_default, maybe) {
		if (maybe.$ === 'Just') {
			var value = maybe.a;
			return value;
		} else {
			return _default;
		}
	});
var $elm$browser$Debugger$Expando$viewExtraTiny = function (value) {
	if (value.$ === 'Record') {
		var record = value.b;
		return A3(
			$elm$browser$Debugger$Expando$viewExtraTinyRecord,
			0,
			'{',
			$elm$core$Dict$keys(record));
	} else {
		return $elm$browser$Debugger$Expando$viewTiny(value);
	}
};
var $elm$browser$Debugger$Expando$viewTiny = function (value) {
	switch (value.$) {
		case 'S':
			var stringRep = value.a;
			var str = $elm$browser$Debugger$Expando$elideMiddle(stringRep);
			return _Utils_Tuple2(
				$elm$core$String$length(str),
				_List_fromArray(
					[
						A2(
						$elm$html$Html$span,
						_List_fromArray(
							[$elm$browser$Debugger$Expando$red]),
						_List_fromArray(
							[
								$elm$html$Html$text(str)
							]))
					]));
		case 'Primitive':
			var stringRep = value.a;
			return _Utils_Tuple2(
				$elm$core$String$length(stringRep),
				_List_fromArray(
					[
						A2(
						$elm$html$Html$span,
						_List_fromArray(
							[$elm$browser$Debugger$Expando$blue]),
						_List_fromArray(
							[
								$elm$html$Html$text(stringRep)
							]))
					]));
		case 'Sequence':
			var seqType = value.a;
			var valueList = value.c;
			return $elm$browser$Debugger$Expando$viewTinyHelp(
				A2(
					$elm$browser$Debugger$Expando$seqTypeToString,
					$elm$core$List$length(valueList),
					seqType));
		case 'Dictionary':
			var keyValuePairs = value.b;
			return $elm$browser$Debugger$Expando$viewTinyHelp(
				'Dict(' + ($elm$core$String$fromInt(
					$elm$core$List$length(keyValuePairs)) + ')'));
		case 'Record':
			var record = value.b;
			return $elm$browser$Debugger$Expando$viewTinyRecord(record);
		default:
			if (!value.c.b) {
				var maybeName = value.a;
				return $elm$browser$Debugger$Expando$viewTinyHelp(
					A2($elm$core$Maybe$withDefault, 'Unit', maybeName));
			} else {
				var maybeName = value.a;
				var valueList = value.c;
				return $elm$browser$Debugger$Expando$viewTinyHelp(
					function () {
						if (maybeName.$ === 'Nothing') {
							return 'Tuple(' + ($elm$core$String$fromInt(
								$elm$core$List$length(valueList)) + ')');
						} else {
							var name = maybeName.a;
							return name + ' …';
						}
					}());
			}
	}
};
var $elm$browser$Debugger$Expando$viewTinyRecord = function (record) {
	return $elm$core$Dict$isEmpty(record) ? _Utils_Tuple2(
		2,
		_List_fromArray(
			[
				$elm$html$Html$text('{}')
			])) : A3(
		$elm$browser$Debugger$Expando$viewTinyRecordHelp,
		0,
		'{ ',
		$elm$core$Dict$toList(record));
};
var $elm$browser$Debugger$Expando$viewTinyRecordHelp = F3(
	function (length, starter, entries) {
		if (!entries.b) {
			return _Utils_Tuple2(
				length + 2,
				_List_fromArray(
					[
						$elm$html$Html$text(' }')
					]));
		} else {
			var _v1 = entries.a;
			var field = _v1.a;
			var value = _v1.b;
			var rest = entries.b;
			var fieldLen = $elm$core$String$length(field);
			var _v2 = $elm$browser$Debugger$Expando$viewExtraTiny(value);
			var valueLen = _v2.a;
			var valueHtmls = _v2.b;
			var newLength = ((length + fieldLen) + valueLen) + 5;
			if (newLength > 60) {
				return _Utils_Tuple2(
					length + 4,
					_List_fromArray(
						[
							$elm$html$Html$text(', … }')
						]));
			} else {
				var _v3 = A3($elm$browser$Debugger$Expando$viewTinyRecordHelp, newLength, ', ', rest);
				var finalLength = _v3.a;
				var otherHtmls = _v3.b;
				return _Utils_Tuple2(
					finalLength,
					A2(
						$elm$core$List$cons,
						$elm$html$Html$text(starter),
						A2(
							$elm$core$List$cons,
							A2(
								$elm$html$Html$span,
								_List_fromArray(
									[$elm$browser$Debugger$Expando$purple]),
								_List_fromArray(
									[
										$elm$html$Html$text(field)
									])),
							A2(
								$elm$core$List$cons,
								$elm$html$Html$text(' = '),
								A2(
									$elm$core$List$cons,
									A2($elm$html$Html$span, _List_Nil, valueHtmls),
									otherHtmls)))));
			}
		}
	});
var $elm$browser$Debugger$Expando$view = F2(
	function (maybeKey, expando) {
		switch (expando.$) {
			case 'S':
				var stringRep = expando.a;
				return A2(
					$elm$html$Html$div,
					$elm$browser$Debugger$Expando$leftPad(maybeKey),
					A3(
						$elm$browser$Debugger$Expando$lineStarter,
						maybeKey,
						$elm$core$Maybe$Nothing,
						_List_fromArray(
							[
								A2(
								$elm$html$Html$span,
								_List_fromArray(
									[$elm$browser$Debugger$Expando$red]),
								_List_fromArray(
									[
										$elm$html$Html$text(stringRep)
									]))
							])));
			case 'Primitive':
				var stringRep = expando.a;
				return A2(
					$elm$html$Html$div,
					$elm$browser$Debugger$Expando$leftPad(maybeKey),
					A3(
						$elm$browser$Debugger$Expando$lineStarter,
						maybeKey,
						$elm$core$Maybe$Nothing,
						_List_fromArray(
							[
								A2(
								$elm$html$Html$span,
								_List_fromArray(
									[$elm$browser$Debugger$Expando$blue]),
								_List_fromArray(
									[
										$elm$html$Html$text(stringRep)
									]))
							])));
			case 'Sequence':
				var seqType = expando.a;
				var isClosed = expando.b;
				var valueList = expando.c;
				return A4($elm$browser$Debugger$Expando$viewSequence, maybeKey, seqType, isClosed, valueList);
			case 'Dictionary':
				var isClosed = expando.a;
				var keyValuePairs = expando.b;
				return A3($elm$browser$Debugger$Expando$viewDictionary, maybeKey, isClosed, keyValuePairs);
			case 'Record':
				var isClosed = expando.a;
				var valueDict = expando.b;
				return A3($elm$browser$Debugger$Expando$viewRecord, maybeKey, isClosed, valueDict);
			default:
				var maybeName = expando.a;
				var isClosed = expando.b;
				var valueList = expando.c;
				return A4($elm$browser$Debugger$Expando$viewConstructor, maybeKey, maybeName, isClosed, valueList);
		}
	});
var $elm$browser$Debugger$Expando$viewConstructor = F4(
	function (maybeKey, maybeName, isClosed, valueList) {
		var tinyArgs = A2(
			$elm$core$List$map,
			A2($elm$core$Basics$composeL, $elm$core$Tuple$second, $elm$browser$Debugger$Expando$viewExtraTiny),
			valueList);
		var description = function () {
			var _v7 = _Utils_Tuple2(maybeName, tinyArgs);
			if (_v7.a.$ === 'Nothing') {
				if (!_v7.b.b) {
					var _v8 = _v7.a;
					return _List_fromArray(
						[
							$elm$html$Html$text('()')
						]);
				} else {
					var _v9 = _v7.a;
					var _v10 = _v7.b;
					var x = _v10.a;
					var xs = _v10.b;
					return A2(
						$elm$core$List$cons,
						$elm$html$Html$text('( '),
						A2(
							$elm$core$List$cons,
							A2($elm$html$Html$span, _List_Nil, x),
							A3(
								$elm$core$List$foldr,
								F2(
									function (args, rest) {
										return A2(
											$elm$core$List$cons,
											$elm$html$Html$text(', '),
											A2(
												$elm$core$List$cons,
												A2($elm$html$Html$span, _List_Nil, args),
												rest));
									}),
								_List_fromArray(
									[
										$elm$html$Html$text(' )')
									]),
								xs)));
				}
			} else {
				if (!_v7.b.b) {
					var name = _v7.a.a;
					return _List_fromArray(
						[
							$elm$html$Html$text(name)
						]);
				} else {
					var name = _v7.a.a;
					var _v11 = _v7.b;
					var x = _v11.a;
					var xs = _v11.b;
					return A2(
						$elm$core$List$cons,
						$elm$html$Html$text(name + ' '),
						A2(
							$elm$core$List$cons,
							A2($elm$html$Html$span, _List_Nil, x),
							A3(
								$elm$core$List$foldr,
								F2(
									function (args, rest) {
										return A2(
											$elm$core$List$cons,
											$elm$html$Html$text(' '),
											A2(
												$elm$core$List$cons,
												A2($elm$html$Html$span, _List_Nil, args),
												rest));
									}),
								_List_Nil,
								xs)));
				}
			}
		}();
		var _v4 = function () {
			if (!valueList.b) {
				return _Utils_Tuple2(
					$elm$core$Maybe$Nothing,
					A2($elm$html$Html$div, _List_Nil, _List_Nil));
			} else {
				if (!valueList.b.b) {
					var entry = valueList.a;
					switch (entry.$) {
						case 'S':
							return _Utils_Tuple2(
								$elm$core$Maybe$Nothing,
								A2($elm$html$Html$div, _List_Nil, _List_Nil));
						case 'Primitive':
							return _Utils_Tuple2(
								$elm$core$Maybe$Nothing,
								A2($elm$html$Html$div, _List_Nil, _List_Nil));
						case 'Sequence':
							var subValueList = entry.c;
							return _Utils_Tuple2(
								$elm$core$Maybe$Just(isClosed),
								isClosed ? A2($elm$html$Html$div, _List_Nil, _List_Nil) : A2(
									$elm$html$Html$map,
									A2($elm$browser$Debugger$Expando$Index, $elm$browser$Debugger$Expando$None, 0),
									$elm$browser$Debugger$Expando$viewSequenceOpen(subValueList)));
						case 'Dictionary':
							var keyValuePairs = entry.b;
							return _Utils_Tuple2(
								$elm$core$Maybe$Just(isClosed),
								isClosed ? A2($elm$html$Html$div, _List_Nil, _List_Nil) : A2(
									$elm$html$Html$map,
									A2($elm$browser$Debugger$Expando$Index, $elm$browser$Debugger$Expando$None, 0),
									$elm$browser$Debugger$Expando$viewDictionaryOpen(keyValuePairs)));
						case 'Record':
							var record = entry.b;
							return _Utils_Tuple2(
								$elm$core$Maybe$Just(isClosed),
								isClosed ? A2($elm$html$Html$div, _List_Nil, _List_Nil) : A2(
									$elm$html$Html$map,
									A2($elm$browser$Debugger$Expando$Index, $elm$browser$Debugger$Expando$None, 0),
									$elm$browser$Debugger$Expando$viewRecordOpen(record)));
						default:
							var subValueList = entry.c;
							return _Utils_Tuple2(
								$elm$core$Maybe$Just(isClosed),
								isClosed ? A2($elm$html$Html$div, _List_Nil, _List_Nil) : A2(
									$elm$html$Html$map,
									A2($elm$browser$Debugger$Expando$Index, $elm$browser$Debugger$Expando$None, 0),
									$elm$browser$Debugger$Expando$viewConstructorOpen(subValueList)));
					}
				} else {
					return _Utils_Tuple2(
						$elm$core$Maybe$Just(isClosed),
						isClosed ? A2($elm$html$Html$div, _List_Nil, _List_Nil) : $elm$browser$Debugger$Expando$viewConstructorOpen(valueList));
				}
			}
		}();
		var maybeIsClosed = _v4.a;
		var openHtml = _v4.b;
		return A2(
			$elm$html$Html$div,
			$elm$browser$Debugger$Expando$leftPad(maybeKey),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$elm$html$Html$Events$onClick($elm$browser$Debugger$Expando$Toggle)
						]),
					A3($elm$browser$Debugger$Expando$lineStarter, maybeKey, maybeIsClosed, description)),
					openHtml
				]));
	});
var $elm$browser$Debugger$Expando$viewConstructorEntry = F2(
	function (index, value) {
		return A2(
			$elm$html$Html$map,
			A2($elm$browser$Debugger$Expando$Index, $elm$browser$Debugger$Expando$None, index),
			A2(
				$elm$browser$Debugger$Expando$view,
				$elm$core$Maybe$Just(
					$elm$core$String$fromInt(index)),
				value));
	});
var $elm$browser$Debugger$Expando$viewConstructorOpen = function (valueList) {
	return A2(
		$elm$html$Html$div,
		_List_Nil,
		A2($elm$core$List$indexedMap, $elm$browser$Debugger$Expando$viewConstructorEntry, valueList));
};
var $elm$browser$Debugger$Expando$viewDictionary = F3(
	function (maybeKey, isClosed, keyValuePairs) {
		var starter = 'Dict(' + ($elm$core$String$fromInt(
			$elm$core$List$length(keyValuePairs)) + ')');
		return A2(
			$elm$html$Html$div,
			$elm$browser$Debugger$Expando$leftPad(maybeKey),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$elm$html$Html$Events$onClick($elm$browser$Debugger$Expando$Toggle)
						]),
					A3(
						$elm$browser$Debugger$Expando$lineStarter,
						maybeKey,
						$elm$core$Maybe$Just(isClosed),
						_List_fromArray(
							[
								$elm$html$Html$text(starter)
							]))),
					isClosed ? $elm$html$Html$text('') : $elm$browser$Debugger$Expando$viewDictionaryOpen(keyValuePairs)
				]));
	});
var $elm$browser$Debugger$Expando$viewDictionaryEntry = F2(
	function (index, _v2) {
		var key = _v2.a;
		var value = _v2.b;
		switch (key.$) {
			case 'S':
				var stringRep = key.a;
				return A2(
					$elm$html$Html$map,
					A2($elm$browser$Debugger$Expando$Index, $elm$browser$Debugger$Expando$Value, index),
					A2(
						$elm$browser$Debugger$Expando$view,
						$elm$core$Maybe$Just(stringRep),
						value));
			case 'Primitive':
				var stringRep = key.a;
				return A2(
					$elm$html$Html$map,
					A2($elm$browser$Debugger$Expando$Index, $elm$browser$Debugger$Expando$Value, index),
					A2(
						$elm$browser$Debugger$Expando$view,
						$elm$core$Maybe$Just(stringRep),
						value));
			default:
				return A2(
					$elm$html$Html$div,
					_List_Nil,
					_List_fromArray(
						[
							A2(
							$elm$html$Html$map,
							A2($elm$browser$Debugger$Expando$Index, $elm$browser$Debugger$Expando$Key, index),
							A2(
								$elm$browser$Debugger$Expando$view,
								$elm$core$Maybe$Just('key'),
								key)),
							A2(
							$elm$html$Html$map,
							A2($elm$browser$Debugger$Expando$Index, $elm$browser$Debugger$Expando$Value, index),
							A2(
								$elm$browser$Debugger$Expando$view,
								$elm$core$Maybe$Just('value'),
								value))
						]));
		}
	});
var $elm$browser$Debugger$Expando$viewDictionaryOpen = function (keyValuePairs) {
	return A2(
		$elm$html$Html$div,
		_List_Nil,
		A2($elm$core$List$indexedMap, $elm$browser$Debugger$Expando$viewDictionaryEntry, keyValuePairs));
};
var $elm$browser$Debugger$Expando$viewRecord = F3(
	function (maybeKey, isClosed, record) {
		var _v1 = isClosed ? _Utils_Tuple3(
			$elm$browser$Debugger$Expando$viewTinyRecord(record).b,
			$elm$html$Html$text(''),
			$elm$html$Html$text('')) : _Utils_Tuple3(
			_List_fromArray(
				[
					$elm$html$Html$text('{')
				]),
			$elm$browser$Debugger$Expando$viewRecordOpen(record),
			A2(
				$elm$html$Html$div,
				$elm$browser$Debugger$Expando$leftPad(
					$elm$core$Maybe$Just(_Utils_Tuple0)),
				_List_fromArray(
					[
						$elm$html$Html$text('}')
					])));
		var start = _v1.a;
		var middle = _v1.b;
		var end = _v1.c;
		return A2(
			$elm$html$Html$div,
			$elm$browser$Debugger$Expando$leftPad(maybeKey),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$elm$html$Html$Events$onClick($elm$browser$Debugger$Expando$Toggle)
						]),
					A3(
						$elm$browser$Debugger$Expando$lineStarter,
						maybeKey,
						$elm$core$Maybe$Just(isClosed),
						start)),
					middle,
					end
				]));
	});
var $elm$browser$Debugger$Expando$viewRecordEntry = function (_v0) {
	var field = _v0.a;
	var value = _v0.b;
	return A2(
		$elm$html$Html$map,
		$elm$browser$Debugger$Expando$Field(field),
		A2(
			$elm$browser$Debugger$Expando$view,
			$elm$core$Maybe$Just(field),
			value));
};
var $elm$browser$Debugger$Expando$viewRecordOpen = function (record) {
	return A2(
		$elm$html$Html$div,
		_List_Nil,
		A2(
			$elm$core$List$map,
			$elm$browser$Debugger$Expando$viewRecordEntry,
			$elm$core$Dict$toList(record)));
};
var $elm$browser$Debugger$Expando$viewSequence = F4(
	function (maybeKey, seqType, isClosed, valueList) {
		var starter = A2(
			$elm$browser$Debugger$Expando$seqTypeToString,
			$elm$core$List$length(valueList),
			seqType);
		return A2(
			$elm$html$Html$div,
			$elm$browser$Debugger$Expando$leftPad(maybeKey),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$elm$html$Html$Events$onClick($elm$browser$Debugger$Expando$Toggle)
						]),
					A3(
						$elm$browser$Debugger$Expando$lineStarter,
						maybeKey,
						$elm$core$Maybe$Just(isClosed),
						_List_fromArray(
							[
								$elm$html$Html$text(starter)
							]))),
					isClosed ? $elm$html$Html$text('') : $elm$browser$Debugger$Expando$viewSequenceOpen(valueList)
				]));
	});
var $elm$browser$Debugger$Expando$viewSequenceOpen = function (values) {
	return A2(
		$elm$html$Html$div,
		_List_Nil,
		A2($elm$core$List$indexedMap, $elm$browser$Debugger$Expando$viewConstructorEntry, values));
};
var $elm$browser$Debugger$Main$viewExpando = F3(
	function (expandoMsg, expandoModel, layout) {
		var block = $elm$browser$Debugger$Main$toMouseBlocker(layout);
		var _v0 = $elm$browser$Debugger$Main$toExpandoPercents(layout);
		var w = _v0.a;
		var h = _v0.b;
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					A2($elm$html$Html$Attributes$style, 'display', 'block'),
					A2($elm$html$Html$Attributes$style, 'width', 'calc(' + (w + ' - 4em)')),
					A2($elm$html$Html$Attributes$style, 'height', 'calc(' + (h + ' - 4em)')),
					A2($elm$html$Html$Attributes$style, 'padding', '2em'),
					A2($elm$html$Html$Attributes$style, 'margin', '0'),
					A2($elm$html$Html$Attributes$style, 'overflow', 'auto'),
					A2($elm$html$Html$Attributes$style, 'pointer-events', block),
					A2($elm$html$Html$Attributes$style, '-webkit-user-select', block),
					A2($elm$html$Html$Attributes$style, '-moz-user-select', block),
					A2($elm$html$Html$Attributes$style, '-ms-user-select', block),
					A2($elm$html$Html$Attributes$style, 'user-select', block)
				]),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							A2($elm$html$Html$Attributes$style, 'color', '#ccc'),
							A2($elm$html$Html$Attributes$style, 'padding', '0 0 1em 0')
						]),
					_List_fromArray(
						[
							$elm$html$Html$text('-- MESSAGE')
						])),
					A2(
					$elm$html$Html$map,
					$elm$browser$Debugger$Main$TweakExpandoMsg,
					A2($elm$browser$Debugger$Expando$view, $elm$core$Maybe$Nothing, expandoMsg)),
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							A2($elm$html$Html$Attributes$style, 'color', '#ccc'),
							A2($elm$html$Html$Attributes$style, 'padding', '1em 0')
						]),
					_List_fromArray(
						[
							$elm$html$Html$text('-- MODEL')
						])),
					A2(
					$elm$html$Html$map,
					$elm$browser$Debugger$Main$TweakExpandoModel,
					A2($elm$browser$Debugger$Expando$view, $elm$core$Maybe$Nothing, expandoModel))
				]));
	});
var $elm$browser$Debugger$Main$Jump = function (a) {
	return {$: 'Jump', a: a};
};
var $elm$virtual_dom$VirtualDom$lazy = _VirtualDom_lazy;
var $elm$html$Html$Lazy$lazy = $elm$virtual_dom$VirtualDom$lazy;
var $elm$browser$Debugger$Main$toHistoryPercents = function (layout) {
	if (layout.$ === 'Horizontal') {
		var x = layout.b;
		return _Utils_Tuple2(
			$elm$browser$Debugger$Main$toPercent(x),
			'100%');
	} else {
		var y = layout.c;
		return _Utils_Tuple2(
			'100%',
			$elm$browser$Debugger$Main$toPercent(1 - y));
	}
};
var $elm$virtual_dom$VirtualDom$lazy3 = _VirtualDom_lazy3;
var $elm$html$Html$Lazy$lazy3 = $elm$virtual_dom$VirtualDom$lazy3;
var $elm$html$Html$Attributes$class = $elm$html$Html$Attributes$stringProperty('className');
var $elm$browser$Debugger$History$idForMessageIndex = function (index) {
	return 'msg-' + $elm$core$String$fromInt(index);
};
var $elm$html$Html$Attributes$title = $elm$html$Html$Attributes$stringProperty('title');
var $elm$browser$Debugger$History$viewMessage = F3(
	function (currentIndex, index, msg) {
		var messageName = _Debugger_messageToString(msg);
		var className = _Utils_eq(currentIndex, index) ? 'elm-debugger-entry elm-debugger-entry-selected' : 'elm-debugger-entry';
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$id(
					$elm$browser$Debugger$History$idForMessageIndex(index)),
					$elm$html$Html$Attributes$class(className),
					$elm$html$Html$Events$onClick(index)
				]),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$span,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$title(messageName),
							$elm$html$Html$Attributes$class('elm-debugger-entry-content')
						]),
					_List_fromArray(
						[
							$elm$html$Html$text(messageName)
						])),
					A2(
					$elm$html$Html$span,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('elm-debugger-entry-index')
						]),
					_List_fromArray(
						[
							$elm$html$Html$text(
							$elm$core$String$fromInt(index))
						]))
				]));
	});
var $elm$browser$Debugger$History$consMsg = F3(
	function (currentIndex, msg, _v0) {
		var index = _v0.a;
		var rest = _v0.b;
		return _Utils_Tuple2(
			index + 1,
			A2(
				$elm$core$List$cons,
				_Utils_Tuple2(
					$elm$core$String$fromInt(index),
					A4($elm$html$Html$Lazy$lazy3, $elm$browser$Debugger$History$viewMessage, currentIndex, index, msg)),
				rest));
	});
var $elm$core$Array$length = function (_v0) {
	var len = _v0.a;
	return len;
};
var $elm$core$Basics$neq = _Utils_notEqual;
var $elm$virtual_dom$VirtualDom$keyedNode = function (tag) {
	return _VirtualDom_keyedNode(
		_VirtualDom_noScript(tag));
};
var $elm$html$Html$Keyed$node = $elm$virtual_dom$VirtualDom$keyedNode;
var $elm$browser$Debugger$History$maxSnapshotSize = 31;
var $elm$browser$Debugger$History$showMoreButton = function (numMessages) {
	var nextIndex = (numMessages - 1) - ($elm$browser$Debugger$History$maxSnapshotSize * 2);
	var labelText = 'View more messages';
	return A2(
		$elm$html$Html$div,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class('elm-debugger-entry'),
				$elm$html$Html$Events$onClick(nextIndex)
			]),
		_List_fromArray(
			[
				A2(
				$elm$html$Html$span,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$title(labelText),
						$elm$html$Html$Attributes$class('elm-debugger-entry-content')
					]),
				_List_fromArray(
					[
						$elm$html$Html$text(labelText)
					])),
				A2(
				$elm$html$Html$span,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('elm-debugger-entry-index')
					]),
				_List_Nil)
			]));
};
var $elm$browser$Debugger$History$styles = A3(
	$elm$html$Html$node,
	'style',
	_List_Nil,
	_List_fromArray(
		[
			$elm$html$Html$text('\n\n.elm-debugger-entry {\n  cursor: pointer;\n  width: 100%;\n  box-sizing: border-box;\n  padding: 8px;\n}\n\n.elm-debugger-entry:hover {\n  background-color: rgb(41, 41, 41);\n}\n\n.elm-debugger-entry-selected, .elm-debugger-entry-selected:hover {\n  background-color: rgb(10, 10, 10);\n}\n\n.elm-debugger-entry-content {\n  width: calc(100% - 40px);\n  padding: 0 5px;\n  box-sizing: border-box;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  display: inline-block;\n}\n\n.elm-debugger-entry-index {\n  color: #666;\n  width: 40px;\n  text-align: right;\n  display: block;\n  float: right;\n}\n\n')
		]));
var $elm$core$Basics$ge = _Utils_ge;
var $elm$browser$Debugger$History$viewSnapshot = F3(
	function (selectedIndex, index, _v0) {
		var messages = _v0.messages;
		return A3(
			$elm$html$Html$Keyed$node,
			'div',
			_List_Nil,
			A3(
				$elm$core$Array$foldr,
				$elm$browser$Debugger$History$consMsg(selectedIndex),
				_Utils_Tuple2(index, _List_Nil),
				messages).b);
	});
var $elm$browser$Debugger$History$consSnapshot = F3(
	function (selectedIndex, snapshot, _v0) {
		var index = _v0.a;
		var rest = _v0.b;
		var nextIndex = index + $elm$core$Array$length(snapshot.messages);
		var selectedIndexHelp = ((_Utils_cmp(nextIndex, selectedIndex) > 0) && (_Utils_cmp(selectedIndex, index) > -1)) ? selectedIndex : (-1);
		return _Utils_Tuple2(
			nextIndex,
			A2(
				$elm$core$List$cons,
				A4($elm$html$Html$Lazy$lazy3, $elm$browser$Debugger$History$viewSnapshot, selectedIndexHelp, index, snapshot),
				rest));
	});
var $elm$core$Elm$JsArray$foldl = _JsArray_foldl;
var $elm$core$Array$foldl = F3(
	function (func, baseCase, _v0) {
		var tree = _v0.c;
		var tail = _v0.d;
		var helper = F2(
			function (node, acc) {
				if (node.$ === 'SubTree') {
					var subTree = node.a;
					return A3($elm$core$Elm$JsArray$foldl, helper, acc, subTree);
				} else {
					var values = node.a;
					return A3($elm$core$Elm$JsArray$foldl, func, acc, values);
				}
			});
		return A3(
			$elm$core$Elm$JsArray$foldl,
			func,
			A3($elm$core$Elm$JsArray$foldl, helper, baseCase, tree),
			tail);
	});
var $elm$browser$Debugger$History$viewAllSnapshots = F3(
	function (selectedIndex, startIndex, snapshots) {
		return A2(
			$elm$html$Html$div,
			_List_Nil,
			A3(
				$elm$core$Array$foldl,
				$elm$browser$Debugger$History$consSnapshot(selectedIndex),
				_Utils_Tuple2(startIndex, _List_Nil),
				snapshots).b);
	});
var $elm$core$Array$fromListHelp = F3(
	function (list, nodeList, nodeListSize) {
		fromListHelp:
		while (true) {
			var _v0 = A2($elm$core$Elm$JsArray$initializeFromList, $elm$core$Array$branchFactor, list);
			var jsArray = _v0.a;
			var remainingItems = _v0.b;
			if (_Utils_cmp(
				$elm$core$Elm$JsArray$length(jsArray),
				$elm$core$Array$branchFactor) < 0) {
				return A2(
					$elm$core$Array$builderToArray,
					true,
					{nodeList: nodeList, nodeListSize: nodeListSize, tail: jsArray});
			} else {
				var $temp$list = remainingItems,
					$temp$nodeList = A2(
					$elm$core$List$cons,
					$elm$core$Array$Leaf(jsArray),
					nodeList),
					$temp$nodeListSize = nodeListSize + 1;
				list = $temp$list;
				nodeList = $temp$nodeList;
				nodeListSize = $temp$nodeListSize;
				continue fromListHelp;
			}
		}
	});
var $elm$core$Array$fromList = function (list) {
	if (!list.b) {
		return $elm$core$Array$empty;
	} else {
		return A3($elm$core$Array$fromListHelp, list, _List_Nil, 0);
	}
};
var $elm$core$Bitwise$and = _Bitwise_and;
var $elm$core$Bitwise$shiftRightZfBy = _Bitwise_shiftRightZfBy;
var $elm$core$Array$bitMask = 4294967295 >>> (32 - $elm$core$Array$shiftStep);
var $elm$core$Elm$JsArray$unsafeGet = _JsArray_unsafeGet;
var $elm$core$Array$getHelp = F3(
	function (shift, index, tree) {
		getHelp:
		while (true) {
			var pos = $elm$core$Array$bitMask & (index >>> shift);
			var _v0 = A2($elm$core$Elm$JsArray$unsafeGet, pos, tree);
			if (_v0.$ === 'SubTree') {
				var subTree = _v0.a;
				var $temp$shift = shift - $elm$core$Array$shiftStep,
					$temp$index = index,
					$temp$tree = subTree;
				shift = $temp$shift;
				index = $temp$index;
				tree = $temp$tree;
				continue getHelp;
			} else {
				var values = _v0.a;
				return A2($elm$core$Elm$JsArray$unsafeGet, $elm$core$Array$bitMask & index, values);
			}
		}
	});
var $elm$core$Bitwise$shiftLeftBy = _Bitwise_shiftLeftBy;
var $elm$core$Array$tailIndex = function (len) {
	return (len >>> 5) << 5;
};
var $elm$core$Array$get = F2(
	function (index, _v0) {
		var len = _v0.a;
		var startShift = _v0.b;
		var tree = _v0.c;
		var tail = _v0.d;
		return ((index < 0) || (_Utils_cmp(index, len) > -1)) ? $elm$core$Maybe$Nothing : ((_Utils_cmp(
			index,
			$elm$core$Array$tailIndex(len)) > -1) ? $elm$core$Maybe$Just(
			A2($elm$core$Elm$JsArray$unsafeGet, $elm$core$Array$bitMask & index, tail)) : $elm$core$Maybe$Just(
			A3($elm$core$Array$getHelp, startShift, index, tree)));
	});
var $elm$core$Elm$JsArray$appendN = _JsArray_appendN;
var $elm$core$Elm$JsArray$slice = _JsArray_slice;
var $elm$core$Array$appendHelpBuilder = F2(
	function (tail, builder) {
		var tailLen = $elm$core$Elm$JsArray$length(tail);
		var notAppended = ($elm$core$Array$branchFactor - $elm$core$Elm$JsArray$length(builder.tail)) - tailLen;
		var appended = A3($elm$core$Elm$JsArray$appendN, $elm$core$Array$branchFactor, builder.tail, tail);
		return (notAppended < 0) ? {
			nodeList: A2(
				$elm$core$List$cons,
				$elm$core$Array$Leaf(appended),
				builder.nodeList),
			nodeListSize: builder.nodeListSize + 1,
			tail: A3($elm$core$Elm$JsArray$slice, notAppended, tailLen, tail)
		} : ((!notAppended) ? {
			nodeList: A2(
				$elm$core$List$cons,
				$elm$core$Array$Leaf(appended),
				builder.nodeList),
			nodeListSize: builder.nodeListSize + 1,
			tail: $elm$core$Elm$JsArray$empty
		} : {nodeList: builder.nodeList, nodeListSize: builder.nodeListSize, tail: appended});
	});
var $elm$core$List$drop = F2(
	function (n, list) {
		drop:
		while (true) {
			if (n <= 0) {
				return list;
			} else {
				if (!list.b) {
					return list;
				} else {
					var x = list.a;
					var xs = list.b;
					var $temp$n = n - 1,
						$temp$list = xs;
					n = $temp$n;
					list = $temp$list;
					continue drop;
				}
			}
		}
	});
var $elm$core$Array$sliceLeft = F2(
	function (from, array) {
		var len = array.a;
		var tree = array.c;
		var tail = array.d;
		if (!from) {
			return array;
		} else {
			if (_Utils_cmp(
				from,
				$elm$core$Array$tailIndex(len)) > -1) {
				return A4(
					$elm$core$Array$Array_elm_builtin,
					len - from,
					$elm$core$Array$shiftStep,
					$elm$core$Elm$JsArray$empty,
					A3(
						$elm$core$Elm$JsArray$slice,
						from - $elm$core$Array$tailIndex(len),
						$elm$core$Elm$JsArray$length(tail),
						tail));
			} else {
				var skipNodes = (from / $elm$core$Array$branchFactor) | 0;
				var helper = F2(
					function (node, acc) {
						if (node.$ === 'SubTree') {
							var subTree = node.a;
							return A3($elm$core$Elm$JsArray$foldr, helper, acc, subTree);
						} else {
							var leaf = node.a;
							return A2($elm$core$List$cons, leaf, acc);
						}
					});
				var leafNodes = A3(
					$elm$core$Elm$JsArray$foldr,
					helper,
					_List_fromArray(
						[tail]),
					tree);
				var nodesToInsert = A2($elm$core$List$drop, skipNodes, leafNodes);
				if (!nodesToInsert.b) {
					return $elm$core$Array$empty;
				} else {
					var head = nodesToInsert.a;
					var rest = nodesToInsert.b;
					var firstSlice = from - (skipNodes * $elm$core$Array$branchFactor);
					var initialBuilder = {
						nodeList: _List_Nil,
						nodeListSize: 0,
						tail: A3(
							$elm$core$Elm$JsArray$slice,
							firstSlice,
							$elm$core$Elm$JsArray$length(head),
							head)
					};
					return A2(
						$elm$core$Array$builderToArray,
						true,
						A3($elm$core$List$foldl, $elm$core$Array$appendHelpBuilder, initialBuilder, rest));
				}
			}
		}
	});
var $elm$core$Array$fetchNewTail = F4(
	function (shift, end, treeEnd, tree) {
		fetchNewTail:
		while (true) {
			var pos = $elm$core$Array$bitMask & (treeEnd >>> shift);
			var _v0 = A2($elm$core$Elm$JsArray$unsafeGet, pos, tree);
			if (_v0.$ === 'SubTree') {
				var sub = _v0.a;
				var $temp$shift = shift - $elm$core$Array$shiftStep,
					$temp$end = end,
					$temp$treeEnd = treeEnd,
					$temp$tree = sub;
				shift = $temp$shift;
				end = $temp$end;
				treeEnd = $temp$treeEnd;
				tree = $temp$tree;
				continue fetchNewTail;
			} else {
				var values = _v0.a;
				return A3($elm$core$Elm$JsArray$slice, 0, $elm$core$Array$bitMask & end, values);
			}
		}
	});
var $elm$core$Array$hoistTree = F3(
	function (oldShift, newShift, tree) {
		hoistTree:
		while (true) {
			if ((_Utils_cmp(oldShift, newShift) < 1) || (!$elm$core$Elm$JsArray$length(tree))) {
				return tree;
			} else {
				var _v0 = A2($elm$core$Elm$JsArray$unsafeGet, 0, tree);
				if (_v0.$ === 'SubTree') {
					var sub = _v0.a;
					var $temp$oldShift = oldShift - $elm$core$Array$shiftStep,
						$temp$newShift = newShift,
						$temp$tree = sub;
					oldShift = $temp$oldShift;
					newShift = $temp$newShift;
					tree = $temp$tree;
					continue hoistTree;
				} else {
					return tree;
				}
			}
		}
	});
var $elm$core$Elm$JsArray$unsafeSet = _JsArray_unsafeSet;
var $elm$core$Array$sliceTree = F3(
	function (shift, endIdx, tree) {
		var lastPos = $elm$core$Array$bitMask & (endIdx >>> shift);
		var _v0 = A2($elm$core$Elm$JsArray$unsafeGet, lastPos, tree);
		if (_v0.$ === 'SubTree') {
			var sub = _v0.a;
			var newSub = A3($elm$core$Array$sliceTree, shift - $elm$core$Array$shiftStep, endIdx, sub);
			return (!$elm$core$Elm$JsArray$length(newSub)) ? A3($elm$core$Elm$JsArray$slice, 0, lastPos, tree) : A3(
				$elm$core$Elm$JsArray$unsafeSet,
				lastPos,
				$elm$core$Array$SubTree(newSub),
				A3($elm$core$Elm$JsArray$slice, 0, lastPos + 1, tree));
		} else {
			return A3($elm$core$Elm$JsArray$slice, 0, lastPos, tree);
		}
	});
var $elm$core$Array$sliceRight = F2(
	function (end, array) {
		var len = array.a;
		var startShift = array.b;
		var tree = array.c;
		var tail = array.d;
		if (_Utils_eq(end, len)) {
			return array;
		} else {
			if (_Utils_cmp(
				end,
				$elm$core$Array$tailIndex(len)) > -1) {
				return A4(
					$elm$core$Array$Array_elm_builtin,
					end,
					startShift,
					tree,
					A3($elm$core$Elm$JsArray$slice, 0, $elm$core$Array$bitMask & end, tail));
			} else {
				var endIdx = $elm$core$Array$tailIndex(end);
				var depth = $elm$core$Basics$floor(
					A2(
						$elm$core$Basics$logBase,
						$elm$core$Array$branchFactor,
						A2($elm$core$Basics$max, 1, endIdx - 1)));
				var newShift = A2($elm$core$Basics$max, 5, depth * $elm$core$Array$shiftStep);
				return A4(
					$elm$core$Array$Array_elm_builtin,
					end,
					newShift,
					A3(
						$elm$core$Array$hoistTree,
						startShift,
						newShift,
						A3($elm$core$Array$sliceTree, startShift, endIdx, tree)),
					A4($elm$core$Array$fetchNewTail, startShift, end, endIdx, tree));
			}
		}
	});
var $elm$core$Array$translateIndex = F2(
	function (index, _v0) {
		var len = _v0.a;
		var posIndex = (index < 0) ? (len + index) : index;
		return (posIndex < 0) ? 0 : ((_Utils_cmp(posIndex, len) > 0) ? len : posIndex);
	});
var $elm$core$Array$slice = F3(
	function (from, to, array) {
		var correctTo = A2($elm$core$Array$translateIndex, to, array);
		var correctFrom = A2($elm$core$Array$translateIndex, from, array);
		return (_Utils_cmp(correctFrom, correctTo) > 0) ? $elm$core$Array$empty : A2(
			$elm$core$Array$sliceLeft,
			correctFrom,
			A2($elm$core$Array$sliceRight, correctTo, array));
	});
var $elm$browser$Debugger$History$viewRecentSnapshots = F3(
	function (selectedIndex, recentMessagesNum, snapshots) {
		var messagesToFill = $elm$browser$Debugger$History$maxSnapshotSize - recentMessagesNum;
		var arrayLength = $elm$core$Array$length(snapshots);
		var snapshotsToRender = function () {
			var _v0 = _Utils_Tuple2(
				A2($elm$core$Array$get, arrayLength - 2, snapshots),
				A2($elm$core$Array$get, arrayLength - 1, snapshots));
			if ((_v0.a.$ === 'Just') && (_v0.b.$ === 'Just')) {
				var fillerSnapshot = _v0.a.a;
				var recentSnapshot = _v0.b.a;
				return $elm$core$Array$fromList(
					_List_fromArray(
						[
							{
							messages: A3($elm$core$Array$slice, 0, messagesToFill, fillerSnapshot.messages),
							model: fillerSnapshot.model
						},
							recentSnapshot
						]));
			} else {
				return snapshots;
			}
		}();
		var startingIndex = ((arrayLength * $elm$browser$Debugger$History$maxSnapshotSize) - $elm$browser$Debugger$History$maxSnapshotSize) - messagesToFill;
		return A3($elm$browser$Debugger$History$viewAllSnapshots, selectedIndex, startingIndex, snapshotsToRender);
	});
var $elm$browser$Debugger$History$view = F2(
	function (maybeIndex, _v0) {
		var snapshots = _v0.snapshots;
		var recent = _v0.recent;
		var numMessages = _v0.numMessages;
		var recentMessageStartIndex = numMessages - recent.numMessages;
		var index = A2($elm$core$Maybe$withDefault, -1, maybeIndex);
		var newStuff = A3(
			$elm$html$Html$Keyed$node,
			'div',
			_List_Nil,
			A3(
				$elm$core$List$foldr,
				$elm$browser$Debugger$History$consMsg(index),
				_Utils_Tuple2(recentMessageStartIndex, _List_Nil),
				recent.messages).b);
		var onlyRenderRecentMessages = (!_Utils_eq(index, -1)) || ($elm$core$Array$length(snapshots) < 2);
		var oldStuff = onlyRenderRecentMessages ? A4($elm$html$Html$Lazy$lazy3, $elm$browser$Debugger$History$viewAllSnapshots, index, 0, snapshots) : A4($elm$html$Html$Lazy$lazy3, $elm$browser$Debugger$History$viewRecentSnapshots, index, recent.numMessages, snapshots);
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$id('elm-debugger-sidebar'),
					A2($elm$html$Html$Attributes$style, 'width', '100%'),
					A2($elm$html$Html$Attributes$style, 'overflow-y', 'auto'),
					A2($elm$html$Html$Attributes$style, 'height', 'calc(100% - 72px)')
				]),
			A2(
				$elm$core$List$cons,
				$elm$browser$Debugger$History$styles,
				A2(
					$elm$core$List$cons,
					newStuff,
					A2(
						$elm$core$List$cons,
						oldStuff,
						onlyRenderRecentMessages ? _List_Nil : _List_fromArray(
							[
								$elm$browser$Debugger$History$showMoreButton(numMessages)
							])))));
	});
var $elm$browser$Debugger$Main$SwapLayout = {$: 'SwapLayout'};
var $elm$browser$Debugger$Main$toHistoryIcon = function (layout) {
	if (layout.$ === 'Horizontal') {
		return 'M13 1a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3h-10a3 3 0 0 1-3-3v-8a3 3 0 0 1 3-3z M13 3h-10a1 1 0 0 0-1 1v5h12v-5a1 1 0 0 0-1-1z M14 10h-12v2a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1z';
	} else {
		return 'M0 4a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3h-10a3 3 0 0 1-3-3z M2 4v8a1 1 0 0 0 1 1h2v-10h-2a1 1 0 0 0-1 1z M6 3v10h7a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1z';
	}
};
var $elm$browser$Debugger$Main$icon = function (path) {
	return A4(
		$elm$virtual_dom$VirtualDom$nodeNS,
		'http://www.w3.org/2000/svg',
		'svg',
		_List_fromArray(
			[
				A2($elm$virtual_dom$VirtualDom$attribute, 'viewBox', '0 0 16 16'),
				A2($elm$virtual_dom$VirtualDom$attribute, 'xmlns', 'http://www.w3.org/2000/svg'),
				A2($elm$virtual_dom$VirtualDom$attribute, 'fill', 'currentColor'),
				A2($elm$virtual_dom$VirtualDom$attribute, 'width', '16px'),
				A2($elm$virtual_dom$VirtualDom$attribute, 'height', '16px')
			]),
		_List_fromArray(
			[
				A4(
				$elm$virtual_dom$VirtualDom$nodeNS,
				'http://www.w3.org/2000/svg',
				'path',
				_List_fromArray(
					[
						A2($elm$virtual_dom$VirtualDom$attribute, 'd', path)
					]),
				_List_Nil)
			]));
};
var $elm$browser$Debugger$Main$viewHistoryButton = F3(
	function (label, msg, path) {
		return A2(
			$elm$html$Html$button,
			_List_fromArray(
				[
					A2($elm$html$Html$Attributes$style, 'display', 'flex'),
					A2($elm$html$Html$Attributes$style, 'flex-direction', 'row'),
					A2($elm$html$Html$Attributes$style, 'align-items', 'center'),
					A2($elm$html$Html$Attributes$style, 'background', 'none'),
					A2($elm$html$Html$Attributes$style, 'border', 'none'),
					A2($elm$html$Html$Attributes$style, 'color', 'inherit'),
					A2($elm$html$Html$Attributes$style, 'cursor', 'pointer'),
					$elm$html$Html$Events$onClick(msg)
				]),
			_List_fromArray(
				[
					$elm$browser$Debugger$Main$icon(path),
					A2(
					$elm$html$Html$span,
					_List_fromArray(
						[
							A2($elm$html$Html$Attributes$style, 'padding-left', '6px')
						]),
					_List_fromArray(
						[
							$elm$html$Html$text(label)
						]))
				]));
	});
var $elm$browser$Debugger$Main$viewHistoryOptions = function (layout) {
	return A2(
		$elm$html$Html$div,
		_List_fromArray(
			[
				A2($elm$html$Html$Attributes$style, 'width', '100%'),
				A2($elm$html$Html$Attributes$style, 'height', '36px'),
				A2($elm$html$Html$Attributes$style, 'display', 'flex'),
				A2($elm$html$Html$Attributes$style, 'flex-direction', 'row'),
				A2($elm$html$Html$Attributes$style, 'align-items', 'center'),
				A2($elm$html$Html$Attributes$style, 'justify-content', 'space-between'),
				A2($elm$html$Html$Attributes$style, 'background-color', 'rgb(50, 50, 50)')
			]),
		_List_fromArray(
			[
				A3(
				$elm$browser$Debugger$Main$viewHistoryButton,
				'Swap Layout',
				$elm$browser$Debugger$Main$SwapLayout,
				$elm$browser$Debugger$Main$toHistoryIcon(layout)),
				A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						A2($elm$html$Html$Attributes$style, 'display', 'flex'),
						A2($elm$html$Html$Attributes$style, 'flex-direction', 'row'),
						A2($elm$html$Html$Attributes$style, 'align-items', 'center'),
						A2($elm$html$Html$Attributes$style, 'justify-content', 'space-between')
					]),
				_List_fromArray(
					[
						A3($elm$browser$Debugger$Main$viewHistoryButton, 'Import', $elm$browser$Debugger$Main$Import, 'M5 1a1 1 0 0 1 0 2h-2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1a1 1 0 0 1 2 0a3 3 0 0 1-3 3h-10a3 3 0 0 1-3-3v-8a3 3 0 0 1 3-3z M10 2a1 1 0 0 0 -2 0v6a1 1 0 0 0 1 1h6a1 1 0 0 0 0-2h-3.586l4.293-4.293a1 1 0 0 0-1.414-1.414l-4.293 4.293z'),
						A3($elm$browser$Debugger$Main$viewHistoryButton, 'Export', $elm$browser$Debugger$Main$Export, 'M5 1a1 1 0 0 1 0 2h-2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1 a1 1 0 0 1 2 0a3 3 0 0 1-3 3h-10a3 3 0 0 1-3-3v-8a3 3 0 0 1 3-3z M9 3a1 1 0 1 1 0-2h6a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0v-3.586l-5.293 5.293 a1 1 0 0 1-1.414-1.414l5.293 -5.293z')
					]))
			]));
};
var $elm$browser$Debugger$Main$SliderJump = function (a) {
	return {$: 'SliderJump', a: a};
};
var $elm$core$Basics$composeR = F3(
	function (f, g, x) {
		return g(
			f(x));
	});
var $elm$html$Html$input = _VirtualDom_node('input');
var $elm$browser$Debugger$Main$isPlaying = function (maybeIndex) {
	if (maybeIndex.$ === 'Nothing') {
		return true;
	} else {
		return false;
	}
};
var $elm$html$Html$Attributes$max = $elm$html$Html$Attributes$stringProperty('max');
var $elm$html$Html$Attributes$min = $elm$html$Html$Attributes$stringProperty('min');
var $elm$html$Html$Events$alwaysStop = function (x) {
	return _Utils_Tuple2(x, true);
};
var $elm$virtual_dom$VirtualDom$MayStopPropagation = function (a) {
	return {$: 'MayStopPropagation', a: a};
};
var $elm$html$Html$Events$stopPropagationOn = F2(
	function (event, decoder) {
		return A2(
			$elm$virtual_dom$VirtualDom$on,
			event,
			$elm$virtual_dom$VirtualDom$MayStopPropagation(decoder));
	});
var $elm$json$Json$Decode$string = _Json_decodeString;
var $elm$html$Html$Events$targetValue = A2(
	$elm$json$Json$Decode$at,
	_List_fromArray(
		['target', 'value']),
	$elm$json$Json$Decode$string);
var $elm$html$Html$Events$onInput = function (tagger) {
	return A2(
		$elm$html$Html$Events$stopPropagationOn,
		'input',
		A2(
			$elm$json$Json$Decode$map,
			$elm$html$Html$Events$alwaysStop,
			A2($elm$json$Json$Decode$map, tagger, $elm$html$Html$Events$targetValue)));
};
var $elm$core$String$toInt = _String_toInt;
var $elm$html$Html$Attributes$type_ = $elm$html$Html$Attributes$stringProperty('type');
var $elm$html$Html$Attributes$value = $elm$html$Html$Attributes$stringProperty('value');
var $elm$browser$Debugger$Main$viewPlayButton = function (playing) {
	return A2(
		$elm$html$Html$button,
		_List_fromArray(
			[
				A2($elm$html$Html$Attributes$style, 'background', '#1293D8'),
				A2($elm$html$Html$Attributes$style, 'border', 'none'),
				A2($elm$html$Html$Attributes$style, 'color', 'white'),
				A2($elm$html$Html$Attributes$style, 'cursor', 'pointer'),
				A2($elm$html$Html$Attributes$style, 'width', '36px'),
				A2($elm$html$Html$Attributes$style, 'height', '36px'),
				$elm$html$Html$Events$onClick($elm$browser$Debugger$Main$Resume)
			]),
		_List_fromArray(
			[
				playing ? $elm$browser$Debugger$Main$icon('M2 2h4v12h-4v-12z M10 2h4v12h-4v-12z') : $elm$browser$Debugger$Main$icon('M2 2l12 7l-12 7z')
			]));
};
var $elm$browser$Debugger$Main$viewHistorySlider = F2(
	function (history, maybeIndex) {
		var lastIndex = $elm$browser$Debugger$History$size(history) - 1;
		var selectedIndex = A2($elm$core$Maybe$withDefault, lastIndex, maybeIndex);
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					A2($elm$html$Html$Attributes$style, 'display', 'flex'),
					A2($elm$html$Html$Attributes$style, 'flex-direction', 'row'),
					A2($elm$html$Html$Attributes$style, 'align-items', 'center'),
					A2($elm$html$Html$Attributes$style, 'width', '100%'),
					A2($elm$html$Html$Attributes$style, 'height', '36px'),
					A2($elm$html$Html$Attributes$style, 'background-color', 'rgb(50, 50, 50)')
				]),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$Lazy$lazy,
					$elm$browser$Debugger$Main$viewPlayButton,
					$elm$browser$Debugger$Main$isPlaying(maybeIndex)),
					A2(
					$elm$html$Html$input,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$type_('range'),
							A2($elm$html$Html$Attributes$style, 'width', 'calc(100% - 56px)'),
							A2($elm$html$Html$Attributes$style, 'height', '36px'),
							A2($elm$html$Html$Attributes$style, 'margin', '0 10px'),
							$elm$html$Html$Attributes$min('0'),
							$elm$html$Html$Attributes$max(
							$elm$core$String$fromInt(lastIndex)),
							$elm$html$Html$Attributes$value(
							$elm$core$String$fromInt(selectedIndex)),
							$elm$html$Html$Events$onInput(
							A2(
								$elm$core$Basics$composeR,
								$elm$core$String$toInt,
								A2(
									$elm$core$Basics$composeR,
									$elm$core$Maybe$withDefault(lastIndex),
									$elm$browser$Debugger$Main$SliderJump)))
						]),
					_List_Nil)
				]));
	});
var $elm$browser$Debugger$Main$viewHistory = F3(
	function (maybeIndex, history, layout) {
		var block = $elm$browser$Debugger$Main$toMouseBlocker(layout);
		var _v0 = $elm$browser$Debugger$Main$toHistoryPercents(layout);
		var w = _v0.a;
		var h = _v0.b;
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					A2($elm$html$Html$Attributes$style, 'width', w),
					A2($elm$html$Html$Attributes$style, 'height', h),
					A2($elm$html$Html$Attributes$style, 'display', 'flex'),
					A2($elm$html$Html$Attributes$style, 'flex-direction', 'column'),
					A2($elm$html$Html$Attributes$style, 'color', '#DDDDDD'),
					A2($elm$html$Html$Attributes$style, 'background-color', 'rgb(61, 61, 61)'),
					A2($elm$html$Html$Attributes$style, 'pointer-events', block),
					A2($elm$html$Html$Attributes$style, 'user-select', block)
				]),
			_List_fromArray(
				[
					A2($elm$browser$Debugger$Main$viewHistorySlider, history, maybeIndex),
					A2(
					$elm$html$Html$map,
					$elm$browser$Debugger$Main$Jump,
					A2($elm$browser$Debugger$History$view, maybeIndex, history)),
					A2($elm$html$Html$Lazy$lazy, $elm$browser$Debugger$Main$viewHistoryOptions, layout)
				]));
	});
var $elm$browser$Debugger$Main$popoutView = function (model) {
	var maybeIndex = function () {
		var _v0 = model.state;
		if (_v0.$ === 'Running') {
			return $elm$core$Maybe$Nothing;
		} else {
			var index = _v0.a;
			return $elm$core$Maybe$Just(index);
		}
	}();
	var historyToRender = $elm$browser$Debugger$Main$cachedHistory(model);
	return A3(
		$elm$html$Html$node,
		'body',
		_Utils_ap(
			$elm$browser$Debugger$Main$toDragListeners(model.layout),
			_List_fromArray(
				[
					A2($elm$html$Html$Attributes$style, 'margin', '0'),
					A2($elm$html$Html$Attributes$style, 'padding', '0'),
					A2($elm$html$Html$Attributes$style, 'width', '100%'),
					A2($elm$html$Html$Attributes$style, 'height', '100%'),
					A2($elm$html$Html$Attributes$style, 'font-family', 'monospace'),
					A2($elm$html$Html$Attributes$style, 'display', 'flex'),
					A2(
					$elm$html$Html$Attributes$style,
					'flex-direction',
					$elm$browser$Debugger$Main$toFlexDirection(model.layout))
				])),
		_List_fromArray(
			[
				A3($elm$browser$Debugger$Main$viewHistory, maybeIndex, historyToRender, model.layout),
				$elm$browser$Debugger$Main$viewDragZone(model.layout),
				A3($elm$browser$Debugger$Main$viewExpando, model.expandoMsg, model.expandoModel, model.layout)
			]));
};
var $elm$browser$Debugger$Overlay$BlockAll = {$: 'BlockAll'};
var $elm$browser$Debugger$Overlay$toBlockerType = F2(
	function (isPaused, state) {
		switch (state.$) {
			case 'None':
				return isPaused ? $elm$browser$Debugger$Overlay$BlockAll : $elm$browser$Debugger$Overlay$BlockNone;
			case 'BadMetadata':
				return $elm$browser$Debugger$Overlay$BlockMost;
			case 'BadImport':
				return $elm$browser$Debugger$Overlay$BlockMost;
			default:
				return $elm$browser$Debugger$Overlay$BlockMost;
		}
	});
var $elm$browser$Debugger$Main$toBlockerType = function (model) {
	return A2(
		$elm$browser$Debugger$Overlay$toBlockerType,
		$elm$browser$Debugger$Main$isPaused(model.state),
		model.overlay);
};
var $elm$browser$Debugger$Main$Horizontal = F3(
	function (a, b, c) {
		return {$: 'Horizontal', a: a, b: b, c: c};
	});
var $elm$browser$Debugger$Main$Running = function (a) {
	return {$: 'Running', a: a};
};
var $elm$browser$Debugger$Main$Static = {$: 'Static'};
var $elm$browser$Debugger$Metadata$Error = F2(
	function (message, problems) {
		return {message: message, problems: problems};
	});
var $elm$json$Json$Decode$decodeValue = _Json_run;
var $elm$browser$Debugger$Metadata$Metadata = F2(
	function (versions, types) {
		return {types: types, versions: versions};
	});
var $elm$browser$Debugger$Metadata$Types = F3(
	function (message, aliases, unions) {
		return {aliases: aliases, message: message, unions: unions};
	});
var $elm$browser$Debugger$Metadata$Alias = F2(
	function (args, tipe) {
		return {args: args, tipe: tipe};
	});
var $elm$json$Json$Decode$list = _Json_decodeList;
var $elm$browser$Debugger$Metadata$decodeAlias = A3(
	$elm$json$Json$Decode$map2,
	$elm$browser$Debugger$Metadata$Alias,
	A2(
		$elm$json$Json$Decode$field,
		'args',
		$elm$json$Json$Decode$list($elm$json$Json$Decode$string)),
	A2($elm$json$Json$Decode$field, 'type', $elm$json$Json$Decode$string));
var $elm$browser$Debugger$Metadata$Union = F2(
	function (args, tags) {
		return {args: args, tags: tags};
	});
var $elm$core$Dict$fromList = function (assocs) {
	return A3(
		$elm$core$List$foldl,
		F2(
			function (_v0, dict) {
				var key = _v0.a;
				var value = _v0.b;
				return A3($elm$core$Dict$insert, key, value, dict);
			}),
		$elm$core$Dict$empty,
		assocs);
};
var $elm$json$Json$Decode$keyValuePairs = _Json_decodeKeyValuePairs;
var $elm$json$Json$Decode$dict = function (decoder) {
	return A2(
		$elm$json$Json$Decode$map,
		$elm$core$Dict$fromList,
		$elm$json$Json$Decode$keyValuePairs(decoder));
};
var $elm$browser$Debugger$Metadata$decodeUnion = A3(
	$elm$json$Json$Decode$map2,
	$elm$browser$Debugger$Metadata$Union,
	A2(
		$elm$json$Json$Decode$field,
		'args',
		$elm$json$Json$Decode$list($elm$json$Json$Decode$string)),
	A2(
		$elm$json$Json$Decode$field,
		'tags',
		$elm$json$Json$Decode$dict(
			$elm$json$Json$Decode$list($elm$json$Json$Decode$string))));
var $elm$json$Json$Decode$map3 = _Json_map3;
var $elm$browser$Debugger$Metadata$decodeTypes = A4(
	$elm$json$Json$Decode$map3,
	$elm$browser$Debugger$Metadata$Types,
	A2($elm$json$Json$Decode$field, 'message', $elm$json$Json$Decode$string),
	A2(
		$elm$json$Json$Decode$field,
		'aliases',
		$elm$json$Json$Decode$dict($elm$browser$Debugger$Metadata$decodeAlias)),
	A2(
		$elm$json$Json$Decode$field,
		'unions',
		$elm$json$Json$Decode$dict($elm$browser$Debugger$Metadata$decodeUnion)));
var $elm$browser$Debugger$Metadata$Versions = function (elm) {
	return {elm: elm};
};
var $elm$browser$Debugger$Metadata$decodeVersions = A2(
	$elm$json$Json$Decode$map,
	$elm$browser$Debugger$Metadata$Versions,
	A2($elm$json$Json$Decode$field, 'elm', $elm$json$Json$Decode$string));
var $elm$browser$Debugger$Metadata$decoder = A3(
	$elm$json$Json$Decode$map2,
	$elm$browser$Debugger$Metadata$Metadata,
	A2($elm$json$Json$Decode$field, 'versions', $elm$browser$Debugger$Metadata$decodeVersions),
	A2($elm$json$Json$Decode$field, 'types', $elm$browser$Debugger$Metadata$decodeTypes));
var $elm$browser$Debugger$Metadata$ProblemType = F2(
	function (name, problems) {
		return {name: name, problems: problems};
	});
var $elm$core$List$maybeCons = F3(
	function (f, mx, xs) {
		var _v0 = f(mx);
		if (_v0.$ === 'Just') {
			var x = _v0.a;
			return A2($elm$core$List$cons, x, xs);
		} else {
			return xs;
		}
	});
var $elm$core$List$filterMap = F2(
	function (f, xs) {
		return A3(
			$elm$core$List$foldr,
			$elm$core$List$maybeCons(f),
			_List_Nil,
			xs);
	});
var $elm$core$String$contains = _String_contains;
var $elm$browser$Debugger$Metadata$hasProblem = F2(
	function (tipe, _v0) {
		var problem = _v0.a;
		var token = _v0.b;
		return A2($elm$core$String$contains, token, tipe) ? $elm$core$Maybe$Just(problem) : $elm$core$Maybe$Nothing;
	});
var $elm$browser$Debugger$Metadata$Decoder = {$: 'Decoder'};
var $elm$browser$Debugger$Metadata$Function = {$: 'Function'};
var $elm$browser$Debugger$Metadata$Process = {$: 'Process'};
var $elm$browser$Debugger$Metadata$Program = {$: 'Program'};
var $elm$browser$Debugger$Metadata$Request = {$: 'Request'};
var $elm$browser$Debugger$Metadata$Socket = {$: 'Socket'};
var $elm$browser$Debugger$Metadata$Task = {$: 'Task'};
var $elm$browser$Debugger$Metadata$VirtualDom = {$: 'VirtualDom'};
var $elm$browser$Debugger$Metadata$problemTable = _List_fromArray(
	[
		_Utils_Tuple2($elm$browser$Debugger$Metadata$Function, '->'),
		_Utils_Tuple2($elm$browser$Debugger$Metadata$Decoder, 'Json.Decode.Decoder'),
		_Utils_Tuple2($elm$browser$Debugger$Metadata$Task, 'Task.Task'),
		_Utils_Tuple2($elm$browser$Debugger$Metadata$Process, 'Process.Id'),
		_Utils_Tuple2($elm$browser$Debugger$Metadata$Socket, 'WebSocket.LowLevel.WebSocket'),
		_Utils_Tuple2($elm$browser$Debugger$Metadata$Request, 'Http.Request'),
		_Utils_Tuple2($elm$browser$Debugger$Metadata$Program, 'Platform.Program'),
		_Utils_Tuple2($elm$browser$Debugger$Metadata$VirtualDom, 'VirtualDom.Node'),
		_Utils_Tuple2($elm$browser$Debugger$Metadata$VirtualDom, 'VirtualDom.Attribute')
	]);
var $elm$browser$Debugger$Metadata$findProblems = function (tipe) {
	return A2(
		$elm$core$List$filterMap,
		$elm$browser$Debugger$Metadata$hasProblem(tipe),
		$elm$browser$Debugger$Metadata$problemTable);
};
var $elm$browser$Debugger$Metadata$collectBadAliases = F3(
	function (name, _v0, list) {
		var tipe = _v0.tipe;
		var _v1 = $elm$browser$Debugger$Metadata$findProblems(tipe);
		if (!_v1.b) {
			return list;
		} else {
			var problems = _v1;
			return A2(
				$elm$core$List$cons,
				A2($elm$browser$Debugger$Metadata$ProblemType, name, problems),
				list);
		}
	});
var $elm$core$List$append = F2(
	function (xs, ys) {
		if (!ys.b) {
			return xs;
		} else {
			return A3($elm$core$List$foldr, $elm$core$List$cons, ys, xs);
		}
	});
var $elm$core$List$concat = function (lists) {
	return A3($elm$core$List$foldr, $elm$core$List$append, _List_Nil, lists);
};
var $elm$core$List$concatMap = F2(
	function (f, list) {
		return $elm$core$List$concat(
			A2($elm$core$List$map, f, list));
	});
var $elm$core$Dict$values = function (dict) {
	return A3(
		$elm$core$Dict$foldr,
		F3(
			function (key, value, valueList) {
				return A2($elm$core$List$cons, value, valueList);
			}),
		_List_Nil,
		dict);
};
var $elm$browser$Debugger$Metadata$collectBadUnions = F3(
	function (name, _v0, list) {
		var tags = _v0.tags;
		var _v1 = A2(
			$elm$core$List$concatMap,
			$elm$browser$Debugger$Metadata$findProblems,
			$elm$core$List$concat(
				$elm$core$Dict$values(tags)));
		if (!_v1.b) {
			return list;
		} else {
			var problems = _v1;
			return A2(
				$elm$core$List$cons,
				A2($elm$browser$Debugger$Metadata$ProblemType, name, problems),
				list);
		}
	});
var $elm$core$Dict$foldl = F3(
	function (func, acc, dict) {
		foldl:
		while (true) {
			if (dict.$ === 'RBEmpty_elm_builtin') {
				return acc;
			} else {
				var key = dict.b;
				var value = dict.c;
				var left = dict.d;
				var right = dict.e;
				var $temp$func = func,
					$temp$acc = A3(
					func,
					key,
					value,
					A3($elm$core$Dict$foldl, func, acc, left)),
					$temp$dict = right;
				func = $temp$func;
				acc = $temp$acc;
				dict = $temp$dict;
				continue foldl;
			}
		}
	});
var $elm$browser$Debugger$Metadata$isPortable = function (_v0) {
	var types = _v0.types;
	var badAliases = A3($elm$core$Dict$foldl, $elm$browser$Debugger$Metadata$collectBadAliases, _List_Nil, types.aliases);
	var _v1 = A3($elm$core$Dict$foldl, $elm$browser$Debugger$Metadata$collectBadUnions, badAliases, types.unions);
	if (!_v1.b) {
		return $elm$core$Maybe$Nothing;
	} else {
		var problems = _v1;
		return $elm$core$Maybe$Just(
			A2($elm$browser$Debugger$Metadata$Error, types.message, problems));
	}
};
var $elm$browser$Debugger$Metadata$decode = function (value) {
	var _v0 = A2($elm$json$Json$Decode$decodeValue, $elm$browser$Debugger$Metadata$decoder, value);
	if (_v0.$ === 'Err') {
		return $elm$core$Result$Err(
			A2($elm$browser$Debugger$Metadata$Error, 'The compiler is generating bad metadata. This is a compiler bug!', _List_Nil));
	} else {
		var metadata = _v0.a;
		var _v1 = $elm$browser$Debugger$Metadata$isPortable(metadata);
		if (_v1.$ === 'Nothing') {
			return $elm$core$Result$Ok(metadata);
		} else {
			var error = _v1.a;
			return $elm$core$Result$Err(error);
		}
	}
};
var $elm$browser$Debugger$History$History = F3(
	function (snapshots, recent, numMessages) {
		return {numMessages: numMessages, recent: recent, snapshots: snapshots};
	});
var $elm$browser$Debugger$History$RecentHistory = F3(
	function (model, messages, numMessages) {
		return {messages: messages, model: model, numMessages: numMessages};
	});
var $elm$browser$Debugger$History$empty = function (model) {
	return A3(
		$elm$browser$Debugger$History$History,
		$elm$core$Array$empty,
		A3($elm$browser$Debugger$History$RecentHistory, model, _List_Nil, 0),
		0);
};
var $elm$core$Dict$map = F2(
	function (func, dict) {
		if (dict.$ === 'RBEmpty_elm_builtin') {
			return $elm$core$Dict$RBEmpty_elm_builtin;
		} else {
			var color = dict.a;
			var key = dict.b;
			var value = dict.c;
			var left = dict.d;
			var right = dict.e;
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				color,
				key,
				A2(func, key, value),
				A2($elm$core$Dict$map, func, left),
				A2($elm$core$Dict$map, func, right));
		}
	});
var $elm$core$Dict$sizeHelp = F2(
	function (n, dict) {
		sizeHelp:
		while (true) {
			if (dict.$ === 'RBEmpty_elm_builtin') {
				return n;
			} else {
				var left = dict.d;
				var right = dict.e;
				var $temp$n = A2($elm$core$Dict$sizeHelp, n + 1, right),
					$temp$dict = left;
				n = $temp$n;
				dict = $temp$dict;
				continue sizeHelp;
			}
		}
	});
var $elm$core$Dict$size = function (dict) {
	return A2($elm$core$Dict$sizeHelp, 0, dict);
};
var $elm$browser$Debugger$Expando$initHelp = F2(
	function (isOuter, expando) {
		switch (expando.$) {
			case 'S':
				return expando;
			case 'Primitive':
				return expando;
			case 'Sequence':
				var seqType = expando.a;
				var isClosed = expando.b;
				var items = expando.c;
				return isOuter ? A3(
					$elm$browser$Debugger$Expando$Sequence,
					seqType,
					false,
					A2(
						$elm$core$List$map,
						$elm$browser$Debugger$Expando$initHelp(false),
						items)) : (($elm$core$List$length(items) <= 8) ? A3($elm$browser$Debugger$Expando$Sequence, seqType, false, items) : expando);
			case 'Dictionary':
				var isClosed = expando.a;
				var keyValuePairs = expando.b;
				return isOuter ? A2(
					$elm$browser$Debugger$Expando$Dictionary,
					false,
					A2(
						$elm$core$List$map,
						function (_v1) {
							var k = _v1.a;
							var v = _v1.b;
							return _Utils_Tuple2(
								k,
								A2($elm$browser$Debugger$Expando$initHelp, false, v));
						},
						keyValuePairs)) : (($elm$core$List$length(keyValuePairs) <= 8) ? A2($elm$browser$Debugger$Expando$Dictionary, false, keyValuePairs) : expando);
			case 'Record':
				var isClosed = expando.a;
				var entries = expando.b;
				return isOuter ? A2(
					$elm$browser$Debugger$Expando$Record,
					false,
					A2(
						$elm$core$Dict$map,
						F2(
							function (_v2, v) {
								return A2($elm$browser$Debugger$Expando$initHelp, false, v);
							}),
						entries)) : (($elm$core$Dict$size(entries) <= 4) ? A2($elm$browser$Debugger$Expando$Record, false, entries) : expando);
			default:
				var maybeName = expando.a;
				var isClosed = expando.b;
				var args = expando.c;
				return isOuter ? A3(
					$elm$browser$Debugger$Expando$Constructor,
					maybeName,
					false,
					A2(
						$elm$core$List$map,
						$elm$browser$Debugger$Expando$initHelp(false),
						args)) : (($elm$core$List$length(args) <= 4) ? A3($elm$browser$Debugger$Expando$Constructor, maybeName, false, args) : expando);
		}
	});
var $elm$browser$Debugger$Expando$init = function (value) {
	return A2(
		$elm$browser$Debugger$Expando$initHelp,
		true,
		_Debugger_init(value));
};
var $elm$core$Platform$Cmd$map = _Platform_map;
var $elm$browser$Debugger$Overlay$None = {$: 'None'};
var $elm$browser$Debugger$Overlay$none = $elm$browser$Debugger$Overlay$None;
var $elm$browser$Debugger$Main$wrapInit = F4(
	function (metadata, popout, init, flags) {
		var _v0 = init(flags);
		var userModel = _v0.a;
		var userCommands = _v0.b;
		return _Utils_Tuple2(
			{
				expandoModel: $elm$browser$Debugger$Expando$init(userModel),
				expandoMsg: $elm$browser$Debugger$Expando$init(_Utils_Tuple0),
				history: $elm$browser$Debugger$History$empty(userModel),
				layout: A3($elm$browser$Debugger$Main$Horizontal, $elm$browser$Debugger$Main$Static, 0.3, 0.5),
				metadata: $elm$browser$Debugger$Metadata$decode(metadata),
				overlay: $elm$browser$Debugger$Overlay$none,
				popout: popout,
				state: $elm$browser$Debugger$Main$Running(userModel)
			},
			A2($elm$core$Platform$Cmd$map, $elm$browser$Debugger$Main$UserMsg, userCommands));
	});
var $elm$browser$Debugger$Main$getLatestModel = function (state) {
	if (state.$ === 'Running') {
		var model = state.a;
		return model;
	} else {
		var model = state.c;
		return model;
	}
};
var $elm$core$Platform$Sub$map = _Platform_map;
var $elm$browser$Debugger$Main$wrapSubs = F2(
	function (subscriptions, model) {
		return A2(
			$elm$core$Platform$Sub$map,
			$elm$browser$Debugger$Main$UserMsg,
			subscriptions(
				$elm$browser$Debugger$Main$getLatestModel(model.state)));
	});
var $elm$browser$Debugger$Main$Moving = {$: 'Moving'};
var $elm$browser$Debugger$Main$Paused = F5(
	function (a, b, c, d, e) {
		return {$: 'Paused', a: a, b: b, c: c, d: d, e: e};
	});
var $elm$browser$Debugger$History$Snapshot = F2(
	function (model, messages) {
		return {messages: messages, model: model};
	});
var $elm$browser$Debugger$History$addRecent = F3(
	function (msg, newModel, _v0) {
		var model = _v0.model;
		var messages = _v0.messages;
		var numMessages = _v0.numMessages;
		return _Utils_eq(numMessages, $elm$browser$Debugger$History$maxSnapshotSize) ? _Utils_Tuple2(
			$elm$core$Maybe$Just(
				A2(
					$elm$browser$Debugger$History$Snapshot,
					model,
					$elm$core$Array$fromList(messages))),
			A3(
				$elm$browser$Debugger$History$RecentHistory,
				newModel,
				_List_fromArray(
					[msg]),
				1)) : _Utils_Tuple2(
			$elm$core$Maybe$Nothing,
			A3(
				$elm$browser$Debugger$History$RecentHistory,
				model,
				A2($elm$core$List$cons, msg, messages),
				numMessages + 1));
	});
var $elm$core$Elm$JsArray$push = _JsArray_push;
var $elm$core$Elm$JsArray$singleton = _JsArray_singleton;
var $elm$core$Array$insertTailInTree = F4(
	function (shift, index, tail, tree) {
		var pos = $elm$core$Array$bitMask & (index >>> shift);
		if (_Utils_cmp(
			pos,
			$elm$core$Elm$JsArray$length(tree)) > -1) {
			if (shift === 5) {
				return A2(
					$elm$core$Elm$JsArray$push,
					$elm$core$Array$Leaf(tail),
					tree);
			} else {
				var newSub = $elm$core$Array$SubTree(
					A4($elm$core$Array$insertTailInTree, shift - $elm$core$Array$shiftStep, index, tail, $elm$core$Elm$JsArray$empty));
				return A2($elm$core$Elm$JsArray$push, newSub, tree);
			}
		} else {
			var value = A2($elm$core$Elm$JsArray$unsafeGet, pos, tree);
			if (value.$ === 'SubTree') {
				var subTree = value.a;
				var newSub = $elm$core$Array$SubTree(
					A4($elm$core$Array$insertTailInTree, shift - $elm$core$Array$shiftStep, index, tail, subTree));
				return A3($elm$core$Elm$JsArray$unsafeSet, pos, newSub, tree);
			} else {
				var newSub = $elm$core$Array$SubTree(
					A4(
						$elm$core$Array$insertTailInTree,
						shift - $elm$core$Array$shiftStep,
						index,
						tail,
						$elm$core$Elm$JsArray$singleton(value)));
				return A3($elm$core$Elm$JsArray$unsafeSet, pos, newSub, tree);
			}
		}
	});
var $elm$core$Array$unsafeReplaceTail = F2(
	function (newTail, _v0) {
		var len = _v0.a;
		var startShift = _v0.b;
		var tree = _v0.c;
		var tail = _v0.d;
		var originalTailLen = $elm$core$Elm$JsArray$length(tail);
		var newTailLen = $elm$core$Elm$JsArray$length(newTail);
		var newArrayLen = len + (newTailLen - originalTailLen);
		if (_Utils_eq(newTailLen, $elm$core$Array$branchFactor)) {
			var overflow = _Utils_cmp(newArrayLen >>> $elm$core$Array$shiftStep, 1 << startShift) > 0;
			if (overflow) {
				var newShift = startShift + $elm$core$Array$shiftStep;
				var newTree = A4(
					$elm$core$Array$insertTailInTree,
					newShift,
					len,
					newTail,
					$elm$core$Elm$JsArray$singleton(
						$elm$core$Array$SubTree(tree)));
				return A4($elm$core$Array$Array_elm_builtin, newArrayLen, newShift, newTree, $elm$core$Elm$JsArray$empty);
			} else {
				return A4(
					$elm$core$Array$Array_elm_builtin,
					newArrayLen,
					startShift,
					A4($elm$core$Array$insertTailInTree, startShift, len, newTail, tree),
					$elm$core$Elm$JsArray$empty);
			}
		} else {
			return A4($elm$core$Array$Array_elm_builtin, newArrayLen, startShift, tree, newTail);
		}
	});
var $elm$core$Array$push = F2(
	function (a, array) {
		var tail = array.d;
		return A2(
			$elm$core$Array$unsafeReplaceTail,
			A2($elm$core$Elm$JsArray$push, a, tail),
			array);
	});
var $elm$browser$Debugger$History$add = F3(
	function (msg, model, _v0) {
		var snapshots = _v0.snapshots;
		var recent = _v0.recent;
		var numMessages = _v0.numMessages;
		var _v1 = A3($elm$browser$Debugger$History$addRecent, msg, model, recent);
		if (_v1.a.$ === 'Just') {
			var snapshot = _v1.a.a;
			var newRecent = _v1.b;
			return A3(
				$elm$browser$Debugger$History$History,
				A2($elm$core$Array$push, snapshot, snapshots),
				newRecent,
				numMessages + 1);
		} else {
			var _v2 = _v1.a;
			var newRecent = _v1.b;
			return A3($elm$browser$Debugger$History$History, snapshots, newRecent, numMessages + 1);
		}
	});
var $elm$core$Basics$always = F2(
	function (a, _v0) {
		return a;
	});
var $elm$browser$Debugger$Overlay$BadImport = function (a) {
	return {$: 'BadImport', a: a};
};
var $elm$browser$Debugger$Overlay$RiskyImport = F2(
	function (a, b) {
		return {$: 'RiskyImport', a: a, b: b};
	});
var $elm$browser$Debugger$Report$VersionChanged = F2(
	function (a, b) {
		return {$: 'VersionChanged', a: a, b: b};
	});
var $elm$browser$Debugger$Report$MessageChanged = F2(
	function (a, b) {
		return {$: 'MessageChanged', a: a, b: b};
	});
var $elm$browser$Debugger$Report$SomethingChanged = function (a) {
	return {$: 'SomethingChanged', a: a};
};
var $elm$browser$Debugger$Report$AliasChange = function (a) {
	return {$: 'AliasChange', a: a};
};
var $elm$browser$Debugger$Metadata$checkAlias = F4(
	function (name, old, _new, changes) {
		return (_Utils_eq(old.tipe, _new.tipe) && _Utils_eq(old.args, _new.args)) ? changes : A2(
			$elm$core$List$cons,
			$elm$browser$Debugger$Report$AliasChange(name),
			changes);
	});
var $elm$browser$Debugger$Report$UnionChange = F2(
	function (a, b) {
		return {$: 'UnionChange', a: a, b: b};
	});
var $elm$browser$Debugger$Metadata$addTag = F3(
	function (tag, _v0, changes) {
		return _Utils_update(
			changes,
			{
				added: A2($elm$core$List$cons, tag, changes.added)
			});
	});
var $elm$browser$Debugger$Metadata$checkTag = F4(
	function (tag, old, _new, changes) {
		return _Utils_eq(old, _new) ? changes : _Utils_update(
			changes,
			{
				changed: A2($elm$core$List$cons, tag, changes.changed)
			});
	});
var $elm$browser$Debugger$Report$TagChanges = F4(
	function (removed, changed, added, argsMatch) {
		return {added: added, argsMatch: argsMatch, changed: changed, removed: removed};
	});
var $elm$browser$Debugger$Report$emptyTagChanges = function (argsMatch) {
	return A4($elm$browser$Debugger$Report$TagChanges, _List_Nil, _List_Nil, _List_Nil, argsMatch);
};
var $elm$browser$Debugger$Report$hasTagChanges = function (tagChanges) {
	return _Utils_eq(
		tagChanges,
		A4($elm$browser$Debugger$Report$TagChanges, _List_Nil, _List_Nil, _List_Nil, true));
};
var $elm$core$Dict$merge = F6(
	function (leftStep, bothStep, rightStep, leftDict, rightDict, initialResult) {
		var stepState = F3(
			function (rKey, rValue, _v0) {
				stepState:
				while (true) {
					var list = _v0.a;
					var result = _v0.b;
					if (!list.b) {
						return _Utils_Tuple2(
							list,
							A3(rightStep, rKey, rValue, result));
					} else {
						var _v2 = list.a;
						var lKey = _v2.a;
						var lValue = _v2.b;
						var rest = list.b;
						if (_Utils_cmp(lKey, rKey) < 0) {
							var $temp$rKey = rKey,
								$temp$rValue = rValue,
								$temp$_v0 = _Utils_Tuple2(
								rest,
								A3(leftStep, lKey, lValue, result));
							rKey = $temp$rKey;
							rValue = $temp$rValue;
							_v0 = $temp$_v0;
							continue stepState;
						} else {
							if (_Utils_cmp(lKey, rKey) > 0) {
								return _Utils_Tuple2(
									list,
									A3(rightStep, rKey, rValue, result));
							} else {
								return _Utils_Tuple2(
									rest,
									A4(bothStep, lKey, lValue, rValue, result));
							}
						}
					}
				}
			});
		var _v3 = A3(
			$elm$core$Dict$foldl,
			stepState,
			_Utils_Tuple2(
				$elm$core$Dict$toList(leftDict),
				initialResult),
			rightDict);
		var leftovers = _v3.a;
		var intermediateResult = _v3.b;
		return A3(
			$elm$core$List$foldl,
			F2(
				function (_v4, result) {
					var k = _v4.a;
					var v = _v4.b;
					return A3(leftStep, k, v, result);
				}),
			intermediateResult,
			leftovers);
	});
var $elm$browser$Debugger$Metadata$removeTag = F3(
	function (tag, _v0, changes) {
		return _Utils_update(
			changes,
			{
				removed: A2($elm$core$List$cons, tag, changes.removed)
			});
	});
var $elm$browser$Debugger$Metadata$checkUnion = F4(
	function (name, old, _new, changes) {
		var tagChanges = A6(
			$elm$core$Dict$merge,
			$elm$browser$Debugger$Metadata$removeTag,
			$elm$browser$Debugger$Metadata$checkTag,
			$elm$browser$Debugger$Metadata$addTag,
			old.tags,
			_new.tags,
			$elm$browser$Debugger$Report$emptyTagChanges(
				_Utils_eq(old.args, _new.args)));
		return $elm$browser$Debugger$Report$hasTagChanges(tagChanges) ? changes : A2(
			$elm$core$List$cons,
			A2($elm$browser$Debugger$Report$UnionChange, name, tagChanges),
			changes);
	});
var $elm$browser$Debugger$Metadata$ignore = F3(
	function (key, value, report) {
		return report;
	});
var $elm$browser$Debugger$Metadata$checkTypes = F2(
	function (old, _new) {
		return (!_Utils_eq(old.message, _new.message)) ? A2($elm$browser$Debugger$Report$MessageChanged, old.message, _new.message) : $elm$browser$Debugger$Report$SomethingChanged(
			A6(
				$elm$core$Dict$merge,
				$elm$browser$Debugger$Metadata$ignore,
				$elm$browser$Debugger$Metadata$checkUnion,
				$elm$browser$Debugger$Metadata$ignore,
				old.unions,
				_new.unions,
				A6($elm$core$Dict$merge, $elm$browser$Debugger$Metadata$ignore, $elm$browser$Debugger$Metadata$checkAlias, $elm$browser$Debugger$Metadata$ignore, old.aliases, _new.aliases, _List_Nil)));
	});
var $elm$browser$Debugger$Metadata$check = F2(
	function (old, _new) {
		return (!_Utils_eq(old.versions.elm, _new.versions.elm)) ? A2($elm$browser$Debugger$Report$VersionChanged, old.versions.elm, _new.versions.elm) : A2($elm$browser$Debugger$Metadata$checkTypes, old.types, _new.types);
	});
var $elm$browser$Debugger$Report$CorruptHistory = {$: 'CorruptHistory'};
var $elm$browser$Debugger$Overlay$corruptImport = $elm$browser$Debugger$Overlay$BadImport($elm$browser$Debugger$Report$CorruptHistory);
var $elm$json$Json$Decode$decodeString = _Json_runOnString;
var $elm$browser$Debugger$Report$Fine = {$: 'Fine'};
var $elm$browser$Debugger$Report$Impossible = {$: 'Impossible'};
var $elm$browser$Debugger$Report$Risky = {$: 'Risky'};
var $elm$core$Basics$not = _Basics_not;
var $elm$core$List$isEmpty = function (xs) {
	if (!xs.b) {
		return true;
	} else {
		return false;
	}
};
var $elm$browser$Debugger$Report$some = function (list) {
	return !$elm$core$List$isEmpty(list);
};
var $elm$browser$Debugger$Report$evaluateChange = function (change) {
	if (change.$ === 'AliasChange') {
		return $elm$browser$Debugger$Report$Impossible;
	} else {
		var removed = change.b.removed;
		var changed = change.b.changed;
		var added = change.b.added;
		var argsMatch = change.b.argsMatch;
		return ((!argsMatch) || ($elm$browser$Debugger$Report$some(changed) || $elm$browser$Debugger$Report$some(removed))) ? $elm$browser$Debugger$Report$Impossible : ($elm$browser$Debugger$Report$some(added) ? $elm$browser$Debugger$Report$Risky : $elm$browser$Debugger$Report$Fine);
	}
};
var $elm$browser$Debugger$Report$worstCase = F2(
	function (status, statusList) {
		worstCase:
		while (true) {
			if (!statusList.b) {
				return status;
			} else {
				switch (statusList.a.$) {
					case 'Impossible':
						var _v1 = statusList.a;
						return $elm$browser$Debugger$Report$Impossible;
					case 'Risky':
						var _v2 = statusList.a;
						var rest = statusList.b;
						var $temp$status = $elm$browser$Debugger$Report$Risky,
							$temp$statusList = rest;
						status = $temp$status;
						statusList = $temp$statusList;
						continue worstCase;
					default:
						var _v3 = statusList.a;
						var rest = statusList.b;
						var $temp$status = status,
							$temp$statusList = rest;
						status = $temp$status;
						statusList = $temp$statusList;
						continue worstCase;
				}
			}
		}
	});
var $elm$browser$Debugger$Report$evaluate = function (report) {
	switch (report.$) {
		case 'CorruptHistory':
			return $elm$browser$Debugger$Report$Impossible;
		case 'VersionChanged':
			return $elm$browser$Debugger$Report$Impossible;
		case 'MessageChanged':
			return $elm$browser$Debugger$Report$Impossible;
		default:
			var changes = report.a;
			return A2(
				$elm$browser$Debugger$Report$worstCase,
				$elm$browser$Debugger$Report$Fine,
				A2($elm$core$List$map, $elm$browser$Debugger$Report$evaluateChange, changes));
	}
};
var $elm$json$Json$Decode$value = _Json_decodeValue;
var $elm$browser$Debugger$Overlay$uploadDecoder = A3(
	$elm$json$Json$Decode$map2,
	F2(
		function (x, y) {
			return _Utils_Tuple2(x, y);
		}),
	A2($elm$json$Json$Decode$field, 'metadata', $elm$browser$Debugger$Metadata$decoder),
	A2($elm$json$Json$Decode$field, 'history', $elm$json$Json$Decode$value));
var $elm$browser$Debugger$Overlay$assessImport = F2(
	function (metadata, jsonString) {
		var _v0 = A2($elm$json$Json$Decode$decodeString, $elm$browser$Debugger$Overlay$uploadDecoder, jsonString);
		if (_v0.$ === 'Err') {
			return $elm$core$Result$Err($elm$browser$Debugger$Overlay$corruptImport);
		} else {
			var _v1 = _v0.a;
			var foreignMetadata = _v1.a;
			var rawHistory = _v1.b;
			var report = A2($elm$browser$Debugger$Metadata$check, foreignMetadata, metadata);
			var _v2 = $elm$browser$Debugger$Report$evaluate(report);
			switch (_v2.$) {
				case 'Impossible':
					return $elm$core$Result$Err(
						$elm$browser$Debugger$Overlay$BadImport(report));
				case 'Risky':
					return $elm$core$Result$Err(
						A2($elm$browser$Debugger$Overlay$RiskyImport, report, rawHistory));
				default:
					return $elm$core$Result$Ok(rawHistory);
			}
		}
	});
var $elm$core$Platform$Cmd$batch = _Platform_batch;
var $elm$browser$Debugger$Overlay$close = F2(
	function (msg, state) {
		switch (state.$) {
			case 'None':
				return $elm$core$Maybe$Nothing;
			case 'BadMetadata':
				return $elm$core$Maybe$Nothing;
			case 'BadImport':
				return $elm$core$Maybe$Nothing;
			default:
				var rawHistory = state.b;
				if (msg.$ === 'Cancel') {
					return $elm$core$Maybe$Nothing;
				} else {
					return $elm$core$Maybe$Just(rawHistory);
				}
		}
	});
var $elm$browser$Debugger$History$elmToJs = A2($elm$core$Basics$composeR, _Json_wrap, _Debugger_unsafeCoerce);
var $elm$browser$Debugger$History$encodeHelp = F2(
	function (snapshot, allMessages) {
		return A3($elm$core$Array$foldl, $elm$core$List$cons, allMessages, snapshot.messages);
	});
var $elm$json$Json$Encode$list = F2(
	function (func, entries) {
		return _Json_wrap(
			A3(
				$elm$core$List$foldl,
				_Json_addEntry(func),
				_Json_emptyArray(_Utils_Tuple0),
				entries));
	});
var $elm$browser$Debugger$History$encode = function (_v0) {
	var snapshots = _v0.snapshots;
	var recent = _v0.recent;
	return A2(
		$elm$json$Json$Encode$list,
		$elm$browser$Debugger$History$elmToJs,
		A3(
			$elm$core$Array$foldr,
			$elm$browser$Debugger$History$encodeHelp,
			$elm$core$List$reverse(recent.messages),
			snapshots));
};
var $elm$json$Json$Encode$object = function (pairs) {
	return _Json_wrap(
		A3(
			$elm$core$List$foldl,
			F2(
				function (_v0, obj) {
					var k = _v0.a;
					var v = _v0.b;
					return A3(_Json_addField, k, v, obj);
				}),
			_Json_emptyObject(_Utils_Tuple0),
			pairs));
};
var $elm$browser$Debugger$Metadata$encodeAlias = function (_v0) {
	var args = _v0.args;
	var tipe = _v0.tipe;
	return $elm$json$Json$Encode$object(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'args',
				A2($elm$json$Json$Encode$list, $elm$json$Json$Encode$string, args)),
				_Utils_Tuple2(
				'type',
				$elm$json$Json$Encode$string(tipe))
			]));
};
var $elm$browser$Debugger$Metadata$encodeDict = F2(
	function (f, dict) {
		return $elm$json$Json$Encode$object(
			$elm$core$Dict$toList(
				A2(
					$elm$core$Dict$map,
					F2(
						function (key, value) {
							return f(value);
						}),
					dict)));
	});
var $elm$browser$Debugger$Metadata$encodeUnion = function (_v0) {
	var args = _v0.args;
	var tags = _v0.tags;
	return $elm$json$Json$Encode$object(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'args',
				A2($elm$json$Json$Encode$list, $elm$json$Json$Encode$string, args)),
				_Utils_Tuple2(
				'tags',
				A2(
					$elm$browser$Debugger$Metadata$encodeDict,
					$elm$json$Json$Encode$list($elm$json$Json$Encode$string),
					tags))
			]));
};
var $elm$browser$Debugger$Metadata$encodeTypes = function (_v0) {
	var message = _v0.message;
	var unions = _v0.unions;
	var aliases = _v0.aliases;
	return $elm$json$Json$Encode$object(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'message',
				$elm$json$Json$Encode$string(message)),
				_Utils_Tuple2(
				'aliases',
				A2($elm$browser$Debugger$Metadata$encodeDict, $elm$browser$Debugger$Metadata$encodeAlias, aliases)),
				_Utils_Tuple2(
				'unions',
				A2($elm$browser$Debugger$Metadata$encodeDict, $elm$browser$Debugger$Metadata$encodeUnion, unions))
			]));
};
var $elm$browser$Debugger$Metadata$encodeVersions = function (_v0) {
	var elm = _v0.elm;
	return $elm$json$Json$Encode$object(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'elm',
				$elm$json$Json$Encode$string(elm))
			]));
};
var $elm$browser$Debugger$Metadata$encode = function (_v0) {
	var versions = _v0.versions;
	var types = _v0.types;
	return $elm$json$Json$Encode$object(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'versions',
				$elm$browser$Debugger$Metadata$encodeVersions(versions)),
				_Utils_Tuple2(
				'types',
				$elm$browser$Debugger$Metadata$encodeTypes(types))
			]));
};
var $elm$core$Basics$identity = function (x) {
	return x;
};
var $elm$core$Task$Perform = function (a) {
	return {$: 'Perform', a: a};
};
var $elm$core$Task$succeed = _Scheduler_succeed;
var $elm$core$Task$init = $elm$core$Task$succeed(_Utils_Tuple0);
var $elm$core$Task$andThen = _Scheduler_andThen;
var $elm$core$Task$map = F2(
	function (func, taskA) {
		return A2(
			$elm$core$Task$andThen,
			function (a) {
				return $elm$core$Task$succeed(
					func(a));
			},
			taskA);
	});
var $elm$core$Task$map2 = F3(
	function (func, taskA, taskB) {
		return A2(
			$elm$core$Task$andThen,
			function (a) {
				return A2(
					$elm$core$Task$andThen,
					function (b) {
						return $elm$core$Task$succeed(
							A2(func, a, b));
					},
					taskB);
			},
			taskA);
	});
var $elm$core$Task$sequence = function (tasks) {
	return A3(
		$elm$core$List$foldr,
		$elm$core$Task$map2($elm$core$List$cons),
		$elm$core$Task$succeed(_List_Nil),
		tasks);
};
var $elm$core$Platform$sendToApp = _Platform_sendToApp;
var $elm$core$Task$spawnCmd = F2(
	function (router, _v0) {
		var task = _v0.a;
		return _Scheduler_spawn(
			A2(
				$elm$core$Task$andThen,
				$elm$core$Platform$sendToApp(router),
				task));
	});
var $elm$core$Task$onEffects = F3(
	function (router, commands, state) {
		return A2(
			$elm$core$Task$map,
			function (_v0) {
				return _Utils_Tuple0;
			},
			$elm$core$Task$sequence(
				A2(
					$elm$core$List$map,
					$elm$core$Task$spawnCmd(router),
					commands)));
	});
var $elm$core$Task$onSelfMsg = F3(
	function (_v0, _v1, _v2) {
		return $elm$core$Task$succeed(_Utils_Tuple0);
	});
var $elm$core$Task$cmdMap = F2(
	function (tagger, _v0) {
		var task = _v0.a;
		return $elm$core$Task$Perform(
			A2($elm$core$Task$map, tagger, task));
	});
_Platform_effectManagers['Task'] = _Platform_createManager($elm$core$Task$init, $elm$core$Task$onEffects, $elm$core$Task$onSelfMsg, $elm$core$Task$cmdMap);
var $elm$core$Task$command = _Platform_leaf('Task');
var $elm$core$Task$perform = F2(
	function (toMessage, task) {
		return $elm$core$Task$command(
			$elm$core$Task$Perform(
				A2($elm$core$Task$map, toMessage, task)));
	});
var $elm$browser$Debugger$Main$download = F2(
	function (metadata, history) {
		var historyLength = $elm$browser$Debugger$History$size(history);
		return A2(
			$elm$core$Task$perform,
			function (_v0) {
				return $elm$browser$Debugger$Main$NoOp;
			},
			A2(
				_Debugger_download,
				historyLength,
				_Json_unwrap(
					$elm$json$Json$Encode$object(
						_List_fromArray(
							[
								_Utils_Tuple2(
								'metadata',
								$elm$browser$Debugger$Metadata$encode(metadata)),
								_Utils_Tuple2(
								'history',
								$elm$browser$Debugger$History$encode(history))
							])))));
	});
var $elm$browser$Debugger$Main$Vertical = F3(
	function (a, b, c) {
		return {$: 'Vertical', a: a, b: b, c: c};
	});
var $elm$browser$Debugger$Main$drag = F2(
	function (info, layout) {
		if (layout.$ === 'Horizontal') {
			var status = layout.a;
			var y = layout.c;
			return A3($elm$browser$Debugger$Main$Horizontal, status, info.x / info.width, y);
		} else {
			var status = layout.a;
			var x = layout.b;
			return A3($elm$browser$Debugger$Main$Vertical, status, x, info.y / info.height);
		}
	});
var $elm$browser$Debugger$History$Stepping = F2(
	function (a, b) {
		return {$: 'Stepping', a: a, b: b};
	});
var $elm$browser$Debugger$History$Done = F2(
	function (a, b) {
		return {$: 'Done', a: a, b: b};
	});
var $elm$browser$Debugger$History$getHelp = F3(
	function (update, msg, getResult) {
		if (getResult.$ === 'Done') {
			return getResult;
		} else {
			var n = getResult.a;
			var model = getResult.b;
			return (!n) ? A2(
				$elm$browser$Debugger$History$Done,
				msg,
				A2(update, msg, model).a) : A2(
				$elm$browser$Debugger$History$Stepping,
				n - 1,
				A2(update, msg, model).a);
		}
	});
var $elm$browser$Debugger$History$undone = function (getResult) {
	undone:
	while (true) {
		if (getResult.$ === 'Done') {
			var msg = getResult.a;
			var model = getResult.b;
			return _Utils_Tuple2(model, msg);
		} else {
			var $temp$getResult = getResult;
			getResult = $temp$getResult;
			continue undone;
		}
	}
};
var $elm$browser$Debugger$History$get = F3(
	function (update, index, history) {
		get:
		while (true) {
			var recent = history.recent;
			var snapshotMax = history.numMessages - recent.numMessages;
			if (_Utils_cmp(index, snapshotMax) > -1) {
				return $elm$browser$Debugger$History$undone(
					A3(
						$elm$core$List$foldr,
						$elm$browser$Debugger$History$getHelp(update),
						A2($elm$browser$Debugger$History$Stepping, index - snapshotMax, recent.model),
						recent.messages));
			} else {
				var _v0 = A2($elm$core$Array$get, (index / $elm$browser$Debugger$History$maxSnapshotSize) | 0, history.snapshots);
				if (_v0.$ === 'Nothing') {
					var $temp$update = update,
						$temp$index = index,
						$temp$history = history;
					update = $temp$update;
					index = $temp$index;
					history = $temp$history;
					continue get;
				} else {
					var model = _v0.a.model;
					var messages = _v0.a.messages;
					return $elm$browser$Debugger$History$undone(
						A3(
							$elm$core$Array$foldr,
							$elm$browser$Debugger$History$getHelp(update),
							A2($elm$browser$Debugger$History$Stepping, index % $elm$browser$Debugger$History$maxSnapshotSize, model),
							messages));
				}
			}
		}
	});
var $elm$browser$Debugger$History$getRecentMsg = function (history) {
	getRecentMsg:
	while (true) {
		var _v0 = history.recent.messages;
		if (!_v0.b) {
			var $temp$history = history;
			history = $temp$history;
			continue getRecentMsg;
		} else {
			var first = _v0.a;
			return first;
		}
	}
};
var $elm$core$Dict$get = F2(
	function (targetKey, dict) {
		get:
		while (true) {
			if (dict.$ === 'RBEmpty_elm_builtin') {
				return $elm$core$Maybe$Nothing;
			} else {
				var key = dict.b;
				var value = dict.c;
				var left = dict.d;
				var right = dict.e;
				var _v1 = A2($elm$core$Basics$compare, targetKey, key);
				switch (_v1.$) {
					case 'LT':
						var $temp$targetKey = targetKey,
							$temp$dict = left;
						targetKey = $temp$targetKey;
						dict = $temp$dict;
						continue get;
					case 'EQ':
						return $elm$core$Maybe$Just(value);
					default:
						var $temp$targetKey = targetKey,
							$temp$dict = right;
						targetKey = $temp$targetKey;
						dict = $temp$dict;
						continue get;
				}
			}
		}
	});
var $elm$browser$Debugger$Expando$mergeDictHelp = F3(
	function (oldDict, key, value) {
		var _v12 = A2($elm$core$Dict$get, key, oldDict);
		if (_v12.$ === 'Nothing') {
			return value;
		} else {
			var oldValue = _v12.a;
			return A2($elm$browser$Debugger$Expando$mergeHelp, oldValue, value);
		}
	});
var $elm$browser$Debugger$Expando$mergeHelp = F2(
	function (old, _new) {
		var _v3 = _Utils_Tuple2(old, _new);
		_v3$6:
		while (true) {
			switch (_v3.b.$) {
				case 'S':
					return _new;
				case 'Primitive':
					return _new;
				case 'Sequence':
					if (_v3.a.$ === 'Sequence') {
						var _v4 = _v3.a;
						var isClosed = _v4.b;
						var oldValues = _v4.c;
						var _v5 = _v3.b;
						var seqType = _v5.a;
						var newValues = _v5.c;
						return A3(
							$elm$browser$Debugger$Expando$Sequence,
							seqType,
							isClosed,
							A2($elm$browser$Debugger$Expando$mergeListHelp, oldValues, newValues));
					} else {
						break _v3$6;
					}
				case 'Dictionary':
					if (_v3.a.$ === 'Dictionary') {
						var _v6 = _v3.a;
						var isClosed = _v6.a;
						var _v7 = _v3.b;
						var keyValuePairs = _v7.b;
						return A2($elm$browser$Debugger$Expando$Dictionary, isClosed, keyValuePairs);
					} else {
						break _v3$6;
					}
				case 'Record':
					if (_v3.a.$ === 'Record') {
						var _v8 = _v3.a;
						var isClosed = _v8.a;
						var oldDict = _v8.b;
						var _v9 = _v3.b;
						var newDict = _v9.b;
						return A2(
							$elm$browser$Debugger$Expando$Record,
							isClosed,
							A2(
								$elm$core$Dict$map,
								$elm$browser$Debugger$Expando$mergeDictHelp(oldDict),
								newDict));
					} else {
						break _v3$6;
					}
				default:
					if (_v3.a.$ === 'Constructor') {
						var _v10 = _v3.a;
						var isClosed = _v10.b;
						var oldValues = _v10.c;
						var _v11 = _v3.b;
						var maybeName = _v11.a;
						var newValues = _v11.c;
						return A3(
							$elm$browser$Debugger$Expando$Constructor,
							maybeName,
							isClosed,
							A2($elm$browser$Debugger$Expando$mergeListHelp, oldValues, newValues));
					} else {
						break _v3$6;
					}
			}
		}
		return _new;
	});
var $elm$browser$Debugger$Expando$mergeListHelp = F2(
	function (olds, news) {
		var _v0 = _Utils_Tuple2(olds, news);
		if (!_v0.a.b) {
			return news;
		} else {
			if (!_v0.b.b) {
				return news;
			} else {
				var _v1 = _v0.a;
				var x = _v1.a;
				var xs = _v1.b;
				var _v2 = _v0.b;
				var y = _v2.a;
				var ys = _v2.b;
				return A2(
					$elm$core$List$cons,
					A2($elm$browser$Debugger$Expando$mergeHelp, x, y),
					A2($elm$browser$Debugger$Expando$mergeListHelp, xs, ys));
			}
		}
	});
var $elm$browser$Debugger$Expando$merge = F2(
	function (value, expando) {
		return A2(
			$elm$browser$Debugger$Expando$mergeHelp,
			expando,
			_Debugger_init(value));
	});
var $elm$browser$Debugger$Main$jumpUpdate = F3(
	function (update, index, model) {
		var history = $elm$browser$Debugger$Main$cachedHistory(model);
		var currentMsg = $elm$browser$Debugger$History$getRecentMsg(history);
		var currentModel = $elm$browser$Debugger$Main$getLatestModel(model.state);
		var _v0 = A3($elm$browser$Debugger$History$get, update, index, history);
		var indexModel = _v0.a;
		var indexMsg = _v0.b;
		return _Utils_update(
			model,
			{
				expandoModel: A2($elm$browser$Debugger$Expando$merge, indexModel, model.expandoModel),
				expandoMsg: A2($elm$browser$Debugger$Expando$merge, indexMsg, model.expandoMsg),
				state: A5($elm$browser$Debugger$Main$Paused, index, indexModel, currentModel, currentMsg, history)
			});
	});
var $elm$browser$Debugger$History$jsToElm = A2($elm$core$Basics$composeR, _Json_unwrap, _Debugger_unsafeCoerce);
var $elm$browser$Debugger$History$decoder = F2(
	function (initialModel, update) {
		var addMessage = F2(
			function (rawMsg, _v0) {
				var model = _v0.a;
				var history = _v0.b;
				var msg = $elm$browser$Debugger$History$jsToElm(rawMsg);
				return _Utils_Tuple2(
					A2(update, msg, model),
					A3($elm$browser$Debugger$History$add, msg, model, history));
			});
		var updateModel = function (rawMsgs) {
			return A3(
				$elm$core$List$foldl,
				addMessage,
				_Utils_Tuple2(
					initialModel,
					$elm$browser$Debugger$History$empty(initialModel)),
				rawMsgs);
		};
		return A2(
			$elm$json$Json$Decode$map,
			updateModel,
			$elm$json$Json$Decode$list($elm$json$Json$Decode$value));
	});
var $elm$browser$Debugger$History$getInitialModel = function (_v0) {
	var snapshots = _v0.snapshots;
	var recent = _v0.recent;
	var _v1 = A2($elm$core$Array$get, 0, snapshots);
	if (_v1.$ === 'Just') {
		var model = _v1.a.model;
		return model;
	} else {
		return recent.model;
	}
};
var $elm$core$Platform$Cmd$none = $elm$core$Platform$Cmd$batch(_List_Nil);
var $elm$browser$Debugger$Main$loadNewHistory = F3(
	function (rawHistory, update, model) {
		var pureUserUpdate = F2(
			function (msg, userModel) {
				return A2(update, msg, userModel).a;
			});
		var initialUserModel = $elm$browser$Debugger$History$getInitialModel(model.history);
		var decoder = A2($elm$browser$Debugger$History$decoder, initialUserModel, pureUserUpdate);
		var _v0 = A2($elm$json$Json$Decode$decodeValue, decoder, rawHistory);
		if (_v0.$ === 'Err') {
			return _Utils_Tuple2(
				_Utils_update(
					model,
					{overlay: $elm$browser$Debugger$Overlay$corruptImport}),
				$elm$core$Platform$Cmd$none);
		} else {
			var _v1 = _v0.a;
			var latestUserModel = _v1.a;
			var newHistory = _v1.b;
			return _Utils_Tuple2(
				_Utils_update(
					model,
					{
						expandoModel: $elm$browser$Debugger$Expando$init(latestUserModel),
						expandoMsg: $elm$browser$Debugger$Expando$init(
							$elm$browser$Debugger$History$getRecentMsg(newHistory)),
						history: newHistory,
						overlay: $elm$browser$Debugger$Overlay$none,
						state: $elm$browser$Debugger$Main$Running(latestUserModel)
					}),
				$elm$core$Platform$Cmd$none);
		}
	});
var $elm$browser$Debugger$Main$scroll = function (popout) {
	return A2(
		$elm$core$Task$perform,
		$elm$core$Basics$always($elm$browser$Debugger$Main$NoOp),
		_Debugger_scroll(popout));
};
var $elm$browser$Debugger$Main$scrollTo = F2(
	function (id, popout) {
		return A2(
			$elm$core$Task$perform,
			$elm$core$Basics$always($elm$browser$Debugger$Main$NoOp),
			A2(_Debugger_scrollTo, id, popout));
	});
var $elm$browser$Debugger$Main$setDragStatus = F2(
	function (status, layout) {
		if (layout.$ === 'Horizontal') {
			var x = layout.b;
			var y = layout.c;
			return A3($elm$browser$Debugger$Main$Horizontal, status, x, y);
		} else {
			var x = layout.b;
			var y = layout.c;
			return A3($elm$browser$Debugger$Main$Vertical, status, x, y);
		}
	});
var $elm$browser$Debugger$Main$swapLayout = function (layout) {
	if (layout.$ === 'Horizontal') {
		var s = layout.a;
		var x = layout.b;
		var y = layout.c;
		return A3($elm$browser$Debugger$Main$Vertical, s, x, y);
	} else {
		var s = layout.a;
		var x = layout.b;
		var y = layout.c;
		return A3($elm$browser$Debugger$Main$Horizontal, s, x, y);
	}
};
var $elm$core$Dict$getMin = function (dict) {
	getMin:
	while (true) {
		if ((dict.$ === 'RBNode_elm_builtin') && (dict.d.$ === 'RBNode_elm_builtin')) {
			var left = dict.d;
			var $temp$dict = left;
			dict = $temp$dict;
			continue getMin;
		} else {
			return dict;
		}
	}
};
var $elm$core$Dict$moveRedLeft = function (dict) {
	if (((dict.$ === 'RBNode_elm_builtin') && (dict.d.$ === 'RBNode_elm_builtin')) && (dict.e.$ === 'RBNode_elm_builtin')) {
		if ((dict.e.d.$ === 'RBNode_elm_builtin') && (dict.e.d.a.$ === 'Red')) {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _v1 = dict.d;
			var lClr = _v1.a;
			var lK = _v1.b;
			var lV = _v1.c;
			var lLeft = _v1.d;
			var lRight = _v1.e;
			var _v2 = dict.e;
			var rClr = _v2.a;
			var rK = _v2.b;
			var rV = _v2.c;
			var rLeft = _v2.d;
			var _v3 = rLeft.a;
			var rlK = rLeft.b;
			var rlV = rLeft.c;
			var rlL = rLeft.d;
			var rlR = rLeft.e;
			var rRight = _v2.e;
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				$elm$core$Dict$Red,
				rlK,
				rlV,
				A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight),
					rlL),
				A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, rK, rV, rlR, rRight));
		} else {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _v4 = dict.d;
			var lClr = _v4.a;
			var lK = _v4.b;
			var lV = _v4.c;
			var lLeft = _v4.d;
			var lRight = _v4.e;
			var _v5 = dict.e;
			var rClr = _v5.a;
			var rK = _v5.b;
			var rV = _v5.c;
			var rLeft = _v5.d;
			var rRight = _v5.e;
			if (clr.$ === 'Black') {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight));
			} else {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight));
			}
		}
	} else {
		return dict;
	}
};
var $elm$core$Dict$moveRedRight = function (dict) {
	if (((dict.$ === 'RBNode_elm_builtin') && (dict.d.$ === 'RBNode_elm_builtin')) && (dict.e.$ === 'RBNode_elm_builtin')) {
		if ((dict.d.d.$ === 'RBNode_elm_builtin') && (dict.d.d.a.$ === 'Red')) {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _v1 = dict.d;
			var lClr = _v1.a;
			var lK = _v1.b;
			var lV = _v1.c;
			var _v2 = _v1.d;
			var _v3 = _v2.a;
			var llK = _v2.b;
			var llV = _v2.c;
			var llLeft = _v2.d;
			var llRight = _v2.e;
			var lRight = _v1.e;
			var _v4 = dict.e;
			var rClr = _v4.a;
			var rK = _v4.b;
			var rV = _v4.c;
			var rLeft = _v4.d;
			var rRight = _v4.e;
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				$elm$core$Dict$Red,
				lK,
				lV,
				A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, llK, llV, llLeft, llRight),
				A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					lRight,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight)));
		} else {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _v5 = dict.d;
			var lClr = _v5.a;
			var lK = _v5.b;
			var lV = _v5.c;
			var lLeft = _v5.d;
			var lRight = _v5.e;
			var _v6 = dict.e;
			var rClr = _v6.a;
			var rK = _v6.b;
			var rV = _v6.c;
			var rLeft = _v6.d;
			var rRight = _v6.e;
			if (clr.$ === 'Black') {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight));
			} else {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight));
			}
		}
	} else {
		return dict;
	}
};
var $elm$core$Dict$removeHelpPrepEQGT = F7(
	function (targetKey, dict, color, key, value, left, right) {
		if ((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Red')) {
			var _v1 = left.a;
			var lK = left.b;
			var lV = left.c;
			var lLeft = left.d;
			var lRight = left.e;
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				color,
				lK,
				lV,
				lLeft,
				A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, key, value, lRight, right));
		} else {
			_v2$2:
			while (true) {
				if ((right.$ === 'RBNode_elm_builtin') && (right.a.$ === 'Black')) {
					if (right.d.$ === 'RBNode_elm_builtin') {
						if (right.d.a.$ === 'Black') {
							var _v3 = right.a;
							var _v4 = right.d;
							var _v5 = _v4.a;
							return $elm$core$Dict$moveRedRight(dict);
						} else {
							break _v2$2;
						}
					} else {
						var _v6 = right.a;
						var _v7 = right.d;
						return $elm$core$Dict$moveRedRight(dict);
					}
				} else {
					break _v2$2;
				}
			}
			return dict;
		}
	});
var $elm$core$Dict$removeMin = function (dict) {
	if ((dict.$ === 'RBNode_elm_builtin') && (dict.d.$ === 'RBNode_elm_builtin')) {
		var color = dict.a;
		var key = dict.b;
		var value = dict.c;
		var left = dict.d;
		var lColor = left.a;
		var lLeft = left.d;
		var right = dict.e;
		if (lColor.$ === 'Black') {
			if ((lLeft.$ === 'RBNode_elm_builtin') && (lLeft.a.$ === 'Red')) {
				var _v3 = lLeft.a;
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					color,
					key,
					value,
					$elm$core$Dict$removeMin(left),
					right);
			} else {
				var _v4 = $elm$core$Dict$moveRedLeft(dict);
				if (_v4.$ === 'RBNode_elm_builtin') {
					var nColor = _v4.a;
					var nKey = _v4.b;
					var nValue = _v4.c;
					var nLeft = _v4.d;
					var nRight = _v4.e;
					return A5(
						$elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						$elm$core$Dict$removeMin(nLeft),
						nRight);
				} else {
					return $elm$core$Dict$RBEmpty_elm_builtin;
				}
			}
		} else {
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				color,
				key,
				value,
				$elm$core$Dict$removeMin(left),
				right);
		}
	} else {
		return $elm$core$Dict$RBEmpty_elm_builtin;
	}
};
var $elm$core$Dict$removeHelp = F2(
	function (targetKey, dict) {
		if (dict.$ === 'RBEmpty_elm_builtin') {
			return $elm$core$Dict$RBEmpty_elm_builtin;
		} else {
			var color = dict.a;
			var key = dict.b;
			var value = dict.c;
			var left = dict.d;
			var right = dict.e;
			if (_Utils_cmp(targetKey, key) < 0) {
				if ((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Black')) {
					var _v4 = left.a;
					var lLeft = left.d;
					if ((lLeft.$ === 'RBNode_elm_builtin') && (lLeft.a.$ === 'Red')) {
						var _v6 = lLeft.a;
						return A5(
							$elm$core$Dict$RBNode_elm_builtin,
							color,
							key,
							value,
							A2($elm$core$Dict$removeHelp, targetKey, left),
							right);
					} else {
						var _v7 = $elm$core$Dict$moveRedLeft(dict);
						if (_v7.$ === 'RBNode_elm_builtin') {
							var nColor = _v7.a;
							var nKey = _v7.b;
							var nValue = _v7.c;
							var nLeft = _v7.d;
							var nRight = _v7.e;
							return A5(
								$elm$core$Dict$balance,
								nColor,
								nKey,
								nValue,
								A2($elm$core$Dict$removeHelp, targetKey, nLeft),
								nRight);
						} else {
							return $elm$core$Dict$RBEmpty_elm_builtin;
						}
					}
				} else {
					return A5(
						$elm$core$Dict$RBNode_elm_builtin,
						color,
						key,
						value,
						A2($elm$core$Dict$removeHelp, targetKey, left),
						right);
				}
			} else {
				return A2(
					$elm$core$Dict$removeHelpEQGT,
					targetKey,
					A7($elm$core$Dict$removeHelpPrepEQGT, targetKey, dict, color, key, value, left, right));
			}
		}
	});
var $elm$core$Dict$removeHelpEQGT = F2(
	function (targetKey, dict) {
		if (dict.$ === 'RBNode_elm_builtin') {
			var color = dict.a;
			var key = dict.b;
			var value = dict.c;
			var left = dict.d;
			var right = dict.e;
			if (_Utils_eq(targetKey, key)) {
				var _v1 = $elm$core$Dict$getMin(right);
				if (_v1.$ === 'RBNode_elm_builtin') {
					var minKey = _v1.b;
					var minValue = _v1.c;
					return A5(
						$elm$core$Dict$balance,
						color,
						minKey,
						minValue,
						left,
						$elm$core$Dict$removeMin(right));
				} else {
					return $elm$core$Dict$RBEmpty_elm_builtin;
				}
			} else {
				return A5(
					$elm$core$Dict$balance,
					color,
					key,
					value,
					left,
					A2($elm$core$Dict$removeHelp, targetKey, right));
			}
		} else {
			return $elm$core$Dict$RBEmpty_elm_builtin;
		}
	});
var $elm$core$Dict$remove = F2(
	function (key, dict) {
		var _v0 = A2($elm$core$Dict$removeHelp, key, dict);
		if ((_v0.$ === 'RBNode_elm_builtin') && (_v0.a.$ === 'Red')) {
			var _v1 = _v0.a;
			var k = _v0.b;
			var v = _v0.c;
			var l = _v0.d;
			var r = _v0.e;
			return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, k, v, l, r);
		} else {
			var x = _v0;
			return x;
		}
	});
var $elm$core$Dict$update = F3(
	function (targetKey, alter, dictionary) {
		var _v0 = alter(
			A2($elm$core$Dict$get, targetKey, dictionary));
		if (_v0.$ === 'Just') {
			var value = _v0.a;
			return A3($elm$core$Dict$insert, targetKey, value, dictionary);
		} else {
			return A2($elm$core$Dict$remove, targetKey, dictionary);
		}
	});
var $elm$browser$Debugger$Expando$updateIndex = F3(
	function (n, func, list) {
		if (!list.b) {
			return _List_Nil;
		} else {
			var x = list.a;
			var xs = list.b;
			return (n <= 0) ? A2(
				$elm$core$List$cons,
				func(x),
				xs) : A2(
				$elm$core$List$cons,
				x,
				A3($elm$browser$Debugger$Expando$updateIndex, n - 1, func, xs));
		}
	});
var $elm$browser$Debugger$Expando$update = F2(
	function (msg, value) {
		switch (value.$) {
			case 'S':
				return value;
			case 'Primitive':
				return value;
			case 'Sequence':
				var seqType = value.a;
				var isClosed = value.b;
				var valueList = value.c;
				switch (msg.$) {
					case 'Toggle':
						return A3($elm$browser$Debugger$Expando$Sequence, seqType, !isClosed, valueList);
					case 'Index':
						if (msg.a.$ === 'None') {
							var _v3 = msg.a;
							var index = msg.b;
							var subMsg = msg.c;
							return A3(
								$elm$browser$Debugger$Expando$Sequence,
								seqType,
								isClosed,
								A3(
									$elm$browser$Debugger$Expando$updateIndex,
									index,
									$elm$browser$Debugger$Expando$update(subMsg),
									valueList));
						} else {
							return value;
						}
					default:
						return value;
				}
			case 'Dictionary':
				var isClosed = value.a;
				var keyValuePairs = value.b;
				switch (msg.$) {
					case 'Toggle':
						return A2($elm$browser$Debugger$Expando$Dictionary, !isClosed, keyValuePairs);
					case 'Index':
						var redirect = msg.a;
						var index = msg.b;
						var subMsg = msg.c;
						switch (redirect.$) {
							case 'None':
								return value;
							case 'Key':
								return A2(
									$elm$browser$Debugger$Expando$Dictionary,
									isClosed,
									A3(
										$elm$browser$Debugger$Expando$updateIndex,
										index,
										function (_v6) {
											var k = _v6.a;
											var v = _v6.b;
											return _Utils_Tuple2(
												A2($elm$browser$Debugger$Expando$update, subMsg, k),
												v);
										},
										keyValuePairs));
							default:
								return A2(
									$elm$browser$Debugger$Expando$Dictionary,
									isClosed,
									A3(
										$elm$browser$Debugger$Expando$updateIndex,
										index,
										function (_v7) {
											var k = _v7.a;
											var v = _v7.b;
											return _Utils_Tuple2(
												k,
												A2($elm$browser$Debugger$Expando$update, subMsg, v));
										},
										keyValuePairs));
						}
					default:
						return value;
				}
			case 'Record':
				var isClosed = value.a;
				var valueDict = value.b;
				switch (msg.$) {
					case 'Toggle':
						return A2($elm$browser$Debugger$Expando$Record, !isClosed, valueDict);
					case 'Index':
						return value;
					default:
						var field = msg.a;
						var subMsg = msg.b;
						return A2(
							$elm$browser$Debugger$Expando$Record,
							isClosed,
							A3(
								$elm$core$Dict$update,
								field,
								$elm$browser$Debugger$Expando$updateField(subMsg),
								valueDict));
				}
			default:
				var maybeName = value.a;
				var isClosed = value.b;
				var valueList = value.c;
				switch (msg.$) {
					case 'Toggle':
						return A3($elm$browser$Debugger$Expando$Constructor, maybeName, !isClosed, valueList);
					case 'Index':
						if (msg.a.$ === 'None') {
							var _v10 = msg.a;
							var index = msg.b;
							var subMsg = msg.c;
							return A3(
								$elm$browser$Debugger$Expando$Constructor,
								maybeName,
								isClosed,
								A3(
									$elm$browser$Debugger$Expando$updateIndex,
									index,
									$elm$browser$Debugger$Expando$update(subMsg),
									valueList));
						} else {
							return value;
						}
					default:
						return value;
				}
		}
	});
var $elm$browser$Debugger$Expando$updateField = F2(
	function (msg, maybeExpando) {
		if (maybeExpando.$ === 'Nothing') {
			return maybeExpando;
		} else {
			var expando = maybeExpando.a;
			return $elm$core$Maybe$Just(
				A2($elm$browser$Debugger$Expando$update, msg, expando));
		}
	});
var $elm$browser$Debugger$Main$Upload = function (a) {
	return {$: 'Upload', a: a};
};
var $elm$browser$Debugger$Main$upload = function (popout) {
	return A2(
		$elm$core$Task$perform,
		$elm$browser$Debugger$Main$Upload,
		_Debugger_upload(popout));
};
var $elm$browser$Debugger$Overlay$BadMetadata = function (a) {
	return {$: 'BadMetadata', a: a};
};
var $elm$browser$Debugger$Overlay$badMetadata = $elm$browser$Debugger$Overlay$BadMetadata;
var $elm$browser$Debugger$Main$withGoodMetadata = F2(
	function (model, func) {
		var _v0 = model.metadata;
		if (_v0.$ === 'Ok') {
			var metadata = _v0.a;
			return func(metadata);
		} else {
			var error = _v0.a;
			return _Utils_Tuple2(
				_Utils_update(
					model,
					{
						overlay: $elm$browser$Debugger$Overlay$badMetadata(error)
					}),
				$elm$core$Platform$Cmd$none);
		}
	});
var $elm$browser$Debugger$Main$wrapUpdate = F3(
	function (update, msg, model) {
		wrapUpdate:
		while (true) {
			switch (msg.$) {
				case 'NoOp':
					return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
				case 'UserMsg':
					var userMsg = msg.a;
					var userModel = $elm$browser$Debugger$Main$getLatestModel(model.state);
					var newHistory = A3($elm$browser$Debugger$History$add, userMsg, userModel, model.history);
					var _v1 = A2(update, userMsg, userModel);
					var newUserModel = _v1.a;
					var userCmds = _v1.b;
					var commands = A2($elm$core$Platform$Cmd$map, $elm$browser$Debugger$Main$UserMsg, userCmds);
					var _v2 = model.state;
					if (_v2.$ === 'Running') {
						return _Utils_Tuple2(
							_Utils_update(
								model,
								{
									expandoModel: A2($elm$browser$Debugger$Expando$merge, newUserModel, model.expandoModel),
									expandoMsg: A2($elm$browser$Debugger$Expando$merge, userMsg, model.expandoMsg),
									history: newHistory,
									state: $elm$browser$Debugger$Main$Running(newUserModel)
								}),
							$elm$core$Platform$Cmd$batch(
								_List_fromArray(
									[
										commands,
										$elm$browser$Debugger$Main$scroll(model.popout)
									])));
					} else {
						var index = _v2.a;
						var indexModel = _v2.b;
						var history = _v2.e;
						return _Utils_Tuple2(
							_Utils_update(
								model,
								{
									history: newHistory,
									state: A5($elm$browser$Debugger$Main$Paused, index, indexModel, newUserModel, userMsg, history)
								}),
							commands);
					}
				case 'TweakExpandoMsg':
					var eMsg = msg.a;
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{
								expandoMsg: A2($elm$browser$Debugger$Expando$update, eMsg, model.expandoMsg)
							}),
						$elm$core$Platform$Cmd$none);
				case 'TweakExpandoModel':
					var eMsg = msg.a;
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{
								expandoModel: A2($elm$browser$Debugger$Expando$update, eMsg, model.expandoModel)
							}),
						$elm$core$Platform$Cmd$none);
				case 'Resume':
					var _v3 = model.state;
					if (_v3.$ === 'Running') {
						return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
					} else {
						var userModel = _v3.c;
						var userMsg = _v3.d;
						return _Utils_Tuple2(
							_Utils_update(
								model,
								{
									expandoModel: A2($elm$browser$Debugger$Expando$merge, userModel, model.expandoModel),
									expandoMsg: A2($elm$browser$Debugger$Expando$merge, userMsg, model.expandoMsg),
									state: $elm$browser$Debugger$Main$Running(userModel)
								}),
							$elm$browser$Debugger$Main$scroll(model.popout));
					}
				case 'Jump':
					var index = msg.a;
					return _Utils_Tuple2(
						A3($elm$browser$Debugger$Main$jumpUpdate, update, index, model),
						$elm$core$Platform$Cmd$none);
				case 'SliderJump':
					var index = msg.a;
					return _Utils_Tuple2(
						A3($elm$browser$Debugger$Main$jumpUpdate, update, index, model),
						A2(
							$elm$browser$Debugger$Main$scrollTo,
							$elm$browser$Debugger$History$idForMessageIndex(index),
							model.popout));
				case 'Open':
					return _Utils_Tuple2(
						model,
						A2(
							$elm$core$Task$perform,
							$elm$core$Basics$always($elm$browser$Debugger$Main$NoOp),
							_Debugger_open(model.popout)));
				case 'Up':
					var _v4 = model.state;
					if (_v4.$ === 'Running') {
						return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
					} else {
						var i = _v4.a;
						var history = _v4.e;
						var targetIndex = i + 1;
						if (_Utils_cmp(
							targetIndex,
							$elm$browser$Debugger$History$size(history)) < 0) {
							var $temp$update = update,
								$temp$msg = $elm$browser$Debugger$Main$SliderJump(targetIndex),
								$temp$model = model;
							update = $temp$update;
							msg = $temp$msg;
							model = $temp$model;
							continue wrapUpdate;
						} else {
							var $temp$update = update,
								$temp$msg = $elm$browser$Debugger$Main$Resume,
								$temp$model = model;
							update = $temp$update;
							msg = $temp$msg;
							model = $temp$model;
							continue wrapUpdate;
						}
					}
				case 'Down':
					var _v5 = model.state;
					if (_v5.$ === 'Running') {
						var $temp$update = update,
							$temp$msg = $elm$browser$Debugger$Main$Jump(
							$elm$browser$Debugger$History$size(model.history) - 1),
							$temp$model = model;
						update = $temp$update;
						msg = $temp$msg;
						model = $temp$model;
						continue wrapUpdate;
					} else {
						var index = _v5.a;
						if (index > 0) {
							var $temp$update = update,
								$temp$msg = $elm$browser$Debugger$Main$SliderJump(index - 1),
								$temp$model = model;
							update = $temp$update;
							msg = $temp$msg;
							model = $temp$model;
							continue wrapUpdate;
						} else {
							return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
						}
					}
				case 'Import':
					return A2(
						$elm$browser$Debugger$Main$withGoodMetadata,
						model,
						function (_v6) {
							return _Utils_Tuple2(
								model,
								$elm$browser$Debugger$Main$upload(model.popout));
						});
				case 'Export':
					return A2(
						$elm$browser$Debugger$Main$withGoodMetadata,
						model,
						function (metadata) {
							return _Utils_Tuple2(
								model,
								A2($elm$browser$Debugger$Main$download, metadata, model.history));
						});
				case 'Upload':
					var jsonString = msg.a;
					return A2(
						$elm$browser$Debugger$Main$withGoodMetadata,
						model,
						function (metadata) {
							var _v7 = A2($elm$browser$Debugger$Overlay$assessImport, metadata, jsonString);
							if (_v7.$ === 'Err') {
								var newOverlay = _v7.a;
								return _Utils_Tuple2(
									_Utils_update(
										model,
										{overlay: newOverlay}),
									$elm$core$Platform$Cmd$none);
							} else {
								var rawHistory = _v7.a;
								return A3($elm$browser$Debugger$Main$loadNewHistory, rawHistory, update, model);
							}
						});
				case 'OverlayMsg':
					var overlayMsg = msg.a;
					var _v8 = A2($elm$browser$Debugger$Overlay$close, overlayMsg, model.overlay);
					if (_v8.$ === 'Nothing') {
						return _Utils_Tuple2(
							_Utils_update(
								model,
								{overlay: $elm$browser$Debugger$Overlay$none}),
							$elm$core$Platform$Cmd$none);
					} else {
						var rawHistory = _v8.a;
						return A3($elm$browser$Debugger$Main$loadNewHistory, rawHistory, update, model);
					}
				case 'SwapLayout':
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{
								layout: $elm$browser$Debugger$Main$swapLayout(model.layout)
							}),
						$elm$core$Platform$Cmd$none);
				case 'DragStart':
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{
								layout: A2($elm$browser$Debugger$Main$setDragStatus, $elm$browser$Debugger$Main$Moving, model.layout)
							}),
						$elm$core$Platform$Cmd$none);
				case 'Drag':
					var info = msg.a;
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{
								layout: A2($elm$browser$Debugger$Main$drag, info, model.layout)
							}),
						$elm$core$Platform$Cmd$none);
				default:
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{
								layout: A2($elm$browser$Debugger$Main$setDragStatus, $elm$browser$Debugger$Main$Static, model.layout)
							}),
						$elm$core$Platform$Cmd$none);
			}
		}
	});
var $elm$browser$Browser$External = function (a) {
	return {$: 'External', a: a};
};
var $elm$browser$Browser$Internal = function (a) {
	return {$: 'Internal', a: a};
};
var $elm$browser$Browser$Dom$NotFound = function (a) {
	return {$: 'NotFound', a: a};
};
var $elm$url$Url$Http = {$: 'Http'};
var $elm$url$Url$Https = {$: 'Https'};
var $elm$url$Url$Url = F6(
	function (protocol, host, port_, path, query, fragment) {
		return {fragment: fragment, host: host, path: path, port_: port_, protocol: protocol, query: query};
	});
var $elm$core$String$dropLeft = F2(
	function (n, string) {
		return (n < 1) ? string : A3(
			$elm$core$String$slice,
			n,
			$elm$core$String$length(string),
			string);
	});
var $elm$core$String$indexes = _String_indexes;
var $elm$core$String$isEmpty = function (string) {
	return string === '';
};
var $elm$url$Url$chompBeforePath = F5(
	function (protocol, path, params, frag, str) {
		if ($elm$core$String$isEmpty(str) || A2($elm$core$String$contains, '@', str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, ':', str);
			if (!_v0.b) {
				return $elm$core$Maybe$Just(
					A6($elm$url$Url$Url, protocol, str, $elm$core$Maybe$Nothing, path, params, frag));
			} else {
				if (!_v0.b.b) {
					var i = _v0.a;
					var _v1 = $elm$core$String$toInt(
						A2($elm$core$String$dropLeft, i + 1, str));
					if (_v1.$ === 'Nothing') {
						return $elm$core$Maybe$Nothing;
					} else {
						var port_ = _v1;
						return $elm$core$Maybe$Just(
							A6(
								$elm$url$Url$Url,
								protocol,
								A2($elm$core$String$left, i, str),
								port_,
								path,
								params,
								frag));
					}
				} else {
					return $elm$core$Maybe$Nothing;
				}
			}
		}
	});
var $elm$url$Url$chompBeforeQuery = F4(
	function (protocol, params, frag, str) {
		if ($elm$core$String$isEmpty(str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, '/', str);
			if (!_v0.b) {
				return A5($elm$url$Url$chompBeforePath, protocol, '/', params, frag, str);
			} else {
				var i = _v0.a;
				return A5(
					$elm$url$Url$chompBeforePath,
					protocol,
					A2($elm$core$String$dropLeft, i, str),
					params,
					frag,
					A2($elm$core$String$left, i, str));
			}
		}
	});
var $elm$url$Url$chompBeforeFragment = F3(
	function (protocol, frag, str) {
		if ($elm$core$String$isEmpty(str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, '?', str);
			if (!_v0.b) {
				return A4($elm$url$Url$chompBeforeQuery, protocol, $elm$core$Maybe$Nothing, frag, str);
			} else {
				var i = _v0.a;
				return A4(
					$elm$url$Url$chompBeforeQuery,
					protocol,
					$elm$core$Maybe$Just(
						A2($elm$core$String$dropLeft, i + 1, str)),
					frag,
					A2($elm$core$String$left, i, str));
			}
		}
	});
var $elm$url$Url$chompAfterProtocol = F2(
	function (protocol, str) {
		if ($elm$core$String$isEmpty(str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, '#', str);
			if (!_v0.b) {
				return A3($elm$url$Url$chompBeforeFragment, protocol, $elm$core$Maybe$Nothing, str);
			} else {
				var i = _v0.a;
				return A3(
					$elm$url$Url$chompBeforeFragment,
					protocol,
					$elm$core$Maybe$Just(
						A2($elm$core$String$dropLeft, i + 1, str)),
					A2($elm$core$String$left, i, str));
			}
		}
	});
var $elm$core$String$startsWith = _String_startsWith;
var $elm$url$Url$fromString = function (str) {
	return A2($elm$core$String$startsWith, 'http://', str) ? A2(
		$elm$url$Url$chompAfterProtocol,
		$elm$url$Url$Http,
		A2($elm$core$String$dropLeft, 7, str)) : (A2($elm$core$String$startsWith, 'https://', str) ? A2(
		$elm$url$Url$chompAfterProtocol,
		$elm$url$Url$Https,
		A2($elm$core$String$dropLeft, 8, str)) : $elm$core$Maybe$Nothing);
};
var $elm$core$Basics$never = function (_v0) {
	never:
	while (true) {
		var nvr = _v0.a;
		var $temp$_v0 = nvr;
		_v0 = $temp$_v0;
		continue never;
	}
};
var $elm$browser$Browser$element = _Browser_element;
var $author$project$Main$Home = function (a) {
	return {$: 'Home', a: a};
};
var $author$project$Main$Idle = {$: 'Idle'};
var $author$project$Main$LoadIdle = {$: 'LoadIdle'};
var $author$project$Main$StepNotStarted = {$: 'StepNotStarted'};
var $author$project$Main$WaitingMove = {$: 'WaitingMove'};
var $author$project$Device$BigDesktop = {$: 'BigDesktop'};
var $author$project$Device$Landscape = {$: 'Landscape'};
var $author$project$Device$Phone = {$: 'Phone'};
var $author$project$Device$Portrait = {$: 'Portrait'};
var $author$project$Device$SmallDesktop = {$: 'SmallDesktop'};
var $author$project$Device$Tablet = {$: 'Tablet'};
var $author$project$Device$classify = function (_v0) {
	var width = _v0.width;
	var height = _v0.height;
	var deviceOrientation = (_Utils_cmp(width, height) < 0) ? $author$project$Device$Portrait : $author$project$Device$Landscape;
	var minDimension = _Utils_eq(deviceOrientation, $author$project$Device$Portrait) ? width : height;
	var deviceKind = (minDimension < 450) ? $author$project$Device$Phone : ((minDimension < 850) ? $author$project$Device$Tablet : ((minDimension < 1250) ? $author$project$Device$SmallDesktop : $author$project$Device$BigDesktop));
	return {
		kind: deviceKind,
		orientation: deviceOrientation,
		size: {height: height, width: width}
	};
};
var $author$project$Main$defaultParams = {convergenceThreshold: 0.0001, crop: $elm$core$Maybe$Nothing, lights: $elm$core$Maybe$Nothing, maxIterations: 10, maxVerbosity: 3, z_mean: 3500.0};
var $author$project$NumberInput$floatDefault = {
	decodedInput: $elm$core$Result$Ok(0.0),
	decrease: function (n) {
		return n - 0.1;
	},
	defaultValue: 0.0,
	increase: function (n) {
		return n + 0.1;
	},
	input: '0.0',
	max: $elm$core$Maybe$Nothing,
	min: $elm$core$Maybe$Nothing
};
var $author$project$NumberInput$intDefault = {
	decodedInput: $elm$core$Result$Ok(0),
	decrease: function (n) {
		return n - 1;
	},
	defaultValue: 0,
	increase: function (n) {
		return n + 1;
	},
	input: '0',
	max: $elm$core$Maybe$Nothing,
	min: $elm$core$Maybe$Nothing
};
var $author$project$NumberInput$setDefaultFloatValue = F2(
	function (_float, field) {
		return _Utils_update(
			field,
			{
				decodedInput: $elm$core$Result$Ok(_float),
				defaultValue: _float,
				input: $elm$core$String$fromFloat(_float)
			});
	});
var $author$project$NumberInput$setDefaultIntValue = F2(
	function (_int, field) {
		return _Utils_update(
			field,
			{
				decodedInput: $elm$core$Result$Ok(_int),
				defaultValue: _int,
				input: $elm$core$String$fromInt(_int)
			});
	});
var $elm$core$Basics$sqrt = _Basics_sqrt;
var $author$project$CropForm$withSize = F2(
	function (width, height) {
		var anyInt = $author$project$NumberInput$intDefault;
		return {
			active: false,
			bottom: A2(
				$author$project$NumberInput$setDefaultIntValue,
				height,
				_Utils_update(
					anyInt,
					{
						max: $elm$core$Maybe$Just(height),
						min: $elm$core$Maybe$Just(0)
					})),
			left: A2(
				$author$project$NumberInput$setDefaultIntValue,
				0,
				_Utils_update(
					anyInt,
					{
						max: $elm$core$Maybe$Just(width),
						min: $elm$core$Maybe$Just(0)
					})),
			right: A2(
				$author$project$NumberInput$setDefaultIntValue,
				width,
				_Utils_update(
					anyInt,
					{
						max: $elm$core$Maybe$Just(width),
						min: $elm$core$Maybe$Just(0)
					})),
			top: A2(
				$author$project$NumberInput$setDefaultIntValue,
				0,
				_Utils_update(
					anyInt,
					{
						max: $elm$core$Maybe$Just(height),
						min: $elm$core$Maybe$Just(0)
					}))
		};
	});
var $author$project$Main$defaultParamsForm = function () {
	var anyInt = $author$project$NumberInput$intDefault;
	var anyFloat = $author$project$NumberInput$floatDefault;
	return {
		convergenceThreshold: {
			decodedInput: $elm$core$Result$Ok($author$project$Main$defaultParams.convergenceThreshold),
			decrease: function (x) {
				return x / $elm$core$Basics$sqrt(2);
			},
			defaultValue: $author$project$Main$defaultParams.convergenceThreshold,
			increase: function (x) {
				return x * $elm$core$Basics$sqrt(2);
			},
			input: $elm$core$String$fromFloat($author$project$Main$defaultParams.convergenceThreshold),
			max: $elm$core$Maybe$Nothing,
			min: $elm$core$Maybe$Just(0.0)
		},
		crop: A2($author$project$CropForm$withSize, 1920, 1080),
		maxIterations: A2(
			$author$project$NumberInput$setDefaultIntValue,
			$author$project$Main$defaultParams.maxIterations,
			_Utils_update(
				anyInt,
				{
					max: $elm$core$Maybe$Just(1000),
					min: $elm$core$Maybe$Just(1)
				})),
		maxVerbosity: A2(
			$author$project$NumberInput$setDefaultIntValue,
			$author$project$Main$defaultParams.maxVerbosity,
			_Utils_update(
				anyInt,
				{
					max: $elm$core$Maybe$Just(4),
					min: $elm$core$Maybe$Just(0)
				})),
		z_mean: A2(
			$author$project$NumberInput$setDefaultFloatValue,
			$author$project$Main$defaultParams.z_mean,
			_Utils_update(
				anyFloat,
				{
					decrease: $elm$core$Basics$mul(0.1),
					increase: $elm$core$Basics$mul(10.0),
					min: $elm$core$Maybe$Just(0.0001)
				}))
	};
}();
var $author$project$Main$defaultParamsInfo = {convergenceThreshold: false, crop: false, maxIterations: false, maxVerbosity: false, z_mean: false};
var $author$project$Main$headerHeight = 40;
var $author$project$Main$progressBarHeight = 38;
var $mpizenberg$elm_2d_viewer$Viewer$withSize = function (size) {
	return {
		origin: _Utils_Tuple2(0.0, 0.0),
		scale: 1.0,
		size: size
	};
};
var $author$project$Main$initialModel = function (size) {
	return {
		autoscroll: true,
		bboxDrawn: $elm$core$Maybe$Nothing,
		device: $author$project$Device$classify(size),
		images: $elm$core$Maybe$Nothing,
		imagesCount: 0,
		lights: $elm$core$Maybe$Nothing,
		loadImages: $author$project$Main$LoadIdle,
		loadLights: $author$project$Main$LoadIdle,
		notSeenLogs: _List_Nil,
		params: $author$project$Main$defaultParams,
		paramsForm: $author$project$Main$defaultParamsForm,
		paramsInfo: $author$project$Main$defaultParamsInfo,
		pointerMode: $author$project$Main$WaitingMove,
		registeredImages: $elm$core$Maybe$Nothing,
		registeredViewer: $mpizenberg$elm_2d_viewer$Viewer$withSize(
			_Utils_Tuple2(size.width, size.height - ($author$project$Main$headerHeight + $author$project$Main$progressBarHeight))),
		runStep: $author$project$Main$StepNotStarted,
		scrollPos: 0.0,
		seenLogs: _List_Nil,
		state: $author$project$Main$Home($author$project$Main$Idle),
		verbosity: 2,
		viewer: $mpizenberg$elm_2d_viewer$Viewer$withSize(
			_Utils_Tuple2(size.width, size.height - ($author$project$Main$headerHeight + $author$project$Main$progressBarHeight)))
	};
};
var $author$project$Main$init = function (size) {
	return _Utils_Tuple2(
		$author$project$Main$initialModel(size),
		$elm$core$Platform$Cmd$none);
};
var $author$project$Main$ImageDecoded = function (a) {
	return {$: 'ImageDecoded', a: a};
};
var $author$project$Main$KeyDown = function (a) {
	return {$: 'KeyDown', a: a};
};
var $author$project$Main$Log = function (a) {
	return {$: 'Log', a: a};
};
var $author$project$Main$ReceiveCroppedImages = function (a) {
	return {$: 'ReceiveCroppedImages', a: a};
};
var $author$project$Main$UpdateRunStep = function (a) {
	return {$: 'UpdateRunStep', a: a};
};
var $author$project$Main$WindowResizes = function (a) {
	return {$: 'WindowResizes', a: a};
};
var $elm$core$Platform$Sub$batch = _Platform_batch;
var $ohanhi$keyboard$Keyboard$RawKey = function (a) {
	return {$: 'RawKey', a: a};
};
var $ohanhi$keyboard$Keyboard$eventKeyDecoder = A2(
	$elm$json$Json$Decode$field,
	'key',
	A2($elm$json$Json$Decode$map, $ohanhi$keyboard$Keyboard$RawKey, $elm$json$Json$Decode$string));
var $elm$browser$Browser$Events$Document = {$: 'Document'};
var $elm$browser$Browser$Events$MySub = F3(
	function (a, b, c) {
		return {$: 'MySub', a: a, b: b, c: c};
	});
var $elm$browser$Browser$Events$State = F2(
	function (subs, pids) {
		return {pids: pids, subs: subs};
	});
var $elm$browser$Browser$Events$init = $elm$core$Task$succeed(
	A2($elm$browser$Browser$Events$State, _List_Nil, $elm$core$Dict$empty));
var $elm$browser$Browser$Events$nodeToKey = function (node) {
	if (node.$ === 'Document') {
		return 'd_';
	} else {
		return 'w_';
	}
};
var $elm$browser$Browser$Events$addKey = function (sub) {
	var node = sub.a;
	var name = sub.b;
	return _Utils_Tuple2(
		_Utils_ap(
			$elm$browser$Browser$Events$nodeToKey(node),
			name),
		sub);
};
var $elm$core$Process$kill = _Scheduler_kill;
var $elm$browser$Browser$Events$Event = F2(
	function (key, event) {
		return {event: event, key: key};
	});
var $elm$core$Platform$sendToSelf = _Platform_sendToSelf;
var $elm$browser$Browser$Events$spawn = F3(
	function (router, key, _v0) {
		var node = _v0.a;
		var name = _v0.b;
		var actualNode = function () {
			if (node.$ === 'Document') {
				return _Browser_doc;
			} else {
				return _Browser_window;
			}
		}();
		return A2(
			$elm$core$Task$map,
			function (value) {
				return _Utils_Tuple2(key, value);
			},
			A3(
				_Browser_on,
				actualNode,
				name,
				function (event) {
					return A2(
						$elm$core$Platform$sendToSelf,
						router,
						A2($elm$browser$Browser$Events$Event, key, event));
				}));
	});
var $elm$core$Dict$union = F2(
	function (t1, t2) {
		return A3($elm$core$Dict$foldl, $elm$core$Dict$insert, t2, t1);
	});
var $elm$browser$Browser$Events$onEffects = F3(
	function (router, subs, state) {
		var stepRight = F3(
			function (key, sub, _v6) {
				var deads = _v6.a;
				var lives = _v6.b;
				var news = _v6.c;
				return _Utils_Tuple3(
					deads,
					lives,
					A2(
						$elm$core$List$cons,
						A3($elm$browser$Browser$Events$spawn, router, key, sub),
						news));
			});
		var stepLeft = F3(
			function (_v4, pid, _v5) {
				var deads = _v5.a;
				var lives = _v5.b;
				var news = _v5.c;
				return _Utils_Tuple3(
					A2($elm$core$List$cons, pid, deads),
					lives,
					news);
			});
		var stepBoth = F4(
			function (key, pid, _v2, _v3) {
				var deads = _v3.a;
				var lives = _v3.b;
				var news = _v3.c;
				return _Utils_Tuple3(
					deads,
					A3($elm$core$Dict$insert, key, pid, lives),
					news);
			});
		var newSubs = A2($elm$core$List$map, $elm$browser$Browser$Events$addKey, subs);
		var _v0 = A6(
			$elm$core$Dict$merge,
			stepLeft,
			stepBoth,
			stepRight,
			state.pids,
			$elm$core$Dict$fromList(newSubs),
			_Utils_Tuple3(_List_Nil, $elm$core$Dict$empty, _List_Nil));
		var deadPids = _v0.a;
		var livePids = _v0.b;
		var makeNewPids = _v0.c;
		return A2(
			$elm$core$Task$andThen,
			function (pids) {
				return $elm$core$Task$succeed(
					A2(
						$elm$browser$Browser$Events$State,
						newSubs,
						A2(
							$elm$core$Dict$union,
							livePids,
							$elm$core$Dict$fromList(pids))));
			},
			A2(
				$elm$core$Task$andThen,
				function (_v1) {
					return $elm$core$Task$sequence(makeNewPids);
				},
				$elm$core$Task$sequence(
					A2($elm$core$List$map, $elm$core$Process$kill, deadPids))));
	});
var $elm$browser$Browser$Events$onSelfMsg = F3(
	function (router, _v0, state) {
		var key = _v0.key;
		var event = _v0.event;
		var toMessage = function (_v2) {
			var subKey = _v2.a;
			var _v3 = _v2.b;
			var node = _v3.a;
			var name = _v3.b;
			var decoder = _v3.c;
			return _Utils_eq(subKey, key) ? A2(_Browser_decodeEvent, decoder, event) : $elm$core$Maybe$Nothing;
		};
		var messages = A2($elm$core$List$filterMap, toMessage, state.subs);
		return A2(
			$elm$core$Task$andThen,
			function (_v1) {
				return $elm$core$Task$succeed(state);
			},
			$elm$core$Task$sequence(
				A2(
					$elm$core$List$map,
					$elm$core$Platform$sendToApp(router),
					messages)));
	});
var $elm$browser$Browser$Events$subMap = F2(
	function (func, _v0) {
		var node = _v0.a;
		var name = _v0.b;
		var decoder = _v0.c;
		return A3(
			$elm$browser$Browser$Events$MySub,
			node,
			name,
			A2($elm$json$Json$Decode$map, func, decoder));
	});
_Platform_effectManagers['Browser.Events'] = _Platform_createManager($elm$browser$Browser$Events$init, $elm$browser$Browser$Events$onEffects, $elm$browser$Browser$Events$onSelfMsg, 0, $elm$browser$Browser$Events$subMap);
var $elm$browser$Browser$Events$subscription = _Platform_leaf('Browser.Events');
var $elm$browser$Browser$Events$on = F3(
	function (node, name, decoder) {
		return $elm$browser$Browser$Events$subscription(
			A3($elm$browser$Browser$Events$MySub, node, name, decoder));
	});
var $elm$browser$Browser$Events$onKeyDown = A2($elm$browser$Browser$Events$on, $elm$browser$Browser$Events$Document, 'keydown');
var $ohanhi$keyboard$Keyboard$downs = function (toMsg) {
	return $elm$browser$Browser$Events$onKeyDown(
		A2($elm$json$Json$Decode$map, toMsg, $ohanhi$keyboard$Keyboard$eventKeyDecoder));
};
var $author$project$Main$imageDecoded = _Platform_incomingPort(
	'imageDecoded',
	A2(
		$elm$json$Json$Decode$andThen,
		function (img) {
			return A2(
				$elm$json$Json$Decode$andThen,
				function (id) {
					return $elm$json$Json$Decode$succeed(
						{id: id, img: img});
				},
				A2($elm$json$Json$Decode$field, 'id', $elm$json$Json$Decode$string));
		},
		A2($elm$json$Json$Decode$field, 'img', $elm$json$Json$Decode$value)));
var $author$project$Main$log = _Platform_incomingPort(
	'log',
	A2(
		$elm$json$Json$Decode$andThen,
		function (lvl) {
			return A2(
				$elm$json$Json$Decode$andThen,
				function (content) {
					return $elm$json$Json$Decode$succeed(
						{content: content, lvl: lvl});
				},
				A2($elm$json$Json$Decode$field, 'content', $elm$json$Json$Decode$string));
		},
		A2($elm$json$Json$Decode$field, 'lvl', $elm$json$Json$Decode$int)));
var $author$project$Main$receiveCroppedImages = _Platform_incomingPort(
	'receiveCroppedImages',
	$elm$json$Json$Decode$list(
		A2(
			$elm$json$Json$Decode$andThen,
			function (img) {
				return A2(
					$elm$json$Json$Decode$andThen,
					function (id) {
						return $elm$json$Json$Decode$succeed(
							{id: id, img: img});
					},
					A2($elm$json$Json$Decode$field, 'id', $elm$json$Json$Decode$string));
			},
			A2($elm$json$Json$Decode$field, 'img', $elm$json$Json$Decode$value))));
var $author$project$Main$resizes = _Platform_incomingPort(
	'resizes',
	A2(
		$elm$json$Json$Decode$andThen,
		function (width) {
			return A2(
				$elm$json$Json$Decode$andThen,
				function (height) {
					return $elm$json$Json$Decode$succeed(
						{height: height, width: width});
				},
				A2($elm$json$Json$Decode$field, 'height', $elm$json$Json$Decode$float));
		},
		A2($elm$json$Json$Decode$field, 'width', $elm$json$Json$Decode$float)));
var $elm$json$Json$Decode$null = _Json_decodeNull;
var $elm$json$Json$Decode$oneOf = _Json_oneOf;
var $author$project$Main$updateRunStep = _Platform_incomingPort(
	'updateRunStep',
	A2(
		$elm$json$Json$Decode$andThen,
		function (step) {
			return A2(
				$elm$json$Json$Decode$andThen,
				function (progress) {
					return $elm$json$Json$Decode$succeed(
						{progress: progress, step: step});
				},
				A2(
					$elm$json$Json$Decode$field,
					'progress',
					$elm$json$Json$Decode$oneOf(
						_List_fromArray(
							[
								$elm$json$Json$Decode$null($elm$core$Maybe$Nothing),
								A2($elm$json$Json$Decode$map, $elm$core$Maybe$Just, $elm$json$Json$Decode$int)
							]))));
		},
		A2($elm$json$Json$Decode$field, 'step', $elm$json$Json$Decode$string)));
var $author$project$Main$subscriptions = function (model) {
	var _v0 = model.state;
	switch (_v0.$) {
		case 'Home':
			return $elm$core$Platform$Sub$batch(
				_List_fromArray(
					[
						$author$project$Main$resizes($author$project$Main$WindowResizes),
						$author$project$Main$log($author$project$Main$Log),
						$author$project$Main$imageDecoded($author$project$Main$ImageDecoded)
					]));
		case 'Loading':
			return $elm$core$Platform$Sub$batch(
				_List_fromArray(
					[
						$author$project$Main$resizes($author$project$Main$WindowResizes),
						$author$project$Main$log($author$project$Main$Log),
						$author$project$Main$imageDecoded($author$project$Main$ImageDecoded)
					]));
		case 'LoadingError':
			return $elm$core$Platform$Sub$batch(
				_List_fromArray(
					[
						$author$project$Main$resizes($author$project$Main$WindowResizes),
						$author$project$Main$log($author$project$Main$Log),
						$author$project$Main$imageDecoded($author$project$Main$ImageDecoded)
					]));
		case 'ViewImgs':
			return $elm$core$Platform$Sub$batch(
				_List_fromArray(
					[
						$author$project$Main$resizes($author$project$Main$WindowResizes),
						$author$project$Main$log($author$project$Main$Log),
						$author$project$Main$receiveCroppedImages($author$project$Main$ReceiveCroppedImages),
						$author$project$Main$updateRunStep($author$project$Main$UpdateRunStep),
						$ohanhi$keyboard$Keyboard$downs($author$project$Main$KeyDown)
					]));
		case 'Config':
			return $elm$core$Platform$Sub$batch(
				_List_fromArray(
					[
						$author$project$Main$resizes($author$project$Main$WindowResizes),
						$author$project$Main$log($author$project$Main$Log),
						$author$project$Main$receiveCroppedImages($author$project$Main$ReceiveCroppedImages),
						$author$project$Main$updateRunStep($author$project$Main$UpdateRunStep)
					]));
		case 'Registration':
			return $elm$core$Platform$Sub$batch(
				_List_fromArray(
					[
						$author$project$Main$resizes($author$project$Main$WindowResizes),
						$author$project$Main$log($author$project$Main$Log),
						$author$project$Main$receiveCroppedImages($author$project$Main$ReceiveCroppedImages),
						$author$project$Main$updateRunStep($author$project$Main$UpdateRunStep),
						$ohanhi$keyboard$Keyboard$downs($author$project$Main$KeyDown)
					]));
		default:
			return $elm$core$Platform$Sub$batch(
				_List_fromArray(
					[
						$author$project$Main$resizes($author$project$Main$WindowResizes),
						$author$project$Main$log($author$project$Main$Log),
						$author$project$Main$receiveCroppedImages($author$project$Main$ReceiveCroppedImages),
						$author$project$Main$updateRunStep($author$project$Main$UpdateRunStep)
					]));
	}
};
var $author$project$Main$BBox = F4(
	function (left, top, right, bottom) {
		return {bottom: bottom, left: left, right: right, top: top};
	});
var $author$project$Main$DraggingSomeImages = {$: 'DraggingSomeImages'};
var $author$project$Main$DraggingSomeLights = {$: 'DraggingSomeLights'};
var $BrianHicks$elm_csv$Csv$Decode$FieldNamesFromFirstRow = {$: 'FieldNamesFromFirstRow'};
var $author$project$Main$GoToPageImages = {$: 'GoToPageImages'};
var $author$project$Main$GoToPageLogs = {$: 'GoToPageLogs'};
var $author$project$Main$GotScrollPos = function (a) {
	return {$: 'GotScrollPos', a: a};
};
var $author$project$Main$LoadError = function (a) {
	return {$: 'LoadError', a: a};
};
var $author$project$Main$LoadOk = function (a) {
	return {$: 'LoadOk', a: a};
};
var $author$project$Main$Loading = function (a) {
	return {$: 'Loading', a: a};
};
var $author$project$Main$LoadingError = {$: 'LoadingError'};
var $author$project$Main$NavigationMsg = function (a) {
	return {$: 'NavigationMsg', a: a};
};
var $author$project$Main$Point3d = F3(
	function (x, y, z) {
		return {x: x, y: y, z: z};
	});
var $author$project$Main$PointerDrawFromOffsetAndClient = F2(
	function (a, b) {
		return {$: 'PointerDrawFromOffsetAndClient', a: a, b: b};
	});
var $author$project$Main$PointerMovingFromClientCoords = function (a) {
	return {$: 'PointerMovingFromClientCoords', a: a};
};
var $author$project$Main$ReceiveCsv = function (a) {
	return {$: 'ReceiveCsv', a: a};
};
var $author$project$Main$StepApplying = function (a) {
	return {$: 'StepApplying', a: a};
};
var $author$project$Main$StepDone = {$: 'StepDone'};
var $author$project$Main$StepEncoding = function (a) {
	return {$: 'StepEncoding', a: a};
};
var $author$project$Main$StepIteration = F2(
	function (a, b) {
		return {$: 'StepIteration', a: a, b: b};
	});
var $author$project$Main$StepLevel = function (a) {
	return {$: 'StepLevel', a: a};
};
var $author$project$Main$StepMultiresPyramid = {$: 'StepMultiresPyramid'};
var $author$project$Main$StepSaving = function (a) {
	return {$: 'StepSaving', a: a};
};
var $author$project$Main$ViewImgs = function (a) {
	return {$: 'ViewImgs', a: a};
};
var $author$project$Main$WaitingDraw = {$: 'WaitingDraw'};
var $elm$core$Maybe$andThen = F2(
	function (callback, maybeValue) {
		if (maybeValue.$ === 'Just') {
			var value = maybeValue.a;
			return callback(value);
		} else {
			return $elm$core$Maybe$Nothing;
		}
	});
var $elm$core$Task$onError = _Scheduler_onError;
var $elm$core$Task$attempt = F2(
	function (resultToMessage, task) {
		return $elm$core$Task$command(
			$elm$core$Task$Perform(
				A2(
					$elm$core$Task$onError,
					A2(
						$elm$core$Basics$composeL,
						A2($elm$core$Basics$composeL, $elm$core$Task$succeed, resultToMessage),
						$elm$core$Result$Err),
					A2(
						$elm$core$Task$andThen,
						A2(
							$elm$core$Basics$composeL,
							A2($elm$core$Basics$composeL, $elm$core$Task$succeed, resultToMessage),
							$elm$core$Result$Ok),
						task))));
	});
var $author$project$Main$capture = _Platform_outgoingPort('capture', $elm$core$Basics$identity);
var $mpizenberg$elm_2d_viewer$Viewer$coordinatesAt = F2(
	function (_v0, _v1) {
		var x = _v0.a;
		var y = _v0.b;
		var origin = _v1.origin;
		var scale = _v1.scale;
		var _v2 = origin;
		var ox = _v2.a;
		var oy = _v2.b;
		return _Utils_Tuple2(ox + (scale * x), oy + (scale * y));
	});
var $BrianHicks$elm_csv$Csv$Decode$ParsingError = function (a) {
	return {$: 'ParsingError', a: a};
};
var $elm$core$Result$andThen = F2(
	function (callback, result) {
		if (result.$ === 'Ok') {
			var value = result.a;
			return callback(value);
		} else {
			var msg = result.a;
			return $elm$core$Result$Err(msg);
		}
	});
var $BrianHicks$elm_csv$Csv$Decode$DecodingErrors = function (a) {
	return {$: 'DecodingErrors', a: a};
};
var $BrianHicks$elm_csv$Csv$Decode$OnlyColumn_ = {$: 'OnlyColumn_'};
var $BrianHicks$elm_csv$Csv$Decode$NoFieldNamesOnFirstRow = {$: 'NoFieldNamesOnFirstRow'};
var $elm$core$String$trim = _String_trim;
var $BrianHicks$elm_csv$Csv$Decode$getFieldNames = F2(
	function (headers, rows) {
		var fromList = function (names) {
			return A3(
				$elm$core$List$foldl,
				F2(
					function (name, _v2) {
						var soFar = _v2.a;
						var i = _v2.b;
						return _Utils_Tuple2(
							A3($elm$core$Dict$insert, name, i, soFar),
							i + 1);
					}),
				_Utils_Tuple2($elm$core$Dict$empty, 0),
				names).a;
		};
		switch (headers.$) {
			case 'NoFieldNames':
				return $elm$core$Result$Ok(
					_Utils_Tuple3($elm$core$Dict$empty, 0, rows));
			case 'CustomFieldNames':
				var names = headers.a;
				return $elm$core$Result$Ok(
					_Utils_Tuple3(
						fromList(names),
						0,
						rows));
			default:
				if (!rows.b) {
					return $elm$core$Result$Err($BrianHicks$elm_csv$Csv$Decode$NoFieldNamesOnFirstRow);
				} else {
					var first = rows.a;
					var rest = rows.b;
					return $elm$core$Result$Ok(
						_Utils_Tuple3(
							fromList(
								A2($elm$core$List$map, $elm$core$String$trim, first)),
							1,
							rest));
				}
		}
	});
var $elm$core$Result$map = F2(
	function (func, ra) {
		if (ra.$ === 'Ok') {
			var a = ra.a;
			return $elm$core$Result$Ok(
				func(a));
		} else {
			var e = ra.a;
			return $elm$core$Result$Err(e);
		}
	});
var $elm$core$Result$mapError = F2(
	function (f, result) {
		if (result.$ === 'Ok') {
			var v = result.a;
			return $elm$core$Result$Ok(v);
		} else {
			var e = result.a;
			return $elm$core$Result$Err(
				f(e));
		}
	});
var $BrianHicks$elm_csv$Csv$Decode$applyDecoder = F3(
	function (fieldNames, _v0, allRows) {
		var decode = _v0.a;
		var defaultLocation = $BrianHicks$elm_csv$Csv$Decode$OnlyColumn_;
		return A2(
			$elm$core$Result$andThen,
			function (_v1) {
				var resolvedNames = _v1.a;
				var firstRowNumber = _v1.b;
				var rows = _v1.c;
				return A2(
					$elm$core$Result$mapError,
					A2($elm$core$Basics$composeL, $BrianHicks$elm_csv$Csv$Decode$DecodingErrors, $elm$core$List$reverse),
					A2(
						$elm$core$Result$map,
						$elm$core$List$reverse,
						A3(
							$elm$core$List$foldl,
							F2(
								function (row, _v2) {
									var soFar = _v2.a;
									var rowNum = _v2.b;
									return _Utils_Tuple2(
										function () {
											var _v3 = A4(decode, defaultLocation, resolvedNames, rowNum, row);
											if (_v3.$ === 'Ok') {
												var val = _v3.a;
												if (soFar.$ === 'Ok') {
													var values = soFar.a;
													return $elm$core$Result$Ok(
														A2($elm$core$List$cons, val, values));
												} else {
													var errs = soFar.a;
													return $elm$core$Result$Err(errs);
												}
											} else {
												var err = _v3.a;
												if (soFar.$ === 'Ok') {
													return $elm$core$Result$Err(
														_List_fromArray(
															[err]));
												} else {
													var errs = soFar.a;
													return $elm$core$Result$Err(
														A2($elm$core$List$cons, err, errs));
												}
											}
										}(),
										rowNum + 1);
								}),
							_Utils_Tuple2(
								$elm$core$Result$Ok(_List_Nil),
								firstRowNumber),
							rows).a));
			},
			A2($BrianHicks$elm_csv$Csv$Decode$getFieldNames, fieldNames, allRows));
	});
var $BrianHicks$elm_csv$Csv$Parser$AdditionalCharactersAfterClosingQuote = function (a) {
	return {$: 'AdditionalCharactersAfterClosingQuote', a: a};
};
var $BrianHicks$elm_csv$Csv$Parser$SourceEndedWithoutClosingQuote = function (a) {
	return {$: 'SourceEndedWithoutClosingQuote', a: a};
};
var $elm$core$String$cons = _String_cons;
var $elm$core$String$fromChar = function (_char) {
	return A2($elm$core$String$cons, _char, '');
};
var $BrianHicks$elm_csv$Csv$Parser$parse = F2(
	function (config, source) {
		var finalLength = $elm$core$String$length(source);
		var parseQuotedField = F4(
			function (isFieldSeparator, soFar, startOffset, endOffset) {
				parseQuotedField:
				while (true) {
					if ((endOffset - finalLength) >= 0) {
						return $elm$core$Result$Err($BrianHicks$elm_csv$Csv$Parser$SourceEndedWithoutClosingQuote);
					} else {
						if (A3($elm$core$String$slice, endOffset, endOffset + 1, source) === '\"') {
							var segment = A3($elm$core$String$slice, startOffset, endOffset, source);
							if (((endOffset + 2) - finalLength) >= 0) {
								return $elm$core$Result$Ok(
									_Utils_Tuple3(
										_Utils_ap(soFar, segment),
										endOffset + 1,
										false));
							} else {
								var next = A3($elm$core$String$slice, endOffset + 1, endOffset + 2, source);
								if (next === '\"') {
									var newPos = endOffset + 2;
									var $temp$isFieldSeparator = isFieldSeparator,
										$temp$soFar = soFar + (segment + '\"'),
										$temp$startOffset = newPos,
										$temp$endOffset = newPos;
									isFieldSeparator = $temp$isFieldSeparator;
									soFar = $temp$soFar;
									startOffset = $temp$startOffset;
									endOffset = $temp$endOffset;
									continue parseQuotedField;
								} else {
									if (isFieldSeparator(next)) {
										return $elm$core$Result$Ok(
											_Utils_Tuple3(
												_Utils_ap(soFar, segment),
												endOffset + 2,
												false));
									} else {
										if (next === '\n') {
											return $elm$core$Result$Ok(
												_Utils_Tuple3(
													_Utils_ap(soFar, segment),
													endOffset + 2,
													true));
										} else {
											if ((next === '\u000D') && (A3($elm$core$String$slice, endOffset + 2, endOffset + 3, source) === '\n')) {
												return $elm$core$Result$Ok(
													_Utils_Tuple3(
														_Utils_ap(soFar, segment),
														endOffset + 3,
														true));
											} else {
												return $elm$core$Result$Err($BrianHicks$elm_csv$Csv$Parser$AdditionalCharactersAfterClosingQuote);
											}
										}
									}
								}
							}
						} else {
							var $temp$isFieldSeparator = isFieldSeparator,
								$temp$soFar = soFar,
								$temp$startOffset = startOffset,
								$temp$endOffset = endOffset + 1;
							isFieldSeparator = $temp$isFieldSeparator;
							soFar = $temp$soFar;
							startOffset = $temp$startOffset;
							endOffset = $temp$endOffset;
							continue parseQuotedField;
						}
					}
				}
			});
		var parseComma = F4(
			function (row, rows, startOffset, endOffset) {
				parseComma:
				while (true) {
					if ((endOffset - finalLength) >= 0) {
						var finalField = A3($elm$core$String$slice, startOffset, endOffset, source);
						return ((finalField === '') && _Utils_eq(row, _List_Nil)) ? $elm$core$Result$Ok(
							$elm$core$List$reverse(rows)) : $elm$core$Result$Ok(
							$elm$core$List$reverse(
								A2(
									$elm$core$List$cons,
									$elm$core$List$reverse(
										A2($elm$core$List$cons, finalField, row)),
									rows)));
					} else {
						var first = A3($elm$core$String$slice, endOffset, endOffset + 1, source);
						if (first === ',') {
							var newPos = endOffset + 1;
							var $temp$row = A2(
								$elm$core$List$cons,
								A3($elm$core$String$slice, startOffset, endOffset, source),
								row),
								$temp$rows = rows,
								$temp$startOffset = newPos,
								$temp$endOffset = newPos;
							row = $temp$row;
							rows = $temp$rows;
							startOffset = $temp$startOffset;
							endOffset = $temp$endOffset;
							continue parseComma;
						} else {
							if (first === '\n') {
								var newPos = endOffset + 1;
								var $temp$row = _List_Nil,
									$temp$rows = A2(
									$elm$core$List$cons,
									$elm$core$List$reverse(
										A2(
											$elm$core$List$cons,
											A3($elm$core$String$slice, startOffset, endOffset, source),
											row)),
									rows),
									$temp$startOffset = newPos,
									$temp$endOffset = newPos;
								row = $temp$row;
								rows = $temp$rows;
								startOffset = $temp$startOffset;
								endOffset = $temp$endOffset;
								continue parseComma;
							} else {
								if ((first === '\u000D') && (A3($elm$core$String$slice, endOffset + 1, endOffset + 2, source) === '\n')) {
									var newPos = endOffset + 2;
									var $temp$row = _List_Nil,
										$temp$rows = A2(
										$elm$core$List$cons,
										$elm$core$List$reverse(
											A2(
												$elm$core$List$cons,
												A3($elm$core$String$slice, startOffset, endOffset, source),
												row)),
										rows),
										$temp$startOffset = newPos,
										$temp$endOffset = newPos;
									row = $temp$row;
									rows = $temp$rows;
									startOffset = $temp$startOffset;
									endOffset = $temp$endOffset;
									continue parseComma;
								} else {
									if (first === '\"') {
										var newPos = endOffset + 1;
										var _v0 = A4(
											parseQuotedField,
											function (c) {
												return c === ',';
											},
											'',
											newPos,
											newPos);
										if (_v0.$ === 'Ok') {
											var _v1 = _v0.a;
											var value = _v1.a;
											var afterQuotedField = _v1.b;
											var rowEnded = _v1.c;
											if (_Utils_cmp(afterQuotedField, finalLength) > -1) {
												return $elm$core$Result$Ok(
													$elm$core$List$reverse(
														A2(
															$elm$core$List$cons,
															$elm$core$List$reverse(
																A2($elm$core$List$cons, value, row)),
															rows)));
											} else {
												if (rowEnded) {
													var $temp$row = _List_Nil,
														$temp$rows = A2(
														$elm$core$List$cons,
														$elm$core$List$reverse(
															A2($elm$core$List$cons, value, row)),
														rows),
														$temp$startOffset = afterQuotedField,
														$temp$endOffset = afterQuotedField;
													row = $temp$row;
													rows = $temp$rows;
													startOffset = $temp$startOffset;
													endOffset = $temp$endOffset;
													continue parseComma;
												} else {
													var $temp$row = A2($elm$core$List$cons, value, row),
														$temp$rows = rows,
														$temp$startOffset = afterQuotedField,
														$temp$endOffset = afterQuotedField;
													row = $temp$row;
													rows = $temp$rows;
													startOffset = $temp$startOffset;
													endOffset = $temp$endOffset;
													continue parseComma;
												}
											}
										} else {
											var problem = _v0.a;
											return $elm$core$Result$Err(
												problem(
													$elm$core$List$length(rows) + 1));
										}
									} else {
										var $temp$row = row,
											$temp$rows = rows,
											$temp$startOffset = startOffset,
											$temp$endOffset = endOffset + 1;
										row = $temp$row;
										rows = $temp$rows;
										startOffset = $temp$startOffset;
										endOffset = $temp$endOffset;
										continue parseComma;
									}
								}
							}
						}
					}
				}
			});
		var parseHelp = F5(
			function (isFieldSeparator, row, rows, startOffset, endOffset) {
				parseHelp:
				while (true) {
					if ((endOffset - finalLength) >= 0) {
						var finalField = A3($elm$core$String$slice, startOffset, endOffset, source);
						return ((finalField === '') && _Utils_eq(row, _List_Nil)) ? $elm$core$Result$Ok(
							$elm$core$List$reverse(rows)) : $elm$core$Result$Ok(
							$elm$core$List$reverse(
								A2(
									$elm$core$List$cons,
									$elm$core$List$reverse(
										A2($elm$core$List$cons, finalField, row)),
									rows)));
					} else {
						var first = A3($elm$core$String$slice, endOffset, endOffset + 1, source);
						if (isFieldSeparator(first)) {
							var newPos = endOffset + 1;
							var $temp$isFieldSeparator = isFieldSeparator,
								$temp$row = A2(
								$elm$core$List$cons,
								A3($elm$core$String$slice, startOffset, endOffset, source),
								row),
								$temp$rows = rows,
								$temp$startOffset = newPos,
								$temp$endOffset = newPos;
							isFieldSeparator = $temp$isFieldSeparator;
							row = $temp$row;
							rows = $temp$rows;
							startOffset = $temp$startOffset;
							endOffset = $temp$endOffset;
							continue parseHelp;
						} else {
							if (first === '\n') {
								var newPos = endOffset + 1;
								var $temp$isFieldSeparator = isFieldSeparator,
									$temp$row = _List_Nil,
									$temp$rows = A2(
									$elm$core$List$cons,
									$elm$core$List$reverse(
										A2(
											$elm$core$List$cons,
											A3($elm$core$String$slice, startOffset, endOffset, source),
											row)),
									rows),
									$temp$startOffset = newPos,
									$temp$endOffset = newPos;
								isFieldSeparator = $temp$isFieldSeparator;
								row = $temp$row;
								rows = $temp$rows;
								startOffset = $temp$startOffset;
								endOffset = $temp$endOffset;
								continue parseHelp;
							} else {
								if ((first === '\u000D') && (A3($elm$core$String$slice, endOffset + 1, endOffset + 2, source) === '\n')) {
									var newPos = endOffset + 2;
									var $temp$isFieldSeparator = isFieldSeparator,
										$temp$row = _List_Nil,
										$temp$rows = A2(
										$elm$core$List$cons,
										$elm$core$List$reverse(
											A2(
												$elm$core$List$cons,
												A3($elm$core$String$slice, startOffset, endOffset, source),
												row)),
										rows),
										$temp$startOffset = newPos,
										$temp$endOffset = newPos;
									isFieldSeparator = $temp$isFieldSeparator;
									row = $temp$row;
									rows = $temp$rows;
									startOffset = $temp$startOffset;
									endOffset = $temp$endOffset;
									continue parseHelp;
								} else {
									if (first === '\"') {
										var newPos = endOffset + 1;
										var _v2 = A4(parseQuotedField, isFieldSeparator, '', newPos, newPos);
										if (_v2.$ === 'Ok') {
											var _v3 = _v2.a;
											var value = _v3.a;
											var afterQuotedField = _v3.b;
											var rowEnded = _v3.c;
											if (_Utils_cmp(afterQuotedField, finalLength) > -1) {
												return $elm$core$Result$Ok(
													$elm$core$List$reverse(
														A2(
															$elm$core$List$cons,
															$elm$core$List$reverse(
																A2($elm$core$List$cons, value, row)),
															rows)));
											} else {
												if (rowEnded) {
													var $temp$isFieldSeparator = isFieldSeparator,
														$temp$row = _List_Nil,
														$temp$rows = A2(
														$elm$core$List$cons,
														$elm$core$List$reverse(
															A2($elm$core$List$cons, value, row)),
														rows),
														$temp$startOffset = afterQuotedField,
														$temp$endOffset = afterQuotedField;
													isFieldSeparator = $temp$isFieldSeparator;
													row = $temp$row;
													rows = $temp$rows;
													startOffset = $temp$startOffset;
													endOffset = $temp$endOffset;
													continue parseHelp;
												} else {
													var $temp$isFieldSeparator = isFieldSeparator,
														$temp$row = A2($elm$core$List$cons, value, row),
														$temp$rows = rows,
														$temp$startOffset = afterQuotedField,
														$temp$endOffset = afterQuotedField;
													isFieldSeparator = $temp$isFieldSeparator;
													row = $temp$row;
													rows = $temp$rows;
													startOffset = $temp$startOffset;
													endOffset = $temp$endOffset;
													continue parseHelp;
												}
											}
										} else {
											var problem = _v2.a;
											return $elm$core$Result$Err(
												problem(
													$elm$core$List$length(rows) + 1));
										}
									} else {
										var $temp$isFieldSeparator = isFieldSeparator,
											$temp$row = row,
											$temp$rows = rows,
											$temp$startOffset = startOffset,
											$temp$endOffset = endOffset + 1;
										isFieldSeparator = $temp$isFieldSeparator;
										row = $temp$row;
										rows = $temp$rows;
										startOffset = $temp$startOffset;
										endOffset = $temp$endOffset;
										continue parseHelp;
									}
								}
							}
						}
					}
				}
			});
		var parseSemicolon = F4(
			function (row, rows, startOffset, endOffset) {
				parseSemicolon:
				while (true) {
					if ((endOffset - finalLength) >= 0) {
						var finalField = A3($elm$core$String$slice, startOffset, endOffset, source);
						return ((finalField === '') && _Utils_eq(row, _List_Nil)) ? $elm$core$Result$Ok(
							$elm$core$List$reverse(rows)) : $elm$core$Result$Ok(
							$elm$core$List$reverse(
								A2(
									$elm$core$List$cons,
									$elm$core$List$reverse(
										A2($elm$core$List$cons, finalField, row)),
									rows)));
					} else {
						var first = A3($elm$core$String$slice, endOffset, endOffset + 1, source);
						if (first === ';') {
							var newPos = endOffset + 1;
							var $temp$row = A2(
								$elm$core$List$cons,
								A3($elm$core$String$slice, startOffset, endOffset, source),
								row),
								$temp$rows = rows,
								$temp$startOffset = newPos,
								$temp$endOffset = newPos;
							row = $temp$row;
							rows = $temp$rows;
							startOffset = $temp$startOffset;
							endOffset = $temp$endOffset;
							continue parseSemicolon;
						} else {
							if (first === '\n') {
								var newPos = endOffset + 1;
								var $temp$row = _List_Nil,
									$temp$rows = A2(
									$elm$core$List$cons,
									$elm$core$List$reverse(
										A2(
											$elm$core$List$cons,
											A3($elm$core$String$slice, startOffset, endOffset, source),
											row)),
									rows),
									$temp$startOffset = newPos,
									$temp$endOffset = newPos;
								row = $temp$row;
								rows = $temp$rows;
								startOffset = $temp$startOffset;
								endOffset = $temp$endOffset;
								continue parseSemicolon;
							} else {
								if ((first === '\u000D') && (A3($elm$core$String$slice, endOffset + 1, endOffset + 2, source) === '\n')) {
									var newPos = endOffset + 2;
									var $temp$row = _List_Nil,
										$temp$rows = A2(
										$elm$core$List$cons,
										$elm$core$List$reverse(
											A2(
												$elm$core$List$cons,
												A3($elm$core$String$slice, startOffset, endOffset, source),
												row)),
										rows),
										$temp$startOffset = newPos,
										$temp$endOffset = newPos;
									row = $temp$row;
									rows = $temp$rows;
									startOffset = $temp$startOffset;
									endOffset = $temp$endOffset;
									continue parseSemicolon;
								} else {
									if (first === '\"') {
										var newPos = endOffset + 1;
										var _v4 = A4(
											parseQuotedField,
											function (c) {
												return c === ';';
											},
											'',
											newPos,
											newPos);
										if (_v4.$ === 'Ok') {
											var _v5 = _v4.a;
											var value = _v5.a;
											var afterQuotedField = _v5.b;
											var rowEnded = _v5.c;
											if (_Utils_cmp(afterQuotedField, finalLength) > -1) {
												return $elm$core$Result$Ok(
													$elm$core$List$reverse(
														A2(
															$elm$core$List$cons,
															$elm$core$List$reverse(
																A2($elm$core$List$cons, value, row)),
															rows)));
											} else {
												if (rowEnded) {
													var $temp$row = _List_Nil,
														$temp$rows = A2(
														$elm$core$List$cons,
														$elm$core$List$reverse(
															A2($elm$core$List$cons, value, row)),
														rows),
														$temp$startOffset = afterQuotedField,
														$temp$endOffset = afterQuotedField;
													row = $temp$row;
													rows = $temp$rows;
													startOffset = $temp$startOffset;
													endOffset = $temp$endOffset;
													continue parseSemicolon;
												} else {
													var $temp$row = A2($elm$core$List$cons, value, row),
														$temp$rows = rows,
														$temp$startOffset = afterQuotedField,
														$temp$endOffset = afterQuotedField;
													row = $temp$row;
													rows = $temp$rows;
													startOffset = $temp$startOffset;
													endOffset = $temp$endOffset;
													continue parseSemicolon;
												}
											}
										} else {
											var problem = _v4.a;
											return $elm$core$Result$Err(
												problem(
													$elm$core$List$length(rows) + 1));
										}
									} else {
										var $temp$row = row,
											$temp$rows = rows,
											$temp$startOffset = startOffset,
											$temp$endOffset = endOffset + 1;
										row = $temp$row;
										rows = $temp$rows;
										startOffset = $temp$startOffset;
										endOffset = $temp$endOffset;
										continue parseSemicolon;
									}
								}
							}
						}
					}
				}
			});
		var fieldSeparator = $elm$core$String$fromChar(config.fieldSeparator);
		return $elm$core$String$isEmpty(source) ? $elm$core$Result$Ok(_List_Nil) : (_Utils_eq(
			config.fieldSeparator,
			_Utils_chr(',')) ? A4(parseComma, _List_Nil, _List_Nil, 0, 0) : (_Utils_eq(
			config.fieldSeparator,
			_Utils_chr(';')) ? A4(parseSemicolon, _List_Nil, _List_Nil, 0, 0) : A5(
			parseHelp,
			function (s) {
				return _Utils_eq(s, fieldSeparator);
			},
			_List_Nil,
			_List_Nil,
			0,
			0)));
	});
var $BrianHicks$elm_csv$Csv$Decode$decodeCustom = F4(
	function (config, fieldNames, decoder, source) {
		return A2(
			$elm$core$Result$andThen,
			A2($BrianHicks$elm_csv$Csv$Decode$applyDecoder, fieldNames, decoder),
			A2(
				$elm$core$Result$mapError,
				$BrianHicks$elm_csv$Csv$Decode$ParsingError,
				A2($BrianHicks$elm_csv$Csv$Parser$parse, config, source)));
	});
var $author$project$Main$decodeImages = _Platform_outgoingPort(
	'decodeImages',
	$elm$json$Json$Encode$list($elm$core$Basics$identity));
var $author$project$CropForm$decoded = function (_v0) {
	var left = _v0.left;
	var top = _v0.top;
	var right = _v0.right;
	var bottom = _v0.bottom;
	var _v1 = _Utils_Tuple2(
		_Utils_Tuple2(left.decodedInput, right.decodedInput),
		_Utils_Tuple2(top.decodedInput, bottom.decodedInput));
	if ((((_v1.a.a.$ === 'Ok') && (_v1.a.b.$ === 'Ok')) && (_v1.b.a.$ === 'Ok')) && (_v1.b.b.$ === 'Ok')) {
		var _v2 = _v1.a;
		var l = _v2.a.a;
		var r = _v2.b.a;
		var _v3 = _v1.b;
		var t = _v3.a.a;
		var b = _v3.b.a;
		return $elm$core$Maybe$Just(
			{bottom: b, left: l, right: r, top: t});
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $elm$time$Time$Posix = function (a) {
	return {$: 'Posix', a: a};
};
var $elm$time$Time$millisToPosix = $elm$time$Time$Posix;
var $elm$file$File$decoder = _File_decoder;
var $mpizenberg$elm_file$FileValue$encode = function (file) {
	return file.value;
};
var $elm$json$Json$Encode$int = _Json_wrap;
var $author$project$Main$encodeCrop = function (_v0) {
	var left = _v0.left;
	var top = _v0.top;
	var right = _v0.right;
	var bottom = _v0.bottom;
	return $elm$json$Json$Encode$object(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'left',
				$elm$json$Json$Encode$int(left)),
				_Utils_Tuple2(
				'top',
				$elm$json$Json$Encode$int(top)),
				_Utils_Tuple2(
				'right',
				$elm$json$Json$Encode$int(right)),
				_Utils_Tuple2(
				'bottom',
				$elm$json$Json$Encode$int(bottom))
			]));
};
var $elm$json$Json$Encode$float = _Json_wrap;
var $author$project$Main$encodeLight = function (pt) {
	return $elm$json$Json$Encode$object(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'x',
				$elm$json$Json$Encode$float(pt.x)),
				_Utils_Tuple2(
				'y',
				$elm$json$Json$Encode$float(pt.y)),
				_Utils_Tuple2(
				'z',
				$elm$json$Json$Encode$float(pt.z))
			]));
};
var $author$project$Main$encodeLights = function (ptList) {
	return A2($elm$json$Json$Encode$list, $author$project$Main$encodeLight, ptList);
};
var $elm$core$Maybe$map = F2(
	function (f, maybe) {
		if (maybe.$ === 'Just') {
			var value = maybe.a;
			return $elm$core$Maybe$Just(
				f(value));
		} else {
			return $elm$core$Maybe$Nothing;
		}
	});
var $elm$json$Json$Encode$null = _Json_encodeNull;
var $author$project$Main$encodeMaybe = F2(
	function (encoder, data) {
		return A2(
			$elm$core$Maybe$withDefault,
			$elm$json$Json$Encode$null,
			A2($elm$core$Maybe$map, encoder, data));
	});
var $author$project$Main$encodeParams = function (params) {
	return $elm$json$Json$Encode$object(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'crop',
				A2($author$project$Main$encodeMaybe, $author$project$Main$encodeCrop, params.crop)),
				_Utils_Tuple2(
				'maxIterations',
				$elm$json$Json$Encode$int(params.maxIterations)),
				_Utils_Tuple2(
				'z_mean',
				$elm$json$Json$Encode$float(params.z_mean)),
				_Utils_Tuple2(
				'lights',
				A2($author$project$Main$encodeMaybe, $author$project$Main$encodeLights, params.lights)),
				_Utils_Tuple2(
				'convergenceThreshold',
				$elm$json$Json$Encode$float(params.convergenceThreshold)),
				_Utils_Tuple2(
				'maxVerbosity',
				$elm$json$Json$Encode$int(params.maxVerbosity))
			]));
};
var $BrianHicks$elm_csv$Csv$Decode$errorToString = function (error) {
	switch (error.$) {
		case 'ParsingError':
			if (error.a.$ === 'SourceEndedWithoutClosingQuote') {
				var row = error.a.a;
				return 'The source ended on row ' + ($elm$core$String$fromInt(row) + ' in a quoted field without a closing quote.');
			} else {
				var row = error.a.a;
				return 'On row ' + ($elm$core$String$fromInt(row) + ' in the source, there were additional characters in a field after a closing quote.');
			}
		case 'NoFieldNamesOnFirstRow':
			return 'I expected to see field names on the first row, but there were none.';
		default:
			var errs = error.a;
			var rowAndColumnString = function (err) {
				return 'row ' + ($elm$core$String$fromInt(err.row) + (', ' + function () {
					var _v4 = err.column;
					switch (_v4.$) {
						case 'Column':
							var col = _v4.a;
							return 'column ' + $elm$core$String$fromInt(col);
						case 'Field':
							if (_v4.b.$ === 'Nothing') {
								var name = _v4.a;
								var _v5 = _v4.b;
								return 'in the `' + (name + '` field');
							} else {
								var name = _v4.a;
								var col = _v4.b.a;
								return 'in the `' + (name + ('` field (column ' + ($elm$core$String$fromInt(col) + ')')));
							}
						default:
							return 'column 0 (the only column present)';
					}
				}()));
			};
			var problemString = function (problem) {
				switch (problem.$) {
					case 'ColumnNotFound':
						var i = problem.a;
						return 'I couldn\'t find column #' + ($elm$core$String$fromInt(i) + '.');
					case 'FieldNotFound':
						var name = problem.a;
						return 'I couldn\'t find the `' + (name + '` column.');
					case 'FieldNotProvided':
						var name = problem.a;
						return 'The `' + (name + '` field wasn\'t provided in the field names.');
					case 'ExpectedOneColumn':
						var howMany = problem.a;
						return 'I expected exactly one column, but there were ' + ($elm$core$String$fromInt(howMany) + '.');
					case 'ExpectedInt':
						var notInt = problem.a;
						return 'I could not parse an int from `' + (notInt + '`.');
					case 'ExpectedFloat':
						var notFloat = problem.a;
						return 'I could not parse a float from `' + (notFloat + '`.');
					default:
						var custom = problem.a;
						return custom;
				}
			};
			var errString = function (err) {
				var _v2 = A2($elm$core$List$map, problemString, err.problems);
				if (!_v2.b) {
					return 'There was an internal error while generating an error on ' + (rowAndColumnString(err) + ' and I don\'t have any info about what went wrong. Please open an issue!');
				} else {
					if (!_v2.b.b) {
						var only = _v2.a;
						return 'There was a problem on ' + (rowAndColumnString(err) + (': ' + only));
					} else {
						var many = _v2;
						return 'There were some problems on ' + (rowAndColumnString(err) + (':\n\n' + A2(
							$elm$core$String$join,
							'\n',
							A2(
								$elm$core$List$map,
								function (problem) {
									return ' - ' + problem;
								},
								many))));
					}
				}
			};
			if (!errs.b) {
				return 'Something went wrong, but I got an blank error list so I don\'t know what it was. Please open an issue!';
			} else {
				if (!errs.b.b) {
					var only = errs.a;
					return errString(only);
				} else {
					var many = errs;
					return 'I saw ' + ($elm$core$String$fromInt(
						$elm$core$List$length(many)) + (' problems while decoding this CSV:\n\n' + A2(
						$elm$core$String$join,
						'\n\n',
						A2($elm$core$List$map, errString, errs))));
				}
			}
	}
};
var $mpizenberg$elm_pointer_events$Html$Events$Extra$Pointer$Event = F5(
	function (pointerType, pointer, pointerId, isPrimary, contactDetails) {
		return {contactDetails: contactDetails, isPrimary: isPrimary, pointer: pointer, pointerId: pointerId, pointerType: pointerType};
	});
var $elm$json$Json$Decode$bool = _Json_decodeBool;
var $mpizenberg$elm_pointer_events$Html$Events$Extra$Pointer$ContactDetails = F5(
	function (width, height, pressure, tiltX, tiltY) {
		return {height: height, pressure: pressure, tiltX: tiltX, tiltY: tiltY, width: width};
	});
var $mpizenberg$elm_pointer_events$Html$Events$Extra$Pointer$contactDetailsDecoder = A6(
	$elm$json$Json$Decode$map5,
	$mpizenberg$elm_pointer_events$Html$Events$Extra$Pointer$ContactDetails,
	A2($elm$json$Json$Decode$field, 'width', $elm$json$Json$Decode$float),
	A2($elm$json$Json$Decode$field, 'height', $elm$json$Json$Decode$float),
	A2($elm$json$Json$Decode$field, 'pressure', $elm$json$Json$Decode$float),
	A2($elm$json$Json$Decode$field, 'tiltX', $elm$json$Json$Decode$float),
	A2($elm$json$Json$Decode$field, 'tiltY', $elm$json$Json$Decode$float));
var $mpizenberg$elm_pointer_events$Html$Events$Extra$Mouse$Event = F6(
	function (keys, button, clientPos, offsetPos, pagePos, screenPos) {
		return {button: button, clientPos: clientPos, keys: keys, offsetPos: offsetPos, pagePos: pagePos, screenPos: screenPos};
	});
var $mpizenberg$elm_pointer_events$Html$Events$Extra$Mouse$BackButton = {$: 'BackButton'};
var $mpizenberg$elm_pointer_events$Html$Events$Extra$Mouse$ErrorButton = {$: 'ErrorButton'};
var $mpizenberg$elm_pointer_events$Html$Events$Extra$Mouse$ForwardButton = {$: 'ForwardButton'};
var $mpizenberg$elm_pointer_events$Html$Events$Extra$Mouse$MainButton = {$: 'MainButton'};
var $mpizenberg$elm_pointer_events$Html$Events$Extra$Mouse$MiddleButton = {$: 'MiddleButton'};
var $mpizenberg$elm_pointer_events$Html$Events$Extra$Mouse$SecondButton = {$: 'SecondButton'};
var $mpizenberg$elm_pointer_events$Html$Events$Extra$Mouse$buttonFromId = function (id) {
	switch (id) {
		case 0:
			return $mpizenberg$elm_pointer_events$Html$Events$Extra$Mouse$MainButton;
		case 1:
			return $mpizenberg$elm_pointer_events$Html$Events$Extra$Mouse$MiddleButton;
		case 2:
			return $mpizenberg$elm_pointer_events$Html$Events$Extra$Mouse$SecondButton;
		case 3:
			return $mpizenberg$elm_pointer_events$Html$Events$Extra$Mouse$BackButton;
		case 4:
			return $mpizenberg$elm_pointer_events$Html$Events$Extra$Mouse$ForwardButton;
		default:
			return $mpizenberg$elm_pointer_events$Html$Events$Extra$Mouse$ErrorButton;
	}
};
var $mpizenberg$elm_pointer_events$Html$Events$Extra$Mouse$buttonDecoder = A2(
	$elm$json$Json$Decode$map,
	$mpizenberg$elm_pointer_events$Html$Events$Extra$Mouse$buttonFromId,
	A2($elm$json$Json$Decode$field, 'button', $elm$json$Json$Decode$int));
var $mpizenberg$elm_pointer_events$Internal$Decode$clientPos = A3(
	$elm$json$Json$Decode$map2,
	F2(
		function (a, b) {
			return _Utils_Tuple2(a, b);
		}),
	A2($elm$json$Json$Decode$field, 'clientX', $elm$json$Json$Decode$float),
	A2($elm$json$Json$Decode$field, 'clientY', $elm$json$Json$Decode$float));
var $mpizenberg$elm_pointer_events$Internal$Decode$Keys = F3(
	function (alt, ctrl, shift) {
		return {alt: alt, ctrl: ctrl, shift: shift};
	});
var $mpizenberg$elm_pointer_events$Internal$Decode$keys = A4(
	$elm$json$Json$Decode$map3,
	$mpizenberg$elm_pointer_events$Internal$Decode$Keys,
	A2($elm$json$Json$Decode$field, 'altKey', $elm$json$Json$Decode$bool),
	A2($elm$json$Json$Decode$field, 'ctrlKey', $elm$json$Json$Decode$bool),
	A2($elm$json$Json$Decode$field, 'shiftKey', $elm$json$Json$Decode$bool));
var $elm$json$Json$Decode$map6 = _Json_map6;
var $mpizenberg$elm_pointer_events$Internal$Decode$offsetPos = A3(
	$elm$json$Json$Decode$map2,
	F2(
		function (a, b) {
			return _Utils_Tuple2(a, b);
		}),
	A2($elm$json$Json$Decode$field, 'offsetX', $elm$json$Json$Decode$float),
	A2($elm$json$Json$Decode$field, 'offsetY', $elm$json$Json$Decode$float));
var $mpizenberg$elm_pointer_events$Internal$Decode$pagePos = A3(
	$elm$json$Json$Decode$map2,
	F2(
		function (a, b) {
			return _Utils_Tuple2(a, b);
		}),
	A2($elm$json$Json$Decode$field, 'pageX', $elm$json$Json$Decode$float),
	A2($elm$json$Json$Decode$field, 'pageY', $elm$json$Json$Decode$float));
var $mpizenberg$elm_pointer_events$Internal$Decode$screenPos = A3(
	$elm$json$Json$Decode$map2,
	F2(
		function (a, b) {
			return _Utils_Tuple2(a, b);
		}),
	A2($elm$json$Json$Decode$field, 'screenX', $elm$json$Json$Decode$float),
	A2($elm$json$Json$Decode$field, 'screenY', $elm$json$Json$Decode$float));
var $mpizenberg$elm_pointer_events$Html$Events$Extra$Mouse$eventDecoder = A7($elm$json$Json$Decode$map6, $mpizenberg$elm_pointer_events$Html$Events$Extra$Mouse$Event, $mpizenberg$elm_pointer_events$Internal$Decode$keys, $mpizenberg$elm_pointer_events$Html$Events$Extra$Mouse$buttonDecoder, $mpizenberg$elm_pointer_events$Internal$Decode$clientPos, $mpizenberg$elm_pointer_events$Internal$Decode$offsetPos, $mpizenberg$elm_pointer_events$Internal$Decode$pagePos, $mpizenberg$elm_pointer_events$Internal$Decode$screenPos);
var $mpizenberg$elm_pointer_events$Html$Events$Extra$Pointer$MouseType = {$: 'MouseType'};
var $mpizenberg$elm_pointer_events$Html$Events$Extra$Pointer$PenType = {$: 'PenType'};
var $mpizenberg$elm_pointer_events$Html$Events$Extra$Pointer$TouchType = {$: 'TouchType'};
var $mpizenberg$elm_pointer_events$Html$Events$Extra$Pointer$stringToPointerType = function (str) {
	switch (str) {
		case 'pen':
			return $mpizenberg$elm_pointer_events$Html$Events$Extra$Pointer$PenType;
		case 'touch':
			return $mpizenberg$elm_pointer_events$Html$Events$Extra$Pointer$TouchType;
		default:
			return $mpizenberg$elm_pointer_events$Html$Events$Extra$Pointer$MouseType;
	}
};
var $mpizenberg$elm_pointer_events$Html$Events$Extra$Pointer$pointerTypeDecoder = A2($elm$json$Json$Decode$map, $mpizenberg$elm_pointer_events$Html$Events$Extra$Pointer$stringToPointerType, $elm$json$Json$Decode$string);
var $mpizenberg$elm_pointer_events$Html$Events$Extra$Pointer$eventDecoder = A6(
	$elm$json$Json$Decode$map5,
	$mpizenberg$elm_pointer_events$Html$Events$Extra$Pointer$Event,
	A2($elm$json$Json$Decode$field, 'pointerType', $mpizenberg$elm_pointer_events$Html$Events$Extra$Pointer$pointerTypeDecoder),
	$mpizenberg$elm_pointer_events$Html$Events$Extra$Mouse$eventDecoder,
	A2($elm$json$Json$Decode$field, 'pointerId', $elm$json$Json$Decode$int),
	A2($elm$json$Json$Decode$field, 'isPrimary', $elm$json$Json$Decode$bool),
	$mpizenberg$elm_pointer_events$Html$Events$Extra$Pointer$contactDetailsDecoder);
var $BrianHicks$elm_csv$Csv$Decode$Decoder = function (a) {
	return {$: 'Decoder', a: a};
};
var $BrianHicks$elm_csv$Csv$Decode$Field_ = function (a) {
	return {$: 'Field_', a: a};
};
var $BrianHicks$elm_csv$Csv$Decode$field = F2(
	function (name, _v0) {
		var decoder = _v0.a;
		return $BrianHicks$elm_csv$Csv$Decode$Decoder(
			F3(
				function (_v1, fieldNames, row) {
					return A3(
						decoder,
						$BrianHicks$elm_csv$Csv$Decode$Field_(name),
						fieldNames,
						row);
				}));
	});
var $elm$core$List$filter = F2(
	function (isGood, list) {
		return A3(
			$elm$core$List$foldr,
			F2(
				function (x, xs) {
					return isGood(x) ? A2($elm$core$List$cons, x, xs) : xs;
				}),
			_List_Nil,
			list);
	});
var $mpizenberg$elm_2d_viewer$Viewer$centerAtCoordinates = F2(
	function (_v0, viewer) {
		var x = _v0.a;
		var y = _v0.b;
		var size = viewer.size;
		var scale = viewer.scale;
		var _v1 = size;
		var width = _v1.a;
		var height = _v1.b;
		return _Utils_update(
			viewer,
			{
				origin: _Utils_Tuple2(x - ((0.5 * scale) * width), y - ((0.5 * scale) * height))
			});
	});
var $mpizenberg$elm_2d_viewer$Viewer$fitImage = F3(
	function (rescale, _v0, viewer) {
		var width = _v0.a;
		var height = _v0.b;
		var _v1 = viewer.size;
		var viewerWidth = _v1.a;
		var viewerHeight = _v1.b;
		var newScale = rescale * A2($elm$core$Basics$max, width / viewerWidth, height / viewerHeight);
		return A2(
			$mpizenberg$elm_2d_viewer$Viewer$centerAtCoordinates,
			_Utils_Tuple2(width / 2.0, height / 2.0),
			_Utils_update(
				viewer,
				{scale: newScale}));
	});
var $BrianHicks$elm_csv$Csv$Decode$ExpectedFloat = function (a) {
	return {$: 'ExpectedFloat', a: a};
};
var $BrianHicks$elm_csv$Csv$Decode$ColumnNotFound = function (a) {
	return {$: 'ColumnNotFound', a: a};
};
var $BrianHicks$elm_csv$Csv$Decode$ExpectedOneColumn = function (a) {
	return {$: 'ExpectedOneColumn', a: a};
};
var $BrianHicks$elm_csv$Csv$Decode$FieldNotFound = function (a) {
	return {$: 'FieldNotFound', a: a};
};
var $BrianHicks$elm_csv$Csv$Decode$FieldNotProvided = function (a) {
	return {$: 'FieldNotProvided', a: a};
};
var $elm$core$List$head = function (list) {
	if (list.b) {
		var x = list.a;
		var xs = list.b;
		return $elm$core$Maybe$Just(x);
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $BrianHicks$elm_csv$Csv$Decode$Column = function (a) {
	return {$: 'Column', a: a};
};
var $BrianHicks$elm_csv$Csv$Decode$Field = F2(
	function (a, b) {
		return {$: 'Field', a: a, b: b};
	});
var $BrianHicks$elm_csv$Csv$Decode$OnlyColumn = {$: 'OnlyColumn'};
var $BrianHicks$elm_csv$Csv$Decode$locationToColumn = F2(
	function (fieldNames, location) {
		switch (location.$) {
			case 'Column_':
				var i = location.a;
				return $BrianHicks$elm_csv$Csv$Decode$Column(i);
			case 'Field_':
				var name = location.a;
				return A2(
					$BrianHicks$elm_csv$Csv$Decode$Field,
					name,
					A2($elm$core$Dict$get, name, fieldNames));
			default:
				return $BrianHicks$elm_csv$Csv$Decode$OnlyColumn;
		}
	});
var $BrianHicks$elm_csv$Csv$Decode$fromString = function (convert) {
	return $BrianHicks$elm_csv$Csv$Decode$Decoder(
		F4(
			function (location, fieldNames, rowNum, row) {
				switch (location.$) {
					case 'Column_':
						var colNum = location.a;
						var _v1 = $elm$core$List$head(
							A2($elm$core$List$drop, colNum, row));
						if (_v1.$ === 'Just') {
							var value = _v1.a;
							var _v2 = convert(value);
							if (_v2.$ === 'Ok') {
								var converted = _v2.a;
								return $elm$core$Result$Ok(converted);
							} else {
								var problem = _v2.a;
								return $elm$core$Result$Err(
									{
										column: A2($BrianHicks$elm_csv$Csv$Decode$locationToColumn, fieldNames, location),
										problems: _List_fromArray(
											[problem]),
										row: rowNum
									});
							}
						} else {
							return $elm$core$Result$Err(
								{
									column: A2($BrianHicks$elm_csv$Csv$Decode$locationToColumn, fieldNames, location),
									problems: _List_fromArray(
										[
											$BrianHicks$elm_csv$Csv$Decode$ColumnNotFound(colNum)
										]),
									row: rowNum
								});
						}
					case 'Field_':
						var name = location.a;
						var _v3 = A2($elm$core$Dict$get, name, fieldNames);
						if (_v3.$ === 'Just') {
							var colNum = _v3.a;
							var _v4 = $elm$core$List$head(
								A2($elm$core$List$drop, colNum, row));
							if (_v4.$ === 'Just') {
								var value = _v4.a;
								var _v5 = convert(value);
								if (_v5.$ === 'Ok') {
									var converted = _v5.a;
									return $elm$core$Result$Ok(converted);
								} else {
									var problem = _v5.a;
									return $elm$core$Result$Err(
										{
											column: A2($BrianHicks$elm_csv$Csv$Decode$locationToColumn, fieldNames, location),
											problems: _List_fromArray(
												[problem]),
											row: rowNum
										});
								}
							} else {
								return $elm$core$Result$Err(
									{
										column: A2($BrianHicks$elm_csv$Csv$Decode$locationToColumn, fieldNames, location),
										problems: _List_fromArray(
											[
												$BrianHicks$elm_csv$Csv$Decode$FieldNotFound(name)
											]),
										row: rowNum
									});
							}
						} else {
							return $elm$core$Result$Err(
								{
									column: A2($BrianHicks$elm_csv$Csv$Decode$locationToColumn, fieldNames, location),
									problems: _List_fromArray(
										[
											$BrianHicks$elm_csv$Csv$Decode$FieldNotProvided(name)
										]),
									row: rowNum
								});
						}
					default:
						if (!row.b) {
							return $elm$core$Result$Err(
								{
									column: A2($BrianHicks$elm_csv$Csv$Decode$locationToColumn, fieldNames, location),
									problems: _List_fromArray(
										[
											$BrianHicks$elm_csv$Csv$Decode$ColumnNotFound(0)
										]),
									row: rowNum
								});
						} else {
							if (!row.b.b) {
								var only = row.a;
								var _v7 = convert(only);
								if (_v7.$ === 'Ok') {
									var converted = _v7.a;
									return $elm$core$Result$Ok(converted);
								} else {
									var problem = _v7.a;
									return $elm$core$Result$Err(
										{
											column: A2($BrianHicks$elm_csv$Csv$Decode$locationToColumn, fieldNames, location),
											problems: _List_fromArray(
												[problem]),
											row: rowNum
										});
								}
							} else {
								return $elm$core$Result$Err(
									{
										column: A2($BrianHicks$elm_csv$Csv$Decode$locationToColumn, fieldNames, location),
										problems: _List_fromArray(
											[
												$BrianHicks$elm_csv$Csv$Decode$ExpectedOneColumn(
												$elm$core$List$length(row))
											]),
										row: rowNum
									});
							}
						}
				}
			}));
};
var $elm$core$String$toFloat = _String_toFloat;
var $BrianHicks$elm_csv$Csv$Decode$float = $BrianHicks$elm_csv$Csv$Decode$fromString(
	function (value) {
		var _v0 = $elm$core$String$toFloat(
			$elm$core$String$trim(value));
		if (_v0.$ === 'Just') {
			var parsed = _v0.a;
			return $elm$core$Result$Ok(parsed);
		} else {
			return $elm$core$Result$Err(
				$BrianHicks$elm_csv$Csv$Decode$ExpectedFloat(value));
		}
	});
var $yotamDvir$elm_pivot$Pivot$Types$Pivot = F2(
	function (a, b) {
		return {$: 'Pivot', a: a, b: b};
	});
var $yotamDvir$elm_pivot$Pivot$Create$fromCons = F2(
	function (x, xs) {
		return A2(
			$yotamDvir$elm_pivot$Pivot$Types$Pivot,
			x,
			_Utils_Tuple2(_List_Nil, xs));
	});
var $yotamDvir$elm_pivot$Pivot$fromCons = $yotamDvir$elm_pivot$Pivot$Create$fromCons;
var $yotamDvir$elm_pivot$Pivot$Create$fromList = function (l) {
	if (!l.b) {
		return $elm$core$Maybe$Nothing;
	} else {
		var hd = l.a;
		var tl = l.b;
		return $elm$core$Maybe$Just(
			A2($yotamDvir$elm_pivot$Pivot$Create$fromCons, hd, tl));
	}
};
var $yotamDvir$elm_pivot$Pivot$fromList = $yotamDvir$elm_pivot$Pivot$Create$fromList;
var $elm$core$Set$Set_elm_builtin = function (a) {
	return {$: 'Set_elm_builtin', a: a};
};
var $elm$core$Set$empty = $elm$core$Set$Set_elm_builtin($elm$core$Dict$empty);
var $elm$core$Set$insert = F2(
	function (key, _v0) {
		var dict = _v0.a;
		return $elm$core$Set$Set_elm_builtin(
			A3($elm$core$Dict$insert, key, _Utils_Tuple0, dict));
	});
var $elm$core$Set$fromList = function (list) {
	return A3($elm$core$List$foldl, $elm$core$Set$insert, $elm$core$Set$empty, list);
};
var $yotamDvir$elm_pivot$Pivot$Get$getC = function (_v0) {
	var c = _v0.a;
	return c;
};
var $yotamDvir$elm_pivot$Pivot$getC = $yotamDvir$elm_pivot$Pivot$Get$getC;
var $elm$browser$Browser$Dom$getViewportOf = _Browser_getViewportOf;
var $author$project$Main$Config = function (a) {
	return {$: 'Config', a: a};
};
var $author$project$Main$Logs = function (a) {
	return {$: 'Logs', a: a};
};
var $author$project$Main$Registration = function (a) {
	return {$: 'Registration', a: a};
};
var $author$project$Main$goTo = F3(
	function (msg, data, model) {
		switch (msg.$) {
			case 'GoToPageImages':
				return _Utils_update(
					model,
					{
						images: $elm$core$Maybe$Nothing,
						pointerMode: $author$project$Main$WaitingMove,
						state: $author$project$Main$ViewImgs(data)
					});
			case 'GoToPageConfig':
				return _Utils_update(
					model,
					{
						state: $author$project$Main$Config(data)
					});
			case 'GoToPageRegistration':
				return _Utils_update(
					model,
					{
						pointerMode: $author$project$Main$WaitingMove,
						state: $author$project$Main$Registration(data)
					});
			default:
				return _Utils_update(
					model,
					{
						notSeenLogs: _List_Nil,
						seenLogs: $elm$core$List$concat(
							_List_fromArray(
								[model.notSeenLogs, model.seenLogs])),
						state: $author$project$Main$Logs(data)
					});
		}
	});
var $yotamDvir$elm_pivot$Pivot$Position$goR = function (_v0) {
	var cx = _v0.a;
	var _v1 = _v0.b;
	var lt = _v1.a;
	var rt = _v1.b;
	if (!rt.b) {
		return $elm$core$Maybe$Nothing;
	} else {
		var hd = rt.a;
		var tl = rt.b;
		return $elm$core$Maybe$Just(
			A2(
				$yotamDvir$elm_pivot$Pivot$Types$Pivot,
				hd,
				_Utils_Tuple2(
					A2($elm$core$List$cons, cx, lt),
					tl)));
	}
};
var $yotamDvir$elm_pivot$Pivot$goR = $yotamDvir$elm_pivot$Pivot$Position$goR;
var $yotamDvir$elm_pivot$Pivot$Utilities$reverse = function (_v0) {
	var c = _v0.a;
	var _v1 = _v0.b;
	var l = _v1.a;
	var r = _v1.b;
	return A2(
		$yotamDvir$elm_pivot$Pivot$Types$Pivot,
		c,
		_Utils_Tuple2(r, l));
};
var $yotamDvir$elm_pivot$Pivot$Utilities$mirrorM = function (f) {
	return A2(
		$elm$core$Basics$composeR,
		$yotamDvir$elm_pivot$Pivot$Utilities$reverse,
		A2(
			$elm$core$Basics$composeR,
			f,
			$elm$core$Maybe$map($yotamDvir$elm_pivot$Pivot$Utilities$reverse)));
};
var $yotamDvir$elm_pivot$Pivot$Position$goL = $yotamDvir$elm_pivot$Pivot$Utilities$mirrorM($yotamDvir$elm_pivot$Pivot$Position$goR);
var $yotamDvir$elm_pivot$Pivot$Position$goToStart = function (pvt) {
	goToStart:
	while (true) {
		var _v0 = $yotamDvir$elm_pivot$Pivot$Position$goL(pvt);
		if (_v0.$ === 'Nothing') {
			return pvt;
		} else {
			var pvt_ = _v0.a;
			var $temp$pvt = pvt_;
			pvt = $temp$pvt;
			continue goToStart;
		}
	}
};
var $yotamDvir$elm_pivot$Pivot$goToStart = $yotamDvir$elm_pivot$Pivot$Position$goToStart;
var $author$project$Main$goToNextImage = function (images) {
	return A2(
		$elm$core$Maybe$withDefault,
		$yotamDvir$elm_pivot$Pivot$goToStart(images),
		$yotamDvir$elm_pivot$Pivot$goR(images));
};
var $author$project$Main$goToNextLight = function (images) {
	return A2(
		$elm$core$Maybe$withDefault,
		$yotamDvir$elm_pivot$Pivot$goToStart(images),
		$yotamDvir$elm_pivot$Pivot$goR(images));
};
var $yotamDvir$elm_pivot$Pivot$goL = $yotamDvir$elm_pivot$Pivot$Position$goL;
var $yotamDvir$elm_pivot$Pivot$Utilities$mirror = function (f) {
	return A2(
		$elm$core$Basics$composeR,
		$yotamDvir$elm_pivot$Pivot$Utilities$reverse,
		A2($elm$core$Basics$composeR, f, $yotamDvir$elm_pivot$Pivot$Utilities$reverse));
};
var $yotamDvir$elm_pivot$Pivot$Position$goToEnd = $yotamDvir$elm_pivot$Pivot$Utilities$mirror($yotamDvir$elm_pivot$Pivot$Position$goToStart);
var $yotamDvir$elm_pivot$Pivot$goToEnd = $yotamDvir$elm_pivot$Pivot$Position$goToEnd;
var $author$project$Main$goToPreviousImage = function (images) {
	return A2(
		$elm$core$Maybe$withDefault,
		$yotamDvir$elm_pivot$Pivot$goToEnd(images),
		$yotamDvir$elm_pivot$Pivot$goL(images));
};
var $author$project$Main$goToPreviousLight = function (images) {
	return A2(
		$elm$core$Maybe$withDefault,
		$yotamDvir$elm_pivot$Pivot$goToEnd(images),
		$yotamDvir$elm_pivot$Pivot$goL(images));
};
var $joakin$elm_canvas$Canvas$Texture$dimensions = function (texture) {
	if (texture.$ === 'TImage') {
		var image = texture.a;
		return {height: image.height, width: image.width};
	} else {
		var data = texture.a;
		return {height: data.height, width: data.width};
	}
};
var $joakin$elm_canvas$Canvas$Internal$Texture$TImage = function (a) {
	return {$: 'TImage', a: a};
};
var $joakin$elm_canvas$Canvas$Internal$Texture$decodeTextureImage = A2(
	$elm$json$Json$Decode$andThen,
	function (image) {
		return A4(
			$elm$json$Json$Decode$map3,
			F3(
				function (tagName, width, height) {
					return (tagName === 'IMG') ? $elm$core$Maybe$Just(
						$joakin$elm_canvas$Canvas$Internal$Texture$TImage(
							{height: height, json: image, width: width})) : $elm$core$Maybe$Nothing;
				}),
			A2($elm$json$Json$Decode$field, 'tagName', $elm$json$Json$Decode$string),
			A2($elm$json$Json$Decode$field, 'width', $elm$json$Json$Decode$float),
			A2($elm$json$Json$Decode$field, 'height', $elm$json$Json$Decode$float));
	},
	$elm$json$Json$Decode$value);
var $elm$core$Result$toMaybe = function (result) {
	if (result.$ === 'Ok') {
		var v = result.a;
		return $elm$core$Maybe$Just(v);
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $joakin$elm_canvas$Canvas$Texture$fromDomImage = function (value) {
	return A2(
		$elm$core$Maybe$andThen,
		$elm$core$Basics$identity,
		$elm$core$Result$toMaybe(
			A2($elm$json$Json$Decode$decodeValue, $joakin$elm_canvas$Canvas$Internal$Texture$decodeTextureImage, value)));
};
var $elm$core$Basics$round = _Basics_round;
var $author$project$Main$imageFromValue = function (_v0) {
	var id = _v0.id;
	var img = _v0.img;
	var _v1 = $joakin$elm_canvas$Canvas$Texture$fromDomImage(img);
	if (_v1.$ === 'Nothing') {
		return $elm$core$Maybe$Nothing;
	} else {
		var texture = _v1.a;
		var imgSize = $joakin$elm_canvas$Canvas$Texture$dimensions(texture);
		return $elm$core$Maybe$Just(
			{
				height: $elm$core$Basics$round(imgSize.height),
				id: id,
				texture: texture,
				width: $elm$core$Basics$round(imgSize.width)
			});
	}
};
var $BrianHicks$elm_csv$Csv$Decode$succeed = function (value) {
	return $BrianHicks$elm_csv$Csv$Decode$Decoder(
		F4(
			function (_v0, _v1, _v2, _v3) {
				return $elm$core$Result$Ok(value);
			}));
};
var $BrianHicks$elm_csv$Csv$Decode$into = $BrianHicks$elm_csv$Csv$Decode$succeed;
var $author$project$Main$loadImagesFromUrls = _Platform_outgoingPort(
	'loadImagesFromUrls',
	$elm$json$Json$Encode$list($elm$json$Json$Encode$string));
var $elm$core$Basics$min = F2(
	function (x, y) {
		return (_Utils_cmp(x, y) < 0) ? x : y;
	});
var $ohanhi$keyboard$Keyboard$ArrowDown = {$: 'ArrowDown'};
var $ohanhi$keyboard$Keyboard$ArrowLeft = {$: 'ArrowLeft'};
var $ohanhi$keyboard$Keyboard$ArrowRight = {$: 'ArrowRight'};
var $ohanhi$keyboard$Keyboard$ArrowUp = {$: 'ArrowUp'};
var $ohanhi$keyboard$Keyboard$End = {$: 'End'};
var $ohanhi$keyboard$Keyboard$Home = {$: 'Home'};
var $ohanhi$keyboard$Keyboard$PageDown = {$: 'PageDown'};
var $ohanhi$keyboard$Keyboard$PageUp = {$: 'PageUp'};
var $ohanhi$keyboard$Keyboard$navigationKey = function (_v0) {
	var value = _v0.a;
	switch (value) {
		case 'ArrowDown':
			return $elm$core$Maybe$Just($ohanhi$keyboard$Keyboard$ArrowDown);
		case 'ArrowLeft':
			return $elm$core$Maybe$Just($ohanhi$keyboard$Keyboard$ArrowLeft);
		case 'ArrowRight':
			return $elm$core$Maybe$Just($ohanhi$keyboard$Keyboard$ArrowRight);
		case 'ArrowUp':
			return $elm$core$Maybe$Just($ohanhi$keyboard$Keyboard$ArrowUp);
		case 'Down':
			return $elm$core$Maybe$Just($ohanhi$keyboard$Keyboard$ArrowDown);
		case 'Left':
			return $elm$core$Maybe$Just($ohanhi$keyboard$Keyboard$ArrowLeft);
		case 'Right':
			return $elm$core$Maybe$Just($ohanhi$keyboard$Keyboard$ArrowRight);
		case 'Up':
			return $elm$core$Maybe$Just($ohanhi$keyboard$Keyboard$ArrowUp);
		case 'End':
			return $elm$core$Maybe$Just($ohanhi$keyboard$Keyboard$End);
		case 'Home':
			return $elm$core$Maybe$Just($ohanhi$keyboard$Keyboard$Home);
		case 'PageDown':
			return $elm$core$Maybe$Just($ohanhi$keyboard$Keyboard$PageDown);
		case 'PageUp':
			return $elm$core$Maybe$Just($ohanhi$keyboard$Keyboard$PageUp);
		default:
			return $elm$core$Maybe$Nothing;
	}
};
var $mpizenberg$elm_2d_viewer$Viewer$translate = F2(
	function (_v0, viewer) {
		var tx = _v0.a;
		var ty = _v0.b;
		var _v1 = viewer.origin;
		var ox = _v1.a;
		var oy = _v1.b;
		return _Utils_update(
			viewer,
			{
				origin: _Utils_Tuple2(ox + tx, oy + ty)
			});
	});
var $mpizenberg$elm_2d_viewer$Viewer$pan = F2(
	function (_v0, viewer) {
		var px = _v0.a;
		var py = _v0.b;
		var scale = viewer.scale;
		return A2(
			$mpizenberg$elm_2d_viewer$Viewer$translate,
			_Utils_Tuple2((-scale) * px, (-scale) * py),
			viewer);
	});
var $elm$core$Result$map2 = F3(
	function (func, ra, rb) {
		if (ra.$ === 'Err') {
			var x = ra.a;
			return $elm$core$Result$Err(x);
		} else {
			var a = ra.a;
			if (rb.$ === 'Err') {
				var x = rb.a;
				return $elm$core$Result$Err(x);
			} else {
				var b = rb.a;
				return $elm$core$Result$Ok(
					A2(func, a, b));
			}
		}
	});
var $BrianHicks$elm_csv$Csv$Decode$map2 = F3(
	function (transform, _v0, _v1) {
		var decodeA = _v0.a;
		var decodeB = _v1.a;
		return $BrianHicks$elm_csv$Csv$Decode$Decoder(
			F4(
				function (location, fieldNames, rowNum, row) {
					return A3(
						$elm$core$Result$map2,
						transform,
						A4(decodeA, location, fieldNames, rowNum, row),
						A4(decodeB, location, fieldNames, rowNum, row));
				}));
	});
var $BrianHicks$elm_csv$Csv$Decode$pipeline = $BrianHicks$elm_csv$Csv$Decode$map2(
	F2(
		function (value, fn) {
			return fn(value);
		}));
var $elm$browser$Browser$Navigation$reload = _Browser_reload(false);
var $mpizenberg$elm_2d_viewer$Viewer$resize = F2(
	function (newSize, _v0) {
		var origin = _v0.origin;
		var scale = _v0.scale;
		return {origin: origin, scale: scale, size: newSize};
	});
var $author$project$Main$run = _Platform_outgoingPort('run', $elm$core$Basics$identity);
var $author$project$Main$runAndSwitchToLogsPage = F2(
	function (imgs, model) {
		return A3(
			$author$project$Main$goTo,
			$author$project$Main$GoToPageLogs,
			imgs,
			_Utils_update(
				model,
				{registeredImages: $elm$core$Maybe$Nothing, runStep: $author$project$Main$StepNotStarted}));
	});
var $author$project$Main$saveRegisteredImages = _Platform_outgoingPort('saveRegisteredImages', $elm$json$Json$Encode$int);
var $author$project$Main$NoMsg = {$: 'NoMsg'};
var $elm$browser$Browser$Dom$setViewportOf = _Browser_setViewportOf;
var $author$project$Main$scrollLogsToEndCmd = A2(
	$elm$core$Task$attempt,
	function (_v0) {
		return $author$project$Main$NoMsg;
	},
	A3($elm$browser$Browser$Dom$setViewportOf, 'logs', 0, 1.0e14));
var $author$project$Main$scrollLogsToPos = function (pos) {
	return A2(
		$elm$core$Task$attempt,
		function (_v0) {
			return $author$project$Main$NoMsg;
		},
		A3($elm$browser$Browser$Dom$setViewportOf, 'logs', 0, pos));
};
var $elm$core$Set$size = function (_v0) {
	var dict = _v0.a;
	return $elm$core$Dict$size(dict);
};
var $elm$core$Process$sleep = _Process_sleep;
var $author$project$CropForm$toggle = F2(
	function (newActive, data) {
		return _Utils_update(
			data,
			{active: newActive});
	});
var $author$project$NumberInput$IntParsingError = {$: 'IntParsingError'};
var $arowM$elm_form_decoder$Form$Decoder$Decoder = function (a) {
	return {$: 'Decoder', a: a};
};
var $arowM$elm_form_decoder$Form$Decoder$custom = $arowM$elm_form_decoder$Form$Decoder$Decoder;
var $elm$core$Result$fromMaybe = F2(
	function (err, maybe) {
		if (maybe.$ === 'Just') {
			var v = maybe.a;
			return $elm$core$Result$Ok(v);
		} else {
			return $elm$core$Result$Err(err);
		}
	});
var $arowM$elm_form_decoder$Form$Decoder$int = function (err) {
	return $arowM$elm_form_decoder$Form$Decoder$custom(
		A2(
			$elm$core$Basics$composeL,
			$elm$core$Result$fromMaybe(
				_List_fromArray(
					[err])),
			$elm$core$String$toInt));
};
var $author$project$NumberInput$IntTooBig = function (a) {
	return {$: 'IntTooBig', a: a};
};
var $arowM$elm_form_decoder$Form$Decoder$run = F2(
	function (_v0, a) {
		var f = _v0.a;
		return f(a);
	});
var $arowM$elm_form_decoder$Form$Decoder$assert = F2(
	function (v, _v0) {
		var f = _v0.a;
		return $arowM$elm_form_decoder$Form$Decoder$custom(
			function (a) {
				return A2(
					$elm$core$Result$andThen,
					function (x) {
						return A2(
							$elm$core$Result$map,
							function (_v1) {
								return x;
							},
							A2($arowM$elm_form_decoder$Form$Decoder$run, v, x));
					},
					f(a));
			});
	});
var $author$project$NumberInput$maxBound = F2(
	function (errorTag, bound) {
		return $arowM$elm_form_decoder$Form$Decoder$custom(
			function (actual) {
				return (_Utils_cmp(actual, bound) > 0) ? $elm$core$Result$Err(
					_List_fromArray(
						[
							errorTag(
							{actual: actual, bound: bound})
						])) : $elm$core$Result$Ok(_Utils_Tuple0);
			});
	});
var $author$project$NumberInput$validateMaxInt = F2(
	function (maybeMax, decoder) {
		if (maybeMax.$ === 'Nothing') {
			return decoder;
		} else {
			var maxInt = maybeMax.a;
			return A2(
				$arowM$elm_form_decoder$Form$Decoder$assert,
				A2($author$project$NumberInput$maxBound, $author$project$NumberInput$IntTooBig, maxInt),
				decoder);
		}
	});
var $author$project$NumberInput$IntTooSmall = function (a) {
	return {$: 'IntTooSmall', a: a};
};
var $author$project$NumberInput$minBound = F2(
	function (errorTag, bound) {
		return $arowM$elm_form_decoder$Form$Decoder$custom(
			function (actual) {
				return (_Utils_cmp(actual, bound) < 0) ? $elm$core$Result$Err(
					_List_fromArray(
						[
							errorTag(
							{actual: actual, bound: bound})
						])) : $elm$core$Result$Ok(_Utils_Tuple0);
			});
	});
var $author$project$NumberInput$validateMinInt = F2(
	function (maybeMin, decoder) {
		if (maybeMin.$ === 'Nothing') {
			return decoder;
		} else {
			var minInt = maybeMin.a;
			return A2(
				$arowM$elm_form_decoder$Form$Decoder$assert,
				A2($author$project$NumberInput$minBound, $author$project$NumberInput$IntTooSmall, minInt),
				decoder);
		}
	});
var $author$project$NumberInput$intDecoder = F2(
	function (maybeMin, maybeMax) {
		return A2(
			$author$project$NumberInput$validateMaxInt,
			maybeMax,
			A2(
				$author$project$NumberInput$validateMinInt,
				maybeMin,
				$arowM$elm_form_decoder$Form$Decoder$int($author$project$NumberInput$IntParsingError)));
	});
var $author$project$NumberInput$updateInt = F2(
	function (input, field) {
		return _Utils_update(
			field,
			{
				decodedInput: A2(
					$arowM$elm_form_decoder$Form$Decoder$run,
					A2($author$project$NumberInput$intDecoder, field.min, field.max),
					input),
				input: input
			});
	});
var $author$project$CropForm$updateBottom = F2(
	function (str, state) {
		return _Utils_update(
			state,
			{
				bottom: A2($author$project$NumberInput$updateInt, str, state.bottom)
			});
	});
var $author$project$NumberInput$setMinBound = F2(
	function (newMin, field) {
		return _Utils_update(
			field,
			{min: newMin});
	});
var $author$project$CropForm$updateLeft = F2(
	function (str, state) {
		var active = state.active;
		var left = state.left;
		var top = state.top;
		var right = state.right;
		var bottom = state.bottom;
		var newLeft = A2($author$project$NumberInput$updateInt, str, left);
		var _v0 = newLeft.decodedInput;
		if (_v0.$ === 'Ok') {
			var value = _v0.a;
			return {
				active: active,
				bottom: bottom,
				left: newLeft,
				right: A2(
					$author$project$NumberInput$updateInt,
					right.input,
					A2(
						$author$project$NumberInput$setMinBound,
						$elm$core$Maybe$Just(value),
						right)),
				top: top
			};
		} else {
			return _Utils_update(
				state,
				{left: newLeft});
		}
	});
var $author$project$CropForm$updateRight = F2(
	function (str, state) {
		return _Utils_update(
			state,
			{
				right: A2($author$project$NumberInput$updateInt, str, state.right)
			});
	});
var $author$project$CropForm$updateTop = F2(
	function (str, state) {
		var active = state.active;
		var left = state.left;
		var top = state.top;
		var right = state.right;
		var bottom = state.bottom;
		var newTop = A2($author$project$NumberInput$updateInt, str, top);
		var _v0 = newTop.decodedInput;
		if (_v0.$ === 'Ok') {
			var value = _v0.a;
			return {
				active: active,
				bottom: A2(
					$author$project$NumberInput$updateInt,
					bottom.input,
					A2(
						$author$project$NumberInput$setMinBound,
						$elm$core$Maybe$Just(value),
						bottom)),
				left: left,
				right: right,
				top: newTop
			};
		} else {
			return _Utils_update(
				state,
				{top: newTop});
		}
	});
var $author$project$Main$snapBBox = F2(
	function (_v0, state) {
		var left = _v0.left;
		var top = _v0.top;
		var right = _v0.right;
		var bottom = _v0.bottom;
		var topCrop = $elm$core$Basics$round(
			A2($elm$core$Basics$max, 0, top));
		var maxRight = A2($elm$core$Maybe$withDefault, 0, state.right.max);
		var rightCrop = A2(
			$elm$core$Basics$min,
			$elm$core$Basics$round(right),
			maxRight);
		var maxBottom = A2($elm$core$Maybe$withDefault, 0, state.bottom.max);
		var leftCrop = $elm$core$Basics$round(
			A2($elm$core$Basics$max, 0, left));
		var bottomCrop = A2(
			$elm$core$Basics$min,
			$elm$core$Basics$round(bottom),
			maxBottom);
		return A2(
			$author$project$CropForm$updateBottom,
			$elm$core$String$fromInt(bottomCrop),
			A2(
				$author$project$CropForm$updateRight,
				$elm$core$String$fromInt(rightCrop),
				A2(
					$author$project$CropForm$updateTop,
					$elm$core$String$fromInt(topCrop),
					A2(
						$author$project$CropForm$updateLeft,
						$elm$core$String$fromInt(leftCrop),
						A2($author$project$CropForm$toggle, true, state)))));
	});
var $author$project$Main$stop = _Platform_outgoingPort(
	'stop',
	function ($) {
		return $elm$json$Json$Encode$null;
	});
var $author$project$Main$toBBox = function (_v0) {
	var left = _v0.left;
	var top = _v0.top;
	var right = _v0.right;
	var bottom = _v0.bottom;
	return {bottom: bottom, left: left, right: right, top: top};
};
var $elm$file$File$toString = _File_toString;
var $author$project$Main$changeCropSide = F2(
	function (updateSide, model) {
		var paramsForm = model.paramsForm;
		var params = model.params;
		var newCropForm = updateSide(paramsForm.crop);
		var newCrop = $author$project$CropForm$decoded(newCropForm);
		return _Utils_update(
			model,
			{
				bboxDrawn: A2($elm$core$Maybe$map, $author$project$Main$toBBox, newCrop),
				params: _Utils_update(
					params,
					{crop: newCrop}),
				paramsForm: _Utils_update(
					paramsForm,
					{crop: newCropForm})
			});
	});
var $author$project$NumberInput$FloatParsingError = {$: 'FloatParsingError'};
var $arowM$elm_form_decoder$Form$Decoder$float = function (err) {
	return $arowM$elm_form_decoder$Form$Decoder$custom(
		A2(
			$elm$core$Basics$composeL,
			$elm$core$Result$fromMaybe(
				_List_fromArray(
					[err])),
			$elm$core$String$toFloat));
};
var $author$project$NumberInput$FloatTooBig = function (a) {
	return {$: 'FloatTooBig', a: a};
};
var $author$project$NumberInput$validateMaxFloat = F2(
	function (maybeMax, decoder) {
		if (maybeMax.$ === 'Nothing') {
			return decoder;
		} else {
			var maxFloat = maybeMax.a;
			return A2(
				$arowM$elm_form_decoder$Form$Decoder$assert,
				A2($author$project$NumberInput$maxBound, $author$project$NumberInput$FloatTooBig, maxFloat),
				decoder);
		}
	});
var $author$project$NumberInput$FloatTooSmall = function (a) {
	return {$: 'FloatTooSmall', a: a};
};
var $author$project$NumberInput$validateMinFloat = F2(
	function (maybeMin, decoder) {
		if (maybeMin.$ === 'Nothing') {
			return decoder;
		} else {
			var minFloat = maybeMin.a;
			return A2(
				$arowM$elm_form_decoder$Form$Decoder$assert,
				A2($author$project$NumberInput$minBound, $author$project$NumberInput$FloatTooSmall, minFloat),
				decoder);
		}
	});
var $author$project$NumberInput$floatDecoder = F2(
	function (maybeMin, maybeMax) {
		return A2(
			$author$project$NumberInput$validateMaxFloat,
			maybeMax,
			A2(
				$author$project$NumberInput$validateMinFloat,
				maybeMin,
				$arowM$elm_form_decoder$Form$Decoder$float($author$project$NumberInput$FloatParsingError)));
	});
var $author$project$NumberInput$updateFloat = F2(
	function (input, field) {
		return _Utils_update(
			field,
			{
				decodedInput: A2(
					$arowM$elm_form_decoder$Form$Decoder$run,
					A2($author$project$NumberInput$floatDecoder, field.min, field.max),
					input),
				input: input
			});
	});
var $author$project$Main$updateParams = F2(
	function (msg, model) {
		var params = model.params;
		var paramsForm = model.paramsForm;
		switch (msg.$) {
			case 'ChangeMaxVerbosity':
				var str = msg.a;
				var updatedField = A2($author$project$NumberInput$updateInt, str, paramsForm.maxVerbosity);
				var updatedForm = _Utils_update(
					paramsForm,
					{maxVerbosity: updatedField});
				var _v1 = updatedField.decodedInput;
				if (_v1.$ === 'Ok') {
					var maxVerbosity = _v1.a;
					return _Utils_update(
						model,
						{
							params: _Utils_update(
								params,
								{maxVerbosity: maxVerbosity}),
							paramsForm: updatedForm
						});
				} else {
					return _Utils_update(
						model,
						{paramsForm: updatedForm});
				}
			case 'ChangeMaxIter':
				var str = msg.a;
				var updatedField = A2($author$project$NumberInput$updateInt, str, paramsForm.maxIterations);
				var updatedForm = _Utils_update(
					paramsForm,
					{maxIterations: updatedField});
				var _v2 = updatedField.decodedInput;
				if (_v2.$ === 'Ok') {
					var maxIterations = _v2.a;
					return _Utils_update(
						model,
						{
							params: _Utils_update(
								params,
								{maxIterations: maxIterations}),
							paramsForm: updatedForm
						});
				} else {
					return _Utils_update(
						model,
						{paramsForm: updatedForm});
				}
			case 'ChangeConvergenceThreshold':
				var str = msg.a;
				var updatedField = A2($author$project$NumberInput$updateFloat, str, paramsForm.convergenceThreshold);
				var updatedForm = _Utils_update(
					paramsForm,
					{convergenceThreshold: updatedField});
				var _v3 = updatedField.decodedInput;
				if (_v3.$ === 'Ok') {
					var convergenceThreshold = _v3.a;
					return _Utils_update(
						model,
						{
							params: _Utils_update(
								params,
								{convergenceThreshold: convergenceThreshold}),
							paramsForm: updatedForm
						});
				} else {
					return _Utils_update(
						model,
						{paramsForm: updatedForm});
				}
			case 'ChangeZMean':
				var str = msg.a;
				var updatedField = A2($author$project$NumberInput$updateFloat, str, paramsForm.z_mean);
				var updatedForm = _Utils_update(
					paramsForm,
					{z_mean: updatedField});
				var _v4 = updatedField.decodedInput;
				if (_v4.$ === 'Ok') {
					var z = _v4.a;
					return _Utils_update(
						model,
						{
							params: _Utils_update(
								params,
								{z_mean: z}),
							paramsForm: updatedForm
						});
				} else {
					return _Utils_update(
						model,
						{paramsForm: updatedForm});
				}
			case 'ToggleCrop':
				var activeCrop = msg.a;
				var newCropForm = A2($author$project$CropForm$toggle, activeCrop, paramsForm.crop);
				var _v5 = _Utils_Tuple2(
					activeCrop,
					$author$project$CropForm$decoded(newCropForm));
				if (_v5.a && (_v5.b.$ === 'Just')) {
					var crop = _v5.b.a;
					return _Utils_update(
						model,
						{
							bboxDrawn: $elm$core$Maybe$Just(
								$author$project$Main$toBBox(crop)),
							params: _Utils_update(
								params,
								{
									crop: $elm$core$Maybe$Just(crop)
								}),
							paramsForm: _Utils_update(
								paramsForm,
								{crop: newCropForm})
						});
				} else {
					return _Utils_update(
						model,
						{
							bboxDrawn: $elm$core$Maybe$Nothing,
							params: _Utils_update(
								params,
								{crop: $elm$core$Maybe$Nothing}),
							paramsForm: _Utils_update(
								paramsForm,
								{crop: newCropForm})
						});
				}
			case 'ChangeCropLeft':
				var str = msg.a;
				return A2(
					$author$project$Main$changeCropSide,
					$author$project$CropForm$updateLeft(str),
					model);
			case 'ChangeCropTop':
				var str = msg.a;
				return A2(
					$author$project$Main$changeCropSide,
					$author$project$CropForm$updateTop(str),
					model);
			case 'ChangeCropRight':
				var str = msg.a;
				return A2(
					$author$project$Main$changeCropSide,
					$author$project$CropForm$updateRight(str),
					model);
			default:
				var str = msg.a;
				return A2(
					$author$project$Main$changeCropSide,
					$author$project$CropForm$updateBottom(str),
					model);
		}
	});
var $author$project$Main$updateParamsInfo = F2(
	function (msg, toggleInfo) {
		switch (msg.$) {
			case 'ToggleInfoCrop':
				var visible = msg.a;
				return _Utils_update(
					toggleInfo,
					{crop: visible});
			case 'ToggleInfoMaxIterations':
				var visible = msg.a;
				return _Utils_update(
					toggleInfo,
					{maxIterations: visible});
			case 'ToggleInfoMaxVerbosity':
				var visible = msg.a;
				return _Utils_update(
					toggleInfo,
					{maxVerbosity: visible});
			case 'ToggleInfoZMean':
				var visible = msg.a;
				return _Utils_update(
					toggleInfo,
					{z_mean: visible});
			default:
				var visible = msg.a;
				return _Utils_update(
					toggleInfo,
					{convergenceThreshold: visible});
		}
	});
var $mpizenberg$elm_2d_viewer$Viewer$coordinatesInViewer = F2(
	function (viewer, _v0) {
		var xV = _v0.a;
		var yV = _v0.b;
		var _v1 = viewer.origin;
		var ox = _v1.a;
		var oy = _v1.b;
		return _Utils_Tuple2((xV - ox) / viewer.scale, (yV - oy) / viewer.scale);
	});
var $mpizenberg$elm_2d_viewer$Viewer$rescaleFixPoint = F3(
	function (scale, coordinates, viewer) {
		var x = coordinates.a;
		var y = coordinates.b;
		var _v0 = A2($mpizenberg$elm_2d_viewer$Viewer$coordinatesInViewer, viewer, coordinates);
		var viewerX = _v0.a;
		var viewerY = _v0.b;
		var newOrigin = _Utils_Tuple2(x - (scale * viewerX), y - (scale * viewerY));
		var _v1 = viewer.origin;
		var ox = _v1.a;
		var oy = _v1.b;
		return _Utils_update(
			viewer,
			{origin: newOrigin, scale: scale});
	});
var $mpizenberg$elm_2d_viewer$Viewer$zoomInCoef = 2.0 / 3.0;
var $mpizenberg$elm_2d_viewer$Viewer$zoomOutCoef = 1.0 / $mpizenberg$elm_2d_viewer$Viewer$zoomInCoef;
var $mpizenberg$elm_2d_viewer$Viewer$zoomAwayFrom = F2(
	function (coordinates, viewer) {
		return A3($mpizenberg$elm_2d_viewer$Viewer$rescaleFixPoint, $mpizenberg$elm_2d_viewer$Viewer$zoomOutCoef * viewer.scale, coordinates, viewer);
	});
var $mpizenberg$elm_2d_viewer$Viewer$coordinatesAtCenter = function (viewer) {
	var _v0 = viewer.size;
	var width = _v0.a;
	var height = _v0.b;
	return A2(
		$mpizenberg$elm_2d_viewer$Viewer$coordinatesAt,
		_Utils_Tuple2(0.5 * width, 0.5 * height),
		viewer);
};
var $mpizenberg$elm_2d_viewer$Viewer$rescaleCentered = F2(
	function (scale, viewer) {
		return A2(
			$mpizenberg$elm_2d_viewer$Viewer$centerAtCoordinates,
			$mpizenberg$elm_2d_viewer$Viewer$coordinatesAtCenter(viewer),
			_Utils_update(
				viewer,
				{scale: scale}));
	});
var $mpizenberg$elm_2d_viewer$Viewer$zoomIn = function (viewer) {
	return A2($mpizenberg$elm_2d_viewer$Viewer$rescaleCentered, $mpizenberg$elm_2d_viewer$Viewer$zoomInCoef * viewer.scale, viewer);
};
var $mpizenberg$elm_2d_viewer$Viewer$zoomOut = function (viewer) {
	return A2($mpizenberg$elm_2d_viewer$Viewer$rescaleCentered, $mpizenberg$elm_2d_viewer$Viewer$zoomOutCoef * viewer.scale, viewer);
};
var $mpizenberg$elm_2d_viewer$Viewer$zoomToward = F2(
	function (coordinates, viewer) {
		return A3($mpizenberg$elm_2d_viewer$Viewer$rescaleFixPoint, $mpizenberg$elm_2d_viewer$Viewer$zoomInCoef * viewer.scale, coordinates, viewer);
	});
var $author$project$Main$zoomViewer = F2(
	function (msg, viewer) {
		switch (msg.$) {
			case 'ZoomFit':
				var img = msg.a;
				return A3(
					$mpizenberg$elm_2d_viewer$Viewer$fitImage,
					1.1,
					_Utils_Tuple2(img.width, img.height),
					viewer);
			case 'ZoomIn':
				return $mpizenberg$elm_2d_viewer$Viewer$zoomIn(viewer);
			case 'ZoomOut':
				return $mpizenberg$elm_2d_viewer$Viewer$zoomOut(viewer);
			case 'ZoomToward':
				var coordinates = msg.a;
				return A2($mpizenberg$elm_2d_viewer$Viewer$zoomToward, coordinates, viewer);
			default:
				var coordinates = msg.a;
				return A2($mpizenberg$elm_2d_viewer$Viewer$zoomAwayFrom, coordinates, viewer);
		}
	});
var $author$project$Main$update = F2(
	function (msg, model) {
		var _v0 = _Utils_Tuple2(msg, model.state);
		_v0$52:
		while (true) {
			switch (_v0.a.$) {
				case 'NoMsg':
					var _v1 = _v0.a;
					return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
				case 'WindowResizes':
					var size = _v0.a.a;
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{
								device: $author$project$Device$classify(size),
								registeredViewer: A2(
									$mpizenberg$elm_2d_viewer$Viewer$resize,
									_Utils_Tuple2(size.width, size.height - ($author$project$Main$headerHeight + $author$project$Main$progressBarHeight)),
									model.registeredViewer),
								viewer: A2(
									$mpizenberg$elm_2d_viewer$Viewer$resize,
									_Utils_Tuple2(size.width, size.height - ($author$project$Main$headerHeight + $author$project$Main$progressBarHeight)),
									model.viewer)
							}),
						$elm$core$Platform$Cmd$none);
				case 'DragDropImagesMsg':
					switch (_v0.a.a.$) {
						case 'DragOverImages':
							if (_v0.b.$ === 'Home') {
								var _v2 = _v0.a.a;
								return _Utils_Tuple2(
									_Utils_update(
										model,
										{
											state: $author$project$Main$Home($author$project$Main$DraggingSomeImages)
										}),
									$elm$core$Platform$Cmd$none);
							} else {
								break _v0$52;
							}
						case 'DropImages':
							var _v4 = _v0.a.a;
							var file = _v4.a;
							var otherFiles = _v4.b;
							var imageFiles = A2(
								$elm$core$List$filter,
								function (f) {
									return A2($elm$core$String$startsWith, 'image', f.mime);
								},
								A2($elm$core$List$cons, file, otherFiles));
							var names = $elm$core$Set$fromList(
								A2(
									$elm$core$List$map,
									function ($) {
										return $.name;
									},
									imageFiles));
							var _v5 = $elm$core$List$isEmpty(otherFiles) ? _Utils_Tuple3(
								$author$project$Main$LoadingError,
								$elm$core$Platform$Cmd$none,
								_List_fromArray(
									[
										{content: 'Only 1 image was selected. Please pick at least 2.', lvl: 0}
									])) : _Utils_Tuple3(
								$author$project$Main$Loading(
									{loaded: $elm$core$Dict$empty, names: names}),
								$author$project$Main$decodeImages(
									A2($elm$core$List$map, $mpizenberg$elm_file$FileValue$encode, imageFiles)),
								_List_Nil);
							var newState = _v5.a;
							var cmd = _v5.b;
							var errorLogs = _v5.c;
							return _Utils_Tuple2(
								_Utils_update(
									model,
									{notSeenLogs: errorLogs, state: newState}),
								cmd);
						default:
							if (_v0.b.$ === 'Home') {
								var _v7 = _v0.a.a;
								return _Utils_Tuple2(
									_Utils_update(
										model,
										{
											state: $author$project$Main$Home($author$project$Main$Idle)
										}),
									$elm$core$Platform$Cmd$none);
							} else {
								break _v0$52;
							}
					}
				case 'DragDropLightsMsg':
					if (_v0.b.$ === 'Home') {
						switch (_v0.a.a.$) {
							case 'DragOverLights':
								var _v3 = _v0.a.a;
								return _Utils_Tuple2(
									_Utils_update(
										model,
										{
											state: $author$project$Main$Home($author$project$Main$DraggingSomeLights)
										}),
									$elm$core$Platform$Cmd$none);
							case 'DropLights':
								var file = _v0.a.a.a;
								var ready = _v0.b.a;
								return _Utils_Tuple2(
									model,
									function () {
										var _v6 = A2($elm$json$Json$Decode$decodeValue, $elm$file$File$decoder, file.value);
										if (_v6.$ === 'Ok') {
											var f = _v6.a;
											return A2(
												$elm$core$Task$perform,
												$author$project$Main$ReceiveCsv,
												$elm$file$File$toString(f));
										} else {
											var err = _v6.a;
											return $elm$core$Platform$Cmd$none;
										}
									}());
							default:
								var _v8 = _v0.a.a;
								return _Utils_Tuple2(
									_Utils_update(
										model,
										{
											state: $author$project$Main$Home($author$project$Main$Idle)
										}),
									$elm$core$Platform$Cmd$none);
						}
					} else {
						break _v0$52;
					}
				case 'LoadExampleImages':
					var urls = _v0.a.a;
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{
								state: $author$project$Main$Loading(
									{
										loaded: $elm$core$Dict$empty,
										names: $elm$core$Set$fromList(urls)
									})
							}),
						$author$project$Main$loadImagesFromUrls(urls));
				case 'ImageDecoded':
					if (_v0.b.$ === 'Loading') {
						var imgValue = _v0.a.a;
						var id = imgValue.id;
						var names = _v0.b.a.names;
						var loaded = _v0.b.a.loaded;
						var oldParamsForm = model.paramsForm;
						var newLoaded = function () {
							var _v10 = $author$project$Main$imageFromValue(imgValue);
							if (_v10.$ === 'Nothing') {
								return loaded;
							} else {
								var image = _v10.a;
								return A3($elm$core$Dict$insert, id, image, loaded);
							}
						}();
						var updatedLoadingState = {loaded: newLoaded, names: names};
						if (_Utils_eq(
							$elm$core$Set$size(names),
							$elm$core$Dict$size(newLoaded))) {
							var _v9 = $elm$core$Dict$values(newLoaded);
							if (!_v9.b) {
								return _Utils_Tuple2(
									_Utils_update(
										model,
										{
											state: $author$project$Main$Home($author$project$Main$Idle)
										}),
									$elm$core$Platform$Cmd$none);
							} else {
								var firstImage = _v9.a;
								var otherImages = _v9.b;
								return _Utils_Tuple2(
									_Utils_update(
										model,
										{
											images: $elm$core$Maybe$Just(
												A2($yotamDvir$elm_pivot$Pivot$fromCons, firstImage, otherImages)),
											imagesCount: $elm$core$Set$size(names),
											loadImages: $author$project$Main$LoadOk(
												$elm$core$String$fromInt(
													$elm$core$Set$size(names))),
											paramsForm: _Utils_update(
												oldParamsForm,
												{
													crop: A2($author$project$CropForm$withSize, firstImage.width, firstImage.height)
												}),
											state: $author$project$Main$Home($author$project$Main$Idle),
											viewer: A3(
												$mpizenberg$elm_2d_viewer$Viewer$fitImage,
												1.0,
												_Utils_Tuple2(firstImage.width, firstImage.height),
												model.viewer)
										}),
									$elm$core$Platform$Cmd$none);
							}
						} else {
							return _Utils_Tuple2(
								_Utils_update(
									model,
									{
										state: $author$project$Main$Loading(updatedLoadingState)
									}),
								$elm$core$Platform$Cmd$none);
						}
					} else {
						break _v0$52;
					}
				case 'KeyDown':
					switch (_v0.b.$) {
						case 'ViewImgs':
							var rawKey = _v0.a.a;
							var images = _v0.b.a.images;
							var _v11 = $ohanhi$keyboard$Keyboard$navigationKey(rawKey);
							_v11$2:
							while (true) {
								if (_v11.$ === 'Just') {
									switch (_v11.a.$) {
										case 'ArrowRight':
											var _v12 = _v11.a;
											return _Utils_Tuple2(
												_Utils_update(
													model,
													{
														lights: A2($elm$core$Maybe$map, $author$project$Main$goToNextLight, model.lights),
														state: $author$project$Main$ViewImgs(
															{
																images: $author$project$Main$goToNextImage(images)
															})
													}),
												$elm$core$Platform$Cmd$none);
										case 'ArrowLeft':
											var _v13 = _v11.a;
											return _Utils_Tuple2(
												_Utils_update(
													model,
													{
														lights: A2($elm$core$Maybe$map, $author$project$Main$goToPreviousLight, model.lights),
														state: $author$project$Main$ViewImgs(
															{
																images: $author$project$Main$goToPreviousImage(images)
															})
													}),
												$elm$core$Platform$Cmd$none);
										default:
											break _v11$2;
									}
								} else {
									break _v11$2;
								}
							}
							return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
						case 'Registration':
							var rawKey = _v0.a.a;
							var _v14 = $ohanhi$keyboard$Keyboard$navigationKey(rawKey);
							_v14$2:
							while (true) {
								if (_v14.$ === 'Just') {
									switch (_v14.a.$) {
										case 'ArrowRight':
											var _v15 = _v14.a;
											return _Utils_Tuple2(
												_Utils_update(
													model,
													{
														registeredImages: A2($elm$core$Maybe$map, $author$project$Main$goToNextImage, model.registeredImages)
													}),
												$elm$core$Platform$Cmd$none);
										case 'ArrowLeft':
											var _v16 = _v14.a;
											return _Utils_Tuple2(
												_Utils_update(
													model,
													{
														registeredImages: A2($elm$core$Maybe$map, $author$project$Main$goToPreviousImage, model.registeredImages)
													}),
												$elm$core$Platform$Cmd$none);
										default:
											break _v14$2;
									}
								} else {
									break _v14$2;
								}
							}
							return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
						default:
							break _v0$52;
					}
				case 'ParamsMsg':
					if (_v0.b.$ === 'Config') {
						var paramsMsg = _v0.a.a;
						return _Utils_Tuple2(
							A2($author$project$Main$updateParams, paramsMsg, model),
							$elm$core$Platform$Cmd$none);
					} else {
						break _v0$52;
					}
				case 'ParamsInfoMsg':
					if (_v0.b.$ === 'Config') {
						var paramsInfoMsg = _v0.a.a;
						return _Utils_Tuple2(
							_Utils_update(
								model,
								{
									paramsInfo: A2($author$project$Main$updateParamsInfo, paramsInfoMsg, model.paramsInfo)
								}),
							$elm$core$Platform$Cmd$none);
					} else {
						break _v0$52;
					}
				case 'NavigationMsg':
					switch (_v0.b.$) {
						case 'ViewImgs':
							if (_v0.a.a.$ === 'GoToPageLogs') {
								var _v17 = _v0.a.a;
								var data = _v0.b.a;
								return _Utils_Tuple2(
									A3($author$project$Main$goTo, $author$project$Main$GoToPageLogs, data, model),
									$author$project$Main$scrollLogsToPos(model.scrollPos));
							} else {
								var navMsg = _v0.a.a;
								var data = _v0.b.a;
								return _Utils_Tuple2(
									A3($author$project$Main$goTo, navMsg, data, model),
									$elm$core$Platform$Cmd$none);
							}
						case 'Config':
							if (_v0.a.a.$ === 'GoToPageLogs') {
								var _v18 = _v0.a.a;
								var data = _v0.b.a;
								return _Utils_Tuple2(
									A3($author$project$Main$goTo, $author$project$Main$GoToPageLogs, data, model),
									$author$project$Main$scrollLogsToPos(model.scrollPos));
							} else {
								var navMsg = _v0.a.a;
								var data = _v0.b.a;
								return _Utils_Tuple2(
									A3($author$project$Main$goTo, navMsg, data, model),
									$elm$core$Platform$Cmd$none);
							}
						case 'Registration':
							if (_v0.a.a.$ === 'GoToPageLogs') {
								var _v19 = _v0.a.a;
								var data = _v0.b.a;
								return _Utils_Tuple2(
									A3($author$project$Main$goTo, $author$project$Main$GoToPageLogs, data, model),
									$author$project$Main$scrollLogsToPos(model.scrollPos));
							} else {
								var navMsg = _v0.a.a;
								var data = _v0.b.a;
								return _Utils_Tuple2(
									A3($author$project$Main$goTo, navMsg, data, model),
									$elm$core$Platform$Cmd$none);
							}
						case 'Logs':
							var navMsg = _v0.a.a;
							var data = _v0.b.a;
							return _Utils_Tuple2(
								A3($author$project$Main$goTo, navMsg, data, model),
								$elm$core$Platform$Cmd$none);
						case 'Home':
							if (_v0.a.a.$ === 'GoToPageImages') {
								var _v20 = _v0.a.a;
								var _v21 = model.images;
								if (_v21.$ === 'Nothing') {
									return _Utils_Tuple2(
										_Utils_update(
											model,
											{
												loadImages: $author$project$Main$LoadError('Lacking images to show for some reason')
											}),
										$elm$core$Platform$Cmd$none);
								} else {
									var data = _v21.a;
									return _Utils_Tuple2(
										A3(
											$author$project$Main$goTo,
											$author$project$Main$GoToPageImages,
											{images: data},
											model),
										$elm$core$Platform$Cmd$none);
								}
							} else {
								break _v0$52;
							}
						default:
							break _v0$52;
					}
				case 'GetScrollPosThenNavigationMsg':
					if (_v0.b.$ === 'Logs') {
						var navMsg = _v0.a.a;
						return _Utils_Tuple2(
							model,
							$elm$core$Platform$Cmd$batch(
								_List_fromArray(
									[
										A2(
										$elm$core$Task$attempt,
										$author$project$Main$GotScrollPos,
										$elm$browser$Browser$Dom$getViewportOf('logs')),
										A2(
										$elm$core$Task$perform,
										$elm$core$Basics$always(
											$author$project$Main$NavigationMsg(navMsg)),
										$elm$core$Process$sleep(0))
									])));
					} else {
						break _v0$52;
					}
				case 'ZoomMsg':
					switch (_v0.b.$) {
						case 'ViewImgs':
							var zoomMsg = _v0.a.a;
							return _Utils_Tuple2(
								_Utils_update(
									model,
									{
										viewer: A2($author$project$Main$zoomViewer, zoomMsg, model.viewer)
									}),
								$elm$core$Platform$Cmd$none);
						case 'Registration':
							var zoomMsg = _v0.a.a;
							return _Utils_Tuple2(
								_Utils_update(
									model,
									{
										registeredViewer: A2($author$project$Main$zoomViewer, zoomMsg, model.registeredViewer)
									}),
								$elm$core$Platform$Cmd$none);
						default:
							break _v0$52;
					}
				case 'ViewImgMsg':
					if (_v0.b.$ === 'ViewImgs') {
						switch (_v0.a.a.$) {
							case 'CropCurrentFrame':
								var _v40 = _v0.a.a;
								var images = _v0.b.a.images;
								var oldParamsForm = model.paramsForm;
								var oldParams = model.params;
								var img = $yotamDvir$elm_pivot$Pivot$getC(
									$yotamDvir$elm_pivot$Pivot$goToStart(images));
								var _v41 = model.viewer.origin;
								var left = _v41.a;
								var top = _v41.b;
								var _v42 = model.viewer.size;
								var width = _v42.a;
								var height = _v42.b;
								var bottom = top + (model.viewer.scale * height);
								var right = left + (model.viewer.scale * width);
								if ((right > 0) && ((_Utils_cmp(left, img.width) < 0) && ((bottom > 0) && (_Utils_cmp(top, img.height) < 0)))) {
									var newCropForm = A2(
										$author$project$Main$snapBBox,
										A4($author$project$Main$BBox, left, top, right, bottom),
										oldParamsForm.crop);
									var newCrop = $author$project$CropForm$decoded(newCropForm);
									return _Utils_Tuple2(
										_Utils_update(
											model,
											{
												bboxDrawn: A2($elm$core$Maybe$map, $author$project$Main$toBBox, newCrop),
												params: _Utils_update(
													oldParams,
													{crop: newCrop}),
												paramsForm: _Utils_update(
													oldParamsForm,
													{crop: newCropForm})
											}),
										$elm$core$Platform$Cmd$none);
								} else {
									return _Utils_Tuple2(
										_Utils_update(
											model,
											{
												bboxDrawn: $elm$core$Maybe$Nothing,
												params: _Utils_update(
													oldParams,
													{crop: $elm$core$Maybe$Nothing}),
												paramsForm: _Utils_update(
													oldParamsForm,
													{
														crop: A2($author$project$CropForm$toggle, false, oldParamsForm.crop)
													})
											}),
										$elm$core$Platform$Cmd$none);
								}
							case 'SelectMovingMode':
								var _v43 = _v0.a.a;
								return _Utils_Tuple2(
									_Utils_update(
										model,
										{pointerMode: $author$project$Main$WaitingMove}),
									$elm$core$Platform$Cmd$none);
							default:
								var _v44 = _v0.a.a;
								return _Utils_Tuple2(
									_Utils_update(
										model,
										{pointerMode: $author$project$Main$WaitingDraw}),
									$elm$core$Platform$Cmd$none);
						}
					} else {
						break _v0$52;
					}
				case 'ClickPreviousImage':
					switch (_v0.b.$) {
						case 'ViewImgs':
							var _v45 = _v0.a;
							var images = _v0.b.a.images;
							return _Utils_Tuple2(
								_Utils_update(
									model,
									{
										lights: A2($elm$core$Maybe$map, $author$project$Main$goToPreviousLight, model.lights),
										state: $author$project$Main$ViewImgs(
											{
												images: $author$project$Main$goToPreviousImage(images)
											})
									}),
								$elm$core$Platform$Cmd$none);
						case 'Registration':
							var _v46 = _v0.a;
							return _Utils_Tuple2(
								_Utils_update(
									model,
									{
										registeredImages: A2($elm$core$Maybe$map, $author$project$Main$goToPreviousImage, model.registeredImages)
									}),
								$elm$core$Platform$Cmd$none);
						default:
							break _v0$52;
					}
				case 'ClickNextImage':
					switch (_v0.b.$) {
						case 'ViewImgs':
							var _v47 = _v0.a;
							var images = _v0.b.a.images;
							return _Utils_Tuple2(
								_Utils_update(
									model,
									{
										lights: A2($elm$core$Maybe$map, $author$project$Main$goToNextLight, model.lights),
										state: $author$project$Main$ViewImgs(
											{
												images: $author$project$Main$goToNextImage(images)
											})
									}),
								$elm$core$Platform$Cmd$none);
						case 'Registration':
							var _v48 = _v0.a;
							return _Utils_Tuple2(
								_Utils_update(
									model,
									{
										registeredImages: A2($elm$core$Maybe$map, $author$project$Main$goToNextImage, model.registeredImages)
									}),
								$elm$core$Platform$Cmd$none);
						default:
							break _v0$52;
					}
				case 'RunAlgorithm':
					switch (_v0.b.$) {
						case 'ViewImgs':
							var params = _v0.a.a;
							var imgs = _v0.b.a;
							return _Utils_Tuple2(
								A2($author$project$Main$runAndSwitchToLogsPage, imgs, model),
								$author$project$Main$run(
									$author$project$Main$encodeParams(params)));
						case 'Config':
							var params = _v0.a.a;
							var imgs = _v0.b.a;
							return _Utils_Tuple2(
								A2($author$project$Main$runAndSwitchToLogsPage, imgs, model),
								$author$project$Main$run(
									$author$project$Main$encodeParams(params)));
						case 'Registration':
							var params = _v0.a.a;
							var imgs = _v0.b.a;
							return _Utils_Tuple2(
								A2($author$project$Main$runAndSwitchToLogsPage, imgs, model),
								$author$project$Main$run(
									$author$project$Main$encodeParams(params)));
						case 'Logs':
							var params = _v0.a.a;
							var imgs = _v0.b.a;
							return _Utils_Tuple2(
								A2($author$project$Main$runAndSwitchToLogsPage, imgs, model),
								$author$project$Main$run(
									$author$project$Main$encodeParams(params)));
						default:
							break _v0$52;
					}
				case 'StopRunning':
					var _v49 = _v0.a;
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{runStep: $author$project$Main$StepNotStarted}),
						$author$project$Main$stop(_Utils_Tuple0));
				case 'UpdateRunStep':
					var step = _v0.a.a.step;
					var progress = _v0.a.a.progress;
					var runStep = function () {
						var _v50 = _Utils_Tuple3(model.runStep, step, progress);
						_v50$8:
						while (true) {
							switch (_v50.b) {
								case 'Precompute multiresolution pyramid':
									return $author$project$Main$StepMultiresPyramid;
								case 'level':
									if (_v50.c.$ === 'Just') {
										var lvl = _v50.c.a;
										return $author$project$Main$StepLevel(lvl);
									} else {
										break _v50$8;
									}
								case 'iteration':
									if (_v50.c.$ === 'Just') {
										switch (_v50.a.$) {
											case 'StepLevel':
												var lvl = _v50.a.a;
												var iter = _v50.c.a;
												return A2($author$project$Main$StepIteration, lvl, iter);
											case 'StepIteration':
												var _v51 = _v50.a;
												var lvl = _v51.a;
												var iter = _v50.c.a;
												return A2($author$project$Main$StepIteration, lvl, iter);
											default:
												break _v50$8;
										}
									} else {
										break _v50$8;
									}
								case 'Reproject':
									if (_v50.c.$ === 'Just') {
										var im = _v50.c.a;
										return $author$project$Main$StepApplying(im);
									} else {
										break _v50$8;
									}
								case 'encoding':
									if (_v50.c.$ === 'Just') {
										var im = _v50.c.a;
										return $author$project$Main$StepEncoding(im);
									} else {
										break _v50$8;
									}
								case 'done':
									return $author$project$Main$StepDone;
								case 'saving':
									if (_v50.c.$ === 'Just') {
										var im = _v50.c.a;
										return $author$project$Main$StepSaving(im);
									} else {
										break _v50$8;
									}
								default:
									break _v50$8;
							}
						}
						return $author$project$Main$StepNotStarted;
					}();
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{runStep: runStep}),
						$elm$core$Platform$Cmd$none);
				case 'Log':
					switch (_v0.b.$) {
						case 'Logs':
							var logData = _v0.a.a;
							var newLogs = A2($elm$core$List$cons, logData, model.seenLogs);
							return model.autoscroll ? _Utils_Tuple2(
								_Utils_update(
									model,
									{seenLogs: newLogs}),
								$author$project$Main$scrollLogsToEndCmd) : _Utils_Tuple2(
								_Utils_update(
									model,
									{seenLogs: newLogs}),
								$elm$core$Platform$Cmd$none);
						case 'Loading':
							var logData = _v0.a.a;
							var newState = (!logData.lvl) ? $author$project$Main$LoadingError : model.state;
							return _Utils_Tuple2(
								_Utils_update(
									model,
									{
										notSeenLogs: A2($elm$core$List$cons, logData, model.notSeenLogs),
										state: newState
									}),
								$elm$core$Platform$Cmd$none);
						default:
							var logData = _v0.a.a;
							return _Utils_Tuple2(
								_Utils_update(
									model,
									{
										notSeenLogs: A2($elm$core$List$cons, logData, model.notSeenLogs)
									}),
								$elm$core$Platform$Cmd$none);
					}
				case 'GotScrollPos':
					if ((_v0.a.a.$ === 'Ok') && (_v0.b.$ === 'Logs')) {
						var viewport = _v0.a.a.a.viewport;
						return _Utils_Tuple2(
							_Utils_update(
								model,
								{scrollPos: viewport.y}),
							$elm$core$Platform$Cmd$none);
					} else {
						break _v0$52;
					}
				case 'VerbosityChange':
					var floatVerbosity = _v0.a.a;
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{
								verbosity: $elm$core$Basics$round(floatVerbosity)
							}),
						$elm$core$Platform$Cmd$none);
				case 'ScrollLogsToEnd':
					if (_v0.b.$ === 'Logs') {
						var _v52 = _v0.a;
						return _Utils_Tuple2(model, $author$project$Main$scrollLogsToEndCmd);
					} else {
						break _v0$52;
					}
				case 'ToggleAutoScroll':
					var activate = _v0.a.a;
					return activate ? _Utils_Tuple2(
						_Utils_update(
							model,
							{autoscroll: true}),
						$author$project$Main$scrollLogsToEndCmd) : _Utils_Tuple2(
						_Utils_update(
							model,
							{autoscroll: false}),
						$elm$core$Platform$Cmd$none);
				case 'ReceiveCroppedImages':
					var croppedImages = _v0.a.a;
					var _v53 = A2($elm$core$List$filterMap, $author$project$Main$imageFromValue, croppedImages);
					if (!_v53.b) {
						return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
					} else {
						var firstImage = _v53.a;
						var otherImages = _v53.b;
						return _Utils_Tuple2(
							_Utils_update(
								model,
								{
									registeredImages: $elm$core$Maybe$Just(
										A2($yotamDvir$elm_pivot$Pivot$fromCons, firstImage, otherImages)),
									registeredViewer: A3(
										$mpizenberg$elm_2d_viewer$Viewer$fitImage,
										1.0,
										_Utils_Tuple2(firstImage.width, firstImage.height),
										model.registeredViewer)
								}),
							$elm$core$Platform$Cmd$none);
					}
				case 'ReceiveCsv':
					var content = _v0.a.a;
					var youCanGo = function () {
						var _v55 = _Utils_Tuple2(model.loadImages, model.loadLights);
						if ((_v55.a.$ === 'LoadOk') && (_v55.b.$ === 'LoadOk')) {
							return true;
						} else {
							return false;
						}
					}();
					var decoder = A2(
						$BrianHicks$elm_csv$Csv$Decode$pipeline,
						A2($BrianHicks$elm_csv$Csv$Decode$field, 'z', $BrianHicks$elm_csv$Csv$Decode$float),
						A2(
							$BrianHicks$elm_csv$Csv$Decode$pipeline,
							A2($BrianHicks$elm_csv$Csv$Decode$field, 'y', $BrianHicks$elm_csv$Csv$Decode$float),
							A2(
								$BrianHicks$elm_csv$Csv$Decode$pipeline,
								A2($BrianHicks$elm_csv$Csv$Decode$field, 'x', $BrianHicks$elm_csv$Csv$Decode$float),
								$BrianHicks$elm_csv$Csv$Decode$into($author$project$Main$Point3d))));
					var myCsv = A4(
						$BrianHicks$elm_csv$Csv$Decode$decodeCustom,
						{
							fieldSeparator: _Utils_chr(';')
						},
						$BrianHicks$elm_csv$Csv$Decode$FieldNamesFromFirstRow,
						decoder,
						content);
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{
								lights: A2(
									$elm$core$Maybe$andThen,
									$yotamDvir$elm_pivot$Pivot$fromList,
									$elm$core$Result$toMaybe(myCsv)),
								loadLights: function () {
									if (myCsv.$ === 'Err') {
										var err = myCsv.a;
										return $author$project$Main$LoadError(
											$BrianHicks$elm_csv$Csv$Decode$errorToString(err));
									} else {
										var csv = myCsv.a;
										return $author$project$Main$LoadOk(
											$elm$core$String$fromInt(
												$elm$core$List$length(csv)));
									}
								}()
							}),
						$elm$core$Platform$Cmd$none);
				case 'PointerMsg':
					switch (_v0.b.$) {
						case 'ViewImgs':
							var pointerMsg = _v0.a.a;
							var images = _v0.b.a.images;
							var _v22 = _Utils_Tuple2(pointerMsg, model.pointerMode);
							_v22$6:
							while (true) {
								switch (_v22.a.$) {
									case 'PointerDownRaw':
										switch (_v22.b.$) {
											case 'WaitingMove':
												var event = _v22.a.a;
												var _v23 = _v22.b;
												var _v24 = A2($elm$json$Json$Decode$decodeValue, $mpizenberg$elm_pointer_events$Html$Events$Extra$Pointer$eventDecoder, event);
												if (_v24.$ === 'Err') {
													return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
												} else {
													var pointer = _v24.a.pointer;
													return _Utils_Tuple2(
														_Utils_update(
															model,
															{
																pointerMode: $author$project$Main$PointerMovingFromClientCoords(pointer.clientPos)
															}),
														$author$project$Main$capture(event));
												}
											case 'WaitingDraw':
												var event = _v22.a.a;
												var _v28 = _v22.b;
												var _v29 = A2($elm$json$Json$Decode$decodeValue, $mpizenberg$elm_pointer_events$Html$Events$Extra$Pointer$eventDecoder, event);
												if (_v29.$ === 'Err') {
													return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
												} else {
													var pointer = _v29.a.pointer;
													var _v30 = A2($mpizenberg$elm_2d_viewer$Viewer$coordinatesAt, pointer.offsetPos, model.viewer);
													var x = _v30.a;
													var y = _v30.b;
													return _Utils_Tuple2(
														_Utils_update(
															model,
															{
																bboxDrawn: $elm$core$Maybe$Just(
																	{bottom: y, left: x, right: x, top: y}),
																pointerMode: A2($author$project$Main$PointerDrawFromOffsetAndClient, pointer.offsetPos, pointer.clientPos)
															}),
														$author$project$Main$capture(event));
												}
											default:
												break _v22$6;
										}
									case 'PointerMove':
										switch (_v22.b.$) {
											case 'PointerMovingFromClientCoords':
												var _v25 = _v22.a.a;
												var newX = _v25.a;
												var newY = _v25.b;
												var _v26 = _v22.b.a;
												var x = _v26.a;
												var y = _v26.b;
												return _Utils_Tuple2(
													_Utils_update(
														model,
														{
															pointerMode: $author$project$Main$PointerMovingFromClientCoords(
																_Utils_Tuple2(newX, newY)),
															viewer: A2(
																$mpizenberg$elm_2d_viewer$Viewer$pan,
																_Utils_Tuple2(newX - x, newY - y),
																model.viewer)
														}),
													$elm$core$Platform$Cmd$none);
											case 'PointerDrawFromOffsetAndClient':
												var _v31 = _v22.a.a;
												var newX = _v31.a;
												var newY = _v31.b;
												var _v32 = _v22.b;
												var _v33 = _v32.a;
												var oX = _v33.a;
												var oY = _v33.b;
												var _v34 = _v32.b;
												var cX = _v34.a;
												var cY = _v34.b;
												var _v35 = A2(
													$mpizenberg$elm_2d_viewer$Viewer$coordinatesAt,
													_Utils_Tuple2((oX + newX) - cX, (oY + newY) - cY),
													model.viewer);
												var x2 = _v35.a;
												var y2 = _v35.b;
												var _v36 = A2(
													$mpizenberg$elm_2d_viewer$Viewer$coordinatesAt,
													_Utils_Tuple2(oX, oY),
													model.viewer);
												var x1 = _v36.a;
												var y1 = _v36.b;
												var left = A2($elm$core$Basics$min, x1, x2);
												var right = A2($elm$core$Basics$max, x1, x2);
												var bottom = A2($elm$core$Basics$max, y1, y2);
												var top = A2($elm$core$Basics$min, y1, y2);
												return _Utils_Tuple2(
													_Utils_update(
														model,
														{
															bboxDrawn: $elm$core$Maybe$Just(
																{bottom: bottom, left: left, right: right, top: top})
														}),
													$elm$core$Platform$Cmd$none);
											default:
												break _v22$6;
										}
									default:
										switch (_v22.b.$) {
											case 'PointerMovingFromClientCoords':
												var _v27 = _v22.a;
												return _Utils_Tuple2(
													_Utils_update(
														model,
														{pointerMode: $author$project$Main$WaitingMove}),
													$elm$core$Platform$Cmd$none);
											case 'PointerDrawFromOffsetAndClient':
												var _v37 = _v22.a;
												var _v38 = _v22.b;
												var _v39 = model.bboxDrawn;
												if (_v39.$ === 'Just') {
													var left = _v39.a.left;
													var right = _v39.a.right;
													var top = _v39.a.top;
													var bottom = _v39.a.bottom;
													var oldParamsForm = model.paramsForm;
													var oldParams = model.params;
													var img = $yotamDvir$elm_pivot$Pivot$getC(
														$yotamDvir$elm_pivot$Pivot$goToStart(images));
													if ((((right - left) / model.viewer.scale) > 10) && ((((bottom - top) / model.viewer.scale) > 10) && ((right > 0) && ((_Utils_cmp(left, img.width) < 0) && ((bottom > 0) && (_Utils_cmp(top, img.height) < 0)))))) {
														var newCropForm = A2(
															$author$project$Main$snapBBox,
															A4($author$project$Main$BBox, left, top, right, bottom),
															oldParamsForm.crop);
														var newCrop = $author$project$CropForm$decoded(newCropForm);
														return _Utils_Tuple2(
															_Utils_update(
																model,
																{
																	bboxDrawn: A2($elm$core$Maybe$map, $author$project$Main$toBBox, newCrop),
																	params: _Utils_update(
																		oldParams,
																		{crop: newCrop}),
																	paramsForm: _Utils_update(
																		oldParamsForm,
																		{crop: newCropForm}),
																	pointerMode: $author$project$Main$WaitingDraw
																}),
															$elm$core$Platform$Cmd$none);
													} else {
														return _Utils_Tuple2(
															_Utils_update(
																model,
																{
																	bboxDrawn: $elm$core$Maybe$Nothing,
																	params: _Utils_update(
																		oldParams,
																		{crop: $elm$core$Maybe$Nothing}),
																	paramsForm: _Utils_update(
																		oldParamsForm,
																		{
																			crop: A2($author$project$CropForm$toggle, false, oldParamsForm.crop)
																		}),
																	pointerMode: $author$project$Main$WaitingDraw
																}),
															$elm$core$Platform$Cmd$none);
													}
												} else {
													return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
												}
											default:
												break _v22$6;
										}
								}
							}
							return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
						case 'Registration':
							var pointerMsg = _v0.a.a;
							var _v56 = _Utils_Tuple2(pointerMsg, model.pointerMode);
							_v56$3:
							while (true) {
								switch (_v56.a.$) {
									case 'PointerDownRaw':
										if (_v56.b.$ === 'WaitingMove') {
											var event = _v56.a.a;
											var _v57 = _v56.b;
											var _v58 = A2($elm$json$Json$Decode$decodeValue, $mpizenberg$elm_pointer_events$Html$Events$Extra$Pointer$eventDecoder, event);
											if (_v58.$ === 'Err') {
												return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
											} else {
												var pointer = _v58.a.pointer;
												return _Utils_Tuple2(
													_Utils_update(
														model,
														{
															pointerMode: $author$project$Main$PointerMovingFromClientCoords(pointer.clientPos)
														}),
													$author$project$Main$capture(event));
											}
										} else {
											break _v56$3;
										}
									case 'PointerMove':
										if (_v56.b.$ === 'PointerMovingFromClientCoords') {
											var _v59 = _v56.a.a;
											var newX = _v59.a;
											var newY = _v59.b;
											var _v60 = _v56.b.a;
											var x = _v60.a;
											var y = _v60.b;
											return _Utils_Tuple2(
												_Utils_update(
													model,
													{
														pointerMode: $author$project$Main$PointerMovingFromClientCoords(
															_Utils_Tuple2(newX, newY)),
														registeredViewer: A2(
															$mpizenberg$elm_2d_viewer$Viewer$pan,
															_Utils_Tuple2(newX - x, newY - y),
															model.registeredViewer)
													}),
												$elm$core$Platform$Cmd$none);
										} else {
											break _v56$3;
										}
									default:
										if (_v56.b.$ === 'PointerMovingFromClientCoords') {
											var _v61 = _v56.a;
											return _Utils_Tuple2(
												_Utils_update(
													model,
													{pointerMode: $author$project$Main$WaitingMove}),
												$elm$core$Platform$Cmd$none);
										} else {
											break _v56$3;
										}
								}
							}
							return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
						default:
							break _v0$52;
					}
				case 'SaveRegisteredImages':
					var _v62 = _v0.a;
					return _Utils_Tuple2(
						model,
						$author$project$Main$saveRegisteredImages(model.imagesCount));
				case 'ReturnHome':
					var _v63 = _v0.a;
					return _Utils_Tuple2(model, $elm$browser$Browser$Navigation$reload);
				default:
					var _v64 = _v0.a;
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{
								notSeenLogs: _List_Nil,
								seenLogs: _List_fromArray(
									[
										{content: 'Logs cleared', lvl: 3}
									])
							}),
						$elm$core$Platform$Cmd$none);
			}
		}
		return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
	});
var $mdgriffith$elm_ui$Internal$Model$Class = F2(
	function (a, b) {
		return {$: 'Class', a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Style$classes = {above: 'a', active: 'atv', alignBottom: 'ab', alignCenterX: 'cx', alignCenterY: 'cy', alignContainerBottom: 'acb', alignContainerCenterX: 'accx', alignContainerCenterY: 'accy', alignContainerRight: 'acr', alignLeft: 'al', alignRight: 'ar', alignTop: 'at', alignedHorizontally: 'ah', alignedVertically: 'av', any: 's', behind: 'bh', below: 'b', bold: 'w7', borderDashed: 'bd', borderDotted: 'bdt', borderNone: 'bn', borderSolid: 'bs', capturePointerEvents: 'cpe', clip: 'cp', clipX: 'cpx', clipY: 'cpy', column: 'c', container: 'ctr', contentBottom: 'cb', contentCenterX: 'ccx', contentCenterY: 'ccy', contentLeft: 'cl', contentRight: 'cr', contentTop: 'ct', cursorPointer: 'cptr', cursorText: 'ctxt', focus: 'fcs', focusedWithin: 'focus-within', fullSize: 'fs', grid: 'g', hasBehind: 'hbh', heightContent: 'hc', heightExact: 'he', heightFill: 'hf', heightFillPortion: 'hfp', hover: 'hv', imageContainer: 'ic', inFront: 'fr', inputLabel: 'lbl', inputMultiline: 'iml', inputMultilineFiller: 'imlf', inputMultilineParent: 'imlp', inputMultilineWrapper: 'implw', inputText: 'it', italic: 'i', link: 'lnk', nearby: 'nb', noTextSelection: 'notxt', onLeft: 'ol', onRight: 'or', opaque: 'oq', overflowHidden: 'oh', page: 'pg', paragraph: 'p', passPointerEvents: 'ppe', root: 'ui', row: 'r', scrollbars: 'sb', scrollbarsX: 'sbx', scrollbarsY: 'sby', seButton: 'sbt', single: 'e', sizeByCapital: 'cap', spaceEvenly: 'sev', strike: 'sk', text: 't', textCenter: 'tc', textExtraBold: 'w8', textExtraLight: 'w2', textHeavy: 'w9', textJustify: 'tj', textJustifyAll: 'tja', textLeft: 'tl', textLight: 'w3', textMedium: 'w5', textNormalWeight: 'w4', textRight: 'tr', textSemiBold: 'w6', textThin: 'w1', textUnitalicized: 'tun', transition: 'ts', transparent: 'clr', underline: 'u', widthContent: 'wc', widthExact: 'we', widthFill: 'wf', widthFillPortion: 'wfp', wrapped: 'wrp'};
var $mdgriffith$elm_ui$Internal$Flag$Flag = function (a) {
	return {$: 'Flag', a: a};
};
var $mdgriffith$elm_ui$Internal$Flag$Second = function (a) {
	return {$: 'Second', a: a};
};
var $mdgriffith$elm_ui$Internal$Flag$flag = function (i) {
	return (i > 31) ? $mdgriffith$elm_ui$Internal$Flag$Second(1 << (i - 32)) : $mdgriffith$elm_ui$Internal$Flag$Flag(1 << i);
};
var $mdgriffith$elm_ui$Internal$Flag$overflow = $mdgriffith$elm_ui$Internal$Flag$flag(20);
var $mdgriffith$elm_ui$Element$clip = A2($mdgriffith$elm_ui$Internal$Model$Class, $mdgriffith$elm_ui$Internal$Flag$overflow, $mdgriffith$elm_ui$Internal$Style$classes.clip);
var $mdgriffith$elm_ui$Internal$Model$FontFamily = F2(
	function (a, b) {
		return {$: 'FontFamily', a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Model$StyleClass = F2(
	function (a, b) {
		return {$: 'StyleClass', a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Flag$fontFamily = $mdgriffith$elm_ui$Internal$Flag$flag(5);
var $elm$core$String$toLower = _String_toLower;
var $elm$core$String$words = _String_words;
var $mdgriffith$elm_ui$Internal$Model$renderFontClassName = F2(
	function (font, current) {
		return _Utils_ap(
			current,
			function () {
				switch (font.$) {
					case 'Serif':
						return 'serif';
					case 'SansSerif':
						return 'sans-serif';
					case 'Monospace':
						return 'monospace';
					case 'Typeface':
						var name = font.a;
						return A2(
							$elm$core$String$join,
							'-',
							$elm$core$String$words(
								$elm$core$String$toLower(name)));
					case 'ImportFont':
						var name = font.a;
						var url = font.b;
						return A2(
							$elm$core$String$join,
							'-',
							$elm$core$String$words(
								$elm$core$String$toLower(name)));
					default:
						var name = font.a.name;
						return A2(
							$elm$core$String$join,
							'-',
							$elm$core$String$words(
								$elm$core$String$toLower(name)));
				}
			}());
	});
var $mdgriffith$elm_ui$Element$Font$family = function (families) {
	return A2(
		$mdgriffith$elm_ui$Internal$Model$StyleClass,
		$mdgriffith$elm_ui$Internal$Flag$fontFamily,
		A2(
			$mdgriffith$elm_ui$Internal$Model$FontFamily,
			A3($elm$core$List$foldl, $mdgriffith$elm_ui$Internal$Model$renderFontClassName, 'ff-', families),
			families));
};
var $mdgriffith$elm_ui$Internal$Model$SansSerif = {$: 'SansSerif'};
var $mdgriffith$elm_ui$Element$Font$sansSerif = $mdgriffith$elm_ui$Internal$Model$SansSerif;
var $mdgriffith$elm_ui$Internal$Model$Typeface = function (a) {
	return {$: 'Typeface', a: a};
};
var $mdgriffith$elm_ui$Element$Font$typeface = $mdgriffith$elm_ui$Internal$Model$Typeface;
var $author$project$Style$font = $mdgriffith$elm_ui$Element$Font$family(
	_List_fromArray(
		[
			$mdgriffith$elm_ui$Element$Font$typeface('Open Sans'),
			$mdgriffith$elm_ui$Element$Font$sansSerif
		]));
var $mdgriffith$elm_ui$Internal$Model$Attr = function (a) {
	return {$: 'Attr', a: a};
};
var $mdgriffith$elm_ui$Internal$Model$htmlClass = function (cls) {
	return $mdgriffith$elm_ui$Internal$Model$Attr(
		$elm$html$Html$Attributes$class(cls));
};
var $mdgriffith$elm_ui$Internal$Model$OnlyDynamic = F2(
	function (a, b) {
		return {$: 'OnlyDynamic', a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Model$StaticRootAndDynamic = F2(
	function (a, b) {
		return {$: 'StaticRootAndDynamic', a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Model$Unkeyed = function (a) {
	return {$: 'Unkeyed', a: a};
};
var $mdgriffith$elm_ui$Internal$Model$AsEl = {$: 'AsEl'};
var $mdgriffith$elm_ui$Internal$Model$asEl = $mdgriffith$elm_ui$Internal$Model$AsEl;
var $mdgriffith$elm_ui$Internal$Model$Generic = {$: 'Generic'};
var $mdgriffith$elm_ui$Internal$Model$div = $mdgriffith$elm_ui$Internal$Model$Generic;
var $mdgriffith$elm_ui$Internal$Model$NoNearbyChildren = {$: 'NoNearbyChildren'};
var $mdgriffith$elm_ui$Internal$Model$columnClass = $mdgriffith$elm_ui$Internal$Style$classes.any + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.column);
var $mdgriffith$elm_ui$Internal$Model$gridClass = $mdgriffith$elm_ui$Internal$Style$classes.any + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.grid);
var $mdgriffith$elm_ui$Internal$Model$pageClass = $mdgriffith$elm_ui$Internal$Style$classes.any + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.page);
var $mdgriffith$elm_ui$Internal$Model$paragraphClass = $mdgriffith$elm_ui$Internal$Style$classes.any + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.paragraph);
var $mdgriffith$elm_ui$Internal$Model$rowClass = $mdgriffith$elm_ui$Internal$Style$classes.any + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.row);
var $mdgriffith$elm_ui$Internal$Model$singleClass = $mdgriffith$elm_ui$Internal$Style$classes.any + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.single);
var $mdgriffith$elm_ui$Internal$Model$contextClasses = function (context) {
	switch (context.$) {
		case 'AsRow':
			return $mdgriffith$elm_ui$Internal$Model$rowClass;
		case 'AsColumn':
			return $mdgriffith$elm_ui$Internal$Model$columnClass;
		case 'AsEl':
			return $mdgriffith$elm_ui$Internal$Model$singleClass;
		case 'AsGrid':
			return $mdgriffith$elm_ui$Internal$Model$gridClass;
		case 'AsParagraph':
			return $mdgriffith$elm_ui$Internal$Model$paragraphClass;
		default:
			return $mdgriffith$elm_ui$Internal$Model$pageClass;
	}
};
var $mdgriffith$elm_ui$Internal$Model$Keyed = function (a) {
	return {$: 'Keyed', a: a};
};
var $mdgriffith$elm_ui$Internal$Model$NoStyleSheet = {$: 'NoStyleSheet'};
var $mdgriffith$elm_ui$Internal$Model$Styled = function (a) {
	return {$: 'Styled', a: a};
};
var $mdgriffith$elm_ui$Internal$Model$Unstyled = function (a) {
	return {$: 'Unstyled', a: a};
};
var $mdgriffith$elm_ui$Internal$Model$addChildren = F2(
	function (existing, nearbyChildren) {
		switch (nearbyChildren.$) {
			case 'NoNearbyChildren':
				return existing;
			case 'ChildrenBehind':
				var behind = nearbyChildren.a;
				return _Utils_ap(behind, existing);
			case 'ChildrenInFront':
				var inFront = nearbyChildren.a;
				return _Utils_ap(existing, inFront);
			default:
				var behind = nearbyChildren.a;
				var inFront = nearbyChildren.b;
				return _Utils_ap(
					behind,
					_Utils_ap(existing, inFront));
		}
	});
var $mdgriffith$elm_ui$Internal$Model$addKeyedChildren = F3(
	function (key, existing, nearbyChildren) {
		switch (nearbyChildren.$) {
			case 'NoNearbyChildren':
				return existing;
			case 'ChildrenBehind':
				var behind = nearbyChildren.a;
				return _Utils_ap(
					A2(
						$elm$core$List$map,
						function (x) {
							return _Utils_Tuple2(key, x);
						},
						behind),
					existing);
			case 'ChildrenInFront':
				var inFront = nearbyChildren.a;
				return _Utils_ap(
					existing,
					A2(
						$elm$core$List$map,
						function (x) {
							return _Utils_Tuple2(key, x);
						},
						inFront));
			default:
				var behind = nearbyChildren.a;
				var inFront = nearbyChildren.b;
				return _Utils_ap(
					A2(
						$elm$core$List$map,
						function (x) {
							return _Utils_Tuple2(key, x);
						},
						behind),
					_Utils_ap(
						existing,
						A2(
							$elm$core$List$map,
							function (x) {
								return _Utils_Tuple2(key, x);
							},
							inFront)));
		}
	});
var $mdgriffith$elm_ui$Internal$Model$AsParagraph = {$: 'AsParagraph'};
var $mdgriffith$elm_ui$Internal$Model$asParagraph = $mdgriffith$elm_ui$Internal$Model$AsParagraph;
var $mdgriffith$elm_ui$Internal$Flag$alignBottom = $mdgriffith$elm_ui$Internal$Flag$flag(41);
var $mdgriffith$elm_ui$Internal$Flag$alignRight = $mdgriffith$elm_ui$Internal$Flag$flag(40);
var $mdgriffith$elm_ui$Internal$Flag$centerX = $mdgriffith$elm_ui$Internal$Flag$flag(42);
var $mdgriffith$elm_ui$Internal$Flag$centerY = $mdgriffith$elm_ui$Internal$Flag$flag(43);
var $mdgriffith$elm_ui$Internal$Model$lengthClassName = function (x) {
	switch (x.$) {
		case 'Px':
			var px = x.a;
			return $elm$core$String$fromInt(px) + 'px';
		case 'Content':
			return 'auto';
		case 'Fill':
			var i = x.a;
			return $elm$core$String$fromInt(i) + 'fr';
		case 'Min':
			var min = x.a;
			var len = x.b;
			return 'min' + ($elm$core$String$fromInt(min) + $mdgriffith$elm_ui$Internal$Model$lengthClassName(len));
		default:
			var max = x.a;
			var len = x.b;
			return 'max' + ($elm$core$String$fromInt(max) + $mdgriffith$elm_ui$Internal$Model$lengthClassName(len));
	}
};
var $mdgriffith$elm_ui$Internal$Model$floatClass = function (x) {
	return $elm$core$String$fromInt(
		$elm$core$Basics$round(x * 255));
};
var $mdgriffith$elm_ui$Internal$Model$transformClass = function (transform) {
	switch (transform.$) {
		case 'Untransformed':
			return $elm$core$Maybe$Nothing;
		case 'Moved':
			var _v1 = transform.a;
			var x = _v1.a;
			var y = _v1.b;
			var z = _v1.c;
			return $elm$core$Maybe$Just(
				'mv-' + ($mdgriffith$elm_ui$Internal$Model$floatClass(x) + ('-' + ($mdgriffith$elm_ui$Internal$Model$floatClass(y) + ('-' + $mdgriffith$elm_ui$Internal$Model$floatClass(z))))));
		default:
			var _v2 = transform.a;
			var tx = _v2.a;
			var ty = _v2.b;
			var tz = _v2.c;
			var _v3 = transform.b;
			var sx = _v3.a;
			var sy = _v3.b;
			var sz = _v3.c;
			var _v4 = transform.c;
			var ox = _v4.a;
			var oy = _v4.b;
			var oz = _v4.c;
			var angle = transform.d;
			return $elm$core$Maybe$Just(
				'tfrm-' + ($mdgriffith$elm_ui$Internal$Model$floatClass(tx) + ('-' + ($mdgriffith$elm_ui$Internal$Model$floatClass(ty) + ('-' + ($mdgriffith$elm_ui$Internal$Model$floatClass(tz) + ('-' + ($mdgriffith$elm_ui$Internal$Model$floatClass(sx) + ('-' + ($mdgriffith$elm_ui$Internal$Model$floatClass(sy) + ('-' + ($mdgriffith$elm_ui$Internal$Model$floatClass(sz) + ('-' + ($mdgriffith$elm_ui$Internal$Model$floatClass(ox) + ('-' + ($mdgriffith$elm_ui$Internal$Model$floatClass(oy) + ('-' + ($mdgriffith$elm_ui$Internal$Model$floatClass(oz) + ('-' + $mdgriffith$elm_ui$Internal$Model$floatClass(angle))))))))))))))))))));
	}
};
var $mdgriffith$elm_ui$Internal$Model$getStyleName = function (style) {
	switch (style.$) {
		case 'Shadows':
			var name = style.a;
			return name;
		case 'Transparency':
			var name = style.a;
			var o = style.b;
			return name;
		case 'Style':
			var _class = style.a;
			return _class;
		case 'FontFamily':
			var name = style.a;
			return name;
		case 'FontSize':
			var i = style.a;
			return 'font-size-' + $elm$core$String$fromInt(i);
		case 'Single':
			var _class = style.a;
			return _class;
		case 'Colored':
			var _class = style.a;
			return _class;
		case 'SpacingStyle':
			var cls = style.a;
			var x = style.b;
			var y = style.c;
			return cls;
		case 'PaddingStyle':
			var cls = style.a;
			var top = style.b;
			var right = style.c;
			var bottom = style.d;
			var left = style.e;
			return cls;
		case 'BorderWidth':
			var cls = style.a;
			var top = style.b;
			var right = style.c;
			var bottom = style.d;
			var left = style.e;
			return cls;
		case 'GridTemplateStyle':
			var template = style.a;
			return 'grid-rows-' + (A2(
				$elm$core$String$join,
				'-',
				A2($elm$core$List$map, $mdgriffith$elm_ui$Internal$Model$lengthClassName, template.rows)) + ('-cols-' + (A2(
				$elm$core$String$join,
				'-',
				A2($elm$core$List$map, $mdgriffith$elm_ui$Internal$Model$lengthClassName, template.columns)) + ('-space-x-' + ($mdgriffith$elm_ui$Internal$Model$lengthClassName(template.spacing.a) + ('-space-y-' + $mdgriffith$elm_ui$Internal$Model$lengthClassName(template.spacing.b)))))));
		case 'GridPosition':
			var pos = style.a;
			return 'gp grid-pos-' + ($elm$core$String$fromInt(pos.row) + ('-' + ($elm$core$String$fromInt(pos.col) + ('-' + ($elm$core$String$fromInt(pos.width) + ('-' + $elm$core$String$fromInt(pos.height)))))));
		case 'PseudoSelector':
			var selector = style.a;
			var subStyle = style.b;
			var name = function () {
				switch (selector.$) {
					case 'Focus':
						return 'fs';
					case 'Hover':
						return 'hv';
					default:
						return 'act';
				}
			}();
			return A2(
				$elm$core$String$join,
				' ',
				A2(
					$elm$core$List$map,
					function (sty) {
						var _v1 = $mdgriffith$elm_ui$Internal$Model$getStyleName(sty);
						if (_v1 === '') {
							return '';
						} else {
							var styleName = _v1;
							return styleName + ('-' + name);
						}
					},
					subStyle));
		default:
			var x = style.a;
			return A2(
				$elm$core$Maybe$withDefault,
				'',
				$mdgriffith$elm_ui$Internal$Model$transformClass(x));
	}
};
var $elm$core$Dict$member = F2(
	function (key, dict) {
		var _v0 = A2($elm$core$Dict$get, key, dict);
		if (_v0.$ === 'Just') {
			return true;
		} else {
			return false;
		}
	});
var $elm$core$Set$member = F2(
	function (key, _v0) {
		var dict = _v0.a;
		return A2($elm$core$Dict$member, key, dict);
	});
var $mdgriffith$elm_ui$Internal$Model$reduceStyles = F2(
	function (style, nevermind) {
		var cache = nevermind.a;
		var existing = nevermind.b;
		var styleName = $mdgriffith$elm_ui$Internal$Model$getStyleName(style);
		return A2($elm$core$Set$member, styleName, cache) ? nevermind : _Utils_Tuple2(
			A2($elm$core$Set$insert, styleName, cache),
			A2($elm$core$List$cons, style, existing));
	});
var $mdgriffith$elm_ui$Internal$Model$Property = F2(
	function (a, b) {
		return {$: 'Property', a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Model$Style = F2(
	function (a, b) {
		return {$: 'Style', a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Style$dot = function (c) {
	return '.' + c;
};
var $mdgriffith$elm_ui$Internal$Model$formatColor = function (_v0) {
	var red = _v0.a;
	var green = _v0.b;
	var blue = _v0.c;
	var alpha = _v0.d;
	return 'rgba(' + ($elm$core$String$fromInt(
		$elm$core$Basics$round(red * 255)) + ((',' + $elm$core$String$fromInt(
		$elm$core$Basics$round(green * 255))) + ((',' + $elm$core$String$fromInt(
		$elm$core$Basics$round(blue * 255))) + (',' + ($elm$core$String$fromFloat(alpha) + ')')))));
};
var $mdgriffith$elm_ui$Internal$Model$formatBoxShadow = function (shadow) {
	return A2(
		$elm$core$String$join,
		' ',
		A2(
			$elm$core$List$filterMap,
			$elm$core$Basics$identity,
			_List_fromArray(
				[
					shadow.inset ? $elm$core$Maybe$Just('inset') : $elm$core$Maybe$Nothing,
					$elm$core$Maybe$Just(
					$elm$core$String$fromFloat(shadow.offset.a) + 'px'),
					$elm$core$Maybe$Just(
					$elm$core$String$fromFloat(shadow.offset.b) + 'px'),
					$elm$core$Maybe$Just(
					$elm$core$String$fromFloat(shadow.blur) + 'px'),
					$elm$core$Maybe$Just(
					$elm$core$String$fromFloat(shadow.size) + 'px'),
					$elm$core$Maybe$Just(
					$mdgriffith$elm_ui$Internal$Model$formatColor(shadow.color))
				])));
};
var $elm$core$Tuple$mapFirst = F2(
	function (func, _v0) {
		var x = _v0.a;
		var y = _v0.b;
		return _Utils_Tuple2(
			func(x),
			y);
	});
var $elm$core$Tuple$mapSecond = F2(
	function (func, _v0) {
		var x = _v0.a;
		var y = _v0.b;
		return _Utils_Tuple2(
			x,
			func(y));
	});
var $mdgriffith$elm_ui$Internal$Model$renderFocusStyle = function (focus) {
	return _List_fromArray(
		[
			A2(
			$mdgriffith$elm_ui$Internal$Model$Style,
			$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.focusedWithin) + ':focus-within',
			A2(
				$elm$core$List$filterMap,
				$elm$core$Basics$identity,
				_List_fromArray(
					[
						A2(
						$elm$core$Maybe$map,
						function (color) {
							return A2(
								$mdgriffith$elm_ui$Internal$Model$Property,
								'border-color',
								$mdgriffith$elm_ui$Internal$Model$formatColor(color));
						},
						focus.borderColor),
						A2(
						$elm$core$Maybe$map,
						function (color) {
							return A2(
								$mdgriffith$elm_ui$Internal$Model$Property,
								'background-color',
								$mdgriffith$elm_ui$Internal$Model$formatColor(color));
						},
						focus.backgroundColor),
						A2(
						$elm$core$Maybe$map,
						function (shadow) {
							return A2(
								$mdgriffith$elm_ui$Internal$Model$Property,
								'box-shadow',
								$mdgriffith$elm_ui$Internal$Model$formatBoxShadow(
									{
										blur: shadow.blur,
										color: shadow.color,
										inset: false,
										offset: A2(
											$elm$core$Tuple$mapSecond,
											$elm$core$Basics$toFloat,
											A2($elm$core$Tuple$mapFirst, $elm$core$Basics$toFloat, shadow.offset)),
										size: shadow.size
									}));
						},
						focus.shadow),
						$elm$core$Maybe$Just(
						A2($mdgriffith$elm_ui$Internal$Model$Property, 'outline', 'none'))
					]))),
			A2(
			$mdgriffith$elm_ui$Internal$Model$Style,
			($mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.any) + ':focus .focusable, ') + (($mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.any) + '.focusable:focus, ') + ('.ui-slide-bar:focus + ' + ($mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.any) + ' .focusable-thumb'))),
			A2(
				$elm$core$List$filterMap,
				$elm$core$Basics$identity,
				_List_fromArray(
					[
						A2(
						$elm$core$Maybe$map,
						function (color) {
							return A2(
								$mdgriffith$elm_ui$Internal$Model$Property,
								'border-color',
								$mdgriffith$elm_ui$Internal$Model$formatColor(color));
						},
						focus.borderColor),
						A2(
						$elm$core$Maybe$map,
						function (color) {
							return A2(
								$mdgriffith$elm_ui$Internal$Model$Property,
								'background-color',
								$mdgriffith$elm_ui$Internal$Model$formatColor(color));
						},
						focus.backgroundColor),
						A2(
						$elm$core$Maybe$map,
						function (shadow) {
							return A2(
								$mdgriffith$elm_ui$Internal$Model$Property,
								'box-shadow',
								$mdgriffith$elm_ui$Internal$Model$formatBoxShadow(
									{
										blur: shadow.blur,
										color: shadow.color,
										inset: false,
										offset: A2(
											$elm$core$Tuple$mapSecond,
											$elm$core$Basics$toFloat,
											A2($elm$core$Tuple$mapFirst, $elm$core$Basics$toFloat, shadow.offset)),
										size: shadow.size
									}));
						},
						focus.shadow),
						$elm$core$Maybe$Just(
						A2($mdgriffith$elm_ui$Internal$Model$Property, 'outline', 'none'))
					])))
		]);
};
var $elm$virtual_dom$VirtualDom$property = F2(
	function (key, value) {
		return A2(
			_VirtualDom_property,
			_VirtualDom_noInnerHtmlOrFormAction(key),
			_VirtualDom_noJavaScriptOrHtmlUri(value));
	});
var $mdgriffith$elm_ui$Internal$Style$AllChildren = F2(
	function (a, b) {
		return {$: 'AllChildren', a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Style$Batch = function (a) {
	return {$: 'Batch', a: a};
};
var $mdgriffith$elm_ui$Internal$Style$Child = F2(
	function (a, b) {
		return {$: 'Child', a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Style$Class = F2(
	function (a, b) {
		return {$: 'Class', a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Style$Descriptor = F2(
	function (a, b) {
		return {$: 'Descriptor', a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Style$Left = {$: 'Left'};
var $mdgriffith$elm_ui$Internal$Style$Prop = F2(
	function (a, b) {
		return {$: 'Prop', a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Style$Right = {$: 'Right'};
var $mdgriffith$elm_ui$Internal$Style$Self = function (a) {
	return {$: 'Self', a: a};
};
var $mdgriffith$elm_ui$Internal$Style$Supports = F2(
	function (a, b) {
		return {$: 'Supports', a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Style$Content = function (a) {
	return {$: 'Content', a: a};
};
var $mdgriffith$elm_ui$Internal$Style$Bottom = {$: 'Bottom'};
var $mdgriffith$elm_ui$Internal$Style$CenterX = {$: 'CenterX'};
var $mdgriffith$elm_ui$Internal$Style$CenterY = {$: 'CenterY'};
var $mdgriffith$elm_ui$Internal$Style$Top = {$: 'Top'};
var $mdgriffith$elm_ui$Internal$Style$alignments = _List_fromArray(
	[$mdgriffith$elm_ui$Internal$Style$Top, $mdgriffith$elm_ui$Internal$Style$Bottom, $mdgriffith$elm_ui$Internal$Style$Right, $mdgriffith$elm_ui$Internal$Style$Left, $mdgriffith$elm_ui$Internal$Style$CenterX, $mdgriffith$elm_ui$Internal$Style$CenterY]);
var $mdgriffith$elm_ui$Internal$Style$contentName = function (desc) {
	switch (desc.a.$) {
		case 'Top':
			var _v1 = desc.a;
			return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.contentTop);
		case 'Bottom':
			var _v2 = desc.a;
			return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.contentBottom);
		case 'Right':
			var _v3 = desc.a;
			return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.contentRight);
		case 'Left':
			var _v4 = desc.a;
			return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.contentLeft);
		case 'CenterX':
			var _v5 = desc.a;
			return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.contentCenterX);
		default:
			var _v6 = desc.a;
			return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.contentCenterY);
	}
};
var $mdgriffith$elm_ui$Internal$Style$selfName = function (desc) {
	switch (desc.a.$) {
		case 'Top':
			var _v1 = desc.a;
			return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.alignTop);
		case 'Bottom':
			var _v2 = desc.a;
			return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.alignBottom);
		case 'Right':
			var _v3 = desc.a;
			return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.alignRight);
		case 'Left':
			var _v4 = desc.a;
			return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.alignLeft);
		case 'CenterX':
			var _v5 = desc.a;
			return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.alignCenterX);
		default:
			var _v6 = desc.a;
			return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.alignCenterY);
	}
};
var $mdgriffith$elm_ui$Internal$Style$describeAlignment = function (values) {
	var createDescription = function (alignment) {
		var _v0 = values(alignment);
		var content = _v0.a;
		var indiv = _v0.b;
		return _List_fromArray(
			[
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$contentName(
					$mdgriffith$elm_ui$Internal$Style$Content(alignment)),
				content),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Child,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.any),
				_List_fromArray(
					[
						A2(
						$mdgriffith$elm_ui$Internal$Style$Descriptor,
						$mdgriffith$elm_ui$Internal$Style$selfName(
							$mdgriffith$elm_ui$Internal$Style$Self(alignment)),
						indiv)
					]))
			]);
	};
	return $mdgriffith$elm_ui$Internal$Style$Batch(
		A2($elm$core$List$concatMap, createDescription, $mdgriffith$elm_ui$Internal$Style$alignments));
};
var $mdgriffith$elm_ui$Internal$Style$elDescription = _List_fromArray(
	[
		A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'flex'),
		A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-direction', 'column'),
		A2($mdgriffith$elm_ui$Internal$Style$Prop, 'white-space', 'pre'),
		A2(
		$mdgriffith$elm_ui$Internal$Style$Descriptor,
		$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.hasBehind),
		_List_fromArray(
			[
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'z-index', '0'),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Child,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.behind),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'z-index', '-1')
					]))
			])),
		A2(
		$mdgriffith$elm_ui$Internal$Style$Descriptor,
		$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.seButton),
		_List_fromArray(
			[
				A2(
				$mdgriffith$elm_ui$Internal$Style$Child,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.text),
				_List_fromArray(
					[
						A2(
						$mdgriffith$elm_ui$Internal$Style$Descriptor,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.heightFill),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '0')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Descriptor,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.widthFill),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'auto !important')
							]))
					]))
			])),
		A2(
		$mdgriffith$elm_ui$Internal$Style$Child,
		$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.heightContent),
		_List_fromArray(
			[
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'height', 'auto')
			])),
		A2(
		$mdgriffith$elm_ui$Internal$Style$Child,
		$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.heightFill),
		_List_fromArray(
			[
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '100000')
			])),
		A2(
		$mdgriffith$elm_ui$Internal$Style$Child,
		$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.widthFill),
		_List_fromArray(
			[
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%')
			])),
		A2(
		$mdgriffith$elm_ui$Internal$Style$Child,
		$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.widthFillPortion),
		_List_fromArray(
			[
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%')
			])),
		A2(
		$mdgriffith$elm_ui$Internal$Style$Child,
		$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.widthContent),
		_List_fromArray(
			[
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'flex-start')
			])),
		$mdgriffith$elm_ui$Internal$Style$describeAlignment(
		function (alignment) {
			switch (alignment.$) {
				case 'Top':
					return _Utils_Tuple2(
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'justify-content', 'flex-start')
							]),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-bottom', 'auto !important'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-top', '0 !important')
							]));
				case 'Bottom':
					return _Utils_Tuple2(
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'justify-content', 'flex-end')
							]),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-top', 'auto !important'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-bottom', '0 !important')
							]));
				case 'Right':
					return _Utils_Tuple2(
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-items', 'flex-end')
							]),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'flex-end')
							]));
				case 'Left':
					return _Utils_Tuple2(
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-items', 'flex-start')
							]),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'flex-start')
							]));
				case 'CenterX':
					return _Utils_Tuple2(
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-items', 'center')
							]),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'center')
							]));
				default:
					return _Utils_Tuple2(
						_List_fromArray(
							[
								A2(
								$mdgriffith$elm_ui$Internal$Style$Child,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.any),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-top', 'auto'),
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-bottom', 'auto')
									]))
							]),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-top', 'auto !important'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-bottom', 'auto !important')
							]));
			}
		})
	]);
var $mdgriffith$elm_ui$Internal$Style$gridAlignments = function (values) {
	var createDescription = function (alignment) {
		return _List_fromArray(
			[
				A2(
				$mdgriffith$elm_ui$Internal$Style$Child,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.any),
				_List_fromArray(
					[
						A2(
						$mdgriffith$elm_ui$Internal$Style$Descriptor,
						$mdgriffith$elm_ui$Internal$Style$selfName(
							$mdgriffith$elm_ui$Internal$Style$Self(alignment)),
						values(alignment))
					]))
			]);
	};
	return $mdgriffith$elm_ui$Internal$Style$Batch(
		A2($elm$core$List$concatMap, createDescription, $mdgriffith$elm_ui$Internal$Style$alignments));
};
var $mdgriffith$elm_ui$Internal$Style$Above = {$: 'Above'};
var $mdgriffith$elm_ui$Internal$Style$Behind = {$: 'Behind'};
var $mdgriffith$elm_ui$Internal$Style$Below = {$: 'Below'};
var $mdgriffith$elm_ui$Internal$Style$OnLeft = {$: 'OnLeft'};
var $mdgriffith$elm_ui$Internal$Style$OnRight = {$: 'OnRight'};
var $mdgriffith$elm_ui$Internal$Style$Within = {$: 'Within'};
var $mdgriffith$elm_ui$Internal$Style$locations = function () {
	var loc = $mdgriffith$elm_ui$Internal$Style$Above;
	var _v0 = function () {
		switch (loc.$) {
			case 'Above':
				return _Utils_Tuple0;
			case 'Below':
				return _Utils_Tuple0;
			case 'OnRight':
				return _Utils_Tuple0;
			case 'OnLeft':
				return _Utils_Tuple0;
			case 'Within':
				return _Utils_Tuple0;
			default:
				return _Utils_Tuple0;
		}
	}();
	return _List_fromArray(
		[$mdgriffith$elm_ui$Internal$Style$Above, $mdgriffith$elm_ui$Internal$Style$Below, $mdgriffith$elm_ui$Internal$Style$OnRight, $mdgriffith$elm_ui$Internal$Style$OnLeft, $mdgriffith$elm_ui$Internal$Style$Within, $mdgriffith$elm_ui$Internal$Style$Behind]);
}();
var $mdgriffith$elm_ui$Internal$Style$baseSheet = _List_fromArray(
	[
		A2(
		$mdgriffith$elm_ui$Internal$Style$Class,
		'html,body',
		_List_fromArray(
			[
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'height', '100%'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'padding', '0'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin', '0')
			])),
		A2(
		$mdgriffith$elm_ui$Internal$Style$Class,
		_Utils_ap(
			$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.any),
			_Utils_ap(
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.single),
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.imageContainer))),
		_List_fromArray(
			[
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'block'),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.heightFill),
				_List_fromArray(
					[
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						'img',
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'max-height', '100%'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'object-fit', 'cover')
							]))
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.widthFill),
				_List_fromArray(
					[
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						'img',
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'max-width', '100%'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'object-fit', 'cover')
							]))
					]))
			])),
		A2(
		$mdgriffith$elm_ui$Internal$Style$Class,
		$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.any) + ':focus',
		_List_fromArray(
			[
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'outline', 'none')
			])),
		A2(
		$mdgriffith$elm_ui$Internal$Style$Class,
		$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.root),
		_List_fromArray(
			[
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'height', 'auto'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'min-height', '100%'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'z-index', '0'),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				_Utils_ap(
					$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.any),
					$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.heightFill)),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'height', '100%'),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.heightFill),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'height', '100%')
							]))
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Child,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.inFront),
				_List_fromArray(
					[
						A2(
						$mdgriffith$elm_ui$Internal$Style$Descriptor,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.nearby),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'position', 'fixed'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'z-index', '20')
							]))
					]))
			])),
		A2(
		$mdgriffith$elm_ui$Internal$Style$Class,
		$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.nearby),
		_List_fromArray(
			[
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'position', 'relative'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'border', 'none'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'flex'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-direction', 'row'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-basis', 'auto'),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.single),
				$mdgriffith$elm_ui$Internal$Style$elDescription),
				$mdgriffith$elm_ui$Internal$Style$Batch(
				function (fn) {
					return A2($elm$core$List$map, fn, $mdgriffith$elm_ui$Internal$Style$locations);
				}(
					function (loc) {
						switch (loc.$) {
							case 'Above':
								return A2(
									$mdgriffith$elm_ui$Internal$Style$Descriptor,
									$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.above),
									_List_fromArray(
										[
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'position', 'absolute'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'bottom', '100%'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'left', '0'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'z-index', '20'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin', '0 !important'),
											A2(
											$mdgriffith$elm_ui$Internal$Style$Child,
											$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.heightFill),
											_List_fromArray(
												[
													A2($mdgriffith$elm_ui$Internal$Style$Prop, 'height', 'auto')
												])),
											A2(
											$mdgriffith$elm_ui$Internal$Style$Child,
											$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.widthFill),
											_List_fromArray(
												[
													A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%')
												])),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'none'),
											A2(
											$mdgriffith$elm_ui$Internal$Style$Child,
											'*',
											_List_fromArray(
												[
													A2($mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'auto')
												]))
										]));
							case 'Below':
								return A2(
									$mdgriffith$elm_ui$Internal$Style$Descriptor,
									$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.below),
									_List_fromArray(
										[
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'position', 'absolute'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'bottom', '0'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'left', '0'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'height', '0'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'z-index', '20'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin', '0 !important'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'none'),
											A2(
											$mdgriffith$elm_ui$Internal$Style$Child,
											'*',
											_List_fromArray(
												[
													A2($mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'auto')
												])),
											A2(
											$mdgriffith$elm_ui$Internal$Style$Child,
											$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.heightFill),
											_List_fromArray(
												[
													A2($mdgriffith$elm_ui$Internal$Style$Prop, 'height', 'auto')
												]))
										]));
							case 'OnRight':
								return A2(
									$mdgriffith$elm_ui$Internal$Style$Descriptor,
									$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.onRight),
									_List_fromArray(
										[
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'position', 'absolute'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'left', '100%'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'top', '0'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'height', '100%'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin', '0 !important'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'z-index', '20'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'none'),
											A2(
											$mdgriffith$elm_ui$Internal$Style$Child,
											'*',
											_List_fromArray(
												[
													A2($mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'auto')
												]))
										]));
							case 'OnLeft':
								return A2(
									$mdgriffith$elm_ui$Internal$Style$Descriptor,
									$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.onLeft),
									_List_fromArray(
										[
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'position', 'absolute'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'right', '100%'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'top', '0'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'height', '100%'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin', '0 !important'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'z-index', '20'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'none'),
											A2(
											$mdgriffith$elm_ui$Internal$Style$Child,
											'*',
											_List_fromArray(
												[
													A2($mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'auto')
												]))
										]));
							case 'Within':
								return A2(
									$mdgriffith$elm_ui$Internal$Style$Descriptor,
									$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.inFront),
									_List_fromArray(
										[
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'position', 'absolute'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'height', '100%'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'left', '0'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'top', '0'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin', '0 !important'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'none'),
											A2(
											$mdgriffith$elm_ui$Internal$Style$Child,
											'*',
											_List_fromArray(
												[
													A2($mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'auto')
												]))
										]));
							default:
								return A2(
									$mdgriffith$elm_ui$Internal$Style$Descriptor,
									$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.behind),
									_List_fromArray(
										[
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'position', 'absolute'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'height', '100%'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'left', '0'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'top', '0'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin', '0 !important'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'z-index', '0'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'none'),
											A2(
											$mdgriffith$elm_ui$Internal$Style$Child,
											'*',
											_List_fromArray(
												[
													A2($mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'auto')
												]))
										]));
						}
					}))
			])),
		A2(
		$mdgriffith$elm_ui$Internal$Style$Class,
		$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.any),
		_List_fromArray(
			[
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'position', 'relative'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'border', 'none'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-shrink', '0'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'flex'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-direction', 'row'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-basis', 'auto'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'resize', 'none'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-feature-settings', 'inherit'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'box-sizing', 'border-box'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin', '0'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'padding', '0'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'border-width', '0'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'border-style', 'solid'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-size', 'inherit'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'color', 'inherit'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-family', 'inherit'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'line-height', '1'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-weight', 'inherit'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-decoration', 'none'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-style', 'inherit'),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.wrapped),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-wrap', 'wrap')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.noTextSelection),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, '-moz-user-select', 'none'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, '-webkit-user-select', 'none'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, '-ms-user-select', 'none'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'user-select', 'none')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.cursorPointer),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'cursor', 'pointer')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.cursorText),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'cursor', 'text')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.passPointerEvents),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'none !important')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.capturePointerEvents),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'auto !important')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.transparent),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'opacity', '0')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.opaque),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'opacity', '1')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot(
					_Utils_ap($mdgriffith$elm_ui$Internal$Style$classes.hover, $mdgriffith$elm_ui$Internal$Style$classes.transparent)) + ':hover',
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'opacity', '0')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot(
					_Utils_ap($mdgriffith$elm_ui$Internal$Style$classes.hover, $mdgriffith$elm_ui$Internal$Style$classes.opaque)) + ':hover',
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'opacity', '1')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot(
					_Utils_ap($mdgriffith$elm_ui$Internal$Style$classes.focus, $mdgriffith$elm_ui$Internal$Style$classes.transparent)) + ':focus',
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'opacity', '0')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot(
					_Utils_ap($mdgriffith$elm_ui$Internal$Style$classes.focus, $mdgriffith$elm_ui$Internal$Style$classes.opaque)) + ':focus',
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'opacity', '1')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot(
					_Utils_ap($mdgriffith$elm_ui$Internal$Style$classes.active, $mdgriffith$elm_ui$Internal$Style$classes.transparent)) + ':active',
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'opacity', '0')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot(
					_Utils_ap($mdgriffith$elm_ui$Internal$Style$classes.active, $mdgriffith$elm_ui$Internal$Style$classes.opaque)) + ':active',
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'opacity', '1')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.transition),
				_List_fromArray(
					[
						A2(
						$mdgriffith$elm_ui$Internal$Style$Prop,
						'transition',
						A2(
							$elm$core$String$join,
							', ',
							A2(
								$elm$core$List$map,
								function (x) {
									return x + ' 160ms';
								},
								_List_fromArray(
									['transform', 'opacity', 'filter', 'background-color', 'color', 'font-size']))))
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.scrollbars),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'overflow', 'auto'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-shrink', '1')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.scrollbarsX),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'overflow-x', 'auto'),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Descriptor,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.row),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-shrink', '1')
							]))
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.scrollbarsY),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'overflow-y', 'auto'),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Descriptor,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.column),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-shrink', '1')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Descriptor,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.single),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-shrink', '1')
							]))
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.clip),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'overflow', 'hidden')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.clipX),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'overflow-x', 'hidden')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.clipY),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'overflow-y', 'hidden')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.widthContent),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', 'auto')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.borderNone),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'border-width', '0')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.borderDashed),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'border-style', 'dashed')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.borderDotted),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'border-style', 'dotted')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.borderSolid),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'border-style', 'solid')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.text),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'white-space', 'pre'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'inline-block')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.inputText),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'line-height', '1.05'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'background', 'transparent'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-align', 'inherit')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.single),
				$mdgriffith$elm_ui$Internal$Style$elDescription),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.row),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'flex'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-direction', 'row'),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.any),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-basis', '0%'),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Descriptor,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.widthExact),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-basis', 'auto')
									])),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Descriptor,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.link),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-basis', 'auto')
									]))
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.heightFill),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'stretch !important')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.heightFillPortion),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'stretch !important')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.widthFill),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '100000')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.container),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '0'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-basis', 'auto'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'stretch')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						'u:first-of-type.' + $mdgriffith$elm_ui$Internal$Style$classes.alignContainerRight,
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '1')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						's:first-of-type.' + $mdgriffith$elm_ui$Internal$Style$classes.alignContainerCenterX,
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '1'),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Child,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.alignCenterX),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-left', 'auto !important')
									]))
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						's:last-of-type.' + $mdgriffith$elm_ui$Internal$Style$classes.alignContainerCenterX,
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '1'),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Child,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.alignCenterX),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-right', 'auto !important')
									]))
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						's:only-of-type.' + $mdgriffith$elm_ui$Internal$Style$classes.alignContainerCenterX,
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '1'),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Child,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.alignCenterY),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-top', 'auto !important'),
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-bottom', 'auto !important')
									]))
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						's:last-of-type.' + ($mdgriffith$elm_ui$Internal$Style$classes.alignContainerCenterX + ' ~ u'),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '0')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						'u:first-of-type.' + ($mdgriffith$elm_ui$Internal$Style$classes.alignContainerRight + (' ~ s.' + $mdgriffith$elm_ui$Internal$Style$classes.alignContainerCenterX)),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '0')
							])),
						$mdgriffith$elm_ui$Internal$Style$describeAlignment(
						function (alignment) {
							switch (alignment.$) {
								case 'Top':
									return _Utils_Tuple2(
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-items', 'flex-start')
											]),
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'flex-start')
											]));
								case 'Bottom':
									return _Utils_Tuple2(
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-items', 'flex-end')
											]),
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'flex-end')
											]));
								case 'Right':
									return _Utils_Tuple2(
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'justify-content', 'flex-end')
											]),
										_List_Nil);
								case 'Left':
									return _Utils_Tuple2(
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'justify-content', 'flex-start')
											]),
										_List_Nil);
								case 'CenterX':
									return _Utils_Tuple2(
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'justify-content', 'center')
											]),
										_List_Nil);
								default:
									return _Utils_Tuple2(
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-items', 'center')
											]),
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'center')
											]));
							}
						}),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Descriptor,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.spaceEvenly),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'justify-content', 'space-between')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Descriptor,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.inputLabel),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-items', 'baseline')
							]))
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.column),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'flex'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-direction', 'column'),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.any),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-basis', '0px'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'min-height', 'min-content'),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Descriptor,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.heightExact),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-basis', 'auto')
									]))
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.heightFill),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '100000')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.widthFill),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.widthFillPortion),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.widthContent),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'flex-start')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						'u:first-of-type.' + $mdgriffith$elm_ui$Internal$Style$classes.alignContainerBottom,
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '1')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						's:first-of-type.' + $mdgriffith$elm_ui$Internal$Style$classes.alignContainerCenterY,
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '1'),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Child,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.alignCenterY),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-top', 'auto !important'),
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-bottom', '0 !important')
									]))
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						's:last-of-type.' + $mdgriffith$elm_ui$Internal$Style$classes.alignContainerCenterY,
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '1'),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Child,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.alignCenterY),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-bottom', 'auto !important'),
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-top', '0 !important')
									]))
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						's:only-of-type.' + $mdgriffith$elm_ui$Internal$Style$classes.alignContainerCenterY,
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '1'),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Child,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.alignCenterY),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-top', 'auto !important'),
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-bottom', 'auto !important')
									]))
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						's:last-of-type.' + ($mdgriffith$elm_ui$Internal$Style$classes.alignContainerCenterY + ' ~ u'),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '0')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						'u:first-of-type.' + ($mdgriffith$elm_ui$Internal$Style$classes.alignContainerBottom + (' ~ s.' + $mdgriffith$elm_ui$Internal$Style$classes.alignContainerCenterY)),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '0')
							])),
						$mdgriffith$elm_ui$Internal$Style$describeAlignment(
						function (alignment) {
							switch (alignment.$) {
								case 'Top':
									return _Utils_Tuple2(
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'justify-content', 'flex-start')
											]),
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-bottom', 'auto')
											]));
								case 'Bottom':
									return _Utils_Tuple2(
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'justify-content', 'flex-end')
											]),
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-top', 'auto')
											]));
								case 'Right':
									return _Utils_Tuple2(
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-items', 'flex-end')
											]),
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'flex-end')
											]));
								case 'Left':
									return _Utils_Tuple2(
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-items', 'flex-start')
											]),
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'flex-start')
											]));
								case 'CenterX':
									return _Utils_Tuple2(
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-items', 'center')
											]),
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'center')
											]));
								default:
									return _Utils_Tuple2(
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'justify-content', 'center')
											]),
										_List_Nil);
							}
						}),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.container),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '0'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-basis', 'auto'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'stretch !important')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Descriptor,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.spaceEvenly),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'justify-content', 'space-between')
							]))
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.grid),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', '-ms-grid'),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						'.gp',
						_List_fromArray(
							[
								A2(
								$mdgriffith$elm_ui$Internal$Style$Child,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.any),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%')
									]))
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Supports,
						_Utils_Tuple2('display', 'grid'),
						_List_fromArray(
							[
								_Utils_Tuple2('display', 'grid')
							])),
						$mdgriffith$elm_ui$Internal$Style$gridAlignments(
						function (alignment) {
							switch (alignment.$) {
								case 'Top':
									return _List_fromArray(
										[
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'justify-content', 'flex-start')
										]);
								case 'Bottom':
									return _List_fromArray(
										[
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'justify-content', 'flex-end')
										]);
								case 'Right':
									return _List_fromArray(
										[
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-items', 'flex-end')
										]);
								case 'Left':
									return _List_fromArray(
										[
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-items', 'flex-start')
										]);
								case 'CenterX':
									return _List_fromArray(
										[
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-items', 'center')
										]);
								default:
									return _List_fromArray(
										[
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'justify-content', 'center')
										]);
							}
						})
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.page),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'block'),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.any + ':first-child'),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin', '0 !important')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot(
							$mdgriffith$elm_ui$Internal$Style$classes.any + ($mdgriffith$elm_ui$Internal$Style$selfName(
								$mdgriffith$elm_ui$Internal$Style$Self($mdgriffith$elm_ui$Internal$Style$Left)) + (':first-child + .' + $mdgriffith$elm_ui$Internal$Style$classes.any))),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin', '0 !important')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot(
							$mdgriffith$elm_ui$Internal$Style$classes.any + ($mdgriffith$elm_ui$Internal$Style$selfName(
								$mdgriffith$elm_ui$Internal$Style$Self($mdgriffith$elm_ui$Internal$Style$Right)) + (':first-child + .' + $mdgriffith$elm_ui$Internal$Style$classes.any))),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin', '0 !important')
							])),
						$mdgriffith$elm_ui$Internal$Style$describeAlignment(
						function (alignment) {
							switch (alignment.$) {
								case 'Top':
									return _Utils_Tuple2(_List_Nil, _List_Nil);
								case 'Bottom':
									return _Utils_Tuple2(_List_Nil, _List_Nil);
								case 'Right':
									return _Utils_Tuple2(
										_List_Nil,
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'float', 'right'),
												A2(
												$mdgriffith$elm_ui$Internal$Style$Descriptor,
												'::after',
												_List_fromArray(
													[
														A2($mdgriffith$elm_ui$Internal$Style$Prop, 'content', '\"\"'),
														A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'table'),
														A2($mdgriffith$elm_ui$Internal$Style$Prop, 'clear', 'both')
													]))
											]));
								case 'Left':
									return _Utils_Tuple2(
										_List_Nil,
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'float', 'left'),
												A2(
												$mdgriffith$elm_ui$Internal$Style$Descriptor,
												'::after',
												_List_fromArray(
													[
														A2($mdgriffith$elm_ui$Internal$Style$Prop, 'content', '\"\"'),
														A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'table'),
														A2($mdgriffith$elm_ui$Internal$Style$Prop, 'clear', 'both')
													]))
											]));
								case 'CenterX':
									return _Utils_Tuple2(_List_Nil, _List_Nil);
								default:
									return _Utils_Tuple2(_List_Nil, _List_Nil);
							}
						})
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.inputMultiline),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'white-space', 'pre-wrap !important'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'height', '100%'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'background-color', 'transparent')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.inputMultilineWrapper),
				_List_fromArray(
					[
						A2(
						$mdgriffith$elm_ui$Internal$Style$Descriptor,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.single),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-basis', 'auto')
							]))
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.inputMultilineParent),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'white-space', 'pre-wrap !important'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'cursor', 'text'),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.inputMultilineFiller),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'white-space', 'pre-wrap !important'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'color', 'transparent')
							]))
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.paragraph),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'block'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'white-space', 'normal'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'overflow-wrap', 'break-word'),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Descriptor,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.hasBehind),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'z-index', '0'),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Child,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.behind),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'z-index', '-1')
									]))
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$AllChildren,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.text),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'inline'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'white-space', 'normal')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$AllChildren,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.paragraph),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'inline'),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Descriptor,
								'::after',
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'content', 'none')
									])),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Descriptor,
								'::before',
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'content', 'none')
									]))
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$AllChildren,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.single),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'inline'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'white-space', 'normal'),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Descriptor,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.widthExact),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'inline-block')
									])),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Descriptor,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.inFront),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'flex')
									])),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Descriptor,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.behind),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'flex')
									])),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Descriptor,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.above),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'flex')
									])),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Descriptor,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.below),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'flex')
									])),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Descriptor,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.onRight),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'flex')
									])),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Descriptor,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.onLeft),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'flex')
									])),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Child,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.text),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'inline'),
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'white-space', 'normal')
									]))
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.row),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'inline')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.column),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'inline-flex')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.grid),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'inline-grid')
							])),
						$mdgriffith$elm_ui$Internal$Style$describeAlignment(
						function (alignment) {
							switch (alignment.$) {
								case 'Top':
									return _Utils_Tuple2(_List_Nil, _List_Nil);
								case 'Bottom':
									return _Utils_Tuple2(_List_Nil, _List_Nil);
								case 'Right':
									return _Utils_Tuple2(
										_List_Nil,
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'float', 'right')
											]));
								case 'Left':
									return _Utils_Tuple2(
										_List_Nil,
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'float', 'left')
											]));
								case 'CenterX':
									return _Utils_Tuple2(_List_Nil, _List_Nil);
								default:
									return _Utils_Tuple2(_List_Nil, _List_Nil);
							}
						})
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				'.hidden',
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'none')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.textThin),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-weight', '100')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.textExtraLight),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-weight', '200')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.textLight),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-weight', '300')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.textNormalWeight),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-weight', '400')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.textMedium),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-weight', '500')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.textSemiBold),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-weight', '600')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.bold),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-weight', '700')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.textExtraBold),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-weight', '800')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.textHeavy),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-weight', '900')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.italic),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-style', 'italic')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.strike),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-decoration', 'line-through')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.underline),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-decoration', 'underline'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-decoration-skip-ink', 'auto'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-decoration-skip', 'ink')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				_Utils_ap(
					$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.underline),
					$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.strike)),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-decoration', 'line-through underline'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-decoration-skip-ink', 'auto'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-decoration-skip', 'ink')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.textUnitalicized),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-style', 'normal')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.textJustify),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-align', 'justify')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.textJustifyAll),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-align', 'justify-all')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.textCenter),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-align', 'center')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.textRight),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-align', 'right')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.textLeft),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-align', 'left')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				'.modal',
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'position', 'fixed'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'left', '0'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'top', '0'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'height', '100%'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'none')
					]))
			]))
	]);
var $mdgriffith$elm_ui$Internal$Style$fontVariant = function (_var) {
	return _List_fromArray(
		[
			A2(
			$mdgriffith$elm_ui$Internal$Style$Class,
			'.v-' + _var,
			_List_fromArray(
				[
					A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-feature-settings', '\"' + (_var + '\"'))
				])),
			A2(
			$mdgriffith$elm_ui$Internal$Style$Class,
			'.v-' + (_var + '-off'),
			_List_fromArray(
				[
					A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-feature-settings', '\"' + (_var + '\" 0'))
				]))
		]);
};
var $mdgriffith$elm_ui$Internal$Style$commonValues = $elm$core$List$concat(
	_List_fromArray(
		[
			A2(
			$elm$core$List$map,
			function (x) {
				return A2(
					$mdgriffith$elm_ui$Internal$Style$Class,
					'.border-' + $elm$core$String$fromInt(x),
					_List_fromArray(
						[
							A2(
							$mdgriffith$elm_ui$Internal$Style$Prop,
							'border-width',
							$elm$core$String$fromInt(x) + 'px')
						]));
			},
			A2($elm$core$List$range, 0, 6)),
			A2(
			$elm$core$List$map,
			function (i) {
				return A2(
					$mdgriffith$elm_ui$Internal$Style$Class,
					'.font-size-' + $elm$core$String$fromInt(i),
					_List_fromArray(
						[
							A2(
							$mdgriffith$elm_ui$Internal$Style$Prop,
							'font-size',
							$elm$core$String$fromInt(i) + 'px')
						]));
			},
			A2($elm$core$List$range, 8, 32)),
			A2(
			$elm$core$List$map,
			function (i) {
				return A2(
					$mdgriffith$elm_ui$Internal$Style$Class,
					'.p-' + $elm$core$String$fromInt(i),
					_List_fromArray(
						[
							A2(
							$mdgriffith$elm_ui$Internal$Style$Prop,
							'padding',
							$elm$core$String$fromInt(i) + 'px')
						]));
			},
			A2($elm$core$List$range, 0, 24)),
			_List_fromArray(
			[
				A2(
				$mdgriffith$elm_ui$Internal$Style$Class,
				'.v-smcp',
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-variant', 'small-caps')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Class,
				'.v-smcp-off',
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-variant', 'normal')
					]))
			]),
			$mdgriffith$elm_ui$Internal$Style$fontVariant('zero'),
			$mdgriffith$elm_ui$Internal$Style$fontVariant('onum'),
			$mdgriffith$elm_ui$Internal$Style$fontVariant('liga'),
			$mdgriffith$elm_ui$Internal$Style$fontVariant('dlig'),
			$mdgriffith$elm_ui$Internal$Style$fontVariant('ordn'),
			$mdgriffith$elm_ui$Internal$Style$fontVariant('tnum'),
			$mdgriffith$elm_ui$Internal$Style$fontVariant('afrc'),
			$mdgriffith$elm_ui$Internal$Style$fontVariant('frac')
		]));
var $mdgriffith$elm_ui$Internal$Style$explainer = '\n.explain {\n    border: 6px solid rgb(174, 121, 15) !important;\n}\n.explain > .' + ($mdgriffith$elm_ui$Internal$Style$classes.any + (' {\n    border: 4px dashed rgb(0, 151, 167) !important;\n}\n\n.ctr {\n    border: none !important;\n}\n.explain > .ctr > .' + ($mdgriffith$elm_ui$Internal$Style$classes.any + ' {\n    border: 4px dashed rgb(0, 151, 167) !important;\n}\n\n')));
var $mdgriffith$elm_ui$Internal$Style$inputTextReset = '\ninput[type="search"],\ninput[type="search"]::-webkit-search-decoration,\ninput[type="search"]::-webkit-search-cancel-button,\ninput[type="search"]::-webkit-search-results-button,\ninput[type="search"]::-webkit-search-results-decoration {\n  -webkit-appearance:none;\n}\n';
var $mdgriffith$elm_ui$Internal$Style$sliderReset = '\ninput[type=range] {\n  -webkit-appearance: none; \n  background: transparent;\n  position:absolute;\n  left:0;\n  top:0;\n  z-index:10;\n  width: 100%;\n  outline: dashed 1px;\n  height: 100%;\n  opacity: 0;\n}\n';
var $mdgriffith$elm_ui$Internal$Style$thumbReset = '\ninput[type=range]::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    opacity: 0.5;\n    width: 80px;\n    height: 80px;\n    background-color: black;\n    border:none;\n    border-radius: 5px;\n}\ninput[type=range]::-moz-range-thumb {\n    opacity: 0.5;\n    width: 80px;\n    height: 80px;\n    background-color: black;\n    border:none;\n    border-radius: 5px;\n}\ninput[type=range]::-ms-thumb {\n    opacity: 0.5;\n    width: 80px;\n    height: 80px;\n    background-color: black;\n    border:none;\n    border-radius: 5px;\n}\ninput[type=range][orient=vertical]{\n    writing-mode: bt-lr; /* IE */\n    -webkit-appearance: slider-vertical;  /* WebKit */\n}\n';
var $mdgriffith$elm_ui$Internal$Style$trackReset = '\ninput[type=range]::-moz-range-track {\n    background: transparent;\n    cursor: pointer;\n}\ninput[type=range]::-ms-track {\n    background: transparent;\n    cursor: pointer;\n}\ninput[type=range]::-webkit-slider-runnable-track {\n    background: transparent;\n    cursor: pointer;\n}\n';
var $mdgriffith$elm_ui$Internal$Style$overrides = '@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {' + ($mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.any) + ($mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.row) + (' > ' + ($mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.any) + (' { flex-basis: auto !important; } ' + ($mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.any) + ($mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.row) + (' > ' + ($mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.any) + ($mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.container) + (' { flex-basis: auto !important; }}' + ($mdgriffith$elm_ui$Internal$Style$inputTextReset + ($mdgriffith$elm_ui$Internal$Style$sliderReset + ($mdgriffith$elm_ui$Internal$Style$trackReset + ($mdgriffith$elm_ui$Internal$Style$thumbReset + $mdgriffith$elm_ui$Internal$Style$explainer)))))))))))))));
var $elm$core$String$concat = function (strings) {
	return A2($elm$core$String$join, '', strings);
};
var $mdgriffith$elm_ui$Internal$Style$Intermediate = function (a) {
	return {$: 'Intermediate', a: a};
};
var $mdgriffith$elm_ui$Internal$Style$emptyIntermediate = F2(
	function (selector, closing) {
		return $mdgriffith$elm_ui$Internal$Style$Intermediate(
			{closing: closing, others: _List_Nil, props: _List_Nil, selector: selector});
	});
var $mdgriffith$elm_ui$Internal$Style$renderRules = F2(
	function (_v0, rulesToRender) {
		var parent = _v0.a;
		var generateIntermediates = F2(
			function (rule, rendered) {
				switch (rule.$) {
					case 'Prop':
						var name = rule.a;
						var val = rule.b;
						return _Utils_update(
							rendered,
							{
								props: A2(
									$elm$core$List$cons,
									_Utils_Tuple2(name, val),
									rendered.props)
							});
					case 'Supports':
						var _v2 = rule.a;
						var prop = _v2.a;
						var value = _v2.b;
						var props = rule.b;
						return _Utils_update(
							rendered,
							{
								others: A2(
									$elm$core$List$cons,
									$mdgriffith$elm_ui$Internal$Style$Intermediate(
										{closing: '\n}', others: _List_Nil, props: props, selector: '@supports (' + (prop + (':' + (value + (') {' + parent.selector))))}),
									rendered.others)
							});
					case 'Adjacent':
						var selector = rule.a;
						var adjRules = rule.b;
						return _Utils_update(
							rendered,
							{
								others: A2(
									$elm$core$List$cons,
									A2(
										$mdgriffith$elm_ui$Internal$Style$renderRules,
										A2($mdgriffith$elm_ui$Internal$Style$emptyIntermediate, parent.selector + (' + ' + selector), ''),
										adjRules),
									rendered.others)
							});
					case 'Child':
						var child = rule.a;
						var childRules = rule.b;
						return _Utils_update(
							rendered,
							{
								others: A2(
									$elm$core$List$cons,
									A2(
										$mdgriffith$elm_ui$Internal$Style$renderRules,
										A2($mdgriffith$elm_ui$Internal$Style$emptyIntermediate, parent.selector + (' > ' + child), ''),
										childRules),
									rendered.others)
							});
					case 'AllChildren':
						var child = rule.a;
						var childRules = rule.b;
						return _Utils_update(
							rendered,
							{
								others: A2(
									$elm$core$List$cons,
									A2(
										$mdgriffith$elm_ui$Internal$Style$renderRules,
										A2($mdgriffith$elm_ui$Internal$Style$emptyIntermediate, parent.selector + (' ' + child), ''),
										childRules),
									rendered.others)
							});
					case 'Descriptor':
						var descriptor = rule.a;
						var descriptorRules = rule.b;
						return _Utils_update(
							rendered,
							{
								others: A2(
									$elm$core$List$cons,
									A2(
										$mdgriffith$elm_ui$Internal$Style$renderRules,
										A2(
											$mdgriffith$elm_ui$Internal$Style$emptyIntermediate,
											_Utils_ap(parent.selector, descriptor),
											''),
										descriptorRules),
									rendered.others)
							});
					default:
						var batched = rule.a;
						return _Utils_update(
							rendered,
							{
								others: A2(
									$elm$core$List$cons,
									A2(
										$mdgriffith$elm_ui$Internal$Style$renderRules,
										A2($mdgriffith$elm_ui$Internal$Style$emptyIntermediate, parent.selector, ''),
										batched),
									rendered.others)
							});
				}
			});
		return $mdgriffith$elm_ui$Internal$Style$Intermediate(
			A3($elm$core$List$foldr, generateIntermediates, parent, rulesToRender));
	});
var $mdgriffith$elm_ui$Internal$Style$renderCompact = function (styleClasses) {
	var renderValues = function (values) {
		return $elm$core$String$concat(
			A2(
				$elm$core$List$map,
				function (_v3) {
					var x = _v3.a;
					var y = _v3.b;
					return x + (':' + (y + ';'));
				},
				values));
	};
	var renderClass = function (rule) {
		var _v2 = rule.props;
		if (!_v2.b) {
			return '';
		} else {
			return rule.selector + ('{' + (renderValues(rule.props) + (rule.closing + '}')));
		}
	};
	var renderIntermediate = function (_v0) {
		var rule = _v0.a;
		return _Utils_ap(
			renderClass(rule),
			$elm$core$String$concat(
				A2($elm$core$List$map, renderIntermediate, rule.others)));
	};
	return $elm$core$String$concat(
		A2(
			$elm$core$List$map,
			renderIntermediate,
			A3(
				$elm$core$List$foldr,
				F2(
					function (_v1, existing) {
						var name = _v1.a;
						var styleRules = _v1.b;
						return A2(
							$elm$core$List$cons,
							A2(
								$mdgriffith$elm_ui$Internal$Style$renderRules,
								A2($mdgriffith$elm_ui$Internal$Style$emptyIntermediate, name, ''),
								styleRules),
							existing);
					}),
				_List_Nil,
				styleClasses)));
};
var $mdgriffith$elm_ui$Internal$Style$rules = _Utils_ap(
	$mdgriffith$elm_ui$Internal$Style$overrides,
	$mdgriffith$elm_ui$Internal$Style$renderCompact(
		_Utils_ap($mdgriffith$elm_ui$Internal$Style$baseSheet, $mdgriffith$elm_ui$Internal$Style$commonValues)));
var $mdgriffith$elm_ui$Internal$Model$staticRoot = function (opts) {
	var _v0 = opts.mode;
	switch (_v0.$) {
		case 'Layout':
			return A3(
				$elm$virtual_dom$VirtualDom$node,
				'div',
				_List_Nil,
				_List_fromArray(
					[
						A3(
						$elm$virtual_dom$VirtualDom$node,
						'style',
						_List_Nil,
						_List_fromArray(
							[
								$elm$virtual_dom$VirtualDom$text($mdgriffith$elm_ui$Internal$Style$rules)
							]))
					]));
		case 'NoStaticStyleSheet':
			return $elm$virtual_dom$VirtualDom$text('');
		default:
			return A3(
				$elm$virtual_dom$VirtualDom$node,
				'elm-ui-static-rules',
				_List_fromArray(
					[
						A2(
						$elm$virtual_dom$VirtualDom$property,
						'rules',
						$elm$json$Json$Encode$string($mdgriffith$elm_ui$Internal$Style$rules))
					]),
				_List_Nil);
	}
};
var $elm$core$List$any = F2(
	function (isOkay, list) {
		any:
		while (true) {
			if (!list.b) {
				return false;
			} else {
				var x = list.a;
				var xs = list.b;
				if (isOkay(x)) {
					return true;
				} else {
					var $temp$isOkay = isOkay,
						$temp$list = xs;
					isOkay = $temp$isOkay;
					list = $temp$list;
					continue any;
				}
			}
		}
	});
var $mdgriffith$elm_ui$Internal$Model$fontName = function (font) {
	switch (font.$) {
		case 'Serif':
			return 'serif';
		case 'SansSerif':
			return 'sans-serif';
		case 'Monospace':
			return 'monospace';
		case 'Typeface':
			var name = font.a;
			return '\"' + (name + '\"');
		case 'ImportFont':
			var name = font.a;
			var url = font.b;
			return '\"' + (name + '\"');
		default:
			var name = font.a.name;
			return '\"' + (name + '\"');
	}
};
var $mdgriffith$elm_ui$Internal$Model$isSmallCaps = function (_var) {
	switch (_var.$) {
		case 'VariantActive':
			var name = _var.a;
			return name === 'smcp';
		case 'VariantOff':
			var name = _var.a;
			return false;
		default:
			var name = _var.a;
			var index = _var.b;
			return (name === 'smcp') && (index === 1);
	}
};
var $mdgriffith$elm_ui$Internal$Model$hasSmallCaps = function (typeface) {
	if (typeface.$ === 'FontWith') {
		var font = typeface.a;
		return A2($elm$core$List$any, $mdgriffith$elm_ui$Internal$Model$isSmallCaps, font.variants);
	} else {
		return false;
	}
};
var $mdgriffith$elm_ui$Internal$Model$renderProps = F3(
	function (force, _v0, existing) {
		var key = _v0.a;
		var val = _v0.b;
		return force ? (existing + ('\n  ' + (key + (': ' + (val + ' !important;'))))) : (existing + ('\n  ' + (key + (': ' + (val + ';')))));
	});
var $mdgriffith$elm_ui$Internal$Model$renderStyle = F4(
	function (options, maybePseudo, selector, props) {
		if (maybePseudo.$ === 'Nothing') {
			return _List_fromArray(
				[
					selector + ('{' + (A3(
					$elm$core$List$foldl,
					$mdgriffith$elm_ui$Internal$Model$renderProps(false),
					'',
					props) + '\n}'))
				]);
		} else {
			var pseudo = maybePseudo.a;
			switch (pseudo.$) {
				case 'Hover':
					var _v2 = options.hover;
					switch (_v2.$) {
						case 'NoHover':
							return _List_Nil;
						case 'ForceHover':
							return _List_fromArray(
								[
									selector + ('-hv {' + (A3(
									$elm$core$List$foldl,
									$mdgriffith$elm_ui$Internal$Model$renderProps(true),
									'',
									props) + '\n}'))
								]);
						default:
							return _List_fromArray(
								[
									selector + ('-hv:hover {' + (A3(
									$elm$core$List$foldl,
									$mdgriffith$elm_ui$Internal$Model$renderProps(false),
									'',
									props) + '\n}'))
								]);
					}
				case 'Focus':
					var renderedProps = A3(
						$elm$core$List$foldl,
						$mdgriffith$elm_ui$Internal$Model$renderProps(false),
						'',
						props);
					return _List_fromArray(
						[
							selector + ('-fs:focus {' + (renderedProps + '\n}')),
							('.' + ($mdgriffith$elm_ui$Internal$Style$classes.any + (':focus ' + (selector + '-fs  {')))) + (renderedProps + '\n}'),
							(selector + '-fs:focus-within {') + (renderedProps + '\n}'),
							('.ui-slide-bar:focus + ' + ($mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.any) + (' .focusable-thumb' + (selector + '-fs {')))) + (renderedProps + '\n}')
						]);
				default:
					return _List_fromArray(
						[
							selector + ('-act:active {' + (A3(
							$elm$core$List$foldl,
							$mdgriffith$elm_ui$Internal$Model$renderProps(false),
							'',
							props) + '\n}'))
						]);
			}
		}
	});
var $mdgriffith$elm_ui$Internal$Model$renderVariant = function (_var) {
	switch (_var.$) {
		case 'VariantActive':
			var name = _var.a;
			return '\"' + (name + '\"');
		case 'VariantOff':
			var name = _var.a;
			return '\"' + (name + '\" 0');
		default:
			var name = _var.a;
			var index = _var.b;
			return '\"' + (name + ('\" ' + $elm$core$String$fromInt(index)));
	}
};
var $mdgriffith$elm_ui$Internal$Model$renderVariants = function (typeface) {
	if (typeface.$ === 'FontWith') {
		var font = typeface.a;
		return $elm$core$Maybe$Just(
			A2(
				$elm$core$String$join,
				', ',
				A2($elm$core$List$map, $mdgriffith$elm_ui$Internal$Model$renderVariant, font.variants)));
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $mdgriffith$elm_ui$Internal$Model$transformValue = function (transform) {
	switch (transform.$) {
		case 'Untransformed':
			return $elm$core$Maybe$Nothing;
		case 'Moved':
			var _v1 = transform.a;
			var x = _v1.a;
			var y = _v1.b;
			var z = _v1.c;
			return $elm$core$Maybe$Just(
				'translate3d(' + ($elm$core$String$fromFloat(x) + ('px, ' + ($elm$core$String$fromFloat(y) + ('px, ' + ($elm$core$String$fromFloat(z) + 'px)'))))));
		default:
			var _v2 = transform.a;
			var tx = _v2.a;
			var ty = _v2.b;
			var tz = _v2.c;
			var _v3 = transform.b;
			var sx = _v3.a;
			var sy = _v3.b;
			var sz = _v3.c;
			var _v4 = transform.c;
			var ox = _v4.a;
			var oy = _v4.b;
			var oz = _v4.c;
			var angle = transform.d;
			var translate = 'translate3d(' + ($elm$core$String$fromFloat(tx) + ('px, ' + ($elm$core$String$fromFloat(ty) + ('px, ' + ($elm$core$String$fromFloat(tz) + 'px)')))));
			var scale = 'scale3d(' + ($elm$core$String$fromFloat(sx) + (', ' + ($elm$core$String$fromFloat(sy) + (', ' + ($elm$core$String$fromFloat(sz) + ')')))));
			var rotate = 'rotate3d(' + ($elm$core$String$fromFloat(ox) + (', ' + ($elm$core$String$fromFloat(oy) + (', ' + ($elm$core$String$fromFloat(oz) + (', ' + ($elm$core$String$fromFloat(angle) + 'rad)')))))));
			return $elm$core$Maybe$Just(translate + (' ' + (scale + (' ' + rotate))));
	}
};
var $mdgriffith$elm_ui$Internal$Model$renderStyleRule = F3(
	function (options, rule, maybePseudo) {
		switch (rule.$) {
			case 'Style':
				var selector = rule.a;
				var props = rule.b;
				return A4($mdgriffith$elm_ui$Internal$Model$renderStyle, options, maybePseudo, selector, props);
			case 'Shadows':
				var name = rule.a;
				var prop = rule.b;
				return A4(
					$mdgriffith$elm_ui$Internal$Model$renderStyle,
					options,
					maybePseudo,
					'.' + name,
					_List_fromArray(
						[
							A2($mdgriffith$elm_ui$Internal$Model$Property, 'box-shadow', prop)
						]));
			case 'Transparency':
				var name = rule.a;
				var transparency = rule.b;
				var opacity = A2(
					$elm$core$Basics$max,
					0,
					A2($elm$core$Basics$min, 1, 1 - transparency));
				return A4(
					$mdgriffith$elm_ui$Internal$Model$renderStyle,
					options,
					maybePseudo,
					'.' + name,
					_List_fromArray(
						[
							A2(
							$mdgriffith$elm_ui$Internal$Model$Property,
							'opacity',
							$elm$core$String$fromFloat(opacity))
						]));
			case 'FontSize':
				var i = rule.a;
				return A4(
					$mdgriffith$elm_ui$Internal$Model$renderStyle,
					options,
					maybePseudo,
					'.font-size-' + $elm$core$String$fromInt(i),
					_List_fromArray(
						[
							A2(
							$mdgriffith$elm_ui$Internal$Model$Property,
							'font-size',
							$elm$core$String$fromInt(i) + 'px')
						]));
			case 'FontFamily':
				var name = rule.a;
				var typefaces = rule.b;
				var features = A2(
					$elm$core$String$join,
					', ',
					A2($elm$core$List$filterMap, $mdgriffith$elm_ui$Internal$Model$renderVariants, typefaces));
				var families = _List_fromArray(
					[
						A2(
						$mdgriffith$elm_ui$Internal$Model$Property,
						'font-family',
						A2(
							$elm$core$String$join,
							', ',
							A2($elm$core$List$map, $mdgriffith$elm_ui$Internal$Model$fontName, typefaces))),
						A2($mdgriffith$elm_ui$Internal$Model$Property, 'font-feature-settings', features),
						A2(
						$mdgriffith$elm_ui$Internal$Model$Property,
						'font-variant',
						A2($elm$core$List$any, $mdgriffith$elm_ui$Internal$Model$hasSmallCaps, typefaces) ? 'small-caps' : 'normal')
					]);
				return A4($mdgriffith$elm_ui$Internal$Model$renderStyle, options, maybePseudo, '.' + name, families);
			case 'Single':
				var _class = rule.a;
				var prop = rule.b;
				var val = rule.c;
				return A4(
					$mdgriffith$elm_ui$Internal$Model$renderStyle,
					options,
					maybePseudo,
					'.' + _class,
					_List_fromArray(
						[
							A2($mdgriffith$elm_ui$Internal$Model$Property, prop, val)
						]));
			case 'Colored':
				var _class = rule.a;
				var prop = rule.b;
				var color = rule.c;
				return A4(
					$mdgriffith$elm_ui$Internal$Model$renderStyle,
					options,
					maybePseudo,
					'.' + _class,
					_List_fromArray(
						[
							A2(
							$mdgriffith$elm_ui$Internal$Model$Property,
							prop,
							$mdgriffith$elm_ui$Internal$Model$formatColor(color))
						]));
			case 'SpacingStyle':
				var cls = rule.a;
				var x = rule.b;
				var y = rule.c;
				var yPx = $elm$core$String$fromInt(y) + 'px';
				var xPx = $elm$core$String$fromInt(x) + 'px';
				var single = '.' + $mdgriffith$elm_ui$Internal$Style$classes.single;
				var row = '.' + $mdgriffith$elm_ui$Internal$Style$classes.row;
				var wrappedRow = '.' + ($mdgriffith$elm_ui$Internal$Style$classes.wrapped + row);
				var right = '.' + $mdgriffith$elm_ui$Internal$Style$classes.alignRight;
				var paragraph = '.' + $mdgriffith$elm_ui$Internal$Style$classes.paragraph;
				var page = '.' + $mdgriffith$elm_ui$Internal$Style$classes.page;
				var left = '.' + $mdgriffith$elm_ui$Internal$Style$classes.alignLeft;
				var halfY = $elm$core$String$fromFloat(y / 2) + 'px';
				var halfX = $elm$core$String$fromFloat(x / 2) + 'px';
				var column = '.' + $mdgriffith$elm_ui$Internal$Style$classes.column;
				var _class = '.' + cls;
				var any = '.' + $mdgriffith$elm_ui$Internal$Style$classes.any;
				return $elm$core$List$concat(
					_List_fromArray(
						[
							A4(
							$mdgriffith$elm_ui$Internal$Model$renderStyle,
							options,
							maybePseudo,
							_class + (row + (' > ' + (any + (' + ' + any)))),
							_List_fromArray(
								[
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'margin-left', xPx)
								])),
							A4(
							$mdgriffith$elm_ui$Internal$Model$renderStyle,
							options,
							maybePseudo,
							_class + (wrappedRow + (' > ' + any)),
							_List_fromArray(
								[
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'margin', halfY + (' ' + halfX))
								])),
							A4(
							$mdgriffith$elm_ui$Internal$Model$renderStyle,
							options,
							maybePseudo,
							_class + (column + (' > ' + (any + (' + ' + any)))),
							_List_fromArray(
								[
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'margin-top', yPx)
								])),
							A4(
							$mdgriffith$elm_ui$Internal$Model$renderStyle,
							options,
							maybePseudo,
							_class + (page + (' > ' + (any + (' + ' + any)))),
							_List_fromArray(
								[
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'margin-top', yPx)
								])),
							A4(
							$mdgriffith$elm_ui$Internal$Model$renderStyle,
							options,
							maybePseudo,
							_class + (page + (' > ' + left)),
							_List_fromArray(
								[
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'margin-right', xPx)
								])),
							A4(
							$mdgriffith$elm_ui$Internal$Model$renderStyle,
							options,
							maybePseudo,
							_class + (page + (' > ' + right)),
							_List_fromArray(
								[
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'margin-left', xPx)
								])),
							A4(
							$mdgriffith$elm_ui$Internal$Model$renderStyle,
							options,
							maybePseudo,
							_Utils_ap(_class, paragraph),
							_List_fromArray(
								[
									A2(
									$mdgriffith$elm_ui$Internal$Model$Property,
									'line-height',
									'calc(1em + ' + ($elm$core$String$fromInt(y) + 'px)'))
								])),
							A4(
							$mdgriffith$elm_ui$Internal$Model$renderStyle,
							options,
							maybePseudo,
							'textarea' + (any + _class),
							_List_fromArray(
								[
									A2(
									$mdgriffith$elm_ui$Internal$Model$Property,
									'line-height',
									'calc(1em + ' + ($elm$core$String$fromInt(y) + 'px)')),
									A2(
									$mdgriffith$elm_ui$Internal$Model$Property,
									'height',
									'calc(100% + ' + ($elm$core$String$fromInt(y) + 'px)'))
								])),
							A4(
							$mdgriffith$elm_ui$Internal$Model$renderStyle,
							options,
							maybePseudo,
							_class + (paragraph + (' > ' + left)),
							_List_fromArray(
								[
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'margin-right', xPx)
								])),
							A4(
							$mdgriffith$elm_ui$Internal$Model$renderStyle,
							options,
							maybePseudo,
							_class + (paragraph + (' > ' + right)),
							_List_fromArray(
								[
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'margin-left', xPx)
								])),
							A4(
							$mdgriffith$elm_ui$Internal$Model$renderStyle,
							options,
							maybePseudo,
							_class + (paragraph + '::after'),
							_List_fromArray(
								[
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'content', '\'\''),
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'display', 'block'),
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'height', '0'),
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'width', '0'),
									A2(
									$mdgriffith$elm_ui$Internal$Model$Property,
									'margin-top',
									$elm$core$String$fromInt((-1) * ((y / 2) | 0)) + 'px')
								])),
							A4(
							$mdgriffith$elm_ui$Internal$Model$renderStyle,
							options,
							maybePseudo,
							_class + (paragraph + '::before'),
							_List_fromArray(
								[
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'content', '\'\''),
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'display', 'block'),
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'height', '0'),
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'width', '0'),
									A2(
									$mdgriffith$elm_ui$Internal$Model$Property,
									'margin-bottom',
									$elm$core$String$fromInt((-1) * ((y / 2) | 0)) + 'px')
								]))
						]));
			case 'PaddingStyle':
				var cls = rule.a;
				var top = rule.b;
				var right = rule.c;
				var bottom = rule.d;
				var left = rule.e;
				var _class = '.' + cls;
				return A4(
					$mdgriffith$elm_ui$Internal$Model$renderStyle,
					options,
					maybePseudo,
					_class,
					_List_fromArray(
						[
							A2(
							$mdgriffith$elm_ui$Internal$Model$Property,
							'padding',
							$elm$core$String$fromFloat(top) + ('px ' + ($elm$core$String$fromFloat(right) + ('px ' + ($elm$core$String$fromFloat(bottom) + ('px ' + ($elm$core$String$fromFloat(left) + 'px')))))))
						]));
			case 'BorderWidth':
				var cls = rule.a;
				var top = rule.b;
				var right = rule.c;
				var bottom = rule.d;
				var left = rule.e;
				var _class = '.' + cls;
				return A4(
					$mdgriffith$elm_ui$Internal$Model$renderStyle,
					options,
					maybePseudo,
					_class,
					_List_fromArray(
						[
							A2(
							$mdgriffith$elm_ui$Internal$Model$Property,
							'border-width',
							$elm$core$String$fromInt(top) + ('px ' + ($elm$core$String$fromInt(right) + ('px ' + ($elm$core$String$fromInt(bottom) + ('px ' + ($elm$core$String$fromInt(left) + 'px')))))))
						]));
			case 'GridTemplateStyle':
				var template = rule.a;
				var toGridLengthHelper = F3(
					function (minimum, maximum, x) {
						toGridLengthHelper:
						while (true) {
							switch (x.$) {
								case 'Px':
									var px = x.a;
									return $elm$core$String$fromInt(px) + 'px';
								case 'Content':
									var _v2 = _Utils_Tuple2(minimum, maximum);
									if (_v2.a.$ === 'Nothing') {
										if (_v2.b.$ === 'Nothing') {
											var _v3 = _v2.a;
											var _v4 = _v2.b;
											return 'max-content';
										} else {
											var _v6 = _v2.a;
											var maxSize = _v2.b.a;
											return 'minmax(max-content, ' + ($elm$core$String$fromInt(maxSize) + 'px)');
										}
									} else {
										if (_v2.b.$ === 'Nothing') {
											var minSize = _v2.a.a;
											var _v5 = _v2.b;
											return 'minmax(' + ($elm$core$String$fromInt(minSize) + ('px, ' + 'max-content)'));
										} else {
											var minSize = _v2.a.a;
											var maxSize = _v2.b.a;
											return 'minmax(' + ($elm$core$String$fromInt(minSize) + ('px, ' + ($elm$core$String$fromInt(maxSize) + 'px)')));
										}
									}
								case 'Fill':
									var i = x.a;
									var _v7 = _Utils_Tuple2(minimum, maximum);
									if (_v7.a.$ === 'Nothing') {
										if (_v7.b.$ === 'Nothing') {
											var _v8 = _v7.a;
											var _v9 = _v7.b;
											return $elm$core$String$fromInt(i) + 'fr';
										} else {
											var _v11 = _v7.a;
											var maxSize = _v7.b.a;
											return 'minmax(max-content, ' + ($elm$core$String$fromInt(maxSize) + 'px)');
										}
									} else {
										if (_v7.b.$ === 'Nothing') {
											var minSize = _v7.a.a;
											var _v10 = _v7.b;
											return 'minmax(' + ($elm$core$String$fromInt(minSize) + ('px, ' + ($elm$core$String$fromInt(i) + ('fr' + 'fr)'))));
										} else {
											var minSize = _v7.a.a;
											var maxSize = _v7.b.a;
											return 'minmax(' + ($elm$core$String$fromInt(minSize) + ('px, ' + ($elm$core$String$fromInt(maxSize) + 'px)')));
										}
									}
								case 'Min':
									var m = x.a;
									var len = x.b;
									var $temp$minimum = $elm$core$Maybe$Just(m),
										$temp$maximum = maximum,
										$temp$x = len;
									minimum = $temp$minimum;
									maximum = $temp$maximum;
									x = $temp$x;
									continue toGridLengthHelper;
								default:
									var m = x.a;
									var len = x.b;
									var $temp$minimum = minimum,
										$temp$maximum = $elm$core$Maybe$Just(m),
										$temp$x = len;
									minimum = $temp$minimum;
									maximum = $temp$maximum;
									x = $temp$x;
									continue toGridLengthHelper;
							}
						}
					});
				var toGridLength = function (x) {
					return A3(toGridLengthHelper, $elm$core$Maybe$Nothing, $elm$core$Maybe$Nothing, x);
				};
				var xSpacing = toGridLength(template.spacing.a);
				var ySpacing = toGridLength(template.spacing.b);
				var rows = function (x) {
					return 'grid-template-rows: ' + (x + ';');
				}(
					A2(
						$elm$core$String$join,
						' ',
						A2($elm$core$List$map, toGridLength, template.rows)));
				var msRows = function (x) {
					return '-ms-grid-rows: ' + (x + ';');
				}(
					A2(
						$elm$core$String$join,
						ySpacing,
						A2($elm$core$List$map, toGridLength, template.columns)));
				var msColumns = function (x) {
					return '-ms-grid-columns: ' + (x + ';');
				}(
					A2(
						$elm$core$String$join,
						ySpacing,
						A2($elm$core$List$map, toGridLength, template.columns)));
				var gapY = 'grid-row-gap:' + (toGridLength(template.spacing.b) + ';');
				var gapX = 'grid-column-gap:' + (toGridLength(template.spacing.a) + ';');
				var columns = function (x) {
					return 'grid-template-columns: ' + (x + ';');
				}(
					A2(
						$elm$core$String$join,
						' ',
						A2($elm$core$List$map, toGridLength, template.columns)));
				var _class = '.grid-rows-' + (A2(
					$elm$core$String$join,
					'-',
					A2($elm$core$List$map, $mdgriffith$elm_ui$Internal$Model$lengthClassName, template.rows)) + ('-cols-' + (A2(
					$elm$core$String$join,
					'-',
					A2($elm$core$List$map, $mdgriffith$elm_ui$Internal$Model$lengthClassName, template.columns)) + ('-space-x-' + ($mdgriffith$elm_ui$Internal$Model$lengthClassName(template.spacing.a) + ('-space-y-' + $mdgriffith$elm_ui$Internal$Model$lengthClassName(template.spacing.b)))))));
				var modernGrid = _class + ('{' + (columns + (rows + (gapX + (gapY + '}')))));
				var supports = '@supports (display:grid) {' + (modernGrid + '}');
				var base = _class + ('{' + (msColumns + (msRows + '}')));
				return _List_fromArray(
					[base, supports]);
			case 'GridPosition':
				var position = rule.a;
				var msPosition = A2(
					$elm$core$String$join,
					' ',
					_List_fromArray(
						[
							'-ms-grid-row: ' + ($elm$core$String$fromInt(position.row) + ';'),
							'-ms-grid-row-span: ' + ($elm$core$String$fromInt(position.height) + ';'),
							'-ms-grid-column: ' + ($elm$core$String$fromInt(position.col) + ';'),
							'-ms-grid-column-span: ' + ($elm$core$String$fromInt(position.width) + ';')
						]));
				var modernPosition = A2(
					$elm$core$String$join,
					' ',
					_List_fromArray(
						[
							'grid-row: ' + ($elm$core$String$fromInt(position.row) + (' / ' + ($elm$core$String$fromInt(position.row + position.height) + ';'))),
							'grid-column: ' + ($elm$core$String$fromInt(position.col) + (' / ' + ($elm$core$String$fromInt(position.col + position.width) + ';')))
						]));
				var _class = '.grid-pos-' + ($elm$core$String$fromInt(position.row) + ('-' + ($elm$core$String$fromInt(position.col) + ('-' + ($elm$core$String$fromInt(position.width) + ('-' + $elm$core$String$fromInt(position.height)))))));
				var modernGrid = _class + ('{' + (modernPosition + '}'));
				var supports = '@supports (display:grid) {' + (modernGrid + '}');
				var base = _class + ('{' + (msPosition + '}'));
				return _List_fromArray(
					[base, supports]);
			case 'PseudoSelector':
				var _class = rule.a;
				var styles = rule.b;
				var renderPseudoRule = function (style) {
					return A3(
						$mdgriffith$elm_ui$Internal$Model$renderStyleRule,
						options,
						style,
						$elm$core$Maybe$Just(_class));
				};
				return A2($elm$core$List$concatMap, renderPseudoRule, styles);
			default:
				var transform = rule.a;
				var val = $mdgriffith$elm_ui$Internal$Model$transformValue(transform);
				var _class = $mdgriffith$elm_ui$Internal$Model$transformClass(transform);
				var _v12 = _Utils_Tuple2(_class, val);
				if ((_v12.a.$ === 'Just') && (_v12.b.$ === 'Just')) {
					var cls = _v12.a.a;
					var v = _v12.b.a;
					return A4(
						$mdgriffith$elm_ui$Internal$Model$renderStyle,
						options,
						maybePseudo,
						'.' + cls,
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Model$Property, 'transform', v)
							]));
				} else {
					return _List_Nil;
				}
		}
	});
var $mdgriffith$elm_ui$Internal$Model$encodeStyles = F2(
	function (options, stylesheet) {
		return $elm$json$Json$Encode$object(
			A2(
				$elm$core$List$map,
				function (style) {
					var styled = A3($mdgriffith$elm_ui$Internal$Model$renderStyleRule, options, style, $elm$core$Maybe$Nothing);
					return _Utils_Tuple2(
						$mdgriffith$elm_ui$Internal$Model$getStyleName(style),
						A2($elm$json$Json$Encode$list, $elm$json$Json$Encode$string, styled));
				},
				stylesheet));
	});
var $mdgriffith$elm_ui$Internal$Model$bracket = F2(
	function (selector, rules) {
		var renderPair = function (_v0) {
			var name = _v0.a;
			var val = _v0.b;
			return name + (': ' + (val + ';'));
		};
		return selector + (' {' + (A2(
			$elm$core$String$join,
			'',
			A2($elm$core$List$map, renderPair, rules)) + '}'));
	});
var $mdgriffith$elm_ui$Internal$Model$fontRule = F3(
	function (name, modifier, _v0) {
		var parentAdj = _v0.a;
		var textAdjustment = _v0.b;
		return _List_fromArray(
			[
				A2($mdgriffith$elm_ui$Internal$Model$bracket, '.' + (name + ('.' + (modifier + (', ' + ('.' + (name + (' .' + modifier))))))), parentAdj),
				A2($mdgriffith$elm_ui$Internal$Model$bracket, '.' + (name + ('.' + (modifier + ('> .' + ($mdgriffith$elm_ui$Internal$Style$classes.text + (', .' + (name + (' .' + (modifier + (' > .' + $mdgriffith$elm_ui$Internal$Style$classes.text)))))))))), textAdjustment)
			]);
	});
var $mdgriffith$elm_ui$Internal$Model$renderFontAdjustmentRule = F3(
	function (fontToAdjust, _v0, otherFontName) {
		var full = _v0.a;
		var capital = _v0.b;
		var name = _Utils_eq(fontToAdjust, otherFontName) ? fontToAdjust : (otherFontName + (' .' + fontToAdjust));
		return A2(
			$elm$core$String$join,
			' ',
			_Utils_ap(
				A3($mdgriffith$elm_ui$Internal$Model$fontRule, name, $mdgriffith$elm_ui$Internal$Style$classes.sizeByCapital, capital),
				A3($mdgriffith$elm_ui$Internal$Model$fontRule, name, $mdgriffith$elm_ui$Internal$Style$classes.fullSize, full)));
	});
var $mdgriffith$elm_ui$Internal$Model$renderNullAdjustmentRule = F2(
	function (fontToAdjust, otherFontName) {
		var name = _Utils_eq(fontToAdjust, otherFontName) ? fontToAdjust : (otherFontName + (' .' + fontToAdjust));
		return A2(
			$elm$core$String$join,
			' ',
			_List_fromArray(
				[
					A2(
					$mdgriffith$elm_ui$Internal$Model$bracket,
					'.' + (name + ('.' + ($mdgriffith$elm_ui$Internal$Style$classes.sizeByCapital + (', ' + ('.' + (name + (' .' + $mdgriffith$elm_ui$Internal$Style$classes.sizeByCapital))))))),
					_List_fromArray(
						[
							_Utils_Tuple2('line-height', '1')
						])),
					A2(
					$mdgriffith$elm_ui$Internal$Model$bracket,
					'.' + (name + ('.' + ($mdgriffith$elm_ui$Internal$Style$classes.sizeByCapital + ('> .' + ($mdgriffith$elm_ui$Internal$Style$classes.text + (', .' + (name + (' .' + ($mdgriffith$elm_ui$Internal$Style$classes.sizeByCapital + (' > .' + $mdgriffith$elm_ui$Internal$Style$classes.text)))))))))),
					_List_fromArray(
						[
							_Utils_Tuple2('vertical-align', '0'),
							_Utils_Tuple2('line-height', '1')
						]))
				]));
	});
var $mdgriffith$elm_ui$Internal$Model$adjust = F3(
	function (size, height, vertical) {
		return {height: height / size, size: size, vertical: vertical};
	});
var $elm$core$List$maximum = function (list) {
	if (list.b) {
		var x = list.a;
		var xs = list.b;
		return $elm$core$Maybe$Just(
			A3($elm$core$List$foldl, $elm$core$Basics$max, x, xs));
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $elm$core$List$minimum = function (list) {
	if (list.b) {
		var x = list.a;
		var xs = list.b;
		return $elm$core$Maybe$Just(
			A3($elm$core$List$foldl, $elm$core$Basics$min, x, xs));
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $mdgriffith$elm_ui$Internal$Model$convertAdjustment = function (adjustment) {
	var lines = _List_fromArray(
		[adjustment.capital, adjustment.baseline, adjustment.descender, adjustment.lowercase]);
	var lineHeight = 1.5;
	var normalDescender = (lineHeight - 1) / 2;
	var oldMiddle = lineHeight / 2;
	var descender = A2(
		$elm$core$Maybe$withDefault,
		adjustment.descender,
		$elm$core$List$minimum(lines));
	var newBaseline = A2(
		$elm$core$Maybe$withDefault,
		adjustment.baseline,
		$elm$core$List$minimum(
			A2(
				$elm$core$List$filter,
				function (x) {
					return !_Utils_eq(x, descender);
				},
				lines)));
	var base = lineHeight;
	var ascender = A2(
		$elm$core$Maybe$withDefault,
		adjustment.capital,
		$elm$core$List$maximum(lines));
	var capitalSize = 1 / (ascender - newBaseline);
	var capitalVertical = 1 - ascender;
	var fullSize = 1 / (ascender - descender);
	var fullVertical = 1 - ascender;
	var newCapitalMiddle = ((ascender - newBaseline) / 2) + newBaseline;
	var newFullMiddle = ((ascender - descender) / 2) + descender;
	return {
		capital: A3($mdgriffith$elm_ui$Internal$Model$adjust, capitalSize, ascender - newBaseline, capitalVertical),
		full: A3($mdgriffith$elm_ui$Internal$Model$adjust, fullSize, ascender - descender, fullVertical)
	};
};
var $mdgriffith$elm_ui$Internal$Model$fontAdjustmentRules = function (converted) {
	return _Utils_Tuple2(
		_List_fromArray(
			[
				_Utils_Tuple2('display', 'block')
			]),
		_List_fromArray(
			[
				_Utils_Tuple2('display', 'inline-block'),
				_Utils_Tuple2(
				'line-height',
				$elm$core$String$fromFloat(converted.height)),
				_Utils_Tuple2(
				'vertical-align',
				$elm$core$String$fromFloat(converted.vertical) + 'em'),
				_Utils_Tuple2(
				'font-size',
				$elm$core$String$fromFloat(converted.size) + 'em')
			]));
};
var $mdgriffith$elm_ui$Internal$Model$typefaceAdjustment = function (typefaces) {
	return A3(
		$elm$core$List$foldl,
		F2(
			function (face, found) {
				if (found.$ === 'Nothing') {
					if (face.$ === 'FontWith') {
						var _with = face.a;
						var _v2 = _with.adjustment;
						if (_v2.$ === 'Nothing') {
							return found;
						} else {
							var adjustment = _v2.a;
							return $elm$core$Maybe$Just(
								_Utils_Tuple2(
									$mdgriffith$elm_ui$Internal$Model$fontAdjustmentRules(
										function ($) {
											return $.full;
										}(
											$mdgriffith$elm_ui$Internal$Model$convertAdjustment(adjustment))),
									$mdgriffith$elm_ui$Internal$Model$fontAdjustmentRules(
										function ($) {
											return $.capital;
										}(
											$mdgriffith$elm_ui$Internal$Model$convertAdjustment(adjustment)))));
						}
					} else {
						return found;
					}
				} else {
					return found;
				}
			}),
		$elm$core$Maybe$Nothing,
		typefaces);
};
var $mdgriffith$elm_ui$Internal$Model$renderTopLevelValues = function (rules) {
	var withImport = function (font) {
		if (font.$ === 'ImportFont') {
			var url = font.b;
			return $elm$core$Maybe$Just('@import url(\'' + (url + '\');'));
		} else {
			return $elm$core$Maybe$Nothing;
		}
	};
	var fontImports = function (_v2) {
		var name = _v2.a;
		var typefaces = _v2.b;
		var imports = A2(
			$elm$core$String$join,
			'\n',
			A2($elm$core$List$filterMap, withImport, typefaces));
		return imports;
	};
	var allNames = A2($elm$core$List$map, $elm$core$Tuple$first, rules);
	var fontAdjustments = function (_v1) {
		var name = _v1.a;
		var typefaces = _v1.b;
		var _v0 = $mdgriffith$elm_ui$Internal$Model$typefaceAdjustment(typefaces);
		if (_v0.$ === 'Nothing') {
			return A2(
				$elm$core$String$join,
				'',
				A2(
					$elm$core$List$map,
					$mdgriffith$elm_ui$Internal$Model$renderNullAdjustmentRule(name),
					allNames));
		} else {
			var adjustment = _v0.a;
			return A2(
				$elm$core$String$join,
				'',
				A2(
					$elm$core$List$map,
					A2($mdgriffith$elm_ui$Internal$Model$renderFontAdjustmentRule, name, adjustment),
					allNames));
		}
	};
	return _Utils_ap(
		A2(
			$elm$core$String$join,
			'\n',
			A2($elm$core$List$map, fontImports, rules)),
		A2(
			$elm$core$String$join,
			'\n',
			A2($elm$core$List$map, fontAdjustments, rules)));
};
var $mdgriffith$elm_ui$Internal$Model$topLevelValue = function (rule) {
	if (rule.$ === 'FontFamily') {
		var name = rule.a;
		var typefaces = rule.b;
		return $elm$core$Maybe$Just(
			_Utils_Tuple2(name, typefaces));
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $mdgriffith$elm_ui$Internal$Model$toStyleSheetString = F2(
	function (options, stylesheet) {
		var combine = F2(
			function (style, rendered) {
				return {
					rules: _Utils_ap(
						rendered.rules,
						A3($mdgriffith$elm_ui$Internal$Model$renderStyleRule, options, style, $elm$core$Maybe$Nothing)),
					topLevel: function () {
						var _v1 = $mdgriffith$elm_ui$Internal$Model$topLevelValue(style);
						if (_v1.$ === 'Nothing') {
							return rendered.topLevel;
						} else {
							var topLevel = _v1.a;
							return A2($elm$core$List$cons, topLevel, rendered.topLevel);
						}
					}()
				};
			});
		var _v0 = A3(
			$elm$core$List$foldl,
			combine,
			{rules: _List_Nil, topLevel: _List_Nil},
			stylesheet);
		var topLevel = _v0.topLevel;
		var rules = _v0.rules;
		return _Utils_ap(
			$mdgriffith$elm_ui$Internal$Model$renderTopLevelValues(topLevel),
			$elm$core$String$concat(rules));
	});
var $mdgriffith$elm_ui$Internal$Model$toStyleSheet = F2(
	function (options, styleSheet) {
		var _v0 = options.mode;
		switch (_v0.$) {
			case 'Layout':
				return A3(
					$elm$virtual_dom$VirtualDom$node,
					'div',
					_List_Nil,
					_List_fromArray(
						[
							A3(
							$elm$virtual_dom$VirtualDom$node,
							'style',
							_List_Nil,
							_List_fromArray(
								[
									$elm$virtual_dom$VirtualDom$text(
									A2($mdgriffith$elm_ui$Internal$Model$toStyleSheetString, options, styleSheet))
								]))
						]));
			case 'NoStaticStyleSheet':
				return A3(
					$elm$virtual_dom$VirtualDom$node,
					'div',
					_List_Nil,
					_List_fromArray(
						[
							A3(
							$elm$virtual_dom$VirtualDom$node,
							'style',
							_List_Nil,
							_List_fromArray(
								[
									$elm$virtual_dom$VirtualDom$text(
									A2($mdgriffith$elm_ui$Internal$Model$toStyleSheetString, options, styleSheet))
								]))
						]));
			default:
				return A3(
					$elm$virtual_dom$VirtualDom$node,
					'elm-ui-rules',
					_List_fromArray(
						[
							A2(
							$elm$virtual_dom$VirtualDom$property,
							'rules',
							A2($mdgriffith$elm_ui$Internal$Model$encodeStyles, options, styleSheet))
						]),
					_List_Nil);
		}
	});
var $mdgriffith$elm_ui$Internal$Model$embedKeyed = F4(
	function (_static, opts, styles, children) {
		var dynamicStyleSheet = A2(
			$mdgriffith$elm_ui$Internal$Model$toStyleSheet,
			opts,
			A3(
				$elm$core$List$foldl,
				$mdgriffith$elm_ui$Internal$Model$reduceStyles,
				_Utils_Tuple2(
					$elm$core$Set$empty,
					$mdgriffith$elm_ui$Internal$Model$renderFocusStyle(opts.focus)),
				styles).b);
		return _static ? A2(
			$elm$core$List$cons,
			_Utils_Tuple2(
				'static-stylesheet',
				$mdgriffith$elm_ui$Internal$Model$staticRoot(opts)),
			A2(
				$elm$core$List$cons,
				_Utils_Tuple2('dynamic-stylesheet', dynamicStyleSheet),
				children)) : A2(
			$elm$core$List$cons,
			_Utils_Tuple2('dynamic-stylesheet', dynamicStyleSheet),
			children);
	});
var $mdgriffith$elm_ui$Internal$Model$embedWith = F4(
	function (_static, opts, styles, children) {
		var dynamicStyleSheet = A2(
			$mdgriffith$elm_ui$Internal$Model$toStyleSheet,
			opts,
			A3(
				$elm$core$List$foldl,
				$mdgriffith$elm_ui$Internal$Model$reduceStyles,
				_Utils_Tuple2(
					$elm$core$Set$empty,
					$mdgriffith$elm_ui$Internal$Model$renderFocusStyle(opts.focus)),
				styles).b);
		return _static ? A2(
			$elm$core$List$cons,
			$mdgriffith$elm_ui$Internal$Model$staticRoot(opts),
			A2($elm$core$List$cons, dynamicStyleSheet, children)) : A2($elm$core$List$cons, dynamicStyleSheet, children);
	});
var $mdgriffith$elm_ui$Internal$Flag$heightBetween = $mdgriffith$elm_ui$Internal$Flag$flag(45);
var $mdgriffith$elm_ui$Internal$Flag$heightFill = $mdgriffith$elm_ui$Internal$Flag$flag(37);
var $mdgriffith$elm_ui$Internal$Flag$present = F2(
	function (myFlag, _v0) {
		var fieldOne = _v0.a;
		var fieldTwo = _v0.b;
		if (myFlag.$ === 'Flag') {
			var first = myFlag.a;
			return _Utils_eq(first & fieldOne, first);
		} else {
			var second = myFlag.a;
			return _Utils_eq(second & fieldTwo, second);
		}
	});
var $elm$html$Html$s = _VirtualDom_node('s');
var $elm$html$Html$u = _VirtualDom_node('u');
var $mdgriffith$elm_ui$Internal$Flag$widthBetween = $mdgriffith$elm_ui$Internal$Flag$flag(44);
var $mdgriffith$elm_ui$Internal$Flag$widthFill = $mdgriffith$elm_ui$Internal$Flag$flag(39);
var $mdgriffith$elm_ui$Internal$Model$finalizeNode = F6(
	function (has, node, attributes, children, embedMode, parentContext) {
		var createNode = F2(
			function (nodeName, attrs) {
				if (children.$ === 'Keyed') {
					var keyed = children.a;
					return A3(
						$elm$virtual_dom$VirtualDom$keyedNode,
						nodeName,
						attrs,
						function () {
							switch (embedMode.$) {
								case 'NoStyleSheet':
									return keyed;
								case 'OnlyDynamic':
									var opts = embedMode.a;
									var styles = embedMode.b;
									return A4($mdgriffith$elm_ui$Internal$Model$embedKeyed, false, opts, styles, keyed);
								default:
									var opts = embedMode.a;
									var styles = embedMode.b;
									return A4($mdgriffith$elm_ui$Internal$Model$embedKeyed, true, opts, styles, keyed);
							}
						}());
				} else {
					var unkeyed = children.a;
					return A2(
						function () {
							switch (nodeName) {
								case 'div':
									return $elm$html$Html$div;
								case 'p':
									return $elm$html$Html$p;
								default:
									return $elm$virtual_dom$VirtualDom$node(nodeName);
							}
						}(),
						attrs,
						function () {
							switch (embedMode.$) {
								case 'NoStyleSheet':
									return unkeyed;
								case 'OnlyDynamic':
									var opts = embedMode.a;
									var styles = embedMode.b;
									return A4($mdgriffith$elm_ui$Internal$Model$embedWith, false, opts, styles, unkeyed);
								default:
									var opts = embedMode.a;
									var styles = embedMode.b;
									return A4($mdgriffith$elm_ui$Internal$Model$embedWith, true, opts, styles, unkeyed);
							}
						}());
				}
			});
		var html = function () {
			switch (node.$) {
				case 'Generic':
					return A2(createNode, 'div', attributes);
				case 'NodeName':
					var nodeName = node.a;
					return A2(createNode, nodeName, attributes);
				default:
					var nodeName = node.a;
					var internal = node.b;
					return A3(
						$elm$virtual_dom$VirtualDom$node,
						nodeName,
						attributes,
						_List_fromArray(
							[
								A2(
								createNode,
								internal,
								_List_fromArray(
									[
										$elm$html$Html$Attributes$class($mdgriffith$elm_ui$Internal$Style$classes.any + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.single))
									]))
							]));
			}
		}();
		switch (parentContext.$) {
			case 'AsRow':
				return (A2($mdgriffith$elm_ui$Internal$Flag$present, $mdgriffith$elm_ui$Internal$Flag$widthFill, has) && (!A2($mdgriffith$elm_ui$Internal$Flag$present, $mdgriffith$elm_ui$Internal$Flag$widthBetween, has))) ? html : (A2($mdgriffith$elm_ui$Internal$Flag$present, $mdgriffith$elm_ui$Internal$Flag$alignRight, has) ? A2(
					$elm$html$Html$u,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class(
							A2(
								$elm$core$String$join,
								' ',
								_List_fromArray(
									[$mdgriffith$elm_ui$Internal$Style$classes.any, $mdgriffith$elm_ui$Internal$Style$classes.single, $mdgriffith$elm_ui$Internal$Style$classes.container, $mdgriffith$elm_ui$Internal$Style$classes.contentCenterY, $mdgriffith$elm_ui$Internal$Style$classes.alignContainerRight])))
						]),
					_List_fromArray(
						[html])) : (A2($mdgriffith$elm_ui$Internal$Flag$present, $mdgriffith$elm_ui$Internal$Flag$centerX, has) ? A2(
					$elm$html$Html$s,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class(
							A2(
								$elm$core$String$join,
								' ',
								_List_fromArray(
									[$mdgriffith$elm_ui$Internal$Style$classes.any, $mdgriffith$elm_ui$Internal$Style$classes.single, $mdgriffith$elm_ui$Internal$Style$classes.container, $mdgriffith$elm_ui$Internal$Style$classes.contentCenterY, $mdgriffith$elm_ui$Internal$Style$classes.alignContainerCenterX])))
						]),
					_List_fromArray(
						[html])) : html));
			case 'AsColumn':
				return (A2($mdgriffith$elm_ui$Internal$Flag$present, $mdgriffith$elm_ui$Internal$Flag$heightFill, has) && (!A2($mdgriffith$elm_ui$Internal$Flag$present, $mdgriffith$elm_ui$Internal$Flag$heightBetween, has))) ? html : (A2($mdgriffith$elm_ui$Internal$Flag$present, $mdgriffith$elm_ui$Internal$Flag$centerY, has) ? A2(
					$elm$html$Html$s,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class(
							A2(
								$elm$core$String$join,
								' ',
								_List_fromArray(
									[$mdgriffith$elm_ui$Internal$Style$classes.any, $mdgriffith$elm_ui$Internal$Style$classes.single, $mdgriffith$elm_ui$Internal$Style$classes.container, $mdgriffith$elm_ui$Internal$Style$classes.alignContainerCenterY])))
						]),
					_List_fromArray(
						[html])) : (A2($mdgriffith$elm_ui$Internal$Flag$present, $mdgriffith$elm_ui$Internal$Flag$alignBottom, has) ? A2(
					$elm$html$Html$u,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class(
							A2(
								$elm$core$String$join,
								' ',
								_List_fromArray(
									[$mdgriffith$elm_ui$Internal$Style$classes.any, $mdgriffith$elm_ui$Internal$Style$classes.single, $mdgriffith$elm_ui$Internal$Style$classes.container, $mdgriffith$elm_ui$Internal$Style$classes.alignContainerBottom])))
						]),
					_List_fromArray(
						[html])) : html));
			default:
				return html;
		}
	});
var $mdgriffith$elm_ui$Internal$Model$textElementClasses = $mdgriffith$elm_ui$Internal$Style$classes.any + (' ' + ($mdgriffith$elm_ui$Internal$Style$classes.text + (' ' + ($mdgriffith$elm_ui$Internal$Style$classes.widthContent + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.heightContent)))));
var $mdgriffith$elm_ui$Internal$Model$textElement = function (str) {
	return A2(
		$elm$html$Html$div,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class($mdgriffith$elm_ui$Internal$Model$textElementClasses)
			]),
		_List_fromArray(
			[
				$elm$html$Html$text(str)
			]));
};
var $mdgriffith$elm_ui$Internal$Model$textElementFillClasses = $mdgriffith$elm_ui$Internal$Style$classes.any + (' ' + ($mdgriffith$elm_ui$Internal$Style$classes.text + (' ' + ($mdgriffith$elm_ui$Internal$Style$classes.widthFill + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.heightFill)))));
var $mdgriffith$elm_ui$Internal$Model$textElementFill = function (str) {
	return A2(
		$elm$html$Html$div,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class($mdgriffith$elm_ui$Internal$Model$textElementFillClasses)
			]),
		_List_fromArray(
			[
				$elm$html$Html$text(str)
			]));
};
var $mdgriffith$elm_ui$Internal$Model$createElement = F3(
	function (context, children, rendered) {
		var gatherKeyed = F2(
			function (_v8, _v9) {
				var key = _v8.a;
				var child = _v8.b;
				var htmls = _v9.a;
				var existingStyles = _v9.b;
				switch (child.$) {
					case 'Unstyled':
						var html = child.a;
						return _Utils_eq(context, $mdgriffith$elm_ui$Internal$Model$asParagraph) ? _Utils_Tuple2(
							A2(
								$elm$core$List$cons,
								_Utils_Tuple2(
									key,
									html(context)),
								htmls),
							existingStyles) : _Utils_Tuple2(
							A2(
								$elm$core$List$cons,
								_Utils_Tuple2(
									key,
									html(context)),
								htmls),
							existingStyles);
					case 'Styled':
						var styled = child.a;
						return _Utils_eq(context, $mdgriffith$elm_ui$Internal$Model$asParagraph) ? _Utils_Tuple2(
							A2(
								$elm$core$List$cons,
								_Utils_Tuple2(
									key,
									A2(styled.html, $mdgriffith$elm_ui$Internal$Model$NoStyleSheet, context)),
								htmls),
							$elm$core$List$isEmpty(existingStyles) ? styled.styles : _Utils_ap(styled.styles, existingStyles)) : _Utils_Tuple2(
							A2(
								$elm$core$List$cons,
								_Utils_Tuple2(
									key,
									A2(styled.html, $mdgriffith$elm_ui$Internal$Model$NoStyleSheet, context)),
								htmls),
							$elm$core$List$isEmpty(existingStyles) ? styled.styles : _Utils_ap(styled.styles, existingStyles));
					case 'Text':
						var str = child.a;
						return _Utils_Tuple2(
							A2(
								$elm$core$List$cons,
								_Utils_Tuple2(
									key,
									_Utils_eq(context, $mdgriffith$elm_ui$Internal$Model$asEl) ? $mdgriffith$elm_ui$Internal$Model$textElementFill(str) : $mdgriffith$elm_ui$Internal$Model$textElement(str)),
								htmls),
							existingStyles);
					default:
						return _Utils_Tuple2(htmls, existingStyles);
				}
			});
		var gather = F2(
			function (child, _v6) {
				var htmls = _v6.a;
				var existingStyles = _v6.b;
				switch (child.$) {
					case 'Unstyled':
						var html = child.a;
						return _Utils_eq(context, $mdgriffith$elm_ui$Internal$Model$asParagraph) ? _Utils_Tuple2(
							A2(
								$elm$core$List$cons,
								html(context),
								htmls),
							existingStyles) : _Utils_Tuple2(
							A2(
								$elm$core$List$cons,
								html(context),
								htmls),
							existingStyles);
					case 'Styled':
						var styled = child.a;
						return _Utils_eq(context, $mdgriffith$elm_ui$Internal$Model$asParagraph) ? _Utils_Tuple2(
							A2(
								$elm$core$List$cons,
								A2(styled.html, $mdgriffith$elm_ui$Internal$Model$NoStyleSheet, context),
								htmls),
							$elm$core$List$isEmpty(existingStyles) ? styled.styles : _Utils_ap(styled.styles, existingStyles)) : _Utils_Tuple2(
							A2(
								$elm$core$List$cons,
								A2(styled.html, $mdgriffith$elm_ui$Internal$Model$NoStyleSheet, context),
								htmls),
							$elm$core$List$isEmpty(existingStyles) ? styled.styles : _Utils_ap(styled.styles, existingStyles));
					case 'Text':
						var str = child.a;
						return _Utils_Tuple2(
							A2(
								$elm$core$List$cons,
								_Utils_eq(context, $mdgriffith$elm_ui$Internal$Model$asEl) ? $mdgriffith$elm_ui$Internal$Model$textElementFill(str) : $mdgriffith$elm_ui$Internal$Model$textElement(str),
								htmls),
							existingStyles);
					default:
						return _Utils_Tuple2(htmls, existingStyles);
				}
			});
		if (children.$ === 'Keyed') {
			var keyedChildren = children.a;
			var _v1 = A3(
				$elm$core$List$foldr,
				gatherKeyed,
				_Utils_Tuple2(_List_Nil, _List_Nil),
				keyedChildren);
			var keyed = _v1.a;
			var styles = _v1.b;
			var newStyles = $elm$core$List$isEmpty(styles) ? rendered.styles : _Utils_ap(rendered.styles, styles);
			if (!newStyles.b) {
				return $mdgriffith$elm_ui$Internal$Model$Unstyled(
					A5(
						$mdgriffith$elm_ui$Internal$Model$finalizeNode,
						rendered.has,
						rendered.node,
						rendered.attributes,
						$mdgriffith$elm_ui$Internal$Model$Keyed(
							A3($mdgriffith$elm_ui$Internal$Model$addKeyedChildren, 'nearby-element-pls', keyed, rendered.children)),
						$mdgriffith$elm_ui$Internal$Model$NoStyleSheet));
			} else {
				var allStyles = newStyles;
				return $mdgriffith$elm_ui$Internal$Model$Styled(
					{
						html: A4(
							$mdgriffith$elm_ui$Internal$Model$finalizeNode,
							rendered.has,
							rendered.node,
							rendered.attributes,
							$mdgriffith$elm_ui$Internal$Model$Keyed(
								A3($mdgriffith$elm_ui$Internal$Model$addKeyedChildren, 'nearby-element-pls', keyed, rendered.children))),
						styles: allStyles
					});
			}
		} else {
			var unkeyedChildren = children.a;
			var _v3 = A3(
				$elm$core$List$foldr,
				gather,
				_Utils_Tuple2(_List_Nil, _List_Nil),
				unkeyedChildren);
			var unkeyed = _v3.a;
			var styles = _v3.b;
			var newStyles = $elm$core$List$isEmpty(styles) ? rendered.styles : _Utils_ap(rendered.styles, styles);
			if (!newStyles.b) {
				return $mdgriffith$elm_ui$Internal$Model$Unstyled(
					A5(
						$mdgriffith$elm_ui$Internal$Model$finalizeNode,
						rendered.has,
						rendered.node,
						rendered.attributes,
						$mdgriffith$elm_ui$Internal$Model$Unkeyed(
							A2($mdgriffith$elm_ui$Internal$Model$addChildren, unkeyed, rendered.children)),
						$mdgriffith$elm_ui$Internal$Model$NoStyleSheet));
			} else {
				var allStyles = newStyles;
				return $mdgriffith$elm_ui$Internal$Model$Styled(
					{
						html: A4(
							$mdgriffith$elm_ui$Internal$Model$finalizeNode,
							rendered.has,
							rendered.node,
							rendered.attributes,
							$mdgriffith$elm_ui$Internal$Model$Unkeyed(
								A2($mdgriffith$elm_ui$Internal$Model$addChildren, unkeyed, rendered.children))),
						styles: allStyles
					});
			}
		}
	});
var $mdgriffith$elm_ui$Internal$Model$Single = F3(
	function (a, b, c) {
		return {$: 'Single', a: a, b: b, c: c};
	});
var $mdgriffith$elm_ui$Internal$Model$Transform = function (a) {
	return {$: 'Transform', a: a};
};
var $mdgriffith$elm_ui$Internal$Flag$Field = F2(
	function (a, b) {
		return {$: 'Field', a: a, b: b};
	});
var $elm$core$Bitwise$or = _Bitwise_or;
var $mdgriffith$elm_ui$Internal$Flag$add = F2(
	function (myFlag, _v0) {
		var one = _v0.a;
		var two = _v0.b;
		if (myFlag.$ === 'Flag') {
			var first = myFlag.a;
			return A2($mdgriffith$elm_ui$Internal$Flag$Field, first | one, two);
		} else {
			var second = myFlag.a;
			return A2($mdgriffith$elm_ui$Internal$Flag$Field, one, second | two);
		}
	});
var $mdgriffith$elm_ui$Internal$Model$ChildrenBehind = function (a) {
	return {$: 'ChildrenBehind', a: a};
};
var $mdgriffith$elm_ui$Internal$Model$ChildrenBehindAndInFront = F2(
	function (a, b) {
		return {$: 'ChildrenBehindAndInFront', a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Model$ChildrenInFront = function (a) {
	return {$: 'ChildrenInFront', a: a};
};
var $mdgriffith$elm_ui$Internal$Model$nearbyElement = F2(
	function (location, elem) {
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class(
					function () {
						switch (location.$) {
							case 'Above':
								return A2(
									$elm$core$String$join,
									' ',
									_List_fromArray(
										[$mdgriffith$elm_ui$Internal$Style$classes.nearby, $mdgriffith$elm_ui$Internal$Style$classes.single, $mdgriffith$elm_ui$Internal$Style$classes.above]));
							case 'Below':
								return A2(
									$elm$core$String$join,
									' ',
									_List_fromArray(
										[$mdgriffith$elm_ui$Internal$Style$classes.nearby, $mdgriffith$elm_ui$Internal$Style$classes.single, $mdgriffith$elm_ui$Internal$Style$classes.below]));
							case 'OnRight':
								return A2(
									$elm$core$String$join,
									' ',
									_List_fromArray(
										[$mdgriffith$elm_ui$Internal$Style$classes.nearby, $mdgriffith$elm_ui$Internal$Style$classes.single, $mdgriffith$elm_ui$Internal$Style$classes.onRight]));
							case 'OnLeft':
								return A2(
									$elm$core$String$join,
									' ',
									_List_fromArray(
										[$mdgriffith$elm_ui$Internal$Style$classes.nearby, $mdgriffith$elm_ui$Internal$Style$classes.single, $mdgriffith$elm_ui$Internal$Style$classes.onLeft]));
							case 'InFront':
								return A2(
									$elm$core$String$join,
									' ',
									_List_fromArray(
										[$mdgriffith$elm_ui$Internal$Style$classes.nearby, $mdgriffith$elm_ui$Internal$Style$classes.single, $mdgriffith$elm_ui$Internal$Style$classes.inFront]));
							default:
								return A2(
									$elm$core$String$join,
									' ',
									_List_fromArray(
										[$mdgriffith$elm_ui$Internal$Style$classes.nearby, $mdgriffith$elm_ui$Internal$Style$classes.single, $mdgriffith$elm_ui$Internal$Style$classes.behind]));
						}
					}())
				]),
			_List_fromArray(
				[
					function () {
					switch (elem.$) {
						case 'Empty':
							return $elm$virtual_dom$VirtualDom$text('');
						case 'Text':
							var str = elem.a;
							return $mdgriffith$elm_ui$Internal$Model$textElement(str);
						case 'Unstyled':
							var html = elem.a;
							return html($mdgriffith$elm_ui$Internal$Model$asEl);
						default:
							var styled = elem.a;
							return A2(styled.html, $mdgriffith$elm_ui$Internal$Model$NoStyleSheet, $mdgriffith$elm_ui$Internal$Model$asEl);
					}
				}()
				]));
	});
var $mdgriffith$elm_ui$Internal$Model$addNearbyElement = F3(
	function (location, elem, existing) {
		var nearby = A2($mdgriffith$elm_ui$Internal$Model$nearbyElement, location, elem);
		switch (existing.$) {
			case 'NoNearbyChildren':
				if (location.$ === 'Behind') {
					return $mdgriffith$elm_ui$Internal$Model$ChildrenBehind(
						_List_fromArray(
							[nearby]));
				} else {
					return $mdgriffith$elm_ui$Internal$Model$ChildrenInFront(
						_List_fromArray(
							[nearby]));
				}
			case 'ChildrenBehind':
				var existingBehind = existing.a;
				if (location.$ === 'Behind') {
					return $mdgriffith$elm_ui$Internal$Model$ChildrenBehind(
						A2($elm$core$List$cons, nearby, existingBehind));
				} else {
					return A2(
						$mdgriffith$elm_ui$Internal$Model$ChildrenBehindAndInFront,
						existingBehind,
						_List_fromArray(
							[nearby]));
				}
			case 'ChildrenInFront':
				var existingInFront = existing.a;
				if (location.$ === 'Behind') {
					return A2(
						$mdgriffith$elm_ui$Internal$Model$ChildrenBehindAndInFront,
						_List_fromArray(
							[nearby]),
						existingInFront);
				} else {
					return $mdgriffith$elm_ui$Internal$Model$ChildrenInFront(
						A2($elm$core$List$cons, nearby, existingInFront));
				}
			default:
				var existingBehind = existing.a;
				var existingInFront = existing.b;
				if (location.$ === 'Behind') {
					return A2(
						$mdgriffith$elm_ui$Internal$Model$ChildrenBehindAndInFront,
						A2($elm$core$List$cons, nearby, existingBehind),
						existingInFront);
				} else {
					return A2(
						$mdgriffith$elm_ui$Internal$Model$ChildrenBehindAndInFront,
						existingBehind,
						A2($elm$core$List$cons, nearby, existingInFront));
				}
		}
	});
var $mdgriffith$elm_ui$Internal$Model$Embedded = F2(
	function (a, b) {
		return {$: 'Embedded', a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Model$NodeName = function (a) {
	return {$: 'NodeName', a: a};
};
var $mdgriffith$elm_ui$Internal$Model$addNodeName = F2(
	function (newNode, old) {
		switch (old.$) {
			case 'Generic':
				return $mdgriffith$elm_ui$Internal$Model$NodeName(newNode);
			case 'NodeName':
				var name = old.a;
				return A2($mdgriffith$elm_ui$Internal$Model$Embedded, name, newNode);
			default:
				var x = old.a;
				var y = old.b;
				return A2($mdgriffith$elm_ui$Internal$Model$Embedded, x, y);
		}
	});
var $mdgriffith$elm_ui$Internal$Model$alignXName = function (align) {
	switch (align.$) {
		case 'Left':
			return $mdgriffith$elm_ui$Internal$Style$classes.alignedHorizontally + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.alignLeft);
		case 'Right':
			return $mdgriffith$elm_ui$Internal$Style$classes.alignedHorizontally + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.alignRight);
		default:
			return $mdgriffith$elm_ui$Internal$Style$classes.alignedHorizontally + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.alignCenterX);
	}
};
var $mdgriffith$elm_ui$Internal$Model$alignYName = function (align) {
	switch (align.$) {
		case 'Top':
			return $mdgriffith$elm_ui$Internal$Style$classes.alignedVertically + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.alignTop);
		case 'Bottom':
			return $mdgriffith$elm_ui$Internal$Style$classes.alignedVertically + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.alignBottom);
		default:
			return $mdgriffith$elm_ui$Internal$Style$classes.alignedVertically + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.alignCenterY);
	}
};
var $mdgriffith$elm_ui$Internal$Model$FullTransform = F4(
	function (a, b, c, d) {
		return {$: 'FullTransform', a: a, b: b, c: c, d: d};
	});
var $mdgriffith$elm_ui$Internal$Model$Moved = function (a) {
	return {$: 'Moved', a: a};
};
var $mdgriffith$elm_ui$Internal$Model$composeTransformation = F2(
	function (transform, component) {
		switch (transform.$) {
			case 'Untransformed':
				switch (component.$) {
					case 'MoveX':
						var x = component.a;
						return $mdgriffith$elm_ui$Internal$Model$Moved(
							_Utils_Tuple3(x, 0, 0));
					case 'MoveY':
						var y = component.a;
						return $mdgriffith$elm_ui$Internal$Model$Moved(
							_Utils_Tuple3(0, y, 0));
					case 'MoveZ':
						var z = component.a;
						return $mdgriffith$elm_ui$Internal$Model$Moved(
							_Utils_Tuple3(0, 0, z));
					case 'MoveXYZ':
						var xyz = component.a;
						return $mdgriffith$elm_ui$Internal$Model$Moved(xyz);
					case 'Rotate':
						var xyz = component.a;
						var angle = component.b;
						return A4(
							$mdgriffith$elm_ui$Internal$Model$FullTransform,
							_Utils_Tuple3(0, 0, 0),
							_Utils_Tuple3(1, 1, 1),
							xyz,
							angle);
					default:
						var xyz = component.a;
						return A4(
							$mdgriffith$elm_ui$Internal$Model$FullTransform,
							_Utils_Tuple3(0, 0, 0),
							xyz,
							_Utils_Tuple3(0, 0, 1),
							0);
				}
			case 'Moved':
				var moved = transform.a;
				var x = moved.a;
				var y = moved.b;
				var z = moved.c;
				switch (component.$) {
					case 'MoveX':
						var newX = component.a;
						return $mdgriffith$elm_ui$Internal$Model$Moved(
							_Utils_Tuple3(newX, y, z));
					case 'MoveY':
						var newY = component.a;
						return $mdgriffith$elm_ui$Internal$Model$Moved(
							_Utils_Tuple3(x, newY, z));
					case 'MoveZ':
						var newZ = component.a;
						return $mdgriffith$elm_ui$Internal$Model$Moved(
							_Utils_Tuple3(x, y, newZ));
					case 'MoveXYZ':
						var xyz = component.a;
						return $mdgriffith$elm_ui$Internal$Model$Moved(xyz);
					case 'Rotate':
						var xyz = component.a;
						var angle = component.b;
						return A4(
							$mdgriffith$elm_ui$Internal$Model$FullTransform,
							moved,
							_Utils_Tuple3(1, 1, 1),
							xyz,
							angle);
					default:
						var scale = component.a;
						return A4(
							$mdgriffith$elm_ui$Internal$Model$FullTransform,
							moved,
							scale,
							_Utils_Tuple3(0, 0, 1),
							0);
				}
			default:
				var moved = transform.a;
				var x = moved.a;
				var y = moved.b;
				var z = moved.c;
				var scaled = transform.b;
				var origin = transform.c;
				var angle = transform.d;
				switch (component.$) {
					case 'MoveX':
						var newX = component.a;
						return A4(
							$mdgriffith$elm_ui$Internal$Model$FullTransform,
							_Utils_Tuple3(newX, y, z),
							scaled,
							origin,
							angle);
					case 'MoveY':
						var newY = component.a;
						return A4(
							$mdgriffith$elm_ui$Internal$Model$FullTransform,
							_Utils_Tuple3(x, newY, z),
							scaled,
							origin,
							angle);
					case 'MoveZ':
						var newZ = component.a;
						return A4(
							$mdgriffith$elm_ui$Internal$Model$FullTransform,
							_Utils_Tuple3(x, y, newZ),
							scaled,
							origin,
							angle);
					case 'MoveXYZ':
						var newMove = component.a;
						return A4($mdgriffith$elm_ui$Internal$Model$FullTransform, newMove, scaled, origin, angle);
					case 'Rotate':
						var newOrigin = component.a;
						var newAngle = component.b;
						return A4($mdgriffith$elm_ui$Internal$Model$FullTransform, moved, scaled, newOrigin, newAngle);
					default:
						var newScale = component.a;
						return A4($mdgriffith$elm_ui$Internal$Model$FullTransform, moved, newScale, origin, angle);
				}
		}
	});
var $mdgriffith$elm_ui$Internal$Flag$height = $mdgriffith$elm_ui$Internal$Flag$flag(7);
var $mdgriffith$elm_ui$Internal$Flag$heightContent = $mdgriffith$elm_ui$Internal$Flag$flag(36);
var $mdgriffith$elm_ui$Internal$Flag$merge = F2(
	function (_v0, _v1) {
		var one = _v0.a;
		var two = _v0.b;
		var three = _v1.a;
		var four = _v1.b;
		return A2($mdgriffith$elm_ui$Internal$Flag$Field, one | three, two | four);
	});
var $mdgriffith$elm_ui$Internal$Flag$none = A2($mdgriffith$elm_ui$Internal$Flag$Field, 0, 0);
var $mdgriffith$elm_ui$Internal$Model$renderHeight = function (h) {
	switch (h.$) {
		case 'Px':
			var px = h.a;
			var val = $elm$core$String$fromInt(px);
			var name = 'height-px-' + val;
			return _Utils_Tuple3(
				$mdgriffith$elm_ui$Internal$Flag$none,
				$mdgriffith$elm_ui$Internal$Style$classes.heightExact + (' ' + name),
				_List_fromArray(
					[
						A3($mdgriffith$elm_ui$Internal$Model$Single, name, 'height', val + 'px')
					]));
		case 'Content':
			return _Utils_Tuple3(
				A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$heightContent, $mdgriffith$elm_ui$Internal$Flag$none),
				$mdgriffith$elm_ui$Internal$Style$classes.heightContent,
				_List_Nil);
		case 'Fill':
			var portion = h.a;
			return (portion === 1) ? _Utils_Tuple3(
				A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$heightFill, $mdgriffith$elm_ui$Internal$Flag$none),
				$mdgriffith$elm_ui$Internal$Style$classes.heightFill,
				_List_Nil) : _Utils_Tuple3(
				A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$heightFill, $mdgriffith$elm_ui$Internal$Flag$none),
				$mdgriffith$elm_ui$Internal$Style$classes.heightFillPortion + (' height-fill-' + $elm$core$String$fromInt(portion)),
				_List_fromArray(
					[
						A3(
						$mdgriffith$elm_ui$Internal$Model$Single,
						$mdgriffith$elm_ui$Internal$Style$classes.any + ('.' + ($mdgriffith$elm_ui$Internal$Style$classes.column + (' > ' + $mdgriffith$elm_ui$Internal$Style$dot(
							'height-fill-' + $elm$core$String$fromInt(portion))))),
						'flex-grow',
						$elm$core$String$fromInt(portion * 100000))
					]));
		case 'Min':
			var minSize = h.a;
			var len = h.b;
			var cls = 'min-height-' + $elm$core$String$fromInt(minSize);
			var style = A3(
				$mdgriffith$elm_ui$Internal$Model$Single,
				cls,
				'min-height',
				$elm$core$String$fromInt(minSize) + 'px !important');
			var _v1 = $mdgriffith$elm_ui$Internal$Model$renderHeight(len);
			var newFlag = _v1.a;
			var newAttrs = _v1.b;
			var newStyle = _v1.c;
			return _Utils_Tuple3(
				A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$heightBetween, newFlag),
				cls + (' ' + newAttrs),
				A2($elm$core$List$cons, style, newStyle));
		default:
			var maxSize = h.a;
			var len = h.b;
			var cls = 'max-height-' + $elm$core$String$fromInt(maxSize);
			var style = A3(
				$mdgriffith$elm_ui$Internal$Model$Single,
				cls,
				'max-height',
				$elm$core$String$fromInt(maxSize) + 'px');
			var _v2 = $mdgriffith$elm_ui$Internal$Model$renderHeight(len);
			var newFlag = _v2.a;
			var newAttrs = _v2.b;
			var newStyle = _v2.c;
			return _Utils_Tuple3(
				A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$heightBetween, newFlag),
				cls + (' ' + newAttrs),
				A2($elm$core$List$cons, style, newStyle));
	}
};
var $mdgriffith$elm_ui$Internal$Flag$widthContent = $mdgriffith$elm_ui$Internal$Flag$flag(38);
var $mdgriffith$elm_ui$Internal$Model$renderWidth = function (w) {
	switch (w.$) {
		case 'Px':
			var px = w.a;
			return _Utils_Tuple3(
				$mdgriffith$elm_ui$Internal$Flag$none,
				$mdgriffith$elm_ui$Internal$Style$classes.widthExact + (' width-px-' + $elm$core$String$fromInt(px)),
				_List_fromArray(
					[
						A3(
						$mdgriffith$elm_ui$Internal$Model$Single,
						'width-px-' + $elm$core$String$fromInt(px),
						'width',
						$elm$core$String$fromInt(px) + 'px')
					]));
		case 'Content':
			return _Utils_Tuple3(
				A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$widthContent, $mdgriffith$elm_ui$Internal$Flag$none),
				$mdgriffith$elm_ui$Internal$Style$classes.widthContent,
				_List_Nil);
		case 'Fill':
			var portion = w.a;
			return (portion === 1) ? _Utils_Tuple3(
				A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$widthFill, $mdgriffith$elm_ui$Internal$Flag$none),
				$mdgriffith$elm_ui$Internal$Style$classes.widthFill,
				_List_Nil) : _Utils_Tuple3(
				A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$widthFill, $mdgriffith$elm_ui$Internal$Flag$none),
				$mdgriffith$elm_ui$Internal$Style$classes.widthFillPortion + (' width-fill-' + $elm$core$String$fromInt(portion)),
				_List_fromArray(
					[
						A3(
						$mdgriffith$elm_ui$Internal$Model$Single,
						$mdgriffith$elm_ui$Internal$Style$classes.any + ('.' + ($mdgriffith$elm_ui$Internal$Style$classes.row + (' > ' + $mdgriffith$elm_ui$Internal$Style$dot(
							'width-fill-' + $elm$core$String$fromInt(portion))))),
						'flex-grow',
						$elm$core$String$fromInt(portion * 100000))
					]));
		case 'Min':
			var minSize = w.a;
			var len = w.b;
			var cls = 'min-width-' + $elm$core$String$fromInt(minSize);
			var style = A3(
				$mdgriffith$elm_ui$Internal$Model$Single,
				cls,
				'min-width',
				$elm$core$String$fromInt(minSize) + 'px');
			var _v1 = $mdgriffith$elm_ui$Internal$Model$renderWidth(len);
			var newFlag = _v1.a;
			var newAttrs = _v1.b;
			var newStyle = _v1.c;
			return _Utils_Tuple3(
				A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$widthBetween, newFlag),
				cls + (' ' + newAttrs),
				A2($elm$core$List$cons, style, newStyle));
		default:
			var maxSize = w.a;
			var len = w.b;
			var cls = 'max-width-' + $elm$core$String$fromInt(maxSize);
			var style = A3(
				$mdgriffith$elm_ui$Internal$Model$Single,
				cls,
				'max-width',
				$elm$core$String$fromInt(maxSize) + 'px');
			var _v2 = $mdgriffith$elm_ui$Internal$Model$renderWidth(len);
			var newFlag = _v2.a;
			var newAttrs = _v2.b;
			var newStyle = _v2.c;
			return _Utils_Tuple3(
				A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$widthBetween, newFlag),
				cls + (' ' + newAttrs),
				A2($elm$core$List$cons, style, newStyle));
	}
};
var $mdgriffith$elm_ui$Internal$Flag$borderWidth = $mdgriffith$elm_ui$Internal$Flag$flag(27);
var $mdgriffith$elm_ui$Internal$Model$skippable = F2(
	function (flag, style) {
		if (_Utils_eq(flag, $mdgriffith$elm_ui$Internal$Flag$borderWidth)) {
			if (style.$ === 'Single') {
				var val = style.c;
				switch (val) {
					case '0px':
						return true;
					case '1px':
						return true;
					case '2px':
						return true;
					case '3px':
						return true;
					case '4px':
						return true;
					case '5px':
						return true;
					case '6px':
						return true;
					default:
						return false;
				}
			} else {
				return false;
			}
		} else {
			switch (style.$) {
				case 'FontSize':
					var i = style.a;
					return (i >= 8) && (i <= 32);
				case 'PaddingStyle':
					var name = style.a;
					var t = style.b;
					var r = style.c;
					var b = style.d;
					var l = style.e;
					return _Utils_eq(t, b) && (_Utils_eq(t, r) && (_Utils_eq(t, l) && ((t >= 0) && (t <= 24))));
				default:
					return false;
			}
		}
	});
var $mdgriffith$elm_ui$Internal$Flag$width = $mdgriffith$elm_ui$Internal$Flag$flag(6);
var $mdgriffith$elm_ui$Internal$Flag$xAlign = $mdgriffith$elm_ui$Internal$Flag$flag(30);
var $mdgriffith$elm_ui$Internal$Flag$yAlign = $mdgriffith$elm_ui$Internal$Flag$flag(29);
var $mdgriffith$elm_ui$Internal$Model$gatherAttrRecursive = F8(
	function (classes, node, has, transform, styles, attrs, children, elementAttrs) {
		gatherAttrRecursive:
		while (true) {
			if (!elementAttrs.b) {
				var _v1 = $mdgriffith$elm_ui$Internal$Model$transformClass(transform);
				if (_v1.$ === 'Nothing') {
					return {
						attributes: A2(
							$elm$core$List$cons,
							$elm$html$Html$Attributes$class(classes),
							attrs),
						children: children,
						has: has,
						node: node,
						styles: styles
					};
				} else {
					var _class = _v1.a;
					return {
						attributes: A2(
							$elm$core$List$cons,
							$elm$html$Html$Attributes$class(classes + (' ' + _class)),
							attrs),
						children: children,
						has: has,
						node: node,
						styles: A2(
							$elm$core$List$cons,
							$mdgriffith$elm_ui$Internal$Model$Transform(transform),
							styles)
					};
				}
			} else {
				var attribute = elementAttrs.a;
				var remaining = elementAttrs.b;
				switch (attribute.$) {
					case 'NoAttribute':
						var $temp$classes = classes,
							$temp$node = node,
							$temp$has = has,
							$temp$transform = transform,
							$temp$styles = styles,
							$temp$attrs = attrs,
							$temp$children = children,
							$temp$elementAttrs = remaining;
						classes = $temp$classes;
						node = $temp$node;
						has = $temp$has;
						transform = $temp$transform;
						styles = $temp$styles;
						attrs = $temp$attrs;
						children = $temp$children;
						elementAttrs = $temp$elementAttrs;
						continue gatherAttrRecursive;
					case 'Class':
						var flag = attribute.a;
						var exactClassName = attribute.b;
						if (A2($mdgriffith$elm_ui$Internal$Flag$present, flag, has)) {
							var $temp$classes = classes,
								$temp$node = node,
								$temp$has = has,
								$temp$transform = transform,
								$temp$styles = styles,
								$temp$attrs = attrs,
								$temp$children = children,
								$temp$elementAttrs = remaining;
							classes = $temp$classes;
							node = $temp$node;
							has = $temp$has;
							transform = $temp$transform;
							styles = $temp$styles;
							attrs = $temp$attrs;
							children = $temp$children;
							elementAttrs = $temp$elementAttrs;
							continue gatherAttrRecursive;
						} else {
							var $temp$classes = exactClassName + (' ' + classes),
								$temp$node = node,
								$temp$has = A2($mdgriffith$elm_ui$Internal$Flag$add, flag, has),
								$temp$transform = transform,
								$temp$styles = styles,
								$temp$attrs = attrs,
								$temp$children = children,
								$temp$elementAttrs = remaining;
							classes = $temp$classes;
							node = $temp$node;
							has = $temp$has;
							transform = $temp$transform;
							styles = $temp$styles;
							attrs = $temp$attrs;
							children = $temp$children;
							elementAttrs = $temp$elementAttrs;
							continue gatherAttrRecursive;
						}
					case 'Attr':
						var actualAttribute = attribute.a;
						var $temp$classes = classes,
							$temp$node = node,
							$temp$has = has,
							$temp$transform = transform,
							$temp$styles = styles,
							$temp$attrs = A2($elm$core$List$cons, actualAttribute, attrs),
							$temp$children = children,
							$temp$elementAttrs = remaining;
						classes = $temp$classes;
						node = $temp$node;
						has = $temp$has;
						transform = $temp$transform;
						styles = $temp$styles;
						attrs = $temp$attrs;
						children = $temp$children;
						elementAttrs = $temp$elementAttrs;
						continue gatherAttrRecursive;
					case 'StyleClass':
						var flag = attribute.a;
						var style = attribute.b;
						if (A2($mdgriffith$elm_ui$Internal$Flag$present, flag, has)) {
							var $temp$classes = classes,
								$temp$node = node,
								$temp$has = has,
								$temp$transform = transform,
								$temp$styles = styles,
								$temp$attrs = attrs,
								$temp$children = children,
								$temp$elementAttrs = remaining;
							classes = $temp$classes;
							node = $temp$node;
							has = $temp$has;
							transform = $temp$transform;
							styles = $temp$styles;
							attrs = $temp$attrs;
							children = $temp$children;
							elementAttrs = $temp$elementAttrs;
							continue gatherAttrRecursive;
						} else {
							if (A2($mdgriffith$elm_ui$Internal$Model$skippable, flag, style)) {
								var $temp$classes = $mdgriffith$elm_ui$Internal$Model$getStyleName(style) + (' ' + classes),
									$temp$node = node,
									$temp$has = A2($mdgriffith$elm_ui$Internal$Flag$add, flag, has),
									$temp$transform = transform,
									$temp$styles = styles,
									$temp$attrs = attrs,
									$temp$children = children,
									$temp$elementAttrs = remaining;
								classes = $temp$classes;
								node = $temp$node;
								has = $temp$has;
								transform = $temp$transform;
								styles = $temp$styles;
								attrs = $temp$attrs;
								children = $temp$children;
								elementAttrs = $temp$elementAttrs;
								continue gatherAttrRecursive;
							} else {
								var $temp$classes = $mdgriffith$elm_ui$Internal$Model$getStyleName(style) + (' ' + classes),
									$temp$node = node,
									$temp$has = A2($mdgriffith$elm_ui$Internal$Flag$add, flag, has),
									$temp$transform = transform,
									$temp$styles = A2($elm$core$List$cons, style, styles),
									$temp$attrs = attrs,
									$temp$children = children,
									$temp$elementAttrs = remaining;
								classes = $temp$classes;
								node = $temp$node;
								has = $temp$has;
								transform = $temp$transform;
								styles = $temp$styles;
								attrs = $temp$attrs;
								children = $temp$children;
								elementAttrs = $temp$elementAttrs;
								continue gatherAttrRecursive;
							}
						}
					case 'TransformComponent':
						var flag = attribute.a;
						var component = attribute.b;
						var $temp$classes = classes,
							$temp$node = node,
							$temp$has = A2($mdgriffith$elm_ui$Internal$Flag$add, flag, has),
							$temp$transform = A2($mdgriffith$elm_ui$Internal$Model$composeTransformation, transform, component),
							$temp$styles = styles,
							$temp$attrs = attrs,
							$temp$children = children,
							$temp$elementAttrs = remaining;
						classes = $temp$classes;
						node = $temp$node;
						has = $temp$has;
						transform = $temp$transform;
						styles = $temp$styles;
						attrs = $temp$attrs;
						children = $temp$children;
						elementAttrs = $temp$elementAttrs;
						continue gatherAttrRecursive;
					case 'Width':
						var width = attribute.a;
						if (A2($mdgriffith$elm_ui$Internal$Flag$present, $mdgriffith$elm_ui$Internal$Flag$width, has)) {
							var $temp$classes = classes,
								$temp$node = node,
								$temp$has = has,
								$temp$transform = transform,
								$temp$styles = styles,
								$temp$attrs = attrs,
								$temp$children = children,
								$temp$elementAttrs = remaining;
							classes = $temp$classes;
							node = $temp$node;
							has = $temp$has;
							transform = $temp$transform;
							styles = $temp$styles;
							attrs = $temp$attrs;
							children = $temp$children;
							elementAttrs = $temp$elementAttrs;
							continue gatherAttrRecursive;
						} else {
							switch (width.$) {
								case 'Px':
									var px = width.a;
									var $temp$classes = ($mdgriffith$elm_ui$Internal$Style$classes.widthExact + (' width-px-' + $elm$core$String$fromInt(px))) + (' ' + classes),
										$temp$node = node,
										$temp$has = A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$width, has),
										$temp$transform = transform,
										$temp$styles = A2(
										$elm$core$List$cons,
										A3(
											$mdgriffith$elm_ui$Internal$Model$Single,
											'width-px-' + $elm$core$String$fromInt(px),
											'width',
											$elm$core$String$fromInt(px) + 'px'),
										styles),
										$temp$attrs = attrs,
										$temp$children = children,
										$temp$elementAttrs = remaining;
									classes = $temp$classes;
									node = $temp$node;
									has = $temp$has;
									transform = $temp$transform;
									styles = $temp$styles;
									attrs = $temp$attrs;
									children = $temp$children;
									elementAttrs = $temp$elementAttrs;
									continue gatherAttrRecursive;
								case 'Content':
									var $temp$classes = classes + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.widthContent),
										$temp$node = node,
										$temp$has = A2(
										$mdgriffith$elm_ui$Internal$Flag$add,
										$mdgriffith$elm_ui$Internal$Flag$widthContent,
										A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$width, has)),
										$temp$transform = transform,
										$temp$styles = styles,
										$temp$attrs = attrs,
										$temp$children = children,
										$temp$elementAttrs = remaining;
									classes = $temp$classes;
									node = $temp$node;
									has = $temp$has;
									transform = $temp$transform;
									styles = $temp$styles;
									attrs = $temp$attrs;
									children = $temp$children;
									elementAttrs = $temp$elementAttrs;
									continue gatherAttrRecursive;
								case 'Fill':
									var portion = width.a;
									if (portion === 1) {
										var $temp$classes = classes + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.widthFill),
											$temp$node = node,
											$temp$has = A2(
											$mdgriffith$elm_ui$Internal$Flag$add,
											$mdgriffith$elm_ui$Internal$Flag$widthFill,
											A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$width, has)),
											$temp$transform = transform,
											$temp$styles = styles,
											$temp$attrs = attrs,
											$temp$children = children,
											$temp$elementAttrs = remaining;
										classes = $temp$classes;
										node = $temp$node;
										has = $temp$has;
										transform = $temp$transform;
										styles = $temp$styles;
										attrs = $temp$attrs;
										children = $temp$children;
										elementAttrs = $temp$elementAttrs;
										continue gatherAttrRecursive;
									} else {
										var $temp$classes = classes + (' ' + ($mdgriffith$elm_ui$Internal$Style$classes.widthFillPortion + (' width-fill-' + $elm$core$String$fromInt(portion)))),
											$temp$node = node,
											$temp$has = A2(
											$mdgriffith$elm_ui$Internal$Flag$add,
											$mdgriffith$elm_ui$Internal$Flag$widthFill,
											A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$width, has)),
											$temp$transform = transform,
											$temp$styles = A2(
											$elm$core$List$cons,
											A3(
												$mdgriffith$elm_ui$Internal$Model$Single,
												$mdgriffith$elm_ui$Internal$Style$classes.any + ('.' + ($mdgriffith$elm_ui$Internal$Style$classes.row + (' > ' + $mdgriffith$elm_ui$Internal$Style$dot(
													'width-fill-' + $elm$core$String$fromInt(portion))))),
												'flex-grow',
												$elm$core$String$fromInt(portion * 100000)),
											styles),
											$temp$attrs = attrs,
											$temp$children = children,
											$temp$elementAttrs = remaining;
										classes = $temp$classes;
										node = $temp$node;
										has = $temp$has;
										transform = $temp$transform;
										styles = $temp$styles;
										attrs = $temp$attrs;
										children = $temp$children;
										elementAttrs = $temp$elementAttrs;
										continue gatherAttrRecursive;
									}
								default:
									var _v4 = $mdgriffith$elm_ui$Internal$Model$renderWidth(width);
									var addToFlags = _v4.a;
									var newClass = _v4.b;
									var newStyles = _v4.c;
									var $temp$classes = classes + (' ' + newClass),
										$temp$node = node,
										$temp$has = A2(
										$mdgriffith$elm_ui$Internal$Flag$merge,
										addToFlags,
										A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$width, has)),
										$temp$transform = transform,
										$temp$styles = _Utils_ap(newStyles, styles),
										$temp$attrs = attrs,
										$temp$children = children,
										$temp$elementAttrs = remaining;
									classes = $temp$classes;
									node = $temp$node;
									has = $temp$has;
									transform = $temp$transform;
									styles = $temp$styles;
									attrs = $temp$attrs;
									children = $temp$children;
									elementAttrs = $temp$elementAttrs;
									continue gatherAttrRecursive;
							}
						}
					case 'Height':
						var height = attribute.a;
						if (A2($mdgriffith$elm_ui$Internal$Flag$present, $mdgriffith$elm_ui$Internal$Flag$height, has)) {
							var $temp$classes = classes,
								$temp$node = node,
								$temp$has = has,
								$temp$transform = transform,
								$temp$styles = styles,
								$temp$attrs = attrs,
								$temp$children = children,
								$temp$elementAttrs = remaining;
							classes = $temp$classes;
							node = $temp$node;
							has = $temp$has;
							transform = $temp$transform;
							styles = $temp$styles;
							attrs = $temp$attrs;
							children = $temp$children;
							elementAttrs = $temp$elementAttrs;
							continue gatherAttrRecursive;
						} else {
							switch (height.$) {
								case 'Px':
									var px = height.a;
									var val = $elm$core$String$fromInt(px) + 'px';
									var name = 'height-px-' + val;
									var $temp$classes = $mdgriffith$elm_ui$Internal$Style$classes.heightExact + (' ' + (name + (' ' + classes))),
										$temp$node = node,
										$temp$has = A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$height, has),
										$temp$transform = transform,
										$temp$styles = A2(
										$elm$core$List$cons,
										A3($mdgriffith$elm_ui$Internal$Model$Single, name, 'height ', val),
										styles),
										$temp$attrs = attrs,
										$temp$children = children,
										$temp$elementAttrs = remaining;
									classes = $temp$classes;
									node = $temp$node;
									has = $temp$has;
									transform = $temp$transform;
									styles = $temp$styles;
									attrs = $temp$attrs;
									children = $temp$children;
									elementAttrs = $temp$elementAttrs;
									continue gatherAttrRecursive;
								case 'Content':
									var $temp$classes = $mdgriffith$elm_ui$Internal$Style$classes.heightContent + (' ' + classes),
										$temp$node = node,
										$temp$has = A2(
										$mdgriffith$elm_ui$Internal$Flag$add,
										$mdgriffith$elm_ui$Internal$Flag$heightContent,
										A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$height, has)),
										$temp$transform = transform,
										$temp$styles = styles,
										$temp$attrs = attrs,
										$temp$children = children,
										$temp$elementAttrs = remaining;
									classes = $temp$classes;
									node = $temp$node;
									has = $temp$has;
									transform = $temp$transform;
									styles = $temp$styles;
									attrs = $temp$attrs;
									children = $temp$children;
									elementAttrs = $temp$elementAttrs;
									continue gatherAttrRecursive;
								case 'Fill':
									var portion = height.a;
									if (portion === 1) {
										var $temp$classes = $mdgriffith$elm_ui$Internal$Style$classes.heightFill + (' ' + classes),
											$temp$node = node,
											$temp$has = A2(
											$mdgriffith$elm_ui$Internal$Flag$add,
											$mdgriffith$elm_ui$Internal$Flag$heightFill,
											A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$height, has)),
											$temp$transform = transform,
											$temp$styles = styles,
											$temp$attrs = attrs,
											$temp$children = children,
											$temp$elementAttrs = remaining;
										classes = $temp$classes;
										node = $temp$node;
										has = $temp$has;
										transform = $temp$transform;
										styles = $temp$styles;
										attrs = $temp$attrs;
										children = $temp$children;
										elementAttrs = $temp$elementAttrs;
										continue gatherAttrRecursive;
									} else {
										var $temp$classes = classes + (' ' + ($mdgriffith$elm_ui$Internal$Style$classes.heightFillPortion + (' height-fill-' + $elm$core$String$fromInt(portion)))),
											$temp$node = node,
											$temp$has = A2(
											$mdgriffith$elm_ui$Internal$Flag$add,
											$mdgriffith$elm_ui$Internal$Flag$heightFill,
											A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$height, has)),
											$temp$transform = transform,
											$temp$styles = A2(
											$elm$core$List$cons,
											A3(
												$mdgriffith$elm_ui$Internal$Model$Single,
												$mdgriffith$elm_ui$Internal$Style$classes.any + ('.' + ($mdgriffith$elm_ui$Internal$Style$classes.column + (' > ' + $mdgriffith$elm_ui$Internal$Style$dot(
													'height-fill-' + $elm$core$String$fromInt(portion))))),
												'flex-grow',
												$elm$core$String$fromInt(portion * 100000)),
											styles),
											$temp$attrs = attrs,
											$temp$children = children,
											$temp$elementAttrs = remaining;
										classes = $temp$classes;
										node = $temp$node;
										has = $temp$has;
										transform = $temp$transform;
										styles = $temp$styles;
										attrs = $temp$attrs;
										children = $temp$children;
										elementAttrs = $temp$elementAttrs;
										continue gatherAttrRecursive;
									}
								default:
									var _v6 = $mdgriffith$elm_ui$Internal$Model$renderHeight(height);
									var addToFlags = _v6.a;
									var newClass = _v6.b;
									var newStyles = _v6.c;
									var $temp$classes = classes + (' ' + newClass),
										$temp$node = node,
										$temp$has = A2(
										$mdgriffith$elm_ui$Internal$Flag$merge,
										addToFlags,
										A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$height, has)),
										$temp$transform = transform,
										$temp$styles = _Utils_ap(newStyles, styles),
										$temp$attrs = attrs,
										$temp$children = children,
										$temp$elementAttrs = remaining;
									classes = $temp$classes;
									node = $temp$node;
									has = $temp$has;
									transform = $temp$transform;
									styles = $temp$styles;
									attrs = $temp$attrs;
									children = $temp$children;
									elementAttrs = $temp$elementAttrs;
									continue gatherAttrRecursive;
							}
						}
					case 'Describe':
						var description = attribute.a;
						switch (description.$) {
							case 'Main':
								var $temp$classes = classes,
									$temp$node = A2($mdgriffith$elm_ui$Internal$Model$addNodeName, 'main', node),
									$temp$has = has,
									$temp$transform = transform,
									$temp$styles = styles,
									$temp$attrs = attrs,
									$temp$children = children,
									$temp$elementAttrs = remaining;
								classes = $temp$classes;
								node = $temp$node;
								has = $temp$has;
								transform = $temp$transform;
								styles = $temp$styles;
								attrs = $temp$attrs;
								children = $temp$children;
								elementAttrs = $temp$elementAttrs;
								continue gatherAttrRecursive;
							case 'Navigation':
								var $temp$classes = classes,
									$temp$node = A2($mdgriffith$elm_ui$Internal$Model$addNodeName, 'nav', node),
									$temp$has = has,
									$temp$transform = transform,
									$temp$styles = styles,
									$temp$attrs = attrs,
									$temp$children = children,
									$temp$elementAttrs = remaining;
								classes = $temp$classes;
								node = $temp$node;
								has = $temp$has;
								transform = $temp$transform;
								styles = $temp$styles;
								attrs = $temp$attrs;
								children = $temp$children;
								elementAttrs = $temp$elementAttrs;
								continue gatherAttrRecursive;
							case 'ContentInfo':
								var $temp$classes = classes,
									$temp$node = A2($mdgriffith$elm_ui$Internal$Model$addNodeName, 'footer', node),
									$temp$has = has,
									$temp$transform = transform,
									$temp$styles = styles,
									$temp$attrs = attrs,
									$temp$children = children,
									$temp$elementAttrs = remaining;
								classes = $temp$classes;
								node = $temp$node;
								has = $temp$has;
								transform = $temp$transform;
								styles = $temp$styles;
								attrs = $temp$attrs;
								children = $temp$children;
								elementAttrs = $temp$elementAttrs;
								continue gatherAttrRecursive;
							case 'Complementary':
								var $temp$classes = classes,
									$temp$node = A2($mdgriffith$elm_ui$Internal$Model$addNodeName, 'aside', node),
									$temp$has = has,
									$temp$transform = transform,
									$temp$styles = styles,
									$temp$attrs = attrs,
									$temp$children = children,
									$temp$elementAttrs = remaining;
								classes = $temp$classes;
								node = $temp$node;
								has = $temp$has;
								transform = $temp$transform;
								styles = $temp$styles;
								attrs = $temp$attrs;
								children = $temp$children;
								elementAttrs = $temp$elementAttrs;
								continue gatherAttrRecursive;
							case 'Heading':
								var i = description.a;
								if (i <= 1) {
									var $temp$classes = classes,
										$temp$node = A2($mdgriffith$elm_ui$Internal$Model$addNodeName, 'h1', node),
										$temp$has = has,
										$temp$transform = transform,
										$temp$styles = styles,
										$temp$attrs = attrs,
										$temp$children = children,
										$temp$elementAttrs = remaining;
									classes = $temp$classes;
									node = $temp$node;
									has = $temp$has;
									transform = $temp$transform;
									styles = $temp$styles;
									attrs = $temp$attrs;
									children = $temp$children;
									elementAttrs = $temp$elementAttrs;
									continue gatherAttrRecursive;
								} else {
									if (i < 7) {
										var $temp$classes = classes,
											$temp$node = A2(
											$mdgriffith$elm_ui$Internal$Model$addNodeName,
											'h' + $elm$core$String$fromInt(i),
											node),
											$temp$has = has,
											$temp$transform = transform,
											$temp$styles = styles,
											$temp$attrs = attrs,
											$temp$children = children,
											$temp$elementAttrs = remaining;
										classes = $temp$classes;
										node = $temp$node;
										has = $temp$has;
										transform = $temp$transform;
										styles = $temp$styles;
										attrs = $temp$attrs;
										children = $temp$children;
										elementAttrs = $temp$elementAttrs;
										continue gatherAttrRecursive;
									} else {
										var $temp$classes = classes,
											$temp$node = A2($mdgriffith$elm_ui$Internal$Model$addNodeName, 'h6', node),
											$temp$has = has,
											$temp$transform = transform,
											$temp$styles = styles,
											$temp$attrs = attrs,
											$temp$children = children,
											$temp$elementAttrs = remaining;
										classes = $temp$classes;
										node = $temp$node;
										has = $temp$has;
										transform = $temp$transform;
										styles = $temp$styles;
										attrs = $temp$attrs;
										children = $temp$children;
										elementAttrs = $temp$elementAttrs;
										continue gatherAttrRecursive;
									}
								}
							case 'Paragraph':
								var $temp$classes = classes,
									$temp$node = node,
									$temp$has = has,
									$temp$transform = transform,
									$temp$styles = styles,
									$temp$attrs = attrs,
									$temp$children = children,
									$temp$elementAttrs = remaining;
								classes = $temp$classes;
								node = $temp$node;
								has = $temp$has;
								transform = $temp$transform;
								styles = $temp$styles;
								attrs = $temp$attrs;
								children = $temp$children;
								elementAttrs = $temp$elementAttrs;
								continue gatherAttrRecursive;
							case 'Button':
								var $temp$classes = classes,
									$temp$node = node,
									$temp$has = has,
									$temp$transform = transform,
									$temp$styles = styles,
									$temp$attrs = A2(
									$elm$core$List$cons,
									A2($elm$virtual_dom$VirtualDom$attribute, 'role', 'button'),
									attrs),
									$temp$children = children,
									$temp$elementAttrs = remaining;
								classes = $temp$classes;
								node = $temp$node;
								has = $temp$has;
								transform = $temp$transform;
								styles = $temp$styles;
								attrs = $temp$attrs;
								children = $temp$children;
								elementAttrs = $temp$elementAttrs;
								continue gatherAttrRecursive;
							case 'Label':
								var label = description.a;
								var $temp$classes = classes,
									$temp$node = node,
									$temp$has = has,
									$temp$transform = transform,
									$temp$styles = styles,
									$temp$attrs = A2(
									$elm$core$List$cons,
									A2($elm$virtual_dom$VirtualDom$attribute, 'aria-label', label),
									attrs),
									$temp$children = children,
									$temp$elementAttrs = remaining;
								classes = $temp$classes;
								node = $temp$node;
								has = $temp$has;
								transform = $temp$transform;
								styles = $temp$styles;
								attrs = $temp$attrs;
								children = $temp$children;
								elementAttrs = $temp$elementAttrs;
								continue gatherAttrRecursive;
							case 'LivePolite':
								var $temp$classes = classes,
									$temp$node = node,
									$temp$has = has,
									$temp$transform = transform,
									$temp$styles = styles,
									$temp$attrs = A2(
									$elm$core$List$cons,
									A2($elm$virtual_dom$VirtualDom$attribute, 'aria-live', 'polite'),
									attrs),
									$temp$children = children,
									$temp$elementAttrs = remaining;
								classes = $temp$classes;
								node = $temp$node;
								has = $temp$has;
								transform = $temp$transform;
								styles = $temp$styles;
								attrs = $temp$attrs;
								children = $temp$children;
								elementAttrs = $temp$elementAttrs;
								continue gatherAttrRecursive;
							default:
								var $temp$classes = classes,
									$temp$node = node,
									$temp$has = has,
									$temp$transform = transform,
									$temp$styles = styles,
									$temp$attrs = A2(
									$elm$core$List$cons,
									A2($elm$virtual_dom$VirtualDom$attribute, 'aria-live', 'assertive'),
									attrs),
									$temp$children = children,
									$temp$elementAttrs = remaining;
								classes = $temp$classes;
								node = $temp$node;
								has = $temp$has;
								transform = $temp$transform;
								styles = $temp$styles;
								attrs = $temp$attrs;
								children = $temp$children;
								elementAttrs = $temp$elementAttrs;
								continue gatherAttrRecursive;
						}
					case 'Nearby':
						var location = attribute.a;
						var elem = attribute.b;
						var newStyles = function () {
							switch (elem.$) {
								case 'Empty':
									return styles;
								case 'Text':
									var str = elem.a;
									return styles;
								case 'Unstyled':
									var html = elem.a;
									return styles;
								default:
									var styled = elem.a;
									return _Utils_ap(styles, styled.styles);
							}
						}();
						var $temp$classes = classes,
							$temp$node = node,
							$temp$has = has,
							$temp$transform = transform,
							$temp$styles = newStyles,
							$temp$attrs = attrs,
							$temp$children = A3($mdgriffith$elm_ui$Internal$Model$addNearbyElement, location, elem, children),
							$temp$elementAttrs = remaining;
						classes = $temp$classes;
						node = $temp$node;
						has = $temp$has;
						transform = $temp$transform;
						styles = $temp$styles;
						attrs = $temp$attrs;
						children = $temp$children;
						elementAttrs = $temp$elementAttrs;
						continue gatherAttrRecursive;
					case 'AlignX':
						var x = attribute.a;
						if (A2($mdgriffith$elm_ui$Internal$Flag$present, $mdgriffith$elm_ui$Internal$Flag$xAlign, has)) {
							var $temp$classes = classes,
								$temp$node = node,
								$temp$has = has,
								$temp$transform = transform,
								$temp$styles = styles,
								$temp$attrs = attrs,
								$temp$children = children,
								$temp$elementAttrs = remaining;
							classes = $temp$classes;
							node = $temp$node;
							has = $temp$has;
							transform = $temp$transform;
							styles = $temp$styles;
							attrs = $temp$attrs;
							children = $temp$children;
							elementAttrs = $temp$elementAttrs;
							continue gatherAttrRecursive;
						} else {
							var $temp$classes = $mdgriffith$elm_ui$Internal$Model$alignXName(x) + (' ' + classes),
								$temp$node = node,
								$temp$has = function (flags) {
								switch (x.$) {
									case 'CenterX':
										return A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$centerX, flags);
									case 'Right':
										return A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$alignRight, flags);
									default:
										return flags;
								}
							}(
								A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$xAlign, has)),
								$temp$transform = transform,
								$temp$styles = styles,
								$temp$attrs = attrs,
								$temp$children = children,
								$temp$elementAttrs = remaining;
							classes = $temp$classes;
							node = $temp$node;
							has = $temp$has;
							transform = $temp$transform;
							styles = $temp$styles;
							attrs = $temp$attrs;
							children = $temp$children;
							elementAttrs = $temp$elementAttrs;
							continue gatherAttrRecursive;
						}
					default:
						var y = attribute.a;
						if (A2($mdgriffith$elm_ui$Internal$Flag$present, $mdgriffith$elm_ui$Internal$Flag$yAlign, has)) {
							var $temp$classes = classes,
								$temp$node = node,
								$temp$has = has,
								$temp$transform = transform,
								$temp$styles = styles,
								$temp$attrs = attrs,
								$temp$children = children,
								$temp$elementAttrs = remaining;
							classes = $temp$classes;
							node = $temp$node;
							has = $temp$has;
							transform = $temp$transform;
							styles = $temp$styles;
							attrs = $temp$attrs;
							children = $temp$children;
							elementAttrs = $temp$elementAttrs;
							continue gatherAttrRecursive;
						} else {
							var $temp$classes = $mdgriffith$elm_ui$Internal$Model$alignYName(y) + (' ' + classes),
								$temp$node = node,
								$temp$has = function (flags) {
								switch (y.$) {
									case 'CenterY':
										return A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$centerY, flags);
									case 'Bottom':
										return A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$alignBottom, flags);
									default:
										return flags;
								}
							}(
								A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$yAlign, has)),
								$temp$transform = transform,
								$temp$styles = styles,
								$temp$attrs = attrs,
								$temp$children = children,
								$temp$elementAttrs = remaining;
							classes = $temp$classes;
							node = $temp$node;
							has = $temp$has;
							transform = $temp$transform;
							styles = $temp$styles;
							attrs = $temp$attrs;
							children = $temp$children;
							elementAttrs = $temp$elementAttrs;
							continue gatherAttrRecursive;
						}
				}
			}
		}
	});
var $mdgriffith$elm_ui$Internal$Model$Untransformed = {$: 'Untransformed'};
var $mdgriffith$elm_ui$Internal$Model$untransformed = $mdgriffith$elm_ui$Internal$Model$Untransformed;
var $mdgriffith$elm_ui$Internal$Model$element = F4(
	function (context, node, attributes, children) {
		return A3(
			$mdgriffith$elm_ui$Internal$Model$createElement,
			context,
			children,
			A8(
				$mdgriffith$elm_ui$Internal$Model$gatherAttrRecursive,
				$mdgriffith$elm_ui$Internal$Model$contextClasses(context),
				node,
				$mdgriffith$elm_ui$Internal$Flag$none,
				$mdgriffith$elm_ui$Internal$Model$untransformed,
				_List_Nil,
				_List_Nil,
				$mdgriffith$elm_ui$Internal$Model$NoNearbyChildren,
				$elm$core$List$reverse(attributes)));
	});
var $mdgriffith$elm_ui$Internal$Model$AllowHover = {$: 'AllowHover'};
var $mdgriffith$elm_ui$Internal$Model$Layout = {$: 'Layout'};
var $mdgriffith$elm_ui$Internal$Model$Rgba = F4(
	function (a, b, c, d) {
		return {$: 'Rgba', a: a, b: b, c: c, d: d};
	});
var $mdgriffith$elm_ui$Internal$Model$focusDefaultStyle = {
	backgroundColor: $elm$core$Maybe$Nothing,
	borderColor: $elm$core$Maybe$Nothing,
	shadow: $elm$core$Maybe$Just(
		{
			blur: 0,
			color: A4($mdgriffith$elm_ui$Internal$Model$Rgba, 155 / 255, 203 / 255, 1, 1),
			offset: _Utils_Tuple2(0, 0),
			size: 3
		})
};
var $mdgriffith$elm_ui$Internal$Model$optionsToRecord = function (options) {
	var combine = F2(
		function (opt, record) {
			switch (opt.$) {
				case 'HoverOption':
					var hoverable = opt.a;
					var _v4 = record.hover;
					if (_v4.$ === 'Nothing') {
						return _Utils_update(
							record,
							{
								hover: $elm$core$Maybe$Just(hoverable)
							});
					} else {
						return record;
					}
				case 'FocusStyleOption':
					var focusStyle = opt.a;
					var _v5 = record.focus;
					if (_v5.$ === 'Nothing') {
						return _Utils_update(
							record,
							{
								focus: $elm$core$Maybe$Just(focusStyle)
							});
					} else {
						return record;
					}
				default:
					var renderMode = opt.a;
					var _v6 = record.mode;
					if (_v6.$ === 'Nothing') {
						return _Utils_update(
							record,
							{
								mode: $elm$core$Maybe$Just(renderMode)
							});
					} else {
						return record;
					}
			}
		});
	var andFinally = function (record) {
		return {
			focus: function () {
				var _v0 = record.focus;
				if (_v0.$ === 'Nothing') {
					return $mdgriffith$elm_ui$Internal$Model$focusDefaultStyle;
				} else {
					var focusable = _v0.a;
					return focusable;
				}
			}(),
			hover: function () {
				var _v1 = record.hover;
				if (_v1.$ === 'Nothing') {
					return $mdgriffith$elm_ui$Internal$Model$AllowHover;
				} else {
					var hoverable = _v1.a;
					return hoverable;
				}
			}(),
			mode: function () {
				var _v2 = record.mode;
				if (_v2.$ === 'Nothing') {
					return $mdgriffith$elm_ui$Internal$Model$Layout;
				} else {
					var actualMode = _v2.a;
					return actualMode;
				}
			}()
		};
	};
	return andFinally(
		A3(
			$elm$core$List$foldr,
			combine,
			{focus: $elm$core$Maybe$Nothing, hover: $elm$core$Maybe$Nothing, mode: $elm$core$Maybe$Nothing},
			options));
};
var $mdgriffith$elm_ui$Internal$Model$toHtml = F2(
	function (mode, el) {
		switch (el.$) {
			case 'Unstyled':
				var html = el.a;
				return html($mdgriffith$elm_ui$Internal$Model$asEl);
			case 'Styled':
				var styles = el.a.styles;
				var html = el.a.html;
				return A2(
					html,
					mode(styles),
					$mdgriffith$elm_ui$Internal$Model$asEl);
			case 'Text':
				var text = el.a;
				return $mdgriffith$elm_ui$Internal$Model$textElement(text);
			default:
				return $mdgriffith$elm_ui$Internal$Model$textElement('');
		}
	});
var $mdgriffith$elm_ui$Internal$Model$renderRoot = F3(
	function (optionList, attributes, child) {
		var options = $mdgriffith$elm_ui$Internal$Model$optionsToRecord(optionList);
		var embedStyle = function () {
			var _v0 = options.mode;
			if (_v0.$ === 'NoStaticStyleSheet') {
				return $mdgriffith$elm_ui$Internal$Model$OnlyDynamic(options);
			} else {
				return $mdgriffith$elm_ui$Internal$Model$StaticRootAndDynamic(options);
			}
		}();
		return A2(
			$mdgriffith$elm_ui$Internal$Model$toHtml,
			embedStyle,
			A4(
				$mdgriffith$elm_ui$Internal$Model$element,
				$mdgriffith$elm_ui$Internal$Model$asEl,
				$mdgriffith$elm_ui$Internal$Model$div,
				attributes,
				$mdgriffith$elm_ui$Internal$Model$Unkeyed(
					_List_fromArray(
						[child]))));
	});
var $mdgriffith$elm_ui$Internal$Model$Colored = F3(
	function (a, b, c) {
		return {$: 'Colored', a: a, b: b, c: c};
	});
var $mdgriffith$elm_ui$Internal$Model$FontSize = function (a) {
	return {$: 'FontSize', a: a};
};
var $mdgriffith$elm_ui$Internal$Flag$bgColor = $mdgriffith$elm_ui$Internal$Flag$flag(8);
var $mdgriffith$elm_ui$Internal$Flag$fontColor = $mdgriffith$elm_ui$Internal$Flag$flag(14);
var $mdgriffith$elm_ui$Internal$Flag$fontSize = $mdgriffith$elm_ui$Internal$Flag$flag(4);
var $mdgriffith$elm_ui$Internal$Model$formatColorClass = function (_v0) {
	var red = _v0.a;
	var green = _v0.b;
	var blue = _v0.c;
	var alpha = _v0.d;
	return $mdgriffith$elm_ui$Internal$Model$floatClass(red) + ('-' + ($mdgriffith$elm_ui$Internal$Model$floatClass(green) + ('-' + ($mdgriffith$elm_ui$Internal$Model$floatClass(blue) + ('-' + $mdgriffith$elm_ui$Internal$Model$floatClass(alpha))))));
};
var $mdgriffith$elm_ui$Internal$Model$rootStyle = function () {
	var families = _List_fromArray(
		[
			$mdgriffith$elm_ui$Internal$Model$Typeface('Open Sans'),
			$mdgriffith$elm_ui$Internal$Model$Typeface('Helvetica'),
			$mdgriffith$elm_ui$Internal$Model$Typeface('Verdana'),
			$mdgriffith$elm_ui$Internal$Model$SansSerif
		]);
	return _List_fromArray(
		[
			A2(
			$mdgriffith$elm_ui$Internal$Model$StyleClass,
			$mdgriffith$elm_ui$Internal$Flag$bgColor,
			A3(
				$mdgriffith$elm_ui$Internal$Model$Colored,
				'bg-' + $mdgriffith$elm_ui$Internal$Model$formatColorClass(
					A4($mdgriffith$elm_ui$Internal$Model$Rgba, 1, 1, 1, 0)),
				'background-color',
				A4($mdgriffith$elm_ui$Internal$Model$Rgba, 1, 1, 1, 0))),
			A2(
			$mdgriffith$elm_ui$Internal$Model$StyleClass,
			$mdgriffith$elm_ui$Internal$Flag$fontColor,
			A3(
				$mdgriffith$elm_ui$Internal$Model$Colored,
				'fc-' + $mdgriffith$elm_ui$Internal$Model$formatColorClass(
					A4($mdgriffith$elm_ui$Internal$Model$Rgba, 0, 0, 0, 1)),
				'color',
				A4($mdgriffith$elm_ui$Internal$Model$Rgba, 0, 0, 0, 1))),
			A2(
			$mdgriffith$elm_ui$Internal$Model$StyleClass,
			$mdgriffith$elm_ui$Internal$Flag$fontSize,
			$mdgriffith$elm_ui$Internal$Model$FontSize(20)),
			A2(
			$mdgriffith$elm_ui$Internal$Model$StyleClass,
			$mdgriffith$elm_ui$Internal$Flag$fontFamily,
			A2(
				$mdgriffith$elm_ui$Internal$Model$FontFamily,
				A3($elm$core$List$foldl, $mdgriffith$elm_ui$Internal$Model$renderFontClassName, 'font-', families),
				families))
		]);
}();
var $mdgriffith$elm_ui$Element$layoutWith = F3(
	function (_v0, attrs, child) {
		var options = _v0.options;
		return A3(
			$mdgriffith$elm_ui$Internal$Model$renderRoot,
			options,
			A2(
				$elm$core$List$cons,
				$mdgriffith$elm_ui$Internal$Model$htmlClass(
					A2(
						$elm$core$String$join,
						' ',
						_List_fromArray(
							[$mdgriffith$elm_ui$Internal$Style$classes.root, $mdgriffith$elm_ui$Internal$Style$classes.any, $mdgriffith$elm_ui$Internal$Style$classes.single]))),
				_Utils_ap($mdgriffith$elm_ui$Internal$Model$rootStyle, attrs)),
			child);
	});
var $mdgriffith$elm_ui$Element$layout = $mdgriffith$elm_ui$Element$layoutWith(
	{options: _List_Nil});
var $author$project$Main$ChangeConvergenceThreshold = function (a) {
	return {$: 'ChangeConvergenceThreshold', a: a};
};
var $author$project$Main$ChangeCropBottom = function (a) {
	return {$: 'ChangeCropBottom', a: a};
};
var $author$project$Main$ChangeCropLeft = function (a) {
	return {$: 'ChangeCropLeft', a: a};
};
var $author$project$Main$ChangeCropRight = function (a) {
	return {$: 'ChangeCropRight', a: a};
};
var $author$project$Main$ChangeCropTop = function (a) {
	return {$: 'ChangeCropTop', a: a};
};
var $author$project$Main$ChangeMaxIter = function (a) {
	return {$: 'ChangeMaxIter', a: a};
};
var $author$project$Main$ChangeMaxVerbosity = function (a) {
	return {$: 'ChangeMaxVerbosity', a: a};
};
var $author$project$Main$ChangeZMean = function (a) {
	return {$: 'ChangeZMean', a: a};
};
var $author$project$Main$GoToPageRegistration = {$: 'GoToPageRegistration'};
var $author$project$Main$ParamsInfoMsg = function (a) {
	return {$: 'ParamsInfoMsg', a: a};
};
var $author$project$Main$ParamsMsg = function (a) {
	return {$: 'ParamsMsg', a: a};
};
var $author$project$Main$ToggleCrop = function (a) {
	return {$: 'ToggleCrop', a: a};
};
var $author$project$Main$ToggleInfoConvergenceThreshold = function (a) {
	return {$: 'ToggleInfoConvergenceThreshold', a: a};
};
var $author$project$Main$ToggleInfoCrop = function (a) {
	return {$: 'ToggleInfoCrop', a: a};
};
var $author$project$Main$ToggleInfoMaxIterations = function (a) {
	return {$: 'ToggleInfoMaxIterations', a: a};
};
var $author$project$Main$ToggleInfoMaxVerbosity = function (a) {
	return {$: 'ToggleInfoMaxVerbosity', a: a};
};
var $author$project$Main$ToggleInfoZMean = function (a) {
	return {$: 'ToggleInfoZMean', a: a};
};
var $mdgriffith$elm_ui$Internal$Model$Above = {$: 'Above'};
var $mdgriffith$elm_ui$Internal$Model$Nearby = F2(
	function (a, b) {
		return {$: 'Nearby', a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Model$NoAttribute = {$: 'NoAttribute'};
var $mdgriffith$elm_ui$Element$createNearby = F2(
	function (loc, element) {
		if (element.$ === 'Empty') {
			return $mdgriffith$elm_ui$Internal$Model$NoAttribute;
		} else {
			return A2($mdgriffith$elm_ui$Internal$Model$Nearby, loc, element);
		}
	});
var $mdgriffith$elm_ui$Element$above = function (element) {
	return A2($mdgriffith$elm_ui$Element$createNearby, $mdgriffith$elm_ui$Internal$Model$Above, element);
};
var $mdgriffith$elm_ui$Internal$Model$Below = {$: 'Below'};
var $mdgriffith$elm_ui$Element$below = function (element) {
	return A2($mdgriffith$elm_ui$Element$createNearby, $mdgriffith$elm_ui$Internal$Model$Below, element);
};
var $mdgriffith$elm_ui$Internal$Model$AlignX = function (a) {
	return {$: 'AlignX', a: a};
};
var $mdgriffith$elm_ui$Internal$Model$CenterX = {$: 'CenterX'};
var $mdgriffith$elm_ui$Element$centerX = $mdgriffith$elm_ui$Internal$Model$AlignX($mdgriffith$elm_ui$Internal$Model$CenterX);
var $mdgriffith$elm_ui$Internal$Model$AlignY = function (a) {
	return {$: 'AlignY', a: a};
};
var $mdgriffith$elm_ui$Internal$Model$CenterY = {$: 'CenterY'};
var $mdgriffith$elm_ui$Element$centerY = $mdgriffith$elm_ui$Internal$Model$AlignY($mdgriffith$elm_ui$Internal$Model$CenterY);
var $mdgriffith$elm_ui$Element$rgb255 = F3(
	function (red, green, blue) {
		return A4($mdgriffith$elm_ui$Internal$Model$Rgba, red / 255, green / 255, blue / 255, 1);
	});
var $author$project$Style$black = A3($mdgriffith$elm_ui$Element$rgb255, 0, 0, 0);
var $mdgriffith$elm_ui$Internal$Flag$fontAlignment = $mdgriffith$elm_ui$Internal$Flag$flag(12);
var $mdgriffith$elm_ui$Element$Font$center = A2($mdgriffith$elm_ui$Internal$Model$Class, $mdgriffith$elm_ui$Internal$Flag$fontAlignment, $mdgriffith$elm_ui$Internal$Style$classes.textCenter);
var $mdgriffith$elm_ui$Element$Font$color = function (fontColor) {
	return A2(
		$mdgriffith$elm_ui$Internal$Model$StyleClass,
		$mdgriffith$elm_ui$Internal$Flag$fontColor,
		A3(
			$mdgriffith$elm_ui$Internal$Model$Colored,
			'fc-' + $mdgriffith$elm_ui$Internal$Model$formatColorClass(fontColor),
			'color',
			fontColor));
};
var $author$project$Style$errorColor = A3($mdgriffith$elm_ui$Element$rgb255, 180, 50, 50);
var $mdgriffith$elm_ui$Element$Input$HiddenLabel = function (a) {
	return {$: 'HiddenLabel', a: a};
};
var $mdgriffith$elm_ui$Element$Input$labelHidden = $mdgriffith$elm_ui$Element$Input$HiddenLabel;
var $mdgriffith$elm_ui$Internal$Model$PaddingStyle = F5(
	function (a, b, c, d, e) {
		return {$: 'PaddingStyle', a: a, b: b, c: c, d: d, e: e};
	});
var $mdgriffith$elm_ui$Internal$Flag$padding = $mdgriffith$elm_ui$Internal$Flag$flag(2);
var $mdgriffith$elm_ui$Element$paddingXY = F2(
	function (x, y) {
		if (_Utils_eq(x, y)) {
			var f = x;
			return A2(
				$mdgriffith$elm_ui$Internal$Model$StyleClass,
				$mdgriffith$elm_ui$Internal$Flag$padding,
				A5(
					$mdgriffith$elm_ui$Internal$Model$PaddingStyle,
					'p-' + $elm$core$String$fromInt(x),
					f,
					f,
					f,
					f));
		} else {
			var yFloat = y;
			var xFloat = x;
			return A2(
				$mdgriffith$elm_ui$Internal$Model$StyleClass,
				$mdgriffith$elm_ui$Internal$Flag$padding,
				A5(
					$mdgriffith$elm_ui$Internal$Model$PaddingStyle,
					'p-' + ($elm$core$String$fromInt(x) + ('-' + $elm$core$String$fromInt(y))),
					yFloat,
					xFloat,
					yFloat,
					xFloat));
		}
	});
var $mdgriffith$elm_ui$Internal$Model$Px = function (a) {
	return {$: 'Px', a: a};
};
var $mdgriffith$elm_ui$Element$px = $mdgriffith$elm_ui$Internal$Model$Px;
var $mdgriffith$elm_ui$Element$Input$TextInputNode = function (a) {
	return {$: 'TextInputNode', a: a};
};
var $mdgriffith$elm_ui$Element$Input$TextArea = {$: 'TextArea'};
var $mdgriffith$elm_ui$Internal$Model$Describe = function (a) {
	return {$: 'Describe', a: a};
};
var $mdgriffith$elm_ui$Internal$Model$LivePolite = {$: 'LivePolite'};
var $mdgriffith$elm_ui$Element$Region$announce = $mdgriffith$elm_ui$Internal$Model$Describe($mdgriffith$elm_ui$Internal$Model$LivePolite);
var $mdgriffith$elm_ui$Internal$Model$AsColumn = {$: 'AsColumn'};
var $mdgriffith$elm_ui$Internal$Model$asColumn = $mdgriffith$elm_ui$Internal$Model$AsColumn;
var $mdgriffith$elm_ui$Internal$Model$AsRow = {$: 'AsRow'};
var $mdgriffith$elm_ui$Internal$Model$asRow = $mdgriffith$elm_ui$Internal$Model$AsRow;
var $mdgriffith$elm_ui$Element$Input$applyLabel = F3(
	function (attrs, label, input) {
		if (label.$ === 'HiddenLabel') {
			var labelText = label.a;
			return A4(
				$mdgriffith$elm_ui$Internal$Model$element,
				$mdgriffith$elm_ui$Internal$Model$asColumn,
				$mdgriffith$elm_ui$Internal$Model$NodeName('label'),
				attrs,
				$mdgriffith$elm_ui$Internal$Model$Unkeyed(
					_List_fromArray(
						[input])));
		} else {
			var position = label.a;
			var labelAttrs = label.b;
			var labelChild = label.c;
			var labelElement = A4(
				$mdgriffith$elm_ui$Internal$Model$element,
				$mdgriffith$elm_ui$Internal$Model$asEl,
				$mdgriffith$elm_ui$Internal$Model$div,
				labelAttrs,
				$mdgriffith$elm_ui$Internal$Model$Unkeyed(
					_List_fromArray(
						[labelChild])));
			switch (position.$) {
				case 'Above':
					return A4(
						$mdgriffith$elm_ui$Internal$Model$element,
						$mdgriffith$elm_ui$Internal$Model$asColumn,
						$mdgriffith$elm_ui$Internal$Model$NodeName('label'),
						A2(
							$elm$core$List$cons,
							$mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.inputLabel),
							attrs),
						$mdgriffith$elm_ui$Internal$Model$Unkeyed(
							_List_fromArray(
								[labelElement, input])));
				case 'Below':
					return A4(
						$mdgriffith$elm_ui$Internal$Model$element,
						$mdgriffith$elm_ui$Internal$Model$asColumn,
						$mdgriffith$elm_ui$Internal$Model$NodeName('label'),
						A2(
							$elm$core$List$cons,
							$mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.inputLabel),
							attrs),
						$mdgriffith$elm_ui$Internal$Model$Unkeyed(
							_List_fromArray(
								[input, labelElement])));
				case 'OnRight':
					return A4(
						$mdgriffith$elm_ui$Internal$Model$element,
						$mdgriffith$elm_ui$Internal$Model$asRow,
						$mdgriffith$elm_ui$Internal$Model$NodeName('label'),
						A2(
							$elm$core$List$cons,
							$mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.inputLabel),
							attrs),
						$mdgriffith$elm_ui$Internal$Model$Unkeyed(
							_List_fromArray(
								[input, labelElement])));
				default:
					return A4(
						$mdgriffith$elm_ui$Internal$Model$element,
						$mdgriffith$elm_ui$Internal$Model$asRow,
						$mdgriffith$elm_ui$Internal$Model$NodeName('label'),
						A2(
							$elm$core$List$cons,
							$mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.inputLabel),
							attrs),
						$mdgriffith$elm_ui$Internal$Model$Unkeyed(
							_List_fromArray(
								[labelElement, input])));
			}
		}
	});
var $elm$html$Html$Attributes$attribute = $elm$virtual_dom$VirtualDom$attribute;
var $mdgriffith$elm_ui$Element$Input$autofill = A2(
	$elm$core$Basics$composeL,
	$mdgriffith$elm_ui$Internal$Model$Attr,
	$elm$html$Html$Attributes$attribute('autocomplete'));
var $mdgriffith$elm_ui$Internal$Model$Behind = {$: 'Behind'};
var $mdgriffith$elm_ui$Element$behindContent = function (element) {
	return A2($mdgriffith$elm_ui$Element$createNearby, $mdgriffith$elm_ui$Internal$Model$Behind, element);
};
var $mdgriffith$elm_ui$Internal$Model$MoveY = function (a) {
	return {$: 'MoveY', a: a};
};
var $mdgriffith$elm_ui$Internal$Model$TransformComponent = F2(
	function (a, b) {
		return {$: 'TransformComponent', a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Flag$moveY = $mdgriffith$elm_ui$Internal$Flag$flag(26);
var $mdgriffith$elm_ui$Element$moveUp = function (y) {
	return A2(
		$mdgriffith$elm_ui$Internal$Model$TransformComponent,
		$mdgriffith$elm_ui$Internal$Flag$moveY,
		$mdgriffith$elm_ui$Internal$Model$MoveY(-y));
};
var $mdgriffith$elm_ui$Element$Input$calcMoveToCompensateForPadding = function (attrs) {
	var gatherSpacing = F2(
		function (attr, found) {
			if ((attr.$ === 'StyleClass') && (attr.b.$ === 'SpacingStyle')) {
				var _v2 = attr.b;
				var x = _v2.b;
				var y = _v2.c;
				if (found.$ === 'Nothing') {
					return $elm$core$Maybe$Just(y);
				} else {
					return found;
				}
			} else {
				return found;
			}
		});
	var _v0 = A3($elm$core$List$foldr, gatherSpacing, $elm$core$Maybe$Nothing, attrs);
	if (_v0.$ === 'Nothing') {
		return $mdgriffith$elm_ui$Internal$Model$NoAttribute;
	} else {
		var vSpace = _v0.a;
		return $mdgriffith$elm_ui$Element$moveUp(
			$elm$core$Basics$floor(vSpace / 2));
	}
};
var $mdgriffith$elm_ui$Internal$Flag$cursor = $mdgriffith$elm_ui$Internal$Flag$flag(21);
var $mdgriffith$elm_ui$Element$Background$color = function (clr) {
	return A2(
		$mdgriffith$elm_ui$Internal$Model$StyleClass,
		$mdgriffith$elm_ui$Internal$Flag$bgColor,
		A3(
			$mdgriffith$elm_ui$Internal$Model$Colored,
			'bg-' + $mdgriffith$elm_ui$Internal$Model$formatColorClass(clr),
			'background-color',
			clr));
};
var $mdgriffith$elm_ui$Internal$Flag$borderColor = $mdgriffith$elm_ui$Internal$Flag$flag(28);
var $mdgriffith$elm_ui$Element$Border$color = function (clr) {
	return A2(
		$mdgriffith$elm_ui$Internal$Model$StyleClass,
		$mdgriffith$elm_ui$Internal$Flag$borderColor,
		A3(
			$mdgriffith$elm_ui$Internal$Model$Colored,
			'bc-' + $mdgriffith$elm_ui$Internal$Model$formatColorClass(clr),
			'border-color',
			clr));
};
var $mdgriffith$elm_ui$Element$rgb = F3(
	function (r, g, b) {
		return A4($mdgriffith$elm_ui$Internal$Model$Rgba, r, g, b, 1);
	});
var $mdgriffith$elm_ui$Element$Input$darkGrey = A3($mdgriffith$elm_ui$Element$rgb, 186 / 255, 189 / 255, 182 / 255);
var $mdgriffith$elm_ui$Element$Input$defaultTextPadding = A2($mdgriffith$elm_ui$Element$paddingXY, 12, 12);
var $mdgriffith$elm_ui$Internal$Model$Fill = function (a) {
	return {$: 'Fill', a: a};
};
var $mdgriffith$elm_ui$Element$fill = $mdgriffith$elm_ui$Internal$Model$Fill(1);
var $mdgriffith$elm_ui$Internal$Model$Height = function (a) {
	return {$: 'Height', a: a};
};
var $mdgriffith$elm_ui$Element$height = $mdgriffith$elm_ui$Internal$Model$Height;
var $mdgriffith$elm_ui$Internal$Flag$borderRound = $mdgriffith$elm_ui$Internal$Flag$flag(17);
var $mdgriffith$elm_ui$Element$Border$rounded = function (radius) {
	return A2(
		$mdgriffith$elm_ui$Internal$Model$StyleClass,
		$mdgriffith$elm_ui$Internal$Flag$borderRound,
		A3(
			$mdgriffith$elm_ui$Internal$Model$Single,
			'br-' + $elm$core$String$fromInt(radius),
			'border-radius',
			$elm$core$String$fromInt(radius) + 'px'));
};
var $mdgriffith$elm_ui$Internal$Model$Content = {$: 'Content'};
var $mdgriffith$elm_ui$Element$shrink = $mdgriffith$elm_ui$Internal$Model$Content;
var $mdgriffith$elm_ui$Internal$Model$SpacingStyle = F3(
	function (a, b, c) {
		return {$: 'SpacingStyle', a: a, b: b, c: c};
	});
var $mdgriffith$elm_ui$Internal$Flag$spacing = $mdgriffith$elm_ui$Internal$Flag$flag(3);
var $mdgriffith$elm_ui$Internal$Model$spacingName = F2(
	function (x, y) {
		return 'spacing-' + ($elm$core$String$fromInt(x) + ('-' + $elm$core$String$fromInt(y)));
	});
var $mdgriffith$elm_ui$Element$spacing = function (x) {
	return A2(
		$mdgriffith$elm_ui$Internal$Model$StyleClass,
		$mdgriffith$elm_ui$Internal$Flag$spacing,
		A3(
			$mdgriffith$elm_ui$Internal$Model$SpacingStyle,
			A2($mdgriffith$elm_ui$Internal$Model$spacingName, x, x),
			x,
			x));
};
var $mdgriffith$elm_ui$Element$Input$white = A3($mdgriffith$elm_ui$Element$rgb, 1, 1, 1);
var $mdgriffith$elm_ui$Internal$Model$Width = function (a) {
	return {$: 'Width', a: a};
};
var $mdgriffith$elm_ui$Element$width = $mdgriffith$elm_ui$Internal$Model$Width;
var $mdgriffith$elm_ui$Internal$Model$BorderWidth = F5(
	function (a, b, c, d, e) {
		return {$: 'BorderWidth', a: a, b: b, c: c, d: d, e: e};
	});
var $mdgriffith$elm_ui$Element$Border$width = function (v) {
	return A2(
		$mdgriffith$elm_ui$Internal$Model$StyleClass,
		$mdgriffith$elm_ui$Internal$Flag$borderWidth,
		A5(
			$mdgriffith$elm_ui$Internal$Model$BorderWidth,
			'b-' + $elm$core$String$fromInt(v),
			v,
			v,
			v,
			v));
};
var $mdgriffith$elm_ui$Element$Input$defaultTextBoxStyle = _List_fromArray(
	[
		$mdgriffith$elm_ui$Element$Input$defaultTextPadding,
		$mdgriffith$elm_ui$Element$Border$rounded(3),
		$mdgriffith$elm_ui$Element$Border$color($mdgriffith$elm_ui$Element$Input$darkGrey),
		$mdgriffith$elm_ui$Element$Background$color($mdgriffith$elm_ui$Element$Input$white),
		$mdgriffith$elm_ui$Element$Border$width(1),
		$mdgriffith$elm_ui$Element$spacing(5),
		$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill),
		$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$shrink)
	]);
var $mdgriffith$elm_ui$Element$Input$getHeight = function (attr) {
	if (attr.$ === 'Height') {
		var h = attr.a;
		return $elm$core$Maybe$Just(h);
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $mdgriffith$elm_ui$Element$Input$hasFocusStyle = function (attr) {
	if (((attr.$ === 'StyleClass') && (attr.b.$ === 'PseudoSelector')) && (attr.b.a.$ === 'Focus')) {
		var _v1 = attr.b;
		var _v2 = _v1.a;
		return true;
	} else {
		return false;
	}
};
var $mdgriffith$elm_ui$Internal$Model$Label = function (a) {
	return {$: 'Label', a: a};
};
var $mdgriffith$elm_ui$Element$Input$hiddenLabelAttribute = function (label) {
	if (label.$ === 'HiddenLabel') {
		var textLabel = label.a;
		return $mdgriffith$elm_ui$Internal$Model$Describe(
			$mdgriffith$elm_ui$Internal$Model$Label(textLabel));
	} else {
		return $mdgriffith$elm_ui$Internal$Model$NoAttribute;
	}
};
var $mdgriffith$elm_ui$Internal$Model$InFront = {$: 'InFront'};
var $mdgriffith$elm_ui$Element$inFront = function (element) {
	return A2($mdgriffith$elm_ui$Element$createNearby, $mdgriffith$elm_ui$Internal$Model$InFront, element);
};
var $mdgriffith$elm_ui$Element$Input$isConstrained = function (len) {
	isConstrained:
	while (true) {
		switch (len.$) {
			case 'Content':
				return false;
			case 'Px':
				return true;
			case 'Fill':
				return true;
			case 'Min':
				var l = len.b;
				var $temp$len = l;
				len = $temp$len;
				continue isConstrained;
			default:
				var l = len.b;
				return true;
		}
	}
};
var $mdgriffith$elm_ui$Element$Input$isHiddenLabel = function (label) {
	if (label.$ === 'HiddenLabel') {
		return true;
	} else {
		return false;
	}
};
var $mdgriffith$elm_ui$Element$Input$isStacked = function (label) {
	if (label.$ === 'Label') {
		var loc = label.a;
		switch (loc.$) {
			case 'OnRight':
				return false;
			case 'OnLeft':
				return false;
			case 'Above':
				return true;
			default:
				return true;
		}
	} else {
		return true;
	}
};
var $mdgriffith$elm_ui$Element$Input$negateBox = function (box) {
	return {bottom: -box.bottom, left: -box.left, right: -box.right, top: -box.top};
};
var $mdgriffith$elm_ui$Internal$Model$paddingName = F4(
	function (top, right, bottom, left) {
		return 'pad-' + ($elm$core$String$fromInt(top) + ('-' + ($elm$core$String$fromInt(right) + ('-' + ($elm$core$String$fromInt(bottom) + ('-' + $elm$core$String$fromInt(left)))))));
	});
var $mdgriffith$elm_ui$Element$paddingEach = function (_v0) {
	var top = _v0.top;
	var right = _v0.right;
	var bottom = _v0.bottom;
	var left = _v0.left;
	if (_Utils_eq(top, right) && (_Utils_eq(top, bottom) && _Utils_eq(top, left))) {
		var topFloat = top;
		return A2(
			$mdgriffith$elm_ui$Internal$Model$StyleClass,
			$mdgriffith$elm_ui$Internal$Flag$padding,
			A5(
				$mdgriffith$elm_ui$Internal$Model$PaddingStyle,
				'p-' + $elm$core$String$fromInt(top),
				topFloat,
				topFloat,
				topFloat,
				topFloat));
	} else {
		return A2(
			$mdgriffith$elm_ui$Internal$Model$StyleClass,
			$mdgriffith$elm_ui$Internal$Flag$padding,
			A5(
				$mdgriffith$elm_ui$Internal$Model$PaddingStyle,
				A4($mdgriffith$elm_ui$Internal$Model$paddingName, top, right, bottom, left),
				top,
				right,
				bottom,
				left));
	}
};
var $mdgriffith$elm_ui$Element$htmlAttribute = $mdgriffith$elm_ui$Internal$Model$Attr;
var $mdgriffith$elm_ui$Element$Input$isFill = function (len) {
	isFill:
	while (true) {
		switch (len.$) {
			case 'Fill':
				return true;
			case 'Content':
				return false;
			case 'Px':
				return false;
			case 'Min':
				var l = len.b;
				var $temp$len = l;
				len = $temp$len;
				continue isFill;
			default:
				var l = len.b;
				var $temp$len = l;
				len = $temp$len;
				continue isFill;
		}
	}
};
var $mdgriffith$elm_ui$Element$Input$isPixel = function (len) {
	isPixel:
	while (true) {
		switch (len.$) {
			case 'Content':
				return false;
			case 'Px':
				return true;
			case 'Fill':
				return false;
			case 'Min':
				var l = len.b;
				var $temp$len = l;
				len = $temp$len;
				continue isPixel;
			default:
				var l = len.b;
				var $temp$len = l;
				len = $temp$len;
				continue isPixel;
		}
	}
};
var $mdgriffith$elm_ui$Internal$Model$paddingNameFloat = F4(
	function (top, right, bottom, left) {
		return 'pad-' + ($mdgriffith$elm_ui$Internal$Model$floatClass(top) + ('-' + ($mdgriffith$elm_ui$Internal$Model$floatClass(right) + ('-' + ($mdgriffith$elm_ui$Internal$Model$floatClass(bottom) + ('-' + $mdgriffith$elm_ui$Internal$Model$floatClass(left)))))));
	});
var $mdgriffith$elm_ui$Element$Input$redistributeOver = F4(
	function (isMultiline, stacked, attr, els) {
		switch (attr.$) {
			case 'Nearby':
				return _Utils_update(
					els,
					{
						parent: A2($elm$core$List$cons, attr, els.parent)
					});
			case 'Width':
				var width = attr.a;
				return $mdgriffith$elm_ui$Element$Input$isFill(width) ? _Utils_update(
					els,
					{
						fullParent: A2($elm$core$List$cons, attr, els.fullParent),
						input: A2($elm$core$List$cons, attr, els.input),
						parent: A2($elm$core$List$cons, attr, els.parent)
					}) : (stacked ? _Utils_update(
					els,
					{
						fullParent: A2($elm$core$List$cons, attr, els.fullParent)
					}) : _Utils_update(
					els,
					{
						parent: A2($elm$core$List$cons, attr, els.parent)
					}));
			case 'Height':
				var height = attr.a;
				return (!stacked) ? _Utils_update(
					els,
					{
						fullParent: A2($elm$core$List$cons, attr, els.fullParent),
						parent: A2($elm$core$List$cons, attr, els.parent)
					}) : ($mdgriffith$elm_ui$Element$Input$isFill(height) ? _Utils_update(
					els,
					{
						fullParent: A2($elm$core$List$cons, attr, els.fullParent),
						parent: A2($elm$core$List$cons, attr, els.parent)
					}) : ($mdgriffith$elm_ui$Element$Input$isPixel(height) ? _Utils_update(
					els,
					{
						parent: A2($elm$core$List$cons, attr, els.parent)
					}) : _Utils_update(
					els,
					{
						parent: A2($elm$core$List$cons, attr, els.parent)
					})));
			case 'AlignX':
				return _Utils_update(
					els,
					{
						fullParent: A2($elm$core$List$cons, attr, els.fullParent)
					});
			case 'AlignY':
				return _Utils_update(
					els,
					{
						fullParent: A2($elm$core$List$cons, attr, els.fullParent)
					});
			case 'StyleClass':
				switch (attr.b.$) {
					case 'SpacingStyle':
						var _v1 = attr.b;
						return _Utils_update(
							els,
							{
								fullParent: A2($elm$core$List$cons, attr, els.fullParent),
								input: A2($elm$core$List$cons, attr, els.input),
								parent: A2($elm$core$List$cons, attr, els.parent),
								wrapper: A2($elm$core$List$cons, attr, els.wrapper)
							});
					case 'PaddingStyle':
						var cls = attr.a;
						var _v2 = attr.b;
						var pad = _v2.a;
						var t = _v2.b;
						var r = _v2.c;
						var b = _v2.d;
						var l = _v2.e;
						if (isMultiline) {
							return _Utils_update(
								els,
								{
									cover: A2($elm$core$List$cons, attr, els.cover),
									parent: A2($elm$core$List$cons, attr, els.parent)
								});
						} else {
							var newTop = t - A2($elm$core$Basics$min, t, b);
							var newLineHeight = $mdgriffith$elm_ui$Element$htmlAttribute(
								A2(
									$elm$html$Html$Attributes$style,
									'line-height',
									'calc(1.0em + ' + ($elm$core$String$fromFloat(
										2 * A2($elm$core$Basics$min, t, b)) + 'px)')));
							var newHeight = $mdgriffith$elm_ui$Element$htmlAttribute(
								A2(
									$elm$html$Html$Attributes$style,
									'height',
									'calc(1.0em + ' + ($elm$core$String$fromFloat(
										2 * A2($elm$core$Basics$min, t, b)) + 'px)')));
							var newBottom = b - A2($elm$core$Basics$min, t, b);
							var reducedVerticalPadding = A2(
								$mdgriffith$elm_ui$Internal$Model$StyleClass,
								$mdgriffith$elm_ui$Internal$Flag$padding,
								A5(
									$mdgriffith$elm_ui$Internal$Model$PaddingStyle,
									A4($mdgriffith$elm_ui$Internal$Model$paddingNameFloat, newTop, r, newBottom, l),
									newTop,
									r,
									newBottom,
									l));
							return _Utils_update(
								els,
								{
									cover: A2($elm$core$List$cons, attr, els.cover),
									input: A2(
										$elm$core$List$cons,
										newHeight,
										A2($elm$core$List$cons, newLineHeight, els.input)),
									parent: A2($elm$core$List$cons, reducedVerticalPadding, els.parent)
								});
						}
					case 'BorderWidth':
						var _v3 = attr.b;
						return _Utils_update(
							els,
							{
								cover: A2($elm$core$List$cons, attr, els.cover),
								parent: A2($elm$core$List$cons, attr, els.parent)
							});
					case 'Transform':
						return _Utils_update(
							els,
							{
								cover: A2($elm$core$List$cons, attr, els.cover),
								parent: A2($elm$core$List$cons, attr, els.parent)
							});
					case 'FontSize':
						return _Utils_update(
							els,
							{
								fullParent: A2($elm$core$List$cons, attr, els.fullParent)
							});
					case 'FontFamily':
						var _v4 = attr.b;
						return _Utils_update(
							els,
							{
								fullParent: A2($elm$core$List$cons, attr, els.fullParent)
							});
					default:
						var flag = attr.a;
						var cls = attr.b;
						return _Utils_update(
							els,
							{
								parent: A2($elm$core$List$cons, attr, els.parent)
							});
				}
			case 'NoAttribute':
				return els;
			case 'Attr':
				var a = attr.a;
				return _Utils_update(
					els,
					{
						input: A2($elm$core$List$cons, attr, els.input)
					});
			case 'Describe':
				return _Utils_update(
					els,
					{
						input: A2($elm$core$List$cons, attr, els.input)
					});
			case 'Class':
				return _Utils_update(
					els,
					{
						parent: A2($elm$core$List$cons, attr, els.parent)
					});
			default:
				return _Utils_update(
					els,
					{
						input: A2($elm$core$List$cons, attr, els.input)
					});
		}
	});
var $mdgriffith$elm_ui$Element$Input$redistribute = F3(
	function (isMultiline, stacked, attrs) {
		return function (redist) {
			return {
				cover: $elm$core$List$reverse(redist.cover),
				fullParent: $elm$core$List$reverse(redist.fullParent),
				input: $elm$core$List$reverse(redist.input),
				parent: $elm$core$List$reverse(redist.parent),
				wrapper: $elm$core$List$reverse(redist.wrapper)
			};
		}(
			A3(
				$elm$core$List$foldl,
				A2($mdgriffith$elm_ui$Element$Input$redistributeOver, isMultiline, stacked),
				{cover: _List_Nil, fullParent: _List_Nil, input: _List_Nil, parent: _List_Nil, wrapper: _List_Nil},
				attrs));
	});
var $mdgriffith$elm_ui$Element$Input$renderBox = function (_v0) {
	var top = _v0.top;
	var right = _v0.right;
	var bottom = _v0.bottom;
	var left = _v0.left;
	return $elm$core$String$fromInt(top) + ('px ' + ($elm$core$String$fromInt(right) + ('px ' + ($elm$core$String$fromInt(bottom) + ('px ' + ($elm$core$String$fromInt(left) + 'px'))))));
};
var $mdgriffith$elm_ui$Internal$Model$Transparency = F2(
	function (a, b) {
		return {$: 'Transparency', a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Flag$transparency = $mdgriffith$elm_ui$Internal$Flag$flag(0);
var $mdgriffith$elm_ui$Element$alpha = function (o) {
	var transparency = function (x) {
		return 1 - x;
	}(
		A2(
			$elm$core$Basics$min,
			1.0,
			A2($elm$core$Basics$max, 0.0, o)));
	return A2(
		$mdgriffith$elm_ui$Internal$Model$StyleClass,
		$mdgriffith$elm_ui$Internal$Flag$transparency,
		A2(
			$mdgriffith$elm_ui$Internal$Model$Transparency,
			'transparency-' + $mdgriffith$elm_ui$Internal$Model$floatClass(transparency),
			transparency));
};
var $mdgriffith$elm_ui$Element$Input$charcoal = A3($mdgriffith$elm_ui$Element$rgb, 136 / 255, 138 / 255, 133 / 255);
var $mdgriffith$elm_ui$Element$el = F2(
	function (attrs, child) {
		return A4(
			$mdgriffith$elm_ui$Internal$Model$element,
			$mdgriffith$elm_ui$Internal$Model$asEl,
			$mdgriffith$elm_ui$Internal$Model$div,
			A2(
				$elm$core$List$cons,
				$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$shrink),
				A2(
					$elm$core$List$cons,
					$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$shrink),
					attrs)),
			$mdgriffith$elm_ui$Internal$Model$Unkeyed(
				_List_fromArray(
					[child])));
	});
var $mdgriffith$elm_ui$Element$rgba = $mdgriffith$elm_ui$Internal$Model$Rgba;
var $mdgriffith$elm_ui$Element$Input$renderPlaceholder = F3(
	function (_v0, forPlaceholder, on) {
		var placeholderAttrs = _v0.a;
		var placeholderEl = _v0.b;
		return A2(
			$mdgriffith$elm_ui$Element$el,
			_Utils_ap(
				forPlaceholder,
				_Utils_ap(
					_List_fromArray(
						[
							$mdgriffith$elm_ui$Element$Font$color($mdgriffith$elm_ui$Element$Input$charcoal),
							$mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.noTextSelection + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.passPointerEvents)),
							$mdgriffith$elm_ui$Element$clip,
							$mdgriffith$elm_ui$Element$Border$color(
							A4($mdgriffith$elm_ui$Element$rgba, 0, 0, 0, 0)),
							$mdgriffith$elm_ui$Element$Background$color(
							A4($mdgriffith$elm_ui$Element$rgba, 0, 0, 0, 0)),
							$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$fill),
							$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill),
							$mdgriffith$elm_ui$Element$alpha(
							on ? 1 : 0)
						]),
					placeholderAttrs)),
			placeholderEl);
	});
var $mdgriffith$elm_ui$Element$scrollbarY = A2($mdgriffith$elm_ui$Internal$Model$Class, $mdgriffith$elm_ui$Internal$Flag$overflow, $mdgriffith$elm_ui$Internal$Style$classes.scrollbarsY);
var $elm$json$Json$Encode$bool = _Json_wrap;
var $elm$html$Html$Attributes$boolProperty = F2(
	function (key, bool) {
		return A2(
			_VirtualDom_property,
			key,
			$elm$json$Json$Encode$bool(bool));
	});
var $elm$html$Html$Attributes$spellcheck = $elm$html$Html$Attributes$boolProperty('spellcheck');
var $mdgriffith$elm_ui$Element$Input$spellcheck = A2($elm$core$Basics$composeL, $mdgriffith$elm_ui$Internal$Model$Attr, $elm$html$Html$Attributes$spellcheck);
var $mdgriffith$elm_ui$Internal$Model$Text = function (a) {
	return {$: 'Text', a: a};
};
var $mdgriffith$elm_ui$Element$text = function (content) {
	return $mdgriffith$elm_ui$Internal$Model$Text(content);
};
var $mdgriffith$elm_ui$Internal$Model$unstyled = A2($elm$core$Basics$composeL, $mdgriffith$elm_ui$Internal$Model$Unstyled, $elm$core$Basics$always);
var $mdgriffith$elm_ui$Element$Input$value = A2($elm$core$Basics$composeL, $mdgriffith$elm_ui$Internal$Model$Attr, $elm$html$Html$Attributes$value);
var $mdgriffith$elm_ui$Element$Input$textHelper = F3(
	function (textInput, attrs, textOptions) {
		var withDefaults = _Utils_ap($mdgriffith$elm_ui$Element$Input$defaultTextBoxStyle, attrs);
		var redistributed = A3(
			$mdgriffith$elm_ui$Element$Input$redistribute,
			_Utils_eq(textInput.type_, $mdgriffith$elm_ui$Element$Input$TextArea),
			$mdgriffith$elm_ui$Element$Input$isStacked(textOptions.label),
			withDefaults);
		var onlySpacing = function (attr) {
			if ((attr.$ === 'StyleClass') && (attr.b.$ === 'SpacingStyle')) {
				var _v9 = attr.b;
				return true;
			} else {
				return false;
			}
		};
		var heightConstrained = function () {
			var _v7 = textInput.type_;
			if (_v7.$ === 'TextInputNode') {
				var inputType = _v7.a;
				return false;
			} else {
				return A2(
					$elm$core$Maybe$withDefault,
					false,
					A2(
						$elm$core$Maybe$map,
						$mdgriffith$elm_ui$Element$Input$isConstrained,
						$elm$core$List$head(
							$elm$core$List$reverse(
								A2($elm$core$List$filterMap, $mdgriffith$elm_ui$Element$Input$getHeight, withDefaults)))));
			}
		}();
		var getPadding = function (attr) {
			if ((attr.$ === 'StyleClass') && (attr.b.$ === 'PaddingStyle')) {
				var cls = attr.a;
				var _v6 = attr.b;
				var pad = _v6.a;
				var t = _v6.b;
				var r = _v6.c;
				var b = _v6.d;
				var l = _v6.e;
				return $elm$core$Maybe$Just(
					{
						bottom: A2(
							$elm$core$Basics$max,
							0,
							$elm$core$Basics$floor(b - 3)),
						left: A2(
							$elm$core$Basics$max,
							0,
							$elm$core$Basics$floor(l - 3)),
						right: A2(
							$elm$core$Basics$max,
							0,
							$elm$core$Basics$floor(r - 3)),
						top: A2(
							$elm$core$Basics$max,
							0,
							$elm$core$Basics$floor(t - 3))
					});
			} else {
				return $elm$core$Maybe$Nothing;
			}
		};
		var parentPadding = A2(
			$elm$core$Maybe$withDefault,
			{bottom: 0, left: 0, right: 0, top: 0},
			$elm$core$List$head(
				$elm$core$List$reverse(
					A2($elm$core$List$filterMap, getPadding, withDefaults))));
		var inputElement = A4(
			$mdgriffith$elm_ui$Internal$Model$element,
			$mdgriffith$elm_ui$Internal$Model$asEl,
			function () {
				var _v3 = textInput.type_;
				if (_v3.$ === 'TextInputNode') {
					var inputType = _v3.a;
					return $mdgriffith$elm_ui$Internal$Model$NodeName('input');
				} else {
					return $mdgriffith$elm_ui$Internal$Model$NodeName('textarea');
				}
			}(),
			_Utils_ap(
				function () {
					var _v4 = textInput.type_;
					if (_v4.$ === 'TextInputNode') {
						var inputType = _v4.a;
						return _List_fromArray(
							[
								$mdgriffith$elm_ui$Internal$Model$Attr(
								$elm$html$Html$Attributes$type_(inputType)),
								$mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.inputText)
							]);
					} else {
						return _List_fromArray(
							[
								$mdgriffith$elm_ui$Element$clip,
								$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$fill),
								$mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.inputMultiline),
								$mdgriffith$elm_ui$Element$Input$calcMoveToCompensateForPadding(withDefaults),
								$mdgriffith$elm_ui$Element$paddingEach(parentPadding),
								$mdgriffith$elm_ui$Internal$Model$Attr(
								A2(
									$elm$html$Html$Attributes$style,
									'margin',
									$mdgriffith$elm_ui$Element$Input$renderBox(
										$mdgriffith$elm_ui$Element$Input$negateBox(parentPadding)))),
								$mdgriffith$elm_ui$Internal$Model$Attr(
								A2($elm$html$Html$Attributes$style, 'box-sizing', 'content-box'))
							]);
					}
				}(),
				_Utils_ap(
					_List_fromArray(
						[
							$mdgriffith$elm_ui$Element$Input$value(textOptions.text),
							$mdgriffith$elm_ui$Internal$Model$Attr(
							$elm$html$Html$Events$onInput(textOptions.onChange)),
							$mdgriffith$elm_ui$Element$Input$hiddenLabelAttribute(textOptions.label),
							$mdgriffith$elm_ui$Element$Input$spellcheck(textInput.spellchecked),
							A2(
							$elm$core$Maybe$withDefault,
							$mdgriffith$elm_ui$Internal$Model$NoAttribute,
							A2($elm$core$Maybe$map, $mdgriffith$elm_ui$Element$Input$autofill, textInput.autofill))
						]),
					redistributed.input)),
			$mdgriffith$elm_ui$Internal$Model$Unkeyed(_List_Nil));
		var wrappedInput = function () {
			var _v0 = textInput.type_;
			if (_v0.$ === 'TextArea') {
				return A4(
					$mdgriffith$elm_ui$Internal$Model$element,
					$mdgriffith$elm_ui$Internal$Model$asEl,
					$mdgriffith$elm_ui$Internal$Model$div,
					_Utils_ap(
						(heightConstrained ? $elm$core$List$cons($mdgriffith$elm_ui$Element$scrollbarY) : $elm$core$Basics$identity)(
							_List_fromArray(
								[
									$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill),
									A2($elm$core$List$any, $mdgriffith$elm_ui$Element$Input$hasFocusStyle, withDefaults) ? $mdgriffith$elm_ui$Internal$Model$NoAttribute : $mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.focusedWithin),
									$mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.inputMultilineWrapper)
								])),
						redistributed.parent),
					$mdgriffith$elm_ui$Internal$Model$Unkeyed(
						_List_fromArray(
							[
								A4(
								$mdgriffith$elm_ui$Internal$Model$element,
								$mdgriffith$elm_ui$Internal$Model$asParagraph,
								$mdgriffith$elm_ui$Internal$Model$div,
								A2(
									$elm$core$List$cons,
									$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill),
									A2(
										$elm$core$List$cons,
										$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$fill),
										A2(
											$elm$core$List$cons,
											$mdgriffith$elm_ui$Element$inFront(inputElement),
											A2(
												$elm$core$List$cons,
												$mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.inputMultilineParent),
												redistributed.wrapper)))),
								$mdgriffith$elm_ui$Internal$Model$Unkeyed(
									function () {
										if (textOptions.text === '') {
											var _v1 = textOptions.placeholder;
											if (_v1.$ === 'Nothing') {
												return _List_fromArray(
													[
														$mdgriffith$elm_ui$Element$text('\u00A0')
													]);
											} else {
												var place = _v1.a;
												return _List_fromArray(
													[
														A3($mdgriffith$elm_ui$Element$Input$renderPlaceholder, place, _List_Nil, textOptions.text === '')
													]);
											}
										} else {
											return _List_fromArray(
												[
													$mdgriffith$elm_ui$Internal$Model$unstyled(
													A2(
														$elm$html$Html$span,
														_List_fromArray(
															[
																$elm$html$Html$Attributes$class($mdgriffith$elm_ui$Internal$Style$classes.inputMultilineFiller)
															]),
														_List_fromArray(
															[
																$elm$html$Html$text(textOptions.text + '\u00A0')
															])))
												]);
										}
									}()))
							])));
			} else {
				var inputType = _v0.a;
				return A4(
					$mdgriffith$elm_ui$Internal$Model$element,
					$mdgriffith$elm_ui$Internal$Model$asEl,
					$mdgriffith$elm_ui$Internal$Model$div,
					A2(
						$elm$core$List$cons,
						$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill),
						A2(
							$elm$core$List$cons,
							A2($elm$core$List$any, $mdgriffith$elm_ui$Element$Input$hasFocusStyle, withDefaults) ? $mdgriffith$elm_ui$Internal$Model$NoAttribute : $mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.focusedWithin),
							$elm$core$List$concat(
								_List_fromArray(
									[
										redistributed.parent,
										function () {
										var _v2 = textOptions.placeholder;
										if (_v2.$ === 'Nothing') {
											return _List_Nil;
										} else {
											var place = _v2.a;
											return _List_fromArray(
												[
													$mdgriffith$elm_ui$Element$behindContent(
													A3($mdgriffith$elm_ui$Element$Input$renderPlaceholder, place, redistributed.cover, textOptions.text === ''))
												]);
										}
									}()
									])))),
					$mdgriffith$elm_ui$Internal$Model$Unkeyed(
						_List_fromArray(
							[inputElement])));
			}
		}();
		return A3(
			$mdgriffith$elm_ui$Element$Input$applyLabel,
			A2(
				$elm$core$List$cons,
				A2($mdgriffith$elm_ui$Internal$Model$Class, $mdgriffith$elm_ui$Internal$Flag$cursor, $mdgriffith$elm_ui$Internal$Style$classes.cursorText),
				A2(
					$elm$core$List$cons,
					$mdgriffith$elm_ui$Element$Input$isHiddenLabel(textOptions.label) ? $mdgriffith$elm_ui$Internal$Model$NoAttribute : $mdgriffith$elm_ui$Element$spacing(5),
					A2($elm$core$List$cons, $mdgriffith$elm_ui$Element$Region$announce, redistributed.fullParent))),
			textOptions.label,
			wrappedInput);
	});
var $mdgriffith$elm_ui$Element$Input$text = $mdgriffith$elm_ui$Element$Input$textHelper(
	{
		autofill: $elm$core$Maybe$Nothing,
		spellchecked: false,
		type_: $mdgriffith$elm_ui$Element$Input$TextInputNode('text')
	});
var $author$project$CropForm$cropField = F3(
	function (label, msgTag, field) {
		var fontColor = function () {
			var _v0 = field.decodedInput;
			if (_v0.$ === 'Ok') {
				return $author$project$Style$black;
			} else {
				return $author$project$Style$errorColor;
			}
		}();
		return A2(
			$mdgriffith$elm_ui$Element$Input$text,
			_List_fromArray(
				[
					A2($mdgriffith$elm_ui$Element$paddingXY, 0, 4),
					$mdgriffith$elm_ui$Element$width(
					$mdgriffith$elm_ui$Element$px(60)),
					$mdgriffith$elm_ui$Element$Border$width(0),
					$mdgriffith$elm_ui$Element$Font$center,
					$mdgriffith$elm_ui$Element$Font$color(fontColor)
				]),
			{
				label: $mdgriffith$elm_ui$Element$Input$labelHidden(label),
				onChange: msgTag,
				placeholder: $elm$core$Maybe$Nothing,
				text: field.input
			});
	});
var $author$project$CropForm$currentHeight = function (_v0) {
	var top = _v0.top;
	var bottom = _v0.bottom;
	var _v1 = _Utils_Tuple2(top.decodedInput, bottom.decodedInput);
	if ((_v1.a.$ === 'Ok') && (_v1.b.$ === 'Ok')) {
		var t = _v1.a.a;
		var b = _v1.b.a;
		return $elm$core$Maybe$Just(b - t);
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $author$project$CropForm$currentWidth = function (_v0) {
	var left = _v0.left;
	var right = _v0.right;
	var _v1 = _Utils_Tuple2(left.decodedInput, right.decodedInput);
	if ((_v1.a.$ === 'Ok') && (_v1.b.$ === 'Ok')) {
		var l = _v1.a.a;
		var r = _v1.b.a;
		return $elm$core$Maybe$Just(r - l);
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $mdgriffith$elm_ui$Internal$Flag$borderStyle = $mdgriffith$elm_ui$Internal$Flag$flag(11);
var $mdgriffith$elm_ui$Element$Border$dashed = A2($mdgriffith$elm_ui$Internal$Model$Class, $mdgriffith$elm_ui$Internal$Flag$borderStyle, $mdgriffith$elm_ui$Internal$Style$classes.borderDashed);
var $mdgriffith$elm_ui$Element$moveDown = function (y) {
	return A2(
		$mdgriffith$elm_ui$Internal$Model$TransformComponent,
		$mdgriffith$elm_ui$Internal$Flag$moveY,
		$mdgriffith$elm_ui$Internal$Model$MoveY(y));
};
var $mdgriffith$elm_ui$Internal$Model$MoveX = function (a) {
	return {$: 'MoveX', a: a};
};
var $mdgriffith$elm_ui$Internal$Flag$moveX = $mdgriffith$elm_ui$Internal$Flag$flag(25);
var $mdgriffith$elm_ui$Element$moveLeft = function (x) {
	return A2(
		$mdgriffith$elm_ui$Internal$Model$TransformComponent,
		$mdgriffith$elm_ui$Internal$Flag$moveX,
		$mdgriffith$elm_ui$Internal$Model$MoveX(-x));
};
var $mdgriffith$elm_ui$Element$moveRight = function (x) {
	return A2(
		$mdgriffith$elm_ui$Internal$Model$TransformComponent,
		$mdgriffith$elm_ui$Internal$Flag$moveX,
		$mdgriffith$elm_ui$Internal$Model$MoveX(x));
};
var $mdgriffith$elm_ui$Internal$Model$Empty = {$: 'Empty'};
var $mdgriffith$elm_ui$Element$none = $mdgriffith$elm_ui$Internal$Model$Empty;
var $author$project$Style$white = A3($mdgriffith$elm_ui$Element$rgb255, 255, 255, 255);
var $author$project$CropForm$onBorderAttributes = _List_fromArray(
	[
		$mdgriffith$elm_ui$Element$centerX,
		$mdgriffith$elm_ui$Element$centerY,
		$mdgriffith$elm_ui$Element$Background$color($author$project$Style$white)
	]);
var $mdgriffith$elm_ui$Internal$Model$OnLeft = {$: 'OnLeft'};
var $mdgriffith$elm_ui$Element$onLeft = function (element) {
	return A2($mdgriffith$elm_ui$Element$createNearby, $mdgriffith$elm_ui$Internal$Model$OnLeft, element);
};
var $mdgriffith$elm_ui$Internal$Model$OnRight = {$: 'OnRight'};
var $mdgriffith$elm_ui$Element$onRight = function (element) {
	return A2($mdgriffith$elm_ui$Element$createNearby, $mdgriffith$elm_ui$Internal$Model$OnRight, element);
};
var $mdgriffith$elm_ui$Element$padding = function (x) {
	var f = x;
	return A2(
		$mdgriffith$elm_ui$Internal$Model$StyleClass,
		$mdgriffith$elm_ui$Internal$Flag$padding,
		A5(
			$mdgriffith$elm_ui$Internal$Model$PaddingStyle,
			'p-' + $elm$core$String$fromInt(x),
			f,
			f,
			f,
			f));
};
var $mdgriffith$elm_ui$Element$Font$size = function (i) {
	return A2(
		$mdgriffith$elm_ui$Internal$Model$StyleClass,
		$mdgriffith$elm_ui$Internal$Flag$fontSize,
		$mdgriffith$elm_ui$Internal$Model$FontSize(i));
};
var $author$project$CropForm$boxEditor = F2(
	function (event, state) {
		var active = state.active;
		var left = state.left;
		var top = state.top;
		var right = state.right;
		var bottom = state.bottom;
		return (!active) ? $mdgriffith$elm_ui$Element$none : A2(
			$mdgriffith$elm_ui$Element$el,
			_List_fromArray(
				[
					$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill),
					$mdgriffith$elm_ui$Element$padding(4)
				]),
			A2(
				$mdgriffith$elm_ui$Element$el,
				_List_fromArray(
					[
						$mdgriffith$elm_ui$Element$centerX,
						$mdgriffith$elm_ui$Element$centerY,
						A2($mdgriffith$elm_ui$Element$paddingXY, 48, 20),
						$mdgriffith$elm_ui$Element$Border$dashed,
						$mdgriffith$elm_ui$Element$Border$width(2),
						$mdgriffith$elm_ui$Element$onLeft(
						A2(
							$mdgriffith$elm_ui$Element$el,
							A2(
								$elm$core$List$cons,
								$mdgriffith$elm_ui$Element$moveRight(30),
								$author$project$CropForm$onBorderAttributes),
							A3($author$project$CropForm$cropField, 'left', event.changeLeft, left))),
						$mdgriffith$elm_ui$Element$above(
						A2(
							$mdgriffith$elm_ui$Element$el,
							A2(
								$elm$core$List$cons,
								$mdgriffith$elm_ui$Element$moveDown(12),
								$author$project$CropForm$onBorderAttributes),
							A3($author$project$CropForm$cropField, 'top', event.changeTop, top))),
						$mdgriffith$elm_ui$Element$onRight(
						A2(
							$mdgriffith$elm_ui$Element$el,
							A2(
								$elm$core$List$cons,
								$mdgriffith$elm_ui$Element$moveLeft(30),
								$author$project$CropForm$onBorderAttributes),
							A3($author$project$CropForm$cropField, 'right', event.changeRight, right))),
						$mdgriffith$elm_ui$Element$below(
						A2(
							$mdgriffith$elm_ui$Element$el,
							A2(
								$elm$core$List$cons,
								$mdgriffith$elm_ui$Element$moveUp(14),
								$author$project$CropForm$onBorderAttributes),
							A3($author$project$CropForm$cropField, 'bottom', event.changeBottom, bottom)))
					]),
				A2(
					$mdgriffith$elm_ui$Element$el,
					_List_fromArray(
						[
							$mdgriffith$elm_ui$Element$Font$size(12)
						]),
					function () {
						var _v0 = _Utils_Tuple2(
							$author$project$CropForm$currentWidth(state),
							$author$project$CropForm$currentHeight(state));
						if (_v0.a.$ === 'Just') {
							if (_v0.b.$ === 'Just') {
								var cropWidth = _v0.a.a;
								var cropHeight = _v0.b.a;
								return $mdgriffith$elm_ui$Element$text(
									$elm$core$String$fromInt(cropWidth) + (' x ' + $elm$core$String$fromInt(cropHeight)));
							} else {
								var cropWidth = _v0.a.a;
								var _v2 = _v0.b;
								return $mdgriffith$elm_ui$Element$text(
									$elm$core$String$fromInt(cropWidth) + ' x ?');
							}
						} else {
							if (_v0.b.$ === 'Just') {
								var _v1 = _v0.a;
								var cropHeight = _v0.b.a;
								return $mdgriffith$elm_ui$Element$text(
									'? x ' + $elm$core$String$fromInt(cropHeight));
							} else {
								var _v3 = _v0.a;
								var _v4 = _v0.b;
								return $mdgriffith$elm_ui$Element$text('? x ?');
							}
						}
					}())));
	});
var $mdgriffith$elm_ui$Internal$Model$Left = {$: 'Left'};
var $mdgriffith$elm_ui$Element$alignLeft = $mdgriffith$elm_ui$Internal$Model$AlignX($mdgriffith$elm_ui$Internal$Model$Left);
var $mdgriffith$elm_ui$Element$Input$enter = 'Enter';
var $elm$json$Json$Decode$fail = _Json_fail;
var $elm$virtual_dom$VirtualDom$MayPreventDefault = function (a) {
	return {$: 'MayPreventDefault', a: a};
};
var $elm$html$Html$Events$preventDefaultOn = F2(
	function (event, decoder) {
		return A2(
			$elm$virtual_dom$VirtualDom$on,
			event,
			$elm$virtual_dom$VirtualDom$MayPreventDefault(decoder));
	});
var $mdgriffith$elm_ui$Element$Input$onKeyLookup = function (lookup) {
	var decode = function (code) {
		var _v0 = lookup(code);
		if (_v0.$ === 'Nothing') {
			return $elm$json$Json$Decode$fail('No key matched');
		} else {
			var msg = _v0.a;
			return $elm$json$Json$Decode$succeed(msg);
		}
	};
	var isKey = A2(
		$elm$json$Json$Decode$andThen,
		decode,
		A2($elm$json$Json$Decode$field, 'key', $elm$json$Json$Decode$string));
	return $mdgriffith$elm_ui$Internal$Model$Attr(
		A2(
			$elm$html$Html$Events$preventDefaultOn,
			'keydown',
			A2(
				$elm$json$Json$Decode$map,
				function (fired) {
					return _Utils_Tuple2(fired, true);
				},
				isKey)));
};
var $mdgriffith$elm_ui$Element$pointer = A2($mdgriffith$elm_ui$Internal$Model$Class, $mdgriffith$elm_ui$Internal$Flag$cursor, $mdgriffith$elm_ui$Internal$Style$classes.cursorPointer);
var $mdgriffith$elm_ui$Element$Input$space = ' ';
var $elm$html$Html$Attributes$tabindex = function (n) {
	return A2(
		_VirtualDom_attribute,
		'tabIndex',
		$elm$core$String$fromInt(n));
};
var $mdgriffith$elm_ui$Element$Input$tabindex = A2($elm$core$Basics$composeL, $mdgriffith$elm_ui$Internal$Model$Attr, $elm$html$Html$Attributes$tabindex);
var $mdgriffith$elm_ui$Element$Input$checkbox = F2(
	function (attrs, _v0) {
		var label = _v0.label;
		var icon = _v0.icon;
		var checked = _v0.checked;
		var onChange = _v0.onChange;
		var attributes = _Utils_ap(
			_List_fromArray(
				[
					$mdgriffith$elm_ui$Element$Input$isHiddenLabel(label) ? $mdgriffith$elm_ui$Internal$Model$NoAttribute : $mdgriffith$elm_ui$Element$spacing(6),
					$mdgriffith$elm_ui$Internal$Model$Attr(
					$elm$html$Html$Events$onClick(
						onChange(!checked))),
					$mdgriffith$elm_ui$Element$Region$announce,
					$mdgriffith$elm_ui$Element$Input$onKeyLookup(
					function (code) {
						return _Utils_eq(code, $mdgriffith$elm_ui$Element$Input$enter) ? $elm$core$Maybe$Just(
							onChange(!checked)) : (_Utils_eq(code, $mdgriffith$elm_ui$Element$Input$space) ? $elm$core$Maybe$Just(
							onChange(!checked)) : $elm$core$Maybe$Nothing);
					}),
					$mdgriffith$elm_ui$Element$Input$tabindex(0),
					$mdgriffith$elm_ui$Element$pointer,
					$mdgriffith$elm_ui$Element$alignLeft,
					$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill)
				]),
			attrs);
		return A3(
			$mdgriffith$elm_ui$Element$Input$applyLabel,
			A2(
				$elm$core$List$cons,
				$mdgriffith$elm_ui$Internal$Model$Attr(
					A2($elm$html$Html$Attributes$attribute, 'role', 'checkbox')),
				A2(
					$elm$core$List$cons,
					$mdgriffith$elm_ui$Internal$Model$Attr(
						A2(
							$elm$html$Html$Attributes$attribute,
							'aria-checked',
							checked ? 'true' : 'false')),
					A2(
						$elm$core$List$cons,
						$mdgriffith$elm_ui$Element$Input$hiddenLabelAttribute(label),
						attributes))),
			label,
			A4(
				$mdgriffith$elm_ui$Internal$Model$element,
				$mdgriffith$elm_ui$Internal$Model$asEl,
				$mdgriffith$elm_ui$Internal$Model$div,
				_List_fromArray(
					[
						$mdgriffith$elm_ui$Element$centerY,
						$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$fill),
						$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$shrink)
					]),
				$mdgriffith$elm_ui$Internal$Model$Unkeyed(
					_List_fromArray(
						[
							icon(checked)
						]))));
	});
var $mdgriffith$elm_ui$Element$column = F2(
	function (attrs, children) {
		return A4(
			$mdgriffith$elm_ui$Internal$Model$element,
			$mdgriffith$elm_ui$Internal$Model$asColumn,
			$mdgriffith$elm_ui$Internal$Model$div,
			A2(
				$elm$core$List$cons,
				$mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.contentTop + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.contentLeft)),
				A2(
					$elm$core$List$cons,
					$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$shrink),
					A2(
						$elm$core$List$cons,
						$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$shrink),
						attrs))),
			$mdgriffith$elm_ui$Internal$Model$Unkeyed(children));
	});
var $mdgriffith$elm_ui$Internal$Model$Paragraph = {$: 'Paragraph'};
var $mdgriffith$elm_ui$Element$paragraph = F2(
	function (attrs, children) {
		return A4(
			$mdgriffith$elm_ui$Internal$Model$element,
			$mdgriffith$elm_ui$Internal$Model$asParagraph,
			$mdgriffith$elm_ui$Internal$Model$div,
			A2(
				$elm$core$List$cons,
				$mdgriffith$elm_ui$Internal$Model$Describe($mdgriffith$elm_ui$Internal$Model$Paragraph),
				A2(
					$elm$core$List$cons,
					$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill),
					A2(
						$elm$core$List$cons,
						$mdgriffith$elm_ui$Element$spacing(5),
						attrs))),
			$mdgriffith$elm_ui$Internal$Model$Unkeyed(children));
	});
var $author$project$Main$displayErrors = function (errors) {
	return $elm$core$List$isEmpty(errors) ? $mdgriffith$elm_ui$Element$none : A2(
		$mdgriffith$elm_ui$Element$column,
		_List_fromArray(
			[
				$mdgriffith$elm_ui$Element$spacing(10),
				$mdgriffith$elm_ui$Element$Font$size(14),
				$mdgriffith$elm_ui$Element$Font$color($author$project$Style$errorColor)
			]),
		A2(
			$elm$core$List$map,
			function (err) {
				return A2(
					$mdgriffith$elm_ui$Element$paragraph,
					_List_Nil,
					_List_fromArray(
						[
							$mdgriffith$elm_ui$Element$text(err)
						]));
			},
			errors));
};
var $author$project$NumberInput$floatErrorToString = F2(
	function (_v0, err) {
		var valueName = _v0.valueName;
		switch (err.$) {
			case 'FloatParsingError':
				return valueName + ' is not a valid number.';
			case 'FloatTooSmall':
				var bound = err.a.bound;
				var actual = err.a.actual;
				return valueName + (' = ' + ($elm$core$String$fromFloat(actual) + (' but it should be >= ' + ($elm$core$String$fromFloat(bound) + '.'))));
			default:
				var bound = err.a.bound;
				var actual = err.a.actual;
				return valueName + (' = ' + ($elm$core$String$fromFloat(actual) + (' but it should be <= ' + ($elm$core$String$fromFloat(bound) + '.'))));
		}
	});
var $author$project$Main$displayFloatErrors = function (result) {
	if (result.$ === 'Ok') {
		return $mdgriffith$elm_ui$Element$none;
	} else {
		var errors = result.a;
		return $author$project$Main$displayErrors(
			A2(
				$elm$core$List$map,
				$author$project$NumberInput$floatErrorToString(
					{valueName: 'Value'}),
				errors));
	}
};
var $author$project$NumberInput$intErrorToString = F2(
	function (_v0, err) {
		var valueName = _v0.valueName;
		switch (err.$) {
			case 'IntParsingError':
				return valueName + ' is not a valid integer.';
			case 'IntTooSmall':
				var bound = err.a.bound;
				var actual = err.a.actual;
				return valueName + (' = ' + ($elm$core$String$fromInt(actual) + (' but it should be >= ' + ($elm$core$String$fromInt(bound) + '.'))));
			default:
				var bound = err.a.bound;
				var actual = err.a.actual;
				return valueName + (' = ' + ($elm$core$String$fromInt(actual) + (' but it should be <= ' + ($elm$core$String$fromInt(bound) + '.'))));
		}
	});
var $author$project$Main$displayIntErrors = function (result) {
	if (result.$ === 'Ok') {
		return $mdgriffith$elm_ui$Element$none;
	} else {
		var errors = result.a;
		return $author$project$Main$displayErrors(
			A2(
				$elm$core$List$map,
				$author$project$NumberInput$intErrorToString(
					{valueName: 'Value'}),
				errors));
	}
};
var $author$project$CropForm$fieldError = function (result) {
	if (result.$ === 'Err') {
		var list = result.a;
		return list;
	} else {
		return _List_Nil;
	}
};
var $author$project$CropForm$errors = function (_v0) {
	var active = _v0.active;
	var left = _v0.left;
	var top = _v0.top;
	var right = _v0.right;
	var bottom = _v0.bottom;
	return (!active) ? _List_Nil : $elm$core$List$concat(
		_List_fromArray(
			[
				A2(
				$elm$core$List$map,
				$author$project$NumberInput$intErrorToString(
					{valueName: 'Left'}),
				$author$project$CropForm$fieldError(left.decodedInput)),
				A2(
				$elm$core$List$map,
				$author$project$NumberInput$intErrorToString(
					{valueName: 'Top'}),
				$author$project$CropForm$fieldError(top.decodedInput)),
				A2(
				$elm$core$List$map,
				$author$project$NumberInput$intErrorToString(
					{valueName: 'Right'}),
				$author$project$CropForm$fieldError(right.decodedInput)),
				A2(
				$elm$core$List$map,
				$author$project$NumberInput$intErrorToString(
					{valueName: 'Bottom'}),
				$author$project$CropForm$fieldError(bottom.decodedInput))
			]));
};
var $mdgriffith$elm_ui$Internal$Model$Button = {$: 'Button'};
var $elm$html$Html$Attributes$disabled = $elm$html$Html$Attributes$boolProperty('disabled');
var $mdgriffith$elm_ui$Element$Input$focusDefault = function (attrs) {
	return A2($elm$core$List$any, $mdgriffith$elm_ui$Element$Input$hasFocusStyle, attrs) ? $mdgriffith$elm_ui$Internal$Model$NoAttribute : $mdgriffith$elm_ui$Internal$Model$htmlClass('focusable');
};
var $mdgriffith$elm_ui$Element$Events$onClick = A2($elm$core$Basics$composeL, $mdgriffith$elm_ui$Internal$Model$Attr, $elm$html$Html$Events$onClick);
var $mdgriffith$elm_ui$Element$Input$button = F2(
	function (attrs, _v0) {
		var onPress = _v0.onPress;
		var label = _v0.label;
		return A4(
			$mdgriffith$elm_ui$Internal$Model$element,
			$mdgriffith$elm_ui$Internal$Model$asEl,
			$mdgriffith$elm_ui$Internal$Model$div,
			A2(
				$elm$core$List$cons,
				$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$shrink),
				A2(
					$elm$core$List$cons,
					$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$shrink),
					A2(
						$elm$core$List$cons,
						$mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.contentCenterX + (' ' + ($mdgriffith$elm_ui$Internal$Style$classes.contentCenterY + (' ' + ($mdgriffith$elm_ui$Internal$Style$classes.seButton + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.noTextSelection)))))),
						A2(
							$elm$core$List$cons,
							$mdgriffith$elm_ui$Element$pointer,
							A2(
								$elm$core$List$cons,
								$mdgriffith$elm_ui$Element$Input$focusDefault(attrs),
								A2(
									$elm$core$List$cons,
									$mdgriffith$elm_ui$Internal$Model$Describe($mdgriffith$elm_ui$Internal$Model$Button),
									A2(
										$elm$core$List$cons,
										$mdgriffith$elm_ui$Internal$Model$Attr(
											$elm$html$Html$Attributes$tabindex(0)),
										function () {
											if (onPress.$ === 'Nothing') {
												return A2(
													$elm$core$List$cons,
													$mdgriffith$elm_ui$Internal$Model$Attr(
														$elm$html$Html$Attributes$disabled(true)),
													attrs);
											} else {
												var msg = onPress.a;
												return A2(
													$elm$core$List$cons,
													$mdgriffith$elm_ui$Element$Events$onClick(msg),
													A2(
														$elm$core$List$cons,
														$mdgriffith$elm_ui$Element$Input$onKeyLookup(
															function (code) {
																return _Utils_eq(code, $mdgriffith$elm_ui$Element$Input$enter) ? $elm$core$Maybe$Just(msg) : (_Utils_eq(code, $mdgriffith$elm_ui$Element$Input$space) ? $elm$core$Maybe$Just(msg) : $elm$core$Maybe$Nothing);
															}),
														attrs));
											}
										}()))))))),
			$mdgriffith$elm_ui$Internal$Model$Unkeyed(
				_List_fromArray(
					[label])));
	});
var $author$project$Style$lightGrey = A3($mdgriffith$elm_ui$Element$rgb255, 187, 187, 187);
var $author$project$Main$numberSideButton = F2(
	function (maybeMsg, label) {
		var textColor = _Utils_eq(maybeMsg, $elm$core$Maybe$Nothing) ? $author$project$Style$lightGrey : $author$project$Style$black;
		return A2(
			$mdgriffith$elm_ui$Element$Input$button,
			_List_fromArray(
				[
					$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$fill),
					$mdgriffith$elm_ui$Element$width(
					$mdgriffith$elm_ui$Element$px(44)),
					$mdgriffith$elm_ui$Element$Font$center,
					$mdgriffith$elm_ui$Element$Font$color(textColor),
					$mdgriffith$elm_ui$Element$htmlAttribute(
					A2($elm$html$Html$Attributes$style, 'box-shadow', 'none'))
				]),
			{
				label: $mdgriffith$elm_ui$Element$text(label),
				onPress: maybeMsg
			});
	});
var $mdgriffith$elm_ui$Element$row = F2(
	function (attrs, children) {
		return A4(
			$mdgriffith$elm_ui$Internal$Model$element,
			$mdgriffith$elm_ui$Internal$Model$asRow,
			$mdgriffith$elm_ui$Internal$Model$div,
			A2(
				$elm$core$List$cons,
				$mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.contentLeft + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.contentCenterY)),
				A2(
					$elm$core$List$cons,
					$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$shrink),
					A2(
						$elm$core$List$cons,
						$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$shrink),
						attrs))),
			$mdgriffith$elm_ui$Internal$Model$Unkeyed(children));
	});
var $mdgriffith$elm_ui$Element$Border$solid = A2($mdgriffith$elm_ui$Internal$Model$Class, $mdgriffith$elm_ui$Internal$Flag$borderStyle, $mdgriffith$elm_ui$Internal$Style$classes.borderSolid);
var $author$project$Main$floatInput = F3(
	function (field, msgTag, label) {
		var textField = A2(
			$mdgriffith$elm_ui$Element$Input$text,
			_List_fromArray(
				[
					$mdgriffith$elm_ui$Element$Border$width(0),
					$mdgriffith$elm_ui$Element$Font$center,
					$mdgriffith$elm_ui$Element$width(
					$mdgriffith$elm_ui$Element$px(140))
				]),
			{
				label: $mdgriffith$elm_ui$Element$Input$labelHidden(label),
				onChange: msgTag,
				placeholder: $elm$core$Maybe$Nothing,
				text: field.input
			});
		var _v0 = field.decodedInput;
		if (_v0.$ === 'Err') {
			return A2(
				$mdgriffith$elm_ui$Element$row,
				_List_fromArray(
					[
						$mdgriffith$elm_ui$Element$Border$solid,
						$mdgriffith$elm_ui$Element$Border$width(1),
						$mdgriffith$elm_ui$Element$Border$rounded(4),
						$mdgriffith$elm_ui$Element$Font$color($author$project$Style$errorColor)
					]),
				_List_fromArray(
					[
						A2($author$project$Main$numberSideButton, $elm$core$Maybe$Nothing, '−'),
						textField,
						A2($author$project$Main$numberSideButton, $elm$core$Maybe$Nothing, '+')
					]));
		} else {
			var current = _v0.a;
			var increased = field.increase(current);
			var incrementMsg = function () {
				var _v2 = field.max;
				if (_v2.$ === 'Nothing') {
					return $elm$core$Maybe$Just(
						msgTag(
							$elm$core$String$fromFloat(increased)));
				} else {
					var maxBound = _v2.a;
					return (_Utils_cmp(current, maxBound) > -1) ? $elm$core$Maybe$Nothing : $elm$core$Maybe$Just(
						msgTag(
							$elm$core$String$fromFloat(
								A2($elm$core$Basics$min, increased, maxBound))));
				}
			}();
			var decreased = field.decrease(current);
			var decrementMsg = function () {
				var _v1 = field.min;
				if (_v1.$ === 'Nothing') {
					return $elm$core$Maybe$Just(
						msgTag(
							$elm$core$String$fromFloat(decreased)));
				} else {
					var minBound = _v1.a;
					return (_Utils_cmp(current, minBound) < 1) ? $elm$core$Maybe$Nothing : $elm$core$Maybe$Just(
						msgTag(
							$elm$core$String$fromFloat(
								A2($elm$core$Basics$max, decreased, minBound))));
				}
			}();
			return A2(
				$mdgriffith$elm_ui$Element$row,
				_List_fromArray(
					[
						$mdgriffith$elm_ui$Element$Border$solid,
						$mdgriffith$elm_ui$Element$Border$width(1),
						$mdgriffith$elm_ui$Element$Border$rounded(4)
					]),
				_List_fromArray(
					[
						A2($author$project$Main$numberSideButton, decrementMsg, '−'),
						textField,
						A2($author$project$Main$numberSideButton, incrementMsg, '+')
					]));
		}
	});
var $author$project$Main$headerBar = function (pages) {
	return A2(
		$mdgriffith$elm_ui$Element$row,
		_List_fromArray(
			[
				$mdgriffith$elm_ui$Element$height(
				$mdgriffith$elm_ui$Element$px($author$project$Main$headerHeight)),
				$mdgriffith$elm_ui$Element$centerX
			]),
		pages);
};
var $author$project$Style$almostWhite = A3($mdgriffith$elm_ui$Element$rgb255, 235, 235, 235);
var $author$project$Main$baseTabAttributes = function (bgColor) {
	return _List_fromArray(
		[
			$mdgriffith$elm_ui$Element$Background$color(bgColor),
			$mdgriffith$elm_ui$Element$htmlAttribute(
			A2($elm$html$Html$Attributes$style, 'box-shadow', 'none')),
			$mdgriffith$elm_ui$Element$padding(10),
			$mdgriffith$elm_ui$Element$height(
			$mdgriffith$elm_ui$Element$px($author$project$Main$headerHeight))
		]);
};
var $author$project$Main$headerTabWithAttributes = F3(
	function (label, msg, otherAttributes) {
		var bgColor = _Utils_eq(msg, $elm$core$Maybe$Nothing) ? $author$project$Style$almostWhite : $author$project$Style$white;
		return A2(
			$mdgriffith$elm_ui$Element$Input$button,
			_Utils_ap(
				otherAttributes,
				$author$project$Main$baseTabAttributes(bgColor)),
			{
				label: $mdgriffith$elm_ui$Element$text(label),
				onPress: msg
			});
	});
var $author$project$Main$headerTab = F2(
	function (label, msg) {
		return A3($author$project$Main$headerTabWithAttributes, label, msg, _List_Nil);
	});
var $author$project$Main$infoIcon = function (detailsVisible) {
	return detailsVisible ? A2(
		$mdgriffith$elm_ui$Element$el,
		_List_fromArray(
			[
				$mdgriffith$elm_ui$Element$Border$width(1),
				$mdgriffith$elm_ui$Element$Border$rounded(4),
				$mdgriffith$elm_ui$Element$Font$center,
				$mdgriffith$elm_ui$Element$width(
				$mdgriffith$elm_ui$Element$px(24)),
				$mdgriffith$elm_ui$Element$height(
				$mdgriffith$elm_ui$Element$px(24)),
				$mdgriffith$elm_ui$Element$Border$solid,
				$mdgriffith$elm_ui$Element$Background$color($author$project$Style$almostWhite)
			]),
		$mdgriffith$elm_ui$Element$text('?')) : A2(
		$mdgriffith$elm_ui$Element$el,
		_List_fromArray(
			[
				$mdgriffith$elm_ui$Element$Border$width(1),
				$mdgriffith$elm_ui$Element$Border$rounded(4),
				$mdgriffith$elm_ui$Element$Font$center,
				$mdgriffith$elm_ui$Element$width(
				$mdgriffith$elm_ui$Element$px(24)),
				$mdgriffith$elm_ui$Element$height(
				$mdgriffith$elm_ui$Element$px(24)),
				$mdgriffith$elm_ui$Element$Border$dashed
			]),
		$mdgriffith$elm_ui$Element$text('?'));
};
var $author$project$Main$intInput = F3(
	function (field, msgTag, label) {
		var textField = A2(
			$mdgriffith$elm_ui$Element$Input$text,
			_List_fromArray(
				[
					$mdgriffith$elm_ui$Element$Border$width(0),
					$mdgriffith$elm_ui$Element$Font$center,
					$mdgriffith$elm_ui$Element$width(
					$mdgriffith$elm_ui$Element$px(100))
				]),
			{
				label: $mdgriffith$elm_ui$Element$Input$labelHidden(label),
				onChange: msgTag,
				placeholder: $elm$core$Maybe$Nothing,
				text: field.input
			});
		var _v0 = field.decodedInput;
		if (_v0.$ === 'Err') {
			return A2(
				$mdgriffith$elm_ui$Element$row,
				_List_fromArray(
					[
						$mdgriffith$elm_ui$Element$Border$solid,
						$mdgriffith$elm_ui$Element$Border$width(1),
						$mdgriffith$elm_ui$Element$Border$rounded(4),
						$mdgriffith$elm_ui$Element$Font$color($author$project$Style$errorColor)
					]),
				_List_fromArray(
					[
						A2($author$project$Main$numberSideButton, $elm$core$Maybe$Nothing, '−'),
						textField,
						A2($author$project$Main$numberSideButton, $elm$core$Maybe$Nothing, '+')
					]));
		} else {
			var current = _v0.a;
			var increased = field.increase(current);
			var incrementMsg = function () {
				var _v2 = field.max;
				if (_v2.$ === 'Nothing') {
					return $elm$core$Maybe$Just(
						msgTag(
							$elm$core$String$fromInt(increased)));
				} else {
					var maxBound = _v2.a;
					return (_Utils_cmp(current, maxBound) > -1) ? $elm$core$Maybe$Nothing : $elm$core$Maybe$Just(
						msgTag(
							$elm$core$String$fromInt(
								A2($elm$core$Basics$min, increased, maxBound))));
				}
			}();
			var decreased = field.decrease(current);
			var decrementMsg = function () {
				var _v1 = field.min;
				if (_v1.$ === 'Nothing') {
					return $elm$core$Maybe$Just(
						msgTag(
							$elm$core$String$fromInt(decreased)));
				} else {
					var minBound = _v1.a;
					return (_Utils_cmp(current, minBound) < 1) ? $elm$core$Maybe$Nothing : $elm$core$Maybe$Just(
						msgTag(
							$elm$core$String$fromInt(
								A2($elm$core$Basics$max, decreased, minBound))));
				}
			}();
			return A2(
				$mdgriffith$elm_ui$Element$row,
				_List_fromArray(
					[
						$mdgriffith$elm_ui$Element$Border$solid,
						$mdgriffith$elm_ui$Element$Border$width(1),
						$mdgriffith$elm_ui$Element$Border$rounded(4)
					]),
				_List_fromArray(
					[
						A2($author$project$Main$numberSideButton, decrementMsg, '−'),
						textField,
						A2($author$project$Main$numberSideButton, incrementMsg, '+')
					]));
		}
	});
var $mdgriffith$elm_ui$Internal$Model$Right = {$: 'Right'};
var $mdgriffith$elm_ui$Element$alignRight = $mdgriffith$elm_ui$Internal$Model$AlignX($mdgriffith$elm_ui$Internal$Model$Right);
var $mdgriffith$elm_ui$Element$html = $mdgriffith$elm_ui$Internal$Model$unstyled;
var $elm$svg$Svg$trustedNode = _VirtualDom_nodeNS('http://www.w3.org/2000/svg');
var $elm$svg$Svg$circle = $elm$svg$Svg$trustedNode('circle');
var $elm$svg$Svg$Attributes$cx = _VirtualDom_attribute('cx');
var $elm$svg$Svg$Attributes$cy = _VirtualDom_attribute('cy');
var $elm$svg$Svg$Attributes$fill = _VirtualDom_attribute('fill');
var $elm$svg$Svg$Attributes$height = _VirtualDom_attribute('height');
var $elm$svg$Svg$Attributes$r = _VirtualDom_attribute('r');
var $elm$svg$Svg$svg = $elm$svg$Svg$trustedNode('svg');
var $elm$svg$Svg$Attributes$viewBox = _VirtualDom_attribute('viewBox');
var $elm$svg$Svg$Attributes$width = _VirtualDom_attribute('width');
var $author$project$Main$littleDot = function (fillColor) {
	return A2(
		$elm$svg$Svg$svg,
		_List_fromArray(
			[
				$elm$svg$Svg$Attributes$viewBox('0 0 10 10'),
				$elm$svg$Svg$Attributes$width('10'),
				$elm$svg$Svg$Attributes$height('10')
			]),
		_List_fromArray(
			[
				A2(
				$elm$svg$Svg$circle,
				_List_fromArray(
					[
						$elm$svg$Svg$Attributes$cx('5'),
						$elm$svg$Svg$Attributes$cy('5'),
						$elm$svg$Svg$Attributes$r('5'),
						$elm$svg$Svg$Attributes$fill(fillColor)
					]),
				_List_Nil)
			]));
};
var $author$project$Main$ErrorLogs = {$: 'ErrorLogs'};
var $author$project$Main$NoLogs = {$: 'NoLogs'};
var $author$project$Main$RegularLogs = {$: 'RegularLogs'};
var $author$project$Main$WarningLogs = {$: 'WarningLogs'};
var $author$project$Main$logsStatus = function (logs) {
	var _v0 = $elm$core$List$minimum(
		A2(
			$elm$core$List$map,
			function ($) {
				return $.lvl;
			},
			logs));
	if (_v0.$ === 'Nothing') {
		return $author$project$Main$NoLogs;
	} else {
		switch (_v0.a) {
			case 0:
				return $author$project$Main$ErrorLogs;
			case 1:
				return $author$project$Main$WarningLogs;
			default:
				return $author$project$Main$RegularLogs;
		}
	}
};
var $author$project$Main$logsHeaderTab = F2(
	function (msg, logs) {
		var logsState = $author$project$Main$logsStatus(logs);
		var fillColor = function () {
			switch (logsState.$) {
				case 'ErrorLogs':
					return 'rgb(180,50,50)';
				case 'WarningLogs':
					return 'rgb(220,120,50)';
				default:
					return 'rgb(50,50,50)';
			}
		}();
		var otherAttributes = function () {
			if (logsState.$ === 'NoLogs') {
				return _List_Nil;
			} else {
				return _List_fromArray(
					[
						$mdgriffith$elm_ui$Element$inFront(
						A2(
							$mdgriffith$elm_ui$Element$el,
							_List_fromArray(
								[
									$mdgriffith$elm_ui$Element$alignRight,
									$mdgriffith$elm_ui$Element$padding(2)
								]),
							$mdgriffith$elm_ui$Element$html(
								$author$project$Main$littleDot(fillColor))))
					]);
			}
		}();
		return A3($author$project$Main$headerTabWithAttributes, 'Logs', msg, otherAttributes);
	});
var $mdgriffith$elm_ui$Internal$Model$Max = F2(
	function (a, b) {
		return {$: 'Max', a: a, b: b};
	});
var $mdgriffith$elm_ui$Element$maximum = F2(
	function (i, l) {
		return A2($mdgriffith$elm_ui$Internal$Model$Max, i, l);
	});
var $author$project$Main$moreInfo = F2(
	function (visible, message) {
		return (!visible) ? $mdgriffith$elm_ui$Element$none : A2(
			$mdgriffith$elm_ui$Element$paragraph,
			_List_fromArray(
				[
					$mdgriffith$elm_ui$Element$Background$color($author$project$Style$almostWhite),
					$mdgriffith$elm_ui$Element$padding(10),
					$mdgriffith$elm_ui$Element$Font$size(14),
					$mdgriffith$elm_ui$Element$width(
					A2($mdgriffith$elm_ui$Element$maximum, 400, $mdgriffith$elm_ui$Element$fill))
				]),
			_List_fromArray(
				[
					$mdgriffith$elm_ui$Element$text(message)
				]));
	});
var $author$project$Main$registrationHeaderTab = F2(
	function (msg, registeredImages) {
		var otherAttributes = _Utils_eq(registeredImages, $elm$core$Maybe$Nothing) ? _List_Nil : _List_fromArray(
			[
				$mdgriffith$elm_ui$Element$inFront(
				A2(
					$mdgriffith$elm_ui$Element$el,
					_List_fromArray(
						[
							$mdgriffith$elm_ui$Element$alignRight,
							$mdgriffith$elm_ui$Element$padding(2)
						]),
					$mdgriffith$elm_ui$Element$html(
						$author$project$Main$littleDot('green'))))
			]);
		return A3($author$project$Main$headerTabWithAttributes, 'Registration', msg, otherAttributes);
	});
var $author$project$Main$progressBar = F2(
	function (color, progressRatio) {
		var scaleX = 'scaleX(' + ($elm$core$String$fromFloat(progressRatio) + ')');
		return A2(
			$mdgriffith$elm_ui$Element$el,
			_List_fromArray(
				[
					$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill),
					$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$fill),
					$mdgriffith$elm_ui$Element$Background$color(color),
					$mdgriffith$elm_ui$Element$htmlAttribute(
					A2($elm$html$Html$Attributes$style, 'transform-origin', 'top left')),
					$mdgriffith$elm_ui$Element$htmlAttribute(
					A2($elm$html$Html$Attributes$style, 'transform', scaleX))
				]),
			$mdgriffith$elm_ui$Element$none);
	});
var $author$project$Main$progressMessage = function (model) {
	var _v0 = model.runStep;
	switch (_v0.$) {
		case 'StepNotStarted':
			return '';
		case 'StepMultiresPyramid':
			return 'Building multi-resolution pyramid';
		case 'StepLevel':
			var level = _v0.a;
			return 'Registering at level ' + $elm$core$String$fromInt(level);
		case 'StepIteration':
			var level = _v0.a;
			var iter = _v0.b;
			return 'Registering at level ' + ($elm$core$String$fromInt(level) + ('    iteration ' + ($elm$core$String$fromInt(iter) + (' / ' + $elm$core$String$fromInt(model.params.maxIterations)))));
		case 'StepApplying':
			var img = _v0.a;
			return 'Applying warp to cropped image ' + ($elm$core$String$fromInt(img) + (' / ' + $elm$core$String$fromInt(model.imagesCount)));
		case 'StepEncoding':
			var img = _v0.a;
			return 'Encoding registered cropped image ' + ($elm$core$String$fromInt(img) + (' / ' + $elm$core$String$fromInt(model.imagesCount)));
		case 'StepDone':
			return '';
		default:
			var img = _v0.a;
			return 'Warping and encoding image ' + ($elm$core$String$fromInt(img) + (' / ' + $elm$core$String$fromInt(model.imagesCount)));
	}
};
var $author$project$Main$RunAlgorithm = function (a) {
	return {$: 'RunAlgorithm', a: a};
};
var $author$project$Main$isOk = function (result) {
	if (result.$ === 'Err') {
		return false;
	} else {
		return true;
	}
};
var $author$project$Main$runButton = F3(
	function (content, params, paramsForm) {
		var hasNoError = $elm$core$List$isEmpty(
			$author$project$CropForm$errors(paramsForm.crop)) && ($author$project$Main$isOk(paramsForm.maxIterations.decodedInput) && ($author$project$Main$isOk(paramsForm.z_mean.decodedInput) && $author$project$Main$isOk(paramsForm.convergenceThreshold.decodedInput)));
		return hasNoError ? A2(
			$mdgriffith$elm_ui$Element$Input$button,
			_List_fromArray(
				[
					$mdgriffith$elm_ui$Element$centerX,
					$mdgriffith$elm_ui$Element$padding(12),
					$mdgriffith$elm_ui$Element$Border$solid,
					$mdgriffith$elm_ui$Element$Border$width(1),
					$mdgriffith$elm_ui$Element$Border$rounded(4)
				]),
			{
				label: $mdgriffith$elm_ui$Element$text(content),
				onPress: $elm$core$Maybe$Just(
					$author$project$Main$RunAlgorithm(params))
			}) : A2(
			$mdgriffith$elm_ui$Element$Input$button,
			_List_fromArray(
				[
					$mdgriffith$elm_ui$Element$centerX,
					$mdgriffith$elm_ui$Element$padding(12),
					$mdgriffith$elm_ui$Element$Border$solid,
					$mdgriffith$elm_ui$Element$Border$width(1),
					$mdgriffith$elm_ui$Element$Border$rounded(4),
					$mdgriffith$elm_ui$Element$Font$color($author$project$Style$lightGrey)
				]),
			{
				label: $mdgriffith$elm_ui$Element$text(content),
				onPress: $elm$core$Maybe$Nothing
			});
	});
var $author$project$Style$runProgressColor = A3($mdgriffith$elm_ui$Element$rgb255, 211, 199, 255);
var $author$project$Main$SaveRegisteredImages = {$: 'SaveRegisteredImages'};
var $author$project$Main$saveButton = A2(
	$mdgriffith$elm_ui$Element$Input$button,
	_List_fromArray(
		[
			$mdgriffith$elm_ui$Element$alignRight,
			$mdgriffith$elm_ui$Element$padding(12),
			$mdgriffith$elm_ui$Element$Border$solid,
			$mdgriffith$elm_ui$Element$Border$width(1),
			$mdgriffith$elm_ui$Element$Border$rounded(4)
		]),
	{
		label: $mdgriffith$elm_ui$Element$text('Save registered images'),
		onPress: $elm$core$Maybe$Just($author$project$Main$SaveRegisteredImages)
	});
var $author$project$Main$StopRunning = {$: 'StopRunning'};
var $author$project$Main$stopButton = A2(
	$mdgriffith$elm_ui$Element$Input$button,
	_List_fromArray(
		[
			$mdgriffith$elm_ui$Element$alignRight,
			$mdgriffith$elm_ui$Element$padding(12),
			$mdgriffith$elm_ui$Element$Border$solid,
			$mdgriffith$elm_ui$Element$Border$width(1),
			$mdgriffith$elm_ui$Element$Border$rounded(4)
		]),
	{
		label: $mdgriffith$elm_ui$Element$text('Stop!'),
		onPress: $elm$core$Maybe$Just($author$project$Main$StopRunning)
	});
var $author$project$Main$runProgressBar = function (model) {
	var progressBarStopButton = (_Utils_eq(model.runStep, $author$project$Main$StepNotStarted) || _Utils_eq(model.runStep, $author$project$Main$StepDone)) ? $mdgriffith$elm_ui$Element$none : $author$project$Main$stopButton;
	var progressBarSaveButton = _Utils_eq(model.runStep, $author$project$Main$StepDone) ? $author$project$Main$saveButton : $mdgriffith$elm_ui$Element$none;
	var progressBarRunButton = function () {
		var _v0 = model.runStep;
		switch (_v0.$) {
			case 'StepNotStarted':
				return A3($author$project$Main$runButton, 'Run ▶', model.params, model.paramsForm);
			case 'StepDone':
				return A3($author$project$Main$runButton, 'Rerun ▶', model.params, model.paramsForm);
			default:
				return $mdgriffith$elm_ui$Element$none;
		}
	}();
	return A2(
		$mdgriffith$elm_ui$Element$el,
		_List_fromArray(
			[
				$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill),
				$mdgriffith$elm_ui$Element$height(
				$mdgriffith$elm_ui$Element$px($author$project$Main$progressBarHeight)),
				$mdgriffith$elm_ui$Element$Font$size(12),
				$mdgriffith$elm_ui$Element$behindContent(
				A2($author$project$Main$progressBar, $author$project$Style$almostWhite, 1.0)),
				$mdgriffith$elm_ui$Element$behindContent(
				A2($author$project$Main$progressBar, $author$project$Style$runProgressColor, 0.0)),
				$mdgriffith$elm_ui$Element$inFront(progressBarRunButton),
				$mdgriffith$elm_ui$Element$inFront(progressBarStopButton),
				$mdgriffith$elm_ui$Element$inFront(progressBarSaveButton)
			]),
		A2(
			$mdgriffith$elm_ui$Element$el,
			_List_fromArray(
				[$mdgriffith$elm_ui$Element$centerX, $mdgriffith$elm_ui$Element$centerY]),
			$mdgriffith$elm_ui$Element$text(
				$author$project$Main$progressMessage(model))));
};
var $mdgriffith$elm_ui$Element$scrollbars = A2($mdgriffith$elm_ui$Internal$Model$Class, $mdgriffith$elm_ui$Internal$Flag$overflow, $mdgriffith$elm_ui$Internal$Style$classes.scrollbars);
var $author$project$Style$green = A3($mdgriffith$elm_ui$Element$rgb255, 39, 203, 139);
var $author$project$Main$toggleCheckboxWidget = F2(
	function (_v0, checked) {
		var offColor = _v0.offColor;
		var onColor = _v0.onColor;
		var sliderColor = _v0.sliderColor;
		var toggleWidth = _v0.toggleWidth;
		var toggleHeight = _v0.toggleHeight;
		var pad = 3;
		var sliderSize = toggleHeight - (2 * pad);
		var translation = $elm$core$String$fromInt((toggleWidth - sliderSize) - pad);
		return A2(
			$mdgriffith$elm_ui$Element$el,
			_List_fromArray(
				[
					$mdgriffith$elm_ui$Element$Background$color(
					checked ? onColor : offColor),
					$mdgriffith$elm_ui$Element$width(
					$mdgriffith$elm_ui$Element$px(toggleWidth)),
					$mdgriffith$elm_ui$Element$height(
					$mdgriffith$elm_ui$Element$px(toggleHeight)),
					$mdgriffith$elm_ui$Element$Border$rounded((toggleHeight / 2) | 0),
					$mdgriffith$elm_ui$Element$inFront(
					A2(
						$mdgriffith$elm_ui$Element$el,
						_List_fromArray(
							[
								$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$fill)
							]),
						A2(
							$mdgriffith$elm_ui$Element$el,
							_List_fromArray(
								[
									$mdgriffith$elm_ui$Element$Background$color(sliderColor),
									$mdgriffith$elm_ui$Element$Border$rounded((sliderSize / 2) | 0),
									$mdgriffith$elm_ui$Element$width(
									$mdgriffith$elm_ui$Element$px(sliderSize)),
									$mdgriffith$elm_ui$Element$height(
									$mdgriffith$elm_ui$Element$px(sliderSize)),
									$mdgriffith$elm_ui$Element$centerY,
									$mdgriffith$elm_ui$Element$moveRight(pad),
									$mdgriffith$elm_ui$Element$htmlAttribute(
									A2($elm$html$Html$Attributes$style, 'transition', '.4s')),
									$mdgriffith$elm_ui$Element$htmlAttribute(
									checked ? A2($elm$html$Html$Attributes$style, 'transform', 'translateX(' + (translation + 'px)')) : $elm$html$Html$Attributes$class(''))
								]),
							$mdgriffith$elm_ui$Element$none)))
				]),
			$mdgriffith$elm_ui$Element$none);
	});
var $author$project$Main$toggle = F4(
	function (msg, checked, toggleHeight, label) {
		return A2(
			$mdgriffith$elm_ui$Element$Input$checkbox,
			_List_Nil,
			{
				checked: checked,
				icon: $author$project$Main$toggleCheckboxWidget(
					{
						offColor: $author$project$Style$lightGrey,
						onColor: $author$project$Style$green,
						sliderColor: $author$project$Style$white,
						toggleHeight: $elm$core$Basics$round(toggleHeight),
						toggleWidth: 2 * $elm$core$Basics$round(toggleHeight)
					}),
				label: $mdgriffith$elm_ui$Element$Input$labelHidden(label),
				onChange: msg
			});
	});
var $author$project$Main$viewConfig = function (model) {
	var params = model.params;
	var paramsForm = model.paramsForm;
	var paramsInfo = model.paramsInfo;
	var notSeenLogs = model.notSeenLogs;
	var registeredImages = model.registeredImages;
	return A2(
		$mdgriffith$elm_ui$Element$column,
		_List_fromArray(
			[
				$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill),
				$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$fill)
			]),
		_List_fromArray(
			[
				$author$project$Main$headerBar(
				_List_fromArray(
					[
						A2(
						$author$project$Main$headerTab,
						'Images',
						$elm$core$Maybe$Just(
							$author$project$Main$NavigationMsg($author$project$Main$GoToPageImages))),
						A2($author$project$Main$headerTab, 'Config', $elm$core$Maybe$Nothing),
						A2(
						$author$project$Main$registrationHeaderTab,
						$elm$core$Maybe$Just(
							$author$project$Main$NavigationMsg($author$project$Main$GoToPageRegistration)),
						registeredImages),
						A2(
						$author$project$Main$logsHeaderTab,
						$elm$core$Maybe$Just(
							$author$project$Main$NavigationMsg($author$project$Main$GoToPageLogs)),
						notSeenLogs)
					])),
				$author$project$Main$runProgressBar(model),
				A2(
				$mdgriffith$elm_ui$Element$column,
				_List_fromArray(
					[
						$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill),
						$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$fill),
						$mdgriffith$elm_ui$Element$scrollbars
					]),
				_List_fromArray(
					[
						A2(
						$mdgriffith$elm_ui$Element$column,
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Element$paddingXY, 20, 32),
								$mdgriffith$elm_ui$Element$spacing(32),
								$mdgriffith$elm_ui$Element$centerX
							]),
						_List_fromArray(
							[
								A2(
								$mdgriffith$elm_ui$Element$el,
								_List_fromArray(
									[
										$mdgriffith$elm_ui$Element$Font$center,
										$mdgriffith$elm_ui$Element$Font$size(32)
									]),
								$mdgriffith$elm_ui$Element$text('Algorithm parameters')),
								A2(
								$mdgriffith$elm_ui$Element$column,
								_List_fromArray(
									[
										$mdgriffith$elm_ui$Element$spacing(10)
									]),
								_List_fromArray(
									[
										A2(
										$mdgriffith$elm_ui$Element$row,
										_List_fromArray(
											[
												$mdgriffith$elm_ui$Element$spacing(10)
											]),
										_List_fromArray(
											[
												$mdgriffith$elm_ui$Element$text('Cropped working frame:'),
												A2(
												$mdgriffith$elm_ui$Element$Input$checkbox,
												_List_Nil,
												{
													checked: paramsInfo.crop,
													icon: $author$project$Main$infoIcon,
													label: $mdgriffith$elm_ui$Element$Input$labelHidden('Show detail info about cropped working frame'),
													onChange: A2($elm$core$Basics$composeL, $author$project$Main$ParamsInfoMsg, $author$project$Main$ToggleInfoCrop)
												})
											])),
										A2($author$project$Main$moreInfo, paramsInfo.crop, 'Instead of using the whole image to estimate the registration, it is often faster and as accurate to focus the algorithm attention on a smaller frame in the image. The parameters here are the left, top, right and bottom coordinates of that cropped frame on which we want the algorithm to focus when estimating the alignment parameters.'),
										A2(
										$mdgriffith$elm_ui$Element$row,
										_List_fromArray(
											[
												$mdgriffith$elm_ui$Element$spacing(10)
											]),
										_List_fromArray(
											[
												$mdgriffith$elm_ui$Element$text('off'),
												A4(
												$author$project$Main$toggle,
												A2($elm$core$Basics$composeL, $author$project$Main$ParamsMsg, $author$project$Main$ToggleCrop),
												paramsForm.crop.active,
												30,
												'Toggle cropped working frame'),
												$mdgriffith$elm_ui$Element$text('on')
											])),
										A2(
										$author$project$CropForm$boxEditor,
										{
											changeBottom: A2($elm$core$Basics$composeL, $author$project$Main$ParamsMsg, $author$project$Main$ChangeCropBottom),
											changeLeft: A2($elm$core$Basics$composeL, $author$project$Main$ParamsMsg, $author$project$Main$ChangeCropLeft),
											changeRight: A2($elm$core$Basics$composeL, $author$project$Main$ParamsMsg, $author$project$Main$ChangeCropRight),
											changeTop: A2($elm$core$Basics$composeL, $author$project$Main$ParamsMsg, $author$project$Main$ChangeCropTop)
										},
										paramsForm.crop),
										$author$project$Main$displayErrors(
										$author$project$CropForm$errors(paramsForm.crop))
									])),
								A2(
								$mdgriffith$elm_ui$Element$column,
								_List_fromArray(
									[
										$mdgriffith$elm_ui$Element$spacing(10)
									]),
								_List_fromArray(
									[
										A2(
										$mdgriffith$elm_ui$Element$row,
										_List_fromArray(
											[
												$mdgriffith$elm_ui$Element$spacing(10)
											]),
										_List_fromArray(
											[
												$mdgriffith$elm_ui$Element$text('Maximum number of iterations:'),
												A2(
												$mdgriffith$elm_ui$Element$Input$checkbox,
												_List_Nil,
												{
													checked: paramsInfo.maxIterations,
													icon: $author$project$Main$infoIcon,
													label: $mdgriffith$elm_ui$Element$Input$labelHidden('Show detail info about the maximum number of iterations'),
													onChange: A2($elm$core$Basics$composeL, $author$project$Main$ParamsInfoMsg, $author$project$Main$ToggleInfoMaxIterations)
												})
											])),
										A2($author$project$Main$moreInfo, paramsInfo.maxIterations, 'This is the maximum number of iterations allowed per level. If this is reached, the algorithm stops whether it converged or not.'),
										$mdgriffith$elm_ui$Element$text(
										'(default to ' + ($elm$core$String$fromInt($author$project$Main$defaultParams.maxIterations) + ')')),
										A3(
										$author$project$Main$intInput,
										paramsForm.maxIterations,
										A2($elm$core$Basics$composeL, $author$project$Main$ParamsMsg, $author$project$Main$ChangeMaxIter),
										'Maximum number of iterations'),
										$author$project$Main$displayIntErrors(paramsForm.maxIterations.decodedInput)
									])),
								A2(
								$mdgriffith$elm_ui$Element$column,
								_List_fromArray(
									[
										$mdgriffith$elm_ui$Element$spacing(10)
									]),
								_List_fromArray(
									[
										A2(
										$mdgriffith$elm_ui$Element$row,
										_List_fromArray(
											[
												$mdgriffith$elm_ui$Element$spacing(10)
											]),
										_List_fromArray(
											[
												$mdgriffith$elm_ui$Element$text('Convergence threshold:'),
												A2(
												$mdgriffith$elm_ui$Element$Input$checkbox,
												_List_Nil,
												{
													checked: paramsInfo.convergenceThreshold,
													icon: $author$project$Main$infoIcon,
													label: $mdgriffith$elm_ui$Element$Input$labelHidden('Show detail info about the convergence threshold parameter'),
													onChange: A2($elm$core$Basics$composeL, $author$project$Main$ParamsInfoMsg, $author$project$Main$ToggleInfoConvergenceThreshold)
												})
											])),
										A2($author$project$Main$moreInfo, paramsInfo.convergenceThreshold, 'The algorithm stops when the relative error difference between to estimates falls below this value.'),
										$mdgriffith$elm_ui$Element$text(
										'(default to ' + ($elm$core$String$fromFloat($author$project$Main$defaultParams.convergenceThreshold) + ')')),
										A3(
										$author$project$Main$floatInput,
										paramsForm.convergenceThreshold,
										A2($elm$core$Basics$composeL, $author$project$Main$ParamsMsg, $author$project$Main$ChangeConvergenceThreshold),
										'Convergence threshold'),
										$author$project$Main$displayFloatErrors(paramsForm.convergenceThreshold.decodedInput)
									])),
								A2(
								$mdgriffith$elm_ui$Element$column,
								_List_fromArray(
									[
										$mdgriffith$elm_ui$Element$spacing(10)
									]),
								_List_fromArray(
									[
										A2(
										$mdgriffith$elm_ui$Element$row,
										_List_fromArray(
											[
												$mdgriffith$elm_ui$Element$spacing(10)
											]),
										_List_fromArray(
											[
												$mdgriffith$elm_ui$Element$text(
												'z-mean: (default to ' + ($elm$core$String$fromFloat($author$project$Main$defaultParams.z_mean) + ')')),
												A2(
												$mdgriffith$elm_ui$Element$Input$checkbox,
												_List_Nil,
												{
													checked: paramsInfo.z_mean,
													icon: $author$project$Main$infoIcon,
													label: $mdgriffith$elm_ui$Element$Input$labelHidden('Show detail info about the z_mean parameter'),
													onChange: A2($elm$core$Basics$composeL, $author$project$Main$ParamsInfoMsg, $author$project$Main$ToggleInfoZMean)
												})
											])),
										A2($author$project$Main$moreInfo, paramsInfo.z_mean, 'Lagrangian penalty.'),
										A3(
										$author$project$Main$floatInput,
										paramsForm.z_mean,
										A2($elm$core$Basics$composeL, $author$project$Main$ParamsMsg, $author$project$Main$ChangeZMean),
										'z_mean'),
										$author$project$Main$displayFloatErrors(paramsForm.z_mean.decodedInput)
									])),
								A2(
								$mdgriffith$elm_ui$Element$column,
								_List_fromArray(
									[
										$mdgriffith$elm_ui$Element$spacing(10)
									]),
								_List_fromArray(
									[
										A2(
										$mdgriffith$elm_ui$Element$row,
										_List_fromArray(
											[
												$mdgriffith$elm_ui$Element$spacing(10)
											]),
										_List_fromArray(
											[
												$mdgriffith$elm_ui$Element$text('Maximum verbosity:'),
												A2(
												$mdgriffith$elm_ui$Element$Input$checkbox,
												_List_Nil,
												{
													checked: paramsInfo.maxVerbosity,
													icon: $author$project$Main$infoIcon,
													label: $mdgriffith$elm_ui$Element$Input$labelHidden('Show detail info about the maximum verbosity.'),
													onChange: A2($elm$core$Basics$composeL, $author$project$Main$ParamsInfoMsg, $author$project$Main$ToggleInfoMaxVerbosity)
												})
											])),
										A2($author$project$Main$moreInfo, paramsInfo.maxVerbosity, 'Maximum verbosity of logs that can appear in the Logs tab. Setting this higher than its default value enables a very detailed log trace at the price of performance degradations.'),
										$mdgriffith$elm_ui$Element$text(
										'(default to ' + ($elm$core$String$fromInt($author$project$Main$defaultParams.maxVerbosity) + ')')),
										A3(
										$author$project$Main$intInput,
										paramsForm.maxVerbosity,
										A2($elm$core$Basics$composeL, $author$project$Main$ParamsMsg, $author$project$Main$ChangeMaxVerbosity),
										'Maximum verbosity'),
										$author$project$Main$displayIntErrors(paramsForm.maxVerbosity.decodedInput)
									]))
							]))
					]))
			]));
};
var $author$project$Main$Go = {$: 'Go'};
var $author$project$Main$LackingImages = function (a) {
	return {$: 'LackingImages', a: a};
};
var $author$project$Main$LackingLights = function (a) {
	return {$: 'LackingLights', a: a};
};
var $author$project$Main$NoImage = {$: 'NoImage'};
var $author$project$Main$NoImageNorLight = {$: 'NoImageNorLight'};
var $author$project$Main$NoLight = {$: 'NoLight'};
var $author$project$Main$DragDropImagesMsg = function (a) {
	return {$: 'DragDropImagesMsg', a: a};
};
var $author$project$Main$DropImages = F2(
	function (a, b) {
		return {$: 'DropImages', a: a, b: b};
	});
var $author$project$Main$LoadExampleImages = function (a) {
	return {$: 'LoadExampleImages', a: a};
};
var $elm$svg$Svg$line = $elm$svg$Svg$trustedNode('line');
var $feathericons$elm_feather$FeatherIcons$Icon = function (a) {
	return {$: 'Icon', a: a};
};
var $feathericons$elm_feather$FeatherIcons$defaultAttributes = function (name) {
	return {
		_class: $elm$core$Maybe$Just('feather feather-' + name),
		size: 24,
		sizeUnit: '',
		strokeWidth: 2,
		viewBox: '0 0 24 24'
	};
};
var $feathericons$elm_feather$FeatherIcons$makeBuilder = F2(
	function (name, src) {
		return $feathericons$elm_feather$FeatherIcons$Icon(
			{
				attrs: $feathericons$elm_feather$FeatherIcons$defaultAttributes(name),
				src: src
			});
	});
var $elm$svg$Svg$Attributes$points = _VirtualDom_attribute('points');
var $elm$svg$Svg$polyline = $elm$svg$Svg$trustedNode('polyline');
var $elm$svg$Svg$Attributes$x1 = _VirtualDom_attribute('x1');
var $elm$svg$Svg$Attributes$x2 = _VirtualDom_attribute('x2');
var $elm$svg$Svg$Attributes$y1 = _VirtualDom_attribute('y1');
var $elm$svg$Svg$Attributes$y2 = _VirtualDom_attribute('y2');
var $feathericons$elm_feather$FeatherIcons$arrowDown = A2(
	$feathericons$elm_feather$FeatherIcons$makeBuilder,
	'arrow-down',
	_List_fromArray(
		[
			A2(
			$elm$svg$Svg$line,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$x1('12'),
					$elm$svg$Svg$Attributes$y1('5'),
					$elm$svg$Svg$Attributes$x2('12'),
					$elm$svg$Svg$Attributes$y2('19')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$polyline,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$points('19 12 12 19 5 12')
				]),
			_List_Nil)
		]));
var $elm$svg$Svg$Attributes$class = _VirtualDom_attribute('class');
var $elm$svg$Svg$map = $elm$virtual_dom$VirtualDom$map;
var $elm$svg$Svg$Attributes$stroke = _VirtualDom_attribute('stroke');
var $elm$svg$Svg$Attributes$strokeLinecap = _VirtualDom_attribute('stroke-linecap');
var $elm$svg$Svg$Attributes$strokeLinejoin = _VirtualDom_attribute('stroke-linejoin');
var $elm$svg$Svg$Attributes$strokeWidth = _VirtualDom_attribute('stroke-width');
var $feathericons$elm_feather$FeatherIcons$toHtml = F2(
	function (attributes, _v0) {
		var src = _v0.a.src;
		var attrs = _v0.a.attrs;
		var strSize = $elm$core$String$fromFloat(attrs.size);
		var baseAttributes = _List_fromArray(
			[
				$elm$svg$Svg$Attributes$fill('none'),
				$elm$svg$Svg$Attributes$height(
				_Utils_ap(strSize, attrs.sizeUnit)),
				$elm$svg$Svg$Attributes$width(
				_Utils_ap(strSize, attrs.sizeUnit)),
				$elm$svg$Svg$Attributes$stroke('currentColor'),
				$elm$svg$Svg$Attributes$strokeLinecap('round'),
				$elm$svg$Svg$Attributes$strokeLinejoin('round'),
				$elm$svg$Svg$Attributes$strokeWidth(
				$elm$core$String$fromFloat(attrs.strokeWidth)),
				$elm$svg$Svg$Attributes$viewBox(attrs.viewBox)
			]);
		var combinedAttributes = _Utils_ap(
			function () {
				var _v1 = attrs._class;
				if (_v1.$ === 'Just') {
					var c = _v1.a;
					return A2(
						$elm$core$List$cons,
						$elm$svg$Svg$Attributes$class(c),
						baseAttributes);
				} else {
					return baseAttributes;
				}
			}(),
			attributes);
		return A2(
			$elm$svg$Svg$svg,
			combinedAttributes,
			A2(
				$elm$core$List$map,
				$elm$svg$Svg$map($elm$core$Basics$never),
				src));
	});
var $feathericons$elm_feather$FeatherIcons$withSize = F2(
	function (size, _v0) {
		var attrs = _v0.a.attrs;
		var src = _v0.a.src;
		return $feathericons$elm_feather$FeatherIcons$Icon(
			{
				attrs: _Utils_update(
					attrs,
					{size: size}),
				src: src
			});
	});
var $author$project$Icon$featherIcon = F2(
	function (icon, size) {
		return $mdgriffith$elm_ui$Element$html(
			A2(
				$feathericons$elm_feather$FeatherIcons$toHtml,
				_List_Nil,
				A2($feathericons$elm_feather$FeatherIcons$withSize, size, icon)));
	});
var $author$project$Icon$arrowDown = $author$project$Icon$featherIcon($feathericons$elm_feather$FeatherIcons$arrowDown);
var $feathericons$elm_feather$FeatherIcons$check = A2(
	$feathericons$elm_feather$FeatherIcons$makeBuilder,
	'check',
	_List_fromArray(
		[
			A2(
			$elm$svg$Svg$polyline,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$points('20 6 9 17 4 12')
				]),
			_List_Nil)
		]));
var $author$project$Icon$check = $author$project$Icon$featherIcon($feathericons$elm_feather$FeatherIcons$check);
var $author$project$Style$dropColor = A3($mdgriffith$elm_ui$Element$rgb255, 50, 50, 250);
var $andrewMacmurray$elm_simple_animation$Internal$Transition$Transition = function (a) {
	return {$: 'Transition', a: a};
};
var $andrewMacmurray$elm_simple_animation$Internal$Transition$properties = $andrewMacmurray$elm_simple_animation$Internal$Transition$Transition;
var $andrewMacmurray$elm_simple_animation$Internal$Transition$intersperseValuesWith = function (separator) {
	return A2(
		$elm$core$Basics$composeR,
		$elm$core$List$intersperse(separator),
		$elm$core$String$concat);
};
var $andrewMacmurray$elm_simple_animation$Internal$Transition$Delay = function (a) {
	return {$: 'Delay', a: a};
};
var $andrewMacmurray$elm_simple_animation$Internal$Transition$findDelayOption = A2(
	$elm$core$List$foldl,
	F2(
		function (o, acc) {
			if (o.$ === 'Delay') {
				return o;
			} else {
				return acc;
			}
		}),
	$andrewMacmurray$elm_simple_animation$Internal$Transition$Delay(0));
var $andrewMacmurray$elm_simple_animation$Internal$Ease$Ease = {$: 'Ease'};
var $andrewMacmurray$elm_simple_animation$Internal$Transition$Ease = function (a) {
	return {$: 'Ease', a: a};
};
var $andrewMacmurray$elm_simple_animation$Internal$Transition$findEaseOption = A2(
	$elm$core$List$foldl,
	F2(
		function (o, acc) {
			if (o.$ === 'Ease') {
				return o;
			} else {
				return acc;
			}
		}),
	$andrewMacmurray$elm_simple_animation$Internal$Transition$Ease($andrewMacmurray$elm_simple_animation$Internal$Ease$Ease));
var $andrewMacmurray$elm_simple_animation$Internal$Unit$ms = function (n) {
	return $elm$core$String$fromInt(n) + 'ms';
};
var $andrewMacmurray$elm_simple_animation$Internal$Ease$toString = function (e) {
	switch (e.$) {
		case 'Cubic':
			var a = e.a;
			var b = e.b;
			var c = e.c;
			var d = e.d;
			return 'cubic-bezier(' + (A2(
				$elm$core$String$join,
				',',
				_List_fromArray(
					[
						$elm$core$String$fromFloat(a),
						$elm$core$String$fromFloat(b),
						$elm$core$String$fromFloat(c),
						$elm$core$String$fromFloat(d)
					])) + ')');
		case 'Linear':
			return 'linear';
		case 'Ease':
			return 'ease';
		case 'EaseIn':
			return 'ease-in';
		case 'EaseOut':
			return 'ease-out';
		default:
			return 'ease-in-out';
	}
};
var $andrewMacmurray$elm_simple_animation$Internal$Transition$renderOptionShorthand = function (o) {
	if (o.$ === 'Delay') {
		var n = o.a;
		return $andrewMacmurray$elm_simple_animation$Internal$Unit$ms(n);
	} else {
		var e = o.a;
		return $andrewMacmurray$elm_simple_animation$Internal$Ease$toString(e);
	}
};
var $andrewMacmurray$elm_simple_animation$Internal$Transition$renderProperty = function (_v0) {
	var name = _v0.a;
	var duration = _v0.b;
	var options = _v0.c;
	return A2(
		$andrewMacmurray$elm_simple_animation$Internal$Transition$intersperseValuesWith,
		' ',
		_List_fromArray(
			[
				name,
				$andrewMacmurray$elm_simple_animation$Internal$Unit$ms(duration),
				$andrewMacmurray$elm_simple_animation$Internal$Transition$renderOptionShorthand(
				$andrewMacmurray$elm_simple_animation$Internal$Transition$findEaseOption(options)),
				$andrewMacmurray$elm_simple_animation$Internal$Transition$renderOptionShorthand(
				$andrewMacmurray$elm_simple_animation$Internal$Transition$findDelayOption(options))
			]));
};
var $andrewMacmurray$elm_simple_animation$Internal$Transition$render = function (_v0) {
	var props = _v0.a;
	return A2(
		$andrewMacmurray$elm_simple_animation$Internal$Transition$intersperseValuesWith,
		', ',
		A2($elm$core$List$map, $andrewMacmurray$elm_simple_animation$Internal$Transition$renderProperty, props));
};
var $andrewMacmurray$elm_simple_animation$Internal$Transition$toAttr = A2(
	$elm$core$Basics$composeR,
	$andrewMacmurray$elm_simple_animation$Internal$Transition$render,
	$elm$html$Html$Attributes$style('transition'));
var $andrewMacmurray$elm_simple_animation$Simple$Transition$properties = A2($elm$core$Basics$composeR, $andrewMacmurray$elm_simple_animation$Internal$Transition$properties, $andrewMacmurray$elm_simple_animation$Internal$Transition$toAttr);
var $andrewMacmurray$elm_simple_animation$Internal$Transition$Property = F3(
	function (a, b, c) {
		return {$: 'Property', a: a, b: b, c: c};
	});
var $andrewMacmurray$elm_simple_animation$Simple$Transition$property = $andrewMacmurray$elm_simple_animation$Internal$Transition$Property;
var $author$project$Main$borderTransition = $mdgriffith$elm_ui$Element$htmlAttribute(
	$andrewMacmurray$elm_simple_animation$Simple$Transition$properties(
		_List_fromArray(
			[
				A3($andrewMacmurray$elm_simple_animation$Simple$Transition$property, 'border-radius', 300, _List_Nil),
				A3($andrewMacmurray$elm_simple_animation$Simple$Transition$property, 'height', 300, _List_Nil),
				A3($andrewMacmurray$elm_simple_animation$Simple$Transition$property, 'width', 300, _List_Nil)
			])));
var $author$project$Main$dropIconBorderAttributes = function (dashedAttribute) {
	return _List_fromArray(
		[
			$mdgriffith$elm_ui$Element$Border$width(4),
			$mdgriffith$elm_ui$Element$Font$color($author$project$Style$dropColor),
			$mdgriffith$elm_ui$Element$centerX,
			$mdgriffith$elm_ui$Element$clip,
			A2($mdgriffith$elm_ui$Element$paddingXY, 16, 16),
			dashedAttribute,
			$mdgriffith$elm_ui$Element$Border$rounded(16),
			$mdgriffith$elm_ui$Element$height(
			$mdgriffith$elm_ui$Element$px(48 + ((16 + 4) * 2))),
			$mdgriffith$elm_ui$Element$width(
			$mdgriffith$elm_ui$Element$px(48 + ((16 + 4) * 2))),
			$author$project$Main$borderTransition
		]);
};
var $mdgriffith$elm_ui$Internal$Flag$fontWeight = $mdgriffith$elm_ui$Internal$Flag$flag(13);
var $mdgriffith$elm_ui$Element$Font$extraBold = A2($mdgriffith$elm_ui$Internal$Model$Class, $mdgriffith$elm_ui$Internal$Flag$fontWeight, $mdgriffith$elm_ui$Internal$Style$classes.textExtraBold);
var $elm$html$Html$Attributes$for = $elm$html$Html$Attributes$stringProperty('htmlFor');
var $elm$html$Html$Attributes$accept = $elm$html$Html$Attributes$stringProperty('accept');
var $mpizenberg$elm_file$FileValue$inputAttributes = F2(
	function (id, mimes) {
		return _List_fromArray(
			[
				$elm$html$Html$Attributes$id(id),
				$elm$html$Html$Attributes$type_('file'),
				A2($elm$html$Html$Attributes$style, 'display', 'none'),
				$elm$html$Html$Attributes$accept(
				A2($elm$core$String$join, ',', mimes))
			]);
	});
var $elm$virtual_dom$VirtualDom$Custom = function (a) {
	return {$: 'Custom', a: a};
};
var $elm$html$Html$Events$custom = F2(
	function (event, decoder) {
		return A2(
			$elm$virtual_dom$VirtualDom$on,
			event,
			$elm$virtual_dom$VirtualDom$Custom(decoder));
	});
var $mpizenberg$elm_file$FileValue$File = F5(
	function (value, name, mime, size, lastModified) {
		return {lastModified: lastModified, mime: mime, name: name, size: size, value: value};
	});
var $mpizenberg$elm_file$FileValue$decoder = A6(
	$elm$json$Json$Decode$map5,
	$mpizenberg$elm_file$FileValue$File,
	$elm$json$Json$Decode$value,
	A2($elm$json$Json$Decode$field, 'name', $elm$json$Json$Decode$string),
	A2($elm$json$Json$Decode$field, 'type', $elm$json$Json$Decode$string),
	A2($elm$json$Json$Decode$field, 'size', $elm$json$Json$Decode$int),
	A2(
		$elm$json$Json$Decode$map,
		$elm$time$Time$millisToPosix,
		A2($elm$json$Json$Decode$field, 'lastModified', $elm$json$Json$Decode$int)));
var $mpizenberg$elm_file$FileValue$all = A2(
	$elm$core$List$foldr,
	$elm$json$Json$Decode$map2($elm$core$List$cons),
	$elm$json$Json$Decode$succeed(_List_Nil));
var $mpizenberg$elm_file$FileValue$dynamicListOf = function (itemDecoder) {
	var decodeOne = function (n) {
		return A2(
			$elm$json$Json$Decode$field,
			$elm$core$String$fromInt(n),
			itemDecoder);
	};
	var decodeN = function (n) {
		return $mpizenberg$elm_file$FileValue$all(
			A2(
				$elm$core$List$map,
				decodeOne,
				A2($elm$core$List$range, 0, n - 1)));
	};
	return A2(
		$elm$json$Json$Decode$andThen,
		decodeN,
		A2($elm$json$Json$Decode$field, 'length', $elm$json$Json$Decode$int));
};
var $mpizenberg$elm_file$FileValue$errorFile = {
	lastModified: $elm$time$Time$millisToPosix(0),
	mime: 'text/plain',
	name: 'If you see this file, please report an error at https://github.com/mpizenberg/elm-files/issues',
	size: 0,
	value: $elm$json$Json$Encode$null
};
var $mpizenberg$elm_file$FileValue$multipleFilesDecoder = A2(
	$elm$json$Json$Decode$andThen,
	function (files) {
		if (files.b) {
			var file = files.a;
			var list = files.b;
			return $elm$json$Json$Decode$succeed(
				_Utils_Tuple2(file, list));
		} else {
			return $elm$json$Json$Decode$succeed(
				_Utils_Tuple2($mpizenberg$elm_file$FileValue$errorFile, _List_Nil));
		}
	},
	$mpizenberg$elm_file$FileValue$dynamicListOf($mpizenberg$elm_file$FileValue$decoder));
var $mpizenberg$elm_file$FileValue$loadMultipleFiles = function (msgTag) {
	return A2(
		$elm$html$Html$Events$custom,
		'change',
		A2(
			$elm$json$Json$Decode$map,
			function (_v0) {
				var file = _v0.a;
				var list = _v0.b;
				return {
					message: A2(msgTag, file, list),
					preventDefault: true,
					stopPropagation: true
				};
			},
			A2(
				$elm$json$Json$Decode$at,
				_List_fromArray(
					['target', 'files']),
				$mpizenberg$elm_file$FileValue$multipleFilesDecoder)));
};
var $elm$html$Html$Attributes$multiple = $elm$html$Html$Attributes$boolProperty('multiple');
var $mpizenberg$elm_file$FileValue$hiddenInputMultiple = F3(
	function (id, mimes, msgTag) {
		return A2(
			$elm$html$Html$input,
			A2(
				$elm$core$List$cons,
				$mpizenberg$elm_file$FileValue$loadMultipleFiles(msgTag),
				A2(
					$elm$core$List$cons,
					$elm$html$Html$Attributes$multiple(true),
					A2($mpizenberg$elm_file$FileValue$inputAttributes, id, mimes))),
			_List_Nil);
	});
var $elm$svg$Svg$rect = $elm$svg$Svg$trustedNode('rect');
var $elm$svg$Svg$Attributes$rx = _VirtualDom_attribute('rx');
var $elm$svg$Svg$Attributes$ry = _VirtualDom_attribute('ry');
var $elm$svg$Svg$Attributes$x = _VirtualDom_attribute('x');
var $elm$svg$Svg$Attributes$y = _VirtualDom_attribute('y');
var $feathericons$elm_feather$FeatherIcons$image = A2(
	$feathericons$elm_feather$FeatherIcons$makeBuilder,
	'image',
	_List_fromArray(
		[
			A2(
			$elm$svg$Svg$rect,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$x('3'),
					$elm$svg$Svg$Attributes$y('3'),
					$elm$svg$Svg$Attributes$width('18'),
					$elm$svg$Svg$Attributes$height('18'),
					$elm$svg$Svg$Attributes$rx('2'),
					$elm$svg$Svg$Attributes$ry('2')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$circle,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$cx('8.5'),
					$elm$svg$Svg$Attributes$cy('8.5'),
					$elm$svg$Svg$Attributes$r('1.5')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$polyline,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$points('21 15 16 10 5 21')
				]),
			_List_Nil)
		]));
var $author$project$Icon$image = $author$project$Icon$featherIcon($feathericons$elm_feather$FeatherIcons$image);
var $elm$html$Html$label = _VirtualDom_node('label');
var $feathericons$elm_feather$FeatherIcons$search = A2(
	$feathericons$elm_feather$FeatherIcons$makeBuilder,
	'search',
	_List_fromArray(
		[
			A2(
			$elm$svg$Svg$circle,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$cx('11'),
					$elm$svg$Svg$Attributes$cy('11'),
					$elm$svg$Svg$Attributes$r('8')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$line,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$x1('21'),
					$elm$svg$Svg$Attributes$y1('21'),
					$elm$svg$Svg$Attributes$x2('16.65'),
					$elm$svg$Svg$Attributes$y2('16.65')
				]),
			_List_Nil)
		]));
var $author$project$Icon$search = $author$project$Icon$featherIcon($feathericons$elm_feather$FeatherIcons$search);
var $elm$core$List$singleton = function (value) {
	return _List_fromArray(
		[value]);
};
var $feathericons$elm_feather$FeatherIcons$slash = A2(
	$feathericons$elm_feather$FeatherIcons$makeBuilder,
	'slash',
	_List_fromArray(
		[
			A2(
			$elm$svg$Svg$circle,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$cx('12'),
					$elm$svg$Svg$Attributes$cy('12'),
					$elm$svg$Svg$Attributes$r('10')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$line,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$x1('4.93'),
					$elm$svg$Svg$Attributes$y1('4.93'),
					$elm$svg$Svg$Attributes$x2('19.07'),
					$elm$svg$Svg$Attributes$y2('19.07')
				]),
			_List_Nil)
		]));
var $author$project$Icon$slash = $author$project$Icon$featherIcon($feathericons$elm_feather$FeatherIcons$slash);
var $mdgriffith$elm_ui$Element$Font$underline = $mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.underline);
var $author$project$Main$imageDropAndLoadArea = F2(
	function (draggingState, loadState) {
		var useDirectlyProvided = A2(
			$mdgriffith$elm_ui$Element$column,
			_List_fromArray(
				[
					$mdgriffith$elm_ui$Element$centerX,
					$mdgriffith$elm_ui$Element$Font$center,
					$mdgriffith$elm_ui$Element$padding(6)
				]),
			_List_fromArray(
				[
					$mdgriffith$elm_ui$Element$text('You can also directly use'),
					A2(
					$mdgriffith$elm_ui$Element$Input$button,
					_List_fromArray(
						[$mdgriffith$elm_ui$Element$Font$underline]),
					{
						label: $mdgriffith$elm_ui$Element$text('this example set of 6 images'),
						onPress: $elm$core$Maybe$Just(
							$author$project$Main$LoadExampleImages(
								_List_fromArray(
									['/img/bd_caen/01.jpg', '/img/bd_caen/02.jpg', '/img/bd_caen/03.jpg', '/img/bd_caen/04.jpg', '/img/bd_caen/05.jpg', '/img/bd_caen/06.jpg'])))
					})
				]));
		var dropOrLoadText = A2(
			$mdgriffith$elm_ui$Element$row,
			_List_fromArray(
				[$mdgriffith$elm_ui$Element$centerX]),
			_List_fromArray(
				[
					$mdgriffith$elm_ui$Element$text('Drop '),
					A2(
					$mdgriffith$elm_ui$Element$el,
					_List_fromArray(
						[
							$mdgriffith$elm_ui$Element$Font$extraBold,
							$mdgriffith$elm_ui$Element$Font$size(22),
							$mdgriffith$elm_ui$Element$Font$color($author$project$Style$dropColor)
						]),
					$mdgriffith$elm_ui$Element$text('images')),
					$mdgriffith$elm_ui$Element$text(' or '),
					$mdgriffith$elm_ui$Element$html(
					A3(
						$mpizenberg$elm_file$FileValue$hiddenInputMultiple,
						'TheFileInput',
						_List_fromArray(
							['image/*']),
						F2(
							function (file, otherFiles) {
								return $author$project$Main$DragDropImagesMsg(
									A2($author$project$Main$DropImages, file, otherFiles));
							}))),
					A2(
					$mdgriffith$elm_ui$Element$el,
					_List_fromArray(
						[$mdgriffith$elm_ui$Element$Font$underline]),
					$mdgriffith$elm_ui$Element$html(
						A2(
							$elm$html$Html$label,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$for('TheFileInput'),
									A2($elm$html$Html$Attributes$style, 'cursor', 'pointer')
								]),
							_List_fromArray(
								[
									$elm$html$Html$text('load from disk')
								]))))
				]));
		var borderStyle = function () {
			switch (draggingState.$) {
				case 'Idle':
					return $mdgriffith$elm_ui$Element$Border$dashed;
				case 'DraggingSomeImages':
					return $mdgriffith$elm_ui$Element$Border$solid;
				default:
					return $mdgriffith$elm_ui$Element$Border$dashed;
			}
		}();
		var _v0 = function () {
			switch (loadState.$) {
				case 'LoadIdle':
					return _Utils_Tuple2(
						$author$project$Icon$search(48),
						$mdgriffith$elm_ui$Element$none);
				case 'LoadOk':
					var headers = loadState.a;
					return _Utils_Tuple2(
						$author$project$Icon$check(48),
						A2(
							$mdgriffith$elm_ui$Element$column,
							_List_fromArray(
								[
									$mdgriffith$elm_ui$Element$Font$size(16)
								]),
							A2(
								$elm$core$List$append,
								_List_fromArray(
									[
										A2(
										$mdgriffith$elm_ui$Element$el,
										_List_fromArray(
											[
												$mdgriffith$elm_ui$Element$Font$color($author$project$Style$green)
											]),
										$mdgriffith$elm_ui$Element$text('Number of images : '))
									]),
								$elm$core$List$singleton(
									$mdgriffith$elm_ui$Element$text(headers)))));
				default:
					var err = loadState.a;
					return _Utils_Tuple2(
						$author$project$Icon$slash(48),
						A2(
							$mdgriffith$elm_ui$Element$column,
							_List_fromArray(
								[
									$mdgriffith$elm_ui$Element$Font$size(16)
								]),
							A2(
								$elm$core$List$append,
								_List_fromArray(
									[
										A2(
										$mdgriffith$elm_ui$Element$el,
										_List_fromArray(
											[
												$mdgriffith$elm_ui$Element$Font$color($author$project$Style$errorColor)
											]),
										$mdgriffith$elm_ui$Element$text('Errors occured while loading images : '))
									]),
								$elm$core$List$singleton(
									$mdgriffith$elm_ui$Element$text(err)))));
			}
		}();
		var validationIcon = _v0.a;
		var textElement = _v0.b;
		return A2(
			$mdgriffith$elm_ui$Element$el,
			_List_fromArray(
				[
					$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill),
					$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$fill)
				]),
			A2(
				$mdgriffith$elm_ui$Element$column,
				_List_fromArray(
					[
						$mdgriffith$elm_ui$Element$centerX,
						$mdgriffith$elm_ui$Element$centerY,
						$mdgriffith$elm_ui$Element$spacing(32)
					]),
				_List_fromArray(
					[
						A2(
						$mdgriffith$elm_ui$Element$row,
						_List_fromArray(
							[
								$mdgriffith$elm_ui$Element$centerX,
								$mdgriffith$elm_ui$Element$centerY,
								$mdgriffith$elm_ui$Element$spacing(32),
								$mdgriffith$elm_ui$Element$Border$width(2),
								borderStyle,
								$mdgriffith$elm_ui$Element$Border$color($author$project$Style$lightGrey),
								$mdgriffith$elm_ui$Element$padding(8)
							]),
						_List_fromArray(
							[
								$author$project$Icon$image(48),
								$mdgriffith$elm_ui$Element$text('    '),
								A2(
								$mdgriffith$elm_ui$Element$column,
								_List_fromArray(
									[
										$mdgriffith$elm_ui$Element$centerX,
										$mdgriffith$elm_ui$Element$centerY,
										$mdgriffith$elm_ui$Element$spacing(16)
									]),
								_List_fromArray(
									[
										A2(
										$mdgriffith$elm_ui$Element$el,
										$author$project$Main$dropIconBorderAttributes(borderStyle),
										$author$project$Icon$arrowDown(48)),
										dropOrLoadText,
										useDirectlyProvided
									])),
								$mdgriffith$elm_ui$Element$text('    '),
								validationIcon
							])),
						textElement
					])));
	});
var $author$project$Main$DragDropLightsMsg = function (a) {
	return {$: 'DragDropLightsMsg', a: a};
};
var $author$project$Main$DropLights = function (a) {
	return {$: 'DropLights', a: a};
};
var $mpizenberg$elm_file$FileValue$loadFile = function (msgTag) {
	return A2(
		$elm$html$Html$Events$custom,
		'change',
		A2(
			$elm$json$Json$Decode$map,
			function (file) {
				return {
					message: msgTag(file),
					preventDefault: true,
					stopPropagation: true
				};
			},
			A2(
				$elm$json$Json$Decode$at,
				_List_fromArray(
					['target', 'files', '0']),
				$mpizenberg$elm_file$FileValue$decoder)));
};
var $mpizenberg$elm_file$FileValue$hiddenInputSingle = F3(
	function (id, mimes, msgTag) {
		return A2(
			$elm$html$Html$input,
			A2(
				$elm$core$List$cons,
				$mpizenberg$elm_file$FileValue$loadFile(msgTag),
				A2($mpizenberg$elm_file$FileValue$inputAttributes, id, mimes)),
			_List_Nil);
	});
var $elm$svg$Svg$Attributes$d = _VirtualDom_attribute('d');
var $elm$svg$Svg$path = $elm$svg$Svg$trustedNode('path');
var $feathericons$elm_feather$FeatherIcons$sunset = A2(
	$feathericons$elm_feather$FeatherIcons$makeBuilder,
	'sunset',
	_List_fromArray(
		[
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$d('M17 18a5 5 0 0 0-10 0')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$line,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$x1('12'),
					$elm$svg$Svg$Attributes$y1('9'),
					$elm$svg$Svg$Attributes$x2('12'),
					$elm$svg$Svg$Attributes$y2('2')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$line,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$x1('4.22'),
					$elm$svg$Svg$Attributes$y1('10.22'),
					$elm$svg$Svg$Attributes$x2('5.64'),
					$elm$svg$Svg$Attributes$y2('11.64')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$line,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$x1('1'),
					$elm$svg$Svg$Attributes$y1('18'),
					$elm$svg$Svg$Attributes$x2('3'),
					$elm$svg$Svg$Attributes$y2('18')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$line,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$x1('21'),
					$elm$svg$Svg$Attributes$y1('18'),
					$elm$svg$Svg$Attributes$x2('23'),
					$elm$svg$Svg$Attributes$y2('18')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$line,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$x1('18.36'),
					$elm$svg$Svg$Attributes$y1('11.64'),
					$elm$svg$Svg$Attributes$x2('19.78'),
					$elm$svg$Svg$Attributes$y2('10.22')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$line,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$x1('23'),
					$elm$svg$Svg$Attributes$y1('22'),
					$elm$svg$Svg$Attributes$x2('1'),
					$elm$svg$Svg$Attributes$y2('22')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$polyline,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$points('16 5 12 9 8 5')
				]),
			_List_Nil)
		]));
var $author$project$Icon$sunset = $author$project$Icon$featherIcon($feathericons$elm_feather$FeatherIcons$sunset);
var $author$project$Main$lightsDropAndLoadArea = F2(
	function (draggingState, loadState) {
		var inputCsv = $mdgriffith$elm_ui$Element$html(
			A3(
				$mpizenberg$elm_file$FileValue$hiddenInputSingle,
				'TheCsvInput',
				_List_fromArray(
					['text/csv']),
				function (file) {
					return $author$project$Main$DragDropLightsMsg(
						$author$project$Main$DropLights(file));
				}));
		var dropOrLoadText = A2(
			$mdgriffith$elm_ui$Element$row,
			_List_fromArray(
				[$mdgriffith$elm_ui$Element$centerX]),
			_List_fromArray(
				[
					$mdgriffith$elm_ui$Element$text('Drop '),
					A2(
					$mdgriffith$elm_ui$Element$el,
					_List_fromArray(
						[
							$mdgriffith$elm_ui$Element$Font$extraBold,
							$mdgriffith$elm_ui$Element$Font$size(22),
							$mdgriffith$elm_ui$Element$Font$color($author$project$Style$dropColor)
						]),
					$mdgriffith$elm_ui$Element$text('lights')),
					$mdgriffith$elm_ui$Element$text(' or '),
					inputCsv,
					A2(
					$mdgriffith$elm_ui$Element$el,
					_List_fromArray(
						[$mdgriffith$elm_ui$Element$Font$underline]),
					$mdgriffith$elm_ui$Element$html(
						A2(
							$elm$html$Html$label,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$for('TheCsvInput'),
									A2($elm$html$Html$Attributes$style, 'cursor', 'pointer')
								]),
							_List_fromArray(
								[
									$elm$html$Html$text('load from disk')
								])))),
					$mdgriffith$elm_ui$Element$text('   ')
				]));
		var borderStyle = function () {
			switch (draggingState.$) {
				case 'Idle':
					return $mdgriffith$elm_ui$Element$Border$dashed;
				case 'DraggingSomeImages':
					return $mdgriffith$elm_ui$Element$Border$solid;
				default:
					return $mdgriffith$elm_ui$Element$Border$dashed;
			}
		}();
		var _v0 = function () {
			switch (loadState.$) {
				case 'LoadIdle':
					return _Utils_Tuple2(
						$author$project$Icon$search(48),
						$mdgriffith$elm_ui$Element$none);
				case 'LoadOk':
					var headers = loadState.a;
					return _Utils_Tuple2(
						$author$project$Icon$check(48),
						A2(
							$mdgriffith$elm_ui$Element$column,
							_List_fromArray(
								[
									$mdgriffith$elm_ui$Element$Font$size(16)
								]),
							A2(
								$elm$core$List$append,
								_List_fromArray(
									[
										A2(
										$mdgriffith$elm_ui$Element$el,
										_List_fromArray(
											[
												$mdgriffith$elm_ui$Element$Font$color($author$project$Style$green)
											]),
										$mdgriffith$elm_ui$Element$text('Number of light vectors : '))
									]),
								$elm$core$List$singleton(
									$mdgriffith$elm_ui$Element$text(headers)))));
				default:
					var err = loadState.a;
					return _Utils_Tuple2(
						$author$project$Icon$slash(48),
						A2(
							$mdgriffith$elm_ui$Element$column,
							_List_fromArray(
								[
									$mdgriffith$elm_ui$Element$Font$size(16)
								]),
							A2(
								$elm$core$List$append,
								_List_fromArray(
									[
										A2(
										$mdgriffith$elm_ui$Element$el,
										_List_fromArray(
											[
												$mdgriffith$elm_ui$Element$Font$color($author$project$Style$errorColor)
											]),
										$mdgriffith$elm_ui$Element$text('Errors occured while loading csv file : '))
									]),
								$elm$core$List$singleton(
									$mdgriffith$elm_ui$Element$text(err)))));
			}
		}();
		var validationIcon = _v0.a;
		var textElement = _v0.b;
		return A2(
			$mdgriffith$elm_ui$Element$el,
			_List_fromArray(
				[
					$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill),
					$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$fill)
				]),
			A2(
				$mdgriffith$elm_ui$Element$column,
				_List_fromArray(
					[
						$mdgriffith$elm_ui$Element$centerX,
						$mdgriffith$elm_ui$Element$centerY,
						$mdgriffith$elm_ui$Element$spacing(32)
					]),
				_List_fromArray(
					[
						A2(
						$mdgriffith$elm_ui$Element$row,
						_List_fromArray(
							[
								$mdgriffith$elm_ui$Element$centerX,
								$mdgriffith$elm_ui$Element$centerY,
								$mdgriffith$elm_ui$Element$spacing(32),
								$mdgriffith$elm_ui$Element$Border$width(2),
								borderStyle,
								$mdgriffith$elm_ui$Element$Border$color($author$project$Style$lightGrey),
								$mdgriffith$elm_ui$Element$padding(8)
							]),
						_List_fromArray(
							[
								$author$project$Icon$sunset(48),
								$mdgriffith$elm_ui$Element$text('    '),
								A2(
								$mdgriffith$elm_ui$Element$column,
								_List_fromArray(
									[
										$mdgriffith$elm_ui$Element$centerX,
										$mdgriffith$elm_ui$Element$centerY,
										$mdgriffith$elm_ui$Element$spacing(16)
									]),
								_List_fromArray(
									[
										A2(
										$mdgriffith$elm_ui$Element$el,
										$author$project$Main$dropIconBorderAttributes(borderStyle),
										$author$project$Icon$arrowDown(48)),
										dropOrLoadText
									])),
								$mdgriffith$elm_ui$Element$text('    '),
								validationIcon
							])),
						textElement
					])));
	});
var $feathericons$elm_feather$FeatherIcons$logIn = A2(
	$feathericons$elm_feather$FeatherIcons$makeBuilder,
	'log-in',
	_List_fromArray(
		[
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$d('M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$polyline,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$points('10 17 15 12 10 7')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$line,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$x1('15'),
					$elm$svg$Svg$Attributes$y1('12'),
					$elm$svg$Svg$Attributes$x2('3'),
					$elm$svg$Svg$Attributes$y2('12')
				]),
			_List_Nil)
		]));
var $author$project$Icon$logIn = $author$project$Icon$featherIcon($feathericons$elm_feather$FeatherIcons$logIn);
var $author$project$Main$DragLeaveImages = {$: 'DragLeaveImages'};
var $author$project$Main$DragOverImages = {$: 'DragOverImages'};
var $author$project$Main$DragOverLights = {$: 'DragOverLights'};
var $elm$regex$Regex$Match = F4(
	function (match, index, number, submatches) {
		return {index: index, match: match, number: number, submatches: submatches};
	});
var $elm$regex$Regex$contains = _Regex_contains;
var $elm$regex$Regex$fromStringWith = _Regex_fromStringWith;
var $elm$regex$Regex$fromString = function (string) {
	return A2(
		$elm$regex$Regex$fromStringWith,
		{caseInsensitive: false, multiline: false},
		string);
};
var $elm$core$Debug$log = _Debug_log;
var $elm$regex$Regex$never = _Regex_never;
var $mpizenberg$elm_file$FileValue$filesOn = F2(
	function (event, msgTag) {
		return A2(
			$elm$html$Html$Events$custom,
			event,
			A2(
				$elm$json$Json$Decode$map,
				function (_v0) {
					var file = _v0.a;
					var list = _v0.b;
					return {
						message: A2(msgTag, file, list),
						preventDefault: true,
						stopPropagation: true
					};
				},
				A2(
					$elm$json$Json$Decode$at,
					_List_fromArray(
						['dataTransfer', 'files']),
					$mpizenberg$elm_file$FileValue$multipleFilesDecoder)));
	});
var $mpizenberg$elm_file$FileValue$onWithId = F3(
	function (id, event, msg) {
		return A2(
			$elm$html$Html$Events$custom,
			event,
			A2(
				$elm$json$Json$Decode$map,
				function (message) {
					return {message: message, preventDefault: true, stopPropagation: true};
				},
				A2(
					$elm$json$Json$Decode$andThen,
					function (targetId) {
						return _Utils_eq(targetId, id) ? $elm$json$Json$Decode$succeed(msg) : $elm$json$Json$Decode$fail('Wrong target');
					},
					A2(
						$elm$json$Json$Decode$at,
						_List_fromArray(
							['target', 'id']),
						$elm$json$Json$Decode$string))));
	});
var $mpizenberg$elm_file$FileValue$onDrop = function (config) {
	return A2(
		$elm$core$List$cons,
		A2($mpizenberg$elm_file$FileValue$filesOn, 'dragover', config.onOver),
		A2(
			$elm$core$List$cons,
			A2($mpizenberg$elm_file$FileValue$filesOn, 'drop', config.onDrop),
			function () {
				var _v0 = config.onLeave;
				if (_v0.$ === 'Nothing') {
					return _List_Nil;
				} else {
					var id = _v0.a.id;
					var msg = _v0.a.msg;
					return _List_fromArray(
						[
							$elm$html$Html$Attributes$id(id),
							A3($mpizenberg$elm_file$FileValue$onWithId, id, 'dragleave', msg)
						]);
				}
			}()));
};
var $author$project$Main$onDropAttributes = function () {
	var extensionRegex = A2(
		$elm$core$Maybe$withDefault,
		$elm$regex$Regex$never,
		$elm$regex$Regex$fromString('*\\.csv'));
	var extension = function (fileName) {
		return A2($elm$regex$Regex$contains, extensionRegex, fileName);
	};
	return A2(
		$elm$core$List$map,
		$mdgriffith$elm_ui$Element$htmlAttribute,
		$mpizenberg$elm_file$FileValue$onDrop(
			{
				onDrop: F2(
					function (file, otherFiles) {
						var _v0 = file.mime;
						if (_v0 === 'text/csv') {
							return $author$project$Main$DragDropLightsMsg(
								$author$project$Main$DropLights(file));
						} else {
							return $author$project$Main$DragDropImagesMsg(
								A2($author$project$Main$DropImages, file, otherFiles));
						}
					}),
				onLeave: $elm$core$Maybe$Just(
					{
						id: 'FileDropArea',
						msg: $author$project$Main$DragDropImagesMsg($author$project$Main$DragLeaveImages)
					}),
				onOver: F2(
					function (typ, _v1) {
						return extension(
							A2($elm$core$Debug$log, 'name:', typ).name) ? $author$project$Main$DragDropLightsMsg($author$project$Main$DragOverLights) : $author$project$Main$DragDropImagesMsg($author$project$Main$DragOverImages);
					})
			}));
}();
var $mdgriffith$elm_ui$Element$rgba255 = F4(
	function (red, green, blue, a) {
		return A4($mdgriffith$elm_ui$Internal$Model$Rgba, red / 255, green / 255, blue / 255, a);
	});
var $feathericons$elm_feather$FeatherIcons$github = A2(
	$feathericons$elm_feather$FeatherIcons$makeBuilder,
	'github',
	_List_fromArray(
		[
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$d('M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22')
				]),
			_List_Nil)
		]));
var $author$project$Icon$github = $author$project$Icon$featherIcon($feathericons$elm_feather$FeatherIcons$github);
var $elm$html$Html$Attributes$rel = _VirtualDom_attribute('rel');
var $mdgriffith$elm_ui$Element$link = F2(
	function (attrs, _v0) {
		var url = _v0.url;
		var label = _v0.label;
		return A4(
			$mdgriffith$elm_ui$Internal$Model$element,
			$mdgriffith$elm_ui$Internal$Model$asEl,
			$mdgriffith$elm_ui$Internal$Model$NodeName('a'),
			A2(
				$elm$core$List$cons,
				$mdgriffith$elm_ui$Internal$Model$Attr(
					$elm$html$Html$Attributes$href(url)),
				A2(
					$elm$core$List$cons,
					$mdgriffith$elm_ui$Internal$Model$Attr(
						$elm$html$Html$Attributes$rel('noopener noreferrer')),
					A2(
						$elm$core$List$cons,
						$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$shrink),
						A2(
							$elm$core$List$cons,
							$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$shrink),
							A2(
								$elm$core$List$cons,
								$mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.contentCenterX + (' ' + ($mdgriffith$elm_ui$Internal$Style$classes.contentCenterY + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.link)))),
								attrs))))),
			$mdgriffith$elm_ui$Internal$Model$Unkeyed(
				_List_fromArray(
					[label])));
	});
var $author$project$Main$viewTitle = A2(
	$mdgriffith$elm_ui$Element$column,
	_List_fromArray(
		[
			$mdgriffith$elm_ui$Element$centerX,
			$mdgriffith$elm_ui$Element$spacing(16)
		]),
	_List_fromArray(
		[
			A2(
			$mdgriffith$elm_ui$Element$paragraph,
			_List_fromArray(
				[
					$mdgriffith$elm_ui$Element$Font$center,
					$mdgriffith$elm_ui$Element$Font$size(32)
				]),
			_List_fromArray(
				[
					$mdgriffith$elm_ui$Element$text('View of stereophotometric computed normal map')
				])),
			A2(
			$mdgriffith$elm_ui$Element$row,
			_List_fromArray(
				[
					$mdgriffith$elm_ui$Element$alignRight,
					$mdgriffith$elm_ui$Element$spacing(8)
				]),
			_List_fromArray(
				[
					A2(
					$mdgriffith$elm_ui$Element$link,
					_List_fromArray(
						[$mdgriffith$elm_ui$Element$Font$underline]),
					{
						label: $mdgriffith$elm_ui$Element$text('code on GitHub'),
						url: 'https://github.com/floffy-f/stenm'
					}),
					A2($mdgriffith$elm_ui$Element$el, _List_Nil, $mdgriffith$elm_ui$Element$none),
					$author$project$Icon$github(16)
				]))
		]));
var $author$project$Main$viewHome = F3(
	function (draggingState, loadImages, loadLights) {
		var youCanGo = function () {
			var _v2 = _Utils_Tuple2(loadImages, loadLights);
			if (_v2.a.$ === 'LoadOk') {
				if (_v2.b.$ === 'LoadOk') {
					var imNb = _v2.a.a;
					var lgtNb = _v2.b.a;
					var lgt = A2(
						$elm$core$Maybe$withDefault,
						0,
						$elm$core$String$toInt(lgtNb));
					var im = A2(
						$elm$core$Maybe$withDefault,
						0,
						$elm$core$String$toInt(imNb));
					var diff = im - lgt;
					var _v3 = _Utils_Tuple2(im, lgt);
					if (!_v3.a) {
						if (!_v3.b) {
							return $author$project$Main$NoImageNorLight;
						} else {
							return $author$project$Main$NoImage;
						}
					} else {
						if (!_v3.b) {
							return $author$project$Main$NoLight;
						} else {
							return (diff > 0) ? $author$project$Main$LackingLights(diff) : ((diff < 0) ? $author$project$Main$LackingImages(0 - diff) : $author$project$Main$Go);
						}
					}
				} else {
					return $author$project$Main$NoLight;
				}
			} else {
				if (_v2.b.$ === 'LoadOk') {
					return $author$project$Main$NoImage;
				} else {
					return $author$project$Main$NoImageNorLight;
				}
			}
		}();
		var goButton = A2(
			$mdgriffith$elm_ui$Element$Input$button,
			_List_fromArray(
				[
					$mdgriffith$elm_ui$Element$padding(6),
					$mdgriffith$elm_ui$Element$Background$color(
					A4($mdgriffith$elm_ui$Element$rgba255, 255, 255, 255, 0.8)),
					$mdgriffith$elm_ui$Element$Font$color($author$project$Style$black),
					$mdgriffith$elm_ui$Element$htmlAttribute(
					A2($elm$html$Html$Attributes$style, 'box-shadow', 'none')),
					$mdgriffith$elm_ui$Element$htmlAttribute(
					$elm$html$Html$Attributes$title('Go')),
					$mdgriffith$elm_ui$Element$centerX,
					$mdgriffith$elm_ui$Element$centerY
				]),
			{
				label: $author$project$Icon$logIn(48),
				onPress: function () {
					if (youCanGo.$ === 'Go') {
						return $elm$core$Maybe$Just(
							$author$project$Main$NavigationMsg($author$project$Main$GoToPageImages));
					} else {
						return $elm$core$Maybe$Nothing;
					}
				}()
			});
		var goView = A2(
			$mdgriffith$elm_ui$Element$row,
			_List_fromArray(
				[
					$mdgriffith$elm_ui$Element$centerX,
					$mdgriffith$elm_ui$Element$centerY,
					$mdgriffith$elm_ui$Element$spacing(32)
				]),
			function () {
				switch (youCanGo.$) {
					case 'Go':
						return _List_fromArray(
							[
								goButton,
								A2(
								$mdgriffith$elm_ui$Element$Input$button,
								_List_Nil,
								{
									label: $mdgriffith$elm_ui$Element$text('Go to the images preparation'),
									onPress: $elm$core$Maybe$Just(
										$author$project$Main$NavigationMsg($author$project$Main$GoToPageImages))
								})
							]);
					case 'NoImage':
						return _List_fromArray(
							[
								$mdgriffith$elm_ui$Element$text(' - Import images to compute the normal map from')
							]);
					case 'NoLight':
						return _List_fromArray(
							[
								$mdgriffith$elm_ui$Element$text(' - Import a CSV file containing three columns : x, y and z coordinates for each light direction')
							]);
					case 'NoImageNorLight':
						return _List_fromArray(
							[
								$mdgriffith$elm_ui$Element$text(' - Import images to compute the normal map from\n - Import a CSV file containing three columns : x, y and z coordinates for each light direction')
							]);
					case 'LackingImages':
						var amount = youCanGo.a;
						return _List_fromArray(
							[
								$mdgriffith$elm_ui$Element$text(
								'Images files are missing compared to the number of light vectors you have inputed :' + $elm$core$String$fromInt(amount))
							]);
					default:
						var amount = youCanGo.a;
						return _List_fromArray(
							[
								$mdgriffith$elm_ui$Element$text(
								'Light vectors are missing compared to the number of images you have inputed : ' + $elm$core$String$fromInt(amount))
							]);
				}
			}());
		return A2(
			$mdgriffith$elm_ui$Element$column,
			A2(
				$elm$core$List$cons,
				$mdgriffith$elm_ui$Element$padding(20),
				A2(
					$elm$core$List$cons,
					$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill),
					A2(
						$elm$core$List$cons,
						$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$fill),
						A2(
							$elm$core$List$cons,
							$mdgriffith$elm_ui$Element$spacing(64),
							$author$project$Main$onDropAttributes)))),
			_List_fromArray(
				[
					$author$project$Main$viewTitle,
					goView,
					A2($author$project$Main$imageDropAndLoadArea, draggingState, loadImages),
					A2($author$project$Main$lightsDropAndLoadArea, draggingState, loadLights)
				]));
	});
var $author$project$Main$ClickNextImage = {$: 'ClickNextImage'};
var $author$project$Main$ClickPreviousImage = {$: 'ClickPreviousImage'};
var $author$project$Main$CropCurrentFrame = {$: 'CropCurrentFrame'};
var $author$project$Main$GoToPageConfig = {$: 'GoToPageConfig'};
var $author$project$Main$PointerDownRaw = function (a) {
	return {$: 'PointerDownRaw', a: a};
};
var $author$project$Main$PointerMove = function (a) {
	return {$: 'PointerMove', a: a};
};
var $author$project$Main$PointerMsg = function (a) {
	return {$: 'PointerMsg', a: a};
};
var $author$project$Main$PointerUp = {$: 'PointerUp'};
var $author$project$Main$SelectDrawingMode = {$: 'SelectDrawingMode'};
var $author$project$Main$SelectMovingMode = {$: 'SelectMovingMode'};
var $author$project$Main$ViewImgMsg = function (a) {
	return {$: 'ViewImgMsg', a: a};
};
var $author$project$Main$ZoomFit = function (a) {
	return {$: 'ZoomFit', a: a};
};
var $author$project$Main$ZoomIn = {$: 'ZoomIn'};
var $author$project$Main$ZoomMsg = function (a) {
	return {$: 'ZoomMsg', a: a};
};
var $author$project$Main$ZoomOut = {$: 'ZoomOut'};
var $mdgriffith$elm_ui$Internal$Model$Bottom = {$: 'Bottom'};
var $mdgriffith$elm_ui$Element$alignBottom = $mdgriffith$elm_ui$Internal$Model$AlignY($mdgriffith$elm_ui$Internal$Model$Bottom);
var $feathericons$elm_feather$FeatherIcons$arrowLeftCircle = A2(
	$feathericons$elm_feather$FeatherIcons$makeBuilder,
	'arrow-left-circle',
	_List_fromArray(
		[
			A2(
			$elm$svg$Svg$circle,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$cx('12'),
					$elm$svg$Svg$Attributes$cy('12'),
					$elm$svg$Svg$Attributes$r('10')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$polyline,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$points('12 8 8 12 12 16')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$line,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$x1('16'),
					$elm$svg$Svg$Attributes$y1('12'),
					$elm$svg$Svg$Attributes$x2('8'),
					$elm$svg$Svg$Attributes$y2('12')
				]),
			_List_Nil)
		]));
var $author$project$Icon$arrowLeftCircle = $author$project$Icon$featherIcon($feathericons$elm_feather$FeatherIcons$arrowLeftCircle);
var $feathericons$elm_feather$FeatherIcons$arrowRightCircle = A2(
	$feathericons$elm_feather$FeatherIcons$makeBuilder,
	'arrow-right-circle',
	_List_fromArray(
		[
			A2(
			$elm$svg$Svg$circle,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$cx('12'),
					$elm$svg$Svg$Attributes$cy('12'),
					$elm$svg$Svg$Attributes$r('10')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$polyline,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$points('12 16 16 12 12 8')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$line,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$x1('8'),
					$elm$svg$Svg$Attributes$y1('12'),
					$elm$svg$Svg$Attributes$x2('16'),
					$elm$svg$Svg$Attributes$y2('12')
				]),
			_List_Nil)
		]));
var $author$project$Icon$arrowRightCircle = $author$project$Icon$featherIcon($feathericons$elm_feather$FeatherIcons$arrowRightCircle);
var $author$project$Icon$defaultAttributes = _List_fromArray(
	[
		$elm$svg$Svg$Attributes$fill('none'),
		$elm$svg$Svg$Attributes$stroke('currentColor'),
		$elm$svg$Svg$Attributes$strokeLinecap('round'),
		$elm$svg$Svg$Attributes$strokeLinejoin('round'),
		$elm$svg$Svg$Attributes$strokeWidth('2'),
		$elm$svg$Svg$Attributes$viewBox('0 0 24 24')
	]);
var $author$project$Icon$toElement = F2(
	function (icon, size) {
		return $mdgriffith$elm_ui$Element$html(
			A2(
				$elm$svg$Svg$svg,
				A2(
					$elm$core$List$cons,
					$elm$svg$Svg$Attributes$width(
						$elm$core$String$fromFloat(size)),
					A2(
						$elm$core$List$cons,
						$elm$svg$Svg$Attributes$height(
							$elm$core$String$fromFloat(size)),
						$author$project$Icon$defaultAttributes)),
				icon));
	});
var $author$project$Icon$boundingBox = $author$project$Icon$toElement(
	_List_fromArray(
		[
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$d('M 23 17 h -6 m -3 0 H 4 V 7 H 20 V 11 m 0 3 v 6')
				]),
			_List_Nil)
		]));
var $joakin$elm_canvas$Canvas$Internal$Canvas$DrawableClear = F3(
	function (a, b, c) {
		return {$: 'DrawableClear', a: a, b: b, c: c};
	});
var $joakin$elm_canvas$Canvas$Internal$Canvas$NotSpecified = {$: 'NotSpecified'};
var $joakin$elm_canvas$Canvas$Renderable = function (a) {
	return {$: 'Renderable', a: a};
};
var $joakin$elm_canvas$Canvas$clear = F3(
	function (point, w, h) {
		return $joakin$elm_canvas$Canvas$Renderable(
			{
				commands: _List_Nil,
				drawOp: $joakin$elm_canvas$Canvas$Internal$Canvas$NotSpecified,
				drawable: A3($joakin$elm_canvas$Canvas$Internal$Canvas$DrawableClear, point, w, h)
			});
	});
var $joakin$elm_canvas$Canvas$Internal$Canvas$Fill = function (a) {
	return {$: 'Fill', a: a};
};
var $joakin$elm_canvas$Canvas$Internal$Canvas$SettingDrawOp = function (a) {
	return {$: 'SettingDrawOp', a: a};
};
var $joakin$elm_canvas$Canvas$Settings$fill = function (color) {
	return $joakin$elm_canvas$Canvas$Internal$Canvas$SettingDrawOp(
		$joakin$elm_canvas$Canvas$Internal$Canvas$Fill(color));
};
var $joakin$elm_canvas$Canvas$Internal$Canvas$SettingCommand = function (a) {
	return {$: 'SettingCommand', a: a};
};
var $joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$field = F2(
	function (name, value) {
		return $elm$json$Json$Encode$object(
			_List_fromArray(
				[
					_Utils_Tuple2(
					'type',
					$elm$json$Json$Encode$string('field')),
					_Utils_Tuple2(
					'name',
					$elm$json$Json$Encode$string(name)),
					_Utils_Tuple2('value', value)
				]));
	});
var $joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$globalImageSmoothingEnabled = function (enabled) {
	return A2(
		$joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$field,
		'imageSmoothingEnabled',
		$elm$json$Json$Encode$bool(enabled));
};
var $joakin$elm_canvas$Canvas$Settings$Advanced$imageSmoothing = function (enabled) {
	return $joakin$elm_canvas$Canvas$Internal$Canvas$SettingCommand(
		$joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$globalImageSmoothingEnabled(enabled));
};
var $joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$lineWidth = function (value) {
	return A2(
		$joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$field,
		'lineWidth',
		$elm$json$Json$Encode$float(value));
};
var $joakin$elm_canvas$Canvas$Settings$Line$lineWidth = function (width) {
	return $joakin$elm_canvas$Canvas$Internal$Canvas$SettingCommand(
		$joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$lineWidth(width));
};
var $feathericons$elm_feather$FeatherIcons$maximize = A2(
	$feathericons$elm_feather$FeatherIcons$makeBuilder,
	'maximize',
	_List_fromArray(
		[
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$d('M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3')
				]),
			_List_Nil)
		]));
var $author$project$Icon$maximize = $author$project$Icon$featherIcon($feathericons$elm_feather$FeatherIcons$maximize);
var $feathericons$elm_feather$FeatherIcons$move = A2(
	$feathericons$elm_feather$FeatherIcons$makeBuilder,
	'move',
	_List_fromArray(
		[
			A2(
			$elm$svg$Svg$polyline,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$points('5 9 2 12 5 15')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$polyline,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$points('9 5 12 2 15 5')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$polyline,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$points('15 19 12 22 9 19')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$polyline,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$points('19 9 22 12 19 15')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$line,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$x1('2'),
					$elm$svg$Svg$Attributes$y1('12'),
					$elm$svg$Svg$Attributes$x2('22'),
					$elm$svg$Svg$Attributes$y2('12')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$line,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$x1('12'),
					$elm$svg$Svg$Attributes$y1('2'),
					$elm$svg$Svg$Attributes$x2('12'),
					$elm$svg$Svg$Attributes$y2('22')
				]),
			_List_Nil)
		]));
var $author$project$Icon$move = $author$project$Icon$featherIcon($feathericons$elm_feather$FeatherIcons$move);
var $author$project$Main$msgOn = function (event) {
	return A2(
		$elm$core$Basics$composeR,
		$elm$json$Json$Decode$map(
			function (msg) {
				return {message: msg, preventDefault: true, stopPropagation: true};
			}),
		$elm$html$Html$Events$custom(event));
};
var $mpizenberg$elm_pointer_events$Html$Events$Extra$Pointer$defaultOptions = {preventDefault: true, stopPropagation: false};
var $mpizenberg$elm_pointer_events$Html$Events$Extra$Pointer$onWithOptions = F3(
	function (event, options, tag) {
		return A2(
			$elm$html$Html$Events$custom,
			event,
			A2(
				$elm$json$Json$Decode$map,
				function (ev) {
					return {
						message: tag(ev),
						preventDefault: options.preventDefault,
						stopPropagation: options.stopPropagation
					};
				},
				$mpizenberg$elm_pointer_events$Html$Events$Extra$Pointer$eventDecoder));
	});
var $mpizenberg$elm_pointer_events$Html$Events$Extra$Pointer$onUp = A2($mpizenberg$elm_pointer_events$Html$Events$Extra$Pointer$onWithOptions, 'pointerup', $mpizenberg$elm_pointer_events$Html$Events$Extra$Pointer$defaultOptions);
var $mpizenberg$elm_pointer_events$Html$Events$Extra$Wheel$defaultOptions = {preventDefault: true, stopPropagation: false};
var $mpizenberg$elm_pointer_events$Html$Events$Extra$Wheel$Event = F3(
	function (mouseEvent, deltaY, deltaMode) {
		return {deltaMode: deltaMode, deltaY: deltaY, mouseEvent: mouseEvent};
	});
var $mpizenberg$elm_pointer_events$Html$Events$Extra$Wheel$DeltaLine = {$: 'DeltaLine'};
var $mpizenberg$elm_pointer_events$Html$Events$Extra$Wheel$DeltaPage = {$: 'DeltaPage'};
var $mpizenberg$elm_pointer_events$Html$Events$Extra$Wheel$DeltaPixel = {$: 'DeltaPixel'};
var $mpizenberg$elm_pointer_events$Html$Events$Extra$Wheel$deltaModeDecoder = function () {
	var intToMode = function (_int) {
		switch (_int) {
			case 1:
				return $mpizenberg$elm_pointer_events$Html$Events$Extra$Wheel$DeltaLine;
			case 2:
				return $mpizenberg$elm_pointer_events$Html$Events$Extra$Wheel$DeltaPage;
			default:
				return $mpizenberg$elm_pointer_events$Html$Events$Extra$Wheel$DeltaPixel;
		}
	};
	return A2($elm$json$Json$Decode$map, intToMode, $elm$json$Json$Decode$int);
}();
var $mpizenberg$elm_pointer_events$Html$Events$Extra$Wheel$eventDecoder = A4(
	$elm$json$Json$Decode$map3,
	$mpizenberg$elm_pointer_events$Html$Events$Extra$Wheel$Event,
	$mpizenberg$elm_pointer_events$Html$Events$Extra$Mouse$eventDecoder,
	A2($elm$json$Json$Decode$field, 'deltaY', $elm$json$Json$Decode$float),
	A2($elm$json$Json$Decode$field, 'deltaMode', $mpizenberg$elm_pointer_events$Html$Events$Extra$Wheel$deltaModeDecoder));
var $mpizenberg$elm_pointer_events$Html$Events$Extra$Wheel$onWithOptions = F2(
	function (options, tag) {
		return A2(
			$elm$html$Html$Events$custom,
			'wheel',
			A2(
				$elm$json$Json$Decode$map,
				function (ev) {
					return {
						message: tag(ev),
						preventDefault: options.preventDefault,
						stopPropagation: options.stopPropagation
					};
				},
				$mpizenberg$elm_pointer_events$Html$Events$Extra$Wheel$eventDecoder));
	});
var $mpizenberg$elm_pointer_events$Html$Events$Extra$Wheel$onWheel = $mpizenberg$elm_pointer_events$Html$Events$Extra$Wheel$onWithOptions($mpizenberg$elm_pointer_events$Html$Events$Extra$Wheel$defaultOptions);
var $elm$core$Tuple$pair = F2(
	function (a, b) {
		return _Utils_Tuple2(a, b);
	});
var $joakin$elm_canvas$Canvas$Internal$Canvas$Rect = F3(
	function (a, b, c) {
		return {$: 'Rect', a: a, b: b, c: c};
	});
var $joakin$elm_canvas$Canvas$rect = F3(
	function (pos, width, height) {
		return A3($joakin$elm_canvas$Canvas$Internal$Canvas$Rect, pos, width, height);
	});
var $avh4$elm_color$Color$RgbaSpace = F4(
	function (a, b, c, d) {
		return {$: 'RgbaSpace', a: a, b: b, c: c, d: d};
	});
var $avh4$elm_color$Color$red = A4($avh4$elm_color$Color$RgbaSpace, 204 / 255, 0 / 255, 0 / 255, 1.0);
var $avh4$elm_color$Color$rgba = F4(
	function (r, g, b, a) {
		return A4($avh4$elm_color$Color$RgbaSpace, r, g, b, a);
	});
var $joakin$elm_canvas$Canvas$Internal$Canvas$DrawableShapes = function (a) {
	return {$: 'DrawableShapes', a: a};
};
var $joakin$elm_canvas$Canvas$Internal$Canvas$FillAndStroke = F2(
	function (a, b) {
		return {$: 'FillAndStroke', a: a, b: b};
	});
var $joakin$elm_canvas$Canvas$Internal$Canvas$Stroke = function (a) {
	return {$: 'Stroke', a: a};
};
var $joakin$elm_canvas$Canvas$mergeDrawOp = F2(
	function (op1, op2) {
		var _v0 = _Utils_Tuple2(op1, op2);
		_v0$7:
		while (true) {
			switch (_v0.b.$) {
				case 'FillAndStroke':
					var _v1 = _v0.b;
					var c = _v1.a;
					var sc = _v1.b;
					return A2($joakin$elm_canvas$Canvas$Internal$Canvas$FillAndStroke, c, sc);
				case 'Fill':
					switch (_v0.a.$) {
						case 'Fill':
							var c = _v0.b.a;
							return $joakin$elm_canvas$Canvas$Internal$Canvas$Fill(c);
						case 'Stroke':
							var c1 = _v0.a.a;
							var c2 = _v0.b.a;
							return A2($joakin$elm_canvas$Canvas$Internal$Canvas$FillAndStroke, c2, c1);
						case 'FillAndStroke':
							var _v2 = _v0.a;
							var c = _v2.a;
							var sc = _v2.b;
							var c2 = _v0.b.a;
							return A2($joakin$elm_canvas$Canvas$Internal$Canvas$FillAndStroke, c2, sc);
						default:
							break _v0$7;
					}
				case 'Stroke':
					switch (_v0.a.$) {
						case 'Stroke':
							var c = _v0.b.a;
							return $joakin$elm_canvas$Canvas$Internal$Canvas$Stroke(c);
						case 'Fill':
							var c1 = _v0.a.a;
							var c2 = _v0.b.a;
							return A2($joakin$elm_canvas$Canvas$Internal$Canvas$FillAndStroke, c1, c2);
						case 'FillAndStroke':
							var _v3 = _v0.a;
							var c = _v3.a;
							var sc = _v3.b;
							var sc2 = _v0.b.a;
							return A2($joakin$elm_canvas$Canvas$Internal$Canvas$FillAndStroke, c, sc2);
						default:
							break _v0$7;
					}
				default:
					if (_v0.a.$ === 'NotSpecified') {
						break _v0$7;
					} else {
						var whatever = _v0.a;
						var _v5 = _v0.b;
						return whatever;
					}
			}
		}
		var _v4 = _v0.a;
		var whatever = _v0.b;
		return whatever;
	});
var $joakin$elm_canvas$Canvas$addSettingsToRenderable = F2(
	function (settings, renderable) {
		var addSetting = F2(
			function (setting, _v1) {
				var r = _v1.a;
				return $joakin$elm_canvas$Canvas$Renderable(
					function () {
						switch (setting.$) {
							case 'SettingCommand':
								var cmd = setting.a;
								return _Utils_update(
									r,
									{
										commands: A2($elm$core$List$cons, cmd, r.commands)
									});
							case 'SettingCommands':
								var cmds = setting.a;
								return _Utils_update(
									r,
									{
										commands: A3($elm$core$List$foldl, $elm$core$List$cons, r.commands, cmds)
									});
							case 'SettingUpdateDrawable':
								var f = setting.a;
								return _Utils_update(
									r,
									{
										drawable: f(r.drawable)
									});
							default:
								var op = setting.a;
								return _Utils_update(
									r,
									{
										drawOp: A2($joakin$elm_canvas$Canvas$mergeDrawOp, r.drawOp, op)
									});
						}
					}());
			});
		return A3($elm$core$List$foldl, addSetting, renderable, settings);
	});
var $joakin$elm_canvas$Canvas$shapes = F2(
	function (settings, ss) {
		return A2(
			$joakin$elm_canvas$Canvas$addSettingsToRenderable,
			settings,
			$joakin$elm_canvas$Canvas$Renderable(
				{
					commands: _List_Nil,
					drawOp: $joakin$elm_canvas$Canvas$Internal$Canvas$NotSpecified,
					drawable: $joakin$elm_canvas$Canvas$Internal$Canvas$DrawableShapes(ss)
				}));
	});
var $joakin$elm_canvas$Canvas$Settings$stroke = function (color) {
	return $joakin$elm_canvas$Canvas$Internal$Canvas$SettingDrawOp(
		$joakin$elm_canvas$Canvas$Internal$Canvas$Stroke(color));
};
var $joakin$elm_canvas$Canvas$Internal$Canvas$DrawableTexture = F2(
	function (a, b) {
		return {$: 'DrawableTexture', a: a, b: b};
	});
var $joakin$elm_canvas$Canvas$texture = F3(
	function (settings, p, t) {
		return A2(
			$joakin$elm_canvas$Canvas$addSettingsToRenderable,
			settings,
			$joakin$elm_canvas$Canvas$Renderable(
				{
					commands: _List_Nil,
					drawOp: $joakin$elm_canvas$Canvas$Internal$Canvas$NotSpecified,
					drawable: A2($joakin$elm_canvas$Canvas$Internal$Canvas$DrawableTexture, p, t)
				}));
	});
var $elm$html$Html$canvas = _VirtualDom_node('canvas');
var $joakin$elm_canvas$Canvas$cnvs = A2($elm$html$Html$canvas, _List_Nil, _List_Nil);
var $elm$html$Html$Attributes$property = $elm$virtual_dom$VirtualDom$property;
var $joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$commands = function (list) {
	return A2(
		$elm$html$Html$Attributes$property,
		'cmds',
		A2($elm$json$Json$Encode$list, $elm$core$Basics$identity, list));
};
var $elm$html$Html$Attributes$height = function (n) {
	return A2(
		_VirtualDom_attribute,
		'height',
		$elm$core$String$fromInt(n));
};
var $joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$empty = _List_Nil;
var $joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$fn = F2(
	function (name, args) {
		return $elm$json$Json$Encode$object(
			_List_fromArray(
				[
					_Utils_Tuple2(
					'type',
					$elm$json$Json$Encode$string('function')),
					_Utils_Tuple2(
					'name',
					$elm$json$Json$Encode$string(name)),
					_Utils_Tuple2(
					'args',
					A2($elm$json$Json$Encode$list, $elm$core$Basics$identity, args))
				]));
	});
var $joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$beginPath = A2($joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$fn, 'beginPath', _List_Nil);
var $joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$clearRect = F4(
	function (x, y, width, height) {
		return A2(
			$joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$fn,
			'clearRect',
			_List_fromArray(
				[
					$elm$json$Json$Encode$float(x),
					$elm$json$Json$Encode$float(y),
					$elm$json$Json$Encode$float(width),
					$elm$json$Json$Encode$float(height)
				]));
	});
var $joakin$elm_canvas$Canvas$renderClear = F4(
	function (_v0, w, h, cmds) {
		var x = _v0.a;
		var y = _v0.b;
		return A2(
			$elm$core$List$cons,
			A4($joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$clearRect, x, y, w, h),
			cmds);
	});
var $joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$arc = F6(
	function (x, y, radius, startAngle, endAngle, anticlockwise) {
		return A2(
			$joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$fn,
			'arc',
			_List_fromArray(
				[
					$elm$json$Json$Encode$float(x),
					$elm$json$Json$Encode$float(y),
					$elm$json$Json$Encode$float(radius),
					$elm$json$Json$Encode$float(startAngle),
					$elm$json$Json$Encode$float(endAngle),
					$elm$json$Json$Encode$bool(anticlockwise)
				]));
	});
var $elm$core$Basics$pi = _Basics_pi;
var $joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$circle = F3(
	function (x, y, r) {
		return A6($joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$arc, x, y, r, 0, 2 * $elm$core$Basics$pi, false);
	});
var $elm$core$Basics$cos = _Basics_cos;
var $joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$moveTo = F2(
	function (x, y) {
		return A2(
			$joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$fn,
			'moveTo',
			_List_fromArray(
				[
					$elm$json$Json$Encode$float(x),
					$elm$json$Json$Encode$float(y)
				]));
	});
var $joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$rect = F4(
	function (x, y, w, h) {
		return A2(
			$joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$fn,
			'rect',
			_List_fromArray(
				[
					$elm$json$Json$Encode$float(x),
					$elm$json$Json$Encode$float(y),
					$elm$json$Json$Encode$float(w),
					$elm$json$Json$Encode$float(h)
				]));
	});
var $joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$arcTo = F5(
	function (x1, y1, x2, y2, radius) {
		return A2(
			$joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$fn,
			'arcTo',
			_List_fromArray(
				[
					$elm$json$Json$Encode$float(x1),
					$elm$json$Json$Encode$float(y1),
					$elm$json$Json$Encode$float(x2),
					$elm$json$Json$Encode$float(y2),
					$elm$json$Json$Encode$float(radius)
				]));
	});
var $joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$bezierCurveTo = F6(
	function (cp1x, cp1y, cp2x, cp2y, x, y) {
		return A2(
			$joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$fn,
			'bezierCurveTo',
			_List_fromArray(
				[
					$elm$json$Json$Encode$float(cp1x),
					$elm$json$Json$Encode$float(cp1y),
					$elm$json$Json$Encode$float(cp2x),
					$elm$json$Json$Encode$float(cp2y),
					$elm$json$Json$Encode$float(x),
					$elm$json$Json$Encode$float(y)
				]));
	});
var $joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$lineTo = F2(
	function (x, y) {
		return A2(
			$joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$fn,
			'lineTo',
			_List_fromArray(
				[
					$elm$json$Json$Encode$float(x),
					$elm$json$Json$Encode$float(y)
				]));
	});
var $joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$quadraticCurveTo = F4(
	function (cpx, cpy, x, y) {
		return A2(
			$joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$fn,
			'quadraticCurveTo',
			_List_fromArray(
				[
					$elm$json$Json$Encode$float(cpx),
					$elm$json$Json$Encode$float(cpy),
					$elm$json$Json$Encode$float(x),
					$elm$json$Json$Encode$float(y)
				]));
	});
var $joakin$elm_canvas$Canvas$renderLineSegment = F2(
	function (segment, cmds) {
		switch (segment.$) {
			case 'ArcTo':
				var _v1 = segment.a;
				var x = _v1.a;
				var y = _v1.b;
				var _v2 = segment.b;
				var x2 = _v2.a;
				var y2 = _v2.b;
				var radius = segment.c;
				return A2(
					$elm$core$List$cons,
					A5($joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$arcTo, x, y, x2, y2, radius),
					cmds);
			case 'BezierCurveTo':
				var _v3 = segment.a;
				var cp1x = _v3.a;
				var cp1y = _v3.b;
				var _v4 = segment.b;
				var cp2x = _v4.a;
				var cp2y = _v4.b;
				var _v5 = segment.c;
				var x = _v5.a;
				var y = _v5.b;
				return A2(
					$elm$core$List$cons,
					A6($joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$bezierCurveTo, cp1x, cp1y, cp2x, cp2y, x, y),
					cmds);
			case 'LineTo':
				var _v6 = segment.a;
				var x = _v6.a;
				var y = _v6.b;
				return A2(
					$elm$core$List$cons,
					A2($joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$lineTo, x, y),
					cmds);
			case 'MoveTo':
				var _v7 = segment.a;
				var x = _v7.a;
				var y = _v7.b;
				return A2(
					$elm$core$List$cons,
					A2($joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$moveTo, x, y),
					cmds);
			default:
				var _v8 = segment.a;
				var cpx = _v8.a;
				var cpy = _v8.b;
				var _v9 = segment.b;
				var x = _v9.a;
				var y = _v9.b;
				return A2(
					$elm$core$List$cons,
					A4($joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$quadraticCurveTo, cpx, cpy, x, y),
					cmds);
		}
	});
var $elm$core$Basics$sin = _Basics_sin;
var $joakin$elm_canvas$Canvas$renderShape = F2(
	function (shape, cmds) {
		switch (shape.$) {
			case 'Rect':
				var _v1 = shape.a;
				var x = _v1.a;
				var y = _v1.b;
				var w = shape.b;
				var h = shape.c;
				return A2(
					$elm$core$List$cons,
					A4($joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$rect, x, y, w, h),
					A2(
						$elm$core$List$cons,
						A2($joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$moveTo, x, y),
						cmds));
			case 'Circle':
				var _v2 = shape.a;
				var x = _v2.a;
				var y = _v2.b;
				var r = shape.b;
				return A2(
					$elm$core$List$cons,
					A3($joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$circle, x, y, r),
					A2(
						$elm$core$List$cons,
						A2($joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$moveTo, x + r, y),
						cmds));
			case 'Path':
				var _v3 = shape.a;
				var x = _v3.a;
				var y = _v3.b;
				var segments = shape.b;
				return A3(
					$elm$core$List$foldl,
					$joakin$elm_canvas$Canvas$renderLineSegment,
					A2(
						$elm$core$List$cons,
						A2($joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$moveTo, x, y),
						cmds),
					segments);
			default:
				var _v4 = shape.a;
				var x = _v4.a;
				var y = _v4.b;
				var radius = shape.b;
				var startAngle = shape.c;
				var endAngle = shape.d;
				var anticlockwise = shape.e;
				return A2(
					$elm$core$List$cons,
					A2(
						$joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$moveTo,
						x + (radius * $elm$core$Basics$cos(endAngle)),
						y + (radius * $elm$core$Basics$sin(endAngle))),
					A2(
						$elm$core$List$cons,
						A6($joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$arc, x, y, radius, startAngle, endAngle, anticlockwise),
						A2(
							$elm$core$List$cons,
							A2(
								$joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$moveTo,
								x + (radius * $elm$core$Basics$cos(startAngle)),
								y + (radius * $elm$core$Basics$sin(startAngle))),
							cmds)));
		}
	});
var $avh4$elm_color$Color$black = A4($avh4$elm_color$Color$RgbaSpace, 0 / 255, 0 / 255, 0 / 255, 1.0);
var $joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$NonZero = {$: 'NonZero'};
var $joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$fillRuleToString = function (fillRule) {
	if (fillRule.$ === 'NonZero') {
		return 'nonzero';
	} else {
		return 'evenodd';
	}
};
var $joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$fill = function (fillRule) {
	return A2(
		$joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$fn,
		'fill',
		_List_fromArray(
			[
				$elm$json$Json$Encode$string(
				$joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$fillRuleToString(fillRule))
			]));
};
var $avh4$elm_color$Color$toCssString = function (_v0) {
	var r = _v0.a;
	var g = _v0.b;
	var b = _v0.c;
	var a = _v0.d;
	var roundTo = function (x) {
		return $elm$core$Basics$round(x * 1000) / 1000;
	};
	var pct = function (x) {
		return $elm$core$Basics$round(x * 10000) / 100;
	};
	return $elm$core$String$concat(
		_List_fromArray(
			[
				'rgba(',
				$elm$core$String$fromFloat(
				pct(r)),
				'%,',
				$elm$core$String$fromFloat(
				pct(g)),
				'%,',
				$elm$core$String$fromFloat(
				pct(b)),
				'%,',
				$elm$core$String$fromFloat(
				roundTo(a)),
				')'
			]));
};
var $joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$fillStyle = function (color) {
	return A2(
		$joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$field,
		'fillStyle',
		$elm$json$Json$Encode$string(
			$avh4$elm_color$Color$toCssString(color)));
};
var $joakin$elm_canvas$Canvas$renderShapeFill = F2(
	function (c, cmds) {
		return A2(
			$elm$core$List$cons,
			$joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$fill($joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$NonZero),
			A2(
				$elm$core$List$cons,
				$joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$fillStyle(c),
				cmds));
	});
var $joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$stroke = A2($joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$fn, 'stroke', _List_Nil);
var $joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$strokeStyle = function (color) {
	return A2(
		$joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$field,
		'strokeStyle',
		$elm$json$Json$Encode$string(
			$avh4$elm_color$Color$toCssString(color)));
};
var $joakin$elm_canvas$Canvas$renderShapeStroke = F2(
	function (c, cmds) {
		return A2(
			$elm$core$List$cons,
			$joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$stroke,
			A2(
				$elm$core$List$cons,
				$joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$strokeStyle(c),
				cmds));
	});
var $joakin$elm_canvas$Canvas$renderShapeDrawOp = F2(
	function (drawOp, cmds) {
		switch (drawOp.$) {
			case 'NotSpecified':
				return A2($joakin$elm_canvas$Canvas$renderShapeFill, $avh4$elm_color$Color$black, cmds);
			case 'Fill':
				var c = drawOp.a;
				return A2($joakin$elm_canvas$Canvas$renderShapeFill, c, cmds);
			case 'Stroke':
				var c = drawOp.a;
				return A2($joakin$elm_canvas$Canvas$renderShapeStroke, c, cmds);
			default:
				var fc = drawOp.a;
				var sc = drawOp.b;
				return A2(
					$joakin$elm_canvas$Canvas$renderShapeStroke,
					sc,
					A2($joakin$elm_canvas$Canvas$renderShapeFill, fc, cmds));
		}
	});
var $joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$fillText = F4(
	function (text, x, y, maybeMaxWidth) {
		if (maybeMaxWidth.$ === 'Nothing') {
			return A2(
				$joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$fn,
				'fillText',
				_List_fromArray(
					[
						$elm$json$Json$Encode$string(text),
						$elm$json$Json$Encode$float(x),
						$elm$json$Json$Encode$float(y)
					]));
		} else {
			var maxWidth = maybeMaxWidth.a;
			return A2(
				$joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$fn,
				'fillText',
				_List_fromArray(
					[
						$elm$json$Json$Encode$string(text),
						$elm$json$Json$Encode$float(x),
						$elm$json$Json$Encode$float(y),
						$elm$json$Json$Encode$float(maxWidth)
					]));
		}
	});
var $joakin$elm_canvas$Canvas$renderTextFill = F5(
	function (txt, x, y, color, cmds) {
		return A2(
			$elm$core$List$cons,
			A4($joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$fillText, txt.text, x, y, txt.maxWidth),
			A2(
				$elm$core$List$cons,
				$joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$fillStyle(color),
				cmds));
	});
var $joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$strokeText = F4(
	function (text, x, y, maybeMaxWidth) {
		if (maybeMaxWidth.$ === 'Nothing') {
			return A2(
				$joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$fn,
				'strokeText',
				_List_fromArray(
					[
						$elm$json$Json$Encode$string(text),
						$elm$json$Json$Encode$float(x),
						$elm$json$Json$Encode$float(y)
					]));
		} else {
			var maxWidth = maybeMaxWidth.a;
			return A2(
				$joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$fn,
				'strokeText',
				_List_fromArray(
					[
						$elm$json$Json$Encode$string(text),
						$elm$json$Json$Encode$float(x),
						$elm$json$Json$Encode$float(y),
						$elm$json$Json$Encode$float(maxWidth)
					]));
		}
	});
var $joakin$elm_canvas$Canvas$renderTextStroke = F5(
	function (txt, x, y, color, cmds) {
		return A2(
			$elm$core$List$cons,
			A4($joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$strokeText, txt.text, x, y, txt.maxWidth),
			A2(
				$elm$core$List$cons,
				$joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$strokeStyle(color),
				cmds));
	});
var $joakin$elm_canvas$Canvas$renderTextDrawOp = F3(
	function (drawOp, txt, cmds) {
		var _v0 = txt.point;
		var x = _v0.a;
		var y = _v0.b;
		switch (drawOp.$) {
			case 'NotSpecified':
				return A5($joakin$elm_canvas$Canvas$renderTextFill, txt, x, y, $avh4$elm_color$Color$black, cmds);
			case 'Fill':
				var c = drawOp.a;
				return A5($joakin$elm_canvas$Canvas$renderTextFill, txt, x, y, c, cmds);
			case 'Stroke':
				var c = drawOp.a;
				return A5($joakin$elm_canvas$Canvas$renderTextStroke, txt, x, y, c, cmds);
			default:
				var fc = drawOp.a;
				var sc = drawOp.b;
				return A5(
					$joakin$elm_canvas$Canvas$renderTextStroke,
					txt,
					x,
					y,
					sc,
					A5($joakin$elm_canvas$Canvas$renderTextFill, txt, x, y, fc, cmds));
		}
	});
var $joakin$elm_canvas$Canvas$renderText = F3(
	function (drawOp, txt, cmds) {
		return A3($joakin$elm_canvas$Canvas$renderTextDrawOp, drawOp, txt, cmds);
	});
var $joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$drawImage = F9(
	function (sx, sy, sw, sh, dx, dy, dw, dh, imageObj) {
		return A2(
			$joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$fn,
			'drawImage',
			_List_fromArray(
				[
					imageObj,
					$elm$json$Json$Encode$float(sx),
					$elm$json$Json$Encode$float(sy),
					$elm$json$Json$Encode$float(sw),
					$elm$json$Json$Encode$float(sh),
					$elm$json$Json$Encode$float(dx),
					$elm$json$Json$Encode$float(dy),
					$elm$json$Json$Encode$float(dw),
					$elm$json$Json$Encode$float(dh)
				]));
	});
var $joakin$elm_canvas$Canvas$Internal$Texture$drawTexture = F4(
	function (x, y, t, cmds) {
		return A2(
			$elm$core$List$cons,
			function () {
				if (t.$ === 'TImage') {
					var image = t.a;
					return A9($joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$drawImage, 0, 0, image.width, image.height, x, y, image.width, image.height, image.json);
				} else {
					var sprite = t.a;
					var image = t.b;
					return A9($joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$drawImage, sprite.x, sprite.y, sprite.width, sprite.height, x, y, sprite.width, sprite.height, image.json);
				}
			}(),
			cmds);
	});
var $joakin$elm_canvas$Canvas$renderTexture = F3(
	function (_v0, t, cmds) {
		var x = _v0.a;
		var y = _v0.b;
		return A4($joakin$elm_canvas$Canvas$Internal$Texture$drawTexture, x, y, t, cmds);
	});
var $joakin$elm_canvas$Canvas$renderDrawable = F3(
	function (drawable, drawOp, cmds) {
		switch (drawable.$) {
			case 'DrawableText':
				var txt = drawable.a;
				return A3($joakin$elm_canvas$Canvas$renderText, drawOp, txt, cmds);
			case 'DrawableShapes':
				var ss = drawable.a;
				return A2(
					$joakin$elm_canvas$Canvas$renderShapeDrawOp,
					drawOp,
					A3(
						$elm$core$List$foldl,
						$joakin$elm_canvas$Canvas$renderShape,
						A2($elm$core$List$cons, $joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$beginPath, cmds),
						ss));
			case 'DrawableTexture':
				var p = drawable.a;
				var t = drawable.b;
				return A3($joakin$elm_canvas$Canvas$renderTexture, p, t, cmds);
			default:
				var p = drawable.a;
				var w = drawable.b;
				var h = drawable.c;
				return A4($joakin$elm_canvas$Canvas$renderClear, p, w, h, cmds);
		}
	});
var $joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$restore = A2($joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$fn, 'restore', _List_Nil);
var $joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$save = A2($joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$fn, 'save', _List_Nil);
var $joakin$elm_canvas$Canvas$renderOne = F2(
	function (_v0, cmds) {
		var data = _v0.a;
		var commands = data.commands;
		var drawable = data.drawable;
		var drawOp = data.drawOp;
		return A2(
			$elm$core$List$cons,
			$joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$restore,
			A3(
				$joakin$elm_canvas$Canvas$renderDrawable,
				drawable,
				drawOp,
				_Utils_ap(
					commands,
					A2($elm$core$List$cons, $joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$save, cmds))));
	});
var $joakin$elm_canvas$Canvas$render = function (entities) {
	return A3($elm$core$List$foldl, $joakin$elm_canvas$Canvas$renderOne, $joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$empty, entities);
};
var $joakin$elm_canvas$Canvas$Internal$Texture$decodeImageLoadEvent = A2($elm$json$Json$Decode$field, 'target', $joakin$elm_canvas$Canvas$Internal$Texture$decodeTextureImage);
var $elm$html$Html$img = _VirtualDom_node('img');
var $elm$html$Html$Attributes$src = function (url) {
	return A2(
		$elm$html$Html$Attributes$stringProperty,
		'src',
		_VirtualDom_noJavaScriptOrHtmlUri(url));
};
var $joakin$elm_canvas$Canvas$renderTextureSource = function (textureSource) {
	var url = textureSource.a;
	var onLoad = textureSource.b;
	return _Utils_Tuple2(
		url,
		A2(
			$elm$html$Html$img,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$src(url),
					A2($elm$html$Html$Attributes$attribute, 'crossorigin', 'anonymous'),
					A2($elm$html$Html$Attributes$style, 'display', 'none'),
					A2(
					$elm$html$Html$Events$on,
					'load',
					A2($elm$json$Json$Decode$map, onLoad, $joakin$elm_canvas$Canvas$Internal$Texture$decodeImageLoadEvent)),
					A2(
					$elm$html$Html$Events$on,
					'error',
					$elm$json$Json$Decode$succeed(
						onLoad($elm$core$Maybe$Nothing)))
				]),
			_List_Nil));
};
var $elm$html$Html$Attributes$width = function (n) {
	return A2(
		_VirtualDom_attribute,
		'width',
		$elm$core$String$fromInt(n));
};
var $joakin$elm_canvas$Canvas$toHtmlWith = F3(
	function (options, attrs, entities) {
		return A3(
			$elm$html$Html$Keyed$node,
			'elm-canvas',
			A2(
				$elm$core$List$cons,
				$joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$commands(
					$joakin$elm_canvas$Canvas$render(entities)),
				A2(
					$elm$core$List$cons,
					$elm$html$Html$Attributes$height(options.height),
					A2(
						$elm$core$List$cons,
						$elm$html$Html$Attributes$width(options.width),
						attrs))),
			A2(
				$elm$core$List$cons,
				_Utils_Tuple2('__canvas', $joakin$elm_canvas$Canvas$cnvs),
				A2($elm$core$List$map, $joakin$elm_canvas$Canvas$renderTextureSource, options.textures)));
	});
var $joakin$elm_canvas$Canvas$toHtml = F3(
	function (_v0, attrs, entities) {
		var w = _v0.a;
		var h = _v0.b;
		return A3(
			$joakin$elm_canvas$Canvas$toHtmlWith,
			{height: h, textures: _List_Nil, width: w},
			attrs,
			entities);
	});
var $joakin$elm_canvas$Canvas$Settings$Advanced$Scale = F2(
	function (a, b) {
		return {$: 'Scale', a: a, b: b};
	});
var $joakin$elm_canvas$Canvas$Settings$Advanced$scale = $joakin$elm_canvas$Canvas$Settings$Advanced$Scale;
var $joakin$elm_canvas$Canvas$Internal$Canvas$SettingCommands = function (a) {
	return {$: 'SettingCommands', a: a};
};
var $joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$rotate = function (angle) {
	return A2(
		$joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$fn,
		'rotate',
		_List_fromArray(
			[
				$elm$json$Json$Encode$float(angle)
			]));
};
var $joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$scale = F2(
	function (x, y) {
		return A2(
			$joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$fn,
			'scale',
			_List_fromArray(
				[
					$elm$json$Json$Encode$float(x),
					$elm$json$Json$Encode$float(y)
				]));
	});
var $joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$transform = F6(
	function (a, b, c, d, e, f) {
		return A2(
			$joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$fn,
			'transform',
			_List_fromArray(
				[
					$elm$json$Json$Encode$float(a),
					$elm$json$Json$Encode$float(b),
					$elm$json$Json$Encode$float(c),
					$elm$json$Json$Encode$float(d),
					$elm$json$Json$Encode$float(e),
					$elm$json$Json$Encode$float(f)
				]));
	});
var $joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$translate = F2(
	function (x, y) {
		return A2(
			$joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$fn,
			'translate',
			_List_fromArray(
				[
					$elm$json$Json$Encode$float(x),
					$elm$json$Json$Encode$float(y)
				]));
	});
var $joakin$elm_canvas$Canvas$Settings$Advanced$transform = function (transforms) {
	return $joakin$elm_canvas$Canvas$Internal$Canvas$SettingCommands(
		A2(
			$elm$core$List$map,
			function (t) {
				switch (t.$) {
					case 'Rotate':
						var angle = t.a;
						return $joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$rotate(angle);
					case 'Scale':
						var x = t.a;
						var y = t.b;
						return A2($joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$scale, x, y);
					case 'Translate':
						var x = t.a;
						var y = t.b;
						return A2($joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$translate, x, y);
					default:
						var m11 = t.a.m11;
						var m12 = t.a.m12;
						var m21 = t.a.m21;
						var m22 = t.a.m22;
						var dx = t.a.dx;
						var dy = t.a.dy;
						return A6($joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$transform, m11, m12, m21, m22, dx, dy);
				}
			},
			transforms));
};
var $joakin$elm_canvas$Canvas$Settings$Advanced$Translate = F2(
	function (a, b) {
		return {$: 'Translate', a: a, b: b};
	});
var $joakin$elm_canvas$Canvas$Settings$Advanced$translate = $joakin$elm_canvas$Canvas$Settings$Advanced$Translate;
var $mpizenberg$elm_2d_viewer$Viewer$Canvas$transform = function (viewer) {
	var scale = 1.0 / viewer.scale;
	var _v0 = viewer.origin;
	var ox = _v0.a;
	var oy = _v0.b;
	return $joakin$elm_canvas$Canvas$Settings$Advanced$transform(
		_List_fromArray(
			[
				A2($joakin$elm_canvas$Canvas$Settings$Advanced$scale, scale, scale),
				A2($joakin$elm_canvas$Canvas$Settings$Advanced$translate, -ox, -oy)
			]));
};
var $author$project$Icon$zoomFit = $author$project$Icon$toElement(
	_List_fromArray(
		[
			A2(
			$elm$svg$Svg$circle,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$cx('11'),
					$elm$svg$Svg$Attributes$cy('11'),
					$elm$svg$Svg$Attributes$r('8')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$line,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$x1('21'),
					$elm$svg$Svg$Attributes$y1('21'),
					$elm$svg$Svg$Attributes$x2('16.65'),
					$elm$svg$Svg$Attributes$y2('16.65')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$d('M 6 8 v 6 h 10 v -6 h -10')
				]),
			_List_Nil)
		]));
var $feathericons$elm_feather$FeatherIcons$zoomIn = A2(
	$feathericons$elm_feather$FeatherIcons$makeBuilder,
	'zoom-in',
	_List_fromArray(
		[
			A2(
			$elm$svg$Svg$circle,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$cx('11'),
					$elm$svg$Svg$Attributes$cy('11'),
					$elm$svg$Svg$Attributes$r('8')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$line,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$x1('21'),
					$elm$svg$Svg$Attributes$y1('21'),
					$elm$svg$Svg$Attributes$x2('16.65'),
					$elm$svg$Svg$Attributes$y2('16.65')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$line,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$x1('11'),
					$elm$svg$Svg$Attributes$y1('8'),
					$elm$svg$Svg$Attributes$x2('11'),
					$elm$svg$Svg$Attributes$y2('14')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$line,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$x1('8'),
					$elm$svg$Svg$Attributes$y1('11'),
					$elm$svg$Svg$Attributes$x2('14'),
					$elm$svg$Svg$Attributes$y2('11')
				]),
			_List_Nil)
		]));
var $author$project$Icon$zoomIn = $author$project$Icon$featherIcon($feathericons$elm_feather$FeatherIcons$zoomIn);
var $feathericons$elm_feather$FeatherIcons$zoomOut = A2(
	$feathericons$elm_feather$FeatherIcons$makeBuilder,
	'zoom-out',
	_List_fromArray(
		[
			A2(
			$elm$svg$Svg$circle,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$cx('11'),
					$elm$svg$Svg$Attributes$cy('11'),
					$elm$svg$Svg$Attributes$r('8')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$line,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$x1('21'),
					$elm$svg$Svg$Attributes$y1('21'),
					$elm$svg$Svg$Attributes$x2('16.65'),
					$elm$svg$Svg$Attributes$y2('16.65')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$line,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$x1('8'),
					$elm$svg$Svg$Attributes$y1('11'),
					$elm$svg$Svg$Attributes$x2('14'),
					$elm$svg$Svg$Attributes$y2('11')
				]),
			_List_Nil)
		]));
var $author$project$Icon$zoomOut = $author$project$Icon$featherIcon($feathericons$elm_feather$FeatherIcons$zoomOut);
var $author$project$Main$ZoomAwayFrom = function (a) {
	return {$: 'ZoomAwayFrom', a: a};
};
var $author$project$Main$ZoomToward = function (a) {
	return {$: 'ZoomToward', a: a};
};
var $author$project$Main$zoomWheelMsg = F2(
	function (viewer, event) {
		var coordinates = A2($mpizenberg$elm_2d_viewer$Viewer$coordinatesAt, event.mouseEvent.offsetPos, viewer);
		return (event.deltaY > 0) ? $author$project$Main$ZoomMsg(
			$author$project$Main$ZoomAwayFrom(coordinates)) : $author$project$Main$ZoomMsg(
			$author$project$Main$ZoomToward(coordinates));
	});
var $author$project$Main$viewImgs = F2(
	function (model, images) {
		var pointerMode = model.pointerMode;
		var bboxDrawn = model.bboxDrawn;
		var viewer = model.viewer;
		var notSeenLogs = model.notSeenLogs;
		var registeredImages = model.registeredImages;
		var renderedBbox = function () {
			if (bboxDrawn.$ === 'Nothing') {
				return A2($joakin$elm_canvas$Canvas$shapes, _List_Nil, _List_Nil);
			} else {
				var left = bboxDrawn.a.left;
				var top = bboxDrawn.a.top;
				var right = bboxDrawn.a.right;
				var bottom = bboxDrawn.a.bottom;
				var strokeWidth = viewer.scale * 2;
				var bboxWidth = right - left;
				var bboxHeight = bottom - top;
				return A2(
					$joakin$elm_canvas$Canvas$shapes,
					_List_fromArray(
						[
							$joakin$elm_canvas$Canvas$Settings$fill(
							A4($avh4$elm_color$Color$rgba, 1, 1, 1, 0.3)),
							$joakin$elm_canvas$Canvas$Settings$stroke($avh4$elm_color$Color$red),
							$joakin$elm_canvas$Canvas$Settings$Line$lineWidth(strokeWidth),
							$mpizenberg$elm_2d_viewer$Viewer$Canvas$transform(viewer)
						]),
					_List_fromArray(
						[
							A3(
							$joakin$elm_canvas$Canvas$rect,
							_Utils_Tuple2(left, top),
							bboxWidth,
							bboxHeight)
						]));
			}
		}();
		var pointToText = function (pt) {
			return $elm$core$String$fromFloat(pt.x) + (' ; ' + ($elm$core$String$fromFloat(pt.y) + (' ; ' + $elm$core$String$fromFloat(pt.z))));
		};
		var modeButton = F4(
			function (selected, msg, title, icon) {
				var _v3 = selected ? _Utils_Tuple2($author$project$Style$lightGrey, $elm$core$Maybe$Nothing) : _Utils_Tuple2(
					A4($mdgriffith$elm_ui$Element$rgba, 255, 255, 255, 0.8),
					$elm$core$Maybe$Just(msg));
				var bgColor = _v3.a;
				var action = _v3.b;
				return A2(
					$mdgriffith$elm_ui$Element$Input$button,
					_List_fromArray(
						[
							$mdgriffith$elm_ui$Element$padding(6),
							$mdgriffith$elm_ui$Element$centerX,
							$mdgriffith$elm_ui$Element$Background$color(bgColor),
							$mdgriffith$elm_ui$Element$htmlAttribute(
							A2($elm$html$Html$Attributes$style, 'box-shadow', 'none')),
							$mdgriffith$elm_ui$Element$htmlAttribute(
							$elm$html$Html$Attributes$title(title))
						]),
					{
						label: icon(32),
						onPress: action
					});
			});
		var lightDirection = $mdgriffith$elm_ui$Element$text(
			A2(
				$elm$core$Maybe$withDefault,
				'Light unreadable...',
				A2(
					$elm$core$Maybe$map,
					pointToText,
					A2($elm$core$Maybe$map, $yotamDvir$elm_pivot$Pivot$getC, model.lights))));
		var isMovingMode = function () {
			switch (pointerMode.$) {
				case 'WaitingMove':
					return true;
				case 'PointerMovingFromClientCoords':
					return true;
				case 'WaitingDraw':
					return false;
				default:
					return false;
			}
		}();
		var img = $yotamDvir$elm_pivot$Pivot$getC(images);
		var renderedImage = A3(
			$joakin$elm_canvas$Canvas$texture,
			_List_fromArray(
				[
					$mpizenberg$elm_2d_viewer$Viewer$Canvas$transform(viewer),
					$joakin$elm_canvas$Canvas$Settings$Advanced$imageSmoothing(false)
				]),
			_Utils_Tuple2(0, 0),
			img.texture);
		var clickButton = F5(
			function (alignment, abled, msg, title, icon) {
				var strokeColor = abled ? $author$project$Style$black : $author$project$Style$lightGrey;
				return A2(
					$mdgriffith$elm_ui$Element$Input$button,
					_List_fromArray(
						[
							$mdgriffith$elm_ui$Element$padding(6),
							alignment,
							$mdgriffith$elm_ui$Element$Background$color(
							A4($mdgriffith$elm_ui$Element$rgba255, 255, 255, 255, 0.8)),
							$mdgriffith$elm_ui$Element$Font$color(strokeColor),
							$mdgriffith$elm_ui$Element$htmlAttribute(
							A2($elm$html$Html$Attributes$style, 'box-shadow', 'none')),
							$mdgriffith$elm_ui$Element$htmlAttribute(
							$elm$html$Html$Attributes$title(title))
						]),
					{
						label: icon(32),
						onPress: $elm$core$Maybe$Just(msg)
					});
			});
		var buttonsRow = A2(
			$mdgriffith$elm_ui$Element$row,
			_List_fromArray(
				[
					$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill)
				]),
			_List_fromArray(
				[
					A5(
					clickButton,
					$mdgriffith$elm_ui$Element$centerX,
					true,
					$author$project$Main$ZoomMsg(
						$author$project$Main$ZoomFit(img)),
					'Fit zoom to image',
					$author$project$Icon$zoomFit),
					A5(
					clickButton,
					$mdgriffith$elm_ui$Element$centerX,
					true,
					$author$project$Main$ZoomMsg($author$project$Main$ZoomOut),
					'Zoom out',
					$author$project$Icon$zoomOut),
					A5(
					clickButton,
					$mdgriffith$elm_ui$Element$centerX,
					true,
					$author$project$Main$ZoomMsg($author$project$Main$ZoomIn),
					'Zoom in',
					$author$project$Icon$zoomIn),
					A4(
					modeButton,
					isMovingMode,
					$author$project$Main$ViewImgMsg($author$project$Main$SelectMovingMode),
					'Move mode',
					$author$project$Icon$move),
					A2(
					$mdgriffith$elm_ui$Element$el,
					_List_fromArray(
						[
							$mdgriffith$elm_ui$Element$width(
							A2($mdgriffith$elm_ui$Element$maximum, 100, $mdgriffith$elm_ui$Element$fill))
						]),
					$mdgriffith$elm_ui$Element$none),
					A4(
					modeButton,
					!isMovingMode,
					$author$project$Main$ViewImgMsg($author$project$Main$SelectDrawingMode),
					'Draw the cropped working area as a bounding box',
					$author$project$Icon$boundingBox),
					A5(
					clickButton,
					$mdgriffith$elm_ui$Element$centerX,
					true,
					$author$project$Main$ViewImgMsg($author$project$Main$CropCurrentFrame),
					'Set the cropped working area to the current frame',
					$author$project$Icon$maximize)
				]));
		var _v0 = viewer.size;
		var viewerWidth = _v0.a;
		var viewerHeight = _v0.b;
		var clearCanvas = A3(
			$joakin$elm_canvas$Canvas$clear,
			_Utils_Tuple2(0, 0),
			viewerWidth,
			viewerHeight);
		var canvasViewer = A3(
			$joakin$elm_canvas$Canvas$toHtml,
			_Utils_Tuple2(
				$elm$core$Basics$round(viewerWidth),
				$elm$core$Basics$round(viewerHeight)),
			_List_fromArray(
				[
					$elm$html$Html$Attributes$id('theCanvas'),
					A2($elm$html$Html$Attributes$style, 'display', 'block'),
					$mpizenberg$elm_pointer_events$Html$Events$Extra$Wheel$onWheel(
					$author$project$Main$zoomWheelMsg(viewer)),
					A2(
					$author$project$Main$msgOn,
					'pointerdown',
					A2(
						$elm$json$Json$Decode$map,
						A2($elm$core$Basics$composeL, $author$project$Main$PointerMsg, $author$project$Main$PointerDownRaw),
						$elm$json$Json$Decode$value)),
					$mpizenberg$elm_pointer_events$Html$Events$Extra$Pointer$onUp(
					function (_v1) {
						return $author$project$Main$PointerMsg($author$project$Main$PointerUp);
					}),
					A2($elm$html$Html$Attributes$style, 'touch-action', 'none'),
					A2(
					$elm$html$Html$Events$preventDefaultOn,
					'pointermove',
					A2(
						$elm$json$Json$Decode$map,
						function (coords) {
							return _Utils_Tuple2(
								$author$project$Main$PointerMsg(
									$author$project$Main$PointerMove(coords)),
								true);
						},
						A3(
							$elm$json$Json$Decode$map2,
							$elm$core$Tuple$pair,
							A2($elm$json$Json$Decode$field, 'clientX', $elm$json$Json$Decode$float),
							A2($elm$json$Json$Decode$field, 'clientY', $elm$json$Json$Decode$float))))
				]),
			_List_fromArray(
				[clearCanvas, renderedImage, renderedBbox]));
		return A2(
			$mdgriffith$elm_ui$Element$column,
			_List_fromArray(
				[
					$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$fill)
				]),
			_List_fromArray(
				[
					$author$project$Main$headerBar(
					_List_fromArray(
						[
							A2($author$project$Main$headerTab, 'Images', $elm$core$Maybe$Nothing),
							A2(
							$author$project$Main$headerTab,
							'Config',
							$elm$core$Maybe$Just(
								$author$project$Main$NavigationMsg($author$project$Main$GoToPageConfig))),
							A2(
							$author$project$Main$registrationHeaderTab,
							$elm$core$Maybe$Just(
								$author$project$Main$NavigationMsg($author$project$Main$GoToPageRegistration)),
							registeredImages),
							A2(
							$author$project$Main$logsHeaderTab,
							$elm$core$Maybe$Just(
								$author$project$Main$NavigationMsg($author$project$Main$GoToPageLogs)),
							notSeenLogs)
						])),
					$author$project$Main$runProgressBar(model),
					lightDirection,
					$mdgriffith$elm_ui$Element$html(
					A3(
						$elm$html$Html$node,
						'style',
						_List_Nil,
						_List_fromArray(
							[
								$elm$html$Html$text('.pixelated { image-rendering: pixelated; image-rendering: crisp-edges; }')
							]))),
					A2(
					$mdgriffith$elm_ui$Element$el,
					_List_fromArray(
						[
							$mdgriffith$elm_ui$Element$inFront(buttonsRow),
							$mdgriffith$elm_ui$Element$inFront(
							A2(
								$mdgriffith$elm_ui$Element$row,
								_List_fromArray(
									[
										$mdgriffith$elm_ui$Element$alignBottom,
										$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill)
									]),
								_List_fromArray(
									[
										A5(clickButton, $mdgriffith$elm_ui$Element$alignLeft, true, $author$project$Main$ClickPreviousImage, 'Previous image', $author$project$Icon$arrowLeftCircle),
										A5(clickButton, $mdgriffith$elm_ui$Element$alignRight, true, $author$project$Main$ClickNextImage, 'Next image', $author$project$Icon$arrowRightCircle)
									]))),
							$mdgriffith$elm_ui$Element$clip,
							$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$fill)
						]),
					$mdgriffith$elm_ui$Element$html(canvasViewer))
				]));
	});
var $author$project$Main$ReturnHome = {$: 'ReturnHome'};
var $mdgriffith$elm_ui$Element$Border$dotted = A2($mdgriffith$elm_ui$Internal$Model$Class, $mdgriffith$elm_ui$Internal$Flag$borderStyle, $mdgriffith$elm_ui$Internal$Style$classes.borderDotted);
var $author$project$Main$loadBar = F2(
	function (loaded, total) {
		var barLength = (((325 - (2 * 4)) * loaded) / total) | 0;
		return A2(
			$mdgriffith$elm_ui$Element$el,
			_List_fromArray(
				[
					$mdgriffith$elm_ui$Element$width(
					$mdgriffith$elm_ui$Element$px(barLength)),
					$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$fill),
					$mdgriffith$elm_ui$Element$Background$color($author$project$Style$dropColor),
					$mdgriffith$elm_ui$Element$htmlAttribute(
					$andrewMacmurray$elm_simple_animation$Simple$Transition$properties(
						_List_fromArray(
							[
								A3($andrewMacmurray$elm_simple_animation$Simple$Transition$property, 'width', 200, _List_Nil)
							])))
				]),
			$mdgriffith$elm_ui$Element$none);
	});
var $author$project$Main$loadingBoxBorderAttributes = _List_fromArray(
	[
		$mdgriffith$elm_ui$Element$Border$width(4),
		$mdgriffith$elm_ui$Element$Font$color($author$project$Style$dropColor),
		$mdgriffith$elm_ui$Element$centerX,
		$mdgriffith$elm_ui$Element$clip,
		A2($mdgriffith$elm_ui$Element$paddingXY, 0, 0),
		$mdgriffith$elm_ui$Element$Border$solid,
		$mdgriffith$elm_ui$Element$Border$rounded(0),
		$mdgriffith$elm_ui$Element$height(
		$mdgriffith$elm_ui$Element$px((16 + 4) * 2)),
		$mdgriffith$elm_ui$Element$width(
		$mdgriffith$elm_ui$Element$px(325)),
		$author$project$Main$borderTransition
	]);
var $author$project$Main$viewLoading = function (_v0) {
	var names = _v0.names;
	var loaded = _v0.loaded;
	var totalCount = $elm$core$Set$size(names);
	var loadCount = $elm$core$Dict$size(loaded);
	return A2(
		$mdgriffith$elm_ui$Element$column,
		_List_fromArray(
			[
				$mdgriffith$elm_ui$Element$padding(20),
				$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill),
				$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$fill)
			]),
		_List_fromArray(
			[
				$author$project$Main$viewTitle,
				A2(
				$mdgriffith$elm_ui$Element$el,
				_List_fromArray(
					[
						$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill),
						$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$fill)
					]),
				A2(
					$mdgriffith$elm_ui$Element$column,
					_List_fromArray(
						[
							$mdgriffith$elm_ui$Element$centerX,
							$mdgriffith$elm_ui$Element$centerY,
							$mdgriffith$elm_ui$Element$spacing(32)
						]),
					_List_fromArray(
						[
							A2(
							$mdgriffith$elm_ui$Element$el,
							$author$project$Main$loadingBoxBorderAttributes,
							A2($author$project$Main$loadBar, loadCount, totalCount)),
							A2(
							$mdgriffith$elm_ui$Element$el,
							_List_fromArray(
								[$mdgriffith$elm_ui$Element$centerX]),
							$mdgriffith$elm_ui$Element$text(
								'Loading ' + ($elm$core$String$fromInt(totalCount) + ' images')))
						]))),
				A2(
				$mdgriffith$elm_ui$Element$Input$button,
				_List_fromArray(
					[
						$mdgriffith$elm_ui$Element$Background$color($author$project$Style$almostWhite),
						$mdgriffith$elm_ui$Element$Border$dotted,
						$mdgriffith$elm_ui$Element$Border$width(2),
						$mdgriffith$elm_ui$Element$padding(16),
						$mdgriffith$elm_ui$Element$centerX
					]),
				{
					label: $mdgriffith$elm_ui$Element$text('Woops, stop and reload the page'),
					onPress: $elm$core$Maybe$Just($author$project$Main$ReturnHome)
				})
			]));
};
var $mdgriffith$elm_ui$Internal$Model$Monospace = {$: 'Monospace'};
var $mdgriffith$elm_ui$Element$Font$monospace = $mdgriffith$elm_ui$Internal$Model$Monospace;
var $author$project$Style$fontMonospace = $mdgriffith$elm_ui$Element$Font$family(
	_List_fromArray(
		[
			$mdgriffith$elm_ui$Element$Font$typeface('Inconsolata'),
			$mdgriffith$elm_ui$Element$Font$monospace
		]));
var $author$project$Style$warningColor = A3($mdgriffith$elm_ui$Element$rgb255, 220, 120, 50);
var $author$project$Main$viewLog = function (_v0) {
	var lvl = _v0.lvl;
	var content = _v0.content;
	switch (lvl) {
		case 0:
			return A2(
				$mdgriffith$elm_ui$Element$el,
				_List_fromArray(
					[
						$mdgriffith$elm_ui$Element$Font$color($author$project$Style$errorColor),
						A2($mdgriffith$elm_ui$Element$paddingXY, 0, 12),
						$mdgriffith$elm_ui$Element$onLeft(
						A2(
							$mdgriffith$elm_ui$Element$el,
							_List_fromArray(
								[
									$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$fill),
									A2($mdgriffith$elm_ui$Element$paddingXY, 0, 4)
								]),
							A2(
								$mdgriffith$elm_ui$Element$el,
								_List_fromArray(
									[
										$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$fill),
										$mdgriffith$elm_ui$Element$width(
										$mdgriffith$elm_ui$Element$px(4)),
										$mdgriffith$elm_ui$Element$Background$color($author$project$Style$errorColor),
										$mdgriffith$elm_ui$Element$moveLeft(6)
									]),
								$mdgriffith$elm_ui$Element$none)))
					]),
				$mdgriffith$elm_ui$Element$text(content));
		case 1:
			return A2(
				$mdgriffith$elm_ui$Element$el,
				_List_fromArray(
					[
						$mdgriffith$elm_ui$Element$Font$color($author$project$Style$warningColor),
						A2($mdgriffith$elm_ui$Element$paddingXY, 0, 12),
						$mdgriffith$elm_ui$Element$onLeft(
						A2(
							$mdgriffith$elm_ui$Element$el,
							_List_fromArray(
								[
									$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$fill),
									A2($mdgriffith$elm_ui$Element$paddingXY, 0, 4)
								]),
							A2(
								$mdgriffith$elm_ui$Element$el,
								_List_fromArray(
									[
										$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$fill),
										$mdgriffith$elm_ui$Element$width(
										$mdgriffith$elm_ui$Element$px(4)),
										$mdgriffith$elm_ui$Element$Background$color($author$project$Style$warningColor),
										$mdgriffith$elm_ui$Element$moveLeft(6)
									]),
								$mdgriffith$elm_ui$Element$none)))
					]),
				$mdgriffith$elm_ui$Element$text(content));
		default:
			return $mdgriffith$elm_ui$Element$text(content);
	}
};
var $author$project$Main$viewLoadingError = function (model) {
	return A2(
		$mdgriffith$elm_ui$Element$column,
		_List_fromArray(
			[
				$mdgriffith$elm_ui$Element$padding(20),
				$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill),
				$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$fill),
				$mdgriffith$elm_ui$Element$spacing(48)
			]),
		_List_fromArray(
			[
				$author$project$Main$viewTitle,
				A2(
				$mdgriffith$elm_ui$Element$paragraph,
				_List_fromArray(
					[
						$mdgriffith$elm_ui$Element$width(
						A2($mdgriffith$elm_ui$Element$maximum, 400, $mdgriffith$elm_ui$Element$fill)),
						$mdgriffith$elm_ui$Element$centerX
					]),
				_List_fromArray(
					[
						$mdgriffith$elm_ui$Element$text('An unrecoverable error occured while loading the images, please reload the page.')
					])),
				A2(
				$mdgriffith$elm_ui$Element$Input$button,
				_List_fromArray(
					[
						$mdgriffith$elm_ui$Element$Background$color($author$project$Style$almostWhite),
						$mdgriffith$elm_ui$Element$Border$dotted,
						$mdgriffith$elm_ui$Element$Border$width(2),
						$mdgriffith$elm_ui$Element$padding(16),
						$mdgriffith$elm_ui$Element$centerX
					]),
				{
					label: $mdgriffith$elm_ui$Element$text('Woops, reload the page'),
					onPress: $elm$core$Maybe$Just($author$project$Main$ReturnHome)
				}),
				A2(
				$mdgriffith$elm_ui$Element$column,
				_List_fromArray(
					[
						$mdgriffith$elm_ui$Element$padding(18),
						$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$fill),
						$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill),
						$mdgriffith$elm_ui$Element$centerX,
						$author$project$Style$fontMonospace,
						$mdgriffith$elm_ui$Element$Font$size(18),
						$mdgriffith$elm_ui$Element$scrollbars,
						$mdgriffith$elm_ui$Element$htmlAttribute(
						$elm$html$Html$Attributes$id('logs'))
					]),
				A2(
					$elm$core$List$map,
					$author$project$Main$viewLog,
					$elm$core$List$reverse(
						A2(
							$elm$core$List$filter,
							function (l) {
								return l.lvl <= 0;
							},
							model.notSeenLogs))))
			]));
};
var $author$project$Main$GetScrollPosThenNavigationMsg = function (a) {
	return {$: 'GetScrollPosThenNavigationMsg', a: a};
};
var $author$project$Main$ToggleAutoScroll = function (a) {
	return {$: 'ToggleAutoScroll', a: a};
};
var $author$project$Main$ClearLogs = {$: 'ClearLogs'};
var $feathericons$elm_feather$FeatherIcons$trash2 = A2(
	$feathericons$elm_feather$FeatherIcons$makeBuilder,
	'trash-2',
	_List_fromArray(
		[
			A2(
			$elm$svg$Svg$polyline,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$points('3 6 5 6 21 6')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$d('M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$line,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$x1('10'),
					$elm$svg$Svg$Attributes$y1('11'),
					$elm$svg$Svg$Attributes$x2('10'),
					$elm$svg$Svg$Attributes$y2('17')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$line,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$x1('14'),
					$elm$svg$Svg$Attributes$y1('11'),
					$elm$svg$Svg$Attributes$x2('14'),
					$elm$svg$Svg$Attributes$y2('17')
				]),
			_List_Nil)
		]));
var $author$project$Icon$trash = $author$project$Icon$featherIcon($feathericons$elm_feather$FeatherIcons$trash2);
var $author$project$Main$clearLogsButton = A2(
	$mdgriffith$elm_ui$Element$row,
	_List_fromArray(
		[
			$mdgriffith$elm_ui$Element$centerX,
			$mdgriffith$elm_ui$Element$spacing(15)
		]),
	_List_fromArray(
		[
			A2(
			$mdgriffith$elm_ui$Element$Input$button,
			_List_fromArray(
				[
					$mdgriffith$elm_ui$Element$Background$color($author$project$Style$almostWhite),
					$mdgriffith$elm_ui$Element$padding(10)
				]),
			{
				label: $author$project$Icon$trash(24),
				onPress: $elm$core$Maybe$Just($author$project$Main$ClearLogs)
			}),
			A2(
			$mdgriffith$elm_ui$Element$el,
			_List_fromArray(
				[$mdgriffith$elm_ui$Element$centerY]),
			$mdgriffith$elm_ui$Element$text('Clear logs'))
		]));
var $author$project$Main$VerbosityChange = function (a) {
	return {$: 'VerbosityChange', a: a};
};
var $mdgriffith$elm_ui$Element$Input$Label = F3(
	function (a, b, c) {
		return {$: 'Label', a: a, b: b, c: c};
	});
var $mdgriffith$elm_ui$Element$Input$OnLeft = {$: 'OnLeft'};
var $mdgriffith$elm_ui$Element$Input$labelLeft = $mdgriffith$elm_ui$Element$Input$Label($mdgriffith$elm_ui$Element$Input$OnLeft);
var $mdgriffith$elm_ui$Internal$Flag$active = $mdgriffith$elm_ui$Internal$Flag$flag(32);
var $mdgriffith$elm_ui$Internal$Flag$focus = $mdgriffith$elm_ui$Internal$Flag$flag(31);
var $mdgriffith$elm_ui$Internal$Model$getHeight = function (attrs) {
	return A3(
		$elm$core$List$foldr,
		F2(
			function (attr, acc) {
				if (acc.$ === 'Just') {
					var x = acc.a;
					return $elm$core$Maybe$Just(x);
				} else {
					if (attr.$ === 'Height') {
						var len = attr.a;
						return $elm$core$Maybe$Just(len);
					} else {
						return $elm$core$Maybe$Nothing;
					}
				}
			}),
		$elm$core$Maybe$Nothing,
		attrs);
};
var $mdgriffith$elm_ui$Internal$Model$getSpacing = F2(
	function (attrs, _default) {
		return A2(
			$elm$core$Maybe$withDefault,
			_default,
			A3(
				$elm$core$List$foldr,
				F2(
					function (attr, acc) {
						if (acc.$ === 'Just') {
							var x = acc.a;
							return $elm$core$Maybe$Just(x);
						} else {
							if ((attr.$ === 'StyleClass') && (attr.b.$ === 'SpacingStyle')) {
								var _v2 = attr.b;
								var x = _v2.b;
								var y = _v2.c;
								return $elm$core$Maybe$Just(
									_Utils_Tuple2(x, y));
							} else {
								return $elm$core$Maybe$Nothing;
							}
						}
					}),
				$elm$core$Maybe$Nothing,
				attrs));
	});
var $mdgriffith$elm_ui$Internal$Model$getWidth = function (attrs) {
	return A3(
		$elm$core$List$foldr,
		F2(
			function (attr, acc) {
				if (acc.$ === 'Just') {
					var x = acc.a;
					return $elm$core$Maybe$Just(x);
				} else {
					if (attr.$ === 'Width') {
						var len = attr.a;
						return $elm$core$Maybe$Just(len);
					} else {
						return $elm$core$Maybe$Nothing;
					}
				}
			}),
		$elm$core$Maybe$Nothing,
		attrs);
};
var $mdgriffith$elm_ui$Internal$Flag$hover = $mdgriffith$elm_ui$Internal$Flag$flag(33);
var $mdgriffith$elm_ui$Element$spacingXY = F2(
	function (x, y) {
		return A2(
			$mdgriffith$elm_ui$Internal$Model$StyleClass,
			$mdgriffith$elm_ui$Internal$Flag$spacing,
			A3(
				$mdgriffith$elm_ui$Internal$Model$SpacingStyle,
				A2($mdgriffith$elm_ui$Internal$Model$spacingName, x, y),
				x,
				y));
	});
var $elm$html$Html$Attributes$step = function (n) {
	return A2($elm$html$Html$Attributes$stringProperty, 'step', n);
};
var $elm$core$Basics$abs = function (n) {
	return (n < 0) ? (-n) : n;
};
var $mdgriffith$elm_ui$Element$fillPortion = $mdgriffith$elm_ui$Internal$Model$Fill;
var $mdgriffith$elm_ui$Internal$Model$map = F2(
	function (fn, el) {
		switch (el.$) {
			case 'Styled':
				var styled = el.a;
				return $mdgriffith$elm_ui$Internal$Model$Styled(
					{
						html: F2(
							function (add, context) {
								return A2(
									$elm$virtual_dom$VirtualDom$map,
									fn,
									A2(styled.html, add, context));
							}),
						styles: styled.styles
					});
			case 'Unstyled':
				var html = el.a;
				return $mdgriffith$elm_ui$Internal$Model$Unstyled(
					A2(
						$elm$core$Basics$composeL,
						$elm$virtual_dom$VirtualDom$map(fn),
						html));
			case 'Text':
				var str = el.a;
				return $mdgriffith$elm_ui$Internal$Model$Text(str);
			default:
				return $mdgriffith$elm_ui$Internal$Model$Empty;
		}
	});
var $elm$virtual_dom$VirtualDom$mapAttribute = _VirtualDom_mapAttribute;
var $mdgriffith$elm_ui$Internal$Model$mapAttr = F2(
	function (fn, attr) {
		switch (attr.$) {
			case 'NoAttribute':
				return $mdgriffith$elm_ui$Internal$Model$NoAttribute;
			case 'Describe':
				var description = attr.a;
				return $mdgriffith$elm_ui$Internal$Model$Describe(description);
			case 'AlignX':
				var x = attr.a;
				return $mdgriffith$elm_ui$Internal$Model$AlignX(x);
			case 'AlignY':
				var y = attr.a;
				return $mdgriffith$elm_ui$Internal$Model$AlignY(y);
			case 'Width':
				var x = attr.a;
				return $mdgriffith$elm_ui$Internal$Model$Width(x);
			case 'Height':
				var x = attr.a;
				return $mdgriffith$elm_ui$Internal$Model$Height(x);
			case 'Class':
				var x = attr.a;
				var y = attr.b;
				return A2($mdgriffith$elm_ui$Internal$Model$Class, x, y);
			case 'StyleClass':
				var flag = attr.a;
				var style = attr.b;
				return A2($mdgriffith$elm_ui$Internal$Model$StyleClass, flag, style);
			case 'Nearby':
				var location = attr.a;
				var elem = attr.b;
				return A2(
					$mdgriffith$elm_ui$Internal$Model$Nearby,
					location,
					A2($mdgriffith$elm_ui$Internal$Model$map, fn, elem));
			case 'Attr':
				var htmlAttr = attr.a;
				return $mdgriffith$elm_ui$Internal$Model$Attr(
					A2($elm$virtual_dom$VirtualDom$mapAttribute, fn, htmlAttr));
			default:
				var fl = attr.a;
				var trans = attr.b;
				return A2($mdgriffith$elm_ui$Internal$Model$TransformComponent, fl, trans);
		}
	});
var $mdgriffith$elm_ui$Element$Input$viewHorizontalThumb = F3(
	function (factor, thumbAttributes, trackHeight) {
		return A2(
			$mdgriffith$elm_ui$Element$row,
			_List_fromArray(
				[
					$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill),
					$mdgriffith$elm_ui$Element$height(
					A2($elm$core$Maybe$withDefault, $mdgriffith$elm_ui$Element$fill, trackHeight)),
					$mdgriffith$elm_ui$Element$centerY
				]),
			_List_fromArray(
				[
					A2(
					$mdgriffith$elm_ui$Element$el,
					_List_fromArray(
						[
							$mdgriffith$elm_ui$Element$width(
							$mdgriffith$elm_ui$Element$fillPortion(
								$elm$core$Basics$round(factor * 10000)))
						]),
					$mdgriffith$elm_ui$Element$none),
					A2(
					$mdgriffith$elm_ui$Element$el,
					A2(
						$elm$core$List$cons,
						$mdgriffith$elm_ui$Element$centerY,
						A2(
							$elm$core$List$map,
							$mdgriffith$elm_ui$Internal$Model$mapAttr($elm$core$Basics$never),
							thumbAttributes)),
					$mdgriffith$elm_ui$Element$none),
					A2(
					$mdgriffith$elm_ui$Element$el,
					_List_fromArray(
						[
							$mdgriffith$elm_ui$Element$width(
							$mdgriffith$elm_ui$Element$fillPortion(
								$elm$core$Basics$round(
									$elm$core$Basics$abs(1 - factor) * 10000)))
						]),
					$mdgriffith$elm_ui$Element$none)
				]));
	});
var $mdgriffith$elm_ui$Element$Input$viewVerticalThumb = F3(
	function (factor, thumbAttributes, trackWidth) {
		return A2(
			$mdgriffith$elm_ui$Element$column,
			_List_fromArray(
				[
					$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$fill),
					$mdgriffith$elm_ui$Element$width(
					A2($elm$core$Maybe$withDefault, $mdgriffith$elm_ui$Element$fill, trackWidth)),
					$mdgriffith$elm_ui$Element$centerX
				]),
			_List_fromArray(
				[
					A2(
					$mdgriffith$elm_ui$Element$el,
					_List_fromArray(
						[
							$mdgriffith$elm_ui$Element$height(
							$mdgriffith$elm_ui$Element$fillPortion(
								$elm$core$Basics$round(
									$elm$core$Basics$abs(1 - factor) * 10000)))
						]),
					$mdgriffith$elm_ui$Element$none),
					A2(
					$mdgriffith$elm_ui$Element$el,
					A2(
						$elm$core$List$cons,
						$mdgriffith$elm_ui$Element$centerX,
						A2(
							$elm$core$List$map,
							$mdgriffith$elm_ui$Internal$Model$mapAttr($elm$core$Basics$never),
							thumbAttributes)),
					$mdgriffith$elm_ui$Element$none),
					A2(
					$mdgriffith$elm_ui$Element$el,
					_List_fromArray(
						[
							$mdgriffith$elm_ui$Element$height(
							$mdgriffith$elm_ui$Element$fillPortion(
								$elm$core$Basics$round(factor * 10000)))
						]),
					$mdgriffith$elm_ui$Element$none)
				]));
	});
var $mdgriffith$elm_ui$Element$Input$slider = F2(
	function (attributes, input) {
		var trackWidth = $mdgriffith$elm_ui$Internal$Model$getWidth(attributes);
		var trackHeight = $mdgriffith$elm_ui$Internal$Model$getHeight(attributes);
		var vertical = function () {
			var _v8 = _Utils_Tuple2(trackWidth, trackHeight);
			_v8$3:
			while (true) {
				if (_v8.a.$ === 'Nothing') {
					if (_v8.b.$ === 'Nothing') {
						var _v9 = _v8.a;
						var _v10 = _v8.b;
						return false;
					} else {
						break _v8$3;
					}
				} else {
					if ((_v8.a.a.$ === 'Px') && (_v8.b.$ === 'Just')) {
						switch (_v8.b.a.$) {
							case 'Px':
								var w = _v8.a.a.a;
								var h = _v8.b.a.a;
								return _Utils_cmp(h, w) > 0;
							case 'Fill':
								return true;
							default:
								break _v8$3;
						}
					} else {
						break _v8$3;
					}
				}
			}
			return false;
		}();
		var factor = (input.value - input.min) / (input.max - input.min);
		var _v0 = input.thumb;
		var thumbAttributes = _v0.a;
		var height = $mdgriffith$elm_ui$Internal$Model$getHeight(thumbAttributes);
		var thumbHeightString = function () {
			if (height.$ === 'Nothing') {
				return '20px';
			} else {
				if (height.a.$ === 'Px') {
					var px = height.a.a;
					return $elm$core$String$fromInt(px) + 'px';
				} else {
					return '100%';
				}
			}
		}();
		var width = $mdgriffith$elm_ui$Internal$Model$getWidth(thumbAttributes);
		var thumbWidthString = function () {
			if (width.$ === 'Nothing') {
				return '20px';
			} else {
				if (width.a.$ === 'Px') {
					var px = width.a.a;
					return $elm$core$String$fromInt(px) + 'px';
				} else {
					return '100%';
				}
			}
		}();
		var className = 'thmb-' + (thumbWidthString + ('-' + thumbHeightString));
		var thumbShadowStyle = _List_fromArray(
			[
				A2($mdgriffith$elm_ui$Internal$Model$Property, 'width', thumbWidthString),
				A2($mdgriffith$elm_ui$Internal$Model$Property, 'height', thumbHeightString)
			]);
		var _v1 = A2(
			$mdgriffith$elm_ui$Internal$Model$getSpacing,
			attributes,
			_Utils_Tuple2(5, 5));
		var spacingX = _v1.a;
		var spacingY = _v1.b;
		return A3(
			$mdgriffith$elm_ui$Element$Input$applyLabel,
			_List_fromArray(
				[
					$mdgriffith$elm_ui$Element$Input$isHiddenLabel(input.label) ? $mdgriffith$elm_ui$Internal$Model$NoAttribute : A2($mdgriffith$elm_ui$Element$spacingXY, spacingX, spacingY),
					$mdgriffith$elm_ui$Element$Region$announce,
					$mdgriffith$elm_ui$Element$width(
					function () {
						if (trackWidth.$ === 'Nothing') {
							return $mdgriffith$elm_ui$Element$fill;
						} else {
							if (trackWidth.a.$ === 'Px') {
								return $mdgriffith$elm_ui$Element$shrink;
							} else {
								var x = trackWidth.a;
								return x;
							}
						}
					}()),
					$mdgriffith$elm_ui$Element$height(
					function () {
						if (trackHeight.$ === 'Nothing') {
							return $mdgriffith$elm_ui$Element$shrink;
						} else {
							if (trackHeight.a.$ === 'Px') {
								return $mdgriffith$elm_ui$Element$shrink;
							} else {
								var x = trackHeight.a;
								return x;
							}
						}
					}())
				]),
			input.label,
			A2(
				$mdgriffith$elm_ui$Element$row,
				_List_fromArray(
					[
						$mdgriffith$elm_ui$Element$width(
						A2($elm$core$Maybe$withDefault, $mdgriffith$elm_ui$Element$fill, trackWidth)),
						$mdgriffith$elm_ui$Element$height(
						A2(
							$elm$core$Maybe$withDefault,
							$mdgriffith$elm_ui$Element$px(20),
							trackHeight))
					]),
				_List_fromArray(
					[
						A4(
						$mdgriffith$elm_ui$Internal$Model$element,
						$mdgriffith$elm_ui$Internal$Model$asEl,
						$mdgriffith$elm_ui$Internal$Model$NodeName('input'),
						_List_fromArray(
							[
								$mdgriffith$elm_ui$Element$Input$hiddenLabelAttribute(input.label),
								A2(
								$mdgriffith$elm_ui$Internal$Model$StyleClass,
								$mdgriffith$elm_ui$Internal$Flag$active,
								A2($mdgriffith$elm_ui$Internal$Model$Style, 'input[type=\"range\"].' + (className + '::-moz-range-thumb'), thumbShadowStyle)),
								A2(
								$mdgriffith$elm_ui$Internal$Model$StyleClass,
								$mdgriffith$elm_ui$Internal$Flag$hover,
								A2($mdgriffith$elm_ui$Internal$Model$Style, 'input[type=\"range\"].' + (className + '::-webkit-slider-thumb'), thumbShadowStyle)),
								A2(
								$mdgriffith$elm_ui$Internal$Model$StyleClass,
								$mdgriffith$elm_ui$Internal$Flag$focus,
								A2($mdgriffith$elm_ui$Internal$Model$Style, 'input[type=\"range\"].' + (className + '::-ms-thumb'), thumbShadowStyle)),
								$mdgriffith$elm_ui$Internal$Model$Attr(
								$elm$html$Html$Attributes$class(className + ' ui-slide-bar focusable-parent')),
								$mdgriffith$elm_ui$Internal$Model$Attr(
								$elm$html$Html$Events$onInput(
									function (str) {
										var _v4 = $elm$core$String$toFloat(str);
										if (_v4.$ === 'Nothing') {
											return input.onChange(0);
										} else {
											var val = _v4.a;
											return input.onChange(val);
										}
									})),
								$mdgriffith$elm_ui$Internal$Model$Attr(
								$elm$html$Html$Attributes$type_('range')),
								$mdgriffith$elm_ui$Internal$Model$Attr(
								$elm$html$Html$Attributes$step(
									function () {
										var _v5 = input.step;
										if (_v5.$ === 'Nothing') {
											return 'any';
										} else {
											var step = _v5.a;
											return $elm$core$String$fromFloat(step);
										}
									}())),
								$mdgriffith$elm_ui$Internal$Model$Attr(
								$elm$html$Html$Attributes$min(
									$elm$core$String$fromFloat(input.min))),
								$mdgriffith$elm_ui$Internal$Model$Attr(
								$elm$html$Html$Attributes$max(
									$elm$core$String$fromFloat(input.max))),
								$mdgriffith$elm_ui$Internal$Model$Attr(
								$elm$html$Html$Attributes$value(
									$elm$core$String$fromFloat(input.value))),
								vertical ? $mdgriffith$elm_ui$Internal$Model$Attr(
								A2($elm$html$Html$Attributes$attribute, 'orient', 'vertical')) : $mdgriffith$elm_ui$Internal$Model$NoAttribute,
								$mdgriffith$elm_ui$Element$width(
								vertical ? A2(
									$elm$core$Maybe$withDefault,
									$mdgriffith$elm_ui$Element$px(20),
									trackHeight) : A2($elm$core$Maybe$withDefault, $mdgriffith$elm_ui$Element$fill, trackWidth)),
								$mdgriffith$elm_ui$Element$height(
								vertical ? A2($elm$core$Maybe$withDefault, $mdgriffith$elm_ui$Element$fill, trackWidth) : A2(
									$elm$core$Maybe$withDefault,
									$mdgriffith$elm_ui$Element$px(20),
									trackHeight))
							]),
						$mdgriffith$elm_ui$Internal$Model$Unkeyed(_List_Nil)),
						A2(
						$mdgriffith$elm_ui$Element$el,
						A2(
							$elm$core$List$cons,
							$mdgriffith$elm_ui$Element$width(
								A2($elm$core$Maybe$withDefault, $mdgriffith$elm_ui$Element$fill, trackWidth)),
							A2(
								$elm$core$List$cons,
								$mdgriffith$elm_ui$Element$height(
									A2(
										$elm$core$Maybe$withDefault,
										$mdgriffith$elm_ui$Element$px(20),
										trackHeight)),
								_Utils_ap(
									attributes,
									_List_fromArray(
										[
											$mdgriffith$elm_ui$Element$behindContent(
											vertical ? A3(
												$mdgriffith$elm_ui$Element$Input$viewVerticalThumb,
												factor,
												A2(
													$elm$core$List$cons,
													$mdgriffith$elm_ui$Internal$Model$htmlClass('focusable-thumb'),
													thumbAttributes),
												trackWidth) : A3(
												$mdgriffith$elm_ui$Element$Input$viewHorizontalThumb,
												factor,
												A2(
													$elm$core$List$cons,
													$mdgriffith$elm_ui$Internal$Model$htmlClass('focusable-thumb'),
													thumbAttributes),
												trackHeight))
										])))),
						$mdgriffith$elm_ui$Element$none)
					])));
	});
var $mdgriffith$elm_ui$Element$Input$Thumb = function (a) {
	return {$: 'Thumb', a: a};
};
var $mdgriffith$elm_ui$Element$Input$thumb = $mdgriffith$elm_ui$Element$Input$Thumb;
var $author$project$Main$verbositySlider = function (verbosity) {
	var thumbSize = 32;
	var circle = F2(
		function (color, size) {
			return _List_fromArray(
				[
					$mdgriffith$elm_ui$Element$Border$color(color),
					$mdgriffith$elm_ui$Element$width(
					$mdgriffith$elm_ui$Element$px(size)),
					$mdgriffith$elm_ui$Element$height(
					$mdgriffith$elm_ui$Element$px(size)),
					$mdgriffith$elm_ui$Element$Border$rounded((size / 2) | 0),
					$mdgriffith$elm_ui$Element$Border$width(2)
				]);
		});
	return A2(
		$mdgriffith$elm_ui$Element$Input$slider,
		_List_fromArray(
			[
				$mdgriffith$elm_ui$Element$width(
				$mdgriffith$elm_ui$Element$px(200)),
				$mdgriffith$elm_ui$Element$height(
				$mdgriffith$elm_ui$Element$px(thumbSize)),
				$mdgriffith$elm_ui$Element$spacing(18),
				$mdgriffith$elm_ui$Element$behindContent(
				A2(
					$mdgriffith$elm_ui$Element$row,
					_List_fromArray(
						[
							$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill),
							$mdgriffith$elm_ui$Element$centerY
						]),
					_List_fromArray(
						[
							A2(
							$mdgriffith$elm_ui$Element$el,
							A2(circle, $author$project$Style$errorColor, thumbSize),
							$mdgriffith$elm_ui$Element$none),
							A2(
							$mdgriffith$elm_ui$Element$el,
							_List_fromArray(
								[
									$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill)
								]),
							$mdgriffith$elm_ui$Element$none),
							A2(
							$mdgriffith$elm_ui$Element$el,
							A2(circle, $author$project$Style$warningColor, thumbSize),
							$mdgriffith$elm_ui$Element$none),
							A2(
							$mdgriffith$elm_ui$Element$el,
							_List_fromArray(
								[
									$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill)
								]),
							$mdgriffith$elm_ui$Element$none),
							A2(
							$mdgriffith$elm_ui$Element$el,
							A2(circle, $author$project$Style$lightGrey, thumbSize),
							$mdgriffith$elm_ui$Element$none),
							A2(
							$mdgriffith$elm_ui$Element$el,
							_List_fromArray(
								[
									$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill)
								]),
							$mdgriffith$elm_ui$Element$none),
							A2(
							$mdgriffith$elm_ui$Element$el,
							A2(circle, $author$project$Style$lightGrey, thumbSize),
							$mdgriffith$elm_ui$Element$none),
							A2(
							$mdgriffith$elm_ui$Element$el,
							_List_fromArray(
								[
									$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill)
								]),
							$mdgriffith$elm_ui$Element$none),
							A2(
							$mdgriffith$elm_ui$Element$el,
							A2(circle, $author$project$Style$lightGrey, thumbSize),
							$mdgriffith$elm_ui$Element$none)
						])))
			]),
		{
			label: A2(
				$mdgriffith$elm_ui$Element$Input$labelLeft,
				_List_fromArray(
					[
						$mdgriffith$elm_ui$Element$centerY,
						$mdgriffith$elm_ui$Element$Font$size(18)
					]),
				A2(
					$mdgriffith$elm_ui$Element$el,
					_List_Nil,
					$mdgriffith$elm_ui$Element$text('  Verbosity\n(min -> max)'))),
			max: 4,
			min: 0,
			onChange: $author$project$Main$VerbosityChange,
			step: $elm$core$Maybe$Just(1),
			thumb: function () {
				var color = (!verbosity) ? $author$project$Style$errorColor : ((verbosity === 1) ? $author$project$Style$warningColor : $author$project$Style$lightGrey);
				return $mdgriffith$elm_ui$Element$Input$thumb(
					_List_fromArray(
						[
							$mdgriffith$elm_ui$Element$Background$color(color),
							$mdgriffith$elm_ui$Element$width(
							$mdgriffith$elm_ui$Element$px(thumbSize)),
							$mdgriffith$elm_ui$Element$height(
							$mdgriffith$elm_ui$Element$px(thumbSize)),
							$mdgriffith$elm_ui$Element$Border$rounded((thumbSize / 2) | 0)
						]));
			}(),
			value: verbosity
		});
};
var $author$project$Main$viewLogs = function (model) {
	var autoscroll = model.autoscroll;
	var verbosity = model.verbosity;
	var seenLogs = model.seenLogs;
	var notSeenLogs = model.notSeenLogs;
	var registeredImages = model.registeredImages;
	return A2(
		$mdgriffith$elm_ui$Element$column,
		_List_fromArray(
			[
				$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill),
				$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$fill)
			]),
		_List_fromArray(
			[
				$author$project$Main$headerBar(
				_List_fromArray(
					[
						A2(
						$author$project$Main$headerTab,
						'Images',
						$elm$core$Maybe$Just(
							$author$project$Main$GetScrollPosThenNavigationMsg($author$project$Main$GoToPageImages))),
						A2(
						$author$project$Main$headerTab,
						'Config',
						$elm$core$Maybe$Just(
							$author$project$Main$GetScrollPosThenNavigationMsg($author$project$Main$GoToPageConfig))),
						A2(
						$author$project$Main$registrationHeaderTab,
						$elm$core$Maybe$Just(
							$author$project$Main$GetScrollPosThenNavigationMsg($author$project$Main$GoToPageRegistration)),
						registeredImages),
						A2($author$project$Main$logsHeaderTab, $elm$core$Maybe$Nothing, notSeenLogs)
					])),
				$author$project$Main$runProgressBar(model),
				A2(
				$mdgriffith$elm_ui$Element$column,
				_List_fromArray(
					[
						$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill),
						$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$fill),
						A2($mdgriffith$elm_ui$Element$paddingXY, 0, 18),
						$mdgriffith$elm_ui$Element$spacing(18)
					]),
				_List_fromArray(
					[
						A2(
						$mdgriffith$elm_ui$Element$el,
						_List_fromArray(
							[$mdgriffith$elm_ui$Element$centerX]),
						$author$project$Main$verbositySlider(verbosity)),
						A2(
						$mdgriffith$elm_ui$Element$row,
						_List_fromArray(
							[
								$mdgriffith$elm_ui$Element$centerX,
								$mdgriffith$elm_ui$Element$spacing(18)
							]),
						_List_fromArray(
							[
								A2(
								$mdgriffith$elm_ui$Element$el,
								_List_fromArray(
									[$mdgriffith$elm_ui$Element$centerY]),
								$mdgriffith$elm_ui$Element$text('auto scroll:')),
								A2(
								$mdgriffith$elm_ui$Element$el,
								_List_fromArray(
									[$mdgriffith$elm_ui$Element$centerY]),
								$mdgriffith$elm_ui$Element$text('off')),
								A4($author$project$Main$toggle, $author$project$Main$ToggleAutoScroll, autoscroll, 24, 'autoscroll'),
								A2(
								$mdgriffith$elm_ui$Element$el,
								_List_fromArray(
									[$mdgriffith$elm_ui$Element$centerY]),
								$mdgriffith$elm_ui$Element$text('on'))
							])),
						$author$project$Main$clearLogsButton,
						A2(
						$mdgriffith$elm_ui$Element$column,
						_List_fromArray(
							[
								$mdgriffith$elm_ui$Element$padding(18),
								$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$fill),
								$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill),
								$mdgriffith$elm_ui$Element$centerX,
								$author$project$Style$fontMonospace,
								$mdgriffith$elm_ui$Element$Font$size(18),
								$mdgriffith$elm_ui$Element$scrollbars,
								$mdgriffith$elm_ui$Element$htmlAttribute(
								$elm$html$Html$Attributes$id('logs'))
							]),
						A2(
							$elm$core$List$map,
							$author$project$Main$viewLog,
							$elm$core$List$reverse(
								A2(
									$elm$core$List$filter,
									function (l) {
										return _Utils_cmp(l.lvl, verbosity) < 1;
									},
									seenLogs))))
					]))
			]));
};
var $author$project$Main$viewRegistration = function (model) {
	var registeredImages = model.registeredImages;
	var registeredViewer = model.registeredViewer;
	var notSeenLogs = model.notSeenLogs;
	return A2(
		$mdgriffith$elm_ui$Element$column,
		_List_fromArray(
			[
				$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill),
				$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$fill)
			]),
		_List_fromArray(
			[
				$author$project$Main$headerBar(
				_List_fromArray(
					[
						A2(
						$author$project$Main$headerTab,
						'Images',
						$elm$core$Maybe$Just(
							$author$project$Main$NavigationMsg($author$project$Main$GoToPageImages))),
						A2(
						$author$project$Main$headerTab,
						'Config',
						$elm$core$Maybe$Just(
							$author$project$Main$NavigationMsg($author$project$Main$GoToPageConfig))),
						A2($author$project$Main$registrationHeaderTab, $elm$core$Maybe$Nothing, registeredImages),
						A2(
						$author$project$Main$logsHeaderTab,
						$elm$core$Maybe$Just(
							$author$project$Main$NavigationMsg($author$project$Main$GoToPageLogs)),
						notSeenLogs)
					])),
				$author$project$Main$runProgressBar(model),
				$mdgriffith$elm_ui$Element$html(
				A3(
					$elm$html$Html$node,
					'style',
					_List_Nil,
					_List_fromArray(
						[
							$elm$html$Html$text('.pixelated { image-rendering: pixelated; image-rendering: crisp-edges; }')
						]))),
				function () {
				if (registeredImages.$ === 'Nothing') {
					return A2(
						$mdgriffith$elm_ui$Element$el,
						_List_fromArray(
							[$mdgriffith$elm_ui$Element$centerX, $mdgriffith$elm_ui$Element$centerY]),
						$mdgriffith$elm_ui$Element$text('Registration not done yet'));
				} else {
					var images = registeredImages.a;
					var img = $yotamDvir$elm_pivot$Pivot$getC(images);
					var renderedImage = A3(
						$joakin$elm_canvas$Canvas$texture,
						_List_fromArray(
							[
								$mpizenberg$elm_2d_viewer$Viewer$Canvas$transform(registeredViewer),
								$joakin$elm_canvas$Canvas$Settings$Advanced$imageSmoothing(false)
							]),
						_Utils_Tuple2(0, 0),
						img.texture);
					var clickButton = F4(
						function (alignment, msg, title, icon) {
							return A2(
								$mdgriffith$elm_ui$Element$Input$button,
								_List_fromArray(
									[
										$mdgriffith$elm_ui$Element$padding(6),
										alignment,
										$mdgriffith$elm_ui$Element$Background$color(
										A4($mdgriffith$elm_ui$Element$rgba255, 255, 255, 255, 0.8)),
										$mdgriffith$elm_ui$Element$Font$color($author$project$Style$black),
										$mdgriffith$elm_ui$Element$htmlAttribute(
										A2($elm$html$Html$Attributes$style, 'box-shadow', 'none')),
										$mdgriffith$elm_ui$Element$htmlAttribute(
										$elm$html$Html$Attributes$title(title))
									]),
								{
									label: icon(32),
									onPress: $elm$core$Maybe$Just(msg)
								});
						});
					var buttonsRow = A2(
						$mdgriffith$elm_ui$Element$row,
						_List_fromArray(
							[$mdgriffith$elm_ui$Element$centerX]),
						_List_fromArray(
							[
								A4(
								clickButton,
								$mdgriffith$elm_ui$Element$centerX,
								$author$project$Main$ZoomMsg(
									$author$project$Main$ZoomFit(img)),
								'Fit zoom to image',
								$author$project$Icon$zoomFit),
								A4(
								clickButton,
								$mdgriffith$elm_ui$Element$centerX,
								$author$project$Main$ZoomMsg($author$project$Main$ZoomOut),
								'Zoom out',
								$author$project$Icon$zoomOut),
								A4(
								clickButton,
								$mdgriffith$elm_ui$Element$centerX,
								$author$project$Main$ZoomMsg($author$project$Main$ZoomIn),
								'Zoom in',
								$author$project$Icon$zoomIn)
							]));
					var _v1 = registeredViewer.size;
					var viewerWidth = _v1.a;
					var viewerHeight = _v1.b;
					var clearCanvas = A3(
						$joakin$elm_canvas$Canvas$clear,
						_Utils_Tuple2(0, 0),
						viewerWidth,
						viewerHeight);
					var canvasViewer = A3(
						$joakin$elm_canvas$Canvas$toHtml,
						_Utils_Tuple2(
							$elm$core$Basics$round(viewerWidth),
							$elm$core$Basics$round(viewerHeight)),
						_List_fromArray(
							[
								$elm$html$Html$Attributes$id('theCanvas'),
								A2($elm$html$Html$Attributes$style, 'display', 'block'),
								$mpizenberg$elm_pointer_events$Html$Events$Extra$Wheel$onWheel(
								$author$project$Main$zoomWheelMsg(registeredViewer)),
								A2(
								$author$project$Main$msgOn,
								'pointerdown',
								A2(
									$elm$json$Json$Decode$map,
									A2($elm$core$Basics$composeL, $author$project$Main$PointerMsg, $author$project$Main$PointerDownRaw),
									$elm$json$Json$Decode$value)),
								$mpizenberg$elm_pointer_events$Html$Events$Extra$Pointer$onUp(
								function (_v2) {
									return $author$project$Main$PointerMsg($author$project$Main$PointerUp);
								}),
								A2($elm$html$Html$Attributes$style, 'touch-action', 'none'),
								A2(
								$elm$html$Html$Events$preventDefaultOn,
								'pointermove',
								A2(
									$elm$json$Json$Decode$map,
									function (coords) {
										return _Utils_Tuple2(
											$author$project$Main$PointerMsg(
												$author$project$Main$PointerMove(coords)),
											true);
									},
									A3(
										$elm$json$Json$Decode$map2,
										$elm$core$Tuple$pair,
										A2($elm$json$Json$Decode$field, 'clientX', $elm$json$Json$Decode$float),
										A2($elm$json$Json$Decode$field, 'clientY', $elm$json$Json$Decode$float))))
							]),
						_List_fromArray(
							[clearCanvas, renderedImage]));
					return A2(
						$mdgriffith$elm_ui$Element$el,
						_List_fromArray(
							[
								$mdgriffith$elm_ui$Element$inFront(buttonsRow),
								$mdgriffith$elm_ui$Element$inFront(
								A2(
									$mdgriffith$elm_ui$Element$row,
									_List_fromArray(
										[
											$mdgriffith$elm_ui$Element$alignBottom,
											$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill)
										]),
									_List_fromArray(
										[
											A4(clickButton, $mdgriffith$elm_ui$Element$alignLeft, $author$project$Main$ClickPreviousImage, 'Previous image', $author$project$Icon$arrowLeftCircle),
											A4(clickButton, $mdgriffith$elm_ui$Element$alignRight, $author$project$Main$ClickNextImage, 'Next image', $author$project$Icon$arrowRightCircle)
										]))),
								$mdgriffith$elm_ui$Element$clip,
								$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$fill)
							]),
						$mdgriffith$elm_ui$Element$html(canvasViewer));
				}
			}()
			]));
};
var $author$project$Main$viewElmUI = function (model) {
	var _v0 = model.state;
	switch (_v0.$) {
		case 'Home':
			var draggingState = _v0.a;
			return A3($author$project$Main$viewHome, draggingState, model.loadImages, model.loadLights);
		case 'Loading':
			var loadData = _v0.a;
			return $author$project$Main$viewLoading(loadData);
		case 'LoadingError':
			return $author$project$Main$viewLoadingError(model);
		case 'ViewImgs':
			var images = _v0.a.images;
			return A2($author$project$Main$viewImgs, model, images);
		case 'Config':
			return $author$project$Main$viewConfig(model);
		case 'Registration':
			return $author$project$Main$viewRegistration(model);
		default:
			return $author$project$Main$viewLogs(model);
	}
};
var $author$project$Main$view = function (model) {
	return A2(
		$mdgriffith$elm_ui$Element$layout,
		_List_fromArray(
			[$author$project$Style$font, $mdgriffith$elm_ui$Element$clip]),
		$author$project$Main$viewElmUI(model));
};
var $author$project$Main$main = $elm$browser$Browser$element(
	{init: $author$project$Main$init, subscriptions: $author$project$Main$subscriptions, update: $author$project$Main$update, view: $author$project$Main$view});
_Platform_export({'Main':{'init':$author$project$Main$main(
	A2(
		$elm$json$Json$Decode$andThen,
		function (width) {
			return A2(
				$elm$json$Json$Decode$andThen,
				function (height) {
					return $elm$json$Json$Decode$succeed(
						{height: height, width: width});
				},
				A2($elm$json$Json$Decode$field, 'height', $elm$json$Json$Decode$float));
		},
		A2($elm$json$Json$Decode$field, 'width', $elm$json$Json$Decode$float)))({"versions":{"elm":"0.19.1"},"types":{"message":"Main.Msg","aliases":{"Main.Crop":{"args":[],"type":"{ left : Basics.Int, top : Basics.Int, right : Basics.Int, bottom : Basics.Int }"},"Main.Parameters":{"args":[],"type":"{ crop : Maybe.Maybe Main.Crop, maxIterations : Basics.Int, z_mean : Basics.Float, lights : Maybe.Maybe (List.List Main.Point3d), convergenceThreshold : Basics.Float, maxVerbosity : Basics.Int }"},"Main.Point3d":{"args":[],"type":"{ x : Basics.Float, y : Basics.Float, z : Basics.Float }"},"Device.Size":{"args":[],"type":"{ width : Basics.Float, height : Basics.Float }"},"Browser.Dom.Viewport":{"args":[],"type":"{ scene : { width : Basics.Float, height : Basics.Float }, viewport : { x : Basics.Float, y : Basics.Float, width : Basics.Float, height : Basics.Float } }"},"FileValue.File":{"args":[],"type":"{ value : Json.Decode.Value, name : String.String, mime : String.String, size : Basics.Int, lastModified : Time.Posix }"},"Main.Image":{"args":[],"type":"{ id : String.String, texture : Canvas.Texture.Texture, width : Basics.Int, height : Basics.Int }"},"Canvas.Texture.Texture":{"args":[],"type":"Canvas.Internal.Texture.Texture"},"Json.Decode.Value":{"args":[],"type":"Json.Encode.Value"},"Canvas.Internal.Texture.Image":{"args":[],"type":"{ json : Json.Decode.Value, width : Basics.Float, height : Basics.Float }"},"Canvas.Internal.Texture.Sprite":{"args":[],"type":"{ x : Basics.Float, y : Basics.Float, width : Basics.Float, height : Basics.Float }"}},"unions":{"Main.Msg":{"args":[],"tags":{"NoMsg":[],"WindowResizes":["Device.Size"],"DragDropImagesMsg":["Main.DragDropImagesMsg"],"DragDropLightsMsg":["Main.DragDropLightsMsg"],"LoadExampleImages":["List.List String.String"],"ImageDecoded":["{ id : String.String, img : Json.Encode.Value }"],"KeyDown":["Keyboard.RawKey"],"ClickPreviousImage":[],"ClickNextImage":[],"ZoomMsg":["Main.ZoomMsg"],"ViewImgMsg":["Main.ViewImgMsg"],"ParamsMsg":["Main.ParamsMsg"],"ParamsInfoMsg":["Main.ParamsInfoMsg"],"NavigationMsg":["Main.NavigationMsg"],"GetScrollPosThenNavigationMsg":["Main.NavigationMsg"],"ReturnHome":[],"PointerMsg":["Main.PointerMsg"],"RunAlgorithm":["Main.Parameters"],"StopRunning":[],"UpdateRunStep":["{ step : String.String, progress : Maybe.Maybe Basics.Int }"],"Log":["{ lvl : Basics.Int, content : String.String }"],"ClearLogs":[],"GotScrollPos":["Result.Result Browser.Dom.Error Browser.Dom.Viewport"],"VerbosityChange":["Basics.Float"],"ToggleAutoScroll":["Basics.Bool"],"ReceiveCroppedImages":["List.List { id : String.String, img : Json.Encode.Value }"],"ReceiveCsv":["String.String"],"SaveRegisteredImages":[],"ScrollLogsToEnd":[]}},"Basics.Bool":{"args":[],"tags":{"True":[],"False":[]}},"Main.DragDropImagesMsg":{"args":[],"tags":{"DragOverImages":[],"DropImages":["FileValue.File","List.List FileValue.File"],"DragLeaveImages":[]}},"Main.DragDropLightsMsg":{"args":[],"tags":{"DragOverLights":[],"DropLights":["FileValue.File"],"DragLeaveLights":[]}},"Browser.Dom.Error":{"args":[],"tags":{"NotFound":["String.String"]}},"Basics.Float":{"args":[],"tags":{"Float":[]}},"Basics.Int":{"args":[],"tags":{"Int":[]}},"List.List":{"args":["a"],"tags":{}},"Maybe.Maybe":{"args":["a"],"tags":{"Just":["a"],"Nothing":[]}},"Main.NavigationMsg":{"args":[],"tags":{"GoToPageImages":[],"GoToPageConfig":[],"GoToPageRegistration":[],"GoToPageLogs":[]}},"Main.ParamsInfoMsg":{"args":[],"tags":{"ToggleInfoCrop":["Basics.Bool"],"ToggleInfoMaxIterations":["Basics.Bool"],"ToggleInfoMaxVerbosity":["Basics.Bool"],"ToggleInfoZMean":["Basics.Bool"],"ToggleInfoConvergenceThreshold":["Basics.Bool"]}},"Main.ParamsMsg":{"args":[],"tags":{"ChangeMaxIter":["String.String"],"ChangeMaxVerbosity":["String.String"],"ChangeConvergenceThreshold":["String.String"],"ChangeZMean":["String.String"],"ToggleCrop":["Basics.Bool"],"ChangeCropLeft":["String.String"],"ChangeCropTop":["String.String"],"ChangeCropRight":["String.String"],"ChangeCropBottom":["String.String"]}},"Main.PointerMsg":{"args":[],"tags":{"PointerDownRaw":["Json.Encode.Value"],"PointerMove":["( Basics.Float, Basics.Float )"],"PointerUp":[]}},"Keyboard.RawKey":{"args":[],"tags":{"RawKey":["String.String"]}},"Result.Result":{"args":["error","value"],"tags":{"Ok":["value"],"Err":["error"]}},"String.String":{"args":[],"tags":{"String":[]}},"Json.Encode.Value":{"args":[],"tags":{"Value":[]}},"Main.ViewImgMsg":{"args":[],"tags":{"SelectMovingMode":[],"SelectDrawingMode":[],"CropCurrentFrame":[]}},"Main.ZoomMsg":{"args":[],"tags":{"ZoomFit":["Main.Image"],"ZoomIn":[],"ZoomOut":[],"ZoomToward":["( Basics.Float, Basics.Float )"],"ZoomAwayFrom":["( Basics.Float, Basics.Float )"]}},"Time.Posix":{"args":[],"tags":{"Posix":["Basics.Int"]}},"Canvas.Internal.Texture.Texture":{"args":[],"tags":{"TImage":["Canvas.Internal.Texture.Image"],"TSprite":["Canvas.Internal.Texture.Sprite","Canvas.Internal.Texture.Image"]}}}}})}});}(this));