function isKeyword(word) {
    const keywords = ["int", "char", "return", "if", "else", "for", "while"];
    return keywords.includes(word);
}

function isConstant(word) {
    return !isNaN(word);
}

function analyzeCode(input) {
    let numCharacters = 0;
    let numLiterals = 0;
    let numVariables = 0;
    let numConstants = 0;

    let words = input.split(/\s+/);
    
    words.forEach(word => {
        numCharacters += word.length;
        
        if (word.length === 1 && /^[a-zA-Z]$/.test(word)) {
            numLiterals++;
        } else if (isKeyword(word)) {
            // Skip keywords
        } else if (isConstant(word)) {
            numConstants++;
        } else {
            numVariables++;
        }
    });

    console.log("Number of characters: " + numCharacters);
    console.log("Number of literals: " + numLiterals);
    console.log("Number of variables: " + numVariables);
    console.log("Number of constants: " + numConstants);
}

// Example usage:
let codeInput = prompt("Enter your code:");
analyzeCode(codeInput);
