function solve(a, b, c) {
    console.log(`Equation is: (${a}) x^2 + (${b}) x + (${c}) = 0`);
    const D = (b ** 2) - 4 * a * c //discriminant
    if (D < 0) {
        console.log("There are 0 roots");
        return
    } else if (D === 0) {
        const x1 = (-b) / (2 * a)
        console.log("There are 1 root");
        return console.log(`x1 = ${x1.toFixed(1)}`);
    } else {
        const x1 = (-b + Math.sqrt(D)) / (2 * a);
        const x2 = (-b - Math.sqrt(D)) / (2 * a);
        console.log("There are 2 roots");
        return console.log(`x1 = ${x1.toFixed(1)}\nx2 = ${x2.toFixed(1)}`);
    }
}