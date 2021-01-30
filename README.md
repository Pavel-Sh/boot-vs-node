#Spring Boot vs Node JS

## Purpose
Compare Spring Boot and Node JS as a solution for microservices

## What to compare
The goal of this repo is to compare 3 characteristics:
* app launch time
* memory consumption inside container
* requests per minute

## Test details
Both Spring Boot and Node JS (Express) launches
a simple web server which provides 2 endpoints: 
* retrieve test object from mysql db
* insert test object into mysql db

## Results
TODO provide results 

## How to perform tests locally
Build spring boot application:
`gradlew build` 
Launch either spring boot
`docker-compose -f docker-compose-boot.yaml --compatibility up --build --force-recreate` 
or node js app:
`docker-compose -f docker-compose-node15.yaml --compatibility up --build --force-recreate`
Once spring or not containers are launched launch the tests:
`docker-compose -f docker-compose-tests.yaml --compatibility up --build --force-recreate`

Measure the following when performing tests:
* Spring Boot vs node js app start time
* memory consumption during test run (use docker stats for this)
* By modifying test scenarios check how much request can be processed

## Attention
Ideally this scenarios should be executed on a separate AWS machine running only spring boot or node js container.
Running all containers locally may not provide correct results due to current CPU load of local machine.
