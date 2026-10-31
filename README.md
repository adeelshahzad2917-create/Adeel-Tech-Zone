# Adeel Tech Zone — React E-commerce Website

A responsive React + JSX storefront created from the original Adeel Tech Zone student project. It keeps the supplied product images and product ideas, and upgrades the old standalone HTML pages into a component-based application.

## Tech stack
- React + JSX, Vite
- JavaScript ES modules and React hooks (`useState`, `useEffect`, `useMemo`, Context)
- MVC-inspired separation: `models/` (catalogue), `controllers/` (store rules/persistence), `views/` (screens), `components/` (reusable UI)
- Browser `localStorage` for demo cart, accounts, orders and contact messages
- Responsive CSS and Lucide icons

## Run locally
1. Install Node.js 20 or newer from https://nodejs.org/.
2. Open this folder in VS Code (File → Open Folder).
3. Open Terminal → New Terminal.
4. Run:
   ```bash
   npm install
   npm run dev
   ```
5. Open the local URL printed by Vite (usually http://localhost:5173).

## Build for production
```bash
npm run build
npm run preview
```
The production website is generated in `dist/`.

## Publish on GitHub Pages
1. Create a GitHub repository, for example `adeel-tech-zone`.
2. Upload/push the complete contents of this folder to the repository's `main` branch (including `package.json`, `src`, `public`, `vite.config.js`, and `.github`). Do not upload `node_modules` or `dist`.
3. On GitHub open **Settings → Pages** and set **Build and deployment → Source** to **GitHub Actions**.
4. Push to `main`. The workflow in `.github/workflows/deploy.yml` will install dependencies, build the site and deploy it.
5. Wait for the green check in the **Actions** tab. GitHub will show the live Pages URL in the deployment details.

This project uses hash-based routes (`/#/shop`) so client-side pages work on GitHub Pages without server rewrite configuration.

## Demo functionality
- Product listing, category filtering, search and sorting
- Product detail pages and related products
- Add to cart, quantity controls, remove item and persistent cart
- Register/sign-in demo flow and sign-out-ready session storage
- Checkout form with Cash on Delivery as a demo choice
- Demo order records and contact messages saved in the current browser
- Responsive navigation and wishlist toggle

## Important project limitations
This is a **front-end academic demo**, not a production commerce backend. Accounts/passwords, cart, orders and contact messages are stored in browser localStorage and are not secure or shared between devices. No real payment is processed, no email is sent, and no order is sent to a shop. For real customers, replace the demo controller with a secure backend/API, hashed passwords, database, validation and a payment provider. GitHub Pages hosts static front-end files only; it does not run Node/Express servers or databases.

React Native is for native mobile apps, not a browser website. This deliverable is React.js + JSX for the web.

## Project structure
```text
src/
  models/products.js              Product catalogue (Model)
  controllers/storeController.js Cart/account/order demo logic (Controller)
  views/                          Home, Shop, Product, Cart, Auth, Checkout, Info (Views)
  components/                     Header, Footer, ProductCard, shared layout
  context/StoreContext.jsx        Shared cart state
  styles/global.css               Responsive visual design
public/images/                    Supplied project images
legacy-html/                      Original HTML pages retained for reference
.github/workflows/deploy.yml      GitHub Pages deployment workflow
```
