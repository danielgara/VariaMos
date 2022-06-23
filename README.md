# VariaMos

VariaMos is a modeling tool and a framework, that can be easily extended, and that allows you to define your own models.

# VariaMos installation

If you want to install the VariaMos deployment version, you just need:

1. Install Docker (info [here](https://docs.docker.com/get-docker/)).
2. Run the next command:
`sudo docker run -d -p 80:80 --name variamos-front danielgara/variamosfrontdeployment`
3. Open the application in the port 80.

**Note:** there is available documentation about how to install VariaMos without docker. You can find it at the developers documentation [here](https://github.com/VariaMosORG/VariaMos/wiki/Developers-%E2%80%90-VariaMos-installation) (skip the git and GitHub part, and just download the project as a zip).

# Project

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Unit tests
```
npm run test:unit
```

### End-to-End tests
```
npm run cypress:open
```