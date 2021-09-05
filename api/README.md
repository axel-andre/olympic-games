# API du complexe applicatif des J.O


## Installation

```bash
$ yarn install
```
### Dupliquez le fichier `.env.example` en `.env` et remplacer la valeur de `MONGODB_CONNECTION_STRING` par :
```
mongodb+srv://nestjs-server:k1agt2ShlXUOAy7K@cluster0.zj5mn.mongodb.net/olympic-games?retryWrites=true&w=majority
```

## Lancer l'application

```bash
# developement
$ yarn start:dev

# production
$ yarn start:prod
```
## Accéder à l'API
```
http://locahost:3000/
```

## Data structures

### Sport
```
    Sport {
        String name
    }
```
### Event
```
    Event {
        String name
        ISODate date
        (Sport | String) sport
        String day
        String hours
        Array<Sportman> medalHolders
    }
```
### Sportman
```
    Sportman {
        String firstName
        String lastName
        (Sport | String) sport
    }
```