const countryContainer = document.getElementById("country-container");
const bttn = document.getElementById("search-button");
const clearButton = document.getElementById("clear-button");
const inputValue = document.getElementById("search-country");
const countryModal = document.getElementById("country-modal");
const closeCountryModal = document.getElementById("close-country-modal");
const modalFlag = document.getElementById("modal-flag");
const modalCountryName = document.getElementById("modal-country-name");
const modalRegion = document.getElementById("modal-region");
const modalSubregion = document.getElementById("modal-subregion");
const modalNativeName = document.getElementById("modal-native-name");
const modalDemonym = document.getElementById("modal-demonym");
const modalArea = document.getElementById("modal-area");
const modalDensity = document.getElementById("modal-density");
const modalTimezone = document.getElementById("modal-timezone");
const modalLanguage = document.getElementById("modal-language");

closeCountryModal.addEventListener("click", function(){
    countryModal.style.display = "none";
})


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
            card.addEventListener("click", function(){
                modalCountryName.textContent = data[i].name;
                modalFlag.src = data[i].flags.png;
                modalRegion.textContent = `Region: ${data[i].region  || "Not Available"}`;
                modalSubregion.textContent = `Subregion: ${data[i].subregion || "Not Available"}`;
                modalNativeName.textContent = `Native Name: ${data[i].nativeName || "Not Available"}`;
                modalDemonym.textContent  = `Demonym: ${data[i].demonym || "Not Available"}`;
                modalArea.textContent = `Area: ${data[i].area || "Not Available"} km²`;
                modalDensity.textContent = `Population Density: ${data[i].populationDensity || "Not Available"} people/km²`;
                modalTimezone.textContent = `Timezone: ${data[i].timezones?.join(", ") || "Not Available"}`;
                modalLanguage.textContent = `Languages: ${data[i].languages.map(language => language.name).join(",")}`;
                countryModal.style.display = "block";
            })

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
            console.log(data[i])

        };

      

    }catch(error){
       const errorMessage = document.createElement("p")
       errorMessage.textContent = "Country not found. Please try another search."
       countryContainer.appendChild(errorMessage)
       console.log(error)
    }
});

clearButton.addEventListener("click", function(){
    countryContainer.innerHTML = "";
})