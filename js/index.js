



let lastIndex = -1;

function generateQuote() {
    var quotes = [
        " The only way to do great work is to love what you do. – Steve Jobs",
        " Success is not final, failure is not fatal: It is the courage to continue that counts. – Winston Churchill",
        "It does not matter how slowly you go as long as you do not stop. – Confucius",
        "Believe you can and you're halfway there. – Theodore Roosevelt",
        "Act as if what you do makes a difference. It does. – William James"
    ];
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * quotes.length);
    } while (randomIndex === lastIndex);

    lastIndex = randomIndex;
    document.getElementById("text").textContent = quotes[lastIndex];
}


