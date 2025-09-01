function parse(a) {
    ans = "";
    for (const char of a) {
        if (char == '•') {
            ans += '*';
        } else if (char == '~') {
            ans += '!';
        } else {
            ans += char;
        }
    }
    return ans;
}

function solve(a) {
    return eval(parse(a));
}

// WARNING: this version is very primitive, and also uses eval
// (anything besides 0s and 1s may not work)