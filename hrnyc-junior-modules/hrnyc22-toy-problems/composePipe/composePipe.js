'use strict';
$_$wp(1);
var $_$wvd1 = $_$w(1, 0), compose = function (...rest) {
        $_$wf(1);
        var args = ($_$w(1, 1), rest.reverse());
        var $_$wvd3 = $_$w(1, 2), recurse = (number, args) => {
                $_$wf(1);
                if ($_$w(1, 3), args.length > 1) {
                    var newNumber = ($_$w(1, 4), args[0](number));
                    $_$w(1, 5), args.shift();
                    return $_$w(1, 6), recurse(newNumber, args);
                } else {
                    return $_$w(1, 7), args[0](number);
                }
            };
        return $_$w(1, 8), function (number) {
            $_$wf(1);
            return $_$w(1, 9), recurse(number, args);
        };
    };
var $_$wvd11 = $_$w(1, 10), greet = function (name) {
        $_$wf(1);
        return $_$w(1, 11), 'hi: ' + name;
    };
var $_$wvd13 = $_$w(1, 12), exclaim = function (statement) {
        $_$wf(1);
        return $_$w(1, 13), statement.toUpperCase() + '!';
    };
var welcome = ($_$w(1, 14), compose(greet, exclaim));
$_$w(1, 15), $_$tracer.log(welcome('phillip'), 'welcome(\'phillip\')', 1, 15);
var $_$wvd17 = $_$w(1, 16), pipe = function (...rest) {
        $_$wf(1);
        var args = ($_$w(1, 17), rest);
        var $_$wvd19 = $_$w(1, 18), recurse = (number, args) => {
                $_$wf(1);
                if ($_$w(1, 19), args.length > 1) {
                    var newNumber = ($_$w(1, 20), args[0](number));
                    $_$w(1, 21), args.shift();
                    return $_$w(1, 22), recurse(newNumber, args);
                } else {
                    return $_$w(1, 23), args[0](number);
                }
            };
        return $_$w(1, 24), function (number) {
            $_$wf(1);
            return $_$w(1, 25), recurse(number, args);
        };
    };
var $_$wvd27 = $_$w(1, 26), add2 = function (number) {
        $_$wf(1);
        return $_$w(1, 27), number + 2;
    };
var $_$wvd29 = $_$w(1, 28), multiplyBy3 = function (number) {
        $_$wf(1);
        return $_$w(1, 29), number * 3;
    };
$_$w(1, 30), $_$tracer.log(pipe(add2, multiplyBy3)(5), 'pipe(add2, multiplyBy3)(5)', 1, 30);
$_$w(1, 31), $_$tracer.log(pipe(add2, multiplyBy3, multiplyBy3)(5), 'pipe(add2, multiplyBy3, multiplyBy3)(5)', 1, 31);
$_$wpe(1);