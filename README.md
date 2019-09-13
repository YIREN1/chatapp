# Chatapp

MEAN(Mongodb, Express.js, Angular, Node.js) stack app from scrach.

## Functionality overview

- CRU\* users (no need to delete)
- JWT token based authentication(login/logout)(also implmented cookie based)
- email confirmation
- google OAuth2 login
- link google accounts
- reCaptcha
- 2fa with twillio authy
- upload files to google cloud storage
- chatbot with dialogflow and google cloud function (serverless)
- video chat using peer.js
- chat functionalities (mirroring slack)
  - send direct message
  - channel chat
  - join channel
  - CRUD messages

Development: fully dockerized and "kubernetified", using nginx to control request to send to frontend or backend.

[Demo(1.0.0): heroku](https://chattapp.herokuapp.com/)

[Demo.md](docs/Demo.md)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

If you want to use docker environment, make sure you have docker and docker-compose installed.

### Installing

#### Kubernetes env

[Kubernetes.md](docs/k8s.md)

#### docker env (recommended)

- important: need to change angular-src/src/environments/environment.ts and socket io address to config docker

```bash

git clone https://github.com/YIREN1/chatapp.git

cd chatapp

docker-compose up

then project can be accessed at localhost:3050
```

If you don't want to use docker for some reason,

```bash
git clone https://github.com/YIREN1/chatapp.git

cd chatapp/angular-src

npm i && ng build

cd ../api

npm i

npm start
```

when you see this

```bash
Server started on port 5000

Connected to database
```

that means it worked

NOTICE: this won't work unless you have all the env variables

## Coding Style

Follow eslint and airbnb coding styles, for instructions how to set it up, google or duckduckgo is your best friend.

## Deployment

Deployment using docker would be easiest, but there are still some things needs to deal with, for example: google OAuth only allow certain origin domain...

And here's some instructions on how to [deploy to heroku](docs/Heroku-deploy.md), we could use docker or kubernetes but those are relatively expensive compared to heroku(which is free)

## Built With

- MEAN(Mongodb, Express.js, Angular, Node.js), socket.io

## TODO

[TODO](docs/TODO.md)

## Contributing

Please read [CONTRIBUTING.md](docs/CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/YIREN1/chatapp/tags).

## Authors

- **YI REN** - _Initial work_

See also the list of [contributors](https://github.com/YIREN1/chatapp/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

- Inspired by [Traversy Media](https://www.youtube.com/watch?v=uONz0lEWft0&list=PLillGF-RfqbZMNtaOXJQiDebNXjVapWPZ)
