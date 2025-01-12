Financial Data Filtering App

This is a React application that allows users to view and filter the annual income statement of Apple Inc. (AAPL) from the Financial Modeling Prep API. The app supports filtering by date range, revenue, and net income. Additionally, it allows users to sort the data by specific fields such as revenue, net income, and date.

Features

Dynamic Data Fetching: The app fetches Apple Inc.'s financial data from the Financial Modeling Prep API.

Filtering: Filter the data by:

Date range (Start and End Date).

Minimum and Maximum Revenue.

Minimum and Maximum Net Income.

Sorting: 
Click on column headers to sort the data by Date, Revenue, Net Income, Gross Profit, EPS, and Operating Income.

Responsive UI: The application is designed with Tailwind CSS for a clean and responsive layout.

Tech Stack

React: JavaScript library for building the user interface.

Axios: Promise-based HTTP client for making API requests.

Tailwind CSS: A utility-first CSS framework for building custom designs quickly.

Setup Instructions

1. Clone the Repository

bash

Copy code

git clone (https://github.com/sanjeev7108/Financial_data_filtering_app.git)

2. Install Dependencies

Navigate to the project folder and install the required dependencies.

bash

Copy code

cd Data_filtering_app

npm install

3. Set Up Your API Key

To get data from the Financial Modeling Prep API, you need to replace the API key in the code.

Go to the src/App.jsx file.

Replace OM6BMSBb2JM9GXd8GeHXhke0ocxGj0E0 in the API_URL variable with your actual API key from Financial Modeling Prep.

4. Start the Development Server

After installing dependencies and configuring the API key, start the development server.

bash

Copy code

npm start

The app will open in your default browser at http://localhost:3000.

Usage

The app displays a table with Apple Inc.'s financial data (annual income statement).

You can use the filters at the top of the page to narrow down the data based on:

Start Date and End Date.

Minimum and Maximum Revenue.

Minimum and Maximum Net Income.

Clicking on a column header (Date, Revenue, Net Income, etc.) will sort the data in ascending or descending order based on that column.

Contributing
Fork the repository.
Create a new branch (git checkout -b feature-branch).
Make your changes and commit them (git commit -am 'Add new feature').
Push to the branch (git push origin feature-branch).
Open a pull request.
