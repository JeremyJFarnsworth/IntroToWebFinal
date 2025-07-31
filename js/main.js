fetch("https://dummyjson.com/quotes/random")
    .then(response => response.json())
    .then(data => {
        document.getElementById("quote-text").textContent = `"${data.content}"`;
        document.getElementById("quote-author").textContent = `— ${data.author}`;
    })
    .catch(error => {
        document.getElementById("quote-text").textContent = "Couldn't load quote.";
        console.error("Error fetching quote:", error);
    });