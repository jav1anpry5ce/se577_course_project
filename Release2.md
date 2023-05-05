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

List of all api routes
- [http://localhost:3000/api/profile](http://localhost:3000/api/profile) returns the profile of the user.
- [http://localhost:3000/api/repos](http://localhost:3000/api/repos) return all repositories for the user.
- [http://localhost:3000/api/repo?repo=repoName](http://localhost:3000/api/repo?repo=repoName) return the detail of the specific repository.
- [http://localhost:3000/api/get-url-data?url=githubUrl](http://localhost:3000/api/get-url-data?url=githubUrl) return data on a specific Github api url.
