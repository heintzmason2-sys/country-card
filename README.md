# Country Card

An interactive country search application built with JavaScript that uses an external REST API to retrieve and display detailed country information.

## Live Demo

[View Live Demo](https://effulgent-beijinho-13a8ea.netlify.app)

## Features

- Search for countries by name
- Display multiple matching countries
- Show country information in interactive cards
- View additional details in an interactive modal
- Display information including:
  - Capital
  - Population
  - Region
  - Subregion
  - Languages
  - Time zones
  - Currency
  - Area
  - Population density
  - Native name
  - Demonym
- Handle unsuccessful searches with error messages
- Provide fallback values when certain information is unavailable

## Technologies

- JavaScript
- HTML
- CSS
- REST API
- Fetch API
- Async/Await

## How It Works

The application sends a request to the countries.dev REST API using the country name entered by the user.

The returned JSON data is processed with JavaScript and dynamically displayed as country cards.

Selecting a country opens a detailed modal containing additional information about the selected country.

The application also uses error handling and fallback values to handle unsuccessful searches and missing information.

## Getting Started

### Clone the Repository

```bash
git clone https://github.com/heintzmason2-sys/country-card.git
