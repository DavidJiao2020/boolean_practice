function bin(n) {
    ans = "";
    if (n == 0) {
        return 0;
    }
    while (n > 0) {
        if (n % 2 == 1) {
            ans = "1" + ans;
        } else {
            ans = "0" + ans;
        }
        n = (n - n % 2) / 2;
    }
    return ans;
}

function rand(n) {
    return Math.floor(Math.random() * n);
}
function brand(n) {
    return bin(rand(n));
}
function par(a) {
    return '(' + a + ')';
}
function not(a) {
    return '~' + a; // par for clarity
}
function and(a, b) {
    return a + '•' + b;
}
function or(a, b) {
    return a + '+' + b;
}
function f1(a, total_chance=20, chance_parentheses=1, chance_not=3) {
    let seed = rand(total_chance);
    if (seed < chance_not) {
        a = not(a);
    } else if (seed >= total_chance - chance_parentheses) {
        a = par(a);
    } else {
        //a is still a
    }
    return a;
}

function f2(a, b) {
    let chance = rand(2);
    if (chance == 1) {
        return and(a, b);
    } else {
        return or(a, b);
    }
}

function gen(n, m) {
    // n = number of terms, m = range from 0 to m-1 (decimal)
    if (n == 1) {
        return f1(brand(m), 20, 0, 3);
    }
    if (n % 2 == 0) {
        return f1(f2(f1(gen(n / 2, m)), f1(gen(n / 2, m))));
    } else {
        return f1(f2(f1(gen((n - 1) / 2, m)), f1(gen((n + 1) / 2, m))));
    }
}
