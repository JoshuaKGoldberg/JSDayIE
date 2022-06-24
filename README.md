# JSDayIE

This is official website of the first JavaScript conference in Ireland: www.jsday.ie

The site is implemented with Lerna, TypeScript, React, Jest and Next.js.
We use server-side rendering to enable SEO optimizations. 

The static content (images, content, etc.) is deployed to an Azure Storage Account and the application is deployed to an Azure Container App. The CI/CD workflows is defined using GitHub actions.

```
lerna exec yarn
```

```
docker build -t jsdayie.azurecr.io/jsdayie .
docker run -d -p 80:80 jsdayie.azurecr.io/jsdayie
```

```
az login
az acr login --name jsdayie
docker buildx create --use
docker buildx build --platform linux/amd64 --push -t jsdayie.azurecr.io/jsdayie .
```