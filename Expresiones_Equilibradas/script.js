// script.js
function checkBalance() {
    const expression = document.getElementById('expression').value;
    const stack = [];
    const pairs = {
        '(': ')',
        '[': ']',
        '{': '}'
    };

    for (let char of expression) {
        if (char in pairs) {
            stack.push(char);
        } else if (char === ')' || char === ']' || char === '}') {
            if (stack.length === 0) {
                updateResult(false);
                return;
            }
            const lastOpen = stack.pop();
            if (char !== pairs[lastOpen]) {
                updateResult(false);
                return;
            }
        }
    }

    updateResult(stack.length === 0);
}

function updateResult(isBalanced) {
    const result = document.getElementById('result');
    if (isBalanced) {
        result.textContent = "La expresión está equilibrada.";
        result.style.color = 'green';
    } else {
        result.textContent = "La expresión no está equilibrada.";
        result.style.color = 'red';
    }
}

function loadExample(example) {
    document.getElementById('expression').value = example;
    checkBalance();
}
