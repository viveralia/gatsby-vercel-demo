<p align="center">
  <a href="https://www.gatsbyjs.com/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter-ts">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Gatsby Minimal TypeScript Starter
</h1>

# Gatsby + Vercel Backend Demo

This is a Gatsby project with a Vercel serverless backend API.

## Project Structure

- `src/pages/index.tsx` - Frontend page that fetches users
- `src/utils/client.ts` - API client for making requests to the backend
- `src/utils/types.ts` - TypeScript type definitions
- `api/users.ts` - Vercel serverless function (backend API)

## How It Works

1. **Backend**: The `api/users.ts` file is a Vercel serverless function that:

   - Fetches users from JSONPlaceholder API
   - Handles CORS properly
   - Includes error handling
   - Returns JSON data

2. **Frontend**: The Gatsby app:

   - Uses `client.ts` to make API calls to `/api/users`
   - Displays users in a list
   - Handles loading and error states

3. **Deployment**: When deployed to Vercel:
   - Gatsby builds the static site
   - The `api/` folder becomes serverless functions
   - Both frontend and backend are served from the same domain

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run develop

# Build for production
npm run build
```

## API Endpoints

- `GET /api/users` - Returns a list of users from JSONPlaceholder

## Environment Variables

For local development, you can set:

- `GATSBY_API_URL` - API base URL (defaults to current domain)

## Deployment

Deploy to Vercel and the API will automatically be available at `your-domain.vercel.app/api/users`.

## 🚀 Quick start

1.  **Create a Gatsby site.**

    Use the Gatsby CLI to create a new site, specifying the minimal TypeScript starter.

    ```shell
    # create a new Gatsby site using the minimal TypeScript starter
    npm init gatsby -- -ts
    ```

2.  **Start developing.**

    Navigate into your new site's directory and start it up.

    ```shell
    cd my-gatsby-site/
    npm run develop
    ```

3.  **Open the code and start customizing!**

    Your site is now running at http://localhost:8000!

    Edit `src/pages/index.tsx` to see your site update in real-time!

4.  **Learn more**

    - [Documentation](https://www.gatsbyjs.com/docs/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter-ts)
    - [Tutorials](https://www.gatsbyjs.com/docs/tutorial/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter-ts)
    - [Guides](https://www.gatsbyjs.com/docs/how-to/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter-ts)
    - [API Reference](https://www.gatsbyjs.com/docs/api-reference/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter-ts)
    - [Plugin Library](https://www.gatsbyjs.com/plugins?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter-ts)
    - [Cheat Sheet](https://www.gatsbyjs.com/docs/cheat-sheet/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter-ts)

## 🚀 Quick start (Netlify)

Deploy this starter with one click on [Netlify](https://app.netlify.com/signup):

[<img src="https://www.netlify.com/img/deploy/button.svg" alt="Deploy to Netlify" />](https://app.netlify.com/start/deploy?repository=https://github.com/gatsbyjs/gatsby-starter-minimal-ts)
