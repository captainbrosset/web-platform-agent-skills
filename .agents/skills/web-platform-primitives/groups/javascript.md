# JavaScript

https://tc39.es/ecma262/ (any edition)

## See also

This group of web platform features also includes the following sub-categories, which might be relevant to your query:

- [Collections](collections.md)
- [Internationalization](internationalization.md)
- [Iterators](iterators.md)
- [JavaScript modules](javascript-modules.md)
- [JSON](json.md)
- [Primitive types](primitive-types.md)
- [Promises](promises.md)
- [Regular expressions](regular-expressions.md)

## JavaScript features

### __proto__

The `__proto__` property of objects partially exposes the prototype of an object.

**Spec:**
- <https://tc39.es/ecma262/multipage/fundamental-objects.html#sec-object.prototype.__proto__>

**Browser support:**
- Chrome: 1
- Chrome Android: 18
- Edge: 12
- Firefox: 1
- Firefox for Android: 4
- Safari: 3
- Safari on iOS: 1

**MDN:**
- [Object.prototype.__proto__](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/proto)

### Accessor methods

The `__defineGetter__()` and `__defineSetter__()` methods of objects bind a function to a property, which is called on setting or reading the property.

**Spec:**
- <https://tc39.es/ecma262/multipage/fundamental-objects.html#sec-object.prototype-legacy-accessor-methods>

**Browser support:**
- Chrome: 1
- Chrome Android: 18
- Edge: 12
- Firefox: 1
- Firefox for Android: 4
- Safari: 3
- Safari on iOS: 1

**MDN:**
- [Object.prototype.__defineGetter__()](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineGetter__)
- [Object.prototype.__defineSetter__()](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineSetter__)
- [Object.prototype.__lookupGetter__()](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupGetter__)
- [Object.prototype.__lookupSetter__()](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupSetter__)

### arguments.callee

The `callee` property of the `arguments` variable in a non-strict function body's local scope is the function that `arguments` belongs to.

**Spec:**
- <https://tc39.es/ecma262/multipage/ordinary-and-exotic-objects-behaviours.html#sec-arguments-exotic-objects>

**Browser support:**
- Chrome: 1
- Chrome Android: 18
- Edge: 12
- Firefox: 1
- Firefox for Android: 4
- Safari: 1
- Safari on iOS: 1

**MDN:**
- [arguments.callee](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Functions/arguments/callee)

### Async functions

The `async` and `await` keywords allow you to use the asynchronous, promise-based behavior of a function without using promise chains.

**Spec:**
- <https://tc39.es/ecma262/multipage/ecmascript-language-functions-and-classes.html#sec-async-function-definitions>

**Browser support:**
- Chrome: 55
- Chrome Android: 55
- Edge: 15
- Firefox: 52
- Firefox for Android: 52
- Safari: 10.1
- Safari on iOS: 10.3

**MDN:**
- [async function](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/async_function)

### Async generators

Async generator functions (`async function*`) create iterators that return multiple promises, one after another, on-demand.

**Spec:**
- <https://tc39.es/ecma262/multipage/control-abstraction-objects.html#sec-asyncgeneratorfunction-objects>
- <https://tc39.es/ecma262/multipage/control-abstraction-objects.html#sec-asyncgenerator-objects>

**Browser support:**
- Chrome: 63
- Chrome Android: 63
- Edge: 79
- Firefox: 57
- Firefox for Android: 57
- Safari: 12
- Safari on iOS: 12

**MDN:**
- [async function*](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/async_function*)

### Atomics.pause()

The `Atomics.pause()` static method gives a hint to the CPU that the code calling the method is in a short-duration wait for shared memory, known as spinning or a spinlock.

**Spec:**
- <https://tc39.es/proposal-atomics-microwait/>

**Browser support:**
- Chrome: 133
- Chrome Android: 133
- Edge: 133
- Firefox: 137
- Firefox for Android: 137
- Safari: 18.4
- Safari on iOS: 18.4

**MDN:**
- [Atomics.pause()](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Atomics/pause)

### Atomics.waitAsync()

The `Atomics.waitAsync()` static method waits for a value in a shared memory location, providing a promise when the expected value is not yet in memory. The `waitAsync()` method is a non-blocking alternative to `Atomics.wait()`.

**Spec:**
- <https://tc39.es/ecma262/multipage/structured-data.html#sec-atomics.waitasync>

**Browser support:**
- Chrome: 90
- Chrome Android: 90
- Edge: 90
- Firefox: 145
- Firefox for Android: 145
- Safari: 16.4
- Safari on iOS: 16.4

**MDN:**
- [Atomics.waitAsync()](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Atomics/waitAsync)

### BigInt

The `BigInt` JavaScript type represents integers of any size, including integers too large for the primitive `Number` type.

**Spec:**
- <https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-bigint-objects>

**Browser support:**
- Chrome: 67
- Chrome Android: 67
- Edge: 79
- Firefox: 68
- Firefox for Android: 68
- Safari: 14
- Safari on iOS: 14

**MDN:**
- [BigInt](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/BigInt)

### BigInt64Array

The `BigInt64Array` and `BigUint64Array` typed arrays represent 64-bit integers, signed and unsigned respectively.

**Spec:**
- <https://tc39.es/ecma262/multipage/indexed-collections.html#sec-typedarray-objects>

**Browser support:**
- Chrome: 67
- Chrome Android: 67
- Edge: 79
- Firefox: 68
- Firefox for Android: 68
- Safari: 15
- Safari on iOS: 15

**MDN:**
- [BigInt64Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/BigInt64Array)

### Classes

Classes are an object-oriented syntax for JavaScript prototypes.

**Spec:**
- <https://tc39.es/ecma262/multipage/ecmascript-language-functions-and-classes.html#sec-class-definitions>

**Browser support:**
- Chrome: 42
- Chrome Android: 42
- Edge: 13
- Firefox: 45
- Firefox for Android: 45
- Safari: 9
- Safari on iOS: 9

**MDN:**
- [Classes](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Classes)

### Destructuring

The destructuring assignment syntax is a JavaScript expression that unpacks values from arrays, or properties from objects, into distinct variables.

**Spec:**
- <https://tc39.es/ecma262/multipage/ecmascript-language-expressions.html#sec-destructuring-assignment>
- <https://tc39.es/ecma262/multipage/ecmascript-language-statements-and-declarations.html#sec-destructuring-binding-patterns>

**Browser support:**
- Chrome: 60
- Chrome Android: 60
- Edge: 79
- Firefox: 55
- Firefox for Android: 55
- Safari: 11.1
- Safari on iOS: 11.3

**MDN:**
- [Destructuring](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators/Destructuring)

### Error cause

The `cause` property of errors records the specific original cause of the error, particularly for errors that have been re-thrown.

**Spec:**
- <https://tc39.es/ecma262/multipage/fundamental-objects.html#sec-installerrorcause>

**Browser support:**
- Chrome: 93
- Chrome Android: 93
- Edge: 93
- Firefox: 91
- Firefox for Android: 91
- Safari: 15
- Safari on iOS: 15

**MDN:**
- [Error: cause](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Error/cause)

### Error.isError()

The `Error.isError()` static method checks whether a value is an `Error` object.

**Spec:**
- <https://tc39.es/ecma262/multipage/fundamental-objects.html#sec-error.iserror>

**Browser support:**
- Chrome: 134
- Chrome Android: 134
- Edge: 134
- Firefox: 138
- Firefox for Android: 138
- Safari: —
- Safari on iOS: —

**MDN:**
- [Error.isError()](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Error/isError)

### escape() and unescape()

The `escape()` and `unescape()` built-in Javascript methods encode and unencode strings using percent encoding, where certain characters are replaced by hexadecimal escape sequences.

**Spec:**
- <https://tc39.es/ecma262/multipage/additional-ecmascript-features-for-web-browsers.html#sec-escape-string>

**Browser support:**
- Chrome: 1
- Chrome Android: 18
- Edge: 12
- Firefox: 1
- Firefox for Android: 4
- Safari: 1
- Safari on iOS: 1

**MDN:**
- [escape()](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/escape)
- [unescape()](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/unescape)

### Exponentiation operator

The exponentiation (`**`) operator returns the result of raising the first operand to the power of the second operand.

**Spec:**
- <https://tc39.es/ecma262/multipage/ecmascript-language-expressions.html#sec-exp-operator>

**Browser support:**
- Chrome: 52
- Chrome Android: 52
- Edge: 14
- Firefox: 52
- Firefox for Android: 52
- Safari: 10.1
- Safari on iOS: 10.3

**MDN:**
- [Exponentiation (**)](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators/Exponentiation)
- [Exponentiation assignment (**=)](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators/Exponentiation_assignment)

### Function caller and arguments

The `caller` and `arguments` properties of a non-strict mode `Function` object are the function that called it and the arguments it was called with. Not to be confused with the `arguments` variable in a function body's local scope.

**Spec:**
- <https://tc39.es/ecma262/multipage/error-handling-and-language-extensions.html#sec-forbidden-extensions>

**Browser support:**
- Chrome: 1
- Chrome Android: 18
- Edge: 12
- Firefox: 1
- Firefox for Android: 4
- Safari: 3
- Safari on iOS: 1

**MDN:**
- [Function.prototype.caller](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Function/caller)
- [Function.prototype.arguments](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Function/arguments)

### Functions

Functions are series of statements that can be called and return a value. The `function` keyword (as in `function () { }`) and arrow (`=>`) expression create functions. The JavaScript functions protocol includes default and rest parameters and binding to `this`.

**Spec:**
- <https://tc39.es/ecma262/multipage/ecmascript-language-functions-and-classes.html#sec-ecmascript-language-functions-and-classes>
- <https://tc39.es/ecma262/multipage/fundamental-objects.html#sec-function-objects>

**Browser support:**
- Chrome: 1
- Chrome Android: 18
- Edge: 12
- Firefox: 1
- Firefox for Android: 4
- Safari: 1
- Safari on iOS: 1

**MDN:**
- [Functions](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Functions)

### Generators

Generator functions (`function*`) create iterators that return multiple values, one after another, on-demand.

**Spec:**
- <https://tc39.es/ecma262/multipage/control-abstraction-objects.html#sec-generator-objects>
- <https://tc39.es/ecma262/multipage/control-abstraction-objects.html#sec-generatorfunction-objects>

**Browser support:**
- Chrome: 39
- Chrome Android: 39
- Edge: 13
- Firefox: 26
- Firefox for Android: 26
- Safari: 10
- Safari on iOS: 10

**MDN:**
- [function*](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/function*)

### getYear() and setYear()

The `getYear()` and `setYear()` methods of `Date` objects get and set the year as an offset to 1900.

**Spec:**
- <https://tc39.es/ecma262/multipage/additional-ecmascript-features-for-web-browsers.html#sec-date.prototype.getyear>

**Browser support:**
- Chrome: 1
- Chrome Android: 18
- Edge: 12
- Firefox: 1
- Firefox for Android: 4
- Safari: 1
- Safari on iOS: 1

**MDN:**
- [Date.prototype.getYear()](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date/getYear)
- [Date.prototype.setYear()](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date/setYear)

### globalThis

The `globalThis` property accesses the global `this` value (and hence the global object itself) across environments.

**Spec:**
- <https://tc39.es/ecma262/multipage/global-object.html#sec-globalthis>

**Browser support:**
- Chrome: 71
- Chrome Android: 71
- Edge: 79
- Firefox: 65
- Firefox for Android: 65
- Safari: 12.1
- Safari on iOS: 12.2

**MDN:**
- [globalThis](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/globalThis)

### Hashbang comments

The `#!` comment at the absolute start of a script or module is treated as a normal comment and is ignored by the JavaScript engine.

**Spec:**
- <https://tc39.es/ecma262/multipage/ecmascript-language-lexical-grammar.html#sec-hashbang>

**Browser support:**
- Chrome: 74
- Chrome Android: 74
- Edge: 79
- Firefox: 67
- Firefox for Android: 67
- Safari: 13.1
- Safari on iOS: 13.4

**MDN:**
- [Lexical grammar](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Lexical_grammar#Hashbang_comments)

### HTML wrapper methods

JavaScript built-in methods such as, `String.bold()` and `String.italics()`, wrap strings in (often historic) HTML.

**Spec:**
- <https://tc39.es/ecma262/multipage/additional-ecmascript-features-for-web-browsers.html#sec-additional-properties-of-the-string.prototype-object>

**Browser support:**
- Chrome: 1
- Chrome Android: 18
- Edge: 12
- Firefox: 1
- Firefox for Android: 4
- Safari: 1
- Safari on iOS: 1

**MDN:**
- [String.prototype.anchor()](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String/anchor)
- [String.prototype.big()](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String/big)
- [String.prototype.blink()](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String/blink)
- [String.prototype.bold()](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String/bold)
- [String.prototype.fixed()](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String/fixed)
- [String.prototype.fontcolor()](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String/fontcolor)
- [String.prototype.fontsize()](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String/fontsize)
- [String.prototype.italics()](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String/italics)
- [String.prototype.link()](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String/link)
- [String.prototype.small()](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String/small)
- [String.prototype.strike()](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String/strike)
- [String.prototype.sub()](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String/sub)
- [String.prototype.substr()](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String/substr)
- [String.prototype.sup()](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String/sup)

### JavaScript (initial core language support)

JavaScript is a programming language that runs in browsers, usually through the `<script>` element. JavaScript has changed over many years. This feature represents the oldest language features, such as built-in objects, statements, and operators. Also known as ECMAScript.

**Spec:**
- <https://tc39.es/ecma262/multipage/#sec-intro>

**Browser support:**
- Chrome: 5
- Chrome Android: 18
- Edge: 12
- Firefox: 1
- Firefox for Android: 4
- Safari: 5
- Safari on iOS: 4.2

**MDN:**
- [Dynamic scripting with JavaScript](https://developer.mozilla.org/docs/Learn_web_development/Core/Scripting)

### Let and const

The `let` and `const` declarations define block-scoped variables.

**Spec:**
- <https://tc39.es/ecma262/multipage/ecmascript-language-statements-and-declarations.html#sec-let-and-const-declarations>

**Browser support:**
- Chrome: 49
- Chrome Android: 49
- Edge: 14
- Firefox: 44
- Firefox for Android: 44
- Safari: 10
- Safari on iOS: 10

**MDN:**
- [let](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/let)
- [const](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/const)

### Logical assignments

The logical AND assignment (`&#x26;&#x26;=`) and the logical OR assignment (`||=`) operators short-circuit the respective binary logical operators.

**Spec:**
- <https://tc39.es/ecma262/multipage/ecmascript-language-expressions.html#sec-assignment-operators>

**Browser support:**
- Chrome: 85
- Chrome Android: 85
- Edge: 85
- Firefox: 79
- Firefox for Android: 79
- Safari: 14
- Safari on iOS: 14

**MDN:**
- [Logical AND assignment (&&=)](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators/Logical_AND_assignment)
- [Logical OR assignment (||=)](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators/Logical_OR_assignment)

### Math.sumPrecise()

The `Math.sumPrecise()` static method returns the sum of an iterable of numbers. It avoids the precision loss of intermediate partial sums, as found using `reduce()` or a loop to add together an array of values.

**Spec:**
- <https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-math.sumprecise>

**Browser support:**
- Chrome: —
- Chrome Android: —
- Edge: —
- Firefox: 137
- Firefox for Android: 137
- Safari: 26.2
- Safari on iOS: 26.2

**MDN:**
- [Math.sumPrecise()](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Math/sumPrecise)

### Nullish coalescing

The nullish coalescing (`??`) and nullish coalescing assignment (`??=`) operators return (or assign) its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.

**Spec:**
- <https://tc39.es/ecma262/multipage/ecmascript-language-expressions.html#prod-CoalesceExpression>

**Browser support:**
- Chrome: 85
- Chrome Android: 85
- Edge: 85
- Firefox: 79
- Firefox for Android: 79
- Safari: 14
- Safari on iOS: 14

**MDN:**
- [Nullish coalescing operator (??)](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing)
- [Nullish coalescing assignment (??=)](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_assignment)

### Numeric separators

To improve readability for numeric literals, underscores (`_`) can be used as separators. For example, `1_050.95` is equivalent to `1050.95`.

**Spec:**
- <https://tc39.es/ecma262/multipage/ecmascript-language-lexical-grammar.html#prod-NumericLiteralSeparator>

**Browser support:**
- Chrome: 75
- Chrome Android: 75
- Edge: 79
- Firefox: 70
- Firefox for Android: 79
- Safari: 13
- Safari on iOS: 13

**MDN:**
- [Lexical grammar](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Lexical_grammar#numeric_separators)

### Object

Objects in JavaScript are collections of key-value pairs.

**Spec:**
- <https://tc39.es/ecma262/multipage/fundamental-objects.html#sec-object-objects>

**Browser support:**
- Chrome: 1
- Chrome Android: 18
- Edge: 12
- Firefox: 1
- Firefox for Android: 4
- Safari: 1
- Safari on iOS: 1

**MDN:**
- [Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)

### Object.hasOwn()

The `Object.hasOwn()` static method checks whether an object has a given property. It's a more robust alternative to the `Object.prototype.hasOwnProperty()` method.

**Spec:**
- <https://tc39.es/ecma262/multipage/fundamental-objects.html#sec-object.hasown>

**Browser support:**
- Chrome: 93
- Chrome Android: 93
- Edge: 93
- Firefox: 92
- Firefox for Android: 92
- Safari: 15.4
- Safari on iOS: 15.4

**MDN:**
- [Object.hasOwn()](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwn)

### Optional catch binding

Omit the the binding parameter of a `catch` clause when you don't need information about the exception in a `try ... catch` statement.

**Spec:**
- <https://tc39.es/ecma262/multipage/ecmascript-language-statements-and-declarations.html#sec-try-statement>

**Browser support:**
- Chrome: 66
- Chrome Android: 66
- Edge: 79
- Firefox: 58
- Firefox for Android: 58
- Safari: 11.1
- Safari on iOS: 11.3

**MDN:**
- [try...catch](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/try...catch#catch_binding)

### Proxy and Reflect

The `Proxy` and `Reflect` JavaScript built-ins intercept and define custom behavior for fundamental language operations (such as property lookup, assignment, enumeration, or function invocation).

**Spec:**
- <https://tc39.es/ecma262/multipage/reflection.html#sec-reflection>

**Browser support:**
- Chrome: 49
- Chrome Android: 49
- Edge: 12
- Firefox: 18
- Firefox for Android: 18
- Safari: 10
- Safari on iOS: 10

**MDN:**
- [Proxy](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Proxy)
- [Reflect](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Reflect)

### Resizable buffers

The `resize()` method of an `ArrayBuffer` and the `grow()` method of a `SharedArrayBuffer`, constructed with the `maxByteLength` option, changes the size of the buffer in place.

**Spec:**
- <https://tc39.es/ecma262/multipage/structured-data.html#sec-get-arraybuffer.prototype.resizable>
- <https://tc39.es/ecma262/multipage/structured-data.html#sec-get-sharedarraybuffer.prototype.growable>

**Browser support:**
- Chrome: 111
- Chrome Android: 111
- Edge: 111
- Firefox: 128
- Firefox for Android: 128
- Safari: 16.4
- Safari on iOS: 16.4

**MDN:**
- [ArrayBuffer.prototype.resize()](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer/resize)
- [SharedArrayBuffer.prototype.grow()](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/grow)

### SharedArrayBuffer and Atomics

The `SharedArrayBuffer` object represents bytes shared between multiple workers and the main thread. The `Atomics` object safely accesses `SharedArrayBuffer` data to make sure predictable values are read and written and that operations are not interrupted.

**Spec:**
- <https://tc39.es/ecma262/multipage/structured-data.html#sec-sharedarraybuffer-objects>
- <https://tc39.es/ecma262/multipage/structured-data.html#sec-atomics-object>

**Browser support:**
- Chrome: 68
- Chrome Android: 89
- Edge: 79
- Firefox: 79
- Firefox for Android: 79
- Safari: 15.2
- Safari on iOS: 15.2

**MDN:**
- [SharedArrayBuffer](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer)
- [Atomics](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Atomics)

### Spread syntax

The spread (`...`) syntax allows an iterable, such as an array or string, to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected.

**Spec:**
- <https://tc39.es/ecma262/multipage/ecmascript-language-expressions.html#prod-SpreadElement>

**Browser support:**
- Chrome: 60
- Chrome Android: 60
- Edge: 79
- Firefox: 55
- Firefox for Android: 55
- Safari: 11.1
- Safari on iOS: 11.3

**MDN:**
- [Spread syntax (...)](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators/Spread_syntax)

### Template literals

Template literals are literals delimited with backtick (`) characters, allowing for multi-line strings, string interpolation with embedded expressions, and special constructs called tagged templates.

**Spec:**
- <https://tc39.es/ecma262/multipage/ecmascript-language-expressions.html#sec-template-literals>

**Browser support:**
- Chrome: 62
- Chrome Android: 62
- Edge: 79
- Firefox: 53
- Firefox for Android: 53
- Safari: 11
- Safari on iOS: 11

**MDN:**
- [Template literals (Template strings)](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Template_literals)

### Temporal

The `Temporal` API allows you to work with dates, times, time zones, and durations. It is more powerful than the `Date` API.

**Spec:**
- <https://tc39.es/proposal-temporal/>

**Browser support:**
- Chrome: 144
- Chrome Android: 144
- Edge: 144
- Firefox: 139
- Firefox for Android: 139
- Safari: —
- Safari on iOS: —

**MDN:**
- [Temporal](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Temporal)

### toGMTString()

The `toGMTString()` method of `Date` objects is an alias to the `toUTCString()` method.

**Spec:**
- <https://tc39.es/ecma262/multipage/additional-ecmascript-features-for-web-browsers.html#sec-date.prototype.togmtstring>

**Browser support:**
- Chrome: 1
- Chrome Android: 18
- Edge: 12
- Firefox: 1
- Firefox for Android: 4
- Safari: 1
- Safari on iOS: 1

**MDN:**
- [Date.prototype.toUTCString()](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date/toUTCString)

### Top-level await

The `await` keyword, when used at the top level of a module (outside of an async function), delays parent module execution until after a promise fulfills.

**Spec:**
- <https://tc39.es/ecma262/multipage/ecmascript-language-functions-and-classes.html#sec-async-function-definitions>

**Browser support:**
- Chrome: 89
- Chrome Android: 89
- Edge: 89
- Firefox: 89
- Firefox for Android: 89
- Safari: —
- Safari on iOS: —

**MDN:**
- [await](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators/await#top_level_await)

### Transferable ArrayBuffer

The `transfer()` and `transferToFixedLength()` methods of `ArrayBuffer` move a buffer from one context to another (for example, to a worker).

**Spec:**
- <https://tc39.es/ecma262/multipage/structured-data.html#sec-arraybuffer.prototype.transfer>

**Browser support:**
- Chrome: 114
- Chrome Android: 114
- Edge: 114
- Firefox: 122
- Firefox for Android: 122
- Safari: 17.4
- Safari on iOS: 17.4

**MDN:**
- [ArrayBuffer.prototype.transfer()](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer/transfer)
- [ArrayBuffer.prototype.transferToFixedLength()](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer/transferToFixedLength)

### Unicode point escapes

Unicode point escapes (`\\u{}`) represent Unicode characters within strings.

**Spec:**
- <https://tc39.es/ecma262/multipage/ecmascript-language-lexical-grammar.html#prod-UnicodeEscapeSequence>

**Browser support:**
- Chrome: 44
- Chrome Android: 44
- Edge: 12
- Firefox: 40
- Firefox for Android: 40
- Safari: 9
- Safari on iOS: 9

**MDN:**
- [Lexical grammar](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Lexical_grammar#Unicode_code_point_escapes)

### Weak references

The `WeakRef` and `FinalizationRegistry` objects hold references to garbage-collectable objects without creating strong references that prevent their garbage collection.

**Spec:**
- <https://tc39.es/ecma262/multipage/managing-memory.html#sec-managing-memory>

**Browser support:**
- Chrome: 84
- Chrome Android: 84
- Edge: 84
- Firefox: 79
- Firefox for Android: 79
- Safari: 14.1
- Safari on iOS: 14.5

**MDN:**
- [WeakRef](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/WeakRef)
- [FinalizationRegistry](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/FinalizationRegistry)

### with

The `with` JavaScript statement adds a given object to the chain of scopes used to evaluate names.

**Spec:**
- <https://tc39.es/ecma262/multipage/ecmascript-language-statements-and-declarations.html#sec-with-statement>

**Browser support:**
- Chrome: 38
- Chrome Android: 38
- Edge: 12
- Firefox: 48
- Firefox for Android: 48
- Safari: 10
- Safari on iOS: 10

**MDN:**
- [with](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/with)
