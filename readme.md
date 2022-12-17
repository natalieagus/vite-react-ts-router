```
npm init vite@latest vite-react-ts-router-project -- --template react-ts
npm install --save-dev react-router-dom @types/react-router-dom

mkdir src/components
touch src/components/Home.tsx
touch src/components/Converter.tsx
```

Then edit all `.tsx` files to match the project's. Also update `App.css`.

add `<BrowserRouter basename={import.meta.env.BASE_URL}>` to `main.tsx`

serve with
```
npm run build; node server.js
```
visit `http://localhost:9000/vite-react-ts-router/`, clicking on converter should route to `http://localhost:9000/vite-react-ts-router/converter`

guide:
https://create-react-app.dev/docs/deployment/#other-solutions