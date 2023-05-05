## Getting Started

Install dependencies needed:

```bash
npm install
# or
yarn install
# or
pnpm install
```

then run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

## Getting Data From Github API

In order for the api routes to work you need to provide a Github API Key.

Create a .env.local file and add the following:

```bash
NEXT_PUBLIC_GITHUB_API_KEY=YOURAPIKEYGOESHERE
```

Feel free to configure your api key how you like. (Weather you only want access to public repositories, selected repositories or all repositories)

List of all api routes
- [http://localhost:3000/api/profile](http://localhost:3000/api/profile) returns the profile of the user.
- [http://localhost:3000/api/repos](http://localhost:3000/api/repos) return all repositories for the user.
- [http://localhost:3000/api/repo?repo=repoName](http://localhost:3000/api/repo?repo=repoName) return the detail of the specific repository.
- [http://localhost:3000/api/get-url-data?url=githubUrl](http://localhost:3000/api/get-url-data?url=githubUrl) return data on a specific Github api url.
