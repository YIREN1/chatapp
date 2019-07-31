# Authapp

MEAN(Mongodb, Express.js, Angular, Node.js) stack app from scrach, functionalities: register, login, email confirmation, google OAuth login, link google accounts, reCaptcha, 2fa with twillio, upload files to google cloud storage, token based authentication(also implmented cookie based)

Development: fully dockerized (aiming to kubernetefy), using nginx to control request to send to frontend or backend.

[Demo: heroku(0.0.1)](https://authappp.herokuapp.com/)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

If you want to use docker environment, make sure you have docker and docker-compose installed.



### Installing

#### docker env (recommended)

```
git clone https://github.com/YIREN1/authapp.git

cd authapp

docker-compose up

then project can be accessed at localhost:3050
```

If you don't want to use docker for some reason, 

```
git clone https://github.com/YIREN1/authapp.git

cd authapp/angular-src

npm i && ng build

cd ../api

npm i

npm start

```

when you see this

```
Server started on port 5000

Connected to database

```
, that means it worked

NOTICE: this won't work unless you have all the env variables


### And coding style 
follow esline and airbnb coding styles, for instructions how to set it up, google it yourself

## Deployment

deployment using docker would be easiest, but there are still some things needs to deal with for example: google OAuth only allow certain origin domain...

## Built With

* MEAN(Mongodb, Express.js, Angular, Node.js)

## TODO
[TODO](https://github.com/YIREN1/authapp/blob/master/TODO.md)

## Contributing

Please read [CONTRIBUTING.md]() for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

* **YI REN** - *Initial work* 

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Inspired by [Traversy Media](https://www.youtube.com/watch?v=uONz0lEWft0&list=PLillGF-RfqbZMNtaOXJQiDebNXjVapWPZ)
* my previous cowork Mike Sadowski