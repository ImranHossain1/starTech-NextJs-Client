# PC Builder Website with Next.js

Welcome to the PC Builder website built using Next.js, a React framework known for server-side rendering (SSR), static site generation (SSG), and incremental static regeneration (ISR). This project helps users select and build their custom PCs with ease.

**Live Client Site Link**: [Smart Tech Pc Builder Client](https://pc-builder-client-pied.vercel.app/)

**Live Server Site Link**: [Smart Tech Pc Builder Server](https://next-gen-pc-builder-server.vercel.app/api/v1/)

**GitHub Client Site Link**: [Smart Tech Pc Builder Client Side Code](https://github.com/ImranHossain1/starTech-NextJs-Client)

**GitHub Server Site Link**: [Smart Tech Pc Builder Server Side code](https://github.com/ImranHossain1/StarTech-server)

## Features

### Navbar Setup

- A clean and feature-rich Navbar with the following buttons:
  - "All Products": Takes users to a page displaying all available products.
  - "Create New Product": Authenticated users can use this button to create new product listings, including images hosted on imgBB.
  - "Dynamic Login": The login button dynamically appears for unauthenticated users, allowing them to log in using NextAuth with social login providers (Google/Github).

### Home Page (SSG and ISR)

- The home page is statically generated (SSG) and showcases at least 6 random Featured Products.
- Each product displays essential details like image, product name, category, price, stock status, and rating.
- Clicking on a product takes the user to the product detail page.
- ISR is implemented to periodically regenerate the home page to ensure up-to-date product listings.

### Featured Categories (SSR)

- The Featured Categories section on the home page is rendered on the server-side (SSR).
- Each category is clickable and redirects the user to a separate page displaying at least 3 products from that category.

### Product Detail Page (SSG and ISR) with User Reviews and Ratings

- A detailed product page for each PC component displaying essential information such as image, product name, category, stock status, price, description, key features, individual rating, average rating, and reviews.
- Authenticated users can leave reviews and ratings on the product detail page.
- The product's overall rating is dynamically updated based on user ratings and reviews.

### PC Builder Page (SSR) with Shopping Cart

- The PC Builder page is designed using server-side rendering (SSR).
- It includes category sections for CPU, motherboard, RAM, PSU, storage, and monitor.
- Each section has a "Choose/Select" button, leading to another page displaying at least 3 components of the specific category.
- Users can select components and add them to their shopping cart.
- The page displays the total cost of all selected products.

### Add To Builder Functionality

- Implemented an "Add To Builder" button on each component card in the category pages.
- Clicking the button redirects the user to the PC Builder page and updates the state with the selected component.
- Redux/Context API is used to manage the central store for this feature.

### Checkout Page and Order Completion

- After adding products to the shopping cart, users can click on the "Checkout" button.
- The checkout page displays the list of selected products, their quantities, and the total cost.
- Users can complete the order from this page.
- After completing the order, the shopping cart is emptied.

### Bonus: User Authentication (NextAuth)

- The PC Builder page is a protected route accessible only to logged-in users.
- User authentication is implemented using NextAuth with at least one social login provider (Google/Github).

### Bonus: Responsive Design

- The entire application is designed to be responsive, ensuring a seamless experience on both mobile and desktop devices.
