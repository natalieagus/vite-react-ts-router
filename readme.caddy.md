The caddy files are set up to run at https://localhost:8080/vite-react-ts-router/ by spawning:

1. A webserver at localhost:3000 (http)
2. A https reverse-proxy at localhost:8080

Inside test-caddy, we can test reverse-proxy to an express server instead. Caddy spawn a reverse proxy at https://localhost:8081 and node server should run at http://localhost:9000

1. `node test-caddy/test-serve.js `
2. Then in another window: `caddy run --watch`
