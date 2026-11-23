# Paradise Nursery

Paradise Nursery is a React and Vite houseplant shopping application. It lets visitors discover curated indoor plants, add selections to a Redux-managed cart, adjust quantities, and review item and cart totals before a future checkout experience.

## Features

- Responsive Home and About pages with locally stored nursery imagery
- Shared navigation for Home, Plants, About, and Cart pages
- Dynamic cart badge showing the total selected plant quantity
- An 18-plant catalogue across three categories:
  - Foliage Favorites
  - Low-Light Living
  - Flowering & Color
- Local plant thumbnails, names, categories, and prices
- Add to Cart controls connected to Redux Toolkit
- Added products display their in-cart quantity and disable their Add to Cart button
- Cart quantity increase, decrease, and remove actions
- Per-item totals, overall cart total, and total item quantity
- Continue Shopping links back to the catalogue
- Checkout placeholder feedback

## Technology stack

- React
- Vite
- React Router
- Redux Toolkit and React Redux
- JavaScript and CSS

## Project structure

```text
src/
├── App.jsx           # Routes, shared navigation, and landing page
├── App.css           # Shared application and page styling
├── AboutUs.jsx       # About-page hero and company story
├── ProductList.jsx   # Categorized plant catalogue and Add to Cart controls
├── CartItem.jsx      # Cart controls, item totals, and cart summary
├── CartSlice.jsx     # Redux cart reducers
├── store.js          # Redux Toolkit store configuration
└── assets/           # Local nursery and plant thumbnail assets
```

## Running the project

### Prerequisites

Install a current version of Node.js and npm.

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

Vite will print the local address to open in a browser.

### Run linting

```bash
npm run lint
```

### Create a production build

```bash
npm run build
```

### Preview the production build

```bash
npm run preview
```

## Deployment

The project is configured to deploy to GitHub Pages from `main` using GitHub Actions. After the deployment workflow completes, it is available at:

```text
https://muhddaimann.github.io/paradise-nursery/
```

## Cart behavior

Cart state is stored in Redux. The cart slice supports adding items, removing items, and setting an item's quantity. The UI updates the navigation count, individual item totals, and the overall cart total from that shared state.

## Current limitation

Checkout is intentionally a placeholder. Payment processing, order creation, and cart persistence are not implemented.
