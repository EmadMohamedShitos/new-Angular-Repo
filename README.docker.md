Docker image for the Angular app

Build (PowerShell):

```powershell
# from project root (where Dockerfile is)
docker build -t my-angular-app:latest .
```

Run:

```powershell
docker run -p 8080:80 my-angular-app:latest
```

Notes:
- Uses a multistage build: Node to build, nginx to serve static files.
- The build output path is `dist/Docker` as configured in `angular.json`.
- If you want live dev iteration use `npm start` or the `serve:spa` script in `package.json`.
