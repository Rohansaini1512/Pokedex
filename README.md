# Pokedex

A simple Pokedex application built with React, Axios, custom hooks, and debounce. This application allows users to search for Pokémon by name and view detailed information about each Pokémon.

## Features

- **Search Pokémon**: Search for Pokémon by name with debounced input to minimize API calls.
- **Pokémon Details**: View detailed information about each Pokémon, including stats, abilities, and more.
- **Custom Hooks**: Utilize custom hooks for fetching data and managing state.

## Demo

https://pokedex-two-teal.vercel.app/

## Technologies Used

- **React**: JavaScript library for building user interfaces
- **Axios**: Promise-based HTTP client for making API requests
- **Custom Hooks**: Reusable hooks for managing state and side effects
- **Debounce**: Technique to limit the rate of API calls during user input

## Getting Started

### Prerequisites


- npm

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/Rohansaini1512/Pokedex.git
    ```
2. Navigate to the project directory:
    ```bash
    cd pokedex
    ```
3. Install the dependencies:
    ```bash
    npm install
    ```
   

### Running the Application

1. Start the development server:
    ```bash
    npm run dev
    ```
  
2. Open your browser and go to [http://localhost:5173](http://localhost:5173) to view the application.

## Usage

1. Type the name of a Pokémon in the search bar.
2. The input is debounced to minimize API calls, and after a short delay, a list of matching Pokémon will be displayed.
3. Click on a Pokémon from the list to view detailed information.

