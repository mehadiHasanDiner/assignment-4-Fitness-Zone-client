## 🛒 GYM Shop

[Live URL](https://fitness-hub-ruby.vercel.app/)

This is the frontend section of the GYM Shop e-commerce application, developed using React, React Router DOM, Redux, RTK Query, Tailwind CSS, and DaisyUI.


## 🛠 Installation

### ✨ Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### ✨ Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/mehadiHasanDiner/assignment-4-Fitness-Zone-client
   cd your-repo-name/frontend
   ```
2. Install dependencies::
   ```bash
   npm install
   or
   yarn install
   ```
3. Start the development server:
   ```bash
   npm run dev
   or
   yarn run dev
   The app should now be running on http://localhost:5173.
   ```

### ✨ Usage

- Browse the application to discover various features such as product listings, category filters, search options, and more.
- State management is handled with Redux, while data fetching is managed by RTK Query.
- Tailwind CSS and DaisyUI are used for styling, providing responsive and modern UI components.

### ✨ Features

- Product Listings: Shows all available products with integrated search and filter features.
- Categories: Allows filtering of products by categories, with the option to select multiple categories at once.
- Cart Management: Provides functionality to add, remove, and adjust product quantities in the cart.
- Checkout: Gathers user information and processes orders efficiently.
- Sorting: Enables sorting of products by price and other criteria.
- Debounced Search: Minimizes API calls during searches to improve performance.
- Responsive Design: Utilizes Tailwind CSS and DaisyUI to ensure a mobile-first, responsive layout.

### ✨ APIs


This frontend communicates with backend APIs to retrieve product data and handle cart operations. For detailed API documentation, please refer to the backend repository.
[Backend Repository](https://github.com/mehadiHasanDiner/assignment-4-Fitness-Zone-backend)

### ✨ Technologies


- React: A JavaScript library used for creating user interfaces.
- Redux: A library for state management.
- RTK Query: A tool for data fetching and caching.
- React Router DOM: Provides declarative routing for React applications.
- Tailwind CSS: A utility-first CSS framework for styling.
- DaisyUI: Pre-built components for Tailwind CSS.
- sonner: Used for displaying toast notifications.
- redux-persist: Persists the Redux state in local storage.