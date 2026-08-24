const countryContainer = document.getElementById("country-container");
const bttn = document.getElementById("search-button");
const clearButton = document.getElementById("clear-button");
const inputValue = document.getElementById("search-country");


bttn.addEventListener("click", async function(){
    countryContainer.innerHTML = "";
    try{
        const response = await fetch(`https://countries.dev/name/${encodeURIComponent(inputValue.value)}`)
        if(!response.ok){
            throw new Error("Country Not Found!")
        }
        const data = await response.json();

        
        
        for(let i = 0; i < data.length && i < 3; i++){
            const card = document.createElement("div")
            card.classList.add("card")

            const name = document.createElement("h1");
            name.textContent = `Country Name: ${data[i].name}`;

            const capital = document.createElement("p")
            capital.textContent = `Capital: ${data[i].capital || "Not Available"}`

    

            const currency = document.createElement("p")
            const currencyData = data[i].currencies?.[0];

            currency.textContent = `Currency: ${currencyData?.name || "Not Available"}`;

            const currencySymbol = document.createElement("p")
            currencySymbol.textContent = `Currency Symbol: ${currencyData?.symbol || "Not Available"}`;

            const population = document.createElement("p")
            population.textContent = `Population: ${data[i].population}`

            const flag = document.createElement("img")
            flag.src = data[i].flags.png;

            
            
            card.appendChild(flag);
            card.appendChild(name);
            card.appendChild(capital);
            card.appendChild(currency);
            card.appendChild(currencySymbol);
            card.appendChild(population);

            countryContainer.appendChild(card)

        };

      

    }catch(error){
       console.log(error)
    }
});

clearButton.addEventListener("click", function(){
    countryContainer.innerHTML = "";
})