$_$wp(1);
var $_$wvd1 = $_$w(1, 0), commonCharacters = function (...rest) {
        $_$wf(1);
        let args = ($_$w(1, 1), rest);
        $_$w(1, 2), args = args.join('');
        $_$w(1, 3), args = args.split('');
        let hashCheck = ($_$w(1, 4), {});
        let returnArr = ($_$w(1, 5), []);
        for (let i = 0; $_$w(1, 6), i < args.length; i++) {
            $_$w(1, 7), hashCheck[args[i]] = hashCheck[args[i]] ? ($_$w(1, 8), hashCheck[args[i]] + 1) : ($_$w(1, 9), 1);
            if ($_$w(1, 10), hashCheck[args[i]] >= rest.length) {
                $_$w(1, 11), returnArr.push(args[i]);
            }
        }
        return $_$w(1, 12), returnArr.join('');
    };
$_$wpe(1);