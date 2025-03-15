# Marvelapp

Esta es la solución y el proceso de el desafio 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Requirements](#requirements)
- [Install](#install)
- [Deployment](#deployment)



## Overview

### The challenge

Users should be able to:

- See all countries from the API on the homepage
- Search for a country using an `input` field
- Filter countries by region
- Click on a country to see more detailed information on a separate page
- Click through to the border countries on the detail page
- Toggle the color scheme between light and dark mode

### Screenshot


### Links

- Solution URL: [Add solution URL here](https://www.frontendmentor.io/solutions/rest-countries-api-with-color-theme-switcher-d1mEtcU-IT)
- Live Site URL: [Add live site URL here](https://rineliniguezsosa.github.io/appcountries/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- [React](https://reactjs.org/) - JS library


### What I learned
### Notes

El hook **useLocation** de React Router se usa para obtener información sobre la URL actual, incluyendo la ruta, query params y estado de navegación.

```tsx
import { useLocation } from "react-router-dom";

const MyComponent = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  console.log(queryParams.get("category")); // "electronics"
  
  return <p>Categoría: {queryParams.get("category")}</p>;
};
```

[Documentación del Data table](https://mui.com/material-ui/react-table/)


### Continued development

- full stack technologies

### Useful resources

- [Material UI](https://mui.com/material-ui/all-components/) -This resource helped me for the components of the appcountries
- [Tailwindcss](https://tailwindcss.com/) - This resource helped me for the css of the components, drakmode and for the general style


## Author

- Rinel iñiguez sosa


## Requirements 

- [Visual Studio Code](https://code.visualstudio.com/) (or any other code editor of your choice)
- [Node.js](https://nodejs.org/)
- npm (version 6 or higher) - This comes with Node.js, but make sure you have the latest version by running `npm install -g npm`.

## Install

Follow these steps to download and run the project locally

1. **Clone this repository:**

  Open your terminal and run the following command:

   ```bash
   git clone https://github.com/rineliniguezsosa/Marvelapp.git
   ```

2.- **Navigate to the project directory:**

```bash
cd marvelapp
```

3.-**Open the project in Visual Studio Code:**

```bash
code .
```

4.-**Install the dependencies:**

```bash
npm install
````

## Deployment

Running the Development Server

To start the development server and see the application in action, run:

```bash
npm run dev
```