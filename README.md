# Paradise Nursery

Paradise Nursery is a React-based houseplant shopping application developed as part of the **IBM Developing Front-End Apps with React** course project.

The application allows users to browse houseplants by category, add plants to a shopping cart and manage their selected items.

## Features

- Landing page introducing Paradise Nursery
- Houseplants organized into multiple categories
- Plant thumbnails, names and prices
- Add to Cart functionality
- Dynamic shopping cart item count
- Increase and decrease item quantities
- Remove items from the shopping cart
- Automatic calculation of item and cart totals
- Navigation between Home, Plants and Cart pages
- Continue Shopping functionality
- Checkout placeholder

## Technologies

- React
- JavaScript
- CSS
- Redux Toolkit
- React Redux
- Git and GitHub
- GitHub Pages

## Project Structure

Key files used in the project:

- `App.jsx` — Paradise Nursery landing page
- `App.css` — Application styling and landing page background
- `AboutUs.jsx` — Information about Paradise Nursery
- `ProductList.jsx` — Houseplant product listing
- `CartItem.jsx` — Shopping cart interface and controls
- `CartSlice.jsx` — Redux shopping cart state and reducers

## Shopping Cart

Shopping cart state is managed using Redux. The cart supports:

- Adding plants
- Removing plants
- Updating plant quantities
- Calculating the total number of plants
- Calculating individual item totals
- Calculating the overall cart total

## Running the Project

Install the project dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

## Deployment

The application is deployed using GitHub Pages.

## Course Project

This project was created to demonstrate practical knowledge of React components, Redux state management, event handling, navigation and front-end application development.