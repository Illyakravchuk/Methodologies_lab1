const fs = require("fs");
const path = require("path");

const filePath = process.argv[2];

if (filePath) {
    nonInteractiveModeFunc();
} else {
    interactiveModeFunc();
}

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

function interactiveModeFunc() {
    const abc = ["a = ", "b = ", "c = "];
    const params = [];
    let i = 0;
    ask(i);
    process.stdin.on("data", (data) => {
        if (params.length < abc.length) {
            if (!isNum(data)) {
                console.error(`Error. Expected a valid real number, got ${data.toString().trim()} instead `);
                ask(i);
            } else if (data.toString().trim() == 0 && params.length == 0) {
                console.error(`Error. a cannot be 0`);
                ask(i);
            } else {
                params.push(+data.toString().trim());
                i++;
                if (params.length < abc.length) {
                    ask(i);
                } else {
                    solve(...params);
                    process.exit();
                }
            }
        }
    });

    function ask(i) {
        process.stdout.write(abc[i]);
    }
}

function isNum(value) {
    const numeric = parseFloat(value.toString().trim());
    if (isNaN(numeric)) {
        return false;
    }
    return true;
}

async function nonInteractiveModeFunc() {
    try {
        const data = await fs.promises.readFile(
            path.resolve(__dirname, filePath),
            "utf-8"
        );
        if (!validateDataFormat(data)) {
            console.error("invalid file format");
            return;
        }
        const [a, b, c] = data.split(" ").map((elem) => +elem);
        if (a === 0) {
            console.error("Error. a cannot be 0");
            return;
        }
        solve(a, b, c);
    } catch (error) {
        console.error(`file ${filePath} does not exist`);
    }
}

function validateDataFormat(data) {
    const format = /^-?\d(.\d+)?\s-?\d(.\d+)?\s-?\d(.\d+)?$/;
    return format.test(data);
}