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

var _Debug_log = F2(function(tag, value)
{
	return value;
});

var _Debug_log_UNUSED = F2(function(tag, value)
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

function _Debug_toString(value)
{
	return '<internals>';
}

function _Debug_toString_UNUSED(value)
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


function _Debug_crash(identifier)
{
	throw new Error('https://github.com/elm/core/blob/1.0.0/hints/' + identifier + '.md');
}


function _Debug_crash_UNUSED(identifier, fact1, fact2, fact3, fact4)
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
	if (region.eu.cg === region.e2.cg)
	{
		return 'on line ' + region.eu.cg;
	}
	return 'on lines ' + region.eu.cg + ' through ' + region.e2.cg;
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

	/**_UNUSED/
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

	/**/
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

	/**_UNUSED/
	if (x instanceof String)
	{
		var a = x.valueOf();
		var b = y.valueOf();
		return a === b ? 0 : a < b ? -1 : 1;
	}
	//*/

	/**/
	if (typeof x.$ === 'undefined')
	//*/
	/**_UNUSED/
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

var _Utils_Tuple0 = 0;
var _Utils_Tuple0_UNUSED = { $: '#0' };

function _Utils_Tuple2(a, b) { return { a: a, b: b }; }
function _Utils_Tuple2_UNUSED(a, b) { return { $: '#2', a: a, b: b }; }

function _Utils_Tuple3(a, b, c) { return { a: a, b: b, c: c }; }
function _Utils_Tuple3_UNUSED(a, b, c) { return { $: '#3', a: a, b: b, c: c }; }

function _Utils_chr(c) { return c; }
function _Utils_chr_UNUSED(c) { return new String(c); }


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



var _List_Nil = { $: 0 };
var _List_Nil_UNUSED = { $: '[]' };

function _List_Cons(hd, tl) { return { $: 1, a: hd, b: tl }; }
function _List_Cons_UNUSED(hd, tl) { return { $: '::', a: hd, b: tl }; }


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



/**_UNUSED/
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

function _Json_wrap_UNUSED(value) { return { $: 0, a: value }; }
function _Json_unwrap_UNUSED(value) { return value.a; }

function _Json_wrap(value) { return value; }
function _Json_unwrap(value) { return value; }

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
		impl.h9,
		impl.jB,
		impl.jc,
		function() { return function() {} }
	);
});



// INITIALIZE A PROGRAM


function _Platform_initialize(flagDecoder, args, init, update, subscriptions, stepperBuilder)
{
	var result = A2(_Json_run, flagDecoder, _Json_wrap(args ? args['flags'] : undefined));
	$elm$core$Result$isOk(result) || _Debug_crash(2 /**_UNUSED/, _Json_errorToString(result.a) /**/);
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


function _Platform_export(exports)
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


function _Platform_export_UNUSED(exports)
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

	/**/
	var node = args['node'];
	//*/
	/**_UNUSED/
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

function _VirtualDom_noJavaScriptUri(value)
{
	return /^javascript:/i.test(value.replace(/\s/g,'')) ? '' : value;
}

function _VirtualDom_noJavaScriptUri_UNUSED(value)
{
	return /^javascript:/i.test(value.replace(/\s/g,''))
		? 'javascript:alert("This is an XSS vector. Please use ports or web components instead.")'
		: value;
}

function _VirtualDom_noJavaScriptOrHtmlUri(value)
{
	return /^\s*(javascript:|data:text\/html)/i.test(value) ? '' : value;
}

function _VirtualDom_noJavaScriptOrHtmlUri_UNUSED(value)
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
		ir: func(record.ir),
		i8: record.i8,
		iQ: record.iQ
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
		var message = !tag ? value : tag < 3 ? value.a : value.ir;
		var stopPropagation = tag == 1 ? value.b : tag == 3 && value.i8;
		var currentEventNode = (
			stopPropagation && event.stopPropagation(),
			(tag == 2 ? value.b : tag == 3 && value.iQ) && event.preventDefault(),
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




// ELEMENT


var _Debugger_element;

var _Browser_element = _Debugger_element || F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.h9,
		impl.jB,
		impl.jc,
		function(sendToApp, initialModel) {
			var view = impl.jF;
			/**/
			var domNode = args['node'];
			//*/
			/**_UNUSED/
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
		impl.h9,
		impl.jB,
		impl.jc,
		function(sendToApp, initialModel) {
			var divertHrefToApp = impl.et && impl.et(sendToApp)
			var view = impl.jF;
			var title = _VirtualDom_doc.title;
			var bodyNode = _VirtualDom_doc.body;
			var currNode = _VirtualDom_virtualize(bodyNode);
			return _Browser_makeAnimator(initialModel, function(model)
			{
				_VirtualDom_divertHrefToApp = divertHrefToApp;
				var doc = view(model);
				var nextNode = _VirtualDom_node('body')(_List_Nil)(doc.g7);
				var patches = _VirtualDom_diff(currNode, nextNode);
				bodyNode = _VirtualDom_applyPatches(bodyNode, currNode, patches, sendToApp);
				currNode = nextNode;
				_VirtualDom_divertHrefToApp = 0;
				(title !== doc.jw) && (_VirtualDom_doc.title = title = doc.jw);
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
	var onUrlChange = impl.iF;
	var onUrlRequest = impl.iG;
	var key = function() { key.a(onUrlChange(_Browser_getUrl())); };

	return _Browser_document({
		et: function(sendToApp)
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
							&& curr.gk === next.gk
							&& curr.fc === next.fc
							&& curr.gf.a === next.gf.a
						)
							? $elm$browser$Browser$Internal(next)
							: $elm$browser$Browser$External(href)
					));
				}
			});
		},
		h9: function(flags)
		{
			return A3(impl.h9, flags, _Browser_getUrl(), key);
		},
		jF: impl.jF,
		jB: impl.jB,
		jc: impl.jc
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
		? { h1: 'hidden', hk: 'visibilitychange' }
		:
	(typeof _VirtualDom_doc.mozHidden !== 'undefined')
		? { h1: 'mozHidden', hk: 'mozvisibilitychange' }
		:
	(typeof _VirtualDom_doc.msHidden !== 'undefined')
		? { h1: 'msHidden', hk: 'msvisibilitychange' }
		:
	(typeof _VirtualDom_doc.webkitHidden !== 'undefined')
		? { h1: 'webkitHidden', hk: 'webkitvisibilitychange' }
		: { h1: 'hidden', hk: 'visibilitychange' };
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
		gq: _Browser_getScene(),
		jH: {
			eG: _Browser_window.pageXOffset,
			dx: _Browser_window.pageYOffset,
			eB: _Browser_doc.documentElement.clientWidth,
			dO: _Browser_doc.documentElement.clientHeight
		}
	};
}

function _Browser_getScene()
{
	var body = _Browser_doc.body;
	var elem = _Browser_doc.documentElement;
	return {
		eB: Math.max(body.scrollWidth, body.offsetWidth, elem.scrollWidth, elem.offsetWidth, elem.clientWidth),
		dO: Math.max(body.scrollHeight, body.offsetHeight, elem.scrollHeight, elem.offsetHeight, elem.clientHeight)
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
			gq: {
				eB: node.scrollWidth,
				dO: node.scrollHeight
			},
			jH: {
				eG: node.scrollLeft,
				dx: node.scrollTop,
				eB: node.clientWidth,
				dO: node.clientHeight
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
			gq: _Browser_getScene(),
			jH: {
				eG: x,
				dx: y,
				eB: _Browser_doc.documentElement.clientWidth,
				dO: _Browser_doc.documentElement.clientHeight
			},
			hJ: {
				eG: x + rect.left,
				dx: y + rect.top,
				eB: rect.width,
				dO: rect.height
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


// eslint-disable-next-line no-unused-vars
var _Texture_load = F6(function (magnify, mininify, horizontalWrap, verticalWrap, flipY, url) {
  var isMipmap = mininify !== 9728 && mininify !== 9729;
  return _Scheduler_binding(function (callback) {
    var img = new Image();
    function createTexture(gl) {
      var texture = gl.createTexture();
      gl.bindTexture(gl.TEXTURE_2D, texture);
      gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, flipY);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, img);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, magnify);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, mininify);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, horizontalWrap);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, verticalWrap);
      if (isMipmap) {
        gl.generateMipmap(gl.TEXTURE_2D);
      }
      gl.bindTexture(gl.TEXTURE_2D, null);
      return texture;
    }
    img.onload = function () {
      var width = img.width;
      var height = img.height;
      var widthPowerOfTwo = (width & (width - 1)) === 0;
      var heightPowerOfTwo = (height & (height - 1)) === 0;
      var isSizeValid = (widthPowerOfTwo && heightPowerOfTwo) || (
        !isMipmap
        && horizontalWrap === 33071 // clamp to edge
        && verticalWrap === 33071
      );
      if (isSizeValid) {
        callback(_Scheduler_succeed({
          $: 0,
          ht: createTexture,
          a: width,
          b: height
        }));
      } else {
        callback(_Scheduler_fail(A2(
          $elm_explorations$webgl$WebGL$Texture$SizeError,
          width,
          height
        )));
      }
    };
    img.onerror = function () {
      callback(_Scheduler_fail($elm_explorations$webgl$WebGL$Texture$LoadError));
    };
    if (url.slice(0, 5) !== 'data:') {
      img.crossOrigin = 'Anonymous';
    }
    img.src = url;
  });
});

// eslint-disable-next-line no-unused-vars
var _Texture_size = function (texture) {
  return _Utils_Tuple2(texture.a, texture.b);
};



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



/*
 * Copyright (c) 2010 Mozilla Corporation
 * Copyright (c) 2010 Vladimir Vukicevic
 * Copyright (c) 2013 John Mayer
 * Copyright (c) 2018 Andrey Kuzmin
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */

// Vector2

var _MJS_v2 = F2(function(x, y) {
    return new Float64Array([x, y]);
});

var _MJS_v2getX = function(a) {
    return a[0];
};

var _MJS_v2getY = function(a) {
    return a[1];
};

var _MJS_v2setX = F2(function(x, a) {
    return new Float64Array([x, a[1]]);
});

var _MJS_v2setY = F2(function(y, a) {
    return new Float64Array([a[0], y]);
});

var _MJS_v2toRecord = function(a) {
    return { eG: a[0], dx: a[1] };
};

var _MJS_v2fromRecord = function(r) {
    return new Float64Array([r.eG, r.dx]);
};

var _MJS_v2add = F2(function(a, b) {
    var r = new Float64Array(2);
    r[0] = a[0] + b[0];
    r[1] = a[1] + b[1];
    return r;
});

var _MJS_v2sub = F2(function(a, b) {
    var r = new Float64Array(2);
    r[0] = a[0] - b[0];
    r[1] = a[1] - b[1];
    return r;
});

var _MJS_v2negate = function(a) {
    var r = new Float64Array(2);
    r[0] = -a[0];
    r[1] = -a[1];
    return r;
};

var _MJS_v2direction = F2(function(a, b) {
    var r = new Float64Array(2);
    r[0] = a[0] - b[0];
    r[1] = a[1] - b[1];
    var im = 1.0 / _MJS_v2lengthLocal(r);
    r[0] = r[0] * im;
    r[1] = r[1] * im;
    return r;
});

function _MJS_v2lengthLocal(a) {
    return Math.sqrt(a[0] * a[0] + a[1] * a[1]);
}
var _MJS_v2length = _MJS_v2lengthLocal;

var _MJS_v2lengthSquared = function(a) {
    return a[0] * a[0] + a[1] * a[1];
};

var _MJS_v2distance = F2(function(a, b) {
    var dx = a[0] - b[0];
    var dy = a[1] - b[1];
    return Math.sqrt(dx * dx + dy * dy);
});

var _MJS_v2distanceSquared = F2(function(a, b) {
    var dx = a[0] - b[0];
    var dy = a[1] - b[1];
    return dx * dx + dy * dy;
});

var _MJS_v2normalize = function(a) {
    var r = new Float64Array(2);
    var im = 1.0 / _MJS_v2lengthLocal(a);
    r[0] = a[0] * im;
    r[1] = a[1] * im;
    return r;
};

var _MJS_v2scale = F2(function(k, a) {
    var r = new Float64Array(2);
    r[0] = a[0] * k;
    r[1] = a[1] * k;
    return r;
});

var _MJS_v2dot = F2(function(a, b) {
    return a[0] * b[0] + a[1] * b[1];
});

// Vector3

var _MJS_v3temp1Local = new Float64Array(3);
var _MJS_v3temp2Local = new Float64Array(3);
var _MJS_v3temp3Local = new Float64Array(3);

var _MJS_v3 = F3(function(x, y, z) {
    return new Float64Array([x, y, z]);
});

var _MJS_v3getX = function(a) {
    return a[0];
};

var _MJS_v3getY = function(a) {
    return a[1];
};

var _MJS_v3getZ = function(a) {
    return a[2];
};

var _MJS_v3setX = F2(function(x, a) {
    return new Float64Array([x, a[1], a[2]]);
});

var _MJS_v3setY = F2(function(y, a) {
    return new Float64Array([a[0], y, a[2]]);
});

var _MJS_v3setZ = F2(function(z, a) {
    return new Float64Array([a[0], a[1], z]);
});

var _MJS_v3toRecord = function(a) {
    return { eG: a[0], dx: a[1], eJ: a[2] };
};

var _MJS_v3fromRecord = function(r) {
    return new Float64Array([r.eG, r.dx, r.eJ]);
};

var _MJS_v3add = F2(function(a, b) {
    var r = new Float64Array(3);
    r[0] = a[0] + b[0];
    r[1] = a[1] + b[1];
    r[2] = a[2] + b[2];
    return r;
});

function _MJS_v3subLocal(a, b, r) {
    if (r === undefined) {
        r = new Float64Array(3);
    }
    r[0] = a[0] - b[0];
    r[1] = a[1] - b[1];
    r[2] = a[2] - b[2];
    return r;
}
var _MJS_v3sub = F2(_MJS_v3subLocal);

var _MJS_v3negate = function(a) {
    var r = new Float64Array(3);
    r[0] = -a[0];
    r[1] = -a[1];
    r[2] = -a[2];
    return r;
};

function _MJS_v3directionLocal(a, b, r) {
    if (r === undefined) {
        r = new Float64Array(3);
    }
    return _MJS_v3normalizeLocal(_MJS_v3subLocal(a, b, r), r);
}
var _MJS_v3direction = F2(_MJS_v3directionLocal);

function _MJS_v3lengthLocal(a) {
    return Math.sqrt(a[0] * a[0] + a[1] * a[1] + a[2] * a[2]);
}
var _MJS_v3length = _MJS_v3lengthLocal;

var _MJS_v3lengthSquared = function(a) {
    return a[0] * a[0] + a[1] * a[1] + a[2] * a[2];
};

var _MJS_v3distance = F2(function(a, b) {
    var dx = a[0] - b[0];
    var dy = a[1] - b[1];
    var dz = a[2] - b[2];
    return Math.sqrt(dx * dx + dy * dy + dz * dz);
});

var _MJS_v3distanceSquared = F2(function(a, b) {
    var dx = a[0] - b[0];
    var dy = a[1] - b[1];
    var dz = a[2] - b[2];
    return dx * dx + dy * dy + dz * dz;
});

function _MJS_v3normalizeLocal(a, r) {
    if (r === undefined) {
        r = new Float64Array(3);
    }
    var im = 1.0 / _MJS_v3lengthLocal(a);
    r[0] = a[0] * im;
    r[1] = a[1] * im;
    r[2] = a[2] * im;
    return r;
}
var _MJS_v3normalize = _MJS_v3normalizeLocal;

var _MJS_v3scale = F2(function(k, a) {
    return new Float64Array([a[0] * k, a[1] * k, a[2] * k]);
});

var _MJS_v3dotLocal = function(a, b) {
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
};
var _MJS_v3dot = F2(_MJS_v3dotLocal);

function _MJS_v3crossLocal(a, b, r) {
    if (r === undefined) {
        r = new Float64Array(3);
    }
    r[0] = a[1] * b[2] - a[2] * b[1];
    r[1] = a[2] * b[0] - a[0] * b[2];
    r[2] = a[0] * b[1] - a[1] * b[0];
    return r;
}
var _MJS_v3cross = F2(_MJS_v3crossLocal);

var _MJS_v3mul4x4 = F2(function(m, v) {
    var w;
    var tmp = _MJS_v3temp1Local;
    var r = new Float64Array(3);

    tmp[0] = m[3];
    tmp[1] = m[7];
    tmp[2] = m[11];
    w = _MJS_v3dotLocal(v, tmp) + m[15];
    tmp[0] = m[0];
    tmp[1] = m[4];
    tmp[2] = m[8];
    r[0] = (_MJS_v3dotLocal(v, tmp) + m[12]) / w;
    tmp[0] = m[1];
    tmp[1] = m[5];
    tmp[2] = m[9];
    r[1] = (_MJS_v3dotLocal(v, tmp) + m[13]) / w;
    tmp[0] = m[2];
    tmp[1] = m[6];
    tmp[2] = m[10];
    r[2] = (_MJS_v3dotLocal(v, tmp) + m[14]) / w;
    return r;
});

// Vector4

var _MJS_v4 = F4(function(x, y, z, w) {
    return new Float64Array([x, y, z, w]);
});

var _MJS_v4getX = function(a) {
    return a[0];
};

var _MJS_v4getY = function(a) {
    return a[1];
};

var _MJS_v4getZ = function(a) {
    return a[2];
};

var _MJS_v4getW = function(a) {
    return a[3];
};

var _MJS_v4setX = F2(function(x, a) {
    return new Float64Array([x, a[1], a[2], a[3]]);
});

var _MJS_v4setY = F2(function(y, a) {
    return new Float64Array([a[0], y, a[2], a[3]]);
});

var _MJS_v4setZ = F2(function(z, a) {
    return new Float64Array([a[0], a[1], z, a[3]]);
});

var _MJS_v4setW = F2(function(w, a) {
    return new Float64Array([a[0], a[1], a[2], w]);
});

var _MJS_v4toRecord = function(a) {
    return { eG: a[0], dx: a[1], eJ: a[2], gM: a[3] };
};

var _MJS_v4fromRecord = function(r) {
    return new Float64Array([r.eG, r.dx, r.eJ, r.gM]);
};

var _MJS_v4add = F2(function(a, b) {
    var r = new Float64Array(4);
    r[0] = a[0] + b[0];
    r[1] = a[1] + b[1];
    r[2] = a[2] + b[2];
    r[3] = a[3] + b[3];
    return r;
});

var _MJS_v4sub = F2(function(a, b) {
    var r = new Float64Array(4);
    r[0] = a[0] - b[0];
    r[1] = a[1] - b[1];
    r[2] = a[2] - b[2];
    r[3] = a[3] - b[3];
    return r;
});

var _MJS_v4negate = function(a) {
    var r = new Float64Array(4);
    r[0] = -a[0];
    r[1] = -a[1];
    r[2] = -a[2];
    r[3] = -a[3];
    return r;
};

var _MJS_v4direction = F2(function(a, b) {
    var r = new Float64Array(4);
    r[0] = a[0] - b[0];
    r[1] = a[1] - b[1];
    r[2] = a[2] - b[2];
    r[3] = a[3] - b[3];
    var im = 1.0 / _MJS_v4lengthLocal(r);
    r[0] = r[0] * im;
    r[1] = r[1] * im;
    r[2] = r[2] * im;
    r[3] = r[3] * im;
    return r;
});

function _MJS_v4lengthLocal(a) {
    return Math.sqrt(a[0] * a[0] + a[1] * a[1] + a[2] * a[2] + a[3] * a[3]);
}
var _MJS_v4length = _MJS_v4lengthLocal;

var _MJS_v4lengthSquared = function(a) {
    return a[0] * a[0] + a[1] * a[1] + a[2] * a[2] + a[3] * a[3];
};

var _MJS_v4distance = F2(function(a, b) {
    var dx = a[0] - b[0];
    var dy = a[1] - b[1];
    var dz = a[2] - b[2];
    var dw = a[3] - b[3];
    return Math.sqrt(dx * dx + dy * dy + dz * dz + dw * dw);
});

var _MJS_v4distanceSquared = F2(function(a, b) {
    var dx = a[0] - b[0];
    var dy = a[1] - b[1];
    var dz = a[2] - b[2];
    var dw = a[3] - b[3];
    return dx * dx + dy * dy + dz * dz + dw * dw;
});

var _MJS_v4normalize = function(a) {
    var r = new Float64Array(4);
    var im = 1.0 / _MJS_v4lengthLocal(a);
    r[0] = a[0] * im;
    r[1] = a[1] * im;
    r[2] = a[2] * im;
    r[3] = a[3] * im;
    return r;
};

var _MJS_v4scale = F2(function(k, a) {
    var r = new Float64Array(4);
    r[0] = a[0] * k;
    r[1] = a[1] * k;
    r[2] = a[2] * k;
    r[3] = a[3] * k;
    return r;
});

var _MJS_v4dot = F2(function(a, b) {
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3];
});

// Matrix4

var _MJS_m4x4temp1Local = new Float64Array(16);
var _MJS_m4x4temp2Local = new Float64Array(16);

var _MJS_m4x4identity = new Float64Array([
    1.0, 0.0, 0.0, 0.0,
    0.0, 1.0, 0.0, 0.0,
    0.0, 0.0, 1.0, 0.0,
    0.0, 0.0, 0.0, 1.0
]);

var _MJS_m4x4fromRecord = function(r) {
    var m = new Float64Array(16);
    m[0] = r.fw;
    m[1] = r.fA;
    m[2] = r.fE;
    m[3] = r.fI;
    m[4] = r.fx;
    m[5] = r.fB;
    m[6] = r.fF;
    m[7] = r.fJ;
    m[8] = r.fy;
    m[9] = r.fC;
    m[10] = r.fG;
    m[11] = r.fK;
    m[12] = r.fz;
    m[13] = r.fD;
    m[14] = r.fH;
    m[15] = r.fL;
    return m;
};

var _MJS_m4x4toRecord = function(m) {
    return {
        fw: m[0], fA: m[1], fE: m[2], fI: m[3],
        fx: m[4], fB: m[5], fF: m[6], fJ: m[7],
        fy: m[8], fC: m[9], fG: m[10], fK: m[11],
        fz: m[12], fD: m[13], fH: m[14], fL: m[15]
    };
};

var _MJS_m4x4inverse = function(m) {
    var r = new Float64Array(16);

    r[0] = m[5] * m[10] * m[15] - m[5] * m[11] * m[14] - m[9] * m[6] * m[15] +
        m[9] * m[7] * m[14] + m[13] * m[6] * m[11] - m[13] * m[7] * m[10];
    r[4] = -m[4] * m[10] * m[15] + m[4] * m[11] * m[14] + m[8] * m[6] * m[15] -
        m[8] * m[7] * m[14] - m[12] * m[6] * m[11] + m[12] * m[7] * m[10];
    r[8] = m[4] * m[9] * m[15] - m[4] * m[11] * m[13] - m[8] * m[5] * m[15] +
        m[8] * m[7] * m[13] + m[12] * m[5] * m[11] - m[12] * m[7] * m[9];
    r[12] = -m[4] * m[9] * m[14] + m[4] * m[10] * m[13] + m[8] * m[5] * m[14] -
        m[8] * m[6] * m[13] - m[12] * m[5] * m[10] + m[12] * m[6] * m[9];
    r[1] = -m[1] * m[10] * m[15] + m[1] * m[11] * m[14] + m[9] * m[2] * m[15] -
        m[9] * m[3] * m[14] - m[13] * m[2] * m[11] + m[13] * m[3] * m[10];
    r[5] = m[0] * m[10] * m[15] - m[0] * m[11] * m[14] - m[8] * m[2] * m[15] +
        m[8] * m[3] * m[14] + m[12] * m[2] * m[11] - m[12] * m[3] * m[10];
    r[9] = -m[0] * m[9] * m[15] + m[0] * m[11] * m[13] + m[8] * m[1] * m[15] -
        m[8] * m[3] * m[13] - m[12] * m[1] * m[11] + m[12] * m[3] * m[9];
    r[13] = m[0] * m[9] * m[14] - m[0] * m[10] * m[13] - m[8] * m[1] * m[14] +
        m[8] * m[2] * m[13] + m[12] * m[1] * m[10] - m[12] * m[2] * m[9];
    r[2] = m[1] * m[6] * m[15] - m[1] * m[7] * m[14] - m[5] * m[2] * m[15] +
        m[5] * m[3] * m[14] + m[13] * m[2] * m[7] - m[13] * m[3] * m[6];
    r[6] = -m[0] * m[6] * m[15] + m[0] * m[7] * m[14] + m[4] * m[2] * m[15] -
        m[4] * m[3] * m[14] - m[12] * m[2] * m[7] + m[12] * m[3] * m[6];
    r[10] = m[0] * m[5] * m[15] - m[0] * m[7] * m[13] - m[4] * m[1] * m[15] +
        m[4] * m[3] * m[13] + m[12] * m[1] * m[7] - m[12] * m[3] * m[5];
    r[14] = -m[0] * m[5] * m[14] + m[0] * m[6] * m[13] + m[4] * m[1] * m[14] -
        m[4] * m[2] * m[13] - m[12] * m[1] * m[6] + m[12] * m[2] * m[5];
    r[3] = -m[1] * m[6] * m[11] + m[1] * m[7] * m[10] + m[5] * m[2] * m[11] -
        m[5] * m[3] * m[10] - m[9] * m[2] * m[7] + m[9] * m[3] * m[6];
    r[7] = m[0] * m[6] * m[11] - m[0] * m[7] * m[10] - m[4] * m[2] * m[11] +
        m[4] * m[3] * m[10] + m[8] * m[2] * m[7] - m[8] * m[3] * m[6];
    r[11] = -m[0] * m[5] * m[11] + m[0] * m[7] * m[9] + m[4] * m[1] * m[11] -
        m[4] * m[3] * m[9] - m[8] * m[1] * m[7] + m[8] * m[3] * m[5];
    r[15] = m[0] * m[5] * m[10] - m[0] * m[6] * m[9] - m[4] * m[1] * m[10] +
        m[4] * m[2] * m[9] + m[8] * m[1] * m[6] - m[8] * m[2] * m[5];

    var det = m[0] * r[0] + m[1] * r[4] + m[2] * r[8] + m[3] * r[12];

    if (det === 0) {
        return $elm$core$Maybe$Nothing;
    }

    det = 1.0 / det;

    for (var i = 0; i < 16; i = i + 1) {
        r[i] = r[i] * det;
    }

    return $elm$core$Maybe$Just(r);
};

var _MJS_m4x4inverseOrthonormal = function(m) {
    var r = _MJS_m4x4transposeLocal(m);
    var t = [m[12], m[13], m[14]];
    r[3] = r[7] = r[11] = 0;
    r[12] = -_MJS_v3dotLocal([r[0], r[4], r[8]], t);
    r[13] = -_MJS_v3dotLocal([r[1], r[5], r[9]], t);
    r[14] = -_MJS_v3dotLocal([r[2], r[6], r[10]], t);
    return r;
};

function _MJS_m4x4makeFrustumLocal(left, right, bottom, top, znear, zfar) {
    var r = new Float64Array(16);

    r[0] = 2 * znear / (right - left);
    r[1] = 0;
    r[2] = 0;
    r[3] = 0;
    r[4] = 0;
    r[5] = 2 * znear / (top - bottom);
    r[6] = 0;
    r[7] = 0;
    r[8] = (right + left) / (right - left);
    r[9] = (top + bottom) / (top - bottom);
    r[10] = -(zfar + znear) / (zfar - znear);
    r[11] = -1;
    r[12] = 0;
    r[13] = 0;
    r[14] = -2 * zfar * znear / (zfar - znear);
    r[15] = 0;

    return r;
}
var _MJS_m4x4makeFrustum = F6(_MJS_m4x4makeFrustumLocal);

var _MJS_m4x4makePerspective = F4(function(fovy, aspect, znear, zfar) {
    var ymax = znear * Math.tan(fovy * Math.PI / 360.0);
    var ymin = -ymax;
    var xmin = ymin * aspect;
    var xmax = ymax * aspect;

    return _MJS_m4x4makeFrustumLocal(xmin, xmax, ymin, ymax, znear, zfar);
});

function _MJS_m4x4makeOrthoLocal(left, right, bottom, top, znear, zfar) {
    var r = new Float64Array(16);

    r[0] = 2 / (right - left);
    r[1] = 0;
    r[2] = 0;
    r[3] = 0;
    r[4] = 0;
    r[5] = 2 / (top - bottom);
    r[6] = 0;
    r[7] = 0;
    r[8] = 0;
    r[9] = 0;
    r[10] = -2 / (zfar - znear);
    r[11] = 0;
    r[12] = -(right + left) / (right - left);
    r[13] = -(top + bottom) / (top - bottom);
    r[14] = -(zfar + znear) / (zfar - znear);
    r[15] = 1;

    return r;
}
var _MJS_m4x4makeOrtho = F6(_MJS_m4x4makeOrthoLocal);

var _MJS_m4x4makeOrtho2D = F4(function(left, right, bottom, top) {
    return _MJS_m4x4makeOrthoLocal(left, right, bottom, top, -1, 1);
});

function _MJS_m4x4mulLocal(a, b) {
    var r = new Float64Array(16);
    var a11 = a[0];
    var a21 = a[1];
    var a31 = a[2];
    var a41 = a[3];
    var a12 = a[4];
    var a22 = a[5];
    var a32 = a[6];
    var a42 = a[7];
    var a13 = a[8];
    var a23 = a[9];
    var a33 = a[10];
    var a43 = a[11];
    var a14 = a[12];
    var a24 = a[13];
    var a34 = a[14];
    var a44 = a[15];
    var b11 = b[0];
    var b21 = b[1];
    var b31 = b[2];
    var b41 = b[3];
    var b12 = b[4];
    var b22 = b[5];
    var b32 = b[6];
    var b42 = b[7];
    var b13 = b[8];
    var b23 = b[9];
    var b33 = b[10];
    var b43 = b[11];
    var b14 = b[12];
    var b24 = b[13];
    var b34 = b[14];
    var b44 = b[15];

    r[0] = a11 * b11 + a12 * b21 + a13 * b31 + a14 * b41;
    r[1] = a21 * b11 + a22 * b21 + a23 * b31 + a24 * b41;
    r[2] = a31 * b11 + a32 * b21 + a33 * b31 + a34 * b41;
    r[3] = a41 * b11 + a42 * b21 + a43 * b31 + a44 * b41;
    r[4] = a11 * b12 + a12 * b22 + a13 * b32 + a14 * b42;
    r[5] = a21 * b12 + a22 * b22 + a23 * b32 + a24 * b42;
    r[6] = a31 * b12 + a32 * b22 + a33 * b32 + a34 * b42;
    r[7] = a41 * b12 + a42 * b22 + a43 * b32 + a44 * b42;
    r[8] = a11 * b13 + a12 * b23 + a13 * b33 + a14 * b43;
    r[9] = a21 * b13 + a22 * b23 + a23 * b33 + a24 * b43;
    r[10] = a31 * b13 + a32 * b23 + a33 * b33 + a34 * b43;
    r[11] = a41 * b13 + a42 * b23 + a43 * b33 + a44 * b43;
    r[12] = a11 * b14 + a12 * b24 + a13 * b34 + a14 * b44;
    r[13] = a21 * b14 + a22 * b24 + a23 * b34 + a24 * b44;
    r[14] = a31 * b14 + a32 * b24 + a33 * b34 + a34 * b44;
    r[15] = a41 * b14 + a42 * b24 + a43 * b34 + a44 * b44;

    return r;
}
var _MJS_m4x4mul = F2(_MJS_m4x4mulLocal);

var _MJS_m4x4mulAffine = F2(function(a, b) {
    var r = new Float64Array(16);
    var a11 = a[0];
    var a21 = a[1];
    var a31 = a[2];
    var a12 = a[4];
    var a22 = a[5];
    var a32 = a[6];
    var a13 = a[8];
    var a23 = a[9];
    var a33 = a[10];
    var a14 = a[12];
    var a24 = a[13];
    var a34 = a[14];

    var b11 = b[0];
    var b21 = b[1];
    var b31 = b[2];
    var b12 = b[4];
    var b22 = b[5];
    var b32 = b[6];
    var b13 = b[8];
    var b23 = b[9];
    var b33 = b[10];
    var b14 = b[12];
    var b24 = b[13];
    var b34 = b[14];

    r[0] = a11 * b11 + a12 * b21 + a13 * b31;
    r[1] = a21 * b11 + a22 * b21 + a23 * b31;
    r[2] = a31 * b11 + a32 * b21 + a33 * b31;
    r[3] = 0;
    r[4] = a11 * b12 + a12 * b22 + a13 * b32;
    r[5] = a21 * b12 + a22 * b22 + a23 * b32;
    r[6] = a31 * b12 + a32 * b22 + a33 * b32;
    r[7] = 0;
    r[8] = a11 * b13 + a12 * b23 + a13 * b33;
    r[9] = a21 * b13 + a22 * b23 + a23 * b33;
    r[10] = a31 * b13 + a32 * b23 + a33 * b33;
    r[11] = 0;
    r[12] = a11 * b14 + a12 * b24 + a13 * b34 + a14;
    r[13] = a21 * b14 + a22 * b24 + a23 * b34 + a24;
    r[14] = a31 * b14 + a32 * b24 + a33 * b34 + a34;
    r[15] = 1;

    return r;
});

var _MJS_m4x4makeRotate = F2(function(angle, axis) {
    var r = new Float64Array(16);
    axis = _MJS_v3normalizeLocal(axis, _MJS_v3temp1Local);
    var x = axis[0];
    var y = axis[1];
    var z = axis[2];
    var c = Math.cos(angle);
    var c1 = 1 - c;
    var s = Math.sin(angle);

    r[0] = x * x * c1 + c;
    r[1] = y * x * c1 + z * s;
    r[2] = z * x * c1 - y * s;
    r[3] = 0;
    r[4] = x * y * c1 - z * s;
    r[5] = y * y * c1 + c;
    r[6] = y * z * c1 + x * s;
    r[7] = 0;
    r[8] = x * z * c1 + y * s;
    r[9] = y * z * c1 - x * s;
    r[10] = z * z * c1 + c;
    r[11] = 0;
    r[12] = 0;
    r[13] = 0;
    r[14] = 0;
    r[15] = 1;

    return r;
});

var _MJS_m4x4rotate = F3(function(angle, axis, m) {
    var r = new Float64Array(16);
    var im = 1.0 / _MJS_v3lengthLocal(axis);
    var x = axis[0] * im;
    var y = axis[1] * im;
    var z = axis[2] * im;
    var c = Math.cos(angle);
    var c1 = 1 - c;
    var s = Math.sin(angle);
    var xs = x * s;
    var ys = y * s;
    var zs = z * s;
    var xyc1 = x * y * c1;
    var xzc1 = x * z * c1;
    var yzc1 = y * z * c1;
    var t11 = x * x * c1 + c;
    var t21 = xyc1 + zs;
    var t31 = xzc1 - ys;
    var t12 = xyc1 - zs;
    var t22 = y * y * c1 + c;
    var t32 = yzc1 + xs;
    var t13 = xzc1 + ys;
    var t23 = yzc1 - xs;
    var t33 = z * z * c1 + c;
    var m11 = m[0], m21 = m[1], m31 = m[2], m41 = m[3];
    var m12 = m[4], m22 = m[5], m32 = m[6], m42 = m[7];
    var m13 = m[8], m23 = m[9], m33 = m[10], m43 = m[11];
    var m14 = m[12], m24 = m[13], m34 = m[14], m44 = m[15];

    r[0] = m11 * t11 + m12 * t21 + m13 * t31;
    r[1] = m21 * t11 + m22 * t21 + m23 * t31;
    r[2] = m31 * t11 + m32 * t21 + m33 * t31;
    r[3] = m41 * t11 + m42 * t21 + m43 * t31;
    r[4] = m11 * t12 + m12 * t22 + m13 * t32;
    r[5] = m21 * t12 + m22 * t22 + m23 * t32;
    r[6] = m31 * t12 + m32 * t22 + m33 * t32;
    r[7] = m41 * t12 + m42 * t22 + m43 * t32;
    r[8] = m11 * t13 + m12 * t23 + m13 * t33;
    r[9] = m21 * t13 + m22 * t23 + m23 * t33;
    r[10] = m31 * t13 + m32 * t23 + m33 * t33;
    r[11] = m41 * t13 + m42 * t23 + m43 * t33;
    r[12] = m14,
    r[13] = m24;
    r[14] = m34;
    r[15] = m44;

    return r;
});

function _MJS_m4x4makeScale3Local(x, y, z) {
    var r = new Float64Array(16);

    r[0] = x;
    r[1] = 0;
    r[2] = 0;
    r[3] = 0;
    r[4] = 0;
    r[5] = y;
    r[6] = 0;
    r[7] = 0;
    r[8] = 0;
    r[9] = 0;
    r[10] = z;
    r[11] = 0;
    r[12] = 0;
    r[13] = 0;
    r[14] = 0;
    r[15] = 1;

    return r;
}
var _MJS_m4x4makeScale3 = F3(_MJS_m4x4makeScale3Local);

var _MJS_m4x4makeScale = function(v) {
    return _MJS_m4x4makeScale3Local(v[0], v[1], v[2]);
};

var _MJS_m4x4scale3 = F4(function(x, y, z, m) {
    var r = new Float64Array(16);

    r[0] = m[0] * x;
    r[1] = m[1] * x;
    r[2] = m[2] * x;
    r[3] = m[3] * x;
    r[4] = m[4] * y;
    r[5] = m[5] * y;
    r[6] = m[6] * y;
    r[7] = m[7] * y;
    r[8] = m[8] * z;
    r[9] = m[9] * z;
    r[10] = m[10] * z;
    r[11] = m[11] * z;
    r[12] = m[12];
    r[13] = m[13];
    r[14] = m[14];
    r[15] = m[15];

    return r;
});

var _MJS_m4x4scale = F2(function(v, m) {
    var r = new Float64Array(16);
    var x = v[0];
    var y = v[1];
    var z = v[2];

    r[0] = m[0] * x;
    r[1] = m[1] * x;
    r[2] = m[2] * x;
    r[3] = m[3] * x;
    r[4] = m[4] * y;
    r[5] = m[5] * y;
    r[6] = m[6] * y;
    r[7] = m[7] * y;
    r[8] = m[8] * z;
    r[9] = m[9] * z;
    r[10] = m[10] * z;
    r[11] = m[11] * z;
    r[12] = m[12];
    r[13] = m[13];
    r[14] = m[14];
    r[15] = m[15];

    return r;
});

function _MJS_m4x4makeTranslate3Local(x, y, z) {
    var r = new Float64Array(16);

    r[0] = 1;
    r[1] = 0;
    r[2] = 0;
    r[3] = 0;
    r[4] = 0;
    r[5] = 1;
    r[6] = 0;
    r[7] = 0;
    r[8] = 0;
    r[9] = 0;
    r[10] = 1;
    r[11] = 0;
    r[12] = x;
    r[13] = y;
    r[14] = z;
    r[15] = 1;

    return r;
}
var _MJS_m4x4makeTranslate3 = F3(_MJS_m4x4makeTranslate3Local);

var _MJS_m4x4makeTranslate = function(v) {
    return _MJS_m4x4makeTranslate3Local(v[0], v[1], v[2]);
};

var _MJS_m4x4translate3 = F4(function(x, y, z, m) {
    var r = new Float64Array(16);
    var m11 = m[0];
    var m21 = m[1];
    var m31 = m[2];
    var m41 = m[3];
    var m12 = m[4];
    var m22 = m[5];
    var m32 = m[6];
    var m42 = m[7];
    var m13 = m[8];
    var m23 = m[9];
    var m33 = m[10];
    var m43 = m[11];

    r[0] = m11;
    r[1] = m21;
    r[2] = m31;
    r[3] = m41;
    r[4] = m12;
    r[5] = m22;
    r[6] = m32;
    r[7] = m42;
    r[8] = m13;
    r[9] = m23;
    r[10] = m33;
    r[11] = m43;
    r[12] = m11 * x + m12 * y + m13 * z + m[12];
    r[13] = m21 * x + m22 * y + m23 * z + m[13];
    r[14] = m31 * x + m32 * y + m33 * z + m[14];
    r[15] = m41 * x + m42 * y + m43 * z + m[15];

    return r;
});

var _MJS_m4x4translate = F2(function(v, m) {
    var r = new Float64Array(16);
    var x = v[0];
    var y = v[1];
    var z = v[2];
    var m11 = m[0];
    var m21 = m[1];
    var m31 = m[2];
    var m41 = m[3];
    var m12 = m[4];
    var m22 = m[5];
    var m32 = m[6];
    var m42 = m[7];
    var m13 = m[8];
    var m23 = m[9];
    var m33 = m[10];
    var m43 = m[11];

    r[0] = m11;
    r[1] = m21;
    r[2] = m31;
    r[3] = m41;
    r[4] = m12;
    r[5] = m22;
    r[6] = m32;
    r[7] = m42;
    r[8] = m13;
    r[9] = m23;
    r[10] = m33;
    r[11] = m43;
    r[12] = m11 * x + m12 * y + m13 * z + m[12];
    r[13] = m21 * x + m22 * y + m23 * z + m[13];
    r[14] = m31 * x + m32 * y + m33 * z + m[14];
    r[15] = m41 * x + m42 * y + m43 * z + m[15];

    return r;
});

var _MJS_m4x4makeLookAt = F3(function(eye, center, up) {
    var z = _MJS_v3directionLocal(eye, center, _MJS_v3temp1Local);
    var x = _MJS_v3normalizeLocal(_MJS_v3crossLocal(up, z, _MJS_v3temp2Local), _MJS_v3temp2Local);
    var y = _MJS_v3normalizeLocal(_MJS_v3crossLocal(z, x, _MJS_v3temp3Local), _MJS_v3temp3Local);
    var tm1 = _MJS_m4x4temp1Local;
    var tm2 = _MJS_m4x4temp2Local;

    tm1[0] = x[0];
    tm1[1] = y[0];
    tm1[2] = z[0];
    tm1[3] = 0;
    tm1[4] = x[1];
    tm1[5] = y[1];
    tm1[6] = z[1];
    tm1[7] = 0;
    tm1[8] = x[2];
    tm1[9] = y[2];
    tm1[10] = z[2];
    tm1[11] = 0;
    tm1[12] = 0;
    tm1[13] = 0;
    tm1[14] = 0;
    tm1[15] = 1;

    tm2[0] = 1; tm2[1] = 0; tm2[2] = 0; tm2[3] = 0;
    tm2[4] = 0; tm2[5] = 1; tm2[6] = 0; tm2[7] = 0;
    tm2[8] = 0; tm2[9] = 0; tm2[10] = 1; tm2[11] = 0;
    tm2[12] = -eye[0]; tm2[13] = -eye[1]; tm2[14] = -eye[2]; tm2[15] = 1;

    return _MJS_m4x4mulLocal(tm1, tm2);
});


function _MJS_m4x4transposeLocal(m) {
    var r = new Float64Array(16);

    r[0] = m[0]; r[1] = m[4]; r[2] = m[8]; r[3] = m[12];
    r[4] = m[1]; r[5] = m[5]; r[6] = m[9]; r[7] = m[13];
    r[8] = m[2]; r[9] = m[6]; r[10] = m[10]; r[11] = m[14];
    r[12] = m[3]; r[13] = m[7]; r[14] = m[11]; r[15] = m[15];

    return r;
}
var _MJS_m4x4transpose = _MJS_m4x4transposeLocal;

var _MJS_m4x4makeBasis = F3(function(vx, vy, vz) {
    var r = new Float64Array(16);

    r[0] = vx[0];
    r[1] = vx[1];
    r[2] = vx[2];
    r[3] = 0;
    r[4] = vy[0];
    r[5] = vy[1];
    r[6] = vy[2];
    r[7] = 0;
    r[8] = vz[0];
    r[9] = vz[1];
    r[10] = vz[2];
    r[11] = 0;
    r[12] = 0;
    r[13] = 0;
    r[14] = 0;
    r[15] = 1;

    return r;
});



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


// CREATE

var _Regex_never = /.^/;

var _Regex_fromStringWith = F2(function(options, string)
{
	var flags = 'g';
	if (options.iv) { flags += 'm'; }
	if (options.hh) { flags += 'i'; }

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


var _WebGL_guid = 0;

function _WebGL_listEach(fn, list) {
  for (; list.b; list = list.b) {
    fn(list.a);
  }
}

function _WebGL_listLength(list) {
  var length = 0;
  for (; list.b; list = list.b) {
    length++;
  }
  return length;
}

var _WebGL_rAF = typeof requestAnimationFrame !== 'undefined' ?
  requestAnimationFrame :
  function (cb) { setTimeout(cb, 1000 / 60); };

// eslint-disable-next-line no-unused-vars
var _WebGL_entity = F5(function (settings, vert, frag, mesh, uniforms) {
  return {
    $: 0,
    a: settings,
    b: vert,
    c: frag,
    d: mesh,
    e: uniforms
  };
});

// eslint-disable-next-line no-unused-vars
var _WebGL_enableBlend = F2(function (cache, setting) {
  var blend = cache.blend;
  blend.toggle = cache.toggle;

  if (!blend.enabled) {
    cache.gl.enable(cache.gl.BLEND);
    blend.enabled = true;
  }

  // a   b   c   d   e   f   g h i j
  // eq1 f11 f12 eq2 f21 f22 r g b a
  if (blend.a !== setting.a || blend.d !== setting.d) {
    cache.gl.blendEquationSeparate(setting.a, setting.d);
    blend.a = setting.a;
    blend.d = setting.d;
  }
  if (blend.b !== setting.b || blend.c !== setting.c || blend.e !== setting.e || blend.f !== setting.f) {
    cache.gl.blendFuncSeparate(setting.b, setting.c, setting.e, setting.f);
    blend.b = setting.b;
    blend.c = setting.c;
    blend.e = setting.e;
    blend.f = setting.f;
  }
  if (blend.g !== setting.g || blend.h !== setting.h || blend.i !== setting.i || blend.j !== setting.j) {
    cache.gl.blendColor(setting.g, setting.h, setting.i, setting.j);
    blend.g = setting.g;
    blend.h = setting.h;
    blend.i = setting.i;
    blend.j = setting.j;
  }
});

// eslint-disable-next-line no-unused-vars
var _WebGL_enableDepthTest = F2(function (cache, setting) {
  var depthTest = cache.depthTest;
  depthTest.toggle = cache.toggle;

  if (!depthTest.enabled) {
    cache.gl.enable(cache.gl.DEPTH_TEST);
    depthTest.enabled = true;
  }

  // a    b    c    d
  // func mask near far
  if (depthTest.a !== setting.a) {
    cache.gl.depthFunc(setting.a);
    depthTest.a = setting.a;
  }
  if (depthTest.b !== setting.b) {
    cache.gl.depthMask(setting.b);
    depthTest.b = setting.b;
  }
  if (depthTest.c !== setting.c || depthTest.d !== setting.d) {
    cache.gl.depthRange(setting.c, setting.d);
    depthTest.c = setting.c;
    depthTest.d = setting.d;
  }
});

// eslint-disable-next-line no-unused-vars
var _WebGL_enableStencilTest = F2(function (cache, setting) {
  var stencilTest = cache.stencilTest;
  stencilTest.toggle = cache.toggle;

  if (!stencilTest.enabled) {
    cache.gl.enable(cache.gl.STENCIL_TEST);
    stencilTest.enabled = true;
  }

  // a   b    c         d     e     f      g      h     i     j      k
  // ref mask writeMask test1 fail1 zfail1 zpass1 test2 fail2 zfail2 zpass2
  if (stencilTest.d !== setting.d || stencilTest.a !== setting.a || stencilTest.b !== setting.b) {
    cache.gl.stencilFuncSeparate(cache.gl.FRONT, setting.d, setting.a, setting.b);
    stencilTest.d = setting.d;
    // a and b are set in the cache.gl.BACK diffing because they should be the same
  }
  if (stencilTest.e !== setting.e || stencilTest.f !== setting.f || stencilTest.g !== setting.g) {
    cache.gl.stencilOpSeparate(cache.gl.FRONT, setting.e, setting.f, setting.g);
    stencilTest.e = setting.e;
    stencilTest.f = setting.f;
    stencilTest.g = setting.g;
  }
  if (stencilTest.c !== setting.c) {
    cache.gl.stencilMask(setting.c);
    stencilTest.c = setting.c;
  }
  if (stencilTest.h !== setting.h || stencilTest.a !== setting.a || stencilTest.b !== setting.b) {
    cache.gl.stencilFuncSeparate(cache.gl.BACK, setting.h, setting.a, setting.b);
    stencilTest.h = setting.h;
    stencilTest.a = setting.a;
    stencilTest.b = setting.b;
  }
  if (stencilTest.i !== setting.i || stencilTest.j !== setting.j || stencilTest.k !== setting.k) {
    cache.gl.stencilOpSeparate(cache.gl.BACK, setting.i, setting.j, setting.k);
    stencilTest.i = setting.i;
    stencilTest.j = setting.j;
    stencilTest.k = setting.k;
  }
});

// eslint-disable-next-line no-unused-vars
var _WebGL_enableScissor = F2(function (cache, setting) {
  var scissor = cache.scissor;
  scissor.toggle = cache.toggle;

  if (!scissor.enabled) {
    cache.gl.enable(cache.gl.SCISSOR_TEST);
    scissor.enabled = true;
  }

  if (scissor.a !== setting.a || scissor.b !== setting.b || scissor.c !== setting.c || scissor.d !== setting.d) {
    cache.gl.scissor(setting.a, setting.b, setting.c, setting.d);
    scissor.a = setting.a;
    scissor.b = setting.b;
    scissor.c = setting.c;
    scissor.d = setting.d;
  }
});

// eslint-disable-next-line no-unused-vars
var _WebGL_enableColorMask = F2(function (cache, setting) {
  var colorMask = cache.colorMask;
  colorMask.toggle = cache.toggle;
  colorMask.enabled = true;

  if (colorMask.a !== setting.a || colorMask.b !== setting.b || colorMask.c !== setting.c || colorMask.d !== setting.d) {
    cache.gl.colorMask(setting.a, setting.b, setting.c, setting.d);
    colorMask.a = setting.a;
    colorMask.b = setting.b;
    colorMask.c = setting.c;
    colorMask.d = setting.d;
  }
});

// eslint-disable-next-line no-unused-vars
var _WebGL_enableCullFace = F2(function (cache, setting) {
  var cullFace = cache.cullFace;
  cullFace.toggle = cache.toggle;

  if (!cullFace.enabled) {
    cache.gl.enable(cache.gl.CULL_FACE);
    cullFace.enabled = true;
  }

  if (cullFace.a !== setting.a) {
    cache.gl.cullFace(setting.a);
    cullFace.a = setting.a;
  }
});

// eslint-disable-next-line no-unused-vars
var _WebGL_enablePolygonOffset = F2(function (cache, setting) {
  var polygonOffset = cache.polygonOffset;
  polygonOffset.toggle = cache.toggle;

  if (!polygonOffset.enabled) {
    cache.gl.enable(cache.gl.POLYGON_OFFSET_FILL);
    polygonOffset.enabled = true;
  }

  if (polygonOffset.a !== setting.a || polygonOffset.b !== setting.b) {
    cache.gl.polygonOffset(setting.a, setting.b);
    polygonOffset.a = setting.a;
    polygonOffset.b = setting.b;
  }
});

// eslint-disable-next-line no-unused-vars
var _WebGL_enableSampleCoverage = F2(function (cache, setting) {
  var sampleCoverage = cache.sampleCoverage;
  sampleCoverage.toggle = cache.toggle;

  if (!sampleCoverage.enabled) {
    cache.gl.enable(cache.gl.SAMPLE_COVERAGE);
    sampleCoverage.enabled = true;
  }

  if (sampleCoverage.a !== setting.a || sampleCoverage.b !== setting.b) {
    cache.gl.sampleCoverage(setting.a, setting.b);
    sampleCoverage.a = setting.a;
    sampleCoverage.b = setting.b;
  }
});

// eslint-disable-next-line no-unused-vars
var _WebGL_enableSampleAlphaToCoverage = function (cache) {
  var sampleAlphaToCoverage = cache.sampleAlphaToCoverage;
  sampleAlphaToCoverage.toggle = cache.toggle;

  if (!sampleAlphaToCoverage.enabled) {
    cache.gl.enable(cache.gl.SAMPLE_ALPHA_TO_COVERAGE);
    sampleAlphaToCoverage.enabled = true;
  }
};

var _WebGL_disableBlend = function (cache) {
  if (cache.blend.enabled) {
    cache.gl.disable(cache.gl.BLEND);
    cache.blend.enabled = false;
  }
};

var _WebGL_disableDepthTest = function (cache) {
  if (cache.depthTest.enabled) {
    cache.gl.disable(cache.gl.DEPTH_TEST);
    cache.depthTest.enabled = false;
  }
};

var _WebGL_disableStencilTest = function (cache) {
  if (cache.stencilTest.enabled) {
    cache.gl.disable(cache.gl.STENCIL_TEST);
    cache.stencilTest.enabled = false;
  }
};

var _WebGL_disableScissor = function (cache) {
  if (cache.scissor.enabled) {
    cache.gl.disable(cache.gl.SCISSOR_TEST);
    cache.scissor.enabled = false;
  }
};

var _WebGL_disableColorMask = function (cache) {
  var colorMask = cache.colorMask;
  if (!colorMask.a || !colorMask.b || !colorMask.c || !colorMask.d) {
    cache.gl.colorMask(true, true, true, true);
    colorMask.a = true;
    colorMask.b = true;
    colorMask.c = true;
    colorMask.d = true;
  }
};

var _WebGL_disableCullFace = function (cache) {
  cache.gl.disable(cache.gl.CULL_FACE);
};

var _WebGL_disablePolygonOffset = function (cache) {
  cache.gl.disable(cache.gl.POLYGON_OFFSET_FILL);
};

var _WebGL_disableSampleCoverage = function (cache) {
  cache.gl.disable(cache.gl.SAMPLE_COVERAGE);
};

var _WebGL_disableSampleAlphaToCoverage = function (cache) {
  cache.gl.disable(cache.gl.SAMPLE_ALPHA_TO_COVERAGE);
};

var _WebGL_settings = ['blend', 'depthTest', 'stencilTest', 'scissor', 'colorMask', 'cullFace', 'polygonOffset', 'sampleCoverage', 'sampleAlphaToCoverage'];
var _WebGL_disableFunctions = [_WebGL_disableBlend, _WebGL_disableDepthTest, _WebGL_disableStencilTest, _WebGL_disableScissor, _WebGL_disableColorMask, _WebGL_disableCullFace, _WebGL_disablePolygonOffset, _WebGL_disableSampleCoverage, _WebGL_disableSampleAlphaToCoverage];

function _WebGL_doCompile(gl, src, type) {
  var shader = gl.createShader(type);
  // Enable OES_standard_derivatives extension
  gl.shaderSource(shader, '#extension GL_OES_standard_derivatives : enable\n' + src);
  gl.compileShader(shader);
  return shader;
}

function _WebGL_doLink(gl, vshader, fshader) {
  var program = gl.createProgram();

  gl.attachShader(program, vshader);
  gl.attachShader(program, fshader);
  gl.linkProgram(program);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    throw ('Link failed: ' + gl.getProgramInfoLog(program) +
      '\nvs info-log: ' + gl.getShaderInfoLog(vshader) +
      '\nfs info-log: ' + gl.getShaderInfoLog(fshader));
  }

  return program;
}

function _WebGL_getAttributeInfo(gl, type) {
  switch (type) {
    case gl.FLOAT:
      return { size: 1, arraySize: 1, type: Float32Array, baseType: gl.FLOAT };
    case gl.FLOAT_VEC2:
      return { size: 2, arraySize: 1, type: Float32Array, baseType: gl.FLOAT };
    case gl.FLOAT_VEC3:
      return { size: 3, arraySize: 1, type: Float32Array, baseType: gl.FLOAT };
    case gl.FLOAT_VEC4:
      return { size: 4, arraySize: 1, type: Float32Array, baseType: gl.FLOAT };
    case gl.FLOAT_MAT4:
      return { size: 4, arraySize: 4, type: Float32Array, baseType: gl.FLOAT };
    case gl.INT:
      return { size: 1, arraySize: 1, type: Int32Array, baseType: gl.INT };
  }
}

/**
 *  Form the buffer for a given attribute.
 *
 *  @param {WebGLRenderingContext} gl context
 *  @param {WebGLActiveInfo} attribute the attribute to bind to.
 *         We use its name to grab the record by name and also to know
 *         how many elements we need to grab.
 *  @param {Mesh} mesh The mesh coming in from Elm.
 *  @param {Object} attributes The mapping between the attribute names and Elm fields
 *  @return {WebGLBuffer}
 */
function _WebGL_doBindAttribute(gl, attribute, mesh, attributes) {
  // The length of the number of vertices that
  // complete one 'thing' based on the drawing mode.
  // ie, 2 for Lines, 3 for Triangles, etc.
  var elemSize = mesh.a.e1;

  var idxKeys = [];
  for (var i = 0; i < elemSize; i++) {
    idxKeys.push(String.fromCharCode(97 + i));
  }

  function dataFill(data, cnt, fillOffset, elem, key) {
    var i;
    if (elemSize === 1) {
      for (i = 0; i < cnt; i++) {
        data[fillOffset++] = cnt === 1 ? elem[key] : elem[key][i];
      }
    } else {
      idxKeys.forEach(function (idx) {
        for (i = 0; i < cnt; i++) {
          data[fillOffset++] = cnt === 1 ? elem[idx][key] : elem[idx][key][i];
        }
      });
    }
  }

  var attributeInfo = _WebGL_getAttributeInfo(gl, attribute.type);

  if (attributeInfo === undefined) {
    throw new Error('No info available for: ' + attribute.type);
  }

  var dataIdx = 0;
  var dataOffset = attributeInfo.size * attributeInfo.arraySize * elemSize;
  var array = new attributeInfo.type(_WebGL_listLength(mesh.b) * dataOffset);

  _WebGL_listEach(function (elem) {
    dataFill(array, attributeInfo.size * attributeInfo.arraySize, dataIdx, elem, attributes[attribute.name] || attribute.name);
    dataIdx += dataOffset;
  }, mesh.b);

  var buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(gl.ARRAY_BUFFER, array, gl.STATIC_DRAW);
  return buffer;
}

/**
 *  This sets up the binding caching buffers.
 *
 *  We don't actually bind any buffers now except for the indices buffer.
 *  The problem with filling the buffers here is that it is possible to
 *  have a buffer shared between two webgl shaders;
 *  which could have different active attributes. If we bind it here against
 *  a particular program, we might not bind them all. That final bind is now
 *  done right before drawing.
 *
 *  @param {WebGLRenderingContext} gl context
 *  @param {Mesh} mesh a mesh object from Elm
 *  @return {Object} buffer - an object with the following properties
 *  @return {Number} buffer.numIndices
 *  @return {WebGLBuffer|null} buffer.indexBuffer - optional index buffer
 *  @return {Object} buffer.buffers - will be used to buffer attributes
 */
function _WebGL_doBindSetup(gl, mesh) {
  if (mesh.a.fg > 0) {
    var indexBuffer = gl.createBuffer();
    var indices = _WebGL_makeIndexedBuffer(mesh.c, mesh.a.fg);
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, indices, gl.STATIC_DRAW);
    return {
      numIndices: indices.length,
      indexBuffer: indexBuffer,
      buffers: {}
    };
  } else {
    return {
      numIndices: mesh.a.e1 * _WebGL_listLength(mesh.b),
      indexBuffer: null,
      buffers: {}
    };
  }
}

/**
 *  Create an indices array and fill it from indices
 *  based on the size of the index
 *
 *  @param {List} indicesList the list of indices
 *  @param {Number} indexSize the size of the index
 *  @return {Uint32Array} indices
 */
function _WebGL_makeIndexedBuffer(indicesList, indexSize) {
  var indices = new Uint32Array(_WebGL_listLength(indicesList) * indexSize);
  var fillOffset = 0;
  var i;
  _WebGL_listEach(function (elem) {
    if (indexSize === 1) {
      indices[fillOffset++] = elem;
    } else {
      for (i = 0; i < indexSize; i++) {
        indices[fillOffset++] = elem[String.fromCharCode(97 + i)];
      }
    }
  }, indicesList);
  return indices;
}

function _WebGL_getProgID(vertID, fragID) {
  return vertID + '#' + fragID;
}

var _WebGL_drawGL = F2(function (model, domNode) {
  var cache = model.f;
  var gl = cache.gl;

  if (!gl) {
    return domNode;
  }

  gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);

  if (!cache.depthTest.b) {
    gl.depthMask(true);
    cache.depthTest.b = true;
  }
  if (cache.stencilTest.c !== cache.STENCIL_WRITEMASK) {
    gl.stencilMask(cache.STENCIL_WRITEMASK);
    cache.stencilTest.c = cache.STENCIL_WRITEMASK;
  }
  _WebGL_disableScissor(cache);
  _WebGL_disableColorMask(cache);
  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT | gl.STENCIL_BUFFER_BIT);

  function drawEntity(entity) {
    if (!entity.d.b.b) {
      return; // Empty list
    }

    var progid;
    var program;
    var i;

    if (entity.b.id && entity.c.id) {
      progid = _WebGL_getProgID(entity.b.id, entity.c.id);
      program = cache.programs[progid];
    }

    if (!program) {

      var vshader;
      if (entity.b.id) {
        vshader = cache.shaders[entity.b.id];
      } else {
        entity.b.id = _WebGL_guid++;
      }

      if (!vshader) {
        vshader = _WebGL_doCompile(gl, entity.b.src, gl.VERTEX_SHADER);
        cache.shaders[entity.b.id] = vshader;
      }

      var fshader;
      if (entity.c.id) {
        fshader = cache.shaders[entity.c.id];
      } else {
        entity.c.id = _WebGL_guid++;
      }

      if (!fshader) {
        fshader = _WebGL_doCompile(gl, entity.c.src, gl.FRAGMENT_SHADER);
        cache.shaders[entity.c.id] = fshader;
      }

      var glProgram = _WebGL_doLink(gl, vshader, fshader);

      program = {
        glProgram: glProgram,
        attributes: Object.assign({}, entity.b.attributes, entity.c.attributes),
        currentUniforms: {},
        activeAttributes: [],
        activeAttributeLocations: []
      };

      program.uniformSetters = _WebGL_createUniformSetters(
        gl,
        model,
        program,
        Object.assign({}, entity.b.uniforms, entity.c.uniforms)
      );

      var numActiveAttributes = gl.getProgramParameter(glProgram, gl.ACTIVE_ATTRIBUTES);
      for (i = 0; i < numActiveAttributes; i++) {
        var attribute = gl.getActiveAttrib(glProgram, i);
        var attribLocation = gl.getAttribLocation(glProgram, attribute.name);
        program.activeAttributes.push(attribute);
        program.activeAttributeLocations.push(attribLocation);
      }

      progid = _WebGL_getProgID(entity.b.id, entity.c.id);
      cache.programs[progid] = program;
    }

    if (cache.lastProgId !== progid) {
      gl.useProgram(program.glProgram);
      cache.lastProgId = progid;
    }

    _WebGL_setUniforms(program.uniformSetters, entity.e);

    var buffer = cache.buffers.get(entity.d);

    if (!buffer) {
      buffer = _WebGL_doBindSetup(gl, entity.d);
      cache.buffers.set(entity.d, buffer);
    }

    for (i = 0; i < program.activeAttributes.length; i++) {
      attribute = program.activeAttributes[i];
      attribLocation = program.activeAttributeLocations[i];

      if (buffer.buffers[attribute.name] === undefined) {
        buffer.buffers[attribute.name] = _WebGL_doBindAttribute(gl, attribute, entity.d, program.attributes);
      }
      gl.bindBuffer(gl.ARRAY_BUFFER, buffer.buffers[attribute.name]);

      var attributeInfo = _WebGL_getAttributeInfo(gl, attribute.type);
      if (attributeInfo.arraySize === 1) {
        gl.enableVertexAttribArray(attribLocation);
        gl.vertexAttribPointer(attribLocation, attributeInfo.size, attributeInfo.baseType, false, 0, 0);
      } else {
        // Point to four vec4 in case of mat4
        var offset = attributeInfo.size * 4; // float32 takes 4 bytes
        var stride = offset * attributeInfo.arraySize;
        for (var m = 0; m < attributeInfo.arraySize; m++) {
          gl.enableVertexAttribArray(attribLocation + m);
          gl.vertexAttribPointer(attribLocation + m, attributeInfo.size, attributeInfo.baseType, false, stride, offset * m);
        }
      }
    }

    // Apply all the new settings
    cache.toggle = !cache.toggle;
    _WebGL_listEach($elm_explorations$webgl$WebGL$Internal$enableSetting(cache), entity.a);
    // Disable the settings that were applied in the previous draw call
    for (i = 0; i < _WebGL_settings.length; i++) {
      var setting = cache[_WebGL_settings[i]];
      if (setting.toggle !== cache.toggle && setting.enabled) {
        _WebGL_disableFunctions[i](cache);
        setting.enabled = false;
        setting.toggle = cache.toggle;
      }
    }

    if (buffer.indexBuffer) {
      gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, buffer.indexBuffer);
      gl.drawElements(entity.d.a.fW, buffer.numIndices, gl.UNSIGNED_INT, 0);
    } else {
      gl.drawArrays(entity.d.a.fW, 0, buffer.numIndices);
    }
  }

  _WebGL_listEach(drawEntity, model.g);
  return domNode;
});

function _WebGL_createUniformSetters(gl, model, program, uniformsMap) {
  var glProgram = program.glProgram;
  var currentUniforms = program.currentUniforms;
  var textureCounter = 0;
  var cache = model.f;
  function createUniformSetter(glProgram, uniform) {
    var uniformName = uniform.name;
    var uniformLocation = gl.getUniformLocation(glProgram, uniformName);
    switch (uniform.type) {
      case gl.INT:
        return function (value) {
          if (currentUniforms[uniformName] !== value) {
            gl.uniform1i(uniformLocation, value);
            currentUniforms[uniformName] = value;
          }
        };
      case gl.FLOAT:
        return function (value) {
          if (currentUniforms[uniformName] !== value) {
            gl.uniform1f(uniformLocation, value);
            currentUniforms[uniformName] = value;
          }
        };
      case gl.FLOAT_VEC2:
        return function (value) {
          if (currentUniforms[uniformName] !== value) {
            gl.uniform2f(uniformLocation, value[0], value[1]);
            currentUniforms[uniformName] = value;
          }
        };
      case gl.FLOAT_VEC3:
        return function (value) {
          if (currentUniforms[uniformName] !== value) {
            gl.uniform3f(uniformLocation, value[0], value[1], value[2]);
            currentUniforms[uniformName] = value;
          }
        };
      case gl.FLOAT_VEC4:
        return function (value) {
          if (currentUniforms[uniformName] !== value) {
            gl.uniform4f(uniformLocation, value[0], value[1], value[2], value[3]);
            currentUniforms[uniformName] = value;
          }
        };
      case gl.FLOAT_MAT4:
        return function (value) {
          if (currentUniforms[uniformName] !== value) {
            gl.uniformMatrix4fv(uniformLocation, false, new Float32Array(value));
            currentUniforms[uniformName] = value;
          }
        };
      case gl.SAMPLER_2D:
        var currentTexture = textureCounter++;
        return function (texture) {
          gl.activeTexture(gl.TEXTURE0 + currentTexture);
          var tex = cache.textures.get(texture);
          if (!tex) {
            tex = texture.ht(gl);
            cache.textures.set(texture, tex);
          }
          gl.bindTexture(gl.TEXTURE_2D, tex);
          if (currentUniforms[uniformName] !== texture) {
            gl.uniform1i(uniformLocation, currentTexture);
            currentUniforms[uniformName] = texture;
          }
        };
      case gl.BOOL:
        return function (value) {
          if (currentUniforms[uniformName] !== value) {
            gl.uniform1i(uniformLocation, value);
            currentUniforms[uniformName] = value;
          }
        };
      default:
        return function () { };
    }
  }

  var uniformSetters = {};
  var numUniforms = gl.getProgramParameter(glProgram, gl.ACTIVE_UNIFORMS);
  for (var i = 0; i < numUniforms; i++) {
    var uniform = gl.getActiveUniform(glProgram, i);
    uniformSetters[uniformsMap[uniform.name] || uniform.name] = createUniformSetter(glProgram, uniform);
  }

  return uniformSetters;
}

function _WebGL_setUniforms(setters, values) {
  Object.keys(values).forEach(function (name) {
    var setter = setters[name];
    if (setter) {
      setter(values[name]);
    }
  });
}

// VIRTUAL-DOM WIDGET

// eslint-disable-next-line no-unused-vars
var _WebGL_toHtml = F3(function (options, factList, entities) {
  return _VirtualDom_custom(
    factList,
    {
      g: entities,
      f: {},
      h: options
    },
    _WebGL_render,
    _WebGL_diff
  );
});

// eslint-disable-next-line no-unused-vars
var _WebGL_enableAlpha = F2(function (options, option) {
  options.contextAttributes.alpha = true;
  options.contextAttributes.premultipliedAlpha = option.a;
});

// eslint-disable-next-line no-unused-vars
var _WebGL_enableDepth = F2(function (options, option) {
  options.contextAttributes.depth = true;
  options.sceneSettings.push(function (gl) {
    gl.clearDepth(option.a);
  });
});

// eslint-disable-next-line no-unused-vars
var _WebGL_enableStencil = F2(function (options, option) {
  options.contextAttributes.stencil = true;
  options.sceneSettings.push(function (gl) {
    gl.clearStencil(option.a);
  });
});

// eslint-disable-next-line no-unused-vars
var _WebGL_enableAntialias = F2(function (options, option) {
  options.contextAttributes.antialias = true;
});

// eslint-disable-next-line no-unused-vars
var _WebGL_enableClearColor = F2(function (options, option) {
  options.sceneSettings.push(function (gl) {
    gl.clearColor(option.a, option.b, option.c, option.d);
  });
});

// eslint-disable-next-line no-unused-vars
var _WebGL_enablePreserveDrawingBuffer = F2(function (options, option) {
  options.contextAttributes.preserveDrawingBuffer = true;
});

/**
 *  Creates canvas and schedules initial _WebGL_drawGL
 *  @param {Object} model
 *  @param {Object} model.f that may contain the following properties:
           gl, shaders, programs, buffers, textures
 *  @param {List<Option>} model.h list of options coming from Elm
 *  @param {List<Entity>} model.g list of entities coming from Elm
 *  @return {HTMLElement} <canvas> if WebGL is supported, otherwise a <div>
 */
function _WebGL_render(model) {
  var options = {
    contextAttributes: {
      alpha: false,
      depth: false,
      stencil: false,
      antialias: false,
      premultipliedAlpha: false,
      preserveDrawingBuffer: false
    },
    sceneSettings: []
  };

  _WebGL_listEach(function (option) {
    return A2($elm_explorations$webgl$WebGL$Internal$enableOption, options, option);
  }, model.h);

  var canvas = _VirtualDom_doc.createElement('canvas');
  var gl = canvas.getContext && (
    canvas.getContext('webgl', options.contextAttributes) ||
    canvas.getContext('experimental-webgl', options.contextAttributes)
  );

  if (gl && typeof WeakMap !== 'undefined') {
    options.sceneSettings.forEach(function (sceneSetting) {
      sceneSetting(gl);
    });

    // Activate extensions
    gl.getExtension('OES_standard_derivatives');
    gl.getExtension('OES_element_index_uint');

    model.f.gl = gl;

    // Cache the current settings in order to diff them to avoid redundant calls
    // https://emscripten.org/docs/optimizing/Optimizing-WebGL.html#avoid-redundant-calls
    model.f.toggle = false; // used to diff the settings from the previous and current draw calls
    model.f.blend = { enabled: false, toggle: false };
    model.f.depthTest = { enabled: false, toggle: false };
    model.f.stencilTest = { enabled: false, toggle: false };
    model.f.scissor = { enabled: false, toggle: false };
    model.f.colorMask = { enabled: false, toggle: false };
    model.f.cullFace = { enabled: false, toggle: false };
    model.f.polygonOffset = { enabled: false, toggle: false };
    model.f.sampleCoverage = { enabled: false, toggle: false };
    model.f.sampleAlphaToCoverage = { enabled: false, toggle: false };

    model.f.shaders = [];
    model.f.programs = {};
    model.f.lastProgId = null;
    model.f.buffers = new WeakMap();
    model.f.textures = new WeakMap();
    // Memorize the initial stencil write mask, because
    // browsers may have different number of stencil bits
    model.f.STENCIL_WRITEMASK = gl.getParameter(gl.STENCIL_WRITEMASK);

    // Render for the first time.
    // This has to be done in animation frame,
    // because the canvas is not in the DOM yet
    _WebGL_rAF(function () {
      return A2(_WebGL_drawGL, model, canvas);
    });

  } else {
    canvas = _VirtualDom_doc.createElement('div');
    canvas.innerHTML = '<a href="https://get.webgl.org/">Enable WebGL</a> to see this content!';
  }

  return canvas;
}

function _WebGL_diff(oldModel, newModel) {
  newModel.f = oldModel.f;
  return _WebGL_drawGL(newModel);
}
var $elm$core$List$cons = _List_cons;
var $elm$core$Elm$JsArray$foldr = _JsArray_foldr;
var $elm$core$Array$foldr = F3(
	function (func, baseCase, _v0) {
		var tree = _v0.c;
		var tail = _v0.d;
		var helper = F2(
			function (node, acc) {
				if (!node.$) {
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
			if (t.$ === -2) {
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
	var dict = _v0;
	return $elm$core$Dict$keys(dict);
};
var $elm$core$Basics$EQ = 1;
var $elm$core$Basics$GT = 2;
var $elm$core$Basics$LT = 0;
var $elm$core$Result$Err = function (a) {
	return {$: 1, a: a};
};
var $elm$json$Json$Decode$Failure = F2(
	function (a, b) {
		return {$: 3, a: a, b: b};
	});
var $elm$json$Json$Decode$Field = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var $elm$json$Json$Decode$Index = F2(
	function (a, b) {
		return {$: 1, a: a, b: b};
	});
var $elm$core$Result$Ok = function (a) {
	return {$: 0, a: a};
};
var $elm$json$Json$Decode$OneOf = function (a) {
	return {$: 2, a: a};
};
var $elm$core$Basics$False = 1;
var $elm$core$Basics$add = _Basics_add;
var $elm$core$Maybe$Just = function (a) {
	return {$: 0, a: a};
};
var $elm$core$Maybe$Nothing = {$: 1};
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
				case 0:
					var f = error.a;
					var err = error.b;
					var isSimple = function () {
						var _v1 = $elm$core$String$uncons(f);
						if (_v1.$ === 1) {
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
				case 1:
					var i = error.a;
					var err = error.b;
					var indexName = '[' + ($elm$core$String$fromInt(i) + ']');
					var $temp$error = err,
						$temp$context = A2($elm$core$List$cons, indexName, context);
					error = $temp$error;
					context = $temp$context;
					continue errorToStringHelp;
				case 2:
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
		return {$: 0, a: a, b: b, c: c, d: d};
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
	return {$: 1, a: a};
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
	return {$: 0, a: a};
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
		if (!builder.A) {
			return A4(
				$elm$core$Array$Array_elm_builtin,
				$elm$core$Elm$JsArray$length(builder.D),
				$elm$core$Array$shiftStep,
				$elm$core$Elm$JsArray$empty,
				builder.D);
		} else {
			var treeLen = builder.A * $elm$core$Array$branchFactor;
			var depth = $elm$core$Basics$floor(
				A2($elm$core$Basics$logBase, $elm$core$Array$branchFactor, treeLen - 1));
			var correctNodeList = reverseNodeList ? $elm$core$List$reverse(builder.P) : builder.P;
			var tree = A2($elm$core$Array$treeFromBuilder, correctNodeList, builder.A);
			return A4(
				$elm$core$Array$Array_elm_builtin,
				$elm$core$Elm$JsArray$length(builder.D) + treeLen,
				A2($elm$core$Basics$max, 5, depth * $elm$core$Array$shiftStep),
				tree,
				builder.D);
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
					{P: nodeList, A: (len / $elm$core$Array$branchFactor) | 0, D: tail});
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
var $elm$core$Basics$True = 0;
var $elm$core$Result$isOk = function (result) {
	if (!result.$) {
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
		case 0:
			return 0;
		case 1:
			return 1;
		case 2:
			return 2;
		default:
			return 3;
	}
};
var $elm$browser$Browser$External = function (a) {
	return {$: 1, a: a};
};
var $elm$browser$Browser$Internal = function (a) {
	return {$: 0, a: a};
};
var $elm$core$Basics$identity = function (x) {
	return x;
};
var $elm$browser$Browser$Dom$NotFound = $elm$core$Basics$identity;
var $elm$url$Url$Http = 0;
var $elm$url$Url$Https = 1;
var $elm$url$Url$Url = F6(
	function (protocol, host, port_, path, query, fragment) {
		return {e8: fragment, fc: host, gb: path, gf: port_, gk: protocol, gl: query};
	});
var $elm$core$String$contains = _String_contains;
var $elm$core$String$length = _String_length;
var $elm$core$String$slice = _String_slice;
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
var $elm$core$String$left = F2(
	function (n, string) {
		return (n < 1) ? '' : A3($elm$core$String$slice, 0, n, string);
	});
var $elm$core$String$toInt = _String_toInt;
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
					if (_v1.$ === 1) {
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
		0,
		A2($elm$core$String$dropLeft, 7, str)) : (A2($elm$core$String$startsWith, 'https://', str) ? A2(
		$elm$url$Url$chompAfterProtocol,
		1,
		A2($elm$core$String$dropLeft, 8, str)) : $elm$core$Maybe$Nothing);
};
var $elm$core$Basics$never = function (_v0) {
	never:
	while (true) {
		var nvr = _v0;
		var $temp$_v0 = nvr;
		_v0 = $temp$_v0;
		continue never;
	}
};
var $elm$core$Task$Perform = $elm$core$Basics$identity;
var $elm$core$Task$succeed = _Scheduler_succeed;
var $elm$core$Task$init = $elm$core$Task$succeed(0);
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
		var task = _v0;
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
				return 0;
			},
			$elm$core$Task$sequence(
				A2(
					$elm$core$List$map,
					$elm$core$Task$spawnCmd(router),
					commands)));
	});
var $elm$core$Task$onSelfMsg = F3(
	function (_v0, _v1, _v2) {
		return $elm$core$Task$succeed(0);
	});
var $elm$core$Task$cmdMap = F2(
	function (tagger, _v0) {
		var task = _v0;
		return A2($elm$core$Task$map, tagger, task);
	});
_Platform_effectManagers['Task'] = _Platform_createManager($elm$core$Task$init, $elm$core$Task$onEffects, $elm$core$Task$onSelfMsg, $elm$core$Task$cmdMap);
var $elm$core$Task$command = _Platform_leaf('Task');
var $elm$core$Task$perform = F2(
	function (toMessage, task) {
		return $elm$core$Task$command(
			A2($elm$core$Task$map, toMessage, task));
	});
var $elm$browser$Browser$element = _Browser_element;
var $elm$json$Json$Decode$field = _Json_decodeField;
var $elm$json$Json$Decode$float = _Json_decodeFloat;
var $author$project$Main$Msg3d = function (a) {
	return {$: 31, a: a};
};
var $author$project$View3d$TextureLoaded = function (a) {
	return {$: 3, a: a};
};
var $elm$core$Basics$composeL = F3(
	function (g, f, x) {
		return g(
			f(x));
	});
var $elm$core$Task$onError = _Scheduler_onError;
var $elm$core$Task$attempt = F2(
	function (resultToMessage, task) {
		return $elm$core$Task$command(
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
					task)));
	});
var $author$project$Main$Home = function (a) {
	return {$: 0, a: a};
};
var $author$project$Main$Idle = 0;
var $author$project$Main$LoadIdle = {$: 0};
var $author$project$View3d$LoadingTexture = {$: 1};
var $author$project$Main$StepNotStarted = {$: 0};
var $author$project$Main$WaitingMove = {$: 0};
var $author$project$Device$BigDesktop = 3;
var $author$project$Device$Landscape = 1;
var $author$project$Device$Phone = 0;
var $author$project$Device$Portrait = 0;
var $author$project$Device$SmallDesktop = 2;
var $author$project$Device$Tablet = 1;
var $author$project$Device$classify = function (_v0) {
	var width = _v0.eB;
	var height = _v0.dO;
	var deviceOrientation = (_Utils_cmp(width, height) < 0) ? 0 : 1;
	var minDimension = (!deviceOrientation) ? width : height;
	var deviceKind = (minDimension < 450) ? 0 : ((minDimension < 850) ? 1 : ((minDimension < 1250) ? 2 : 3));
	return {
		fn: deviceKind,
		f7: deviceOrientation,
		gv: {dO: height, eB: width}
	};
};
var $author$project$Main$defaultParams = {x: 0.0001, c: $elm$core$Maybe$Nothing, T: $elm$core$Maybe$Nothing, z: 10, O: 3, E: 3500.0};
var $author$project$NumberInput$floatDefault = {
	W: $elm$core$Result$Ok(0.0),
	cV: function (n) {
		return n - 0.1;
	},
	hy: 0.0,
	c1: function (n) {
		return n + 0.1;
	},
	dR: '0.0',
	da: $elm$core$Maybe$Nothing,
	db: $elm$core$Maybe$Nothing
};
var $elm$core$String$fromFloat = _String_fromNumber;
var $author$project$NumberInput$intDefault = {
	W: $elm$core$Result$Ok(0),
	cV: function (n) {
		return n - 1;
	},
	hy: 0,
	c1: function (n) {
		return n + 1;
	},
	dR: '0',
	da: $elm$core$Maybe$Nothing,
	db: $elm$core$Maybe$Nothing
};
var $author$project$NumberInput$setDefaultFloatValue = F2(
	function (_float, field) {
		return _Utils_update(
			field,
			{
				W: $elm$core$Result$Ok(_float),
				hy: _float,
				dR: $elm$core$String$fromFloat(_float)
			});
	});
var $author$project$NumberInput$setDefaultIntValue = F2(
	function (_int, field) {
		return _Utils_update(
			field,
			{
				W: $elm$core$Result$Ok(_int),
				hy: _int,
				dR: $elm$core$String$fromInt(_int)
			});
	});
var $elm$core$Basics$sqrt = _Basics_sqrt;
var $author$project$CropForm$withSize = F2(
	function (width, height) {
		var anyInt = $author$project$NumberInput$intDefault;
		return {
			aR: false,
			ah: A2(
				$author$project$NumberInput$setDefaultIntValue,
				height,
				_Utils_update(
					anyInt,
					{
						da: $elm$core$Maybe$Just(height),
						db: $elm$core$Maybe$Just(0)
					})),
			av: A2(
				$author$project$NumberInput$setDefaultIntValue,
				0,
				_Utils_update(
					anyInt,
					{
						da: $elm$core$Maybe$Just(width),
						db: $elm$core$Maybe$Just(0)
					})),
			am: A2(
				$author$project$NumberInput$setDefaultIntValue,
				width,
				_Utils_update(
					anyInt,
					{
						da: $elm$core$Maybe$Just(width),
						db: $elm$core$Maybe$Just(0)
					})),
			aw: A2(
				$author$project$NumberInput$setDefaultIntValue,
				0,
				_Utils_update(
					anyInt,
					{
						da: $elm$core$Maybe$Just(height),
						db: $elm$core$Maybe$Just(0)
					}))
		};
	});
var $author$project$Main$defaultParamsForm = function () {
	var anyInt = $author$project$NumberInput$intDefault;
	var anyFloat = $author$project$NumberInput$floatDefault;
	return {
		x: {
			W: $elm$core$Result$Ok($author$project$Main$defaultParams.x),
			cV: function (x) {
				return x / $elm$core$Basics$sqrt(2);
			},
			hy: $author$project$Main$defaultParams.x,
			c1: function (x) {
				return x * $elm$core$Basics$sqrt(2);
			},
			dR: $elm$core$String$fromFloat($author$project$Main$defaultParams.x),
			da: $elm$core$Maybe$Nothing,
			db: $elm$core$Maybe$Just(0.0)
		},
		c: A2($author$project$CropForm$withSize, 1920, 1080),
		z: A2(
			$author$project$NumberInput$setDefaultIntValue,
			$author$project$Main$defaultParams.z,
			_Utils_update(
				anyInt,
				{
					da: $elm$core$Maybe$Just(1000),
					db: $elm$core$Maybe$Just(1)
				})),
		O: A2(
			$author$project$NumberInput$setDefaultIntValue,
			$author$project$Main$defaultParams.O,
			_Utils_update(
				anyInt,
				{
					da: $elm$core$Maybe$Just(4),
					db: $elm$core$Maybe$Just(0)
				})),
		E: A2(
			$author$project$NumberInput$setDefaultFloatValue,
			$author$project$Main$defaultParams.E,
			_Utils_update(
				anyFloat,
				{
					cV: $elm$core$Basics$mul(0.1),
					c1: $elm$core$Basics$mul(10.0),
					db: $elm$core$Maybe$Just(0.0001)
				}))
	};
}();
var $author$project$Main$defaultParamsInfo = {x: false, c: false, z: false, O: false, E: false};
var $author$project$Main$headerHeight = 40;
var $author$project$Main$progressBarHeight = 38;
var $mpizenberg$elm_2d_viewer$Viewer$withSize = function (size) {
	return {
		iI: _Utils_Tuple2(0.0, 0.0),
		co: 1.0,
		gv: size
	};
};
var $author$project$Main$initialModel = function (size) {
	return {
		bG: true,
		ag: $elm$core$Maybe$Nothing,
		dK: $author$project$Device$classify(size),
		aZ: $elm$core$Maybe$Nothing,
		az: $mpizenberg$elm_2d_viewer$Viewer$withSize(
			_Utils_Tuple2(size.eB, size.dO - ($author$project$Main$headerHeight + $author$project$Main$progressBarHeight))),
		S: $elm$core$Maybe$Nothing,
		bt: 0,
		T: $elm$core$Maybe$Nothing,
		ch: $author$project$Main$LoadIdle,
		c9: $author$project$Main$LoadIdle,
		bT: $author$project$View3d$LoadingTexture,
		ak: $elm$core$Maybe$Nothing,
		aC: $mpizenberg$elm_2d_viewer$Viewer$withSize(
			_Utils_Tuple2(size.eB, size.dO - ($author$project$Main$headerHeight + $author$project$Main$progressBarHeight))),
		U: _List_Nil,
		s: $author$project$Main$defaultParams,
		q: $author$project$Main$defaultParamsForm,
		cm: $author$project$Main$defaultParamsInfo,
		t: $author$project$Main$WaitingMove,
		aE: $author$project$Main$StepNotStarted,
		by: 0.0,
		a0: _List_Nil,
		r: $author$project$Main$Home(0),
		du: 2,
		y: $mpizenberg$elm_2d_viewer$Viewer$withSize(
			_Utils_Tuple2(size.eB, size.dO - ($author$project$Main$headerHeight + $author$project$Main$progressBarHeight)))
	};
};
var $elm_explorations$webgl$WebGL$Texture$Wrap = $elm$core$Basics$identity;
var $elm_explorations$webgl$WebGL$Texture$clampToEdge = 33071;
var $elm_explorations$webgl$WebGL$Texture$Resize = $elm$core$Basics$identity;
var $elm_explorations$webgl$WebGL$Texture$linear = 9729;
var $elm_explorations$webgl$WebGL$Texture$LoadError = {$: 0};
var $elm_explorations$webgl$WebGL$Texture$SizeError = F2(
	function (a, b) {
		return {$: 1, a: a, b: b};
	});
var $elm_explorations$webgl$WebGL$Texture$loadWith = F2(
	function (_v0, url) {
		var magnify = _v0.io;
		var minify = _v0.is;
		var horizontalWrap = _v0.h2;
		var verticalWrap = _v0.jE;
		var flipY = _v0.hU;
		var expand = F4(
			function (_v1, _v2, _v3, _v4) {
				var mag = _v1;
				var min = _v2;
				var hor = _v3;
				var vert = _v4;
				return A6(_Texture_load, mag, min, hor, vert, flipY, url);
			});
		return A4(expand, magnify, minify, horizontalWrap, verticalWrap);
	});
var $elm_explorations$webgl$WebGL$Texture$nearest = 9728;
var $author$project$View3d$loadTexture = $elm_explorations$webgl$WebGL$Texture$loadWith(
	{hU: true, h2: $elm_explorations$webgl$WebGL$Texture$clampToEdge, io: $elm_explorations$webgl$WebGL$Texture$linear, is: $elm_explorations$webgl$WebGL$Texture$nearest, jE: $elm_explorations$webgl$WebGL$Texture$clampToEdge});
var $author$project$Main$init = function (size) {
	return _Utils_Tuple2(
		$author$project$Main$initialModel(size),
		A2(
			$elm$core$Task$attempt,
			function (res) {
				return $author$project$Main$Msg3d(
					$author$project$View3d$TextureLoaded(res));
			},
			$author$project$View3d$loadTexture('default_normals_and_depth.png')));
};
var $author$project$Main$ImageDecoded = function (a) {
	return {$: 5, a: a};
};
var $author$project$Main$KeyDown = function (a) {
	return {$: 6, a: a};
};
var $author$project$Main$Log = function (a) {
	return {$: 20, a: a};
};
var $author$project$View3d$MouseMove = function (a) {
	return {$: 8, a: a};
};
var $author$project$View3d$MouseUp = {$: 9};
var $author$project$Main$ReceiveCroppedImages = function (a) {
	return {$: 25, a: a};
};
var $author$project$Main$ReceiveHMap = function (a) {
	return {$: 26, a: a};
};
var $author$project$Main$ReceiveNMapUrl = function (a) {
	return {$: 27, a: a};
};
var $author$project$Main$UpdateRunStep = function (a) {
	return {$: 19, a: a};
};
var $author$project$Main$WindowResizes = function (a) {
	return {$: 1, a: a};
};
var $elm$core$Platform$Sub$batch = _Platform_batch;
var $ohanhi$keyboard$Keyboard$RawKey = $elm$core$Basics$identity;
var $elm$json$Json$Decode$string = _Json_decodeString;
var $ohanhi$keyboard$Keyboard$eventKeyDecoder = A2(
	$elm$json$Json$Decode$field,
	'key',
	A2($elm$json$Json$Decode$map, $elm$core$Basics$identity, $elm$json$Json$Decode$string));
var $elm$browser$Browser$Events$Document = 0;
var $elm$browser$Browser$Events$MySub = F3(
	function (a, b, c) {
		return {$: 0, a: a, b: b, c: c};
	});
var $elm$browser$Browser$Events$State = F2(
	function (subs, pids) {
		return {gc: pids, gy: subs};
	});
var $elm$core$Dict$RBEmpty_elm_builtin = {$: -2};
var $elm$core$Dict$empty = $elm$core$Dict$RBEmpty_elm_builtin;
var $elm$browser$Browser$Events$init = $elm$core$Task$succeed(
	A2($elm$browser$Browser$Events$State, _List_Nil, $elm$core$Dict$empty));
var $elm$browser$Browser$Events$nodeToKey = function (node) {
	if (!node) {
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
var $elm$core$Dict$Black = 1;
var $elm$core$Dict$RBNode_elm_builtin = F5(
	function (a, b, c, d, e) {
		return {$: -1, a: a, b: b, c: c, d: d, e: e};
	});
var $elm$core$Dict$Red = 0;
var $elm$core$Dict$balance = F5(
	function (color, key, value, left, right) {
		if ((right.$ === -1) && (!right.a)) {
			var _v1 = right.a;
			var rK = right.b;
			var rV = right.c;
			var rLeft = right.d;
			var rRight = right.e;
			if ((left.$ === -1) && (!left.a)) {
				var _v3 = left.a;
				var lK = left.b;
				var lV = left.c;
				var lLeft = left.d;
				var lRight = left.e;
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					0,
					key,
					value,
					A5($elm$core$Dict$RBNode_elm_builtin, 1, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, 1, rK, rV, rLeft, rRight));
			} else {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					color,
					rK,
					rV,
					A5($elm$core$Dict$RBNode_elm_builtin, 0, key, value, left, rLeft),
					rRight);
			}
		} else {
			if ((((left.$ === -1) && (!left.a)) && (left.d.$ === -1)) && (!left.d.a)) {
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
					0,
					lK,
					lV,
					A5($elm$core$Dict$RBNode_elm_builtin, 1, llK, llV, llLeft, llRight),
					A5($elm$core$Dict$RBNode_elm_builtin, 1, key, value, lRight, right));
			} else {
				return A5($elm$core$Dict$RBNode_elm_builtin, color, key, value, left, right);
			}
		}
	});
var $elm$core$Basics$compare = _Utils_compare;
var $elm$core$Dict$insertHelp = F3(
	function (key, value, dict) {
		if (dict.$ === -2) {
			return A5($elm$core$Dict$RBNode_elm_builtin, 0, key, value, $elm$core$Dict$RBEmpty_elm_builtin, $elm$core$Dict$RBEmpty_elm_builtin);
		} else {
			var nColor = dict.a;
			var nKey = dict.b;
			var nValue = dict.c;
			var nLeft = dict.d;
			var nRight = dict.e;
			var _v1 = A2($elm$core$Basics$compare, key, nKey);
			switch (_v1) {
				case 0:
					return A5(
						$elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						A3($elm$core$Dict$insertHelp, key, value, nLeft),
						nRight);
				case 1:
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
		if ((_v0.$ === -1) && (!_v0.a)) {
			var _v1 = _v0.a;
			var k = _v0.b;
			var v = _v0.c;
			var l = _v0.d;
			var r = _v0.e;
			return A5($elm$core$Dict$RBNode_elm_builtin, 1, k, v, l, r);
		} else {
			var x = _v0;
			return x;
		}
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
var $elm$core$Process$kill = _Scheduler_kill;
var $elm$core$Dict$foldl = F3(
	function (func, acc, dict) {
		foldl:
		while (true) {
			if (dict.$ === -2) {
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
var $elm$browser$Browser$Events$Event = F2(
	function (key, event) {
		return {e4: event, fm: key};
	});
var $elm$core$Platform$sendToSelf = _Platform_sendToSelf;
var $elm$browser$Browser$Events$spawn = F3(
	function (router, key, _v0) {
		var node = _v0.a;
		var name = _v0.b;
		var actualNode = function () {
			if (!node) {
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
			state.gc,
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
var $elm$core$List$maybeCons = F3(
	function (f, mx, xs) {
		var _v0 = f(mx);
		if (!_v0.$) {
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
var $elm$browser$Browser$Events$onSelfMsg = F3(
	function (router, _v0, state) {
		var key = _v0.fm;
		var event = _v0.e4;
		var toMessage = function (_v2) {
			var subKey = _v2.a;
			var _v3 = _v2.b;
			var node = _v3.a;
			var name = _v3.b;
			var decoder = _v3.c;
			return _Utils_eq(subKey, key) ? A2(_Browser_decodeEvent, decoder, event) : $elm$core$Maybe$Nothing;
		};
		var messages = A2($elm$core$List$filterMap, toMessage, state.gy);
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
var $elm$browser$Browser$Events$onKeyDown = A2($elm$browser$Browser$Events$on, 0, 'keydown');
var $ohanhi$keyboard$Keyboard$downs = function (toMsg) {
	return $elm$browser$Browser$Events$onKeyDown(
		A2($elm$json$Json$Decode$map, toMsg, $ohanhi$keyboard$Keyboard$eventKeyDecoder));
};
var $elm$json$Json$Decode$value = _Json_decodeValue;
var $author$project$Main$imageDecoded = _Platform_incomingPort(
	'imageDecoded',
	A2(
		$elm$json$Json$Decode$andThen,
		function (img) {
			return A2(
				$elm$json$Json$Decode$andThen,
				function (id) {
					return $elm$json$Json$Decode$succeed(
						{a9: id, c0: img});
				},
				A2($elm$json$Json$Decode$field, 'id', $elm$json$Json$Decode$string));
		},
		A2($elm$json$Json$Decode$field, 'img', $elm$json$Json$Decode$value)));
var $elm$json$Json$Decode$int = _Json_decodeInt;
var $author$project$Main$log = _Platform_incomingPort(
	'log',
	A2(
		$elm$json$Json$Decode$andThen,
		function (lvl) {
			return A2(
				$elm$json$Json$Decode$andThen,
				function (content) {
					return $elm$json$Json$Decode$succeed(
						{cQ: content, ba: lvl});
				},
				A2($elm$json$Json$Decode$field, 'content', $elm$json$Json$Decode$string));
		},
		A2($elm$json$Json$Decode$field, 'lvl', $elm$json$Json$Decode$int)));
var $author$project$View3d$movementDecoder = A3(
	$elm$json$Json$Decode$map2,
	F2(
		function (a, b) {
			return _Utils_Tuple2(a, b);
		}),
	A2($elm$json$Json$Decode$field, 'movementX', $elm$json$Json$Decode$float),
	A2($elm$json$Json$Decode$field, 'movementY', $elm$json$Json$Decode$float));
var $elm$browser$Browser$Events$onMouseMove = A2($elm$browser$Browser$Events$on, 0, 'mousemove');
var $elm$browser$Browser$Events$onMouseUp = A2($elm$browser$Browser$Events$on, 0, 'mouseup');
var $elm$json$Json$Decode$list = _Json_decodeList;
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
							{a9: id, c0: img});
					},
					A2($elm$json$Json$Decode$field, 'id', $elm$json$Json$Decode$string));
			},
			A2($elm$json$Json$Decode$field, 'img', $elm$json$Json$Decode$value))));
var $author$project$Main$receiveHMap = _Platform_incomingPort(
	'receiveHMap',
	$elm$json$Json$Decode$list(
		A2(
			$elm$json$Json$Decode$andThen,
			function (img) {
				return A2(
					$elm$json$Json$Decode$andThen,
					function (id) {
						return $elm$json$Json$Decode$succeed(
							{a9: id, c0: img});
					},
					A2($elm$json$Json$Decode$field, 'id', $elm$json$Json$Decode$string));
			},
			A2($elm$json$Json$Decode$field, 'img', $elm$json$Json$Decode$value))));
var $author$project$Main$receiveNMapUrl = _Platform_incomingPort('receiveNMapUrl', $elm$json$Json$Decode$string);
var $author$project$Main$resizes = _Platform_incomingPort(
	'resizes',
	A2(
		$elm$json$Json$Decode$andThen,
		function (width) {
			return A2(
				$elm$json$Json$Decode$andThen,
				function (height) {
					return $elm$json$Json$Decode$succeed(
						{dO: height, eB: width});
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
						{gj: progress, ev: step});
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
	var _v0 = model.r;
	switch (_v0.$) {
		case 0:
			return $elm$core$Platform$Sub$batch(
				_List_fromArray(
					[
						$author$project$Main$resizes($author$project$Main$WindowResizes),
						$author$project$Main$log($author$project$Main$Log),
						$author$project$Main$imageDecoded($author$project$Main$ImageDecoded),
						$author$project$Main$receiveNMapUrl($author$project$Main$ReceiveNMapUrl)
					]));
		case 1:
			return $elm$core$Platform$Sub$batch(
				_List_fromArray(
					[
						$author$project$Main$resizes($author$project$Main$WindowResizes),
						$author$project$Main$log($author$project$Main$Log),
						$author$project$Main$imageDecoded($author$project$Main$ImageDecoded)
					]));
		case 2:
			return $elm$core$Platform$Sub$batch(
				_List_fromArray(
					[
						$author$project$Main$resizes($author$project$Main$WindowResizes),
						$author$project$Main$log($author$project$Main$Log),
						$author$project$Main$imageDecoded($author$project$Main$ImageDecoded)
					]));
		case 3:
			return $elm$core$Platform$Sub$batch(
				_List_fromArray(
					[
						$author$project$Main$resizes($author$project$Main$WindowResizes),
						$author$project$Main$log($author$project$Main$Log),
						$author$project$Main$receiveCroppedImages($author$project$Main$ReceiveCroppedImages),
						$author$project$Main$receiveHMap($author$project$Main$ReceiveHMap),
						$author$project$Main$updateRunStep($author$project$Main$UpdateRunStep),
						$ohanhi$keyboard$Keyboard$downs($author$project$Main$KeyDown),
						$author$project$Main$receiveNMapUrl($author$project$Main$ReceiveNMapUrl)
					]));
		case 4:
			return $elm$core$Platform$Sub$batch(
				_List_fromArray(
					[
						$author$project$Main$resizes($author$project$Main$WindowResizes),
						$author$project$Main$log($author$project$Main$Log),
						$author$project$Main$receiveCroppedImages($author$project$Main$ReceiveCroppedImages),
						$author$project$Main$receiveHMap($author$project$Main$ReceiveHMap),
						$author$project$Main$updateRunStep($author$project$Main$UpdateRunStep),
						$author$project$Main$receiveNMapUrl($author$project$Main$ReceiveNMapUrl)
					]));
		case 5:
			return $elm$core$Platform$Sub$batch(
				_List_fromArray(
					[
						$author$project$Main$resizes($author$project$Main$WindowResizes),
						$author$project$Main$log($author$project$Main$Log),
						$author$project$Main$receiveCroppedImages($author$project$Main$ReceiveCroppedImages),
						$author$project$Main$receiveHMap($author$project$Main$ReceiveHMap),
						$author$project$Main$updateRunStep($author$project$Main$UpdateRunStep),
						$ohanhi$keyboard$Keyboard$downs($author$project$Main$KeyDown),
						$elm$browser$Browser$Events$onMouseMove(
						A2(
							$elm$json$Json$Decode$map,
							function (pos) {
								return $author$project$Main$Msg3d(
									$author$project$View3d$MouseMove(pos));
							},
							$author$project$View3d$movementDecoder)),
						$elm$browser$Browser$Events$onMouseUp(
						$elm$json$Json$Decode$succeed(
							$author$project$Main$Msg3d($author$project$View3d$MouseUp))),
						$author$project$Main$receiveNMapUrl($author$project$Main$ReceiveNMapUrl)
					]));
		case 6:
			return $elm$core$Platform$Sub$batch(
				_List_fromArray(
					[
						$author$project$Main$resizes($author$project$Main$WindowResizes),
						$author$project$Main$log($author$project$Main$Log),
						$author$project$Main$receiveCroppedImages($author$project$Main$ReceiveCroppedImages),
						$author$project$Main$receiveHMap($author$project$Main$ReceiveHMap),
						$author$project$Main$updateRunStep($author$project$Main$UpdateRunStep),
						$ohanhi$keyboard$Keyboard$downs($author$project$Main$KeyDown),
						$author$project$Main$receiveNMapUrl($author$project$Main$ReceiveNMapUrl)
					]));
		default:
			return $elm$core$Platform$Sub$batch(
				_List_fromArray(
					[
						$author$project$Main$resizes($author$project$Main$WindowResizes),
						$author$project$Main$log($author$project$Main$Log),
						$author$project$Main$receiveCroppedImages($author$project$Main$ReceiveCroppedImages),
						$author$project$Main$receiveHMap($author$project$Main$ReceiveHMap),
						$author$project$Main$updateRunStep($author$project$Main$UpdateRunStep),
						$author$project$Main$receiveNMapUrl($author$project$Main$ReceiveNMapUrl)
					]));
	}
};
var $author$project$Main$BBox = F4(
	function (left, top, right, bottom) {
		return {ah: bottom, av: left, am: right, aw: top};
	});
var $author$project$Main$DraggingSomeImages = 1;
var $author$project$Main$DraggingSomeLights = 2;
var $BrianHicks$elm_csv$Csv$Decode$FieldNamesFromFirstRow = {$: 2};
var $author$project$Main$GoToPageImages = 0;
var $author$project$Main$GoToPageLogs = 4;
var $author$project$Main$GotScrollPos = function (a) {
	return {$: 22, a: a};
};
var $author$project$Main$LoadError = function (a) {
	return {$: 2, a: a};
};
var $author$project$Main$LoadOk = function (a) {
	return {$: 1, a: a};
};
var $author$project$Main$Loading = function (a) {
	return {$: 1, a: a};
};
var $author$project$Main$LoadingError = {$: 2};
var $author$project$Main$NavigationMsg = function (a) {
	return {$: 13, a: a};
};
var $author$project$Main$Point3d = F3(
	function (x, y, z) {
		return {eG: x, dx: y, eJ: z};
	});
var $author$project$Main$PointerDrawFromOffsetAndClient = F2(
	function (a, b) {
		return {$: 3, a: a, b: b};
	});
var $author$project$Main$PointerMovingFromClientCoords = function (a) {
	return {$: 1, a: a};
};
var $author$project$Main$ReceiveCsv = function (a) {
	return {$: 28, a: a};
};
var $author$project$View3d$ShiftLightAzimuth = function (a) {
	return {$: 12, a: a};
};
var $author$project$View3d$ShiftLightElevation = function (a) {
	return {$: 13, a: a};
};
var $author$project$Main$StepApplying = function (a) {
	return {$: 4, a: a};
};
var $author$project$Main$StepDone = {$: 6};
var $author$project$Main$StepEncoding = function (a) {
	return {$: 5, a: a};
};
var $author$project$Main$StepIteration = F2(
	function (a, b) {
		return {$: 3, a: a, b: b};
	});
var $author$project$Main$StepLevel = function (a) {
	return {$: 2, a: a};
};
var $author$project$Main$StepMultiresPyramid = {$: 1};
var $author$project$Main$StepSaving = function (a) {
	return {$: 7, a: a};
};
var $author$project$Main$ViewImgs = function (a) {
	return {$: 3, a: a};
};
var $author$project$Main$WaitingDraw = {$: 2};
var $elm$core$Basics$always = F2(
	function (a, _v0) {
		return a;
	});
var $elm$core$Maybe$andThen = F2(
	function (callback, maybeValue) {
		if (!maybeValue.$) {
			var value = maybeValue.a;
			return callback(value);
		} else {
			return $elm$core$Maybe$Nothing;
		}
	});
var $elm$core$Platform$Cmd$batch = _Platform_batch;
var $author$project$Main$capture = _Platform_outgoingPort('capture', $elm$core$Basics$identity);
var $mpizenberg$elm_2d_viewer$Viewer$coordinatesAt = F2(
	function (_v0, _v1) {
		var x = _v0.a;
		var y = _v0.b;
		var origin = _v1.iI;
		var scale = _v1.co;
		var _v2 = origin;
		var ox = _v2.a;
		var oy = _v2.b;
		return _Utils_Tuple2(ox + (scale * x), oy + (scale * y));
	});
var $BrianHicks$elm_csv$Csv$Decode$ParsingError = function (a) {
	return {$: 0, a: a};
};
var $elm$core$Result$andThen = F2(
	function (callback, result) {
		if (!result.$) {
			var value = result.a;
			return callback(value);
		} else {
			var msg = result.a;
			return $elm$core$Result$Err(msg);
		}
	});
var $BrianHicks$elm_csv$Csv$Decode$DecodingErrors = function (a) {
	return {$: 2, a: a};
};
var $BrianHicks$elm_csv$Csv$Decode$OnlyColumn_ = {$: 2};
var $BrianHicks$elm_csv$Csv$Decode$NoFieldNamesOnFirstRow = {$: 1};
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
			case 0:
				return $elm$core$Result$Ok(
					_Utils_Tuple3($elm$core$Dict$empty, 0, rows));
			case 1:
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
		if (!ra.$) {
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
		if (!result.$) {
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
		var decode = _v0;
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
											if (!_v3.$) {
												var val = _v3.a;
												if (!soFar.$) {
													var values = soFar.a;
													return $elm$core$Result$Ok(
														A2($elm$core$List$cons, val, values));
												} else {
													var errs = soFar.a;
													return $elm$core$Result$Err(errs);
												}
											} else {
												var err = _v3.a;
												if (!soFar.$) {
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
	return {$: 1, a: a};
};
var $BrianHicks$elm_csv$Csv$Parser$SourceEndedWithoutClosingQuote = function (a) {
	return {$: 0, a: a};
};
var $elm$core$String$cons = _String_cons;
var $elm$core$String$fromChar = function (_char) {
	return A2($elm$core$String$cons, _char, '');
};
var $elm$core$Basics$ge = _Utils_ge;
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
										if (!_v0.$) {
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
										if (!_v2.$) {
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
										if (!_v4.$) {
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
		var fieldSeparator = $elm$core$String$fromChar(config.hR);
		return $elm$core$String$isEmpty(source) ? $elm$core$Result$Ok(_List_Nil) : ((config.hR === ',') ? A4(parseComma, _List_Nil, _List_Nil, 0, 0) : ((config.hR === ';') ? A4(parseSemicolon, _List_Nil, _List_Nil, 0, 0) : A5(
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
var $elm$json$Json$Encode$list = F2(
	function (func, entries) {
		return _Json_wrap(
			A3(
				$elm$core$List$foldl,
				_Json_addEntry(func),
				_Json_emptyArray(0),
				entries));
	});
var $author$project$Main$decodeImages = _Platform_outgoingPort(
	'decodeImages',
	$elm$json$Json$Encode$list($elm$core$Basics$identity));
var $elm$json$Json$Decode$decodeValue = _Json_run;
var $author$project$CropForm$decoded = function (_v0) {
	var left = _v0.av;
	var top = _v0.aw;
	var right = _v0.am;
	var bottom = _v0.ah;
	var _v1 = _Utils_Tuple2(
		_Utils_Tuple2(left.W, right.W),
		_Utils_Tuple2(top.W, bottom.W));
	if ((((!_v1.a.a.$) && (!_v1.a.b.$)) && (!_v1.b.a.$)) && (!_v1.b.b.$)) {
		var _v2 = _v1.a;
		var l = _v2.a.a;
		var r = _v2.b.a;
		var _v3 = _v1.b;
		var t = _v3.a.a;
		var b = _v3.b.a;
		return $elm$core$Maybe$Just(
			{ah: b, av: l, am: r, aw: t});
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $elm$time$Time$Posix = $elm$core$Basics$identity;
var $elm$time$Time$millisToPosix = $elm$core$Basics$identity;
var $elm$file$File$decoder = _File_decoder;
var $mpizenberg$elm_file$FileValue$encode = function (file) {
	return file.gJ;
};
var $elm$json$Json$Encode$int = _Json_wrap;
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
			_Json_emptyObject(0),
			pairs));
};
var $author$project$Main$encodeCrop = function (_v0) {
	var left = _v0.av;
	var top = _v0.aw;
	var right = _v0.am;
	var bottom = _v0.ah;
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
				$elm$json$Json$Encode$float(pt.eG)),
				_Utils_Tuple2(
				'y',
				$elm$json$Json$Encode$float(pt.dx)),
				_Utils_Tuple2(
				'z',
				$elm$json$Json$Encode$float(pt.eJ))
			]));
};
var $author$project$Main$encodeLights = function (ptList) {
	return A2($elm$json$Json$Encode$list, $author$project$Main$encodeLight, ptList);
};
var $elm$core$Maybe$map = F2(
	function (f, maybe) {
		if (!maybe.$) {
			var value = maybe.a;
			return $elm$core$Maybe$Just(
				f(value));
		} else {
			return $elm$core$Maybe$Nothing;
		}
	});
var $elm$json$Json$Encode$null = _Json_encodeNull;
var $elm$core$Maybe$withDefault = F2(
	function (_default, maybe) {
		if (!maybe.$) {
			var value = maybe.a;
			return value;
		} else {
			return _default;
		}
	});
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
				A2($author$project$Main$encodeMaybe, $author$project$Main$encodeCrop, params.c)),
				_Utils_Tuple2(
				'maxIterations',
				$elm$json$Json$Encode$int(params.z)),
				_Utils_Tuple2(
				'z_mean',
				$elm$json$Json$Encode$float(params.E)),
				_Utils_Tuple2(
				'lights',
				A2($author$project$Main$encodeMaybe, $author$project$Main$encodeLights, params.T)),
				_Utils_Tuple2(
				'convergenceThreshold',
				$elm$json$Json$Encode$float(params.x)),
				_Utils_Tuple2(
				'maxVerbosity',
				$elm$json$Json$Encode$int(params.O))
			]));
};
var $BrianHicks$elm_csv$Csv$Decode$errorToString = function (error) {
	switch (error.$) {
		case 0:
			if (!error.a.$) {
				var row = error.a.a;
				return 'The source ended on row ' + ($elm$core$String$fromInt(row) + ' in a quoted field without a closing quote.');
			} else {
				var row = error.a.a;
				return 'On row ' + ($elm$core$String$fromInt(row) + ' in the source, there were additional characters in a field after a closing quote.');
			}
		case 1:
			return 'I expected to see field names on the first row, but there were none.';
		default:
			var errs = error.a;
			var rowAndColumnString = function (err) {
				return 'row ' + ($elm$core$String$fromInt(err.aM) + (', ' + function () {
					var _v4 = err.aH;
					switch (_v4.$) {
						case 0:
							var col = _v4.a;
							return 'column ' + $elm$core$String$fromInt(col);
						case 1:
							if (_v4.b.$ === 1) {
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
					case 0:
						var i = problem.a;
						return 'I couldn\'t find column #' + ($elm$core$String$fromInt(i) + '.');
					case 1:
						var name = problem.a;
						return 'I couldn\'t find the `' + (name + '` column.');
					case 2:
						var name = problem.a;
						return 'The `' + (name + '` field wasn\'t provided in the field names.');
					case 3:
						var howMany = problem.a;
						return 'I expected exactly one column, but there were ' + ($elm$core$String$fromInt(howMany) + '.');
					case 4:
						var notInt = problem.a;
						return 'I could not parse an int from `' + (notInt + '`.');
					case 5:
						var notFloat = problem.a;
						return 'I could not parse a float from `' + (notFloat + '`.');
					default:
						var custom = problem.a;
						return custom;
				}
			};
			var errString = function (err) {
				var _v2 = A2($elm$core$List$map, problemString, err.al);
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
		return {hq: contactDetails, ii: isPrimary, dh: pointer, iN: pointerId, iO: pointerType};
	});
var $elm$json$Json$Decode$bool = _Json_decodeBool;
var $mpizenberg$elm_pointer_events$Html$Events$Extra$Pointer$ContactDetails = F5(
	function (width, height, pressure, tiltX, tiltY) {
		return {dO: height, iP: pressure, ju: tiltX, jv: tiltY, eB: width};
	});
var $elm$json$Json$Decode$map5 = _Json_map5;
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
		return {hf: button, cL: clientPos, il: keys, d9: offsetPos, iK: pagePos, iW: screenPos};
	});
var $mpizenberg$elm_pointer_events$Html$Events$Extra$Mouse$BackButton = 4;
var $mpizenberg$elm_pointer_events$Html$Events$Extra$Mouse$ErrorButton = 0;
var $mpizenberg$elm_pointer_events$Html$Events$Extra$Mouse$ForwardButton = 5;
var $mpizenberg$elm_pointer_events$Html$Events$Extra$Mouse$MainButton = 1;
var $mpizenberg$elm_pointer_events$Html$Events$Extra$Mouse$MiddleButton = 2;
var $mpizenberg$elm_pointer_events$Html$Events$Extra$Mouse$SecondButton = 3;
var $mpizenberg$elm_pointer_events$Html$Events$Extra$Mouse$buttonFromId = function (id) {
	switch (id) {
		case 0:
			return 1;
		case 1:
			return 2;
		case 2:
			return 3;
		case 3:
			return 4;
		case 4:
			return 5;
		default:
			return 0;
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
		return {g_: alt, hu: ctrl, i0: shift};
	});
var $elm$json$Json$Decode$map3 = _Json_map3;
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
var $mpizenberg$elm_pointer_events$Html$Events$Extra$Pointer$MouseType = 0;
var $mpizenberg$elm_pointer_events$Html$Events$Extra$Pointer$PenType = 2;
var $mpizenberg$elm_pointer_events$Html$Events$Extra$Pointer$TouchType = 1;
var $mpizenberg$elm_pointer_events$Html$Events$Extra$Pointer$stringToPointerType = function (str) {
	switch (str) {
		case 'pen':
			return 2;
		case 'touch':
			return 1;
		default:
			return 0;
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
var $BrianHicks$elm_csv$Csv$Decode$Decoder = $elm$core$Basics$identity;
var $BrianHicks$elm_csv$Csv$Decode$Field_ = function (a) {
	return {$: 1, a: a};
};
var $BrianHicks$elm_csv$Csv$Decode$field = F2(
	function (name, _v0) {
		var decoder = _v0;
		return F3(
			function (_v1, fieldNames, row) {
				return A3(
					decoder,
					$BrianHicks$elm_csv$Csv$Decode$Field_(name),
					fieldNames,
					row);
			});
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
		var size = viewer.gv;
		var scale = viewer.co;
		var _v1 = size;
		var width = _v1.a;
		var height = _v1.b;
		return _Utils_update(
			viewer,
			{
				iI: _Utils_Tuple2(x - ((0.5 * scale) * width), y - ((0.5 * scale) * height))
			});
	});
var $mpizenberg$elm_2d_viewer$Viewer$fitImage = F3(
	function (rescale, _v0, viewer) {
		var width = _v0.a;
		var height = _v0.b;
		var _v1 = viewer.gv;
		var viewerWidth = _v1.a;
		var viewerHeight = _v1.b;
		var newScale = rescale * A2($elm$core$Basics$max, width / viewerWidth, height / viewerHeight);
		return A2(
			$mpizenberg$elm_2d_viewer$Viewer$centerAtCoordinates,
			_Utils_Tuple2(width / 2.0, height / 2.0),
			_Utils_update(
				viewer,
				{co: newScale}));
	});
var $BrianHicks$elm_csv$Csv$Decode$ExpectedFloat = function (a) {
	return {$: 5, a: a};
};
var $BrianHicks$elm_csv$Csv$Decode$ColumnNotFound = function (a) {
	return {$: 0, a: a};
};
var $BrianHicks$elm_csv$Csv$Decode$ExpectedOneColumn = function (a) {
	return {$: 3, a: a};
};
var $BrianHicks$elm_csv$Csv$Decode$FieldNotFound = function (a) {
	return {$: 1, a: a};
};
var $BrianHicks$elm_csv$Csv$Decode$FieldNotProvided = function (a) {
	return {$: 2, a: a};
};
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
var $elm$core$Dict$get = F2(
	function (targetKey, dict) {
		get:
		while (true) {
			if (dict.$ === -2) {
				return $elm$core$Maybe$Nothing;
			} else {
				var key = dict.b;
				var value = dict.c;
				var left = dict.d;
				var right = dict.e;
				var _v1 = A2($elm$core$Basics$compare, targetKey, key);
				switch (_v1) {
					case 0:
						var $temp$targetKey = targetKey,
							$temp$dict = left;
						targetKey = $temp$targetKey;
						dict = $temp$dict;
						continue get;
					case 1:
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
	return {$: 0, a: a};
};
var $BrianHicks$elm_csv$Csv$Decode$Field = F2(
	function (a, b) {
		return {$: 1, a: a, b: b};
	});
var $BrianHicks$elm_csv$Csv$Decode$OnlyColumn = {$: 2};
var $BrianHicks$elm_csv$Csv$Decode$locationToColumn = F2(
	function (fieldNames, location) {
		switch (location.$) {
			case 0:
				var i = location.a;
				return $BrianHicks$elm_csv$Csv$Decode$Column(i);
			case 1:
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
	return F4(
		function (location, fieldNames, rowNum, row) {
			switch (location.$) {
				case 0:
					var colNum = location.a;
					var _v1 = $elm$core$List$head(
						A2($elm$core$List$drop, colNum, row));
					if (!_v1.$) {
						var value = _v1.a;
						var _v2 = convert(value);
						if (!_v2.$) {
							var converted = _v2.a;
							return $elm$core$Result$Ok(converted);
						} else {
							var problem = _v2.a;
							return $elm$core$Result$Err(
								{
									aH: A2($BrianHicks$elm_csv$Csv$Decode$locationToColumn, fieldNames, location),
									al: _List_fromArray(
										[problem]),
									aM: rowNum
								});
						}
					} else {
						return $elm$core$Result$Err(
							{
								aH: A2($BrianHicks$elm_csv$Csv$Decode$locationToColumn, fieldNames, location),
								al: _List_fromArray(
									[
										$BrianHicks$elm_csv$Csv$Decode$ColumnNotFound(colNum)
									]),
								aM: rowNum
							});
					}
				case 1:
					var name = location.a;
					var _v3 = A2($elm$core$Dict$get, name, fieldNames);
					if (!_v3.$) {
						var colNum = _v3.a;
						var _v4 = $elm$core$List$head(
							A2($elm$core$List$drop, colNum, row));
						if (!_v4.$) {
							var value = _v4.a;
							var _v5 = convert(value);
							if (!_v5.$) {
								var converted = _v5.a;
								return $elm$core$Result$Ok(converted);
							} else {
								var problem = _v5.a;
								return $elm$core$Result$Err(
									{
										aH: A2($BrianHicks$elm_csv$Csv$Decode$locationToColumn, fieldNames, location),
										al: _List_fromArray(
											[problem]),
										aM: rowNum
									});
							}
						} else {
							return $elm$core$Result$Err(
								{
									aH: A2($BrianHicks$elm_csv$Csv$Decode$locationToColumn, fieldNames, location),
									al: _List_fromArray(
										[
											$BrianHicks$elm_csv$Csv$Decode$FieldNotFound(name)
										]),
									aM: rowNum
								});
						}
					} else {
						return $elm$core$Result$Err(
							{
								aH: A2($BrianHicks$elm_csv$Csv$Decode$locationToColumn, fieldNames, location),
								al: _List_fromArray(
									[
										$BrianHicks$elm_csv$Csv$Decode$FieldNotProvided(name)
									]),
								aM: rowNum
							});
					}
				default:
					if (!row.b) {
						return $elm$core$Result$Err(
							{
								aH: A2($BrianHicks$elm_csv$Csv$Decode$locationToColumn, fieldNames, location),
								al: _List_fromArray(
									[
										$BrianHicks$elm_csv$Csv$Decode$ColumnNotFound(0)
									]),
								aM: rowNum
							});
					} else {
						if (!row.b.b) {
							var only = row.a;
							var _v7 = convert(only);
							if (!_v7.$) {
								var converted = _v7.a;
								return $elm$core$Result$Ok(converted);
							} else {
								var problem = _v7.a;
								return $elm$core$Result$Err(
									{
										aH: A2($BrianHicks$elm_csv$Csv$Decode$locationToColumn, fieldNames, location),
										al: _List_fromArray(
											[problem]),
										aM: rowNum
									});
							}
						} else {
							return $elm$core$Result$Err(
								{
									aH: A2($BrianHicks$elm_csv$Csv$Decode$locationToColumn, fieldNames, location),
									al: _List_fromArray(
										[
											$BrianHicks$elm_csv$Csv$Decode$ExpectedOneColumn(
											$elm$core$List$length(row))
										]),
									aM: rowNum
								});
						}
					}
			}
		});
};
var $elm$core$String$toFloat = _String_toFloat;
var $BrianHicks$elm_csv$Csv$Decode$float = $BrianHicks$elm_csv$Csv$Decode$fromString(
	function (value) {
		var _v0 = $elm$core$String$toFloat(
			$elm$core$String$trim(value));
		if (!_v0.$) {
			var parsed = _v0.a;
			return $elm$core$Result$Ok(parsed);
		} else {
			return $elm$core$Result$Err(
				$BrianHicks$elm_csv$Csv$Decode$ExpectedFloat(value));
		}
	});
var $yotamDvir$elm_pivot$Pivot$Types$Pivot = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
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
var $elm$core$Set$Set_elm_builtin = $elm$core$Basics$identity;
var $elm$core$Set$empty = $elm$core$Dict$empty;
var $elm$core$Set$insert = F2(
	function (key, _v0) {
		var dict = _v0;
		return A3($elm$core$Dict$insert, key, 0, dict);
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
	return {$: 4, a: a};
};
var $author$project$Main$HMap = function (a) {
	return {$: 6, a: a};
};
var $author$project$Main$Logs = function (a) {
	return {$: 7, a: a};
};
var $author$project$Main$NMap = function (a) {
	return {$: 5, a: a};
};
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
var $author$project$Main$goTo = F3(
	function (msg, data, model) {
		switch (msg) {
			case 0:
				return _Utils_update(
					model,
					{
						S: $elm$core$Maybe$Nothing,
						t: $author$project$Main$WaitingMove,
						r: $author$project$Main$ViewImgs(data)
					});
			case 1:
				return _Utils_update(
					model,
					{
						r: $author$project$Main$Config(data)
					});
			case 2:
				return _Utils_update(
					model,
					{
						t: $author$project$Main$WaitingMove,
						r: $author$project$Main$NMap(data)
					});
			case 3:
				return _Utils_update(
					model,
					{
						t: $author$project$Main$WaitingMove,
						r: $author$project$Main$HMap(data)
					});
			default:
				return _Utils_update(
					model,
					{
						U: _List_Nil,
						a0: $elm$core$List$concat(
							_List_fromArray(
								[model.U, model.a0])),
						r: $author$project$Main$Logs(data)
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
var $elm$core$Basics$composeR = F3(
	function (f, g, x) {
		return g(
			f(x));
	});
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
		if (_v0.$ === 1) {
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
	if (!texture.$) {
		var image = texture.a;
		return {dO: image.dO, eB: image.eB};
	} else {
		var data = texture.a;
		return {dO: data.dO, eB: data.eB};
	}
};
var $joakin$elm_canvas$Canvas$Internal$Texture$TImage = function (a) {
	return {$: 0, a: a};
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
							{dO: height, c3: image, eB: width})) : $elm$core$Maybe$Nothing;
				}),
			A2($elm$json$Json$Decode$field, 'tagName', $elm$json$Json$Decode$string),
			A2($elm$json$Json$Decode$field, 'width', $elm$json$Json$Decode$float),
			A2($elm$json$Json$Decode$field, 'height', $elm$json$Json$Decode$float));
	},
	$elm$json$Json$Decode$value);
var $elm$core$Result$toMaybe = function (result) {
	if (!result.$) {
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
	var id = _v0.a9;
	var img = _v0.c0;
	var _v1 = $joakin$elm_canvas$Canvas$Texture$fromDomImage(img);
	if (_v1.$ === 1) {
		return $elm$core$Maybe$Nothing;
	} else {
		var texture = _v1.a;
		var imgSize = $joakin$elm_canvas$Canvas$Texture$dimensions(texture);
		return $elm$core$Maybe$Just(
			{
				dO: $elm$core$Basics$round(imgSize.dO),
				a9: id,
				ds: texture,
				eB: $elm$core$Basics$round(imgSize.eB)
			});
	}
};
var $BrianHicks$elm_csv$Csv$Decode$succeed = function (value) {
	return F4(
		function (_v0, _v1, _v2, _v3) {
			return $elm$core$Result$Ok(value);
		});
};
var $BrianHicks$elm_csv$Csv$Decode$into = $BrianHicks$elm_csv$Csv$Decode$succeed;
var $elm$core$List$isEmpty = function (xs) {
	if (!xs.b) {
		return true;
	} else {
		return false;
	}
};
var $elm$json$Json$Encode$string = _Json_wrap;
var $author$project$Main$loadImagesFromUrls = _Platform_outgoingPort(
	'loadImagesFromUrls',
	$elm$json$Json$Encode$list($elm$json$Json$Encode$string));
var $elm$core$Platform$Cmd$map = _Platform_map;
var $elm$core$Basics$min = F2(
	function (x, y) {
		return (_Utils_cmp(x, y) < 0) ? x : y;
	});
var $ohanhi$keyboard$Keyboard$ArrowDown = {$: 18};
var $ohanhi$keyboard$Keyboard$ArrowLeft = {$: 19};
var $ohanhi$keyboard$Keyboard$ArrowRight = {$: 20};
var $ohanhi$keyboard$Keyboard$ArrowUp = {$: 21};
var $ohanhi$keyboard$Keyboard$End = {$: 22};
var $ohanhi$keyboard$Keyboard$Home = {$: 23};
var $ohanhi$keyboard$Keyboard$PageDown = {$: 24};
var $ohanhi$keyboard$Keyboard$PageUp = {$: 25};
var $ohanhi$keyboard$Keyboard$navigationKey = function (_v0) {
	var value = _v0;
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
var $elm$core$Basics$negate = function (n) {
	return -n;
};
var $elm$core$Platform$Cmd$none = $elm$core$Platform$Cmd$batch(_List_Nil);
var $mpizenberg$elm_2d_viewer$Viewer$translate = F2(
	function (_v0, viewer) {
		var tx = _v0.a;
		var ty = _v0.b;
		var _v1 = viewer.iI;
		var ox = _v1.a;
		var oy = _v1.b;
		return _Utils_update(
			viewer,
			{
				iI: _Utils_Tuple2(ox + tx, oy + ty)
			});
	});
var $mpizenberg$elm_2d_viewer$Viewer$pan = F2(
	function (_v0, viewer) {
		var px = _v0.a;
		var py = _v0.b;
		var scale = viewer.co;
		return A2(
			$mpizenberg$elm_2d_viewer$Viewer$translate,
			_Utils_Tuple2((-scale) * px, (-scale) * py),
			viewer);
	});
var $elm$core$Result$map2 = F3(
	function (func, ra, rb) {
		if (ra.$ === 1) {
			var x = ra.a;
			return $elm$core$Result$Err(x);
		} else {
			var a = ra.a;
			if (rb.$ === 1) {
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
		var decodeA = _v0;
		var decodeB = _v1;
		return F4(
			function (location, fieldNames, rowNum, row) {
				return A3(
					$elm$core$Result$map2,
					transform,
					A4(decodeA, location, fieldNames, rowNum, row),
					A4(decodeB, location, fieldNames, rowNum, row));
			});
	});
var $BrianHicks$elm_csv$Csv$Decode$pipeline = $BrianHicks$elm_csv$Csv$Decode$map2(
	F2(
		function (value, fn) {
			return fn(value);
		}));
var $elm$browser$Browser$Navigation$reload = _Browser_reload(false);
var $mpizenberg$elm_2d_viewer$Viewer$resize = F2(
	function (newSize, _v0) {
		var origin = _v0.iI;
		var scale = _v0.co;
		return {iI: origin, co: scale, gv: newSize};
	});
var $author$project$Main$run = _Platform_outgoingPort('run', $elm$core$Basics$identity);
var $author$project$Main$runAndSwitchToLogsPage = F2(
	function (imgs, model) {
		return A3(
			$author$project$Main$goTo,
			4,
			imgs,
			_Utils_update(
				model,
				{aZ: $elm$core$Maybe$Nothing, ak: $elm$core$Maybe$Nothing, aE: $author$project$Main$StepNotStarted}));
	});
var $author$project$Main$saveNMapPNG = _Platform_outgoingPort('saveNMapPNG', $elm$json$Json$Encode$int);
var $author$project$Main$NoMsg = {$: 0};
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
var $elm$core$Tuple$second = function (_v0) {
	var y = _v0.b;
	return y;
};
var $author$project$Main$send = function (msage) {
	return A2(
		$elm$core$Task$perform,
		$elm$core$Basics$identity,
		$elm$core$Task$succeed(
			$author$project$Main$Msg3d(msage)));
};
var $elm$core$Dict$sizeHelp = F2(
	function (n, dict) {
		sizeHelp:
		while (true) {
			if (dict.$ === -2) {
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
var $elm$core$Set$size = function (_v0) {
	var dict = _v0;
	return $elm$core$Dict$size(dict);
};
var $elm$core$Process$sleep = _Process_sleep;
var $author$project$CropForm$toggle = F2(
	function (newActive, data) {
		return _Utils_update(
			data,
			{aR: newActive});
	});
var $author$project$NumberInput$IntParsingError = {$: 0};
var $arowM$elm_form_decoder$Form$Decoder$Decoder = $elm$core$Basics$identity;
var $arowM$elm_form_decoder$Form$Decoder$custom = $elm$core$Basics$identity;
var $elm$core$Result$fromMaybe = F2(
	function (err, maybe) {
		if (!maybe.$) {
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
	return {$: 2, a: a};
};
var $arowM$elm_form_decoder$Form$Decoder$run = F2(
	function (_v0, a) {
		var f = _v0;
		return f(a);
	});
var $arowM$elm_form_decoder$Form$Decoder$assert = F2(
	function (v, _v0) {
		var f = _v0;
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
							{bD: actual, bH: bound})
						])) : $elm$core$Result$Ok(0);
			});
	});
var $author$project$NumberInput$validateMaxInt = F2(
	function (maybeMax, decoder) {
		if (maybeMax.$ === 1) {
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
	return {$: 1, a: a};
};
var $author$project$NumberInput$minBound = F2(
	function (errorTag, bound) {
		return $arowM$elm_form_decoder$Form$Decoder$custom(
			function (actual) {
				return (_Utils_cmp(actual, bound) < 0) ? $elm$core$Result$Err(
					_List_fromArray(
						[
							errorTag(
							{bD: actual, bH: bound})
						])) : $elm$core$Result$Ok(0);
			});
	});
var $author$project$NumberInput$validateMinInt = F2(
	function (maybeMin, decoder) {
		if (maybeMin.$ === 1) {
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
				W: A2(
					$arowM$elm_form_decoder$Form$Decoder$run,
					A2($author$project$NumberInput$intDecoder, field.db, field.da),
					input),
				dR: input
			});
	});
var $author$project$CropForm$updateBottom = F2(
	function (str, state) {
		return _Utils_update(
			state,
			{
				ah: A2($author$project$NumberInput$updateInt, str, state.ah)
			});
	});
var $author$project$NumberInput$setMinBound = F2(
	function (newMin, field) {
		return _Utils_update(
			field,
			{db: newMin});
	});
var $author$project$CropForm$updateLeft = F2(
	function (str, state) {
		var active = state.aR;
		var left = state.av;
		var top = state.aw;
		var right = state.am;
		var bottom = state.ah;
		var newLeft = A2($author$project$NumberInput$updateInt, str, left);
		var _v0 = newLeft.W;
		if (!_v0.$) {
			var value = _v0.a;
			return {
				aR: active,
				ah: bottom,
				av: newLeft,
				am: A2(
					$author$project$NumberInput$updateInt,
					right.dR,
					A2(
						$author$project$NumberInput$setMinBound,
						$elm$core$Maybe$Just(value),
						right)),
				aw: top
			};
		} else {
			return _Utils_update(
				state,
				{av: newLeft});
		}
	});
var $author$project$CropForm$updateRight = F2(
	function (str, state) {
		return _Utils_update(
			state,
			{
				am: A2($author$project$NumberInput$updateInt, str, state.am)
			});
	});
var $author$project$CropForm$updateTop = F2(
	function (str, state) {
		var active = state.aR;
		var left = state.av;
		var top = state.aw;
		var right = state.am;
		var bottom = state.ah;
		var newTop = A2($author$project$NumberInput$updateInt, str, top);
		var _v0 = newTop.W;
		if (!_v0.$) {
			var value = _v0.a;
			return {
				aR: active,
				ah: A2(
					$author$project$NumberInput$updateInt,
					bottom.dR,
					A2(
						$author$project$NumberInput$setMinBound,
						$elm$core$Maybe$Just(value),
						bottom)),
				av: left,
				am: right,
				aw: newTop
			};
		} else {
			return _Utils_update(
				state,
				{aw: newTop});
		}
	});
var $author$project$Main$snapBBox = F2(
	function (_v0, state) {
		var left = _v0.av;
		var top = _v0.aw;
		var right = _v0.am;
		var bottom = _v0.ah;
		var topCrop = $elm$core$Basics$round(
			A2($elm$core$Basics$max, 0, top));
		var maxRight = A2($elm$core$Maybe$withDefault, 0, state.am.da);
		var rightCrop = A2(
			$elm$core$Basics$min,
			$elm$core$Basics$round(right),
			maxRight);
		var maxBottom = A2($elm$core$Maybe$withDefault, 0, state.ah.da);
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
	var left = _v0.av;
	var top = _v0.aw;
	var right = _v0.am;
	var bottom = _v0.ah;
	return {ah: bottom, av: left, am: right, aw: top};
};
var $elm$file$File$toString = _File_toString;
var $author$project$View3d$ErrorLoadingTexture = function (a) {
	return {$: 2, a: a};
};
var $author$project$View3d$ImageLoaded = function (a) {
	return {$: 1, a: a};
};
var $author$project$View3d$Landing = {$: 0};
var $author$project$View3d$NoControl = 0;
var $author$project$View3d$Rendering = function (a) {
	return {$: 3, a: a};
};
var $author$project$View3d$UrlGenerated = function (a) {
	return {$: 2, a: a};
};
var $author$project$View3d$centerTarget = function (_v0) {
	var w = _v0.a;
	var h = _v0.b;
	var maxSize = A2($elm$core$Basics$max, w, h);
	return _Utils_Tuple2((0.5 * w) / maxSize, (0.5 * h) / maxSize);
};
var $elm$core$Basics$pi = _Basics_pi;
var $ianmackenzie$elm_units$Quantity$Quantity = $elm$core$Basics$identity;
var $ianmackenzie$elm_units$Angle$radians = function (numRadians) {
	return numRadians;
};
var $ianmackenzie$elm_units$Angle$degrees = function (numDegrees) {
	return $ianmackenzie$elm_units$Angle$radians($elm$core$Basics$pi * (numDegrees / 180));
};
var $author$project$View3d$changeLightAzimuth = F2(
	function (value, lighting) {
		return _Utils_update(
			lighting,
			{
				an: $ianmackenzie$elm_units$Angle$degrees(value)
			});
	});
var $author$project$View3d$changeLightElevation = F2(
	function (value, lighting) {
		return _Utils_update(
			lighting,
			{
				ar: $ianmackenzie$elm_units$Angle$degrees(value)
			});
	});
var $author$project$View3d$Orbiting = 1;
var $author$project$View3d$Panning = 2;
var $author$project$View3d$controlMouseDown = F2(
	function (event, rendering) {
		var controlling = event.il.hu ? 2 : 1;
		return _Utils_update(
			rendering,
			{bJ: controlling});
	});
var $elm$core$Basics$clamp = F3(
	function (low, high, number) {
		return (_Utils_cmp(number, low) < 0) ? low : ((_Utils_cmp(number, high) > 0) ? high : number);
	});
var $ianmackenzie$elm_units$Quantity$clamp = F3(
	function (_v0, _v1, _v2) {
		var lower = _v0;
		var upper = _v1;
		var value = _v2;
		return (_Utils_cmp(lower, upper) < 1) ? A3($elm$core$Basics$clamp, lower, upper, value) : A3($elm$core$Basics$clamp, upper, lower, value);
	});
var $ianmackenzie$elm_units$Quantity$plus = F2(
	function (_v0, _v1) {
		var y = _v0;
		var x = _v1;
		return x + y;
	});
var $author$project$View3d$orbit = F3(
	function (dx, dy, camera) {
		var minElevation = $ianmackenzie$elm_units$Angle$degrees(0);
		var maxElevation = $ianmackenzie$elm_units$Angle$degrees(90);
		return {
			an: A2(
				$ianmackenzie$elm_units$Quantity$plus,
				$ianmackenzie$elm_units$Angle$degrees(-dx),
				camera.an),
			ap: camera.ap,
			ar: A3(
				$ianmackenzie$elm_units$Quantity$clamp,
				minElevation,
				maxElevation,
				A2(
					$ianmackenzie$elm_units$Quantity$plus,
					$ianmackenzie$elm_units$Angle$degrees(dy),
					camera.ar)),
			bO: camera.bO
		};
	});
var $ianmackenzie$elm_units$Quantity$multiplyBy = F2(
	function (scale, _v0) {
		var value = _v0;
		return scale * value;
	});
var $ianmackenzie$elm_3d_camera$Camera3d$Types$Viewpoint3d = $elm$core$Basics$identity;
var $ianmackenzie$elm_units$Quantity$negate = function (_v0) {
	var value = _v0;
	return -value;
};
var $ianmackenzie$elm_geometry$Geometry$Types$Direction3d = $elm$core$Basics$identity;
var $ianmackenzie$elm_geometry$Unsafe$Direction3d$unsafeCrossProduct = F2(
	function (_v0, _v1) {
		var d1 = _v0;
		var d2 = _v1;
		return {eG: (d1.dx * d2.eJ) - (d1.eJ * d2.dx), dx: (d1.eJ * d2.eG) - (d1.eG * d2.eJ), eJ: (d1.eG * d2.dx) - (d1.dx * d2.eG)};
	});
var $ianmackenzie$elm_geometry$SketchPlane3d$xDirection = function (_v0) {
	var properties = _v0;
	return properties.eH;
};
var $ianmackenzie$elm_geometry$SketchPlane3d$yDirection = function (_v0) {
	var properties = _v0;
	return properties.eI;
};
var $ianmackenzie$elm_geometry$SketchPlane3d$normalDirection = function (sketchPlane) {
	return A2(
		$ianmackenzie$elm_geometry$Unsafe$Direction3d$unsafeCrossProduct,
		$ianmackenzie$elm_geometry$SketchPlane3d$xDirection(sketchPlane),
		$ianmackenzie$elm_geometry$SketchPlane3d$yDirection(sketchPlane));
};
var $ianmackenzie$elm_geometry$Frame3d$originPoint = function (_v0) {
	var properties = _v0;
	return properties.eb;
};
var $elm$core$Basics$cos = _Basics_cos;
var $elm$core$Basics$sin = _Basics_sin;
var $ianmackenzie$elm_geometry$Direction3d$rotateAround = F3(
	function (_v0, _v1, _v2) {
		var axis = _v0;
		var angle = _v1;
		var d = _v2;
		var halfAngle = 0.5 * angle;
		var qw = $elm$core$Basics$cos(halfAngle);
		var sinHalfAngle = $elm$core$Basics$sin(halfAngle);
		var _v3 = axis.hE;
		var a = _v3;
		var qx = a.eG * sinHalfAngle;
		var qwx = qw * qx;
		var qxx = qx * qx;
		var qy = a.dx * sinHalfAngle;
		var qwy = qw * qy;
		var qxy = qx * qy;
		var qyy = qy * qy;
		var a22 = 1 - (2 * (qxx + qyy));
		var qz = a.eJ * sinHalfAngle;
		var qwz = qw * qz;
		var a01 = 2 * (qxy - qwz);
		var a10 = 2 * (qxy + qwz);
		var qxz = qx * qz;
		var a02 = 2 * (qxz + qwy);
		var a20 = 2 * (qxz - qwy);
		var qyz = qy * qz;
		var a12 = 2 * (qyz - qwx);
		var a21 = 2 * (qyz + qwx);
		var qzz = qz * qz;
		var a00 = 1 - (2 * (qyy + qzz));
		var a11 = 1 - (2 * (qxx + qzz));
		return {eG: ((a00 * d.eG) + (a01 * d.dx)) + (a02 * d.eJ), dx: ((a10 * d.eG) + (a11 * d.dx)) + (a12 * d.eJ), eJ: ((a20 * d.eG) + (a21 * d.dx)) + (a22 * d.eJ)};
	});
var $ianmackenzie$elm_geometry$Geometry$Types$Point3d = $elm$core$Basics$identity;
var $ianmackenzie$elm_geometry$Point3d$rotateAround = F3(
	function (_v0, _v1, _v2) {
		var axis = _v0;
		var angle = _v1;
		var p = _v2;
		var halfAngle = 0.5 * angle;
		var qw = $elm$core$Basics$cos(halfAngle);
		var sinHalfAngle = $elm$core$Basics$sin(halfAngle);
		var _v3 = axis.eb;
		var p0 = _v3;
		var deltaX = p.eG - p0.eG;
		var deltaY = p.dx - p0.dx;
		var deltaZ = p.eJ - p0.eJ;
		var _v4 = axis.hE;
		var d = _v4;
		var qx = d.eG * sinHalfAngle;
		var wx = qw * qx;
		var xx = qx * qx;
		var qy = d.dx * sinHalfAngle;
		var wy = qw * qy;
		var xy = qx * qy;
		var yy = qy * qy;
		var a22 = 1 - (2 * (xx + yy));
		var qz = d.eJ * sinHalfAngle;
		var wz = qw * qz;
		var a01 = 2 * (xy - wz);
		var a10 = 2 * (xy + wz);
		var xz = qx * qz;
		var a02 = 2 * (xz + wy);
		var a20 = 2 * (xz - wy);
		var yz = qy * qz;
		var a12 = 2 * (yz - wx);
		var a21 = 2 * (yz + wx);
		var zz = qz * qz;
		var a00 = 1 - (2 * (yy + zz));
		var a11 = 1 - (2 * (xx + zz));
		return {eG: ((p0.eG + (a00 * deltaX)) + (a01 * deltaY)) + (a02 * deltaZ), dx: ((p0.dx + (a10 * deltaX)) + (a11 * deltaY)) + (a12 * deltaZ), eJ: ((p0.eJ + (a20 * deltaX)) + (a21 * deltaY)) + (a22 * deltaZ)};
	});
var $ianmackenzie$elm_geometry$Geometry$Types$Frame3d = $elm$core$Basics$identity;
var $ianmackenzie$elm_geometry$Frame3d$unsafe = function (properties) {
	return properties;
};
var $ianmackenzie$elm_geometry$Frame3d$xDirection = function (_v0) {
	var properties = _v0;
	return properties.eH;
};
var $ianmackenzie$elm_geometry$Frame3d$yDirection = function (_v0) {
	var properties = _v0;
	return properties.eI;
};
var $ianmackenzie$elm_geometry$Frame3d$zDirection = function (_v0) {
	var properties = _v0;
	return properties.eK;
};
var $ianmackenzie$elm_geometry$Frame3d$rotateAround = F3(
	function (axis, angle, frame) {
		return $ianmackenzie$elm_geometry$Frame3d$unsafe(
			{
				eb: A3(
					$ianmackenzie$elm_geometry$Point3d$rotateAround,
					axis,
					angle,
					$ianmackenzie$elm_geometry$Frame3d$originPoint(frame)),
				eH: A3(
					$ianmackenzie$elm_geometry$Direction3d$rotateAround,
					axis,
					angle,
					$ianmackenzie$elm_geometry$Frame3d$xDirection(frame)),
				eI: A3(
					$ianmackenzie$elm_geometry$Direction3d$rotateAround,
					axis,
					angle,
					$ianmackenzie$elm_geometry$Frame3d$yDirection(frame)),
				eK: A3(
					$ianmackenzie$elm_geometry$Direction3d$rotateAround,
					axis,
					angle,
					$ianmackenzie$elm_geometry$Frame3d$zDirection(frame))
			});
	});
var $ianmackenzie$elm_geometry$Frame3d$rotateAroundOwn = F3(
	function (axis, angle, frame) {
		return A3(
			$ianmackenzie$elm_geometry$Frame3d$rotateAround,
			axis(frame),
			angle,
			frame);
	});
var $ianmackenzie$elm_geometry$Axis3d$direction = function (_v0) {
	var axis = _v0;
	return axis.hE;
};
var $ianmackenzie$elm_geometry$Point3d$translateBy = F2(
	function (_v0, _v1) {
		var v = _v0;
		var p = _v1;
		return {eG: p.eG + v.eG, dx: p.dx + v.dx, eJ: p.eJ + v.eJ};
	});
var $ianmackenzie$elm_geometry$Frame3d$translateBy = F2(
	function (vector, frame) {
		return $ianmackenzie$elm_geometry$Frame3d$unsafe(
			{
				eb: A2(
					$ianmackenzie$elm_geometry$Point3d$translateBy,
					vector,
					$ianmackenzie$elm_geometry$Frame3d$originPoint(frame)),
				eH: $ianmackenzie$elm_geometry$Frame3d$xDirection(frame),
				eI: $ianmackenzie$elm_geometry$Frame3d$yDirection(frame),
				eK: $ianmackenzie$elm_geometry$Frame3d$zDirection(frame)
			});
	});
var $ianmackenzie$elm_geometry$Geometry$Types$Vector3d = $elm$core$Basics$identity;
var $ianmackenzie$elm_geometry$Vector3d$withLength = F2(
	function (_v0, _v1) {
		var a = _v0;
		var d = _v1;
		return {eG: a * d.eG, dx: a * d.dx, eJ: a * d.eJ};
	});
var $ianmackenzie$elm_geometry$Frame3d$translateIn = F3(
	function (direction, distance, frame) {
		return A2(
			$ianmackenzie$elm_geometry$Frame3d$translateBy,
			A2($ianmackenzie$elm_geometry$Vector3d$withLength, distance, direction),
			frame);
	});
var $ianmackenzie$elm_geometry$Frame3d$translateAlongOwn = F3(
	function (axis, distance, frame) {
		return A3(
			$ianmackenzie$elm_geometry$Frame3d$translateIn,
			$ianmackenzie$elm_geometry$Axis3d$direction(
				axis(frame)),
			distance,
			frame);
	});
var $ianmackenzie$elm_geometry$Geometry$Types$Axis3d = $elm$core$Basics$identity;
var $ianmackenzie$elm_geometry$Axis3d$through = F2(
	function (givenPoint, givenDirection) {
		return {hE: givenDirection, eb: givenPoint};
	});
var $ianmackenzie$elm_geometry$Frame3d$xAxis = function (_v0) {
	var frame = _v0;
	return A2($ianmackenzie$elm_geometry$Axis3d$through, frame.eb, frame.eH);
};
var $ianmackenzie$elm_geometry$Frame3d$yAxis = function (_v0) {
	var frame = _v0;
	return A2($ianmackenzie$elm_geometry$Axis3d$through, frame.eb, frame.eI);
};
var $ianmackenzie$elm_geometry$Frame3d$zAxis = function (_v0) {
	var frame = _v0;
	return A2($ianmackenzie$elm_geometry$Axis3d$through, frame.eb, frame.eK);
};
var $ianmackenzie$elm_3d_camera$Viewpoint3d$orbit = function (_arguments) {
	var initialFrame = $ianmackenzie$elm_geometry$Frame3d$unsafe(
		{
			eb: _arguments.bO,
			eH: $ianmackenzie$elm_geometry$SketchPlane3d$yDirection(_arguments.c_),
			eI: $ianmackenzie$elm_geometry$SketchPlane3d$normalDirection(_arguments.c_),
			eK: $ianmackenzie$elm_geometry$SketchPlane3d$xDirection(_arguments.c_)
		});
	var finalFrame = A3(
		$ianmackenzie$elm_geometry$Frame3d$translateAlongOwn,
		$ianmackenzie$elm_geometry$Frame3d$zAxis,
		_arguments.ap,
		A3(
			$ianmackenzie$elm_geometry$Frame3d$rotateAroundOwn,
			$ianmackenzie$elm_geometry$Frame3d$xAxis,
			$ianmackenzie$elm_units$Quantity$negate(_arguments.ar),
			A3($ianmackenzie$elm_geometry$Frame3d$rotateAroundOwn, $ianmackenzie$elm_geometry$Frame3d$yAxis, _arguments.an, initialFrame)));
	return finalFrame;
};
var $ianmackenzie$elm_geometry$Point3d$origin = {eG: 0, dx: 0, eJ: 0};
var $ianmackenzie$elm_geometry$Geometry$Types$SketchPlane3d = $elm$core$Basics$identity;
var $ianmackenzie$elm_geometry$SketchPlane3d$unsafe = $elm$core$Basics$identity;
var $ianmackenzie$elm_geometry$Direction3d$unsafe = function (givenComponents) {
	return givenComponents;
};
var $ianmackenzie$elm_geometry$Direction3d$positiveX = $ianmackenzie$elm_geometry$Direction3d$unsafe(
	{eG: 1, dx: 0, eJ: 0});
var $ianmackenzie$elm_geometry$Direction3d$x = $ianmackenzie$elm_geometry$Direction3d$positiveX;
var $ianmackenzie$elm_geometry$Direction3d$positiveY = $ianmackenzie$elm_geometry$Direction3d$unsafe(
	{eG: 0, dx: 1, eJ: 0});
var $ianmackenzie$elm_geometry$Direction3d$y = $ianmackenzie$elm_geometry$Direction3d$positiveY;
var $ianmackenzie$elm_geometry$SketchPlane3d$xy = $ianmackenzie$elm_geometry$SketchPlane3d$unsafe(
	{eb: $ianmackenzie$elm_geometry$Point3d$origin, eH: $ianmackenzie$elm_geometry$Direction3d$x, eI: $ianmackenzie$elm_geometry$Direction3d$y});
var $ianmackenzie$elm_3d_camera$Viewpoint3d$orbitZ = function (_v0) {
	var focalPoint = _v0.bO;
	var azimuth = _v0.an;
	var elevation = _v0.ar;
	var distance = _v0.ap;
	return $ianmackenzie$elm_3d_camera$Viewpoint3d$orbit(
		{an: azimuth, ap: distance, ar: elevation, bO: focalPoint, c_: $ianmackenzie$elm_geometry$SketchPlane3d$xy});
};
var $ianmackenzie$elm_geometry$Frame3d$xySketchPlane = function (frame) {
	return $ianmackenzie$elm_geometry$SketchPlane3d$unsafe(
		{
			eb: $ianmackenzie$elm_geometry$Frame3d$originPoint(frame),
			eH: $ianmackenzie$elm_geometry$Frame3d$xDirection(frame),
			eI: $ianmackenzie$elm_geometry$Frame3d$yDirection(frame)
		});
};
var $ianmackenzie$elm_3d_camera$Viewpoint3d$viewPlane = function (_v0) {
	var frame = _v0;
	return $ianmackenzie$elm_geometry$Frame3d$xySketchPlane(frame);
};
var $ianmackenzie$elm_geometry$Vector3d$xyOn = F3(
	function (_v0, _v1, _v2) {
		var sketchPlane = _v0;
		var x = _v1;
		var y = _v2;
		var _v3 = sketchPlane.eI;
		var j = _v3;
		var _v4 = sketchPlane.eH;
		var i = _v4;
		return {eG: (x * i.eG) + (y * j.eG), dx: (x * i.dx) + (y * j.dx), eJ: (x * i.eJ) + (y * j.eJ)};
	});
var $author$project$View3d$pan = F3(
	function (dx, dy, camera) {
		var viewPoint = $ianmackenzie$elm_3d_camera$Viewpoint3d$orbitZ(camera);
		var displacement = A3(
			$ianmackenzie$elm_geometry$Vector3d$xyOn,
			$ianmackenzie$elm_3d_camera$Viewpoint3d$viewPlane(viewPoint),
			A2($ianmackenzie$elm_units$Quantity$multiplyBy, (-0.001) * dx, camera.ap),
			A2($ianmackenzie$elm_units$Quantity$multiplyBy, 0.001 * dy, camera.ap));
		return {
			an: camera.an,
			ap: camera.ap,
			ar: camera.ar,
			bO: A2($ianmackenzie$elm_geometry$Point3d$translateBy, displacement, camera.bO)
		};
	});
var $author$project$View3d$controlMouseMove = F3(
	function (_v0, controlling, camera) {
		var dx = _v0.a;
		var dy = _v0.b;
		switch (controlling) {
			case 0:
				return camera;
			case 1:
				return A3($author$project$View3d$orbit, dx, dy, camera);
			default:
				return A3($author$project$View3d$pan, dx, dy, camera);
		}
	});
var $author$project$View3d$controlMouseUp = function (rendering) {
	return _Utils_update(
		rendering,
		{bJ: 0});
};
var $author$project$View3d$controlZoomIn = function (camera) {
	return _Utils_update(
		camera,
		{
			ap: A2($ianmackenzie$elm_units$Quantity$multiplyBy, 21 / 29.7, camera.ap)
		});
};
var $author$project$View3d$controlZoomOut = function (camera) {
	return _Utils_update(
		camera,
		{
			ap: A2($ianmackenzie$elm_units$Quantity$multiplyBy, 29.7 / 21, camera.ap)
		});
};
var $elm$file$File$Select$file = F2(
	function (mimes, toMsg) {
		return A2(
			$elm$core$Task$perform,
			toMsg,
			_File_uploadOne(mimes));
	});
var $author$project$View3d$grid = F2(
	function (w, h) {
		var ys = A2($elm$core$List$range, 0, h - 1);
		var xs = A2($elm$core$List$range, 0, w - 1);
		return A2(
			$elm$core$List$map,
			function (x) {
				return A2(
					$elm$core$List$map,
					function (y) {
						return _Utils_Tuple2(x, y);
					},
					ys);
			},
			xs);
	});
var $author$project$View3d$terminatedStrip = F3(
	function (line1, line2, accum) {
		terminatedStrip:
		while (true) {
			var _v0 = _Utils_Tuple3(line1, line2, accum);
			if (_v0.a.b && _v0.b.b) {
				if (_v0.a.b.b && _v0.b.b.b) {
					var _v1 = _v0.a;
					var x1 = _v1.a;
					var x1s = _v1.b;
					var _v2 = _v0.b;
					var x2 = _v2.a;
					var x2s = _v2.b;
					var $temp$line1 = x1s,
						$temp$line2 = x2s,
						$temp$accum = A2(
						$elm$core$List$cons,
						x2,
						A2($elm$core$List$cons, x1, accum));
					line1 = $temp$line1;
					line2 = $temp$line2;
					accum = $temp$accum;
					continue terminatedStrip;
				} else {
					var _v3 = _v0.a;
					var x1 = _v3.a;
					var _v4 = _v0.b;
					var x2 = _v4.a;
					return A2(
						$elm$core$List$cons,
						x2,
						A2(
							$elm$core$List$cons,
							x2,
							A2($elm$core$List$cons, x1, accum)));
				}
			} else {
				return accum;
			}
		}
	});
var $author$project$View3d$joinTerminatedStrip = F3(
	function (line1, line2, accum) {
		var _v0 = _Utils_Tuple2(line1, line2);
		if (_v0.a.b && _v0.b.b) {
			var _v1 = _v0.a;
			var x1 = _v1.a;
			var x1s = _v1.b;
			var _v2 = _v0.b;
			var x2 = _v2.a;
			var x2s = _v2.b;
			return A3(
				$author$project$View3d$terminatedStrip,
				x1s,
				x2s,
				A2(
					$elm$core$List$cons,
					x2,
					A2(
						$elm$core$List$cons,
						x1,
						A2($elm$core$List$cons, x1, accum))));
		} else {
			return accum;
		}
	});
var $author$project$View3d$stripHelper = F2(
	function (accum, matrix) {
		stripHelper:
		while (true) {
			if (matrix.b && matrix.b.b) {
				var currentLine = matrix.a;
				var _v1 = matrix.b;
				var nextLine = _v1.a;
				var followingLines = _v1.b;
				var $temp$accum = A3($author$project$View3d$joinTerminatedStrip, currentLine, nextLine, accum),
					$temp$matrix = A2($elm$core$List$cons, nextLine, followingLines);
				accum = $temp$accum;
				matrix = $temp$matrix;
				continue stripHelper;
			} else {
				return accum;
			}
		}
	});
var $author$project$View3d$toTriangleStrip = $author$project$View3d$stripHelper(_List_Nil);
var $elm_explorations$linear_algebra$Math$Vector2$vec2 = _MJS_v2;
var $author$project$View3d$toVertex = F3(
	function (w, h, _v0) {
		var u = _v0.a;
		var v = _v0.b;
		var y = v;
		var x = u;
		var widthScale = 1.0 / w;
		var heightScale = 1.0 / h;
		var scaleCoef = A2($elm$core$Basics$min, widthScale, heightScale);
		return {
			fM: A2($elm_explorations$linear_algebra$Math$Vector2$vec2, widthScale * x, heightScale * y),
			gg: A2($elm_explorations$linear_algebra$Math$Vector2$vec2, scaleCoef * x, scaleCoef * y)
		};
	});
var $elm_explorations$webgl$WebGL$Mesh1 = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var $elm_explorations$webgl$WebGL$triangleStrip = $elm_explorations$webgl$WebGL$Mesh1(
	{e1: 1, fg: 0, fW: 5});
var $author$project$View3d$gridMesh = F2(
	function (w, h) {
		return $elm_explorations$webgl$WebGL$triangleStrip(
			$author$project$View3d$toTriangleStrip(
				A2(
					$elm$core$List$map,
					$elm$core$List$map(
						A2($author$project$View3d$toVertex, w, h)),
					A2($author$project$View3d$grid, w, h))));
	});
var $ianmackenzie$elm_units$Quantity$zero = 0;
var $author$project$View3d$initialLighting = {
	an: $ianmackenzie$elm_units$Quantity$zero,
	ar: $ianmackenzie$elm_units$Angle$degrees(90)
};
var $ianmackenzie$elm_units$Length$meters = function (numMeters) {
	return numMeters;
};
var $ianmackenzie$elm_geometry$Point3d$xyz = F3(
	function (_v0, _v1, _v2) {
		var x = _v0;
		var y = _v1;
		var z = _v2;
		return {eG: x, dx: y, eJ: z};
	});
var $author$project$View3d$initialOrbitCamera = function (_v0) {
	var targetX = _v0.a;
	var targetY = _v0.b;
	return {
		an: $ianmackenzie$elm_units$Angle$degrees(-90),
		ap: $ianmackenzie$elm_units$Length$meters(2),
		ar: $ianmackenzie$elm_units$Angle$degrees(60),
		bO: A3(
			$ianmackenzie$elm_geometry$Point3d$xyz,
			$ianmackenzie$elm_units$Length$meters(targetX),
			$ianmackenzie$elm_units$Length$meters(targetY),
			$ianmackenzie$elm_units$Quantity$zero)
	};
};
var $ianmackenzie$elm_units$Angle$inRadians = function (_v0) {
	var numRadians = _v0;
	return numRadians;
};
var $ianmackenzie$elm_units$Angle$inDegrees = function (angle) {
	return 180 * ($ianmackenzie$elm_units$Angle$inRadians(angle) / $elm$core$Basics$pi);
};
var $author$project$View3d$shiftLightAzimuth = F2(
	function (value, lighting) {
		var oldAzimuth = $ianmackenzie$elm_units$Angle$inDegrees(lighting.an);
		return _Utils_update(
			lighting,
			{
				an: $ianmackenzie$elm_units$Angle$degrees(value + oldAzimuth)
			});
	});
var $author$project$View3d$shiftLightElevation = F2(
	function (value, lighting) {
		var oldElevation = $ianmackenzie$elm_units$Angle$inDegrees(lighting.ar);
		return _Utils_update(
			lighting,
			{
				ar: $ianmackenzie$elm_units$Angle$degrees(value + oldElevation)
			});
	});
var $elm_explorations$webgl$WebGL$Texture$size = _Texture_size;
var $elm$file$File$toUrl = _File_toUrl;
var $author$project$View3d$update = F2(
	function (msg, model) {
		var _v0 = _Utils_Tuple2(msg, model);
		_v0$16:
		while (true) {
			switch (_v0.a.$) {
				case 4:
					var _v1 = _v0.a;
					return _Utils_Tuple2(
						$author$project$View3d$Landing,
						A2(
							$elm$file$File$Select$file,
							_List_fromArray(
								['image/png']),
							$author$project$View3d$ImageLoaded));
				case 1:
					if (!_v0.b.$) {
						var file = _v0.a.a;
						var _v2 = _v0.b;
						return _Utils_Tuple2(
							$author$project$View3d$LoadingTexture,
							A2(
								$elm$core$Task$perform,
								$author$project$View3d$UrlGenerated,
								$elm$file$File$toUrl(file)));
					} else {
						break _v0$16;
					}
				case 2:
					if (_v0.b.$ === 1) {
						var url = _v0.a.a;
						var _v3 = _v0.b;
						return _Utils_Tuple2(
							$author$project$View3d$LoadingTexture,
							A2(
								$elm$core$Task$attempt,
								$author$project$View3d$TextureLoaded,
								$author$project$View3d$loadTexture(url)));
					} else {
						break _v0$16;
					}
				case 3:
					if (_v0.a.a.$ === 1) {
						var err = _v0.a.a.a;
						return _Utils_Tuple2(
							$author$project$View3d$ErrorLoadingTexture(err),
							$elm$core$Platform$Cmd$none);
					} else {
						var texture = _v0.a.a.a;
						var _v4 = $elm_explorations$webgl$WebGL$Texture$size(texture);
						var w = _v4.a;
						var h = _v4.b;
						return _Utils_Tuple2(
							$author$project$View3d$Rendering(
								{
									aT: $author$project$View3d$initialOrbitCamera(
										$author$project$View3d$centerTarget(
											_Utils_Tuple2(w, h))),
									bJ: 0,
									cU: 0,
									dJ: texture,
									cW: 0.1,
									aB: $author$project$View3d$initialLighting,
									d3: A2($author$project$View3d$gridMesh, w, h),
									gv: _Utils_Tuple2(w, h)
								}),
							$elm$core$Platform$Cmd$none);
					}
				case 0:
					if (_v0.b.$ === 3) {
						var elapsed = _v0.a.a;
						var r = _v0.b.a;
						return _Utils_Tuple2(
							$author$project$View3d$Rendering(
								_Utils_update(
									r,
									{cU: r.cU + elapsed})),
							$elm$core$Platform$Cmd$none);
					} else {
						break _v0$16;
					}
				case 5:
					if (_v0.b.$ === 3) {
						var _v5 = _v0.a;
						var r = _v0.b.a;
						return _Utils_Tuple2(
							$author$project$View3d$Rendering(
								_Utils_update(
									r,
									{
										aT: $author$project$View3d$controlZoomIn(r.aT)
									})),
							$elm$core$Platform$Cmd$none);
					} else {
						break _v0$16;
					}
				case 6:
					if (_v0.b.$ === 3) {
						var _v6 = _v0.a;
						var r = _v0.b.a;
						return _Utils_Tuple2(
							$author$project$View3d$Rendering(
								_Utils_update(
									r,
									{
										aT: $author$project$View3d$controlZoomOut(r.aT)
									})),
							$elm$core$Platform$Cmd$none);
					} else {
						break _v0$16;
					}
				case 7:
					if (_v0.b.$ === 3) {
						var event = _v0.a.a;
						var r = _v0.b.a;
						return _Utils_Tuple2(
							$author$project$View3d$Rendering(
								A2($author$project$View3d$controlMouseDown, event, r)),
							$elm$core$Platform$Cmd$none);
					} else {
						break _v0$16;
					}
				case 9:
					if (_v0.b.$ === 3) {
						var _v7 = _v0.a;
						var r = _v0.b.a;
						return _Utils_Tuple2(
							$author$project$View3d$Rendering(
								$author$project$View3d$controlMouseUp(r)),
							$elm$core$Platform$Cmd$none);
					} else {
						break _v0$16;
					}
				case 8:
					if (_v0.b.$ === 3) {
						var movement = _v0.a.a;
						var r = _v0.b.a;
						return _Utils_Tuple2(
							$author$project$View3d$Rendering(
								_Utils_update(
									r,
									{
										aT: A3($author$project$View3d$controlMouseMove, movement, r.bJ, r.aT)
									})),
							$elm$core$Platform$Cmd$none);
					} else {
						break _v0$16;
					}
				case 10:
					if (_v0.b.$ === 3) {
						var az = _v0.a.a;
						var r = _v0.b.a;
						return _Utils_Tuple2(
							$author$project$View3d$Rendering(
								_Utils_update(
									r,
									{
										aB: A2($author$project$View3d$changeLightAzimuth, az, r.aB)
									})),
							$elm$core$Platform$Cmd$none);
					} else {
						break _v0$16;
					}
				case 11:
					if (_v0.b.$ === 3) {
						var el = _v0.a.a;
						var r = _v0.b.a;
						return _Utils_Tuple2(
							$author$project$View3d$Rendering(
								_Utils_update(
									r,
									{
										aB: A2($author$project$View3d$changeLightElevation, el, r.aB)
									})),
							$elm$core$Platform$Cmd$none);
					} else {
						break _v0$16;
					}
				case 12:
					if (_v0.b.$ === 3) {
						var az = _v0.a.a;
						var r = _v0.b.a;
						return _Utils_Tuple2(
							$author$project$View3d$Rendering(
								_Utils_update(
									r,
									{
										aB: A2($author$project$View3d$shiftLightAzimuth, az, r.aB)
									})),
							$elm$core$Platform$Cmd$none);
					} else {
						break _v0$16;
					}
				case 13:
					if (_v0.b.$ === 3) {
						var el = _v0.a.a;
						var r = _v0.b.a;
						return _Utils_Tuple2(
							$author$project$View3d$Rendering(
								_Utils_update(
									r,
									{
										aB: A2($author$project$View3d$shiftLightElevation, el, r.aB)
									})),
							$elm$core$Platform$Cmd$none);
					} else {
						break _v0$16;
					}
				default:
					if (_v0.b.$ === 3) {
						var scale = _v0.a.a;
						var r = _v0.b.a;
						return _Utils_Tuple2(
							$author$project$View3d$Rendering(
								_Utils_update(
									r,
									{cW: scale})),
							$elm$core$Platform$Cmd$none);
					} else {
						break _v0$16;
					}
			}
		}
		return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
	});
var $author$project$Main$changeCropSide = F2(
	function (updateSide, model) {
		var paramsForm = model.q;
		var params = model.s;
		var newCropForm = updateSide(paramsForm.c);
		var newCrop = $author$project$CropForm$decoded(newCropForm);
		return _Utils_update(
			model,
			{
				ag: A2($elm$core$Maybe$map, $author$project$Main$toBBox, newCrop),
				s: _Utils_update(
					params,
					{c: newCrop}),
				q: _Utils_update(
					paramsForm,
					{c: newCropForm})
			});
	});
var $author$project$NumberInput$FloatParsingError = {$: 0};
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
	return {$: 2, a: a};
};
var $author$project$NumberInput$validateMaxFloat = F2(
	function (maybeMax, decoder) {
		if (maybeMax.$ === 1) {
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
	return {$: 1, a: a};
};
var $author$project$NumberInput$validateMinFloat = F2(
	function (maybeMin, decoder) {
		if (maybeMin.$ === 1) {
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
				W: A2(
					$arowM$elm_form_decoder$Form$Decoder$run,
					A2($author$project$NumberInput$floatDecoder, field.db, field.da),
					input),
				dR: input
			});
	});
var $author$project$Main$updateParams = F2(
	function (msg, model) {
		var params = model.s;
		var paramsForm = model.q;
		switch (msg.$) {
			case 1:
				var str = msg.a;
				var updatedField = A2($author$project$NumberInput$updateInt, str, paramsForm.O);
				var updatedForm = _Utils_update(
					paramsForm,
					{O: updatedField});
				var _v1 = updatedField.W;
				if (!_v1.$) {
					var maxVerbosity = _v1.a;
					return _Utils_update(
						model,
						{
							s: _Utils_update(
								params,
								{O: maxVerbosity}),
							q: updatedForm
						});
				} else {
					return _Utils_update(
						model,
						{q: updatedForm});
				}
			case 0:
				var str = msg.a;
				var updatedField = A2($author$project$NumberInput$updateInt, str, paramsForm.z);
				var updatedForm = _Utils_update(
					paramsForm,
					{z: updatedField});
				var _v2 = updatedField.W;
				if (!_v2.$) {
					var maxIterations = _v2.a;
					return _Utils_update(
						model,
						{
							s: _Utils_update(
								params,
								{z: maxIterations}),
							q: updatedForm
						});
				} else {
					return _Utils_update(
						model,
						{q: updatedForm});
				}
			case 2:
				var str = msg.a;
				var updatedField = A2($author$project$NumberInput$updateFloat, str, paramsForm.x);
				var updatedForm = _Utils_update(
					paramsForm,
					{x: updatedField});
				var _v3 = updatedField.W;
				if (!_v3.$) {
					var convergenceThreshold = _v3.a;
					return _Utils_update(
						model,
						{
							s: _Utils_update(
								params,
								{x: convergenceThreshold}),
							q: updatedForm
						});
				} else {
					return _Utils_update(
						model,
						{q: updatedForm});
				}
			case 3:
				var str = msg.a;
				var updatedField = A2($author$project$NumberInput$updateFloat, str, paramsForm.E);
				var updatedForm = _Utils_update(
					paramsForm,
					{E: updatedField});
				var _v4 = updatedField.W;
				if (!_v4.$) {
					var z = _v4.a;
					return _Utils_update(
						model,
						{
							s: _Utils_update(
								params,
								{E: z}),
							q: updatedForm
						});
				} else {
					return _Utils_update(
						model,
						{q: updatedForm});
				}
			case 4:
				var activeCrop = msg.a;
				var newCropForm = A2($author$project$CropForm$toggle, activeCrop, paramsForm.c);
				var _v5 = _Utils_Tuple2(
					activeCrop,
					$author$project$CropForm$decoded(newCropForm));
				if (_v5.a && (!_v5.b.$)) {
					var crop = _v5.b.a;
					return _Utils_update(
						model,
						{
							ag: $elm$core$Maybe$Just(
								$author$project$Main$toBBox(crop)),
							s: _Utils_update(
								params,
								{
									c: $elm$core$Maybe$Just(crop)
								}),
							q: _Utils_update(
								paramsForm,
								{c: newCropForm})
						});
				} else {
					return _Utils_update(
						model,
						{
							ag: $elm$core$Maybe$Nothing,
							s: _Utils_update(
								params,
								{c: $elm$core$Maybe$Nothing}),
							q: _Utils_update(
								paramsForm,
								{c: newCropForm})
						});
				}
			case 5:
				var str = msg.a;
				return A2(
					$author$project$Main$changeCropSide,
					$author$project$CropForm$updateLeft(str),
					model);
			case 6:
				var str = msg.a;
				return A2(
					$author$project$Main$changeCropSide,
					$author$project$CropForm$updateTop(str),
					model);
			case 7:
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
			case 0:
				var visible = msg.a;
				return _Utils_update(
					toggleInfo,
					{c: visible});
			case 1:
				var visible = msg.a;
				return _Utils_update(
					toggleInfo,
					{z: visible});
			case 2:
				var visible = msg.a;
				return _Utils_update(
					toggleInfo,
					{O: visible});
			case 3:
				var visible = msg.a;
				return _Utils_update(
					toggleInfo,
					{E: visible});
			default:
				var visible = msg.a;
				return _Utils_update(
					toggleInfo,
					{x: visible});
		}
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
var $mpizenberg$elm_2d_viewer$Viewer$coordinatesInViewer = F2(
	function (viewer, _v0) {
		var xV = _v0.a;
		var yV = _v0.b;
		var _v1 = viewer.iI;
		var ox = _v1.a;
		var oy = _v1.b;
		return _Utils_Tuple2((xV - ox) / viewer.co, (yV - oy) / viewer.co);
	});
var $mpizenberg$elm_2d_viewer$Viewer$rescaleFixPoint = F3(
	function (scale, coordinates, viewer) {
		var x = coordinates.a;
		var y = coordinates.b;
		var _v0 = A2($mpizenberg$elm_2d_viewer$Viewer$coordinatesInViewer, viewer, coordinates);
		var viewerX = _v0.a;
		var viewerY = _v0.b;
		var newOrigin = _Utils_Tuple2(x - (scale * viewerX), y - (scale * viewerY));
		var _v1 = viewer.iI;
		var ox = _v1.a;
		var oy = _v1.b;
		return _Utils_update(
			viewer,
			{iI: newOrigin, co: scale});
	});
var $mpizenberg$elm_2d_viewer$Viewer$zoomInCoef = 2.0 / 3.0;
var $mpizenberg$elm_2d_viewer$Viewer$zoomOutCoef = 1.0 / $mpizenberg$elm_2d_viewer$Viewer$zoomInCoef;
var $mpizenberg$elm_2d_viewer$Viewer$zoomAwayFrom = F2(
	function (coordinates, viewer) {
		return A3($mpizenberg$elm_2d_viewer$Viewer$rescaleFixPoint, $mpizenberg$elm_2d_viewer$Viewer$zoomOutCoef * viewer.co, coordinates, viewer);
	});
var $mpizenberg$elm_2d_viewer$Viewer$coordinatesAtCenter = function (viewer) {
	var _v0 = viewer.gv;
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
				{co: scale}));
	});
var $mpizenberg$elm_2d_viewer$Viewer$zoomIn = function (viewer) {
	return A2($mpizenberg$elm_2d_viewer$Viewer$rescaleCentered, $mpizenberg$elm_2d_viewer$Viewer$zoomInCoef * viewer.co, viewer);
};
var $mpizenberg$elm_2d_viewer$Viewer$zoomOut = function (viewer) {
	return A2($mpizenberg$elm_2d_viewer$Viewer$rescaleCentered, $mpizenberg$elm_2d_viewer$Viewer$zoomOutCoef * viewer.co, viewer);
};
var $mpizenberg$elm_2d_viewer$Viewer$zoomToward = F2(
	function (coordinates, viewer) {
		return A3($mpizenberg$elm_2d_viewer$Viewer$rescaleFixPoint, $mpizenberg$elm_2d_viewer$Viewer$zoomInCoef * viewer.co, coordinates, viewer);
	});
var $author$project$Main$zoomViewer = F2(
	function (msg, viewer) {
		switch (msg.$) {
			case 0:
				var img = msg.a;
				return A3(
					$mpizenberg$elm_2d_viewer$Viewer$fitImage,
					1.1,
					_Utils_Tuple2(img.eB, img.dO),
					viewer);
			case 1:
				return $mpizenberg$elm_2d_viewer$Viewer$zoomIn(viewer);
			case 2:
				return $mpizenberg$elm_2d_viewer$Viewer$zoomOut(viewer);
			case 3:
				var coordinates = msg.a;
				return A2($mpizenberg$elm_2d_viewer$Viewer$zoomToward, coordinates, viewer);
			default:
				var coordinates = msg.a;
				return A2($mpizenberg$elm_2d_viewer$Viewer$zoomAwayFrom, coordinates, viewer);
		}
	});
var $author$project$Main$update = F2(
	function (msg, model) {
		var _v0 = _Utils_Tuple2(msg, model.r);
		_v0$60:
		while (true) {
			switch (_v0.a.$) {
				case 0:
					var _v1 = _v0.a;
					return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
				case 31:
					var msg3d = _v0.a.a;
					var update3dResult = A2($author$project$View3d$update, msg3d, model.bT);
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{bT: update3dResult.a}),
						A2($elm$core$Platform$Cmd$map, $author$project$Main$Msg3d, update3dResult.b));
				case 1:
					var size = _v0.a.a;
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{
								dK: $author$project$Device$classify(size),
								az: A2(
									$mpizenberg$elm_2d_viewer$Viewer$resize,
									_Utils_Tuple2(size.eB, size.dO - ($author$project$Main$headerHeight + $author$project$Main$progressBarHeight)),
									model.az),
								aC: A2(
									$mpizenberg$elm_2d_viewer$Viewer$resize,
									_Utils_Tuple2(size.eB, size.dO - ($author$project$Main$headerHeight + $author$project$Main$progressBarHeight)),
									model.aC),
								y: A2(
									$mpizenberg$elm_2d_viewer$Viewer$resize,
									_Utils_Tuple2(size.eB, size.dO - ($author$project$Main$headerHeight + $author$project$Main$progressBarHeight)),
									model.y)
							}),
						$elm$core$Platform$Cmd$none);
				case 2:
					switch (_v0.a.a.$) {
						case 0:
							if (!_v0.b.$) {
								var _v2 = _v0.a.a;
								return _Utils_Tuple2(
									_Utils_update(
										model,
										{
											r: $author$project$Main$Home(1)
										}),
									$elm$core$Platform$Cmd$none);
							} else {
								break _v0$60;
							}
						case 1:
							var _v4 = _v0.a.a;
							var file = _v4.a;
							var otherFiles = _v4.b;
							var imageFiles = A2(
								$elm$core$List$filter,
								function (f) {
									return A2($elm$core$String$startsWith, 'image', f.fR);
								},
								A2($elm$core$List$cons, file, otherFiles));
							var names = $elm$core$Set$fromList(
								A2(
									$elm$core$List$map,
									function ($) {
										return $.f_;
									},
									imageFiles));
							var _v5 = $elm$core$List$isEmpty(otherFiles) ? _Utils_Tuple3(
								$author$project$Main$LoadingError,
								$elm$core$Platform$Cmd$none,
								_List_fromArray(
									[
										{cQ: 'Only 1 image was selected. Please pick at least 2.', ba: 0}
									])) : _Utils_Tuple3(
								$author$project$Main$Loading(
									{ci: $elm$core$Dict$empty, cj: names}),
								$author$project$Main$decodeImages(
									A2($elm$core$List$map, $mpizenberg$elm_file$FileValue$encode, imageFiles)),
								_List_Nil);
							var newState = _v5.a;
							var cmd = _v5.b;
							var errorLogs = _v5.c;
							return _Utils_Tuple2(
								_Utils_update(
									model,
									{U: errorLogs, r: newState}),
								cmd);
						default:
							if (!_v0.b.$) {
								var _v7 = _v0.a.a;
								return _Utils_Tuple2(
									_Utils_update(
										model,
										{
											r: $author$project$Main$Home(0)
										}),
									$elm$core$Platform$Cmd$none);
							} else {
								break _v0$60;
							}
					}
				case 3:
					if (!_v0.b.$) {
						switch (_v0.a.a.$) {
							case 0:
								var _v3 = _v0.a.a;
								return _Utils_Tuple2(
									_Utils_update(
										model,
										{
											r: $author$project$Main$Home(2)
										}),
									$elm$core$Platform$Cmd$none);
							case 1:
								var file = _v0.a.a.a;
								var ready = _v0.b.a;
								return _Utils_Tuple2(
									model,
									function () {
										var _v6 = A2($elm$json$Json$Decode$decodeValue, $elm$file$File$decoder, file.gJ);
										if (!_v6.$) {
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
											r: $author$project$Main$Home(0)
										}),
									$elm$core$Platform$Cmd$none);
						}
					} else {
						break _v0$60;
					}
				case 4:
					var urls = _v0.a.a;
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{
								r: $author$project$Main$Loading(
									{
										ci: $elm$core$Dict$empty,
										cj: $elm$core$Set$fromList(urls)
									})
							}),
						$author$project$Main$loadImagesFromUrls(urls));
				case 5:
					if (_v0.b.$ === 1) {
						var imgValue = _v0.a.a;
						var id = imgValue.a9;
						var names = _v0.b.a.cj;
						var loaded = _v0.b.a.ci;
						var oldParamsForm = model.q;
						var newLoaded = function () {
							var _v10 = $author$project$Main$imageFromValue(imgValue);
							if (_v10.$ === 1) {
								return loaded;
							} else {
								var image = _v10.a;
								return A3($elm$core$Dict$insert, id, image, loaded);
							}
						}();
						var updatedLoadingState = {ci: newLoaded, cj: names};
						if (_Utils_eq(
							$elm$core$Set$size(names),
							$elm$core$Dict$size(newLoaded))) {
							var _v9 = $elm$core$Dict$values(newLoaded);
							if (!_v9.b) {
								return _Utils_Tuple2(
									_Utils_update(
										model,
										{
											r: $author$project$Main$Home(0)
										}),
									$elm$core$Platform$Cmd$none);
							} else {
								var firstImage = _v9.a;
								var otherImages = _v9.b;
								return _Utils_Tuple2(
									_Utils_update(
										model,
										{
											S: $elm$core$Maybe$Just(
												A2($yotamDvir$elm_pivot$Pivot$fromCons, firstImage, otherImages)),
											bt: $elm$core$Set$size(names),
											ch: $author$project$Main$LoadOk(
												$elm$core$String$fromInt(
													$elm$core$Set$size(names))),
											q: _Utils_update(
												oldParamsForm,
												{
													c: A2($author$project$CropForm$withSize, firstImage.eB, firstImage.dO)
												}),
											r: $author$project$Main$Home(0),
											y: A3(
												$mpizenberg$elm_2d_viewer$Viewer$fitImage,
												1.0,
												_Utils_Tuple2(firstImage.eB, firstImage.dO),
												model.y)
										}),
									$elm$core$Platform$Cmd$none);
							}
						} else {
							return _Utils_Tuple2(
								_Utils_update(
									model,
									{
										r: $author$project$Main$Loading(updatedLoadingState)
									}),
								$elm$core$Platform$Cmd$none);
						}
					} else {
						break _v0$60;
					}
				case 6:
					switch (_v0.b.$) {
						case 3:
							var rawKey = _v0.a.a;
							var images = _v0.b.a.S;
							var _v11 = $ohanhi$keyboard$Keyboard$navigationKey(rawKey);
							_v11$2:
							while (true) {
								if (!_v11.$) {
									switch (_v11.a.$) {
										case 20:
											var _v12 = _v11.a;
											return _Utils_Tuple2(
												_Utils_update(
													model,
													{
														T: A2($elm$core$Maybe$map, $author$project$Main$goToNextLight, model.T),
														r: $author$project$Main$ViewImgs(
															{
																S: $author$project$Main$goToNextImage(images)
															})
													}),
												$elm$core$Platform$Cmd$none);
										case 19:
											var _v13 = _v11.a;
											return _Utils_Tuple2(
												_Utils_update(
													model,
													{
														T: A2($elm$core$Maybe$map, $author$project$Main$goToPreviousLight, model.T),
														r: $author$project$Main$ViewImgs(
															{
																S: $author$project$Main$goToPreviousImage(images)
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
						case 5:
							var rawKey = _v0.a.a;
							var _v14 = $ohanhi$keyboard$Keyboard$navigationKey(rawKey);
							_v14$4:
							while (true) {
								if (!_v14.$) {
									switch (_v14.a.$) {
										case 20:
											var _v15 = _v14.a;
											return _Utils_Tuple2(
												model,
												$author$project$Main$send(
													$author$project$View3d$ShiftLightAzimuth(10)));
										case 19:
											var _v16 = _v14.a;
											return _Utils_Tuple2(
												model,
												$author$project$Main$send(
													$author$project$View3d$ShiftLightAzimuth(-10)));
										case 21:
											var _v17 = _v14.a;
											return _Utils_Tuple2(
												model,
												$author$project$Main$send(
													$author$project$View3d$ShiftLightElevation(1)));
										case 18:
											var _v18 = _v14.a;
											return _Utils_Tuple2(
												model,
												$author$project$Main$send(
													$author$project$View3d$ShiftLightElevation(-1)));
										default:
											break _v14$4;
									}
								} else {
									break _v14$4;
								}
							}
							return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
						default:
							break _v0$60;
					}
				case 11:
					if (_v0.b.$ === 4) {
						var paramsMsg = _v0.a.a;
						return _Utils_Tuple2(
							A2($author$project$Main$updateParams, paramsMsg, model),
							$elm$core$Platform$Cmd$none);
					} else {
						break _v0$60;
					}
				case 12:
					if (_v0.b.$ === 4) {
						var paramsInfoMsg = _v0.a.a;
						return _Utils_Tuple2(
							_Utils_update(
								model,
								{
									cm: A2($author$project$Main$updateParamsInfo, paramsInfoMsg, model.cm)
								}),
							$elm$core$Platform$Cmd$none);
					} else {
						break _v0$60;
					}
				case 13:
					switch (_v0.b.$) {
						case 3:
							if (_v0.a.a === 4) {
								var _v19 = _v0.a.a;
								var data = _v0.b.a;
								return _Utils_Tuple2(
									A3($author$project$Main$goTo, 4, data, model),
									$author$project$Main$scrollLogsToPos(model.by));
							} else {
								var navMsg = _v0.a.a;
								var data = _v0.b.a;
								return _Utils_Tuple2(
									A3($author$project$Main$goTo, navMsg, data, model),
									$elm$core$Platform$Cmd$none);
							}
						case 4:
							if (_v0.a.a === 4) {
								var _v20 = _v0.a.a;
								var data = _v0.b.a;
								return _Utils_Tuple2(
									A3($author$project$Main$goTo, 4, data, model),
									$author$project$Main$scrollLogsToPos(model.by));
							} else {
								var navMsg = _v0.a.a;
								var data = _v0.b.a;
								return _Utils_Tuple2(
									A3($author$project$Main$goTo, navMsg, data, model),
									$elm$core$Platform$Cmd$none);
							}
						case 5:
							if (_v0.a.a === 4) {
								var _v21 = _v0.a.a;
								var data = _v0.b.a;
								return _Utils_Tuple2(
									A3($author$project$Main$goTo, 4, data, model),
									$author$project$Main$scrollLogsToPos(model.by));
							} else {
								var navMsg = _v0.a.a;
								var data = _v0.b.a;
								return _Utils_Tuple2(
									A3($author$project$Main$goTo, navMsg, data, model),
									$elm$core$Platform$Cmd$none);
							}
						case 6:
							if (_v0.a.a === 4) {
								var _v22 = _v0.a.a;
								var data = _v0.b.a;
								return _Utils_Tuple2(
									A3($author$project$Main$goTo, 4, data, model),
									$author$project$Main$scrollLogsToPos(model.by));
							} else {
								var navMsg = _v0.a.a;
								var data = _v0.b.a;
								return _Utils_Tuple2(
									A3($author$project$Main$goTo, navMsg, data, model),
									$elm$core$Platform$Cmd$none);
							}
						case 7:
							var navMsg = _v0.a.a;
							var data = _v0.b.a;
							return _Utils_Tuple2(
								A3($author$project$Main$goTo, navMsg, data, model),
								$elm$core$Platform$Cmd$none);
						case 0:
							if (!_v0.a.a) {
								var _v23 = _v0.a.a;
								var _v24 = model.S;
								if (_v24.$ === 1) {
									return _Utils_Tuple2(
										_Utils_update(
											model,
											{
												ch: $author$project$Main$LoadError('Lacking images to show for some reason')
											}),
										$elm$core$Platform$Cmd$none);
								} else {
									var data = _v24.a;
									return _Utils_Tuple2(
										A3(
											$author$project$Main$goTo,
											0,
											{S: data},
											model),
										$elm$core$Platform$Cmd$none);
								}
							} else {
								break _v0$60;
							}
						default:
							break _v0$60;
					}
				case 14:
					if (_v0.b.$ === 7) {
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
						break _v0$60;
					}
				case 9:
					switch (_v0.b.$) {
						case 3:
							var zoomMsg = _v0.a.a;
							return _Utils_Tuple2(
								_Utils_update(
									model,
									{
										y: A2($author$project$Main$zoomViewer, zoomMsg, model.y)
									}),
								$elm$core$Platform$Cmd$none);
						case 5:
							var zoomMsg = _v0.a.a;
							return _Utils_Tuple2(
								_Utils_update(
									model,
									{
										aC: A2($author$project$Main$zoomViewer, zoomMsg, model.aC)
									}),
								$elm$core$Platform$Cmd$none);
						case 6:
							var zoomMsg = _v0.a.a;
							return _Utils_Tuple2(
								_Utils_update(
									model,
									{
										az: A2($author$project$Main$zoomViewer, zoomMsg, model.az)
									}),
								$elm$core$Platform$Cmd$none);
						default:
							break _v0$60;
					}
				case 10:
					if (_v0.b.$ === 3) {
						switch (_v0.a.a) {
							case 2:
								var _v43 = _v0.a.a;
								var images = _v0.b.a.S;
								var oldParamsForm = model.q;
								var oldParams = model.s;
								var img = $yotamDvir$elm_pivot$Pivot$getC(
									$yotamDvir$elm_pivot$Pivot$goToStart(images));
								var _v44 = model.y.iI;
								var left = _v44.a;
								var top = _v44.b;
								var _v45 = model.y.gv;
								var width = _v45.a;
								var height = _v45.b;
								var bottom = top + (model.y.co * height);
								var right = left + (model.y.co * width);
								if ((right > 0) && ((_Utils_cmp(left, img.eB) < 0) && ((bottom > 0) && (_Utils_cmp(top, img.dO) < 0)))) {
									var newCropForm = A2(
										$author$project$Main$snapBBox,
										A4($author$project$Main$BBox, left, top, right, bottom),
										oldParamsForm.c);
									var newCrop = $author$project$CropForm$decoded(newCropForm);
									return _Utils_Tuple2(
										_Utils_update(
											model,
											{
												ag: A2($elm$core$Maybe$map, $author$project$Main$toBBox, newCrop),
												s: _Utils_update(
													oldParams,
													{c: newCrop}),
												q: _Utils_update(
													oldParamsForm,
													{c: newCropForm})
											}),
										$elm$core$Platform$Cmd$none);
								} else {
									return _Utils_Tuple2(
										_Utils_update(
											model,
											{
												ag: $elm$core$Maybe$Nothing,
												s: _Utils_update(
													oldParams,
													{c: $elm$core$Maybe$Nothing}),
												q: _Utils_update(
													oldParamsForm,
													{
														c: A2($author$project$CropForm$toggle, false, oldParamsForm.c)
													})
											}),
										$elm$core$Platform$Cmd$none);
								}
							case 0:
								var _v46 = _v0.a.a;
								return _Utils_Tuple2(
									_Utils_update(
										model,
										{t: $author$project$Main$WaitingMove}),
									$elm$core$Platform$Cmd$none);
							default:
								var _v47 = _v0.a.a;
								return _Utils_Tuple2(
									_Utils_update(
										model,
										{t: $author$project$Main$WaitingDraw}),
									$elm$core$Platform$Cmd$none);
						}
					} else {
						break _v0$60;
					}
				case 7:
					switch (_v0.b.$) {
						case 3:
							var _v48 = _v0.a;
							var images = _v0.b.a.S;
							return _Utils_Tuple2(
								_Utils_update(
									model,
									{
										T: A2($elm$core$Maybe$map, $author$project$Main$goToPreviousLight, model.T),
										r: $author$project$Main$ViewImgs(
											{
												S: $author$project$Main$goToPreviousImage(images)
											})
									}),
								$elm$core$Platform$Cmd$none);
						case 5:
							var _v49 = _v0.a;
							return _Utils_Tuple2(
								_Utils_update(
									model,
									{
										ak: A2($elm$core$Maybe$map, $author$project$Main$goToPreviousImage, model.ak)
									}),
								$elm$core$Platform$Cmd$none);
						default:
							break _v0$60;
					}
				case 8:
					switch (_v0.b.$) {
						case 3:
							var _v50 = _v0.a;
							var images = _v0.b.a.S;
							return _Utils_Tuple2(
								_Utils_update(
									model,
									{
										T: A2($elm$core$Maybe$map, $author$project$Main$goToNextLight, model.T),
										r: $author$project$Main$ViewImgs(
											{
												S: $author$project$Main$goToNextImage(images)
											})
									}),
								$elm$core$Platform$Cmd$none);
						case 5:
							var _v51 = _v0.a;
							return _Utils_Tuple2(
								_Utils_update(
									model,
									{
										ak: A2($elm$core$Maybe$map, $author$project$Main$goToNextImage, model.ak)
									}),
								$elm$core$Platform$Cmd$none);
						default:
							break _v0$60;
					}
				case 17:
					switch (_v0.b.$) {
						case 3:
							var params = _v0.a.a;
							var imgs = _v0.b.a;
							return _Utils_Tuple2(
								A2($author$project$Main$runAndSwitchToLogsPage, imgs, model),
								$author$project$Main$run(
									$author$project$Main$encodeParams(params)));
						case 4:
							var params = _v0.a.a;
							var imgs = _v0.b.a;
							return _Utils_Tuple2(
								A2($author$project$Main$runAndSwitchToLogsPage, imgs, model),
								$author$project$Main$run(
									$author$project$Main$encodeParams(params)));
						case 5:
							var params = _v0.a.a;
							var imgs = _v0.b.a;
							return _Utils_Tuple2(
								A2($author$project$Main$runAndSwitchToLogsPage, imgs, model),
								$author$project$Main$run(
									$author$project$Main$encodeParams(params)));
						case 6:
							var params = _v0.a.a;
							var imgs = _v0.b.a;
							return _Utils_Tuple2(
								A2($author$project$Main$runAndSwitchToLogsPage, imgs, model),
								$author$project$Main$run(
									$author$project$Main$encodeParams(params)));
						case 7:
							var params = _v0.a.a;
							var imgs = _v0.b.a;
							return _Utils_Tuple2(
								A2($author$project$Main$runAndSwitchToLogsPage, imgs, model),
								$author$project$Main$run(
									$author$project$Main$encodeParams(params)));
						default:
							break _v0$60;
					}
				case 18:
					var _v52 = _v0.a;
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{aE: $author$project$Main$StepNotStarted}),
						$author$project$Main$stop(0));
				case 19:
					var step = _v0.a.a.ev;
					var progress = _v0.a.a.gj;
					var runStep = function () {
						var _v53 = _Utils_Tuple3(model.aE, step, progress);
						_v53$8:
						while (true) {
							switch (_v53.b) {
								case 'Precompute multiresolution pyramid':
									return $author$project$Main$StepMultiresPyramid;
								case 'level':
									if (!_v53.c.$) {
										var lvl = _v53.c.a;
										return $author$project$Main$StepLevel(lvl);
									} else {
										break _v53$8;
									}
								case 'iteration':
									if (!_v53.c.$) {
										switch (_v53.a.$) {
											case 2:
												var lvl = _v53.a.a;
												var iter = _v53.c.a;
												return A2($author$project$Main$StepIteration, lvl, iter);
											case 3:
												var _v54 = _v53.a;
												var lvl = _v54.a;
												var iter = _v53.c.a;
												return A2($author$project$Main$StepIteration, lvl, iter);
											default:
												break _v53$8;
										}
									} else {
										break _v53$8;
									}
								case 'Reproject':
									if (!_v53.c.$) {
										var im = _v53.c.a;
										return $author$project$Main$StepApplying(im);
									} else {
										break _v53$8;
									}
								case 'encoding':
									if (!_v53.c.$) {
										var im = _v53.c.a;
										return $author$project$Main$StepEncoding(im);
									} else {
										break _v53$8;
									}
								case 'done':
									return $author$project$Main$StepDone;
								case 'saving':
									if (!_v53.c.$) {
										var im = _v53.c.a;
										return $author$project$Main$StepSaving(im);
									} else {
										break _v53$8;
									}
								default:
									break _v53$8;
							}
						}
						return $author$project$Main$StepNotStarted;
					}();
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{aE: runStep}),
						$elm$core$Platform$Cmd$none);
				case 20:
					switch (_v0.b.$) {
						case 7:
							var logData = _v0.a.a;
							var newLogs = A2($elm$core$List$cons, logData, model.a0);
							return model.bG ? _Utils_Tuple2(
								_Utils_update(
									model,
									{a0: newLogs}),
								$author$project$Main$scrollLogsToEndCmd) : _Utils_Tuple2(
								_Utils_update(
									model,
									{a0: newLogs}),
								$elm$core$Platform$Cmd$none);
						case 1:
							var logData = _v0.a.a;
							var newState = (!logData.ba) ? $author$project$Main$LoadingError : model.r;
							return _Utils_Tuple2(
								_Utils_update(
									model,
									{
										U: A2($elm$core$List$cons, logData, model.U),
										r: newState
									}),
								$elm$core$Platform$Cmd$none);
						default:
							var logData = _v0.a.a;
							return _Utils_Tuple2(
								_Utils_update(
									model,
									{
										U: A2($elm$core$List$cons, logData, model.U)
									}),
								$elm$core$Platform$Cmd$none);
					}
				case 22:
					if ((!_v0.a.a.$) && (_v0.b.$ === 7)) {
						var viewport = _v0.a.a.a.jH;
						return _Utils_Tuple2(
							_Utils_update(
								model,
								{by: viewport.dx}),
							$elm$core$Platform$Cmd$none);
					} else {
						break _v0$60;
					}
				case 23:
					var floatVerbosity = _v0.a.a;
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{
								du: $elm$core$Basics$round(floatVerbosity)
							}),
						$elm$core$Platform$Cmd$none);
				case 30:
					if (_v0.b.$ === 7) {
						var _v55 = _v0.a;
						return _Utils_Tuple2(model, $author$project$Main$scrollLogsToEndCmd);
					} else {
						break _v0$60;
					}
				case 24:
					var activate = _v0.a.a;
					return activate ? _Utils_Tuple2(
						_Utils_update(
							model,
							{bG: true}),
						$author$project$Main$scrollLogsToEndCmd) : _Utils_Tuple2(
						_Utils_update(
							model,
							{bG: false}),
						$elm$core$Platform$Cmd$none);
				case 25:
					var croppedImages = _v0.a.a;
					var _v56 = A2($elm$core$List$filterMap, $author$project$Main$imageFromValue, croppedImages);
					if (!_v56.b) {
						return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
					} else {
						var firstImage = _v56.a;
						var otherImages = _v56.b;
						return _Utils_Tuple2(
							_Utils_update(
								model,
								{
									ak: $elm$core$Maybe$Just(
										A2($yotamDvir$elm_pivot$Pivot$fromCons, firstImage, otherImages)),
									aC: A3(
										$mpizenberg$elm_2d_viewer$Viewer$fitImage,
										1.0,
										_Utils_Tuple2(firstImage.eB, firstImage.dO),
										model.aC)
								}),
							$elm$core$Platform$Cmd$none);
					}
				case 26:
					var croppedImages = _v0.a.a;
					var _v57 = A2($elm$core$List$filterMap, $author$project$Main$imageFromValue, croppedImages);
					if (!_v57.b) {
						return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
					} else {
						var firstImage = _v57.a;
						var otherImages = _v57.b;
						return _Utils_Tuple2(
							_Utils_update(
								model,
								{
									aZ: $elm$core$Maybe$Just(
										A2($yotamDvir$elm_pivot$Pivot$fromCons, firstImage, otherImages)),
									az: A3(
										$mpizenberg$elm_2d_viewer$Viewer$fitImage,
										1.0,
										_Utils_Tuple2(firstImage.eB, firstImage.dO),
										model.az)
								}),
							$elm$core$Platform$Cmd$none);
					}
				case 27:
					var urlString = _v0.a.a;
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{bT: $author$project$View3d$LoadingTexture}),
						A2(
							$elm$core$Task$attempt,
							function (texture) {
								return $author$project$Main$Msg3d(
									$author$project$View3d$TextureLoaded(texture));
							},
							$author$project$View3d$loadTexture(urlString)));
				case 28:
					var content = _v0.a.a;
					var oldParams = model.s;
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
						{hR: ';'},
						$BrianHicks$elm_csv$Csv$Decode$FieldNamesFromFirstRow,
						decoder,
						content);
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{
								T: A2(
									$elm$core$Maybe$andThen,
									$yotamDvir$elm_pivot$Pivot$fromList,
									$elm$core$Result$toMaybe(myCsv)),
								c9: function () {
									if (myCsv.$ === 1) {
										var err = myCsv.a;
										return $author$project$Main$LoadError(
											$BrianHicks$elm_csv$Csv$Decode$errorToString(err));
									} else {
										var csv = myCsv.a;
										return $author$project$Main$LoadOk(
											$elm$core$String$fromInt(
												$elm$core$List$length(csv)));
									}
								}(),
								s: _Utils_update(
									oldParams,
									{
										T: $elm$core$Result$toMaybe(myCsv)
									})
							}),
						$elm$core$Platform$Cmd$none);
				case 16:
					switch (_v0.b.$) {
						case 3:
							var pointerMsg = _v0.a.a;
							var images = _v0.b.a.S;
							var _v25 = _Utils_Tuple2(pointerMsg, model.t);
							_v25$6:
							while (true) {
								switch (_v25.a.$) {
									case 0:
										switch (_v25.b.$) {
											case 0:
												var event = _v25.a.a;
												var _v26 = _v25.b;
												var _v27 = A2($elm$json$Json$Decode$decodeValue, $mpizenberg$elm_pointer_events$Html$Events$Extra$Pointer$eventDecoder, event);
												if (_v27.$ === 1) {
													return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
												} else {
													var pointer = _v27.a.dh;
													return _Utils_Tuple2(
														_Utils_update(
															model,
															{
																t: $author$project$Main$PointerMovingFromClientCoords(pointer.cL)
															}),
														$author$project$Main$capture(event));
												}
											case 2:
												var event = _v25.a.a;
												var _v31 = _v25.b;
												var _v32 = A2($elm$json$Json$Decode$decodeValue, $mpizenberg$elm_pointer_events$Html$Events$Extra$Pointer$eventDecoder, event);
												if (_v32.$ === 1) {
													return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
												} else {
													var pointer = _v32.a.dh;
													var _v33 = A2($mpizenberg$elm_2d_viewer$Viewer$coordinatesAt, pointer.d9, model.y);
													var x = _v33.a;
													var y = _v33.b;
													return _Utils_Tuple2(
														_Utils_update(
															model,
															{
																ag: $elm$core$Maybe$Just(
																	{ah: y, av: x, am: x, aw: y}),
																t: A2($author$project$Main$PointerDrawFromOffsetAndClient, pointer.d9, pointer.cL)
															}),
														$author$project$Main$capture(event));
												}
											default:
												break _v25$6;
										}
									case 1:
										switch (_v25.b.$) {
											case 1:
												var _v28 = _v25.a.a;
												var newX = _v28.a;
												var newY = _v28.b;
												var _v29 = _v25.b.a;
												var x = _v29.a;
												var y = _v29.b;
												return _Utils_Tuple2(
													_Utils_update(
														model,
														{
															t: $author$project$Main$PointerMovingFromClientCoords(
																_Utils_Tuple2(newX, newY)),
															y: A2(
																$mpizenberg$elm_2d_viewer$Viewer$pan,
																_Utils_Tuple2(newX - x, newY - y),
																model.y)
														}),
													$elm$core$Platform$Cmd$none);
											case 3:
												var _v34 = _v25.a.a;
												var newX = _v34.a;
												var newY = _v34.b;
												var _v35 = _v25.b;
												var _v36 = _v35.a;
												var oX = _v36.a;
												var oY = _v36.b;
												var _v37 = _v35.b;
												var cX = _v37.a;
												var cY = _v37.b;
												var _v38 = A2(
													$mpizenberg$elm_2d_viewer$Viewer$coordinatesAt,
													_Utils_Tuple2((oX + newX) - cX, (oY + newY) - cY),
													model.y);
												var x2 = _v38.a;
												var y2 = _v38.b;
												var _v39 = A2(
													$mpizenberg$elm_2d_viewer$Viewer$coordinatesAt,
													_Utils_Tuple2(oX, oY),
													model.y);
												var x1 = _v39.a;
												var y1 = _v39.b;
												var left = A2($elm$core$Basics$min, x1, x2);
												var right = A2($elm$core$Basics$max, x1, x2);
												var bottom = A2($elm$core$Basics$max, y1, y2);
												var top = A2($elm$core$Basics$min, y1, y2);
												return _Utils_Tuple2(
													_Utils_update(
														model,
														{
															ag: $elm$core$Maybe$Just(
																{ah: bottom, av: left, am: right, aw: top})
														}),
													$elm$core$Platform$Cmd$none);
											default:
												break _v25$6;
										}
									default:
										switch (_v25.b.$) {
											case 1:
												var _v30 = _v25.a;
												return _Utils_Tuple2(
													_Utils_update(
														model,
														{t: $author$project$Main$WaitingMove}),
													$elm$core$Platform$Cmd$none);
											case 3:
												var _v40 = _v25.a;
												var _v41 = _v25.b;
												var _v42 = model.ag;
												if (!_v42.$) {
													var left = _v42.a.av;
													var right = _v42.a.am;
													var top = _v42.a.aw;
													var bottom = _v42.a.ah;
													var oldParamsForm = model.q;
													var oldParams = model.s;
													var img = $yotamDvir$elm_pivot$Pivot$getC(
														$yotamDvir$elm_pivot$Pivot$goToStart(images));
													if ((((right - left) / model.y.co) > 10) && ((((bottom - top) / model.y.co) > 10) && ((right > 0) && ((_Utils_cmp(left, img.eB) < 0) && ((bottom > 0) && (_Utils_cmp(top, img.dO) < 0)))))) {
														var newCropForm = A2(
															$author$project$Main$snapBBox,
															A4($author$project$Main$BBox, left, top, right, bottom),
															oldParamsForm.c);
														var newCrop = $author$project$CropForm$decoded(newCropForm);
														return _Utils_Tuple2(
															_Utils_update(
																model,
																{
																	ag: A2($elm$core$Maybe$map, $author$project$Main$toBBox, newCrop),
																	s: _Utils_update(
																		oldParams,
																		{c: newCrop}),
																	q: _Utils_update(
																		oldParamsForm,
																		{c: newCropForm}),
																	t: $author$project$Main$WaitingDraw
																}),
															$elm$core$Platform$Cmd$none);
													} else {
														return _Utils_Tuple2(
															_Utils_update(
																model,
																{
																	ag: $elm$core$Maybe$Nothing,
																	s: _Utils_update(
																		oldParams,
																		{c: $elm$core$Maybe$Nothing}),
																	q: _Utils_update(
																		oldParamsForm,
																		{
																			c: A2($author$project$CropForm$toggle, false, oldParamsForm.c)
																		}),
																	t: $author$project$Main$WaitingDraw
																}),
															$elm$core$Platform$Cmd$none);
													}
												} else {
													return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
												}
											default:
												break _v25$6;
										}
								}
							}
							return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
						case 5:
							var pointerMsg = _v0.a.a;
							var _v59 = _Utils_Tuple2(pointerMsg, model.t);
							_v59$3:
							while (true) {
								switch (_v59.a.$) {
									case 0:
										if (!_v59.b.$) {
											var event = _v59.a.a;
											var _v60 = _v59.b;
											var _v61 = A2($elm$json$Json$Decode$decodeValue, $mpizenberg$elm_pointer_events$Html$Events$Extra$Pointer$eventDecoder, event);
											if (_v61.$ === 1) {
												return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
											} else {
												var pointer = _v61.a.dh;
												return _Utils_Tuple2(
													_Utils_update(
														model,
														{
															t: $author$project$Main$PointerMovingFromClientCoords(pointer.cL)
														}),
													$author$project$Main$capture(event));
											}
										} else {
											break _v59$3;
										}
									case 1:
										if (_v59.b.$ === 1) {
											var _v62 = _v59.a.a;
											var newX = _v62.a;
											var newY = _v62.b;
											var _v63 = _v59.b.a;
											var x = _v63.a;
											var y = _v63.b;
											return _Utils_Tuple2(
												_Utils_update(
													model,
													{
														aC: A2(
															$mpizenberg$elm_2d_viewer$Viewer$pan,
															_Utils_Tuple2(newX - x, newY - y),
															model.aC),
														t: $author$project$Main$PointerMovingFromClientCoords(
															_Utils_Tuple2(newX, newY))
													}),
												$elm$core$Platform$Cmd$none);
										} else {
											break _v59$3;
										}
									default:
										if (_v59.b.$ === 1) {
											var _v64 = _v59.a;
											return _Utils_Tuple2(
												_Utils_update(
													model,
													{t: $author$project$Main$WaitingMove}),
												$elm$core$Platform$Cmd$none);
										} else {
											break _v59$3;
										}
								}
							}
							return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
						case 6:
							var pointerMsg = _v0.a.a;
							var _v65 = _Utils_Tuple2(pointerMsg, model.t);
							_v65$3:
							while (true) {
								switch (_v65.a.$) {
									case 0:
										if (!_v65.b.$) {
											var event = _v65.a.a;
											var _v66 = _v65.b;
											var _v67 = A2($elm$json$Json$Decode$decodeValue, $mpizenberg$elm_pointer_events$Html$Events$Extra$Pointer$eventDecoder, event);
											if (_v67.$ === 1) {
												return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
											} else {
												var pointer = _v67.a.dh;
												return _Utils_Tuple2(
													_Utils_update(
														model,
														{
															t: $author$project$Main$PointerMovingFromClientCoords(pointer.cL)
														}),
													$author$project$Main$capture(event));
											}
										} else {
											break _v65$3;
										}
									case 1:
										if (_v65.b.$ === 1) {
											var _v68 = _v65.a.a;
											var newX = _v68.a;
											var newY = _v68.b;
											var _v69 = _v65.b.a;
											var x = _v69.a;
											var y = _v69.b;
											return _Utils_Tuple2(
												_Utils_update(
													model,
													{
														az: A2(
															$mpizenberg$elm_2d_viewer$Viewer$pan,
															_Utils_Tuple2(newX - x, newY - y),
															model.az),
														t: $author$project$Main$PointerMovingFromClientCoords(
															_Utils_Tuple2(newX, newY))
													}),
												$elm$core$Platform$Cmd$none);
										} else {
											break _v65$3;
										}
									default:
										if (_v65.b.$ === 1) {
											var _v70 = _v65.a;
											return _Utils_Tuple2(
												_Utils_update(
													model,
													{t: $author$project$Main$WaitingMove}),
												$elm$core$Platform$Cmd$none);
										} else {
											break _v65$3;
										}
								}
							}
							return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
						default:
							break _v0$60;
					}
				case 29:
					var _v71 = _v0.a;
					return _Utils_Tuple2(
						model,
						$author$project$Main$saveNMapPNG(model.bt));
				case 15:
					var _v72 = _v0.a;
					return _Utils_Tuple2(model, $elm$browser$Browser$Navigation$reload);
				default:
					var _v73 = _v0.a;
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{
								U: _List_Nil,
								a0: _List_fromArray(
									[
										{cQ: 'Logs cleared', ba: 3}
									])
							}),
						$elm$core$Platform$Cmd$none);
			}
		}
		return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
	});
var $mdgriffith$elm_ui$Internal$Model$Class = F2(
	function (a, b) {
		return {$: 3, a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Style$classes = {gQ: 'a', aR: 'atv', gS: 'ab', gT: 'cx', gU: 'cy', gV: 'acb', gW: 'accx', gX: 'accy', gY: 'acr', eM: 'al', eN: 'ar', gZ: 'at', dy: 'ah', dz: 'av', g$: 's', g5: 'bh', g6: 'b', g8: 'w7', ha: 'bd', hb: 'bdt', cH: 'bn', hc: 'bs', cJ: 'cpe', hm: 'cp', hn: 'cpx', ho: 'cpy', aH: 'c', cP: 'ctr', cR: 'cb', cS: 'ccx', a6: 'ccy', b5: 'cl', cT: 'cr', hr: 'ct', hv: 'cptr', hw: 'ctxt', hV: 'fcs', e7: 'focus-within', hW: 'fs', hX: 'g', dN: 'hbh', dP: 'hc', fa: 'he', dQ: 'hf', fb: 'hfp', h3: 'hv', h5: 'ic', h7: 'fr', c2: 'lbl', ia: 'iml', ib: 'imlf', ic: 'imlp', id: 'implw', ie: 'it', ik: 'i', fv: 'lnk', bU: 'nb', f$: 'notxt', iC: 'ol', iE: 'or', bw: 'oq', iJ: 'oh', f8: 'pg', f9: 'p', iL: 'ppe', iU: 'ui', aM: 'r', iX: 'sb', iY: 'sbx', iZ: 'sby', i_: 'sbt', i2: 'e', i3: 'cap', i4: 'sev', i9: 'sk', jf: 't', jg: 'tc', jh: 'w8', ji: 'w2', jj: 'w9', jk: 'tj', dr: 'tja', jl: 'tl', jm: 'w3', jn: 'w5', jo: 'w4', jp: 'tr', jq: 'w6', jr: 'w1', js: 'tun', gH: 'ts', bB: 'clr', jA: 'u', eC: 'wc', gN: 'we', eD: 'wf', gO: 'wfp', eE: 'wrp'};
var $mdgriffith$elm_ui$Internal$Flag$Flag = function (a) {
	return {$: 0, a: a};
};
var $mdgriffith$elm_ui$Internal$Flag$Second = function (a) {
	return {$: 1, a: a};
};
var $elm$core$Bitwise$shiftLeftBy = _Bitwise_shiftLeftBy;
var $mdgriffith$elm_ui$Internal$Flag$flag = function (i) {
	return (i > 31) ? $mdgriffith$elm_ui$Internal$Flag$Second(1 << (i - 32)) : $mdgriffith$elm_ui$Internal$Flag$Flag(1 << i);
};
var $mdgriffith$elm_ui$Internal$Flag$overflow = $mdgriffith$elm_ui$Internal$Flag$flag(20);
var $mdgriffith$elm_ui$Element$clip = A2($mdgriffith$elm_ui$Internal$Model$Class, $mdgriffith$elm_ui$Internal$Flag$overflow, $mdgriffith$elm_ui$Internal$Style$classes.hm);
var $mdgriffith$elm_ui$Internal$Model$FontFamily = F2(
	function (a, b) {
		return {$: 1, a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Model$StyleClass = F2(
	function (a, b) {
		return {$: 4, a: a, b: b};
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
					case 0:
						return 'serif';
					case 1:
						return 'sans-serif';
					case 2:
						return 'monospace';
					case 3:
						var name = font.a;
						return A2(
							$elm$core$String$join,
							'-',
							$elm$core$String$words(
								$elm$core$String$toLower(name)));
					case 4:
						var name = font.a;
						var url = font.b;
						return A2(
							$elm$core$String$join,
							'-',
							$elm$core$String$words(
								$elm$core$String$toLower(name)));
					default:
						var name = font.a.f_;
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
var $mdgriffith$elm_ui$Internal$Model$SansSerif = {$: 1};
var $mdgriffith$elm_ui$Element$Font$sansSerif = $mdgriffith$elm_ui$Internal$Model$SansSerif;
var $mdgriffith$elm_ui$Internal$Model$Typeface = function (a) {
	return {$: 3, a: a};
};
var $mdgriffith$elm_ui$Element$Font$typeface = $mdgriffith$elm_ui$Internal$Model$Typeface;
var $author$project$Style$font = $mdgriffith$elm_ui$Element$Font$family(
	_List_fromArray(
		[
			$mdgriffith$elm_ui$Element$Font$typeface('Open Sans'),
			$mdgriffith$elm_ui$Element$Font$sansSerif
		]));
var $mdgriffith$elm_ui$Internal$Model$Attr = function (a) {
	return {$: 1, a: a};
};
var $elm$html$Html$Attributes$stringProperty = F2(
	function (key, string) {
		return A2(
			_VirtualDom_property,
			key,
			$elm$json$Json$Encode$string(string));
	});
var $elm$html$Html$Attributes$class = $elm$html$Html$Attributes$stringProperty('className');
var $mdgriffith$elm_ui$Internal$Model$htmlClass = function (cls) {
	return $mdgriffith$elm_ui$Internal$Model$Attr(
		$elm$html$Html$Attributes$class(cls));
};
var $mdgriffith$elm_ui$Internal$Model$OnlyDynamic = F2(
	function (a, b) {
		return {$: 2, a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Model$StaticRootAndDynamic = F2(
	function (a, b) {
		return {$: 1, a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Model$Unkeyed = function (a) {
	return {$: 0, a: a};
};
var $mdgriffith$elm_ui$Internal$Model$AsEl = 2;
var $mdgriffith$elm_ui$Internal$Model$asEl = 2;
var $mdgriffith$elm_ui$Internal$Model$Generic = {$: 0};
var $mdgriffith$elm_ui$Internal$Model$div = $mdgriffith$elm_ui$Internal$Model$Generic;
var $mdgriffith$elm_ui$Internal$Model$NoNearbyChildren = {$: 0};
var $mdgriffith$elm_ui$Internal$Model$columnClass = $mdgriffith$elm_ui$Internal$Style$classes.g$ + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.aH);
var $mdgriffith$elm_ui$Internal$Model$gridClass = $mdgriffith$elm_ui$Internal$Style$classes.g$ + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.hX);
var $mdgriffith$elm_ui$Internal$Model$pageClass = $mdgriffith$elm_ui$Internal$Style$classes.g$ + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.f8);
var $mdgriffith$elm_ui$Internal$Model$paragraphClass = $mdgriffith$elm_ui$Internal$Style$classes.g$ + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.f9);
var $mdgriffith$elm_ui$Internal$Model$rowClass = $mdgriffith$elm_ui$Internal$Style$classes.g$ + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.aM);
var $mdgriffith$elm_ui$Internal$Model$singleClass = $mdgriffith$elm_ui$Internal$Style$classes.g$ + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.i2);
var $mdgriffith$elm_ui$Internal$Model$contextClasses = function (context) {
	switch (context) {
		case 0:
			return $mdgriffith$elm_ui$Internal$Model$rowClass;
		case 1:
			return $mdgriffith$elm_ui$Internal$Model$columnClass;
		case 2:
			return $mdgriffith$elm_ui$Internal$Model$singleClass;
		case 3:
			return $mdgriffith$elm_ui$Internal$Model$gridClass;
		case 4:
			return $mdgriffith$elm_ui$Internal$Model$paragraphClass;
		default:
			return $mdgriffith$elm_ui$Internal$Model$pageClass;
	}
};
var $mdgriffith$elm_ui$Internal$Model$Keyed = function (a) {
	return {$: 1, a: a};
};
var $mdgriffith$elm_ui$Internal$Model$NoStyleSheet = {$: 0};
var $mdgriffith$elm_ui$Internal$Model$Styled = function (a) {
	return {$: 1, a: a};
};
var $mdgriffith$elm_ui$Internal$Model$Unstyled = function (a) {
	return {$: 0, a: a};
};
var $mdgriffith$elm_ui$Internal$Model$addChildren = F2(
	function (existing, nearbyChildren) {
		switch (nearbyChildren.$) {
			case 0:
				return existing;
			case 1:
				var behind = nearbyChildren.a;
				return _Utils_ap(behind, existing);
			case 2:
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
			case 0:
				return existing;
			case 1:
				var behind = nearbyChildren.a;
				return _Utils_ap(
					A2(
						$elm$core$List$map,
						function (x) {
							return _Utils_Tuple2(key, x);
						},
						behind),
					existing);
			case 2:
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
var $mdgriffith$elm_ui$Internal$Model$AsParagraph = 4;
var $mdgriffith$elm_ui$Internal$Model$asParagraph = 4;
var $mdgriffith$elm_ui$Internal$Flag$alignBottom = $mdgriffith$elm_ui$Internal$Flag$flag(41);
var $mdgriffith$elm_ui$Internal$Flag$alignRight = $mdgriffith$elm_ui$Internal$Flag$flag(40);
var $mdgriffith$elm_ui$Internal$Flag$centerX = $mdgriffith$elm_ui$Internal$Flag$flag(42);
var $mdgriffith$elm_ui$Internal$Flag$centerY = $mdgriffith$elm_ui$Internal$Flag$flag(43);
var $elm$html$Html$div = _VirtualDom_node('div');
var $mdgriffith$elm_ui$Internal$Model$lengthClassName = function (x) {
	switch (x.$) {
		case 0:
			var px = x.a;
			return $elm$core$String$fromInt(px) + 'px';
		case 1:
			return 'auto';
		case 2:
			var i = x.a;
			return $elm$core$String$fromInt(i) + 'fr';
		case 3:
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
		case 0:
			return $elm$core$Maybe$Nothing;
		case 1:
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
		case 13:
			var name = style.a;
			return name;
		case 12:
			var name = style.a;
			var o = style.b;
			return name;
		case 0:
			var _class = style.a;
			return _class;
		case 1:
			var name = style.a;
			return name;
		case 2:
			var i = style.a;
			return 'font-size-' + $elm$core$String$fromInt(i);
		case 3:
			var _class = style.a;
			return _class;
		case 4:
			var _class = style.a;
			return _class;
		case 5:
			var cls = style.a;
			var x = style.b;
			var y = style.c;
			return cls;
		case 7:
			var cls = style.a;
			var top = style.b;
			var right = style.c;
			var bottom = style.d;
			var left = style.e;
			return cls;
		case 6:
			var cls = style.a;
			var top = style.b;
			var right = style.c;
			var bottom = style.d;
			var left = style.e;
			return cls;
		case 8:
			var template = style.a;
			return 'grid-rows-' + (A2(
				$elm$core$String$join,
				'-',
				A2($elm$core$List$map, $mdgriffith$elm_ui$Internal$Model$lengthClassName, template.iV)) + ('-cols-' + (A2(
				$elm$core$String$join,
				'-',
				A2($elm$core$List$map, $mdgriffith$elm_ui$Internal$Model$lengthClassName, template.aU)) + ('-space-x-' + ($mdgriffith$elm_ui$Internal$Model$lengthClassName(template.i5.a) + ('-space-y-' + $mdgriffith$elm_ui$Internal$Model$lengthClassName(template.i5.b)))))));
		case 9:
			var pos = style.a;
			return 'gp grid-pos-' + ($elm$core$String$fromInt(pos.aM) + ('-' + ($elm$core$String$fromInt(pos.eX) + ('-' + ($elm$core$String$fromInt(pos.eB) + ('-' + $elm$core$String$fromInt(pos.dO)))))));
		case 11:
			var selector = style.a;
			var subStyle = style.b;
			var name = function () {
				switch (selector) {
					case 0:
						return 'fs';
					case 1:
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
		if (!_v0.$) {
			return true;
		} else {
			return false;
		}
	});
var $elm$core$Set$member = F2(
	function (key, _v0) {
		var dict = _v0;
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
		return {$: 0, a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Model$Style = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
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
					shadow.fi ? $elm$core$Maybe$Just('inset') : $elm$core$Maybe$Nothing,
					$elm$core$Maybe$Just(
					$elm$core$String$fromFloat(shadow.b.a) + 'px'),
					$elm$core$Maybe$Just(
					$elm$core$String$fromFloat(shadow.b.b) + 'px'),
					$elm$core$Maybe$Just(
					$elm$core$String$fromFloat(shadow.eQ) + 'px'),
					$elm$core$Maybe$Just(
					$elm$core$String$fromFloat(shadow.gv) + 'px'),
					$elm$core$Maybe$Just(
					$mdgriffith$elm_ui$Internal$Model$formatColor(shadow.cN))
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
			$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.e7) + ':focus-within',
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
						focus.g9),
						A2(
						$elm$core$Maybe$map,
						function (color) {
							return A2(
								$mdgriffith$elm_ui$Internal$Model$Property,
								'background-color',
								$mdgriffith$elm_ui$Internal$Model$formatColor(color));
						},
						focus.g3),
						A2(
						$elm$core$Maybe$map,
						function (shadow) {
							return A2(
								$mdgriffith$elm_ui$Internal$Model$Property,
								'box-shadow',
								$mdgriffith$elm_ui$Internal$Model$formatBoxShadow(
									{
										eQ: shadow.eQ,
										cN: shadow.cN,
										fi: false,
										b: A2(
											$elm$core$Tuple$mapSecond,
											$elm$core$Basics$toFloat,
											A2($elm$core$Tuple$mapFirst, $elm$core$Basics$toFloat, shadow.b)),
										gv: shadow.gv
									}));
						},
						focus.i$),
						$elm$core$Maybe$Just(
						A2($mdgriffith$elm_ui$Internal$Model$Property, 'outline', 'none'))
					]))),
			A2(
			$mdgriffith$elm_ui$Internal$Model$Style,
			($mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.g$) + ':focus .focusable, ') + (($mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.g$) + '.focusable:focus, ') + ('.ui-slide-bar:focus + ' + ($mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.g$) + ' .focusable-thumb'))),
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
						focus.g9),
						A2(
						$elm$core$Maybe$map,
						function (color) {
							return A2(
								$mdgriffith$elm_ui$Internal$Model$Property,
								'background-color',
								$mdgriffith$elm_ui$Internal$Model$formatColor(color));
						},
						focus.g3),
						A2(
						$elm$core$Maybe$map,
						function (shadow) {
							return A2(
								$mdgriffith$elm_ui$Internal$Model$Property,
								'box-shadow',
								$mdgriffith$elm_ui$Internal$Model$formatBoxShadow(
									{
										eQ: shadow.eQ,
										cN: shadow.cN,
										fi: false,
										b: A2(
											$elm$core$Tuple$mapSecond,
											$elm$core$Basics$toFloat,
											A2($elm$core$Tuple$mapFirst, $elm$core$Basics$toFloat, shadow.b)),
										gv: shadow.gv
									}));
						},
						focus.i$),
						$elm$core$Maybe$Just(
						A2($mdgriffith$elm_ui$Internal$Model$Property, 'outline', 'none'))
					])))
		]);
};
var $elm$virtual_dom$VirtualDom$node = function (tag) {
	return _VirtualDom_node(
		_VirtualDom_noScript(tag));
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
		return {$: 2, a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Style$Batch = function (a) {
	return {$: 6, a: a};
};
var $mdgriffith$elm_ui$Internal$Style$Child = F2(
	function (a, b) {
		return {$: 1, a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Style$Class = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Style$Descriptor = F2(
	function (a, b) {
		return {$: 4, a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Style$Left = 3;
var $mdgriffith$elm_ui$Internal$Style$Prop = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Style$Right = 2;
var $mdgriffith$elm_ui$Internal$Style$Self = $elm$core$Basics$identity;
var $mdgriffith$elm_ui$Internal$Style$Supports = F2(
	function (a, b) {
		return {$: 3, a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Style$Content = $elm$core$Basics$identity;
var $mdgriffith$elm_ui$Internal$Style$Bottom = 1;
var $mdgriffith$elm_ui$Internal$Style$CenterX = 4;
var $mdgriffith$elm_ui$Internal$Style$CenterY = 5;
var $mdgriffith$elm_ui$Internal$Style$Top = 0;
var $mdgriffith$elm_ui$Internal$Style$alignments = _List_fromArray(
	[0, 1, 2, 3, 4, 5]);
var $elm$core$List$concatMap = F2(
	function (f, list) {
		return $elm$core$List$concat(
			A2($elm$core$List$map, f, list));
	});
var $mdgriffith$elm_ui$Internal$Style$contentName = function (desc) {
	switch (desc) {
		case 0:
			var _v1 = desc;
			return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.hr);
		case 1:
			var _v2 = desc;
			return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.cR);
		case 2:
			var _v3 = desc;
			return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.cT);
		case 3:
			var _v4 = desc;
			return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.b5);
		case 4:
			var _v5 = desc;
			return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.cS);
		default:
			var _v6 = desc;
			return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.a6);
	}
};
var $mdgriffith$elm_ui$Internal$Style$selfName = function (desc) {
	switch (desc) {
		case 0:
			var _v1 = desc;
			return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.gZ);
		case 1:
			var _v2 = desc;
			return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.gS);
		case 2:
			var _v3 = desc;
			return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.eN);
		case 3:
			var _v4 = desc;
			return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.eM);
		case 4:
			var _v5 = desc;
			return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.gT);
		default:
			var _v6 = desc;
			return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.gU);
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
				$mdgriffith$elm_ui$Internal$Style$contentName(alignment),
				content),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Child,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.g$),
				_List_fromArray(
					[
						A2(
						$mdgriffith$elm_ui$Internal$Style$Descriptor,
						$mdgriffith$elm_ui$Internal$Style$selfName(alignment),
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
		$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.dN),
		_List_fromArray(
			[
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'z-index', '0'),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Child,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.g5),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'z-index', '-1')
					]))
			])),
		A2(
		$mdgriffith$elm_ui$Internal$Style$Descriptor,
		$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.i_),
		_List_fromArray(
			[
				A2(
				$mdgriffith$elm_ui$Internal$Style$Child,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.jf),
				_List_fromArray(
					[
						A2(
						$mdgriffith$elm_ui$Internal$Style$Descriptor,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.dQ),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '0')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Descriptor,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.eD),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'auto !important')
							]))
					]))
			])),
		A2(
		$mdgriffith$elm_ui$Internal$Style$Child,
		$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.dP),
		_List_fromArray(
			[
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'height', 'auto')
			])),
		A2(
		$mdgriffith$elm_ui$Internal$Style$Child,
		$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.dQ),
		_List_fromArray(
			[
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '100000')
			])),
		A2(
		$mdgriffith$elm_ui$Internal$Style$Child,
		$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.eD),
		_List_fromArray(
			[
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%')
			])),
		A2(
		$mdgriffith$elm_ui$Internal$Style$Child,
		$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.gO),
		_List_fromArray(
			[
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%')
			])),
		A2(
		$mdgriffith$elm_ui$Internal$Style$Child,
		$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.eC),
		_List_fromArray(
			[
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'flex-start')
			])),
		$mdgriffith$elm_ui$Internal$Style$describeAlignment(
		function (alignment) {
			switch (alignment) {
				case 0:
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
				case 1:
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
				case 2:
					return _Utils_Tuple2(
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-items', 'flex-end')
							]),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'flex-end')
							]));
				case 3:
					return _Utils_Tuple2(
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-items', 'flex-start')
							]),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'flex-start')
							]));
				case 4:
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
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.g$),
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
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.g$),
				_List_fromArray(
					[
						A2(
						$mdgriffith$elm_ui$Internal$Style$Descriptor,
						$mdgriffith$elm_ui$Internal$Style$selfName(alignment),
						values(alignment))
					]))
			]);
	};
	return $mdgriffith$elm_ui$Internal$Style$Batch(
		A2($elm$core$List$concatMap, createDescription, $mdgriffith$elm_ui$Internal$Style$alignments));
};
var $mdgriffith$elm_ui$Internal$Style$Above = 0;
var $mdgriffith$elm_ui$Internal$Style$Behind = 5;
var $mdgriffith$elm_ui$Internal$Style$Below = 1;
var $mdgriffith$elm_ui$Internal$Style$OnLeft = 3;
var $mdgriffith$elm_ui$Internal$Style$OnRight = 2;
var $mdgriffith$elm_ui$Internal$Style$Within = 4;
var $mdgriffith$elm_ui$Internal$Style$locations = function () {
	var loc = 0;
	var _v0 = function () {
		switch (loc) {
			case 0:
				return 0;
			case 1:
				return 0;
			case 2:
				return 0;
			case 3:
				return 0;
			case 4:
				return 0;
			default:
				return 0;
		}
	}();
	return _List_fromArray(
		[0, 1, 2, 3, 4, 5]);
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
			$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.g$),
			_Utils_ap(
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.i2),
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.h5))),
		_List_fromArray(
			[
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'block'),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.dQ),
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
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.eD),
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
		$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.g$) + ':focus',
		_List_fromArray(
			[
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'outline', 'none')
			])),
		A2(
		$mdgriffith$elm_ui$Internal$Style$Class,
		$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.iU),
		_List_fromArray(
			[
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'height', 'auto'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'min-height', '100%'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'z-index', '0'),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				_Utils_ap(
					$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.g$),
					$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.dQ)),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'height', '100%'),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.dQ),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'height', '100%')
							]))
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Child,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.h7),
				_List_fromArray(
					[
						A2(
						$mdgriffith$elm_ui$Internal$Style$Descriptor,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.bU),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'position', 'fixed'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'z-index', '20')
							]))
					]))
			])),
		A2(
		$mdgriffith$elm_ui$Internal$Style$Class,
		$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.bU),
		_List_fromArray(
			[
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'position', 'relative'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'border', 'none'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'flex'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-direction', 'row'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-basis', 'auto'),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.i2),
				$mdgriffith$elm_ui$Internal$Style$elDescription),
				$mdgriffith$elm_ui$Internal$Style$Batch(
				function (fn) {
					return A2($elm$core$List$map, fn, $mdgriffith$elm_ui$Internal$Style$locations);
				}(
					function (loc) {
						switch (loc) {
							case 0:
								return A2(
									$mdgriffith$elm_ui$Internal$Style$Descriptor,
									$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.gQ),
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
											$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.dQ),
											_List_fromArray(
												[
													A2($mdgriffith$elm_ui$Internal$Style$Prop, 'height', 'auto')
												])),
											A2(
											$mdgriffith$elm_ui$Internal$Style$Child,
											$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.eD),
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
							case 1:
								return A2(
									$mdgriffith$elm_ui$Internal$Style$Descriptor,
									$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.g6),
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
											$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.dQ),
											_List_fromArray(
												[
													A2($mdgriffith$elm_ui$Internal$Style$Prop, 'height', 'auto')
												]))
										]));
							case 2:
								return A2(
									$mdgriffith$elm_ui$Internal$Style$Descriptor,
									$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.iE),
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
							case 3:
								return A2(
									$mdgriffith$elm_ui$Internal$Style$Descriptor,
									$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.iC),
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
							case 4:
								return A2(
									$mdgriffith$elm_ui$Internal$Style$Descriptor,
									$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.h7),
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
									$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.g5),
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
		$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.g$),
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
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.eE),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-wrap', 'wrap')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.f$),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, '-moz-user-select', 'none'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, '-webkit-user-select', 'none'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, '-ms-user-select', 'none'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'user-select', 'none')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.hv),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'cursor', 'pointer')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.hw),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'cursor', 'text')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.iL),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'none !important')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.cJ),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'auto !important')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.bB),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'opacity', '0')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.bw),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'opacity', '1')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot(
					_Utils_ap($mdgriffith$elm_ui$Internal$Style$classes.h3, $mdgriffith$elm_ui$Internal$Style$classes.bB)) + ':hover',
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'opacity', '0')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot(
					_Utils_ap($mdgriffith$elm_ui$Internal$Style$classes.h3, $mdgriffith$elm_ui$Internal$Style$classes.bw)) + ':hover',
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'opacity', '1')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot(
					_Utils_ap($mdgriffith$elm_ui$Internal$Style$classes.hV, $mdgriffith$elm_ui$Internal$Style$classes.bB)) + ':focus',
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'opacity', '0')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot(
					_Utils_ap($mdgriffith$elm_ui$Internal$Style$classes.hV, $mdgriffith$elm_ui$Internal$Style$classes.bw)) + ':focus',
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'opacity', '1')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot(
					_Utils_ap($mdgriffith$elm_ui$Internal$Style$classes.aR, $mdgriffith$elm_ui$Internal$Style$classes.bB)) + ':active',
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'opacity', '0')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot(
					_Utils_ap($mdgriffith$elm_ui$Internal$Style$classes.aR, $mdgriffith$elm_ui$Internal$Style$classes.bw)) + ':active',
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'opacity', '1')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.gH),
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
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.iX),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'overflow', 'auto'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-shrink', '1')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.iY),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'overflow-x', 'auto'),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Descriptor,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.aM),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-shrink', '1')
							]))
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.iZ),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'overflow-y', 'auto'),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Descriptor,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.aH),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-shrink', '1')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Descriptor,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.i2),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-shrink', '1')
							]))
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.hm),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'overflow', 'hidden')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.hn),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'overflow-x', 'hidden')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.ho),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'overflow-y', 'hidden')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.eC),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', 'auto')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.cH),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'border-width', '0')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.ha),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'border-style', 'dashed')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.hb),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'border-style', 'dotted')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.hc),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'border-style', 'solid')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.jf),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'white-space', 'pre'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'inline-block')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.ie),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'line-height', '1.05'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'background', 'transparent'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-align', 'inherit')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.i2),
				$mdgriffith$elm_ui$Internal$Style$elDescription),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.aM),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'flex'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-direction', 'row'),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.g$),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-basis', '0%'),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Descriptor,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.gN),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-basis', 'auto')
									])),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Descriptor,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.fv),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-basis', 'auto')
									]))
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.dQ),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'stretch !important')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.fb),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'stretch !important')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.eD),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '100000')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.cP),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '0'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-basis', 'auto'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'stretch')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						'u:first-of-type.' + $mdgriffith$elm_ui$Internal$Style$classes.gY,
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '1')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						's:first-of-type.' + $mdgriffith$elm_ui$Internal$Style$classes.gW,
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '1'),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Child,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.gT),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-left', 'auto !important')
									]))
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						's:last-of-type.' + $mdgriffith$elm_ui$Internal$Style$classes.gW,
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '1'),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Child,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.gT),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-right', 'auto !important')
									]))
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						's:only-of-type.' + $mdgriffith$elm_ui$Internal$Style$classes.gW,
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '1'),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Child,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.gU),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-top', 'auto !important'),
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-bottom', 'auto !important')
									]))
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						's:last-of-type.' + ($mdgriffith$elm_ui$Internal$Style$classes.gW + ' ~ u'),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '0')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						'u:first-of-type.' + ($mdgriffith$elm_ui$Internal$Style$classes.gY + (' ~ s.' + $mdgriffith$elm_ui$Internal$Style$classes.gW)),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '0')
							])),
						$mdgriffith$elm_ui$Internal$Style$describeAlignment(
						function (alignment) {
							switch (alignment) {
								case 0:
									return _Utils_Tuple2(
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-items', 'flex-start')
											]),
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'flex-start')
											]));
								case 1:
									return _Utils_Tuple2(
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-items', 'flex-end')
											]),
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'flex-end')
											]));
								case 2:
									return _Utils_Tuple2(
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'justify-content', 'flex-end')
											]),
										_List_Nil);
								case 3:
									return _Utils_Tuple2(
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'justify-content', 'flex-start')
											]),
										_List_Nil);
								case 4:
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
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.i4),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'justify-content', 'space-between')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Descriptor,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.c2),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-items', 'baseline')
							]))
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.aH),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'flex'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-direction', 'column'),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.g$),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-basis', '0px'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'min-height', 'min-content'),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Descriptor,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.fa),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-basis', 'auto')
									]))
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.dQ),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '100000')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.eD),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.gO),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.eC),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'flex-start')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						'u:first-of-type.' + $mdgriffith$elm_ui$Internal$Style$classes.gV,
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '1')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						's:first-of-type.' + $mdgriffith$elm_ui$Internal$Style$classes.gX,
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '1'),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Child,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.gU),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-top', 'auto !important'),
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-bottom', '0 !important')
									]))
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						's:last-of-type.' + $mdgriffith$elm_ui$Internal$Style$classes.gX,
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '1'),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Child,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.gU),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-bottom', 'auto !important'),
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-top', '0 !important')
									]))
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						's:only-of-type.' + $mdgriffith$elm_ui$Internal$Style$classes.gX,
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '1'),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Child,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.gU),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-top', 'auto !important'),
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-bottom', 'auto !important')
									]))
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						's:last-of-type.' + ($mdgriffith$elm_ui$Internal$Style$classes.gX + ' ~ u'),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '0')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						'u:first-of-type.' + ($mdgriffith$elm_ui$Internal$Style$classes.gV + (' ~ s.' + $mdgriffith$elm_ui$Internal$Style$classes.gX)),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '0')
							])),
						$mdgriffith$elm_ui$Internal$Style$describeAlignment(
						function (alignment) {
							switch (alignment) {
								case 0:
									return _Utils_Tuple2(
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'justify-content', 'flex-start')
											]),
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-bottom', 'auto')
											]));
								case 1:
									return _Utils_Tuple2(
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'justify-content', 'flex-end')
											]),
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-top', 'auto')
											]));
								case 2:
									return _Utils_Tuple2(
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-items', 'flex-end')
											]),
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'flex-end')
											]));
								case 3:
									return _Utils_Tuple2(
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-items', 'flex-start')
											]),
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'flex-start')
											]));
								case 4:
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
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.cP),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '0'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-basis', 'auto'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'stretch !important')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Descriptor,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.i4),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'justify-content', 'space-between')
							]))
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.hX),
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
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.g$),
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
							switch (alignment) {
								case 0:
									return _List_fromArray(
										[
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'justify-content', 'flex-start')
										]);
								case 1:
									return _List_fromArray(
										[
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'justify-content', 'flex-end')
										]);
								case 2:
									return _List_fromArray(
										[
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-items', 'flex-end')
										]);
								case 3:
									return _List_fromArray(
										[
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-items', 'flex-start')
										]);
								case 4:
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
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.f8),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'block'),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.g$ + ':first-child'),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin', '0 !important')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot(
							$mdgriffith$elm_ui$Internal$Style$classes.g$ + ($mdgriffith$elm_ui$Internal$Style$selfName(3) + (':first-child + .' + $mdgriffith$elm_ui$Internal$Style$classes.g$))),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin', '0 !important')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot(
							$mdgriffith$elm_ui$Internal$Style$classes.g$ + ($mdgriffith$elm_ui$Internal$Style$selfName(2) + (':first-child + .' + $mdgriffith$elm_ui$Internal$Style$classes.g$))),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin', '0 !important')
							])),
						$mdgriffith$elm_ui$Internal$Style$describeAlignment(
						function (alignment) {
							switch (alignment) {
								case 0:
									return _Utils_Tuple2(_List_Nil, _List_Nil);
								case 1:
									return _Utils_Tuple2(_List_Nil, _List_Nil);
								case 2:
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
								case 3:
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
								case 4:
									return _Utils_Tuple2(_List_Nil, _List_Nil);
								default:
									return _Utils_Tuple2(_List_Nil, _List_Nil);
							}
						})
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.ia),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'white-space', 'pre-wrap !important'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'height', '100%'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'background-color', 'transparent')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.id),
				_List_fromArray(
					[
						A2(
						$mdgriffith$elm_ui$Internal$Style$Descriptor,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.i2),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-basis', 'auto')
							]))
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.ic),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'white-space', 'pre-wrap !important'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'cursor', 'text'),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.ib),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'white-space', 'pre-wrap !important'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'color', 'transparent')
							]))
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.f9),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'block'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'white-space', 'normal'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'overflow-wrap', 'break-word'),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Descriptor,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.dN),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'z-index', '0'),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Child,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.g5),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'z-index', '-1')
									]))
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$AllChildren,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.jf),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'inline'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'white-space', 'normal')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$AllChildren,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.f9),
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
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.i2),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'inline'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'white-space', 'normal'),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Descriptor,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.gN),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'inline-block')
									])),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Descriptor,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.h7),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'flex')
									])),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Descriptor,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.g5),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'flex')
									])),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Descriptor,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.gQ),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'flex')
									])),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Descriptor,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.g6),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'flex')
									])),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Descriptor,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.iE),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'flex')
									])),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Descriptor,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.iC),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'flex')
									])),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Child,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.jf),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'inline'),
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'white-space', 'normal')
									]))
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.aM),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'inline')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.aH),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'inline-flex')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.hX),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'inline-grid')
							])),
						$mdgriffith$elm_ui$Internal$Style$describeAlignment(
						function (alignment) {
							switch (alignment) {
								case 0:
									return _Utils_Tuple2(_List_Nil, _List_Nil);
								case 1:
									return _Utils_Tuple2(_List_Nil, _List_Nil);
								case 2:
									return _Utils_Tuple2(
										_List_Nil,
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'float', 'right')
											]));
								case 3:
									return _Utils_Tuple2(
										_List_Nil,
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'float', 'left')
											]));
								case 4:
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
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.jr),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-weight', '100')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.ji),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-weight', '200')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.jm),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-weight', '300')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.jo),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-weight', '400')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.jn),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-weight', '500')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.jq),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-weight', '600')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.g8),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-weight', '700')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.jh),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-weight', '800')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.jj),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-weight', '900')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.ik),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-style', 'italic')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.i9),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-decoration', 'line-through')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.jA),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-decoration', 'underline'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-decoration-skip-ink', 'auto'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-decoration-skip', 'ink')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				_Utils_ap(
					$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.jA),
					$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.i9)),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-decoration', 'line-through underline'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-decoration-skip-ink', 'auto'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-decoration-skip', 'ink')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.js),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-style', 'normal')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.jk),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-align', 'justify')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.dr),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-align', 'justify-all')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.jg),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-align', 'center')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.jp),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-align', 'right')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.jl),
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
var $mdgriffith$elm_ui$Internal$Style$explainer = '\n.explain {\n    border: 6px solid rgb(174, 121, 15) !important;\n}\n.explain > .' + ($mdgriffith$elm_ui$Internal$Style$classes.g$ + (' {\n    border: 4px dashed rgb(0, 151, 167) !important;\n}\n\n.ctr {\n    border: none !important;\n}\n.explain > .ctr > .' + ($mdgriffith$elm_ui$Internal$Style$classes.g$ + ' {\n    border: 4px dashed rgb(0, 151, 167) !important;\n}\n\n')));
var $mdgriffith$elm_ui$Internal$Style$inputTextReset = '\ninput[type="search"],\ninput[type="search"]::-webkit-search-decoration,\ninput[type="search"]::-webkit-search-cancel-button,\ninput[type="search"]::-webkit-search-results-button,\ninput[type="search"]::-webkit-search-results-decoration {\n  -webkit-appearance:none;\n}\n';
var $mdgriffith$elm_ui$Internal$Style$sliderReset = '\ninput[type=range] {\n  -webkit-appearance: none; \n  background: transparent;\n  position:absolute;\n  left:0;\n  top:0;\n  z-index:10;\n  width: 100%;\n  outline: dashed 1px;\n  height: 100%;\n  opacity: 0;\n}\n';
var $mdgriffith$elm_ui$Internal$Style$thumbReset = '\ninput[type=range]::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    opacity: 0.5;\n    width: 80px;\n    height: 80px;\n    background-color: black;\n    border:none;\n    border-radius: 5px;\n}\ninput[type=range]::-moz-range-thumb {\n    opacity: 0.5;\n    width: 80px;\n    height: 80px;\n    background-color: black;\n    border:none;\n    border-radius: 5px;\n}\ninput[type=range]::-ms-thumb {\n    opacity: 0.5;\n    width: 80px;\n    height: 80px;\n    background-color: black;\n    border:none;\n    border-radius: 5px;\n}\ninput[type=range][orient=vertical]{\n    writing-mode: bt-lr; /* IE */\n    -webkit-appearance: slider-vertical;  /* WebKit */\n}\n';
var $mdgriffith$elm_ui$Internal$Style$trackReset = '\ninput[type=range]::-moz-range-track {\n    background: transparent;\n    cursor: pointer;\n}\ninput[type=range]::-ms-track {\n    background: transparent;\n    cursor: pointer;\n}\ninput[type=range]::-webkit-slider-runnable-track {\n    background: transparent;\n    cursor: pointer;\n}\n';
var $mdgriffith$elm_ui$Internal$Style$overrides = '@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {' + ($mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.g$) + ($mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.aM) + (' > ' + ($mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.g$) + (' { flex-basis: auto !important; } ' + ($mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.g$) + ($mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.aM) + (' > ' + ($mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.g$) + ($mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.cP) + (' { flex-basis: auto !important; }}' + ($mdgriffith$elm_ui$Internal$Style$inputTextReset + ($mdgriffith$elm_ui$Internal$Style$sliderReset + ($mdgriffith$elm_ui$Internal$Style$trackReset + ($mdgriffith$elm_ui$Internal$Style$thumbReset + $mdgriffith$elm_ui$Internal$Style$explainer)))))))))))))));
var $elm$core$String$concat = function (strings) {
	return A2($elm$core$String$join, '', strings);
};
var $mdgriffith$elm_ui$Internal$Style$Intermediate = $elm$core$Basics$identity;
var $mdgriffith$elm_ui$Internal$Style$emptyIntermediate = F2(
	function (selector, closing) {
		return {cM: closing, V: _List_Nil, bd: _List_Nil, aN: selector};
	});
var $mdgriffith$elm_ui$Internal$Style$renderRules = F2(
	function (_v0, rulesToRender) {
		var parent = _v0;
		var generateIntermediates = F2(
			function (rule, rendered) {
				switch (rule.$) {
					case 0:
						var name = rule.a;
						var val = rule.b;
						return _Utils_update(
							rendered,
							{
								bd: A2(
									$elm$core$List$cons,
									_Utils_Tuple2(name, val),
									rendered.bd)
							});
					case 3:
						var _v2 = rule.a;
						var prop = _v2.a;
						var value = _v2.b;
						var props = rule.b;
						return _Utils_update(
							rendered,
							{
								V: A2(
									$elm$core$List$cons,
									{cM: '\n}', V: _List_Nil, bd: props, aN: '@supports (' + (prop + (':' + (value + (') {' + parent.aN))))},
									rendered.V)
							});
					case 5:
						var selector = rule.a;
						var adjRules = rule.b;
						return _Utils_update(
							rendered,
							{
								V: A2(
									$elm$core$List$cons,
									A2(
										$mdgriffith$elm_ui$Internal$Style$renderRules,
										A2($mdgriffith$elm_ui$Internal$Style$emptyIntermediate, parent.aN + (' + ' + selector), ''),
										adjRules),
									rendered.V)
							});
					case 1:
						var child = rule.a;
						var childRules = rule.b;
						return _Utils_update(
							rendered,
							{
								V: A2(
									$elm$core$List$cons,
									A2(
										$mdgriffith$elm_ui$Internal$Style$renderRules,
										A2($mdgriffith$elm_ui$Internal$Style$emptyIntermediate, parent.aN + (' > ' + child), ''),
										childRules),
									rendered.V)
							});
					case 2:
						var child = rule.a;
						var childRules = rule.b;
						return _Utils_update(
							rendered,
							{
								V: A2(
									$elm$core$List$cons,
									A2(
										$mdgriffith$elm_ui$Internal$Style$renderRules,
										A2($mdgriffith$elm_ui$Internal$Style$emptyIntermediate, parent.aN + (' ' + child), ''),
										childRules),
									rendered.V)
							});
					case 4:
						var descriptor = rule.a;
						var descriptorRules = rule.b;
						return _Utils_update(
							rendered,
							{
								V: A2(
									$elm$core$List$cons,
									A2(
										$mdgriffith$elm_ui$Internal$Style$renderRules,
										A2(
											$mdgriffith$elm_ui$Internal$Style$emptyIntermediate,
											_Utils_ap(parent.aN, descriptor),
											''),
										descriptorRules),
									rendered.V)
							});
					default:
						var batched = rule.a;
						return _Utils_update(
							rendered,
							{
								V: A2(
									$elm$core$List$cons,
									A2(
										$mdgriffith$elm_ui$Internal$Style$renderRules,
										A2($mdgriffith$elm_ui$Internal$Style$emptyIntermediate, parent.aN, ''),
										batched),
									rendered.V)
							});
				}
			});
		return A3($elm$core$List$foldr, generateIntermediates, parent, rulesToRender);
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
		var _v2 = rule.bd;
		if (!_v2.b) {
			return '';
		} else {
			return rule.aN + ('{' + (renderValues(rule.bd) + (rule.cM + '}')));
		}
	};
	var renderIntermediate = function (_v0) {
		var rule = _v0;
		return _Utils_ap(
			renderClass(rule),
			$elm$core$String$concat(
				A2($elm$core$List$map, renderIntermediate, rule.V)));
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
var $elm$virtual_dom$VirtualDom$text = _VirtualDom_text;
var $mdgriffith$elm_ui$Internal$Model$staticRoot = function (opts) {
	var _v0 = opts.fW;
	switch (_v0) {
		case 0:
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
		case 1:
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
		case 0:
			return 'serif';
		case 1:
			return 'sans-serif';
		case 2:
			return 'monospace';
		case 3:
			var name = font.a;
			return '\"' + (name + '\"');
		case 4:
			var name = font.a;
			var url = font.b;
			return '\"' + (name + '\"');
		default:
			var name = font.a.f_;
			return '\"' + (name + '\"');
	}
};
var $mdgriffith$elm_ui$Internal$Model$isSmallCaps = function (_var) {
	switch (_var.$) {
		case 0:
			var name = _var.a;
			return name === 'smcp';
		case 1:
			var name = _var.a;
			return false;
		default:
			var name = _var.a;
			var index = _var.b;
			return (name === 'smcp') && (index === 1);
	}
};
var $mdgriffith$elm_ui$Internal$Model$hasSmallCaps = function (typeface) {
	if (typeface.$ === 5) {
		var font = typeface.a;
		return A2($elm$core$List$any, $mdgriffith$elm_ui$Internal$Model$isSmallCaps, font.gK);
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
		if (maybePseudo.$ === 1) {
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
			switch (pseudo) {
				case 1:
					var _v2 = options.h3;
					switch (_v2) {
						case 0:
							return _List_Nil;
						case 2:
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
				case 0:
					var renderedProps = A3(
						$elm$core$List$foldl,
						$mdgriffith$elm_ui$Internal$Model$renderProps(false),
						'',
						props);
					return _List_fromArray(
						[
							selector + ('-fs:focus {' + (renderedProps + '\n}')),
							('.' + ($mdgriffith$elm_ui$Internal$Style$classes.g$ + (':focus ' + (selector + '-fs  {')))) + (renderedProps + '\n}'),
							(selector + '-fs:focus-within {') + (renderedProps + '\n}'),
							('.ui-slide-bar:focus + ' + ($mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.g$) + (' .focusable-thumb' + (selector + '-fs {')))) + (renderedProps + '\n}')
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
		case 0:
			var name = _var.a;
			return '\"' + (name + '\"');
		case 1:
			var name = _var.a;
			return '\"' + (name + '\" 0');
		default:
			var name = _var.a;
			var index = _var.b;
			return '\"' + (name + ('\" ' + $elm$core$String$fromInt(index)));
	}
};
var $mdgriffith$elm_ui$Internal$Model$renderVariants = function (typeface) {
	if (typeface.$ === 5) {
		var font = typeface.a;
		return $elm$core$Maybe$Just(
			A2(
				$elm$core$String$join,
				', ',
				A2($elm$core$List$map, $mdgriffith$elm_ui$Internal$Model$renderVariant, font.gK)));
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $mdgriffith$elm_ui$Internal$Model$transformValue = function (transform) {
	switch (transform.$) {
		case 0:
			return $elm$core$Maybe$Nothing;
		case 1:
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
			case 0:
				var selector = rule.a;
				var props = rule.b;
				return A4($mdgriffith$elm_ui$Internal$Model$renderStyle, options, maybePseudo, selector, props);
			case 13:
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
			case 12:
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
			case 2:
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
			case 1:
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
			case 3:
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
			case 4:
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
			case 5:
				var cls = rule.a;
				var x = rule.b;
				var y = rule.c;
				var yPx = $elm$core$String$fromInt(y) + 'px';
				var xPx = $elm$core$String$fromInt(x) + 'px';
				var single = '.' + $mdgriffith$elm_ui$Internal$Style$classes.i2;
				var row = '.' + $mdgriffith$elm_ui$Internal$Style$classes.aM;
				var wrappedRow = '.' + ($mdgriffith$elm_ui$Internal$Style$classes.eE + row);
				var right = '.' + $mdgriffith$elm_ui$Internal$Style$classes.eN;
				var paragraph = '.' + $mdgriffith$elm_ui$Internal$Style$classes.f9;
				var page = '.' + $mdgriffith$elm_ui$Internal$Style$classes.f8;
				var left = '.' + $mdgriffith$elm_ui$Internal$Style$classes.eM;
				var halfY = $elm$core$String$fromFloat(y / 2) + 'px';
				var halfX = $elm$core$String$fromFloat(x / 2) + 'px';
				var column = '.' + $mdgriffith$elm_ui$Internal$Style$classes.aH;
				var _class = '.' + cls;
				var any = '.' + $mdgriffith$elm_ui$Internal$Style$classes.g$;
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
			case 7:
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
			case 6:
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
			case 8:
				var template = rule.a;
				var toGridLengthHelper = F3(
					function (minimum, maximum, x) {
						toGridLengthHelper:
						while (true) {
							switch (x.$) {
								case 0:
									var px = x.a;
									return $elm$core$String$fromInt(px) + 'px';
								case 1:
									var _v2 = _Utils_Tuple2(minimum, maximum);
									if (_v2.a.$ === 1) {
										if (_v2.b.$ === 1) {
											var _v3 = _v2.a;
											var _v4 = _v2.b;
											return 'max-content';
										} else {
											var _v6 = _v2.a;
											var maxSize = _v2.b.a;
											return 'minmax(max-content, ' + ($elm$core$String$fromInt(maxSize) + 'px)');
										}
									} else {
										if (_v2.b.$ === 1) {
											var minSize = _v2.a.a;
											var _v5 = _v2.b;
											return 'minmax(' + ($elm$core$String$fromInt(minSize) + ('px, ' + 'max-content)'));
										} else {
											var minSize = _v2.a.a;
											var maxSize = _v2.b.a;
											return 'minmax(' + ($elm$core$String$fromInt(minSize) + ('px, ' + ($elm$core$String$fromInt(maxSize) + 'px)')));
										}
									}
								case 2:
									var i = x.a;
									var _v7 = _Utils_Tuple2(minimum, maximum);
									if (_v7.a.$ === 1) {
										if (_v7.b.$ === 1) {
											var _v8 = _v7.a;
											var _v9 = _v7.b;
											return $elm$core$String$fromInt(i) + 'fr';
										} else {
											var _v11 = _v7.a;
											var maxSize = _v7.b.a;
											return 'minmax(max-content, ' + ($elm$core$String$fromInt(maxSize) + 'px)');
										}
									} else {
										if (_v7.b.$ === 1) {
											var minSize = _v7.a.a;
											var _v10 = _v7.b;
											return 'minmax(' + ($elm$core$String$fromInt(minSize) + ('px, ' + ($elm$core$String$fromInt(i) + ('fr' + 'fr)'))));
										} else {
											var minSize = _v7.a.a;
											var maxSize = _v7.b.a;
											return 'minmax(' + ($elm$core$String$fromInt(minSize) + ('px, ' + ($elm$core$String$fromInt(maxSize) + 'px)')));
										}
									}
								case 3:
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
				var xSpacing = toGridLength(template.i5.a);
				var ySpacing = toGridLength(template.i5.b);
				var rows = function (x) {
					return 'grid-template-rows: ' + (x + ';');
				}(
					A2(
						$elm$core$String$join,
						' ',
						A2($elm$core$List$map, toGridLength, template.iV)));
				var msRows = function (x) {
					return '-ms-grid-rows: ' + (x + ';');
				}(
					A2(
						$elm$core$String$join,
						ySpacing,
						A2($elm$core$List$map, toGridLength, template.aU)));
				var msColumns = function (x) {
					return '-ms-grid-columns: ' + (x + ';');
				}(
					A2(
						$elm$core$String$join,
						ySpacing,
						A2($elm$core$List$map, toGridLength, template.aU)));
				var gapY = 'grid-row-gap:' + (toGridLength(template.i5.b) + ';');
				var gapX = 'grid-column-gap:' + (toGridLength(template.i5.a) + ';');
				var columns = function (x) {
					return 'grid-template-columns: ' + (x + ';');
				}(
					A2(
						$elm$core$String$join,
						' ',
						A2($elm$core$List$map, toGridLength, template.aU)));
				var _class = '.grid-rows-' + (A2(
					$elm$core$String$join,
					'-',
					A2($elm$core$List$map, $mdgriffith$elm_ui$Internal$Model$lengthClassName, template.iV)) + ('-cols-' + (A2(
					$elm$core$String$join,
					'-',
					A2($elm$core$List$map, $mdgriffith$elm_ui$Internal$Model$lengthClassName, template.aU)) + ('-space-x-' + ($mdgriffith$elm_ui$Internal$Model$lengthClassName(template.i5.a) + ('-space-y-' + $mdgriffith$elm_ui$Internal$Model$lengthClassName(template.i5.b)))))));
				var modernGrid = _class + ('{' + (columns + (rows + (gapX + (gapY + '}')))));
				var supports = '@supports (display:grid) {' + (modernGrid + '}');
				var base = _class + ('{' + (msColumns + (msRows + '}')));
				return _List_fromArray(
					[base, supports]);
			case 9:
				var position = rule.a;
				var msPosition = A2(
					$elm$core$String$join,
					' ',
					_List_fromArray(
						[
							'-ms-grid-row: ' + ($elm$core$String$fromInt(position.aM) + ';'),
							'-ms-grid-row-span: ' + ($elm$core$String$fromInt(position.dO) + ';'),
							'-ms-grid-column: ' + ($elm$core$String$fromInt(position.eX) + ';'),
							'-ms-grid-column-span: ' + ($elm$core$String$fromInt(position.eB) + ';')
						]));
				var modernPosition = A2(
					$elm$core$String$join,
					' ',
					_List_fromArray(
						[
							'grid-row: ' + ($elm$core$String$fromInt(position.aM) + (' / ' + ($elm$core$String$fromInt(position.aM + position.dO) + ';'))),
							'grid-column: ' + ($elm$core$String$fromInt(position.eX) + (' / ' + ($elm$core$String$fromInt(position.eX + position.eB) + ';')))
						]));
				var _class = '.grid-pos-' + ($elm$core$String$fromInt(position.aM) + ('-' + ($elm$core$String$fromInt(position.eX) + ('-' + ($elm$core$String$fromInt(position.eB) + ('-' + $elm$core$String$fromInt(position.dO)))))));
				var modernGrid = _class + ('{' + (modernPosition + '}'));
				var supports = '@supports (display:grid) {' + (modernGrid + '}');
				var base = _class + ('{' + (msPosition + '}'));
				return _List_fromArray(
					[base, supports]);
			case 11:
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
				if ((!_v12.a.$) && (!_v12.b.$)) {
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
				A2($mdgriffith$elm_ui$Internal$Model$bracket, '.' + (name + ('.' + (modifier + ('> .' + ($mdgriffith$elm_ui$Internal$Style$classes.jf + (', .' + (name + (' .' + (modifier + (' > .' + $mdgriffith$elm_ui$Internal$Style$classes.jf)))))))))), textAdjustment)
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
				A3($mdgriffith$elm_ui$Internal$Model$fontRule, name, $mdgriffith$elm_ui$Internal$Style$classes.i3, capital),
				A3($mdgriffith$elm_ui$Internal$Model$fontRule, name, $mdgriffith$elm_ui$Internal$Style$classes.hW, full)));
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
					'.' + (name + ('.' + ($mdgriffith$elm_ui$Internal$Style$classes.i3 + (', ' + ('.' + (name + (' .' + $mdgriffith$elm_ui$Internal$Style$classes.i3))))))),
					_List_fromArray(
						[
							_Utils_Tuple2('line-height', '1')
						])),
					A2(
					$mdgriffith$elm_ui$Internal$Model$bracket,
					'.' + (name + ('.' + ($mdgriffith$elm_ui$Internal$Style$classes.i3 + ('> .' + ($mdgriffith$elm_ui$Internal$Style$classes.jf + (', .' + (name + (' .' + ($mdgriffith$elm_ui$Internal$Style$classes.i3 + (' > .' + $mdgriffith$elm_ui$Internal$Style$classes.jf)))))))))),
					_List_fromArray(
						[
							_Utils_Tuple2('vertical-align', '0'),
							_Utils_Tuple2('line-height', '1')
						]))
				]));
	});
var $mdgriffith$elm_ui$Internal$Model$adjust = F3(
	function (size, height, vertical) {
		return {dO: height / size, gv: size, gL: vertical};
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
var $elm$core$Basics$neq = _Utils_notEqual;
var $mdgriffith$elm_ui$Internal$Model$convertAdjustment = function (adjustment) {
	var lines = _List_fromArray(
		[adjustment.hg, adjustment.g4, adjustment.hC, adjustment.$9]);
	var lineHeight = 1.5;
	var normalDescender = (lineHeight - 1) / 2;
	var oldMiddle = lineHeight / 2;
	var descender = A2(
		$elm$core$Maybe$withDefault,
		adjustment.hC,
		$elm$core$List$minimum(lines));
	var newBaseline = A2(
		$elm$core$Maybe$withDefault,
		adjustment.g4,
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
		adjustment.hg,
		$elm$core$List$maximum(lines));
	var capitalSize = 1 / (ascender - newBaseline);
	var capitalVertical = 1 - ascender;
	var fullSize = 1 / (ascender - descender);
	var fullVertical = 1 - ascender;
	var newCapitalMiddle = ((ascender - newBaseline) / 2) + newBaseline;
	var newFullMiddle = ((ascender - descender) / 2) + descender;
	return {
		hg: A3($mdgriffith$elm_ui$Internal$Model$adjust, capitalSize, ascender - newBaseline, capitalVertical),
		e9: A3($mdgriffith$elm_ui$Internal$Model$adjust, fullSize, ascender - descender, fullVertical)
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
				$elm$core$String$fromFloat(converted.dO)),
				_Utils_Tuple2(
				'vertical-align',
				$elm$core$String$fromFloat(converted.gL) + 'em'),
				_Utils_Tuple2(
				'font-size',
				$elm$core$String$fromFloat(converted.gv) + 'em')
			]));
};
var $mdgriffith$elm_ui$Internal$Model$typefaceAdjustment = function (typefaces) {
	return A3(
		$elm$core$List$foldl,
		F2(
			function (face, found) {
				if (found.$ === 1) {
					if (face.$ === 5) {
						var _with = face.a;
						var _v2 = _with.gR;
						if (_v2.$ === 1) {
							return found;
						} else {
							var adjustment = _v2.a;
							return $elm$core$Maybe$Just(
								_Utils_Tuple2(
									$mdgriffith$elm_ui$Internal$Model$fontAdjustmentRules(
										function ($) {
											return $.e9;
										}(
											$mdgriffith$elm_ui$Internal$Model$convertAdjustment(adjustment))),
									$mdgriffith$elm_ui$Internal$Model$fontAdjustmentRules(
										function ($) {
											return $.hg;
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
		if (font.$ === 4) {
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
		if (_v0.$ === 1) {
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
	if (rule.$ === 1) {
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
					dm: _Utils_ap(
						rendered.dm,
						A3($mdgriffith$elm_ui$Internal$Model$renderStyleRule, options, style, $elm$core$Maybe$Nothing)),
					cy: function () {
						var _v1 = $mdgriffith$elm_ui$Internal$Model$topLevelValue(style);
						if (_v1.$ === 1) {
							return rendered.cy;
						} else {
							var topLevel = _v1.a;
							return A2($elm$core$List$cons, topLevel, rendered.cy);
						}
					}()
				};
			});
		var _v0 = A3(
			$elm$core$List$foldl,
			combine,
			{dm: _List_Nil, cy: _List_Nil},
			stylesheet);
		var topLevel = _v0.cy;
		var rules = _v0.dm;
		return _Utils_ap(
			$mdgriffith$elm_ui$Internal$Model$renderTopLevelValues(topLevel),
			$elm$core$String$concat(rules));
	});
var $mdgriffith$elm_ui$Internal$Model$toStyleSheet = F2(
	function (options, styleSheet) {
		var _v0 = options.fW;
		switch (_v0) {
			case 0:
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
			case 1:
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
					$mdgriffith$elm_ui$Internal$Model$renderFocusStyle(opts.hV)),
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
					$mdgriffith$elm_ui$Internal$Model$renderFocusStyle(opts.hV)),
				styles).b);
		return _static ? A2(
			$elm$core$List$cons,
			$mdgriffith$elm_ui$Internal$Model$staticRoot(opts),
			A2($elm$core$List$cons, dynamicStyleSheet, children)) : A2($elm$core$List$cons, dynamicStyleSheet, children);
	});
var $mdgriffith$elm_ui$Internal$Flag$heightBetween = $mdgriffith$elm_ui$Internal$Flag$flag(45);
var $mdgriffith$elm_ui$Internal$Flag$heightFill = $mdgriffith$elm_ui$Internal$Flag$flag(37);
var $elm$virtual_dom$VirtualDom$keyedNode = function (tag) {
	return _VirtualDom_keyedNode(
		_VirtualDom_noScript(tag));
};
var $elm$core$Basics$not = _Basics_not;
var $elm$html$Html$p = _VirtualDom_node('p');
var $elm$core$Bitwise$and = _Bitwise_and;
var $mdgriffith$elm_ui$Internal$Flag$present = F2(
	function (myFlag, _v0) {
		var fieldOne = _v0.a;
		var fieldTwo = _v0.b;
		if (!myFlag.$) {
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
				if (children.$ === 1) {
					var keyed = children.a;
					return A3(
						$elm$virtual_dom$VirtualDom$keyedNode,
						nodeName,
						attrs,
						function () {
							switch (embedMode.$) {
								case 0:
									return keyed;
								case 2:
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
								case 0:
									return unkeyed;
								case 2:
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
				case 0:
					return A2(createNode, 'div', attributes);
				case 1:
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
										$elm$html$Html$Attributes$class($mdgriffith$elm_ui$Internal$Style$classes.g$ + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.i2))
									]))
							]));
			}
		}();
		switch (parentContext) {
			case 0:
				return (A2($mdgriffith$elm_ui$Internal$Flag$present, $mdgriffith$elm_ui$Internal$Flag$widthFill, has) && (!A2($mdgriffith$elm_ui$Internal$Flag$present, $mdgriffith$elm_ui$Internal$Flag$widthBetween, has))) ? html : (A2($mdgriffith$elm_ui$Internal$Flag$present, $mdgriffith$elm_ui$Internal$Flag$alignRight, has) ? A2(
					$elm$html$Html$u,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class(
							A2(
								$elm$core$String$join,
								' ',
								_List_fromArray(
									[$mdgriffith$elm_ui$Internal$Style$classes.g$, $mdgriffith$elm_ui$Internal$Style$classes.i2, $mdgriffith$elm_ui$Internal$Style$classes.cP, $mdgriffith$elm_ui$Internal$Style$classes.a6, $mdgriffith$elm_ui$Internal$Style$classes.gY])))
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
									[$mdgriffith$elm_ui$Internal$Style$classes.g$, $mdgriffith$elm_ui$Internal$Style$classes.i2, $mdgriffith$elm_ui$Internal$Style$classes.cP, $mdgriffith$elm_ui$Internal$Style$classes.a6, $mdgriffith$elm_ui$Internal$Style$classes.gW])))
						]),
					_List_fromArray(
						[html])) : html));
			case 1:
				return (A2($mdgriffith$elm_ui$Internal$Flag$present, $mdgriffith$elm_ui$Internal$Flag$heightFill, has) && (!A2($mdgriffith$elm_ui$Internal$Flag$present, $mdgriffith$elm_ui$Internal$Flag$heightBetween, has))) ? html : (A2($mdgriffith$elm_ui$Internal$Flag$present, $mdgriffith$elm_ui$Internal$Flag$centerY, has) ? A2(
					$elm$html$Html$s,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class(
							A2(
								$elm$core$String$join,
								' ',
								_List_fromArray(
									[$mdgriffith$elm_ui$Internal$Style$classes.g$, $mdgriffith$elm_ui$Internal$Style$classes.i2, $mdgriffith$elm_ui$Internal$Style$classes.cP, $mdgriffith$elm_ui$Internal$Style$classes.gX])))
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
									[$mdgriffith$elm_ui$Internal$Style$classes.g$, $mdgriffith$elm_ui$Internal$Style$classes.i2, $mdgriffith$elm_ui$Internal$Style$classes.cP, $mdgriffith$elm_ui$Internal$Style$classes.gV])))
						]),
					_List_fromArray(
						[html])) : html));
			default:
				return html;
		}
	});
var $elm$html$Html$text = $elm$virtual_dom$VirtualDom$text;
var $mdgriffith$elm_ui$Internal$Model$textElementClasses = $mdgriffith$elm_ui$Internal$Style$classes.g$ + (' ' + ($mdgriffith$elm_ui$Internal$Style$classes.jf + (' ' + ($mdgriffith$elm_ui$Internal$Style$classes.eC + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.dP)))));
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
var $mdgriffith$elm_ui$Internal$Model$textElementFillClasses = $mdgriffith$elm_ui$Internal$Style$classes.g$ + (' ' + ($mdgriffith$elm_ui$Internal$Style$classes.jf + (' ' + ($mdgriffith$elm_ui$Internal$Style$classes.eD + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.dQ)))));
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
					case 0:
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
					case 1:
						var styled = child.a;
						return _Utils_eq(context, $mdgriffith$elm_ui$Internal$Model$asParagraph) ? _Utils_Tuple2(
							A2(
								$elm$core$List$cons,
								_Utils_Tuple2(
									key,
									A2(styled.fd, $mdgriffith$elm_ui$Internal$Model$NoStyleSheet, context)),
								htmls),
							$elm$core$List$isEmpty(existingStyles) ? styled.ja : _Utils_ap(styled.ja, existingStyles)) : _Utils_Tuple2(
							A2(
								$elm$core$List$cons,
								_Utils_Tuple2(
									key,
									A2(styled.fd, $mdgriffith$elm_ui$Internal$Model$NoStyleSheet, context)),
								htmls),
							$elm$core$List$isEmpty(existingStyles) ? styled.ja : _Utils_ap(styled.ja, existingStyles));
					case 2:
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
					case 0:
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
					case 1:
						var styled = child.a;
						return _Utils_eq(context, $mdgriffith$elm_ui$Internal$Model$asParagraph) ? _Utils_Tuple2(
							A2(
								$elm$core$List$cons,
								A2(styled.fd, $mdgriffith$elm_ui$Internal$Model$NoStyleSheet, context),
								htmls),
							$elm$core$List$isEmpty(existingStyles) ? styled.ja : _Utils_ap(styled.ja, existingStyles)) : _Utils_Tuple2(
							A2(
								$elm$core$List$cons,
								A2(styled.fd, $mdgriffith$elm_ui$Internal$Model$NoStyleSheet, context),
								htmls),
							$elm$core$List$isEmpty(existingStyles) ? styled.ja : _Utils_ap(styled.ja, existingStyles));
					case 2:
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
		if (children.$ === 1) {
			var keyedChildren = children.a;
			var _v1 = A3(
				$elm$core$List$foldr,
				gatherKeyed,
				_Utils_Tuple2(_List_Nil, _List_Nil),
				keyedChildren);
			var keyed = _v1.a;
			var styles = _v1.b;
			var newStyles = $elm$core$List$isEmpty(styles) ? rendered.ja : _Utils_ap(rendered.ja, styles);
			if (!newStyles.b) {
				return $mdgriffith$elm_ui$Internal$Model$Unstyled(
					A5(
						$mdgriffith$elm_ui$Internal$Model$finalizeNode,
						rendered.bs,
						rendered.bv,
						rendered.bk,
						$mdgriffith$elm_ui$Internal$Model$Keyed(
							A3($mdgriffith$elm_ui$Internal$Model$addKeyedChildren, 'nearby-element-pls', keyed, rendered.bn)),
						$mdgriffith$elm_ui$Internal$Model$NoStyleSheet));
			} else {
				var allStyles = newStyles;
				return $mdgriffith$elm_ui$Internal$Model$Styled(
					{
						fd: A4(
							$mdgriffith$elm_ui$Internal$Model$finalizeNode,
							rendered.bs,
							rendered.bv,
							rendered.bk,
							$mdgriffith$elm_ui$Internal$Model$Keyed(
								A3($mdgriffith$elm_ui$Internal$Model$addKeyedChildren, 'nearby-element-pls', keyed, rendered.bn))),
						ja: allStyles
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
			var newStyles = $elm$core$List$isEmpty(styles) ? rendered.ja : _Utils_ap(rendered.ja, styles);
			if (!newStyles.b) {
				return $mdgriffith$elm_ui$Internal$Model$Unstyled(
					A5(
						$mdgriffith$elm_ui$Internal$Model$finalizeNode,
						rendered.bs,
						rendered.bv,
						rendered.bk,
						$mdgriffith$elm_ui$Internal$Model$Unkeyed(
							A2($mdgriffith$elm_ui$Internal$Model$addChildren, unkeyed, rendered.bn)),
						$mdgriffith$elm_ui$Internal$Model$NoStyleSheet));
			} else {
				var allStyles = newStyles;
				return $mdgriffith$elm_ui$Internal$Model$Styled(
					{
						fd: A4(
							$mdgriffith$elm_ui$Internal$Model$finalizeNode,
							rendered.bs,
							rendered.bv,
							rendered.bk,
							$mdgriffith$elm_ui$Internal$Model$Unkeyed(
								A2($mdgriffith$elm_ui$Internal$Model$addChildren, unkeyed, rendered.bn))),
						ja: allStyles
					});
			}
		}
	});
var $mdgriffith$elm_ui$Internal$Model$Single = F3(
	function (a, b, c) {
		return {$: 3, a: a, b: b, c: c};
	});
var $mdgriffith$elm_ui$Internal$Model$Transform = function (a) {
	return {$: 10, a: a};
};
var $mdgriffith$elm_ui$Internal$Flag$Field = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var $elm$core$Bitwise$or = _Bitwise_or;
var $mdgriffith$elm_ui$Internal$Flag$add = F2(
	function (myFlag, _v0) {
		var one = _v0.a;
		var two = _v0.b;
		if (!myFlag.$) {
			var first = myFlag.a;
			return A2($mdgriffith$elm_ui$Internal$Flag$Field, first | one, two);
		} else {
			var second = myFlag.a;
			return A2($mdgriffith$elm_ui$Internal$Flag$Field, one, second | two);
		}
	});
var $mdgriffith$elm_ui$Internal$Model$ChildrenBehind = function (a) {
	return {$: 1, a: a};
};
var $mdgriffith$elm_ui$Internal$Model$ChildrenBehindAndInFront = F2(
	function (a, b) {
		return {$: 3, a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Model$ChildrenInFront = function (a) {
	return {$: 2, a: a};
};
var $mdgriffith$elm_ui$Internal$Model$nearbyElement = F2(
	function (location, elem) {
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class(
					function () {
						switch (location) {
							case 0:
								return A2(
									$elm$core$String$join,
									' ',
									_List_fromArray(
										[$mdgriffith$elm_ui$Internal$Style$classes.bU, $mdgriffith$elm_ui$Internal$Style$classes.i2, $mdgriffith$elm_ui$Internal$Style$classes.gQ]));
							case 1:
								return A2(
									$elm$core$String$join,
									' ',
									_List_fromArray(
										[$mdgriffith$elm_ui$Internal$Style$classes.bU, $mdgriffith$elm_ui$Internal$Style$classes.i2, $mdgriffith$elm_ui$Internal$Style$classes.g6]));
							case 2:
								return A2(
									$elm$core$String$join,
									' ',
									_List_fromArray(
										[$mdgriffith$elm_ui$Internal$Style$classes.bU, $mdgriffith$elm_ui$Internal$Style$classes.i2, $mdgriffith$elm_ui$Internal$Style$classes.iE]));
							case 3:
								return A2(
									$elm$core$String$join,
									' ',
									_List_fromArray(
										[$mdgriffith$elm_ui$Internal$Style$classes.bU, $mdgriffith$elm_ui$Internal$Style$classes.i2, $mdgriffith$elm_ui$Internal$Style$classes.iC]));
							case 4:
								return A2(
									$elm$core$String$join,
									' ',
									_List_fromArray(
										[$mdgriffith$elm_ui$Internal$Style$classes.bU, $mdgriffith$elm_ui$Internal$Style$classes.i2, $mdgriffith$elm_ui$Internal$Style$classes.h7]));
							default:
								return A2(
									$elm$core$String$join,
									' ',
									_List_fromArray(
										[$mdgriffith$elm_ui$Internal$Style$classes.bU, $mdgriffith$elm_ui$Internal$Style$classes.i2, $mdgriffith$elm_ui$Internal$Style$classes.g5]));
						}
					}())
				]),
			_List_fromArray(
				[
					function () {
					switch (elem.$) {
						case 3:
							return $elm$virtual_dom$VirtualDom$text('');
						case 2:
							var str = elem.a;
							return $mdgriffith$elm_ui$Internal$Model$textElement(str);
						case 0:
							var html = elem.a;
							return html($mdgriffith$elm_ui$Internal$Model$asEl);
						default:
							var styled = elem.a;
							return A2(styled.fd, $mdgriffith$elm_ui$Internal$Model$NoStyleSheet, $mdgriffith$elm_ui$Internal$Model$asEl);
					}
				}()
				]));
	});
var $mdgriffith$elm_ui$Internal$Model$addNearbyElement = F3(
	function (location, elem, existing) {
		var nearby = A2($mdgriffith$elm_ui$Internal$Model$nearbyElement, location, elem);
		switch (existing.$) {
			case 0:
				if (location === 5) {
					return $mdgriffith$elm_ui$Internal$Model$ChildrenBehind(
						_List_fromArray(
							[nearby]));
				} else {
					return $mdgriffith$elm_ui$Internal$Model$ChildrenInFront(
						_List_fromArray(
							[nearby]));
				}
			case 1:
				var existingBehind = existing.a;
				if (location === 5) {
					return $mdgriffith$elm_ui$Internal$Model$ChildrenBehind(
						A2($elm$core$List$cons, nearby, existingBehind));
				} else {
					return A2(
						$mdgriffith$elm_ui$Internal$Model$ChildrenBehindAndInFront,
						existingBehind,
						_List_fromArray(
							[nearby]));
				}
			case 2:
				var existingInFront = existing.a;
				if (location === 5) {
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
				if (location === 5) {
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
		return {$: 2, a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Model$NodeName = function (a) {
	return {$: 1, a: a};
};
var $mdgriffith$elm_ui$Internal$Model$addNodeName = F2(
	function (newNode, old) {
		switch (old.$) {
			case 0:
				return $mdgriffith$elm_ui$Internal$Model$NodeName(newNode);
			case 1:
				var name = old.a;
				return A2($mdgriffith$elm_ui$Internal$Model$Embedded, name, newNode);
			default:
				var x = old.a;
				var y = old.b;
				return A2($mdgriffith$elm_ui$Internal$Model$Embedded, x, y);
		}
	});
var $mdgriffith$elm_ui$Internal$Model$alignXName = function (align) {
	switch (align) {
		case 0:
			return $mdgriffith$elm_ui$Internal$Style$classes.dy + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.eM);
		case 2:
			return $mdgriffith$elm_ui$Internal$Style$classes.dy + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.eN);
		default:
			return $mdgriffith$elm_ui$Internal$Style$classes.dy + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.gT);
	}
};
var $mdgriffith$elm_ui$Internal$Model$alignYName = function (align) {
	switch (align) {
		case 0:
			return $mdgriffith$elm_ui$Internal$Style$classes.dz + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.gZ);
		case 2:
			return $mdgriffith$elm_ui$Internal$Style$classes.dz + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.gS);
		default:
			return $mdgriffith$elm_ui$Internal$Style$classes.dz + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.gU);
	}
};
var $elm$virtual_dom$VirtualDom$attribute = F2(
	function (key, value) {
		return A2(
			_VirtualDom_attribute,
			_VirtualDom_noOnOrFormAction(key),
			_VirtualDom_noJavaScriptOrHtmlUri(value));
	});
var $mdgriffith$elm_ui$Internal$Model$FullTransform = F4(
	function (a, b, c, d) {
		return {$: 2, a: a, b: b, c: c, d: d};
	});
var $mdgriffith$elm_ui$Internal$Model$Moved = function (a) {
	return {$: 1, a: a};
};
var $mdgriffith$elm_ui$Internal$Model$composeTransformation = F2(
	function (transform, component) {
		switch (transform.$) {
			case 0:
				switch (component.$) {
					case 0:
						var x = component.a;
						return $mdgriffith$elm_ui$Internal$Model$Moved(
							_Utils_Tuple3(x, 0, 0));
					case 1:
						var y = component.a;
						return $mdgriffith$elm_ui$Internal$Model$Moved(
							_Utils_Tuple3(0, y, 0));
					case 2:
						var z = component.a;
						return $mdgriffith$elm_ui$Internal$Model$Moved(
							_Utils_Tuple3(0, 0, z));
					case 3:
						var xyz = component.a;
						return $mdgriffith$elm_ui$Internal$Model$Moved(xyz);
					case 4:
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
			case 1:
				var moved = transform.a;
				var x = moved.a;
				var y = moved.b;
				var z = moved.c;
				switch (component.$) {
					case 0:
						var newX = component.a;
						return $mdgriffith$elm_ui$Internal$Model$Moved(
							_Utils_Tuple3(newX, y, z));
					case 1:
						var newY = component.a;
						return $mdgriffith$elm_ui$Internal$Model$Moved(
							_Utils_Tuple3(x, newY, z));
					case 2:
						var newZ = component.a;
						return $mdgriffith$elm_ui$Internal$Model$Moved(
							_Utils_Tuple3(x, y, newZ));
					case 3:
						var xyz = component.a;
						return $mdgriffith$elm_ui$Internal$Model$Moved(xyz);
					case 4:
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
					case 0:
						var newX = component.a;
						return A4(
							$mdgriffith$elm_ui$Internal$Model$FullTransform,
							_Utils_Tuple3(newX, y, z),
							scaled,
							origin,
							angle);
					case 1:
						var newY = component.a;
						return A4(
							$mdgriffith$elm_ui$Internal$Model$FullTransform,
							_Utils_Tuple3(x, newY, z),
							scaled,
							origin,
							angle);
					case 2:
						var newZ = component.a;
						return A4(
							$mdgriffith$elm_ui$Internal$Model$FullTransform,
							_Utils_Tuple3(x, y, newZ),
							scaled,
							origin,
							angle);
					case 3:
						var newMove = component.a;
						return A4($mdgriffith$elm_ui$Internal$Model$FullTransform, newMove, scaled, origin, angle);
					case 4:
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
		case 0:
			var px = h.a;
			var val = $elm$core$String$fromInt(px);
			var name = 'height-px-' + val;
			return _Utils_Tuple3(
				$mdgriffith$elm_ui$Internal$Flag$none,
				$mdgriffith$elm_ui$Internal$Style$classes.fa + (' ' + name),
				_List_fromArray(
					[
						A3($mdgriffith$elm_ui$Internal$Model$Single, name, 'height', val + 'px')
					]));
		case 1:
			return _Utils_Tuple3(
				A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$heightContent, $mdgriffith$elm_ui$Internal$Flag$none),
				$mdgriffith$elm_ui$Internal$Style$classes.dP,
				_List_Nil);
		case 2:
			var portion = h.a;
			return (portion === 1) ? _Utils_Tuple3(
				A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$heightFill, $mdgriffith$elm_ui$Internal$Flag$none),
				$mdgriffith$elm_ui$Internal$Style$classes.dQ,
				_List_Nil) : _Utils_Tuple3(
				A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$heightFill, $mdgriffith$elm_ui$Internal$Flag$none),
				$mdgriffith$elm_ui$Internal$Style$classes.fb + (' height-fill-' + $elm$core$String$fromInt(portion)),
				_List_fromArray(
					[
						A3(
						$mdgriffith$elm_ui$Internal$Model$Single,
						$mdgriffith$elm_ui$Internal$Style$classes.g$ + ('.' + ($mdgriffith$elm_ui$Internal$Style$classes.aH + (' > ' + $mdgriffith$elm_ui$Internal$Style$dot(
							'height-fill-' + $elm$core$String$fromInt(portion))))),
						'flex-grow',
						$elm$core$String$fromInt(portion * 100000))
					]));
		case 3:
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
		case 0:
			var px = w.a;
			return _Utils_Tuple3(
				$mdgriffith$elm_ui$Internal$Flag$none,
				$mdgriffith$elm_ui$Internal$Style$classes.gN + (' width-px-' + $elm$core$String$fromInt(px)),
				_List_fromArray(
					[
						A3(
						$mdgriffith$elm_ui$Internal$Model$Single,
						'width-px-' + $elm$core$String$fromInt(px),
						'width',
						$elm$core$String$fromInt(px) + 'px')
					]));
		case 1:
			return _Utils_Tuple3(
				A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$widthContent, $mdgriffith$elm_ui$Internal$Flag$none),
				$mdgriffith$elm_ui$Internal$Style$classes.eC,
				_List_Nil);
		case 2:
			var portion = w.a;
			return (portion === 1) ? _Utils_Tuple3(
				A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$widthFill, $mdgriffith$elm_ui$Internal$Flag$none),
				$mdgriffith$elm_ui$Internal$Style$classes.eD,
				_List_Nil) : _Utils_Tuple3(
				A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$widthFill, $mdgriffith$elm_ui$Internal$Flag$none),
				$mdgriffith$elm_ui$Internal$Style$classes.gO + (' width-fill-' + $elm$core$String$fromInt(portion)),
				_List_fromArray(
					[
						A3(
						$mdgriffith$elm_ui$Internal$Model$Single,
						$mdgriffith$elm_ui$Internal$Style$classes.g$ + ('.' + ($mdgriffith$elm_ui$Internal$Style$classes.aM + (' > ' + $mdgriffith$elm_ui$Internal$Style$dot(
							'width-fill-' + $elm$core$String$fromInt(portion))))),
						'flex-grow',
						$elm$core$String$fromInt(portion * 100000))
					]));
		case 3:
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
			if (style.$ === 3) {
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
				case 2:
					var i = style.a;
					return (i >= 8) && (i <= 32);
				case 7:
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
				if (_v1.$ === 1) {
					return {
						bk: A2(
							$elm$core$List$cons,
							$elm$html$Html$Attributes$class(classes),
							attrs),
						bn: children,
						bs: has,
						bv: node,
						ja: styles
					};
				} else {
					var _class = _v1.a;
					return {
						bk: A2(
							$elm$core$List$cons,
							$elm$html$Html$Attributes$class(classes + (' ' + _class)),
							attrs),
						bn: children,
						bs: has,
						bv: node,
						ja: A2(
							$elm$core$List$cons,
							$mdgriffith$elm_ui$Internal$Model$Transform(transform),
							styles)
					};
				}
			} else {
				var attribute = elementAttrs.a;
				var remaining = elementAttrs.b;
				switch (attribute.$) {
					case 0:
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
					case 3:
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
					case 1:
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
					case 4:
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
					case 10:
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
					case 7:
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
								case 0:
									var px = width.a;
									var $temp$classes = ($mdgriffith$elm_ui$Internal$Style$classes.gN + (' width-px-' + $elm$core$String$fromInt(px))) + (' ' + classes),
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
								case 1:
									var $temp$classes = classes + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.eC),
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
								case 2:
									var portion = width.a;
									if (portion === 1) {
										var $temp$classes = classes + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.eD),
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
										var $temp$classes = classes + (' ' + ($mdgriffith$elm_ui$Internal$Style$classes.gO + (' width-fill-' + $elm$core$String$fromInt(portion)))),
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
												$mdgriffith$elm_ui$Internal$Style$classes.g$ + ('.' + ($mdgriffith$elm_ui$Internal$Style$classes.aM + (' > ' + $mdgriffith$elm_ui$Internal$Style$dot(
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
					case 8:
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
								case 0:
									var px = height.a;
									var val = $elm$core$String$fromInt(px) + 'px';
									var name = 'height-px-' + val;
									var $temp$classes = $mdgriffith$elm_ui$Internal$Style$classes.fa + (' ' + (name + (' ' + classes))),
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
								case 1:
									var $temp$classes = $mdgriffith$elm_ui$Internal$Style$classes.dP + (' ' + classes),
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
								case 2:
									var portion = height.a;
									if (portion === 1) {
										var $temp$classes = $mdgriffith$elm_ui$Internal$Style$classes.dQ + (' ' + classes),
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
										var $temp$classes = classes + (' ' + ($mdgriffith$elm_ui$Internal$Style$classes.fb + (' height-fill-' + $elm$core$String$fromInt(portion)))),
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
												$mdgriffith$elm_ui$Internal$Style$classes.g$ + ('.' + ($mdgriffith$elm_ui$Internal$Style$classes.aH + (' > ' + $mdgriffith$elm_ui$Internal$Style$dot(
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
					case 2:
						var description = attribute.a;
						switch (description.$) {
							case 0:
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
							case 1:
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
							case 2:
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
							case 3:
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
							case 4:
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
							case 9:
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
							case 8:
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
							case 5:
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
							case 6:
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
					case 9:
						var location = attribute.a;
						var elem = attribute.b;
						var newStyles = function () {
							switch (elem.$) {
								case 3:
									return styles;
								case 2:
									var str = elem.a;
									return styles;
								case 0:
									var html = elem.a;
									return styles;
								default:
									var styled = elem.a;
									return _Utils_ap(styles, styled.ja);
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
					case 6:
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
								switch (x) {
									case 1:
										return A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$centerX, flags);
									case 2:
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
								switch (y) {
									case 1:
										return A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$centerY, flags);
									case 2:
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
var $mdgriffith$elm_ui$Internal$Model$Untransformed = {$: 0};
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
var $mdgriffith$elm_ui$Internal$Model$AllowHover = 1;
var $mdgriffith$elm_ui$Internal$Model$Layout = 0;
var $mdgriffith$elm_ui$Internal$Model$Rgba = F4(
	function (a, b, c, d) {
		return {$: 0, a: a, b: b, c: c, d: d};
	});
var $mdgriffith$elm_ui$Internal$Model$focusDefaultStyle = {
	g3: $elm$core$Maybe$Nothing,
	g9: $elm$core$Maybe$Nothing,
	i$: $elm$core$Maybe$Just(
		{
			eQ: 0,
			cN: A4($mdgriffith$elm_ui$Internal$Model$Rgba, 155 / 255, 203 / 255, 1, 1),
			b: _Utils_Tuple2(0, 0),
			gv: 3
		})
};
var $mdgriffith$elm_ui$Internal$Model$optionsToRecord = function (options) {
	var combine = F2(
		function (opt, record) {
			switch (opt.$) {
				case 0:
					var hoverable = opt.a;
					var _v4 = record.h3;
					if (_v4.$ === 1) {
						return _Utils_update(
							record,
							{
								h3: $elm$core$Maybe$Just(hoverable)
							});
					} else {
						return record;
					}
				case 1:
					var focusStyle = opt.a;
					var _v5 = record.hV;
					if (_v5.$ === 1) {
						return _Utils_update(
							record,
							{
								hV: $elm$core$Maybe$Just(focusStyle)
							});
					} else {
						return record;
					}
				default:
					var renderMode = opt.a;
					var _v6 = record.fW;
					if (_v6.$ === 1) {
						return _Utils_update(
							record,
							{
								fW: $elm$core$Maybe$Just(renderMode)
							});
					} else {
						return record;
					}
			}
		});
	var andFinally = function (record) {
		return {
			hV: function () {
				var _v0 = record.hV;
				if (_v0.$ === 1) {
					return $mdgriffith$elm_ui$Internal$Model$focusDefaultStyle;
				} else {
					var focusable = _v0.a;
					return focusable;
				}
			}(),
			h3: function () {
				var _v1 = record.h3;
				if (_v1.$ === 1) {
					return 1;
				} else {
					var hoverable = _v1.a;
					return hoverable;
				}
			}(),
			fW: function () {
				var _v2 = record.fW;
				if (_v2.$ === 1) {
					return 0;
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
			{hV: $elm$core$Maybe$Nothing, h3: $elm$core$Maybe$Nothing, fW: $elm$core$Maybe$Nothing},
			options));
};
var $mdgriffith$elm_ui$Internal$Model$toHtml = F2(
	function (mode, el) {
		switch (el.$) {
			case 0:
				var html = el.a;
				return html($mdgriffith$elm_ui$Internal$Model$asEl);
			case 1:
				var styles = el.a.ja;
				var html = el.a.fd;
				return A2(
					html,
					mode(styles),
					$mdgriffith$elm_ui$Internal$Model$asEl);
			case 2:
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
			var _v0 = options.fW;
			if (_v0 === 1) {
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
		return {$: 4, a: a, b: b, c: c};
	});
var $mdgriffith$elm_ui$Internal$Model$FontSize = function (a) {
	return {$: 2, a: a};
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
		var options = _v0.f6;
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
							[$mdgriffith$elm_ui$Internal$Style$classes.iU, $mdgriffith$elm_ui$Internal$Style$classes.g$, $mdgriffith$elm_ui$Internal$Style$classes.i2]))),
				_Utils_ap($mdgriffith$elm_ui$Internal$Model$rootStyle, attrs)),
			child);
	});
var $mdgriffith$elm_ui$Element$layout = $mdgriffith$elm_ui$Element$layoutWith(
	{f6: _List_Nil});
var $author$project$Main$ChangeConvergenceThreshold = function (a) {
	return {$: 2, a: a};
};
var $author$project$Main$ChangeCropBottom = function (a) {
	return {$: 8, a: a};
};
var $author$project$Main$ChangeCropLeft = function (a) {
	return {$: 5, a: a};
};
var $author$project$Main$ChangeCropRight = function (a) {
	return {$: 7, a: a};
};
var $author$project$Main$ChangeCropTop = function (a) {
	return {$: 6, a: a};
};
var $author$project$Main$ChangeMaxIter = function (a) {
	return {$: 0, a: a};
};
var $author$project$Main$ChangeMaxVerbosity = function (a) {
	return {$: 1, a: a};
};
var $author$project$Main$ChangeZMean = function (a) {
	return {$: 3, a: a};
};
var $author$project$Main$GoToPageHMap = 3;
var $author$project$Main$GoToPageNMap = 2;
var $author$project$Main$ParamsInfoMsg = function (a) {
	return {$: 12, a: a};
};
var $author$project$Main$ParamsMsg = function (a) {
	return {$: 11, a: a};
};
var $author$project$Main$ToggleCrop = function (a) {
	return {$: 4, a: a};
};
var $author$project$Main$ToggleInfoConvergenceThreshold = function (a) {
	return {$: 4, a: a};
};
var $author$project$Main$ToggleInfoCrop = function (a) {
	return {$: 0, a: a};
};
var $author$project$Main$ToggleInfoMaxIterations = function (a) {
	return {$: 1, a: a};
};
var $author$project$Main$ToggleInfoMaxVerbosity = function (a) {
	return {$: 2, a: a};
};
var $author$project$Main$ToggleInfoZMean = function (a) {
	return {$: 3, a: a};
};
var $mdgriffith$elm_ui$Internal$Model$Above = 0;
var $mdgriffith$elm_ui$Internal$Model$Nearby = F2(
	function (a, b) {
		return {$: 9, a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Model$NoAttribute = {$: 0};
var $mdgriffith$elm_ui$Element$createNearby = F2(
	function (loc, element) {
		if (element.$ === 3) {
			return $mdgriffith$elm_ui$Internal$Model$NoAttribute;
		} else {
			return A2($mdgriffith$elm_ui$Internal$Model$Nearby, loc, element);
		}
	});
var $mdgriffith$elm_ui$Element$above = function (element) {
	return A2($mdgriffith$elm_ui$Element$createNearby, 0, element);
};
var $mdgriffith$elm_ui$Internal$Model$Below = 1;
var $mdgriffith$elm_ui$Element$below = function (element) {
	return A2($mdgriffith$elm_ui$Element$createNearby, 1, element);
};
var $mdgriffith$elm_ui$Internal$Model$AlignX = function (a) {
	return {$: 6, a: a};
};
var $mdgriffith$elm_ui$Internal$Model$CenterX = 1;
var $mdgriffith$elm_ui$Element$centerX = $mdgriffith$elm_ui$Internal$Model$AlignX(1);
var $mdgriffith$elm_ui$Internal$Model$AlignY = function (a) {
	return {$: 5, a: a};
};
var $mdgriffith$elm_ui$Internal$Model$CenterY = 1;
var $mdgriffith$elm_ui$Element$centerY = $mdgriffith$elm_ui$Internal$Model$AlignY(1);
var $mdgriffith$elm_ui$Element$rgb255 = F3(
	function (red, green, blue) {
		return A4($mdgriffith$elm_ui$Internal$Model$Rgba, red / 255, green / 255, blue / 255, 1);
	});
var $author$project$Style$black = A3($mdgriffith$elm_ui$Element$rgb255, 0, 0, 0);
var $mdgriffith$elm_ui$Internal$Flag$fontAlignment = $mdgriffith$elm_ui$Internal$Flag$flag(12);
var $mdgriffith$elm_ui$Element$Font$center = A2($mdgriffith$elm_ui$Internal$Model$Class, $mdgriffith$elm_ui$Internal$Flag$fontAlignment, $mdgriffith$elm_ui$Internal$Style$classes.jg);
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
	return {$: 1, a: a};
};
var $mdgriffith$elm_ui$Element$Input$labelHidden = $mdgriffith$elm_ui$Element$Input$HiddenLabel;
var $mdgriffith$elm_ui$Internal$Model$PaddingStyle = F5(
	function (a, b, c, d, e) {
		return {$: 7, a: a, b: b, c: c, d: d, e: e};
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
	return {$: 0, a: a};
};
var $mdgriffith$elm_ui$Element$px = $mdgriffith$elm_ui$Internal$Model$Px;
var $mdgriffith$elm_ui$Element$Input$TextInputNode = function (a) {
	return {$: 0, a: a};
};
var $mdgriffith$elm_ui$Element$Input$TextArea = {$: 1};
var $mdgriffith$elm_ui$Internal$Model$Describe = function (a) {
	return {$: 2, a: a};
};
var $mdgriffith$elm_ui$Internal$Model$LivePolite = {$: 6};
var $mdgriffith$elm_ui$Element$Region$announce = $mdgriffith$elm_ui$Internal$Model$Describe($mdgriffith$elm_ui$Internal$Model$LivePolite);
var $mdgriffith$elm_ui$Internal$Model$AsColumn = 1;
var $mdgriffith$elm_ui$Internal$Model$asColumn = 1;
var $mdgriffith$elm_ui$Internal$Model$AsRow = 0;
var $mdgriffith$elm_ui$Internal$Model$asRow = 0;
var $mdgriffith$elm_ui$Element$Input$applyLabel = F3(
	function (attrs, label, input) {
		if (label.$ === 1) {
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
			switch (position) {
				case 2:
					return A4(
						$mdgriffith$elm_ui$Internal$Model$element,
						$mdgriffith$elm_ui$Internal$Model$asColumn,
						$mdgriffith$elm_ui$Internal$Model$NodeName('label'),
						A2(
							$elm$core$List$cons,
							$mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.c2),
							attrs),
						$mdgriffith$elm_ui$Internal$Model$Unkeyed(
							_List_fromArray(
								[labelElement, input])));
				case 3:
					return A4(
						$mdgriffith$elm_ui$Internal$Model$element,
						$mdgriffith$elm_ui$Internal$Model$asColumn,
						$mdgriffith$elm_ui$Internal$Model$NodeName('label'),
						A2(
							$elm$core$List$cons,
							$mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.c2),
							attrs),
						$mdgriffith$elm_ui$Internal$Model$Unkeyed(
							_List_fromArray(
								[input, labelElement])));
				case 0:
					return A4(
						$mdgriffith$elm_ui$Internal$Model$element,
						$mdgriffith$elm_ui$Internal$Model$asRow,
						$mdgriffith$elm_ui$Internal$Model$NodeName('label'),
						A2(
							$elm$core$List$cons,
							$mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.c2),
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
							$mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.c2),
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
var $mdgriffith$elm_ui$Internal$Model$Behind = 5;
var $mdgriffith$elm_ui$Element$behindContent = function (element) {
	return A2($mdgriffith$elm_ui$Element$createNearby, 5, element);
};
var $mdgriffith$elm_ui$Internal$Model$MoveY = function (a) {
	return {$: 1, a: a};
};
var $mdgriffith$elm_ui$Internal$Model$TransformComponent = F2(
	function (a, b) {
		return {$: 10, a: a, b: b};
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
			if ((attr.$ === 4) && (attr.b.$ === 5)) {
				var _v2 = attr.b;
				var x = _v2.b;
				var y = _v2.c;
				if (found.$ === 1) {
					return $elm$core$Maybe$Just(y);
				} else {
					return found;
				}
			} else {
				return found;
			}
		});
	var _v0 = A3($elm$core$List$foldr, gatherSpacing, $elm$core$Maybe$Nothing, attrs);
	if (_v0.$ === 1) {
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
	return {$: 2, a: a};
};
var $mdgriffith$elm_ui$Element$fill = $mdgriffith$elm_ui$Internal$Model$Fill(1);
var $mdgriffith$elm_ui$Internal$Model$Height = function (a) {
	return {$: 8, a: a};
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
var $mdgriffith$elm_ui$Internal$Model$Content = {$: 1};
var $mdgriffith$elm_ui$Element$shrink = $mdgriffith$elm_ui$Internal$Model$Content;
var $mdgriffith$elm_ui$Internal$Model$SpacingStyle = F3(
	function (a, b, c) {
		return {$: 5, a: a, b: b, c: c};
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
	return {$: 7, a: a};
};
var $mdgriffith$elm_ui$Element$width = $mdgriffith$elm_ui$Internal$Model$Width;
var $mdgriffith$elm_ui$Internal$Model$BorderWidth = F5(
	function (a, b, c, d, e) {
		return {$: 6, a: a, b: b, c: c, d: d, e: e};
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
	if (attr.$ === 8) {
		var h = attr.a;
		return $elm$core$Maybe$Just(h);
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $mdgriffith$elm_ui$Element$Input$hasFocusStyle = function (attr) {
	if (((attr.$ === 4) && (attr.b.$ === 11)) && (!attr.b.a)) {
		var _v1 = attr.b;
		var _v2 = _v1.a;
		return true;
	} else {
		return false;
	}
};
var $mdgriffith$elm_ui$Internal$Model$Label = function (a) {
	return {$: 5, a: a};
};
var $mdgriffith$elm_ui$Element$Input$hiddenLabelAttribute = function (label) {
	if (label.$ === 1) {
		var textLabel = label.a;
		return $mdgriffith$elm_ui$Internal$Model$Describe(
			$mdgriffith$elm_ui$Internal$Model$Label(textLabel));
	} else {
		return $mdgriffith$elm_ui$Internal$Model$NoAttribute;
	}
};
var $mdgriffith$elm_ui$Internal$Model$InFront = 4;
var $mdgriffith$elm_ui$Element$inFront = function (element) {
	return A2($mdgriffith$elm_ui$Element$createNearby, 4, element);
};
var $mdgriffith$elm_ui$Element$Input$isConstrained = function (len) {
	isConstrained:
	while (true) {
		switch (len.$) {
			case 1:
				return false;
			case 0:
				return true;
			case 2:
				return true;
			case 3:
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
	if (label.$ === 1) {
		return true;
	} else {
		return false;
	}
};
var $mdgriffith$elm_ui$Element$Input$isStacked = function (label) {
	if (!label.$) {
		var loc = label.a;
		switch (loc) {
			case 0:
				return false;
			case 1:
				return false;
			case 2:
				return true;
			default:
				return true;
		}
	} else {
		return true;
	}
};
var $mdgriffith$elm_ui$Element$Input$negateBox = function (box) {
	return {ah: -box.ah, av: -box.av, am: -box.am, aw: -box.aw};
};
var $elm$html$Html$Events$alwaysStop = function (x) {
	return _Utils_Tuple2(x, true);
};
var $elm$virtual_dom$VirtualDom$MayStopPropagation = function (a) {
	return {$: 1, a: a};
};
var $elm$virtual_dom$VirtualDom$on = _VirtualDom_on;
var $elm$html$Html$Events$stopPropagationOn = F2(
	function (event, decoder) {
		return A2(
			$elm$virtual_dom$VirtualDom$on,
			event,
			$elm$virtual_dom$VirtualDom$MayStopPropagation(decoder));
	});
var $elm$json$Json$Decode$at = F2(
	function (fields, decoder) {
		return A3($elm$core$List$foldr, $elm$json$Json$Decode$field, decoder, fields);
	});
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
var $mdgriffith$elm_ui$Internal$Model$paddingName = F4(
	function (top, right, bottom, left) {
		return 'pad-' + ($elm$core$String$fromInt(top) + ('-' + ($elm$core$String$fromInt(right) + ('-' + ($elm$core$String$fromInt(bottom) + ('-' + $elm$core$String$fromInt(left)))))));
	});
var $mdgriffith$elm_ui$Element$paddingEach = function (_v0) {
	var top = _v0.aw;
	var right = _v0.am;
	var bottom = _v0.ah;
	var left = _v0.av;
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
			case 2:
				return true;
			case 1:
				return false;
			case 0:
				return false;
			case 3:
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
			case 1:
				return false;
			case 0:
				return true;
			case 2:
				return false;
			case 3:
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
var $elm$virtual_dom$VirtualDom$style = _VirtualDom_style;
var $elm$html$Html$Attributes$style = $elm$virtual_dom$VirtualDom$style;
var $mdgriffith$elm_ui$Element$Input$redistributeOver = F4(
	function (isMultiline, stacked, attr, els) {
		switch (attr.$) {
			case 9:
				return _Utils_update(
					els,
					{
						e: A2($elm$core$List$cons, attr, els.e)
					});
			case 7:
				var width = attr.a;
				return $mdgriffith$elm_ui$Element$Input$isFill(width) ? _Utils_update(
					els,
					{
						u: A2($elm$core$List$cons, attr, els.u),
						dR: A2($elm$core$List$cons, attr, els.dR),
						e: A2($elm$core$List$cons, attr, els.e)
					}) : (stacked ? _Utils_update(
					els,
					{
						u: A2($elm$core$List$cons, attr, els.u)
					}) : _Utils_update(
					els,
					{
						e: A2($elm$core$List$cons, attr, els.e)
					}));
			case 8:
				var height = attr.a;
				return (!stacked) ? _Utils_update(
					els,
					{
						u: A2($elm$core$List$cons, attr, els.u),
						e: A2($elm$core$List$cons, attr, els.e)
					}) : ($mdgriffith$elm_ui$Element$Input$isFill(height) ? _Utils_update(
					els,
					{
						u: A2($elm$core$List$cons, attr, els.u),
						e: A2($elm$core$List$cons, attr, els.e)
					}) : ($mdgriffith$elm_ui$Element$Input$isPixel(height) ? _Utils_update(
					els,
					{
						e: A2($elm$core$List$cons, attr, els.e)
					}) : _Utils_update(
					els,
					{
						e: A2($elm$core$List$cons, attr, els.e)
					})));
			case 6:
				return _Utils_update(
					els,
					{
						u: A2($elm$core$List$cons, attr, els.u)
					});
			case 5:
				return _Utils_update(
					els,
					{
						u: A2($elm$core$List$cons, attr, els.u)
					});
			case 4:
				switch (attr.b.$) {
					case 5:
						var _v1 = attr.b;
						return _Utils_update(
							els,
							{
								u: A2($elm$core$List$cons, attr, els.u),
								dR: A2($elm$core$List$cons, attr, els.dR),
								e: A2($elm$core$List$cons, attr, els.e),
								b1: A2($elm$core$List$cons, attr, els.b1)
							});
					case 7:
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
									ao: A2($elm$core$List$cons, attr, els.ao),
									e: A2($elm$core$List$cons, attr, els.e)
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
									ao: A2($elm$core$List$cons, attr, els.ao),
									dR: A2(
										$elm$core$List$cons,
										newHeight,
										A2($elm$core$List$cons, newLineHeight, els.dR)),
									e: A2($elm$core$List$cons, reducedVerticalPadding, els.e)
								});
						}
					case 6:
						var _v3 = attr.b;
						return _Utils_update(
							els,
							{
								ao: A2($elm$core$List$cons, attr, els.ao),
								e: A2($elm$core$List$cons, attr, els.e)
							});
					case 10:
						return _Utils_update(
							els,
							{
								ao: A2($elm$core$List$cons, attr, els.ao),
								e: A2($elm$core$List$cons, attr, els.e)
							});
					case 2:
						return _Utils_update(
							els,
							{
								u: A2($elm$core$List$cons, attr, els.u)
							});
					case 1:
						var _v4 = attr.b;
						return _Utils_update(
							els,
							{
								u: A2($elm$core$List$cons, attr, els.u)
							});
					default:
						var flag = attr.a;
						var cls = attr.b;
						return _Utils_update(
							els,
							{
								e: A2($elm$core$List$cons, attr, els.e)
							});
				}
			case 0:
				return els;
			case 1:
				var a = attr.a;
				return _Utils_update(
					els,
					{
						dR: A2($elm$core$List$cons, attr, els.dR)
					});
			case 2:
				return _Utils_update(
					els,
					{
						dR: A2($elm$core$List$cons, attr, els.dR)
					});
			case 3:
				return _Utils_update(
					els,
					{
						e: A2($elm$core$List$cons, attr, els.e)
					});
			default:
				return _Utils_update(
					els,
					{
						dR: A2($elm$core$List$cons, attr, els.dR)
					});
		}
	});
var $mdgriffith$elm_ui$Element$Input$redistribute = F3(
	function (isMultiline, stacked, attrs) {
		return function (redist) {
			return {
				ao: $elm$core$List$reverse(redist.ao),
				u: $elm$core$List$reverse(redist.u),
				dR: $elm$core$List$reverse(redist.dR),
				e: $elm$core$List$reverse(redist.e),
				b1: $elm$core$List$reverse(redist.b1)
			};
		}(
			A3(
				$elm$core$List$foldl,
				A2($mdgriffith$elm_ui$Element$Input$redistributeOver, isMultiline, stacked),
				{ao: _List_Nil, u: _List_Nil, dR: _List_Nil, e: _List_Nil, b1: _List_Nil},
				attrs));
	});
var $mdgriffith$elm_ui$Element$Input$renderBox = function (_v0) {
	var top = _v0.aw;
	var right = _v0.am;
	var bottom = _v0.ah;
	var left = _v0.av;
	return $elm$core$String$fromInt(top) + ('px ' + ($elm$core$String$fromInt(right) + ('px ' + ($elm$core$String$fromInt(bottom) + ('px ' + ($elm$core$String$fromInt(left) + 'px'))))));
};
var $mdgriffith$elm_ui$Internal$Model$Transparency = F2(
	function (a, b) {
		return {$: 12, a: a, b: b};
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
							$mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.f$ + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.iL)),
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
var $mdgriffith$elm_ui$Element$scrollbarY = A2($mdgriffith$elm_ui$Internal$Model$Class, $mdgriffith$elm_ui$Internal$Flag$overflow, $mdgriffith$elm_ui$Internal$Style$classes.iZ);
var $elm$html$Html$span = _VirtualDom_node('span');
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
	return {$: 2, a: a};
};
var $mdgriffith$elm_ui$Element$text = function (content) {
	return $mdgriffith$elm_ui$Internal$Model$Text(content);
};
var $elm$html$Html$Attributes$type_ = $elm$html$Html$Attributes$stringProperty('type');
var $mdgriffith$elm_ui$Internal$Model$unstyled = A2($elm$core$Basics$composeL, $mdgriffith$elm_ui$Internal$Model$Unstyled, $elm$core$Basics$always);
var $elm$html$Html$Attributes$value = $elm$html$Html$Attributes$stringProperty('value');
var $mdgriffith$elm_ui$Element$Input$value = A2($elm$core$Basics$composeL, $mdgriffith$elm_ui$Internal$Model$Attr, $elm$html$Html$Attributes$value);
var $mdgriffith$elm_ui$Element$Input$textHelper = F3(
	function (textInput, attrs, textOptions) {
		var withDefaults = _Utils_ap($mdgriffith$elm_ui$Element$Input$defaultTextBoxStyle, attrs);
		var redistributed = A3(
			$mdgriffith$elm_ui$Element$Input$redistribute,
			_Utils_eq(textInput.ex, $mdgriffith$elm_ui$Element$Input$TextArea),
			$mdgriffith$elm_ui$Element$Input$isStacked(textOptions.im),
			withDefaults);
		var onlySpacing = function (attr) {
			if ((attr.$ === 4) && (attr.b.$ === 5)) {
				var _v9 = attr.b;
				return true;
			} else {
				return false;
			}
		};
		var heightConstrained = function () {
			var _v7 = textInput.ex;
			if (!_v7.$) {
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
			if ((attr.$ === 4) && (attr.b.$ === 7)) {
				var cls = attr.a;
				var _v6 = attr.b;
				var pad = _v6.a;
				var t = _v6.b;
				var r = _v6.c;
				var b = _v6.d;
				var l = _v6.e;
				return $elm$core$Maybe$Just(
					{
						ah: A2(
							$elm$core$Basics$max,
							0,
							$elm$core$Basics$floor(b - 3)),
						av: A2(
							$elm$core$Basics$max,
							0,
							$elm$core$Basics$floor(l - 3)),
						am: A2(
							$elm$core$Basics$max,
							0,
							$elm$core$Basics$floor(r - 3)),
						aw: A2(
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
			{ah: 0, av: 0, am: 0, aw: 0},
			$elm$core$List$head(
				$elm$core$List$reverse(
					A2($elm$core$List$filterMap, getPadding, withDefaults))));
		var inputElement = A4(
			$mdgriffith$elm_ui$Internal$Model$element,
			$mdgriffith$elm_ui$Internal$Model$asEl,
			function () {
				var _v3 = textInput.ex;
				if (!_v3.$) {
					var inputType = _v3.a;
					return $mdgriffith$elm_ui$Internal$Model$NodeName('input');
				} else {
					return $mdgriffith$elm_ui$Internal$Model$NodeName('textarea');
				}
			}(),
			_Utils_ap(
				function () {
					var _v4 = textInput.ex;
					if (!_v4.$) {
						var inputType = _v4.a;
						return _List_fromArray(
							[
								$mdgriffith$elm_ui$Internal$Model$Attr(
								$elm$html$Html$Attributes$type_(inputType)),
								$mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.ie)
							]);
					} else {
						return _List_fromArray(
							[
								$mdgriffith$elm_ui$Element$clip,
								$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$fill),
								$mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.ia),
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
							$mdgriffith$elm_ui$Element$Input$value(textOptions.jf),
							$mdgriffith$elm_ui$Internal$Model$Attr(
							$elm$html$Html$Events$onInput(textOptions.iz)),
							$mdgriffith$elm_ui$Element$Input$hiddenLabelAttribute(textOptions.im),
							$mdgriffith$elm_ui$Element$Input$spellcheck(textInput.aO),
							A2(
							$elm$core$Maybe$withDefault,
							$mdgriffith$elm_ui$Internal$Model$NoAttribute,
							A2($elm$core$Maybe$map, $mdgriffith$elm_ui$Element$Input$autofill, textInput.aG))
						]),
					redistributed.dR)),
			$mdgriffith$elm_ui$Internal$Model$Unkeyed(_List_Nil));
		var wrappedInput = function () {
			var _v0 = textInput.ex;
			if (_v0.$ === 1) {
				return A4(
					$mdgriffith$elm_ui$Internal$Model$element,
					$mdgriffith$elm_ui$Internal$Model$asEl,
					$mdgriffith$elm_ui$Internal$Model$div,
					_Utils_ap(
						(heightConstrained ? $elm$core$List$cons($mdgriffith$elm_ui$Element$scrollbarY) : $elm$core$Basics$identity)(
							_List_fromArray(
								[
									$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill),
									A2($elm$core$List$any, $mdgriffith$elm_ui$Element$Input$hasFocusStyle, withDefaults) ? $mdgriffith$elm_ui$Internal$Model$NoAttribute : $mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.e7),
									$mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.id)
								])),
						redistributed.e),
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
												$mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.ic),
												redistributed.b1)))),
								$mdgriffith$elm_ui$Internal$Model$Unkeyed(
									function () {
										if (textOptions.jf === '') {
											var _v1 = textOptions.iM;
											if (_v1.$ === 1) {
												return _List_fromArray(
													[
														$mdgriffith$elm_ui$Element$text('\u00A0')
													]);
											} else {
												var place = _v1.a;
												return _List_fromArray(
													[
														A3($mdgriffith$elm_ui$Element$Input$renderPlaceholder, place, _List_Nil, textOptions.jf === '')
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
																$elm$html$Html$Attributes$class($mdgriffith$elm_ui$Internal$Style$classes.ib)
															]),
														_List_fromArray(
															[
																$elm$html$Html$text(textOptions.jf + '\u00A0')
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
							A2($elm$core$List$any, $mdgriffith$elm_ui$Element$Input$hasFocusStyle, withDefaults) ? $mdgriffith$elm_ui$Internal$Model$NoAttribute : $mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.e7),
							$elm$core$List$concat(
								_List_fromArray(
									[
										redistributed.e,
										function () {
										var _v2 = textOptions.iM;
										if (_v2.$ === 1) {
											return _List_Nil;
										} else {
											var place = _v2.a;
											return _List_fromArray(
												[
													$mdgriffith$elm_ui$Element$behindContent(
													A3($mdgriffith$elm_ui$Element$Input$renderPlaceholder, place, redistributed.ao, textOptions.jf === ''))
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
				A2($mdgriffith$elm_ui$Internal$Model$Class, $mdgriffith$elm_ui$Internal$Flag$cursor, $mdgriffith$elm_ui$Internal$Style$classes.hw),
				A2(
					$elm$core$List$cons,
					$mdgriffith$elm_ui$Element$Input$isHiddenLabel(textOptions.im) ? $mdgriffith$elm_ui$Internal$Model$NoAttribute : $mdgriffith$elm_ui$Element$spacing(5),
					A2($elm$core$List$cons, $mdgriffith$elm_ui$Element$Region$announce, redistributed.u))),
			textOptions.im,
			wrappedInput);
	});
var $mdgriffith$elm_ui$Element$Input$text = $mdgriffith$elm_ui$Element$Input$textHelper(
	{
		aG: $elm$core$Maybe$Nothing,
		aO: false,
		ex: $mdgriffith$elm_ui$Element$Input$TextInputNode('text')
	});
var $author$project$CropForm$cropField = F3(
	function (label, msgTag, field) {
		var fontColor = function () {
			var _v0 = field.W;
			if (!_v0.$) {
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
				im: $mdgriffith$elm_ui$Element$Input$labelHidden(label),
				iz: msgTag,
				iM: $elm$core$Maybe$Nothing,
				jf: field.dR
			});
	});
var $author$project$CropForm$currentHeight = function (_v0) {
	var top = _v0.aw;
	var bottom = _v0.ah;
	var _v1 = _Utils_Tuple2(top.W, bottom.W);
	if ((!_v1.a.$) && (!_v1.b.$)) {
		var t = _v1.a.a;
		var b = _v1.b.a;
		return $elm$core$Maybe$Just(b - t);
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $author$project$CropForm$currentWidth = function (_v0) {
	var left = _v0.av;
	var right = _v0.am;
	var _v1 = _Utils_Tuple2(left.W, right.W);
	if ((!_v1.a.$) && (!_v1.b.$)) {
		var l = _v1.a.a;
		var r = _v1.b.a;
		return $elm$core$Maybe$Just(r - l);
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $mdgriffith$elm_ui$Internal$Flag$borderStyle = $mdgriffith$elm_ui$Internal$Flag$flag(11);
var $mdgriffith$elm_ui$Element$Border$dashed = A2($mdgriffith$elm_ui$Internal$Model$Class, $mdgriffith$elm_ui$Internal$Flag$borderStyle, $mdgriffith$elm_ui$Internal$Style$classes.ha);
var $mdgriffith$elm_ui$Element$moveDown = function (y) {
	return A2(
		$mdgriffith$elm_ui$Internal$Model$TransformComponent,
		$mdgriffith$elm_ui$Internal$Flag$moveY,
		$mdgriffith$elm_ui$Internal$Model$MoveY(y));
};
var $mdgriffith$elm_ui$Internal$Model$MoveX = function (a) {
	return {$: 0, a: a};
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
var $mdgriffith$elm_ui$Internal$Model$Empty = {$: 3};
var $mdgriffith$elm_ui$Element$none = $mdgriffith$elm_ui$Internal$Model$Empty;
var $author$project$Style$white = A3($mdgriffith$elm_ui$Element$rgb255, 255, 255, 255);
var $author$project$CropForm$onBorderAttributes = _List_fromArray(
	[
		$mdgriffith$elm_ui$Element$centerX,
		$mdgriffith$elm_ui$Element$centerY,
		$mdgriffith$elm_ui$Element$Background$color($author$project$Style$white)
	]);
var $mdgriffith$elm_ui$Internal$Model$OnLeft = 3;
var $mdgriffith$elm_ui$Element$onLeft = function (element) {
	return A2($mdgriffith$elm_ui$Element$createNearby, 3, element);
};
var $mdgriffith$elm_ui$Internal$Model$OnRight = 2;
var $mdgriffith$elm_ui$Element$onRight = function (element) {
	return A2($mdgriffith$elm_ui$Element$createNearby, 2, element);
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
		var active = state.aR;
		var left = state.av;
		var top = state.aw;
		var right = state.am;
		var bottom = state.ah;
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
							A3($author$project$CropForm$cropField, 'left', event.eS, left))),
						$mdgriffith$elm_ui$Element$above(
						A2(
							$mdgriffith$elm_ui$Element$el,
							A2(
								$elm$core$List$cons,
								$mdgriffith$elm_ui$Element$moveDown(12),
								$author$project$CropForm$onBorderAttributes),
							A3($author$project$CropForm$cropField, 'top', event.eU, top))),
						$mdgriffith$elm_ui$Element$onRight(
						A2(
							$mdgriffith$elm_ui$Element$el,
							A2(
								$elm$core$List$cons,
								$mdgriffith$elm_ui$Element$moveLeft(30),
								$author$project$CropForm$onBorderAttributes),
							A3($author$project$CropForm$cropField, 'right', event.eT, right))),
						$mdgriffith$elm_ui$Element$below(
						A2(
							$mdgriffith$elm_ui$Element$el,
							A2(
								$elm$core$List$cons,
								$mdgriffith$elm_ui$Element$moveUp(14),
								$author$project$CropForm$onBorderAttributes),
							A3($author$project$CropForm$cropField, 'bottom', event.eR, bottom)))
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
						if (!_v0.a.$) {
							if (!_v0.b.$) {
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
							if (!_v0.b.$) {
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
var $mdgriffith$elm_ui$Internal$Model$Left = 0;
var $mdgriffith$elm_ui$Element$alignLeft = $mdgriffith$elm_ui$Internal$Model$AlignX(0);
var $mdgriffith$elm_ui$Element$Input$enter = 'Enter';
var $elm$virtual_dom$VirtualDom$Normal = function (a) {
	return {$: 0, a: a};
};
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
var $elm$json$Json$Decode$fail = _Json_fail;
var $elm$virtual_dom$VirtualDom$MayPreventDefault = function (a) {
	return {$: 2, a: a};
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
		if (_v0.$ === 1) {
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
var $mdgriffith$elm_ui$Element$pointer = A2($mdgriffith$elm_ui$Internal$Model$Class, $mdgriffith$elm_ui$Internal$Flag$cursor, $mdgriffith$elm_ui$Internal$Style$classes.hv);
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
		var label = _v0.im;
		var icon = _v0.bQ;
		var checked = _v0.bI;
		var onChange = _v0.iz;
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
				$mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.hr + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.b5)),
				A2(
					$elm$core$List$cons,
					$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$shrink),
					A2(
						$elm$core$List$cons,
						$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$shrink),
						attrs))),
			$mdgriffith$elm_ui$Internal$Model$Unkeyed(children));
	});
var $mdgriffith$elm_ui$Internal$Model$Paragraph = {$: 9};
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
		var valueName = _v0.dt;
		switch (err.$) {
			case 0:
				return valueName + ' is not a valid number.';
			case 1:
				var bound = err.a.bH;
				var actual = err.a.bD;
				return valueName + (' = ' + ($elm$core$String$fromFloat(actual) + (' but it should be >= ' + ($elm$core$String$fromFloat(bound) + '.'))));
			default:
				var bound = err.a.bH;
				var actual = err.a.bD;
				return valueName + (' = ' + ($elm$core$String$fromFloat(actual) + (' but it should be <= ' + ($elm$core$String$fromFloat(bound) + '.'))));
		}
	});
var $author$project$Main$displayFloatErrors = function (result) {
	if (!result.$) {
		return $mdgriffith$elm_ui$Element$none;
	} else {
		var errors = result.a;
		return $author$project$Main$displayErrors(
			A2(
				$elm$core$List$map,
				$author$project$NumberInput$floatErrorToString(
					{dt: 'Value'}),
				errors));
	}
};
var $author$project$NumberInput$intErrorToString = F2(
	function (_v0, err) {
		var valueName = _v0.dt;
		switch (err.$) {
			case 0:
				return valueName + ' is not a valid integer.';
			case 1:
				var bound = err.a.bH;
				var actual = err.a.bD;
				return valueName + (' = ' + ($elm$core$String$fromInt(actual) + (' but it should be >= ' + ($elm$core$String$fromInt(bound) + '.'))));
			default:
				var bound = err.a.bH;
				var actual = err.a.bD;
				return valueName + (' = ' + ($elm$core$String$fromInt(actual) + (' but it should be <= ' + ($elm$core$String$fromInt(bound) + '.'))));
		}
	});
var $author$project$Main$displayIntErrors = function (result) {
	if (!result.$) {
		return $mdgriffith$elm_ui$Element$none;
	} else {
		var errors = result.a;
		return $author$project$Main$displayErrors(
			A2(
				$elm$core$List$map,
				$author$project$NumberInput$intErrorToString(
					{dt: 'Value'}),
				errors));
	}
};
var $author$project$CropForm$fieldError = function (result) {
	if (result.$ === 1) {
		var list = result.a;
		return list;
	} else {
		return _List_Nil;
	}
};
var $author$project$CropForm$errors = function (_v0) {
	var active = _v0.aR;
	var left = _v0.av;
	var top = _v0.aw;
	var right = _v0.am;
	var bottom = _v0.ah;
	return (!active) ? _List_Nil : $elm$core$List$concat(
		_List_fromArray(
			[
				A2(
				$elm$core$List$map,
				$author$project$NumberInput$intErrorToString(
					{dt: 'Left'}),
				$author$project$CropForm$fieldError(left.W)),
				A2(
				$elm$core$List$map,
				$author$project$NumberInput$intErrorToString(
					{dt: 'Top'}),
				$author$project$CropForm$fieldError(top.W)),
				A2(
				$elm$core$List$map,
				$author$project$NumberInput$intErrorToString(
					{dt: 'Right'}),
				$author$project$CropForm$fieldError(right.W)),
				A2(
				$elm$core$List$map,
				$author$project$NumberInput$intErrorToString(
					{dt: 'Bottom'}),
				$author$project$CropForm$fieldError(bottom.W))
			]));
};
var $mdgriffith$elm_ui$Internal$Model$Button = {$: 8};
var $elm$html$Html$Attributes$disabled = $elm$html$Html$Attributes$boolProperty('disabled');
var $mdgriffith$elm_ui$Element$Input$focusDefault = function (attrs) {
	return A2($elm$core$List$any, $mdgriffith$elm_ui$Element$Input$hasFocusStyle, attrs) ? $mdgriffith$elm_ui$Internal$Model$NoAttribute : $mdgriffith$elm_ui$Internal$Model$htmlClass('focusable');
};
var $mdgriffith$elm_ui$Element$Events$onClick = A2($elm$core$Basics$composeL, $mdgriffith$elm_ui$Internal$Model$Attr, $elm$html$Html$Events$onClick);
var $mdgriffith$elm_ui$Element$Input$button = F2(
	function (attrs, _v0) {
		var onPress = _v0._;
		var label = _v0.im;
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
						$mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.cS + (' ' + ($mdgriffith$elm_ui$Internal$Style$classes.a6 + (' ' + ($mdgriffith$elm_ui$Internal$Style$classes.i_ + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.f$)))))),
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
											if (onPress.$ === 1) {
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
				im: $mdgriffith$elm_ui$Element$text(label),
				_: maybeMsg
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
				$mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.b5 + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.a6)),
				A2(
					$elm$core$List$cons,
					$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$shrink),
					A2(
						$elm$core$List$cons,
						$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$shrink),
						attrs))),
			$mdgriffith$elm_ui$Internal$Model$Unkeyed(children));
	});
var $mdgriffith$elm_ui$Element$Border$solid = A2($mdgriffith$elm_ui$Internal$Model$Class, $mdgriffith$elm_ui$Internal$Flag$borderStyle, $mdgriffith$elm_ui$Internal$Style$classes.hc);
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
				im: $mdgriffith$elm_ui$Element$Input$labelHidden(label),
				iz: msgTag,
				iM: $elm$core$Maybe$Nothing,
				jf: field.dR
			});
		var _v0 = field.W;
		if (_v0.$ === 1) {
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
			var increased = field.c1(current);
			var incrementMsg = function () {
				var _v2 = field.da;
				if (_v2.$ === 1) {
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
			var decreased = field.cV(current);
			var decrementMsg = function () {
				var _v1 = field.db;
				if (_v1.$ === 1) {
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
var $mdgriffith$elm_ui$Internal$Model$Right = 2;
var $mdgriffith$elm_ui$Element$alignRight = $mdgriffith$elm_ui$Internal$Model$AlignX(2);
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
				im: $mdgriffith$elm_ui$Element$text(label),
				_: msg
			});
	});
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
var $author$project$Main$hMapHeaderTab = F2(
	function (msg, hMapPNG) {
		var otherAttributes = _Utils_eq(hMapPNG, $elm$core$Maybe$Nothing) ? _List_Nil : _List_fromArray(
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
		return A3($author$project$Main$headerTabWithAttributes, 'H-map', msg, otherAttributes);
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
				im: $mdgriffith$elm_ui$Element$Input$labelHidden(label),
				iz: msgTag,
				iM: $elm$core$Maybe$Nothing,
				jf: field.dR
			});
		var _v0 = field.W;
		if (_v0.$ === 1) {
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
			var increased = field.c1(current);
			var incrementMsg = function () {
				var _v2 = field.da;
				if (_v2.$ === 1) {
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
			var decreased = field.cV(current);
			var decrementMsg = function () {
				var _v1 = field.db;
				if (_v1.$ === 1) {
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
var $author$project$Main$ErrorLogs = 0;
var $author$project$Main$NoLogs = 2;
var $author$project$Main$RegularLogs = 3;
var $author$project$Main$WarningLogs = 1;
var $author$project$Main$logsStatus = function (logs) {
	var _v0 = $elm$core$List$minimum(
		A2(
			$elm$core$List$map,
			function ($) {
				return $.ba;
			},
			logs));
	if (_v0.$ === 1) {
		return 2;
	} else {
		switch (_v0.a) {
			case 0:
				return 0;
			case 1:
				return 1;
			default:
				return 3;
		}
	}
};
var $author$project$Main$logsHeaderTab = F2(
	function (msg, logs) {
		var logsState = $author$project$Main$logsStatus(logs);
		var fillColor = function () {
			switch (logsState) {
				case 0:
					return 'rgb(180,50,50)';
				case 1:
					return 'rgb(220,120,50)';
				default:
					return 'rgb(50,50,50)';
			}
		}();
		var otherAttributes = function () {
			if (logsState === 2) {
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
		return {$: 4, a: a, b: b};
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
var $author$project$Main$nMapHeaderTab = F2(
	function (msg, nMapPNG) {
		var otherAttributes = _Utils_eq(nMapPNG, $elm$core$Maybe$Nothing) ? _List_Nil : _List_fromArray(
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
		return A3($author$project$Main$headerTabWithAttributes, 'N-map', msg, otherAttributes);
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
	var _v0 = model.aE;
	switch (_v0.$) {
		case 0:
			return '';
		case 1:
			return 'Building multi-resolution pyramid';
		case 2:
			var level = _v0.a;
			return 'Nmaping at level ' + $elm$core$String$fromInt(level);
		case 3:
			var level = _v0.a;
			var iter = _v0.b;
			return 'Nmaping at level ' + ($elm$core$String$fromInt(level) + ('    iteration ' + ($elm$core$String$fromInt(iter) + (' / ' + $elm$core$String$fromInt(model.s.z)))));
		case 4:
			var img = _v0.a;
			return 'Applying warp to cropped image ' + ($elm$core$String$fromInt(img) + (' / ' + $elm$core$String$fromInt(model.bt)));
		case 5:
			var img = _v0.a;
			return 'Encoding nmaped cropped image ' + ($elm$core$String$fromInt(img) + (' / ' + $elm$core$String$fromInt(model.bt)));
		case 6:
			return '';
		default:
			var img = _v0.a;
			return 'Warping and encoding image ' + ($elm$core$String$fromInt(img) + (' / ' + $elm$core$String$fromInt(model.bt)));
	}
};
var $author$project$Main$RunAlgorithm = function (a) {
	return {$: 17, a: a};
};
var $author$project$Main$isOk = function (result) {
	if (result.$ === 1) {
		return false;
	} else {
		return true;
	}
};
var $author$project$Main$runButton = F3(
	function (content, params, paramsForm) {
		var hasNoError = $elm$core$List$isEmpty(
			$author$project$CropForm$errors(paramsForm.c)) && ($author$project$Main$isOk(paramsForm.z.W) && ($author$project$Main$isOk(paramsForm.E.W) && $author$project$Main$isOk(paramsForm.x.W)));
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
				im: $mdgriffith$elm_ui$Element$text(content),
				_: $elm$core$Maybe$Just(
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
				im: $mdgriffith$elm_ui$Element$text(content),
				_: $elm$core$Maybe$Nothing
			});
	});
var $author$project$Style$runProgressColor = A3($mdgriffith$elm_ui$Element$rgb255, 211, 199, 255);
var $author$project$Main$SaveNMapPNG = {$: 29};
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
		im: $mdgriffith$elm_ui$Element$text('Save PNG-formated normal map'),
		_: $elm$core$Maybe$Just($author$project$Main$SaveNMapPNG)
	});
var $author$project$Main$StopRunning = {$: 18};
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
		im: $mdgriffith$elm_ui$Element$text('Stop!'),
		_: $elm$core$Maybe$Just($author$project$Main$StopRunning)
	});
var $author$project$Main$runProgressBar = function (model) {
	var progressBarStopButton = (_Utils_eq(model.aE, $author$project$Main$StepNotStarted) || _Utils_eq(model.aE, $author$project$Main$StepDone)) ? $mdgriffith$elm_ui$Element$none : $author$project$Main$stopButton;
	var progressBarSaveButton = _Utils_eq(model.aE, $author$project$Main$StepDone) ? $author$project$Main$saveButton : $mdgriffith$elm_ui$Element$none;
	var progressBarRunButton = function () {
		var _v0 = model.aE;
		switch (_v0.$) {
			case 0:
				return A3($author$project$Main$runButton, 'Run ▶', model.s, model.q);
			case 6:
				return A3($author$project$Main$runButton, 'Rerun ▶', model.s, model.q);
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
var $mdgriffith$elm_ui$Element$scrollbars = A2($mdgriffith$elm_ui$Internal$Model$Class, $mdgriffith$elm_ui$Internal$Flag$overflow, $mdgriffith$elm_ui$Internal$Style$classes.iX);
var $author$project$Style$green = A3($mdgriffith$elm_ui$Element$rgb255, 39, 203, 139);
var $author$project$Main$toggleCheckboxWidget = F2(
	function (_v0, checked) {
		var offColor = _v0.f1;
		var onColor = _v0.f2;
		var sliderColor = _v0.gw;
		var toggleWidth = _v0.gF;
		var toggleHeight = _v0.gE;
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
				bI: checked,
				bQ: $author$project$Main$toggleCheckboxWidget(
					{
						f1: $author$project$Style$lightGrey,
						f2: $author$project$Style$green,
						gw: $author$project$Style$white,
						gE: $elm$core$Basics$round(toggleHeight),
						gF: 2 * $elm$core$Basics$round(toggleHeight)
					}),
				im: $mdgriffith$elm_ui$Element$Input$labelHidden(label),
				iz: msg
			});
	});
var $author$project$Main$viewConfig = function (model) {
	var params = model.s;
	var paramsForm = model.q;
	var paramsInfo = model.cm;
	var notSeenLogs = model.U;
	var nMapPNG = model.ak;
	var hMapPNG = model.aZ;
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
							$author$project$Main$NavigationMsg(0))),
						A2($author$project$Main$headerTab, 'Config', $elm$core$Maybe$Nothing),
						A2(
						$author$project$Main$nMapHeaderTab,
						$elm$core$Maybe$Just(
							$author$project$Main$NavigationMsg(2)),
						nMapPNG),
						A2(
						$author$project$Main$hMapHeaderTab,
						$elm$core$Maybe$Just(
							$author$project$Main$NavigationMsg(3)),
						hMapPNG),
						A2(
						$author$project$Main$logsHeaderTab,
						$elm$core$Maybe$Just(
							$author$project$Main$NavigationMsg(4)),
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
													bI: paramsInfo.c,
													bQ: $author$project$Main$infoIcon,
													im: $mdgriffith$elm_ui$Element$Input$labelHidden('Show detail info about cropped working frame'),
													iz: A2($elm$core$Basics$composeL, $author$project$Main$ParamsInfoMsg, $author$project$Main$ToggleInfoCrop)
												})
											])),
										A2($author$project$Main$moreInfo, paramsInfo.c, 'Instead of using the whole image to estimate the nMap, it is often faster and as accurate to focus the algorithm attention on a smaller frame in the image. The parameters here are the left, top, right and bottom coordinates of that cropped frame on which we want the algorithm to focus when estimating the alignment parameters.'),
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
												paramsForm.c.aR,
												30,
												'Toggle cropped working frame'),
												$mdgriffith$elm_ui$Element$text('on')
											])),
										A2(
										$author$project$CropForm$boxEditor,
										{
											eR: A2($elm$core$Basics$composeL, $author$project$Main$ParamsMsg, $author$project$Main$ChangeCropBottom),
											eS: A2($elm$core$Basics$composeL, $author$project$Main$ParamsMsg, $author$project$Main$ChangeCropLeft),
											eT: A2($elm$core$Basics$composeL, $author$project$Main$ParamsMsg, $author$project$Main$ChangeCropRight),
											eU: A2($elm$core$Basics$composeL, $author$project$Main$ParamsMsg, $author$project$Main$ChangeCropTop)
										},
										paramsForm.c),
										$author$project$Main$displayErrors(
										$author$project$CropForm$errors(paramsForm.c))
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
													bI: paramsInfo.z,
													bQ: $author$project$Main$infoIcon,
													im: $mdgriffith$elm_ui$Element$Input$labelHidden('Show detail info about the maximum number of iterations'),
													iz: A2($elm$core$Basics$composeL, $author$project$Main$ParamsInfoMsg, $author$project$Main$ToggleInfoMaxIterations)
												})
											])),
										A2($author$project$Main$moreInfo, paramsInfo.z, 'This is the maximum number of iterations allowed per level. If this is reached, the algorithm stops whether it converged or not.'),
										$mdgriffith$elm_ui$Element$text(
										'(default to ' + ($elm$core$String$fromInt($author$project$Main$defaultParams.z) + ')')),
										A3(
										$author$project$Main$intInput,
										paramsForm.z,
										A2($elm$core$Basics$composeL, $author$project$Main$ParamsMsg, $author$project$Main$ChangeMaxIter),
										'Maximum number of iterations'),
										$author$project$Main$displayIntErrors(paramsForm.z.W)
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
													bI: paramsInfo.x,
													bQ: $author$project$Main$infoIcon,
													im: $mdgriffith$elm_ui$Element$Input$labelHidden('Show detail info about the convergence threshold parameter'),
													iz: A2($elm$core$Basics$composeL, $author$project$Main$ParamsInfoMsg, $author$project$Main$ToggleInfoConvergenceThreshold)
												})
											])),
										A2($author$project$Main$moreInfo, paramsInfo.x, 'The algorithm stops when the relative error difference between to estimates falls below this value.'),
										$mdgriffith$elm_ui$Element$text(
										'(default to ' + ($elm$core$String$fromFloat($author$project$Main$defaultParams.x) + ')')),
										A3(
										$author$project$Main$floatInput,
										paramsForm.x,
										A2($elm$core$Basics$composeL, $author$project$Main$ParamsMsg, $author$project$Main$ChangeConvergenceThreshold),
										'Convergence threshold'),
										$author$project$Main$displayFloatErrors(paramsForm.x.W)
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
												'z-mean: (default to ' + ($elm$core$String$fromFloat($author$project$Main$defaultParams.E) + ')')),
												A2(
												$mdgriffith$elm_ui$Element$Input$checkbox,
												_List_Nil,
												{
													bI: paramsInfo.E,
													bQ: $author$project$Main$infoIcon,
													im: $mdgriffith$elm_ui$Element$Input$labelHidden('Show detail info about the z_mean parameter'),
													iz: A2($elm$core$Basics$composeL, $author$project$Main$ParamsInfoMsg, $author$project$Main$ToggleInfoZMean)
												})
											])),
										A2($author$project$Main$moreInfo, paramsInfo.E, 'Lagrangian penalty.'),
										A3(
										$author$project$Main$floatInput,
										paramsForm.E,
										A2($elm$core$Basics$composeL, $author$project$Main$ParamsMsg, $author$project$Main$ChangeZMean),
										'z_mean'),
										$author$project$Main$displayFloatErrors(paramsForm.E.W)
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
													bI: paramsInfo.O,
													bQ: $author$project$Main$infoIcon,
													im: $mdgriffith$elm_ui$Element$Input$labelHidden('Show detail info about the maximum verbosity.'),
													iz: A2($elm$core$Basics$composeL, $author$project$Main$ParamsInfoMsg, $author$project$Main$ToggleInfoMaxVerbosity)
												})
											])),
										A2($author$project$Main$moreInfo, paramsInfo.O, 'Maximum verbosity of logs that can appear in the Logs tab. Setting this higher than its default value enables a very detailed log trace at the price of performance degradations.'),
										$mdgriffith$elm_ui$Element$text(
										'(default to ' + ($elm$core$String$fromInt($author$project$Main$defaultParams.O) + ')')),
										A3(
										$author$project$Main$intInput,
										paramsForm.O,
										A2($elm$core$Basics$composeL, $author$project$Main$ParamsMsg, $author$project$Main$ChangeMaxVerbosity),
										'Maximum verbosity'),
										$author$project$Main$displayIntErrors(paramsForm.O.W)
									]))
							]))
					]))
			]));
};
var $author$project$Main$ClickNextImage = {$: 8};
var $author$project$Main$ClickPreviousImage = {$: 7};
var $author$project$Main$GoToPageConfig = 1;
var $author$project$Main$PointerDownRaw = function (a) {
	return {$: 0, a: a};
};
var $author$project$Main$PointerMove = function (a) {
	return {$: 1, a: a};
};
var $author$project$Main$PointerMsg = function (a) {
	return {$: 16, a: a};
};
var $author$project$Main$PointerUp = {$: 2};
var $author$project$Main$ZoomFit = function (a) {
	return {$: 0, a: a};
};
var $author$project$Main$ZoomIn = {$: 1};
var $author$project$Main$ZoomMsg = function (a) {
	return {$: 9, a: a};
};
var $author$project$Main$ZoomOut = {$: 2};
var $mdgriffith$elm_ui$Internal$Model$Bottom = 2;
var $mdgriffith$elm_ui$Element$alignBottom = $mdgriffith$elm_ui$Internal$Model$AlignY(2);
var $elm$svg$Svg$line = $elm$svg$Svg$trustedNode('line');
var $feathericons$elm_feather$FeatherIcons$Icon = $elm$core$Basics$identity;
var $feathericons$elm_feather$FeatherIcons$defaultAttributes = function (name) {
	return {
		dF: $elm$core$Maybe$Just('feather feather-' + name),
		gv: 24,
		cr: '',
		dq: 2,
		dv: '0 0 24 24'
	};
};
var $feathericons$elm_feather$FeatherIcons$makeBuilder = F2(
	function (name, src) {
		return {
			af: $feathericons$elm_feather$FeatherIcons$defaultAttributes(name),
			a: src
		};
	});
var $elm$svg$Svg$Attributes$points = _VirtualDom_attribute('points');
var $elm$svg$Svg$polyline = $elm$svg$Svg$trustedNode('polyline');
var $elm$svg$Svg$Attributes$x1 = _VirtualDom_attribute('x1');
var $elm$svg$Svg$Attributes$x2 = _VirtualDom_attribute('x2');
var $elm$svg$Svg$Attributes$y1 = _VirtualDom_attribute('y1');
var $elm$svg$Svg$Attributes$y2 = _VirtualDom_attribute('y2');
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
var $elm$svg$Svg$Attributes$class = _VirtualDom_attribute('class');
var $elm$virtual_dom$VirtualDom$map = _VirtualDom_map;
var $elm$svg$Svg$map = $elm$virtual_dom$VirtualDom$map;
var $elm$svg$Svg$Attributes$stroke = _VirtualDom_attribute('stroke');
var $elm$svg$Svg$Attributes$strokeLinecap = _VirtualDom_attribute('stroke-linecap');
var $elm$svg$Svg$Attributes$strokeLinejoin = _VirtualDom_attribute('stroke-linejoin');
var $elm$svg$Svg$Attributes$strokeWidth = _VirtualDom_attribute('stroke-width');
var $feathericons$elm_feather$FeatherIcons$toHtml = F2(
	function (attributes, _v0) {
		var src = _v0.a;
		var attrs = _v0.af;
		var strSize = $elm$core$String$fromFloat(attrs.gv);
		var baseAttributes = _List_fromArray(
			[
				$elm$svg$Svg$Attributes$fill('none'),
				$elm$svg$Svg$Attributes$height(
				_Utils_ap(strSize, attrs.cr)),
				$elm$svg$Svg$Attributes$width(
				_Utils_ap(strSize, attrs.cr)),
				$elm$svg$Svg$Attributes$stroke('currentColor'),
				$elm$svg$Svg$Attributes$strokeLinecap('round'),
				$elm$svg$Svg$Attributes$strokeLinejoin('round'),
				$elm$svg$Svg$Attributes$strokeWidth(
				$elm$core$String$fromFloat(attrs.dq)),
				$elm$svg$Svg$Attributes$viewBox(attrs.dv)
			]);
		var combinedAttributes = _Utils_ap(
			function () {
				var _v1 = attrs.dF;
				if (!_v1.$) {
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
		var attrs = _v0.af;
		var src = _v0.a;
		return {
			af: _Utils_update(
				attrs,
				{gv: size}),
			a: src
		};
	});
var $author$project$Icon$featherIcon = F2(
	function (icon, size) {
		return $mdgriffith$elm_ui$Element$html(
			A2(
				$feathericons$elm_feather$FeatherIcons$toHtml,
				_List_Nil,
				A2($feathericons$elm_feather$FeatherIcons$withSize, size, icon)));
	});
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
var $joakin$elm_canvas$Canvas$Internal$Canvas$DrawableClear = F3(
	function (a, b, c) {
		return {$: 3, a: a, b: b, c: c};
	});
var $joakin$elm_canvas$Canvas$Internal$Canvas$NotSpecified = {$: 0};
var $joakin$elm_canvas$Canvas$Renderable = $elm$core$Basics$identity;
var $joakin$elm_canvas$Canvas$clear = F3(
	function (point, w, h) {
		return {
			aV: _List_Nil,
			bp: $joakin$elm_canvas$Canvas$Internal$Canvas$NotSpecified,
			bq: A3($joakin$elm_canvas$Canvas$Internal$Canvas$DrawableClear, point, w, h)
		};
	});
var $elm$html$Html$Attributes$id = $elm$html$Html$Attributes$stringProperty('id');
var $joakin$elm_canvas$Canvas$Internal$Canvas$SettingCommand = function (a) {
	return {$: 0, a: a};
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
var $elm$virtual_dom$VirtualDom$Custom = function (a) {
	return {$: 3, a: a};
};
var $elm$html$Html$Events$custom = F2(
	function (event, decoder) {
		return A2(
			$elm$virtual_dom$VirtualDom$on,
			event,
			$elm$virtual_dom$VirtualDom$Custom(decoder));
	});
var $author$project$Main$msgOn = function (event) {
	return A2(
		$elm$core$Basics$composeR,
		$elm$json$Json$Decode$map(
			function (msg) {
				return {ir: msg, iQ: true, i8: true};
			}),
		$elm$html$Html$Events$custom(event));
};
var $elm$html$Html$node = $elm$virtual_dom$VirtualDom$node;
var $mpizenberg$elm_pointer_events$Html$Events$Extra$Pointer$defaultOptions = {iQ: true, i8: false};
var $mpizenberg$elm_pointer_events$Html$Events$Extra$Pointer$onWithOptions = F3(
	function (event, options, tag) {
		return A2(
			$elm$html$Html$Events$custom,
			event,
			A2(
				$elm$json$Json$Decode$map,
				function (ev) {
					return {
						ir: tag(ev),
						iQ: options.iQ,
						i8: options.i8
					};
				},
				$mpizenberg$elm_pointer_events$Html$Events$Extra$Pointer$eventDecoder));
	});
var $mpizenberg$elm_pointer_events$Html$Events$Extra$Pointer$onUp = A2($mpizenberg$elm_pointer_events$Html$Events$Extra$Pointer$onWithOptions, 'pointerup', $mpizenberg$elm_pointer_events$Html$Events$Extra$Pointer$defaultOptions);
var $mpizenberg$elm_pointer_events$Html$Events$Extra$Wheel$defaultOptions = {iQ: true, i8: false};
var $mpizenberg$elm_pointer_events$Html$Events$Extra$Wheel$Event = F3(
	function (mouseEvent, deltaY, deltaMode) {
		return {hz: deltaMode, hA: deltaY, it: mouseEvent};
	});
var $mpizenberg$elm_pointer_events$Html$Events$Extra$Wheel$DeltaLine = 1;
var $mpizenberg$elm_pointer_events$Html$Events$Extra$Wheel$DeltaPage = 2;
var $mpizenberg$elm_pointer_events$Html$Events$Extra$Wheel$DeltaPixel = 0;
var $mpizenberg$elm_pointer_events$Html$Events$Extra$Wheel$deltaModeDecoder = function () {
	var intToMode = function (_int) {
		switch (_int) {
			case 1:
				return 1;
			case 2:
				return 2;
			default:
				return 0;
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
						ir: tag(ev),
						iQ: options.iQ,
						i8: options.i8
					};
				},
				$mpizenberg$elm_pointer_events$Html$Events$Extra$Wheel$eventDecoder));
	});
var $mpizenberg$elm_pointer_events$Html$Events$Extra$Wheel$onWheel = $mpizenberg$elm_pointer_events$Html$Events$Extra$Wheel$onWithOptions($mpizenberg$elm_pointer_events$Html$Events$Extra$Wheel$defaultOptions);
var $elm$core$Tuple$pair = F2(
	function (a, b) {
		return _Utils_Tuple2(a, b);
	});
var $mdgriffith$elm_ui$Element$rgba255 = F4(
	function (red, green, blue, a) {
		return A4($mdgriffith$elm_ui$Internal$Model$Rgba, red / 255, green / 255, blue / 255, a);
	});
var $joakin$elm_canvas$Canvas$Internal$Canvas$DrawableTexture = F2(
	function (a, b) {
		return {$: 2, a: a, b: b};
	});
var $joakin$elm_canvas$Canvas$Internal$Canvas$Fill = function (a) {
	return {$: 1, a: a};
};
var $joakin$elm_canvas$Canvas$Internal$Canvas$FillAndStroke = F2(
	function (a, b) {
		return {$: 3, a: a, b: b};
	});
var $joakin$elm_canvas$Canvas$Internal$Canvas$Stroke = function (a) {
	return {$: 2, a: a};
};
var $joakin$elm_canvas$Canvas$mergeDrawOp = F2(
	function (op1, op2) {
		var _v0 = _Utils_Tuple2(op1, op2);
		_v0$7:
		while (true) {
			switch (_v0.b.$) {
				case 3:
					var _v1 = _v0.b;
					var c = _v1.a;
					var sc = _v1.b;
					return A2($joakin$elm_canvas$Canvas$Internal$Canvas$FillAndStroke, c, sc);
				case 1:
					switch (_v0.a.$) {
						case 1:
							var c = _v0.b.a;
							return $joakin$elm_canvas$Canvas$Internal$Canvas$Fill(c);
						case 2:
							var c1 = _v0.a.a;
							var c2 = _v0.b.a;
							return A2($joakin$elm_canvas$Canvas$Internal$Canvas$FillAndStroke, c2, c1);
						case 3:
							var _v2 = _v0.a;
							var c = _v2.a;
							var sc = _v2.b;
							var c2 = _v0.b.a;
							return A2($joakin$elm_canvas$Canvas$Internal$Canvas$FillAndStroke, c2, sc);
						default:
							break _v0$7;
					}
				case 2:
					switch (_v0.a.$) {
						case 2:
							var c = _v0.b.a;
							return $joakin$elm_canvas$Canvas$Internal$Canvas$Stroke(c);
						case 1:
							var c1 = _v0.a.a;
							var c2 = _v0.b.a;
							return A2($joakin$elm_canvas$Canvas$Internal$Canvas$FillAndStroke, c1, c2);
						case 3:
							var _v3 = _v0.a;
							var c = _v3.a;
							var sc = _v3.b;
							var sc2 = _v0.b.a;
							return A2($joakin$elm_canvas$Canvas$Internal$Canvas$FillAndStroke, c, sc2);
						default:
							break _v0$7;
					}
				default:
					if (!_v0.a.$) {
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
				var r = _v1;
				switch (setting.$) {
					case 0:
						var cmd = setting.a;
						return _Utils_update(
							r,
							{
								aV: A2($elm$core$List$cons, cmd, r.aV)
							});
					case 1:
						var cmds = setting.a;
						return _Utils_update(
							r,
							{
								aV: A3($elm$core$List$foldl, $elm$core$List$cons, r.aV, cmds)
							});
					case 3:
						var f = setting.a;
						return _Utils_update(
							r,
							{
								bq: f(r.bq)
							});
					default:
						var op = setting.a;
						return _Utils_update(
							r,
							{
								bp: A2($joakin$elm_canvas$Canvas$mergeDrawOp, r.bp, op)
							});
				}
			});
		return A3($elm$core$List$foldl, addSetting, renderable, settings);
	});
var $joakin$elm_canvas$Canvas$texture = F3(
	function (settings, p, t) {
		return A2(
			$joakin$elm_canvas$Canvas$addSettingsToRenderable,
			settings,
			{
				aV: _List_Nil,
				bp: $joakin$elm_canvas$Canvas$Internal$Canvas$NotSpecified,
				bq: A2($joakin$elm_canvas$Canvas$Internal$Canvas$DrawableTexture, p, t)
			});
	});
var $elm$html$Html$Attributes$title = $elm$html$Html$Attributes$stringProperty('title');
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
var $elm$html$Html$Keyed$node = $elm$virtual_dom$VirtualDom$keyedNode;
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
var $joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$circle = F3(
	function (x, y, r) {
		return A6($joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$arc, x, y, r, 0, 2 * $elm$core$Basics$pi, false);
	});
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
			case 0:
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
			case 1:
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
			case 2:
				var _v6 = segment.a;
				var x = _v6.a;
				var y = _v6.b;
				return A2(
					$elm$core$List$cons,
					A2($joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$lineTo, x, y),
					cmds);
			case 3:
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
var $joakin$elm_canvas$Canvas$renderShape = F2(
	function (shape, cmds) {
		switch (shape.$) {
			case 0:
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
			case 1:
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
			case 2:
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
var $avh4$elm_color$Color$RgbaSpace = F4(
	function (a, b, c, d) {
		return {$: 0, a: a, b: b, c: c, d: d};
	});
var $avh4$elm_color$Color$black = A4($avh4$elm_color$Color$RgbaSpace, 0 / 255, 0 / 255, 0 / 255, 1.0);
var $joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$NonZero = 0;
var $joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$fillRuleToString = function (fillRule) {
	if (!fillRule) {
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
			$joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$fill(0),
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
			case 0:
				return A2($joakin$elm_canvas$Canvas$renderShapeFill, $avh4$elm_color$Color$black, cmds);
			case 1:
				var c = drawOp.a;
				return A2($joakin$elm_canvas$Canvas$renderShapeFill, c, cmds);
			case 2:
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
		if (maybeMaxWidth.$ === 1) {
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
			A4($joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$fillText, txt.jf, x, y, txt.d2),
			A2(
				$elm$core$List$cons,
				$joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$fillStyle(color),
				cmds));
	});
var $joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$strokeText = F4(
	function (text, x, y, maybeMaxWidth) {
		if (maybeMaxWidth.$ === 1) {
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
			A4($joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$strokeText, txt.jf, x, y, txt.d2),
			A2(
				$elm$core$List$cons,
				$joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$strokeStyle(color),
				cmds));
	});
var $joakin$elm_canvas$Canvas$renderTextDrawOp = F3(
	function (drawOp, txt, cmds) {
		var _v0 = txt.gd;
		var x = _v0.a;
		var y = _v0.b;
		switch (drawOp.$) {
			case 0:
				return A5($joakin$elm_canvas$Canvas$renderTextFill, txt, x, y, $avh4$elm_color$Color$black, cmds);
			case 1:
				var c = drawOp.a;
				return A5($joakin$elm_canvas$Canvas$renderTextFill, txt, x, y, c, cmds);
			case 2:
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
				if (!t.$) {
					var image = t.a;
					return A9($joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$drawImage, 0, 0, image.eB, image.dO, x, y, image.eB, image.dO, image.c3);
				} else {
					var sprite = t.a;
					var image = t.b;
					return A9($joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$drawImage, sprite.eG, sprite.dx, sprite.eB, sprite.dO, x, y, sprite.eB, sprite.dO, image.c3);
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
			case 0:
				var txt = drawable.a;
				return A3($joakin$elm_canvas$Canvas$renderText, drawOp, txt, cmds);
			case 1:
				var ss = drawable.a;
				return A2(
					$joakin$elm_canvas$Canvas$renderShapeDrawOp,
					drawOp,
					A3(
						$elm$core$List$foldl,
						$joakin$elm_canvas$Canvas$renderShape,
						A2($elm$core$List$cons, $joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$beginPath, cmds),
						ss));
			case 2:
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
		var data = _v0;
		var commands = data.aV;
		var drawable = data.bq;
		var drawOp = data.bp;
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
					$elm$html$Html$Attributes$height(options.dO),
					A2(
						$elm$core$List$cons,
						$elm$html$Html$Attributes$width(options.eB),
						attrs))),
			A2(
				$elm$core$List$cons,
				_Utils_Tuple2('__canvas', $joakin$elm_canvas$Canvas$cnvs),
				A2($elm$core$List$map, $joakin$elm_canvas$Canvas$renderTextureSource, options.gC)));
	});
var $joakin$elm_canvas$Canvas$toHtml = F3(
	function (_v0, attrs, entities) {
		var w = _v0.a;
		var h = _v0.b;
		return A3(
			$joakin$elm_canvas$Canvas$toHtmlWith,
			{dO: h, gC: _List_Nil, eB: w},
			attrs,
			entities);
	});
var $joakin$elm_canvas$Canvas$Settings$Advanced$Scale = F2(
	function (a, b) {
		return {$: 1, a: a, b: b};
	});
var $joakin$elm_canvas$Canvas$Settings$Advanced$scale = $joakin$elm_canvas$Canvas$Settings$Advanced$Scale;
var $joakin$elm_canvas$Canvas$Internal$Canvas$SettingCommands = function (a) {
	return {$: 1, a: a};
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
					case 0:
						var angle = t.a;
						return $joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$rotate(angle);
					case 1:
						var x = t.a;
						var y = t.b;
						return A2($joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$scale, x, y);
					case 2:
						var x = t.a;
						var y = t.b;
						return A2($joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$translate, x, y);
					default:
						var m11 = t.a.fw;
						var m12 = t.a.fx;
						var m21 = t.a.fA;
						var m22 = t.a.fB;
						var dx = t.a.hH;
						var dy = t.a.hI;
						return A6($joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$transform, m11, m12, m21, m22, dx, dy);
				}
			},
			transforms));
};
var $joakin$elm_canvas$Canvas$Settings$Advanced$Translate = F2(
	function (a, b) {
		return {$: 2, a: a, b: b};
	});
var $joakin$elm_canvas$Canvas$Settings$Advanced$translate = $joakin$elm_canvas$Canvas$Settings$Advanced$Translate;
var $mpizenberg$elm_2d_viewer$Viewer$Canvas$transform = function (viewer) {
	var scale = 1.0 / viewer.co;
	var _v0 = viewer.iI;
	var ox = _v0.a;
	var oy = _v0.b;
	return $joakin$elm_canvas$Canvas$Settings$Advanced$transform(
		_List_fromArray(
			[
				A2($joakin$elm_canvas$Canvas$Settings$Advanced$scale, scale, scale),
				A2($joakin$elm_canvas$Canvas$Settings$Advanced$translate, -ox, -oy)
			]));
};
var $elm$svg$Svg$Attributes$d = _VirtualDom_attribute('d');
var $elm$svg$Svg$path = $elm$svg$Svg$trustedNode('path');
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
	return {$: 4, a: a};
};
var $author$project$Main$ZoomToward = function (a) {
	return {$: 3, a: a};
};
var $author$project$Main$zoomWheelMsg = F2(
	function (viewer, event) {
		var coordinates = A2($mpizenberg$elm_2d_viewer$Viewer$coordinatesAt, event.it.d9, viewer);
		return (event.hA > 0) ? $author$project$Main$ZoomMsg(
			$author$project$Main$ZoomAwayFrom(coordinates)) : $author$project$Main$ZoomMsg(
			$author$project$Main$ZoomToward(coordinates));
	});
var $author$project$Main$viewHMap = function (model) {
	var nMapPNG = model.ak;
	var hMapPNG = model.aZ;
	var hMapViewer = model.az;
	var notSeenLogs = model.U;
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
							$author$project$Main$NavigationMsg(0))),
						A2(
						$author$project$Main$headerTab,
						'Config',
						$elm$core$Maybe$Just(
							$author$project$Main$NavigationMsg(1))),
						A2(
						$author$project$Main$nMapHeaderTab,
						$elm$core$Maybe$Just(
							$author$project$Main$NavigationMsg(2)),
						nMapPNG),
						A2($author$project$Main$hMapHeaderTab, $elm$core$Maybe$Nothing, hMapPNG),
						A2(
						$author$project$Main$logsHeaderTab,
						$elm$core$Maybe$Just(
							$author$project$Main$NavigationMsg(4)),
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
				if (hMapPNG.$ === 1) {
					return A2(
						$mdgriffith$elm_ui$Element$el,
						_List_fromArray(
							[$mdgriffith$elm_ui$Element$centerX, $mdgriffith$elm_ui$Element$centerY]),
						$mdgriffith$elm_ui$Element$text('Normal map not computed yet'));
				} else {
					var images = hMapPNG.a;
					var img = $yotamDvir$elm_pivot$Pivot$getC(images);
					var renderedImage = A3(
						$joakin$elm_canvas$Canvas$texture,
						_List_fromArray(
							[
								$mpizenberg$elm_2d_viewer$Viewer$Canvas$transform(hMapViewer),
								$joakin$elm_canvas$Canvas$Settings$Advanced$imageSmoothing(false)
							]),
						_Utils_Tuple2(0, 0),
						img.ds);
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
									im: icon(32),
									_: $elm$core$Maybe$Just(msg)
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
					var _v1 = hMapViewer.gv;
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
								$author$project$Main$zoomWheelMsg(hMapViewer)),
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
var $author$project$Main$Go = {$: 0};
var $author$project$Main$LackingImages = function (a) {
	return {$: 2, a: a};
};
var $author$project$Main$LackingLights = function (a) {
	return {$: 1, a: a};
};
var $author$project$Main$NoImage = {$: 3};
var $author$project$Main$NoImageNorLight = {$: 5};
var $author$project$Main$NoLight = {$: 4};
var $author$project$Main$DragDropImagesMsg = function (a) {
	return {$: 2, a: a};
};
var $author$project$Main$DropImages = F2(
	function (a, b) {
		return {$: 1, a: a, b: b};
	});
var $author$project$Main$LoadExampleImages = function (a) {
	return {$: 4, a: a};
};
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
var $andrewMacmurray$elm_simple_animation$Internal$Transition$Transition = $elm$core$Basics$identity;
var $andrewMacmurray$elm_simple_animation$Internal$Transition$properties = $elm$core$Basics$identity;
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
var $andrewMacmurray$elm_simple_animation$Internal$Transition$intersperseValuesWith = function (separator) {
	return A2(
		$elm$core$Basics$composeR,
		$elm$core$List$intersperse(separator),
		$elm$core$String$concat);
};
var $andrewMacmurray$elm_simple_animation$Internal$Transition$Delay = function (a) {
	return {$: 0, a: a};
};
var $andrewMacmurray$elm_simple_animation$Internal$Transition$findDelayOption = A2(
	$elm$core$List$foldl,
	F2(
		function (o, acc) {
			if (!o.$) {
				return o;
			} else {
				return acc;
			}
		}),
	$andrewMacmurray$elm_simple_animation$Internal$Transition$Delay(0));
var $andrewMacmurray$elm_simple_animation$Internal$Ease$Ease = {$: 2};
var $andrewMacmurray$elm_simple_animation$Internal$Transition$Ease = function (a) {
	return {$: 1, a: a};
};
var $andrewMacmurray$elm_simple_animation$Internal$Transition$findEaseOption = A2(
	$elm$core$List$foldl,
	F2(
		function (o, acc) {
			if (o.$ === 1) {
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
		case 0:
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
		case 1:
			return 'linear';
		case 2:
			return 'ease';
		case 3:
			return 'ease-in';
		case 4:
			return 'ease-out';
		default:
			return 'ease-in-out';
	}
};
var $andrewMacmurray$elm_simple_animation$Internal$Transition$renderOptionShorthand = function (o) {
	if (!o.$) {
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
	var props = _v0;
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
		return {$: 0, a: a, b: b, c: c};
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
var $mdgriffith$elm_ui$Element$Font$extraBold = A2($mdgriffith$elm_ui$Internal$Model$Class, $mdgriffith$elm_ui$Internal$Flag$fontWeight, $mdgriffith$elm_ui$Internal$Style$classes.jh);
var $elm$html$Html$Attributes$for = $elm$html$Html$Attributes$stringProperty('htmlFor');
var $elm$html$Html$input = _VirtualDom_node('input');
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
var $mpizenberg$elm_file$FileValue$File = F5(
	function (value, name, mime, size, lastModified) {
		return {fo: lastModified, fR: mime, f_: name, gv: size, gJ: value};
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
	fo: $elm$time$Time$millisToPosix(0),
	fR: 'text/plain',
	f_: 'If you see this file, please report an error at https://github.com/mpizenberg/elm-files/issues',
	gv: 0,
	gJ: $elm$json$Json$Encode$null
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
					ir: A2(msgTag, file, list),
					iQ: true,
					i8: true
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
var $mdgriffith$elm_ui$Element$Font$underline = $mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.jA);
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
						im: $mdgriffith$elm_ui$Element$text('this example set of 6 images'),
						_: $elm$core$Maybe$Just(
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
			switch (draggingState) {
				case 0:
					return $mdgriffith$elm_ui$Element$Border$dashed;
				case 1:
					return $mdgriffith$elm_ui$Element$Border$solid;
				default:
					return $mdgriffith$elm_ui$Element$Border$dashed;
			}
		}();
		var _v0 = function () {
			switch (loadState.$) {
				case 0:
					return _Utils_Tuple2(
						$author$project$Icon$search(48),
						$mdgriffith$elm_ui$Element$none);
				case 1:
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
	return {$: 3, a: a};
};
var $author$project$Main$DropLights = function (a) {
	return {$: 1, a: a};
};
var $mpizenberg$elm_file$FileValue$loadFile = function (msgTag) {
	return A2(
		$elm$html$Html$Events$custom,
		'change',
		A2(
			$elm$json$Json$Decode$map,
			function (file) {
				return {
					ir: msgTag(file),
					iQ: true,
					i8: true
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
			switch (draggingState) {
				case 0:
					return $mdgriffith$elm_ui$Element$Border$dashed;
				case 1:
					return $mdgriffith$elm_ui$Element$Border$solid;
				default:
					return $mdgriffith$elm_ui$Element$Border$dashed;
			}
		}();
		var _v0 = function () {
			switch (loadState.$) {
				case 0:
					return _Utils_Tuple2(
						$author$project$Icon$search(48),
						$mdgriffith$elm_ui$Element$none);
				case 1:
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
var $author$project$Main$DragLeaveImages = {$: 2};
var $author$project$Main$DragOverImages = {$: 0};
var $author$project$Main$DragOverLights = {$: 0};
var $elm$regex$Regex$Match = F4(
	function (match, index, number, submatches) {
		return {h8: index, ip: match, iy: number, jb: submatches};
	});
var $elm$regex$Regex$contains = _Regex_contains;
var $elm$regex$Regex$fromStringWith = _Regex_fromStringWith;
var $elm$regex$Regex$fromString = function (string) {
	return A2(
		$elm$regex$Regex$fromStringWith,
		{hh: false, iv: false},
		string);
};
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
						ir: A2(msgTag, file, list),
						iQ: true,
						i8: true
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
					return {ir: message, iQ: true, i8: true};
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
		A2($mpizenberg$elm_file$FileValue$filesOn, 'dragover', config.iD),
		A2(
			$elm$core$List$cons,
			A2($mpizenberg$elm_file$FileValue$filesOn, 'drop', config.iA),
			function () {
				var _v0 = config.iB;
				if (_v0.$ === 1) {
					return _List_Nil;
				} else {
					var id = _v0.a.a9;
					var msg = _v0.a.iu;
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
				iA: F2(
					function (file, otherFiles) {
						var _v0 = file.fR;
						if (_v0 === 'text/csv') {
							return $author$project$Main$DragDropLightsMsg(
								$author$project$Main$DropLights(file));
						} else {
							return $author$project$Main$DragDropImagesMsg(
								A2($author$project$Main$DropImages, file, otherFiles));
						}
					}),
				iB: $elm$core$Maybe$Just(
					{
						a9: 'FileDropArea',
						iu: $author$project$Main$DragDropImagesMsg($author$project$Main$DragLeaveImages)
					}),
				iD: F2(
					function (typ, _v1) {
						return extension(typ.f_) ? $author$project$Main$DragDropLightsMsg($author$project$Main$DragOverLights) : $author$project$Main$DragDropImagesMsg($author$project$Main$DragOverImages);
					})
			}));
}();
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
var $elm$html$Html$Attributes$href = function (url) {
	return A2(
		$elm$html$Html$Attributes$stringProperty,
		'href',
		_VirtualDom_noJavaScriptUri(url));
};
var $elm$html$Html$Attributes$rel = _VirtualDom_attribute('rel');
var $mdgriffith$elm_ui$Element$link = F2(
	function (attrs, _v0) {
		var url = _v0.jC;
		var label = _v0.im;
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
								$mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.cS + (' ' + ($mdgriffith$elm_ui$Internal$Style$classes.a6 + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.fv)))),
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
						im: $mdgriffith$elm_ui$Element$text('code on GitHub'),
						jC: 'https://github.com/floffy-f/stenm'
					}),
					A2($mdgriffith$elm_ui$Element$el, _List_Nil, $mdgriffith$elm_ui$Element$none),
					$author$project$Icon$github(16)
				]))
		]));
var $author$project$Main$viewHome = F3(
	function (draggingState, loadImages, loadLights) {
		var youCanGo = function () {
			var _v2 = _Utils_Tuple2(loadImages, loadLights);
			if (_v2.a.$ === 1) {
				if (_v2.b.$ === 1) {
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
				if (_v2.b.$ === 1) {
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
				im: $author$project$Icon$logIn(48),
				_: function () {
					if (!youCanGo.$) {
						return $elm$core$Maybe$Just(
							$author$project$Main$NavigationMsg(0));
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
					case 0:
						return _List_fromArray(
							[
								goButton,
								A2(
								$mdgriffith$elm_ui$Element$Input$button,
								_List_Nil,
								{
									im: $mdgriffith$elm_ui$Element$text('Go to the images preparation'),
									_: $elm$core$Maybe$Just(
										$author$project$Main$NavigationMsg(0))
								})
							]);
					case 3:
						return _List_fromArray(
							[
								$mdgriffith$elm_ui$Element$text(' - Import images to compute the normal map from')
							]);
					case 4:
						return _List_fromArray(
							[
								$mdgriffith$elm_ui$Element$text(' - Import a CSV file containing three columns : x, y and z coordinates for each light direction')
							]);
					case 5:
						return _List_fromArray(
							[
								$mdgriffith$elm_ui$Element$text(' - Import images to compute the normal map from\n - Import a CSV file containing three columns : x, y and z coordinates for each light direction')
							]);
					case 2:
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
var $author$project$Main$CropCurrentFrame = 2;
var $author$project$Main$SelectDrawingMode = 1;
var $author$project$Main$SelectMovingMode = 0;
var $author$project$Main$ViewImgMsg = function (a) {
	return {$: 10, a: a};
};
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
var $joakin$elm_canvas$Canvas$Internal$Canvas$SettingDrawOp = function (a) {
	return {$: 2, a: a};
};
var $joakin$elm_canvas$Canvas$Settings$fill = function (color) {
	return $joakin$elm_canvas$Canvas$Internal$Canvas$SettingDrawOp(
		$joakin$elm_canvas$Canvas$Internal$Canvas$Fill(color));
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
var $joakin$elm_canvas$Canvas$Internal$Canvas$Rect = F3(
	function (a, b, c) {
		return {$: 0, a: a, b: b, c: c};
	});
var $joakin$elm_canvas$Canvas$rect = F3(
	function (pos, width, height) {
		return A3($joakin$elm_canvas$Canvas$Internal$Canvas$Rect, pos, width, height);
	});
var $avh4$elm_color$Color$red = A4($avh4$elm_color$Color$RgbaSpace, 204 / 255, 0 / 255, 0 / 255, 1.0);
var $avh4$elm_color$Color$rgba = F4(
	function (r, g, b, a) {
		return A4($avh4$elm_color$Color$RgbaSpace, r, g, b, a);
	});
var $joakin$elm_canvas$Canvas$Internal$Canvas$DrawableShapes = function (a) {
	return {$: 1, a: a};
};
var $joakin$elm_canvas$Canvas$shapes = F2(
	function (settings, ss) {
		return A2(
			$joakin$elm_canvas$Canvas$addSettingsToRenderable,
			settings,
			{
				aV: _List_Nil,
				bp: $joakin$elm_canvas$Canvas$Internal$Canvas$NotSpecified,
				bq: $joakin$elm_canvas$Canvas$Internal$Canvas$DrawableShapes(ss)
			});
	});
var $joakin$elm_canvas$Canvas$Settings$stroke = function (color) {
	return $joakin$elm_canvas$Canvas$Internal$Canvas$SettingDrawOp(
		$joakin$elm_canvas$Canvas$Internal$Canvas$Stroke(color));
};
var $author$project$Main$viewImgs = F2(
	function (model, images) {
		var pointerMode = model.t;
		var bboxDrawn = model.ag;
		var viewer = model.y;
		var notSeenLogs = model.U;
		var nMapPNG = model.ak;
		var hMapPNG = model.aZ;
		var renderedBbox = function () {
			if (bboxDrawn.$ === 1) {
				return A2($joakin$elm_canvas$Canvas$shapes, _List_Nil, _List_Nil);
			} else {
				var left = bboxDrawn.a.av;
				var top = bboxDrawn.a.aw;
				var right = bboxDrawn.a.am;
				var bottom = bboxDrawn.a.ah;
				var strokeWidth = viewer.co * 2;
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
			return $elm$core$String$fromFloat(pt.eG) + (' ; ' + ($elm$core$String$fromFloat(pt.dx) + (' ; ' + $elm$core$String$fromFloat(pt.eJ))));
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
						im: icon(32),
						_: action
					});
			});
		var lightDirection = $mdgriffith$elm_ui$Element$text(
			A2(
				$elm$core$Maybe$withDefault,
				'Light unreadable...',
				A2(
					$elm$core$Maybe$map,
					pointToText,
					A2($elm$core$Maybe$map, $yotamDvir$elm_pivot$Pivot$getC, model.T))));
		var isMovingMode = function () {
			switch (pointerMode.$) {
				case 0:
					return true;
				case 1:
					return true;
				case 2:
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
			img.ds);
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
						im: icon(32),
						_: $elm$core$Maybe$Just(msg)
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
					$author$project$Main$ViewImgMsg(0),
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
					$author$project$Main$ViewImgMsg(1),
					'Draw the cropped working area as a bounding box',
					$author$project$Icon$boundingBox),
					A5(
					clickButton,
					$mdgriffith$elm_ui$Element$centerX,
					true,
					$author$project$Main$ViewImgMsg(2),
					'Set the cropped working area to the current frame',
					$author$project$Icon$maximize)
				]));
		var _v0 = viewer.gv;
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
								$author$project$Main$NavigationMsg(1))),
							A2(
							$author$project$Main$nMapHeaderTab,
							$elm$core$Maybe$Just(
								$author$project$Main$NavigationMsg(2)),
							nMapPNG),
							A2(
							$author$project$Main$hMapHeaderTab,
							$elm$core$Maybe$Just(
								$author$project$Main$NavigationMsg(3)),
							hMapPNG),
							A2(
							$author$project$Main$logsHeaderTab,
							$elm$core$Maybe$Just(
								$author$project$Main$NavigationMsg(4)),
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
var $author$project$Main$ReturnHome = {$: 15};
var $mdgriffith$elm_ui$Element$Border$dotted = A2($mdgriffith$elm_ui$Internal$Model$Class, $mdgriffith$elm_ui$Internal$Flag$borderStyle, $mdgriffith$elm_ui$Internal$Style$classes.hb);
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
	var names = _v0.cj;
	var loaded = _v0.ci;
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
					im: $mdgriffith$elm_ui$Element$text('Woops, stop and reload the page'),
					_: $elm$core$Maybe$Just($author$project$Main$ReturnHome)
				})
			]));
};
var $mdgriffith$elm_ui$Internal$Model$Monospace = {$: 2};
var $mdgriffith$elm_ui$Element$Font$monospace = $mdgriffith$elm_ui$Internal$Model$Monospace;
var $author$project$Style$fontMonospace = $mdgriffith$elm_ui$Element$Font$family(
	_List_fromArray(
		[
			$mdgriffith$elm_ui$Element$Font$typeface('Inconsolata'),
			$mdgriffith$elm_ui$Element$Font$monospace
		]));
var $author$project$Style$warningColor = A3($mdgriffith$elm_ui$Element$rgb255, 220, 120, 50);
var $author$project$Main$viewLog = function (_v0) {
	var lvl = _v0.ba;
	var content = _v0.cQ;
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
					im: $mdgriffith$elm_ui$Element$text('Woops, reload the page'),
					_: $elm$core$Maybe$Just($author$project$Main$ReturnHome)
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
								return l.ba <= 0;
							},
							model.U))))
			]));
};
var $author$project$Main$GetScrollPosThenNavigationMsg = function (a) {
	return {$: 14, a: a};
};
var $author$project$Main$ToggleAutoScroll = function (a) {
	return {$: 24, a: a};
};
var $author$project$Main$ClearLogs = {$: 21};
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
				im: $author$project$Icon$trash(24),
				_: $elm$core$Maybe$Just($author$project$Main$ClearLogs)
			}),
			A2(
			$mdgriffith$elm_ui$Element$el,
			_List_fromArray(
				[$mdgriffith$elm_ui$Element$centerY]),
			$mdgriffith$elm_ui$Element$text('Clear logs'))
		]));
var $author$project$Main$VerbosityChange = function (a) {
	return {$: 23, a: a};
};
var $mdgriffith$elm_ui$Element$Input$Label = F3(
	function (a, b, c) {
		return {$: 0, a: a, b: b, c: c};
	});
var $mdgriffith$elm_ui$Element$Input$OnLeft = 1;
var $mdgriffith$elm_ui$Element$Input$labelLeft = $mdgriffith$elm_ui$Element$Input$Label(1);
var $mdgriffith$elm_ui$Internal$Flag$active = $mdgriffith$elm_ui$Internal$Flag$flag(32);
var $mdgriffith$elm_ui$Internal$Flag$focus = $mdgriffith$elm_ui$Internal$Flag$flag(31);
var $mdgriffith$elm_ui$Internal$Model$getHeight = function (attrs) {
	return A3(
		$elm$core$List$foldr,
		F2(
			function (attr, acc) {
				if (!acc.$) {
					var x = acc.a;
					return $elm$core$Maybe$Just(x);
				} else {
					if (attr.$ === 8) {
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
						if (!acc.$) {
							var x = acc.a;
							return $elm$core$Maybe$Just(x);
						} else {
							if ((attr.$ === 4) && (attr.b.$ === 5)) {
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
				if (!acc.$) {
					var x = acc.a;
					return $elm$core$Maybe$Just(x);
				} else {
					if (attr.$ === 7) {
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
var $elm$html$Html$Attributes$max = $elm$html$Html$Attributes$stringProperty('max');
var $elm$html$Html$Attributes$min = $elm$html$Html$Attributes$stringProperty('min');
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
			case 1:
				var styled = el.a;
				return $mdgriffith$elm_ui$Internal$Model$Styled(
					{
						fd: F2(
							function (add, context) {
								return A2(
									$elm$virtual_dom$VirtualDom$map,
									fn,
									A2(styled.fd, add, context));
							}),
						ja: styled.ja
					});
			case 0:
				var html = el.a;
				return $mdgriffith$elm_ui$Internal$Model$Unstyled(
					A2(
						$elm$core$Basics$composeL,
						$elm$virtual_dom$VirtualDom$map(fn),
						html));
			case 2:
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
			case 0:
				return $mdgriffith$elm_ui$Internal$Model$NoAttribute;
			case 2:
				var description = attr.a;
				return $mdgriffith$elm_ui$Internal$Model$Describe(description);
			case 6:
				var x = attr.a;
				return $mdgriffith$elm_ui$Internal$Model$AlignX(x);
			case 5:
				var y = attr.a;
				return $mdgriffith$elm_ui$Internal$Model$AlignY(y);
			case 7:
				var x = attr.a;
				return $mdgriffith$elm_ui$Internal$Model$Width(x);
			case 8:
				var x = attr.a;
				return $mdgriffith$elm_ui$Internal$Model$Height(x);
			case 3:
				var x = attr.a;
				var y = attr.b;
				return A2($mdgriffith$elm_ui$Internal$Model$Class, x, y);
			case 4:
				var flag = attr.a;
				var style = attr.b;
				return A2($mdgriffith$elm_ui$Internal$Model$StyleClass, flag, style);
			case 9:
				var location = attr.a;
				var elem = attr.b;
				return A2(
					$mdgriffith$elm_ui$Internal$Model$Nearby,
					location,
					A2($mdgriffith$elm_ui$Internal$Model$map, fn, elem));
			case 1:
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
				if (_v8.a.$ === 1) {
					if (_v8.b.$ === 1) {
						var _v9 = _v8.a;
						var _v10 = _v8.b;
						return false;
					} else {
						break _v8$3;
					}
				} else {
					if ((!_v8.a.a.$) && (!_v8.b.$)) {
						switch (_v8.b.a.$) {
							case 0:
								var w = _v8.a.a.a;
								var h = _v8.b.a.a;
								return _Utils_cmp(h, w) > 0;
							case 2:
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
		var factor = (input.gJ - input.db) / (input.da - input.db);
		var _v0 = input.jt;
		var thumbAttributes = _v0;
		var height = $mdgriffith$elm_ui$Internal$Model$getHeight(thumbAttributes);
		var thumbHeightString = function () {
			if (height.$ === 1) {
				return '20px';
			} else {
				if (!height.a.$) {
					var px = height.a.a;
					return $elm$core$String$fromInt(px) + 'px';
				} else {
					return '100%';
				}
			}
		}();
		var width = $mdgriffith$elm_ui$Internal$Model$getWidth(thumbAttributes);
		var thumbWidthString = function () {
			if (width.$ === 1) {
				return '20px';
			} else {
				if (!width.a.$) {
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
					$mdgriffith$elm_ui$Element$Input$isHiddenLabel(input.im) ? $mdgriffith$elm_ui$Internal$Model$NoAttribute : A2($mdgriffith$elm_ui$Element$spacingXY, spacingX, spacingY),
					$mdgriffith$elm_ui$Element$Region$announce,
					$mdgriffith$elm_ui$Element$width(
					function () {
						if (trackWidth.$ === 1) {
							return $mdgriffith$elm_ui$Element$fill;
						} else {
							if (!trackWidth.a.$) {
								return $mdgriffith$elm_ui$Element$shrink;
							} else {
								var x = trackWidth.a;
								return x;
							}
						}
					}()),
					$mdgriffith$elm_ui$Element$height(
					function () {
						if (trackHeight.$ === 1) {
							return $mdgriffith$elm_ui$Element$shrink;
						} else {
							if (!trackHeight.a.$) {
								return $mdgriffith$elm_ui$Element$shrink;
							} else {
								var x = trackHeight.a;
								return x;
							}
						}
					}())
				]),
			input.im,
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
								$mdgriffith$elm_ui$Element$Input$hiddenLabelAttribute(input.im),
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
										if (_v4.$ === 1) {
											return input.iz(0);
										} else {
											var val = _v4.a;
											return input.iz(val);
										}
									})),
								$mdgriffith$elm_ui$Internal$Model$Attr(
								$elm$html$Html$Attributes$type_('range')),
								$mdgriffith$elm_ui$Internal$Model$Attr(
								$elm$html$Html$Attributes$step(
									function () {
										var _v5 = input.ev;
										if (_v5.$ === 1) {
											return 'any';
										} else {
											var step = _v5.a;
											return $elm$core$String$fromFloat(step);
										}
									}())),
								$mdgriffith$elm_ui$Internal$Model$Attr(
								$elm$html$Html$Attributes$min(
									$elm$core$String$fromFloat(input.db))),
								$mdgriffith$elm_ui$Internal$Model$Attr(
								$elm$html$Html$Attributes$max(
									$elm$core$String$fromFloat(input.da))),
								$mdgriffith$elm_ui$Internal$Model$Attr(
								$elm$html$Html$Attributes$value(
									$elm$core$String$fromFloat(input.gJ))),
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
var $mdgriffith$elm_ui$Element$Input$Thumb = $elm$core$Basics$identity;
var $mdgriffith$elm_ui$Element$Input$thumb = $elm$core$Basics$identity;
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
			im: A2(
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
			da: 4,
			db: 0,
			iz: $author$project$Main$VerbosityChange,
			ev: $elm$core$Maybe$Just(1),
			jt: function () {
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
			gJ: verbosity
		});
};
var $author$project$Main$viewLogs = function (model) {
	var autoscroll = model.bG;
	var verbosity = model.du;
	var seenLogs = model.a0;
	var notSeenLogs = model.U;
	var nMapPNG = model.ak;
	var hMapPNG = model.aZ;
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
							$author$project$Main$GetScrollPosThenNavigationMsg(0))),
						A2(
						$author$project$Main$headerTab,
						'Config',
						$elm$core$Maybe$Just(
							$author$project$Main$GetScrollPosThenNavigationMsg(1))),
						A2(
						$author$project$Main$nMapHeaderTab,
						$elm$core$Maybe$Just(
							$author$project$Main$GetScrollPosThenNavigationMsg(2)),
						nMapPNG),
						A2(
						$author$project$Main$hMapHeaderTab,
						$elm$core$Maybe$Just(
							$author$project$Main$GetScrollPosThenNavigationMsg(3)),
						hMapPNG),
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
										return _Utils_cmp(l.ba, verbosity) < 1;
									},
									seenLogs))))
					]))
			]));
};
var $mdgriffith$elm_ui$Element$map = $mdgriffith$elm_ui$Internal$Model$map;
var $author$project$View3d$ClickedSelectImageButton = {$: 4};
var $author$project$View3d$MouseDown = function (a) {
	return {$: 7, a: a};
};
var $elm$html$Html$button = _VirtualDom_node('button');
var $author$project$View3d$ZoomIn = {$: 5};
var $author$project$View3d$ZoomOut = {$: 6};
var $author$project$View3d$chooseZoom = function (wheelEvent) {
	return (wheelEvent.hA > 0) ? $author$project$View3d$ZoomOut : $author$project$View3d$ZoomIn;
};
var $ianmackenzie$elm_geometry$Direction3d$components = function (_v0) {
	var d = _v0;
	return _Utils_Tuple3(d.eG, d.dx, d.eJ);
};
var $elm_explorations$linear_algebra$Math$Vector3$vec3 = _MJS_v3;
var $ianmackenzie$elm_geometry$Direction3d$xyZ = F2(
	function (_v0, _v1) {
		var theta = _v0;
		var phi = _v1;
		var cosPhi = $elm$core$Basics$cos(phi);
		return {
			eG: cosPhi * $elm$core$Basics$cos(theta),
			dx: cosPhi * $elm$core$Basics$sin(theta),
			eJ: $elm$core$Basics$sin(phi)
		};
	});
var $author$project$View3d$directionalLight = function (_v0) {
	var azimuth = _v0.an;
	var elevation = _v0.ar;
	return function (_v1) {
		var x = _v1.a;
		var y = _v1.b;
		var z = _v1.c;
		return A3($elm_explorations$linear_algebra$Math$Vector3$vec3, x, y, z);
	}(
		$ianmackenzie$elm_geometry$Direction3d$components(
			A2($ianmackenzie$elm_geometry$Direction3d$xyZ, azimuth, elevation)));
};
var $elm_explorations$webgl$WebGL$Internal$DepthTest = F4(
	function (a, b, c, d) {
		return {$: 1, a: a, b: b, c: c, d: d};
	});
var $elm_explorations$webgl$WebGL$Settings$DepthTest$less = function (_v0) {
	var write = _v0.aP;
	var near = _v0.aJ;
	var far = _v0.aI;
	return A4($elm_explorations$webgl$WebGL$Internal$DepthTest, 513, write, near, far);
};
var $elm_explorations$webgl$WebGL$Settings$DepthTest$default = $elm_explorations$webgl$WebGL$Settings$DepthTest$less(
	{aI: 1, aJ: 0, aP: true});
var $elm_explorations$webgl$WebGL$Internal$enableOption = F2(
	function (ctx, option) {
		switch (option.$) {
			case 0:
				return A2(_WebGL_enableAlpha, ctx, option);
			case 1:
				return A2(_WebGL_enableDepth, ctx, option);
			case 2:
				return A2(_WebGL_enableStencil, ctx, option);
			case 3:
				return A2(_WebGL_enableAntialias, ctx, option);
			case 4:
				return A2(_WebGL_enableClearColor, ctx, option);
			default:
				return A2(_WebGL_enablePreserveDrawingBuffer, ctx, option);
		}
	});
var $elm_explorations$webgl$WebGL$Internal$enableSetting = F2(
	function (cache, setting) {
		switch (setting.$) {
			case 0:
				return A2(_WebGL_enableBlend, cache, setting);
			case 1:
				return A2(_WebGL_enableDepthTest, cache, setting);
			case 2:
				return A2(_WebGL_enableStencilTest, cache, setting);
			case 3:
				return A2(_WebGL_enableScissor, cache, setting);
			case 4:
				return A2(_WebGL_enableColorMask, cache, setting);
			case 5:
				return A2(_WebGL_enableCullFace, cache, setting);
			case 6:
				return A2(_WebGL_enablePolygonOffset, cache, setting);
			case 7:
				return A2(_WebGL_enableSampleCoverage, cache, setting);
			default:
				return _WebGL_enableSampleAlphaToCoverage(cache);
		}
	});
var $elm_explorations$webgl$WebGL$entityWith = _WebGL_entity;
var $elm_explorations$webgl$WebGL$entity = $elm_explorations$webgl$WebGL$entityWith(
	_List_fromArray(
		[$elm_explorations$webgl$WebGL$Settings$DepthTest$default]));
var $author$project$View3d$fragmentShader = {
	src: '\n        precision mediump float;\n        uniform vec3 directionalLight;\n        varying vec3 vcolor;\n        varying vec3 vnormal;\n        void main () {\n            // normalizing the normal varying\n            vec3 normal = normalize(vnormal);\n            // computing directional lighting\n            float intensity = dot(normal, directionalLight);\n            // gl_FragColor = vec4(vcolor, 1.0);\n            // gl_FragColor = vec4(intensity * vcolor, 1.0);\n            gl_FragColor = vec4(intensity, intensity, intensity, 1.0);\n        }\n    ',
	attributes: {},
	uniforms: {directionalLight: 'e$'}
};
var $author$project$View3d$ChangeDepthScale = function (a) {
	return {$: 14, a: a};
};
var $elm$html$Html$Attributes$placeholder = $elm$html$Html$Attributes$stringProperty('placeholder');
var $author$project$View3d$valueDecoder = function (toMsg) {
	return A2(
		$elm$json$Json$Decode$map,
		function (x) {
			return _Utils_Tuple2(x, true);
		},
		A2(
			$elm$json$Json$Decode$map,
			toMsg,
			A2(
				$elm$json$Json$Decode$map,
				A2(
					$elm$core$Basics$composeR,
					$elm$core$String$toFloat,
					$elm$core$Maybe$withDefault(0)),
				$elm$html$Html$Events$targetValue)));
};
var $author$project$View3d$lightControls = function (lighting) {
	return A2(
		$elm$html$Html$div,
		_List_Nil,
		_List_fromArray(
			[
				$elm$html$Html$text('Depth scale'),
				A2(
				$elm$html$Html$input,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$type_('number'),
						$elm$html$Html$Attributes$min('0.01'),
						$elm$html$Html$Attributes$max('1.00'),
						$elm$html$Html$Attributes$step('0.01'),
						$elm$html$Html$Attributes$placeholder('0.1'),
						A2(
						$elm$html$Html$Events$stopPropagationOn,
						'change',
						$author$project$View3d$valueDecoder($author$project$View3d$ChangeDepthScale))
					]),
				_List_Nil),
				A2(
				$elm$html$Html$p,
				_List_Nil,
				_List_fromArray(
					[
						$elm$html$Html$text('Light direction')
					]))
			]));
};
var $ianmackenzie$elm_geometry$Direction3d$positiveZ = $ianmackenzie$elm_geometry$Direction3d$unsafe(
	{eG: 0, dx: 0, eJ: 1});
var $ianmackenzie$elm_geometry$Direction3d$z = $ianmackenzie$elm_geometry$Direction3d$positiveZ;
var $ianmackenzie$elm_geometry$Frame3d$atOrigin = {eb: $ianmackenzie$elm_geometry$Point3d$origin, eH: $ianmackenzie$elm_geometry$Direction3d$x, eI: $ianmackenzie$elm_geometry$Direction3d$y, eK: $ianmackenzie$elm_geometry$Direction3d$z};
var $ianmackenzie$elm_geometry$Direction3d$relativeTo = F2(
	function (_v0, _v1) {
		var frame = _v0;
		var d = _v1;
		var _v2 = frame.eK;
		var k = _v2;
		var _v3 = frame.eI;
		var j = _v3;
		var _v4 = frame.eH;
		var i = _v4;
		return {eG: ((d.eG * i.eG) + (d.dx * i.dx)) + (d.eJ * i.eJ), dx: ((d.eG * j.eG) + (d.dx * j.dx)) + (d.eJ * j.eJ), eJ: ((d.eG * k.eG) + (d.dx * k.dx)) + (d.eJ * k.eJ)};
	});
var $ianmackenzie$elm_geometry$Point3d$relativeTo = F2(
	function (_v0, _v1) {
		var frame = _v0;
		var p = _v1;
		var _v2 = frame.eb;
		var p0 = _v2;
		var deltaX = p.eG - p0.eG;
		var deltaY = p.dx - p0.dx;
		var deltaZ = p.eJ - p0.eJ;
		var _v3 = frame.eK;
		var k = _v3;
		var _v4 = frame.eI;
		var j = _v4;
		var _v5 = frame.eH;
		var i = _v5;
		return {eG: ((deltaX * i.eG) + (deltaY * i.dx)) + (deltaZ * i.eJ), dx: ((deltaX * j.eG) + (deltaY * j.dx)) + (deltaZ * j.eJ), eJ: ((deltaX * k.eG) + (deltaY * k.dx)) + (deltaZ * k.eJ)};
	});
var $ianmackenzie$elm_geometry$Frame3d$relativeTo = F2(
	function (otherFrame, frame) {
		return {
			eb: A2(
				$ianmackenzie$elm_geometry$Point3d$relativeTo,
				otherFrame,
				$ianmackenzie$elm_geometry$Frame3d$originPoint(frame)),
			eH: A2(
				$ianmackenzie$elm_geometry$Direction3d$relativeTo,
				otherFrame,
				$ianmackenzie$elm_geometry$Frame3d$xDirection(frame)),
			eI: A2(
				$ianmackenzie$elm_geometry$Direction3d$relativeTo,
				otherFrame,
				$ianmackenzie$elm_geometry$Frame3d$yDirection(frame)),
			eK: A2(
				$ianmackenzie$elm_geometry$Direction3d$relativeTo,
				otherFrame,
				$ianmackenzie$elm_geometry$Frame3d$zDirection(frame))
		};
	});
var $elm_explorations$linear_algebra$Math$Matrix4$fromRecord = _MJS_m4x4fromRecord;
var $ianmackenzie$elm_geometry$Direction3d$unwrap = function (_v0) {
	var coordinates = _v0;
	return coordinates;
};
var $ianmackenzie$elm_geometry$Point3d$unwrap = function (_v0) {
	var pointCoordinates = _v0;
	return pointCoordinates;
};
var $ianmackenzie$elm_geometry_linear_algebra_interop$Geometry$Interop$LinearAlgebra$Frame3d$toMat4 = function (frame) {
	var p = $ianmackenzie$elm_geometry$Point3d$unwrap(
		$ianmackenzie$elm_geometry$Frame3d$originPoint(frame));
	var k = $ianmackenzie$elm_geometry$Direction3d$unwrap(
		$ianmackenzie$elm_geometry$Frame3d$zDirection(frame));
	var j = $ianmackenzie$elm_geometry$Direction3d$unwrap(
		$ianmackenzie$elm_geometry$Frame3d$yDirection(frame));
	var i = $ianmackenzie$elm_geometry$Direction3d$unwrap(
		$ianmackenzie$elm_geometry$Frame3d$xDirection(frame));
	return $elm_explorations$linear_algebra$Math$Matrix4$fromRecord(
		{fw: i.eG, fx: j.eG, fy: k.eG, fz: p.eG, fA: i.dx, fB: j.dx, fC: k.dx, fD: p.dx, fE: i.eJ, fF: j.eJ, fG: k.eJ, fH: p.eJ, fI: 0, fJ: 0, fK: 0, fL: 1});
};
var $ianmackenzie$elm_3d_camera$WebGL$Matrices$modelViewMatrix = F2(
	function (modelFrame, _v0) {
		var viewpointFrame = _v0;
		return $ianmackenzie$elm_geometry_linear_algebra_interop$Geometry$Interop$LinearAlgebra$Frame3d$toMat4(
			A2($ianmackenzie$elm_geometry$Frame3d$relativeTo, viewpointFrame, modelFrame));
	});
var $elm_explorations$linear_algebra$Math$Matrix4$mul = _MJS_m4x4mul;
var $ianmackenzie$elm_units$Quantity$abs = function (_v0) {
	var value = _v0;
	return $elm$core$Basics$abs(value);
};
var $elm$core$Basics$isInfinite = _Basics_isInfinite;
var $ianmackenzie$elm_3d_camera$WebGL$Matrices$projectionMatrix = F2(
	function (_v0, _v1) {
		var camera = _v0;
		var nearClipDepth = _v1.iw;
		var farClipDepth = _v1.hQ;
		var aspectRatio = _v1.g1;
		var _v2 = $ianmackenzie$elm_units$Quantity$abs(nearClipDepth);
		var n = _v2;
		var _v3 = $ianmackenzie$elm_units$Quantity$abs(farClipDepth);
		var f = _v3;
		var _v4 = camera.el;
		if (!_v4.$) {
			var frustumSlope = _v4.a;
			return $elm$core$Basics$isInfinite(f) ? $elm_explorations$linear_algebra$Math$Matrix4$fromRecord(
				{fw: 1 / (aspectRatio * frustumSlope), fx: 0, fy: 0, fz: 0, fA: 0, fB: 1 / frustumSlope, fC: 0, fD: 0, fE: 0, fF: 0, fG: -1, fH: (-2) * n, fI: 0, fJ: 0, fK: -1, fL: 0}) : $elm_explorations$linear_algebra$Math$Matrix4$fromRecord(
				{fw: 1 / (aspectRatio * frustumSlope), fx: 0, fy: 0, fz: 0, fA: 0, fB: 1 / frustumSlope, fC: 0, fD: 0, fE: 0, fF: 0, fG: (-(f + n)) / (f - n), fH: (((-2) * f) * n) / (f - n), fI: 0, fJ: 0, fK: -1, fL: 0});
		} else {
			var viewportHeight = _v4.a;
			return $elm$core$Basics$isInfinite(f) ? $elm_explorations$linear_algebra$Math$Matrix4$fromRecord(
				{fw: 2 / (aspectRatio * viewportHeight), fx: 0, fy: 0, fz: 0, fA: 0, fB: 2 / viewportHeight, fC: 0, fD: 0, fE: 0, fF: 0, fG: 0, fH: -1, fI: 0, fJ: 0, fK: 0, fL: 1}) : $elm_explorations$linear_algebra$Math$Matrix4$fromRecord(
				{fw: 2 / (aspectRatio * viewportHeight), fx: 0, fy: 0, fz: 0, fA: 0, fB: 2 / viewportHeight, fC: 0, fD: 0, fE: 0, fF: 0, fG: (-2) / (f - n), fH: (-(f + n)) / (f - n), fI: 0, fJ: 0, fK: 0, fL: 1});
		}
	});
var $ianmackenzie$elm_3d_camera$Camera3d$viewpoint = function (_v0) {
	var camera = _v0;
	return camera.jG;
};
var $ianmackenzie$elm_3d_camera$WebGL$Matrices$modelViewProjectionMatrix = F3(
	function (modelFrame, camera, projectionParameters) {
		return A2(
			$elm_explorations$linear_algebra$Math$Matrix4$mul,
			A2($ianmackenzie$elm_3d_camera$WebGL$Matrices$projectionMatrix, camera, projectionParameters),
			A2(
				$ianmackenzie$elm_3d_camera$WebGL$Matrices$modelViewMatrix,
				modelFrame,
				$ianmackenzie$elm_3d_camera$Camera3d$viewpoint(camera)));
	});
var $ianmackenzie$elm_3d_camera$Camera3d$Types$Camera3d = $elm$core$Basics$identity;
var $ianmackenzie$elm_3d_camera$Camera3d$Types$Perspective = function (a) {
	return {$: 0, a: a};
};
var $ianmackenzie$elm_units$Quantity$half = function (_v0) {
	var value = _v0;
	return 0.5 * value;
};
var $elm$core$Basics$tan = _Basics_tan;
var $ianmackenzie$elm_units$Angle$tan = function (_v0) {
	var angle = _v0;
	return $elm$core$Basics$tan(angle);
};
var $ianmackenzie$elm_3d_camera$Camera3d$perspective = function (_arguments) {
	var halfFieldOfView = $ianmackenzie$elm_units$Quantity$half(
		$ianmackenzie$elm_units$Quantity$abs(_arguments.jD));
	var frustumSlope = $ianmackenzie$elm_units$Angle$tan(halfFieldOfView);
	return {
		el: $ianmackenzie$elm_3d_camera$Camera3d$Types$Perspective(frustumSlope),
		jG: _arguments.jG
	};
};
var $author$project$View3d$persectiveCamera = function (camera) {
	return $ianmackenzie$elm_3d_camera$Camera3d$perspective(
		{
			jD: $ianmackenzie$elm_units$Angle$degrees(30),
			jG: $ianmackenzie$elm_3d_camera$Viewpoint3d$orbitZ(camera)
		});
};
var $author$project$View3d$modelViewProjection = function (camera) {
	return A3(
		$ianmackenzie$elm_3d_camera$WebGL$Matrices$modelViewProjectionMatrix,
		$ianmackenzie$elm_geometry$Frame3d$atOrigin,
		$author$project$View3d$persectiveCamera(camera),
		{
			g1: 1,
			hQ: $ianmackenzie$elm_units$Length$meters(100),
			iw: $ianmackenzie$elm_units$Length$meters(0.01)
		});
};
var $mpizenberg$elm_pointer_events$Html$Events$Extra$Mouse$defaultOptions = {iQ: true, i8: false};
var $mpizenberg$elm_pointer_events$Html$Events$Extra$Mouse$onWithOptions = F3(
	function (event, options, tag) {
		return A2(
			$elm$html$Html$Events$custom,
			event,
			A2(
				$elm$json$Json$Decode$map,
				function (ev) {
					return {
						ir: tag(ev),
						iQ: options.iQ,
						i8: options.i8
					};
				},
				$mpizenberg$elm_pointer_events$Html$Events$Extra$Mouse$eventDecoder));
	});
var $mpizenberg$elm_pointer_events$Html$Events$Extra$Mouse$onDown = A2($mpizenberg$elm_pointer_events$Html$Events$Extra$Mouse$onWithOptions, 'mousedown', $mpizenberg$elm_pointer_events$Html$Events$Extra$Mouse$defaultOptions);
var $elm_explorations$webgl$WebGL$Internal$Alpha = function (a) {
	return {$: 0, a: a};
};
var $elm_explorations$webgl$WebGL$alpha = $elm_explorations$webgl$WebGL$Internal$Alpha;
var $elm_explorations$webgl$WebGL$Internal$Antialias = {$: 3};
var $elm_explorations$webgl$WebGL$antialias = $elm_explorations$webgl$WebGL$Internal$Antialias;
var $elm_explorations$webgl$WebGL$Internal$Depth = function (a) {
	return {$: 1, a: a};
};
var $elm_explorations$webgl$WebGL$depth = $elm_explorations$webgl$WebGL$Internal$Depth;
var $elm_explorations$webgl$WebGL$toHtmlWith = F3(
	function (options, attributes, entities) {
		return A3(_WebGL_toHtml, options, attributes, entities);
	});
var $elm_explorations$webgl$WebGL$toHtml = $elm_explorations$webgl$WebGL$toHtmlWith(
	_List_fromArray(
		[
			$elm_explorations$webgl$WebGL$alpha(true),
			$elm_explorations$webgl$WebGL$antialias,
			$elm_explorations$webgl$WebGL$depth(1)
		]));
var $author$project$View3d$vertexShader = {
	src: '\n        attribute vec2 mapCoordinates;\n        attribute vec2 position;\n        uniform mat4 modelViewProjection;\n        uniform sampler2D texture;\n        uniform float scale;\n        varying vec3 vcolor;\n        varying vec3 vnormal;\n        void main () {\n            vec4 tex = texture2D(texture, mapCoordinates);\n            float nx = 2.0 * tex.x - 1.0;\n            float ny = 2.0 * tex.y - 1.0;\n            float nz = 2.0 * tex.z - 1.0;\n            vnormal = vec3(nx, ny, nz);\n            vcolor = vec3(position, 0);\n            gl_Position = modelViewProjection * vec4(position, -tex.w * scale, 1.0);\n        }\n    ',
	attributes: {mapCoordinates: 'fM', position: 'gg'},
	uniforms: {modelViewProjection: 'fX', scale: 'co', texture: 'ds'}
};
var $author$project$View3d$view = function (model) {
	switch (model.$) {
		case 0:
			return A2(
				$elm$html$Html$div,
				_List_Nil,
				_List_fromArray(
					[
						A2(
						$elm$html$Html$button,
						_List_fromArray(
							[
								$elm$html$Html$Events$onClick($author$project$View3d$ClickedSelectImageButton)
							]),
						_List_fromArray(
							[
								$elm$html$Html$text('Select a PNG image containing normals and depth')
							]))
					]));
		case 1:
			return $elm$html$Html$text('Loading texture ...');
		case 2:
			var e = model.a;
			return $elm$html$Html$text(
				'X: An error occurred when loading texture -> ' + function () {
					if (e.$ === 1) {
						return 'Sizeerror';
					} else {
						return 'Loaderror';
					}
				}());
		default:
			var depthMap = model.a.dJ;
			var mesh = model.a.d3;
			var camera = model.a.aT;
			var lighting = model.a.aB;
			var depthScale = model.a.cW;
			return A2(
				$elm$html$Html$div,
				_List_Nil,
				_List_fromArray(
					[
						A2(
						$elm$html$Html$button,
						_List_fromArray(
							[
								$elm$html$Html$Events$onClick($author$project$View3d$ClickedSelectImageButton)
							]),
						_List_fromArray(
							[
								$elm$html$Html$text('Select a PNG image containing normals and depth')
							])),
						$author$project$View3d$lightControls(lighting),
						A2(
						$elm_explorations$webgl$WebGL$toHtml,
						_List_fromArray(
							[
								$elm$html$Html$Attributes$width(800),
								$elm$html$Html$Attributes$height(800),
								A2($elm$html$Html$Attributes$style, 'display', 'block'),
								$mpizenberg$elm_pointer_events$Html$Events$Extra$Wheel$onWheel($author$project$View3d$chooseZoom),
								$mpizenberg$elm_pointer_events$Html$Events$Extra$Mouse$onDown($author$project$View3d$MouseDown)
							]),
						_List_fromArray(
							[
								A4(
								$elm_explorations$webgl$WebGL$entity,
								$author$project$View3d$vertexShader,
								$author$project$View3d$fragmentShader,
								mesh,
								{
									e$: $author$project$View3d$directionalLight(lighting),
									fX: $author$project$View3d$modelViewProjection(camera),
									co: depthScale,
									ds: depthMap
								})
							]))
					]));
	}
};
var $author$project$Main$viewNMap = function (model) {
	var nMapPNG = model.ak;
	var hMapPNG = model.aZ;
	var nMapViewer = model.aC;
	var notSeenLogs = model.U;
	var model3d = model.bT;
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
							$author$project$Main$NavigationMsg(0))),
						A2(
						$author$project$Main$headerTab,
						'Config',
						$elm$core$Maybe$Just(
							$author$project$Main$NavigationMsg(1))),
						A2($author$project$Main$nMapHeaderTab, $elm$core$Maybe$Nothing, nMapPNG),
						A2(
						$author$project$Main$hMapHeaderTab,
						$elm$core$Maybe$Just(
							$author$project$Main$NavigationMsg(3)),
						hMapPNG),
						A2(
						$author$project$Main$logsHeaderTab,
						$elm$core$Maybe$Just(
							$author$project$Main$NavigationMsg(4)),
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
				A2(
				$mdgriffith$elm_ui$Element$row,
				_List_Nil,
				$elm$core$List$singleton(
					A2(
						$mdgriffith$elm_ui$Element$map,
						function (msg) {
							return $author$project$Main$Msg3d(msg);
						},
						$mdgriffith$elm_ui$Element$html(
							$author$project$View3d$view(model3d)))))
			]));
};
var $author$project$Main$viewElmUI = function (model) {
	var _v0 = model.r;
	switch (_v0.$) {
		case 0:
			var draggingState = _v0.a;
			return A3($author$project$Main$viewHome, draggingState, model.ch, model.c9);
		case 1:
			var loadData = _v0.a;
			return $author$project$Main$viewLoading(loadData);
		case 2:
			return $author$project$Main$viewLoadingError(model);
		case 3:
			var images = _v0.a.S;
			return A2($author$project$Main$viewImgs, model, images);
		case 4:
			return $author$project$Main$viewConfig(model);
		case 5:
			return $author$project$Main$viewNMap(model);
		case 6:
			return $author$project$Main$viewHMap(model);
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
	{h9: $author$project$Main$init, jc: $author$project$Main$subscriptions, jB: $author$project$Main$update, jF: $author$project$Main$view});
_Platform_export({'Main':{'init':$author$project$Main$main(
	A2(
		$elm$json$Json$Decode$andThen,
		function (width) {
			return A2(
				$elm$json$Json$Decode$andThen,
				function (height) {
					return $elm$json$Json$Decode$succeed(
						{dO: height, eB: width});
				},
				A2($elm$json$Json$Decode$field, 'height', $elm$json$Json$Decode$float));
		},
		A2($elm$json$Json$Decode$field, 'width', $elm$json$Json$Decode$float)))(0)}});}(this));