async function fetchData() {
    const url = 'https://quotes15.p.rapidapi.com/quotes/random/?language_code=en';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key':  '',  // [Replace your rapid API key here in the string]
            'X-RapidAPI-Host': ''   // [Replace your rapid API host address here in the string]
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json(); 
        const content = result.content; 

        const quoteContentElement = document.getElementById("quoteContent");
        quoteContentElement.textContent = content;
    } catch (error) {
        console.error(error);
    }
}

fetchData()