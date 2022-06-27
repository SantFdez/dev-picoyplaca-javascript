# Pico y Placa Project

This project aims to say if a certain vehicle can be on road in a certain date and time. This "Pico y Placa" laws were based on June 2022 rules.

This project has two ways of use it: as an API, or as a Full-Stack project. You will be guided through both forms in the sections bellow.

This project is deployed at Heroku platform, you will find it [here](https://dev-picoyplaca-javascript.herokuapp.com/)



## Understanding data

This section will provide you information about the data used as input as well as the responses you will get of this App.

### Input data required:

- _Vehicle plate_
- _Date_
- _Time_

### Output data:

- _If the car can be on road_


## Requirements

The project requires [Node v16](https://nodejs.org/).

## Useful Node commands

The project makes use of node and its package manager to help you out carrying some common tasks such as building the
project or running it.

### Install dependencies

```console
$ npm install
```

### Run the tests

There are two options to run the tests

- Run the tests once

  ```console
  $ npm test
  ```

- Keep running the tests with every change

  ```console
  $ npm run test-watch
  ```

### Run the application

Run the application which will be listening on port `4000`.

- Run the application 

  ```console
  $ npm run dev
  ```

### Test Full-Stack App

One you are running the application, you can open the server with any web browser at `localhost:4000` (or deployed at [Heroku](https://dev-picoyplaca-javascript.herokuapp.com/)) . The App will show you a simple form. Fill the information keeping the established format and see if that specific given vehicle can be on road.


## API

Below is the API endpoint with their respective input and output. Please note that the application needs to be
running for the following endpoints to work. For more information about how to run the application, please refer
to [run the application](#run-the-application) section above.

### Validate Vehicle

Endpoint

```text
POST /api/validate
```

Example of body

```json
{
  "vehiclePlate": <vehiclePlate>,
  "date": <date>,
  "time" : <time>
}
```

Parameters

| Input         | Format       | Description               |Example    |
| ------------- | ------------ | ------------------------  |---------- |
| Vehicle Plate | `AAA-1234`   | Identification of vehicle |PBE-0242   |
| Date          | `YYYY-MM-DD` | A specific date           |2022-06-28 |
| Time          | `HH:MM`      | A specific time           |17:46      |


The following POST request, is an example request using CURL, sends the data shown in the table above.

```console
$ curl \
  -X POST \
  -H "Content-Type: application/json" \
  "http://localhost:4000/api/validate" \
  -d '{"vehiclePlate":"PBE-0242","date":"2022-06-28","time":"17:46"}'
```

The above command will return an object like follows.

| Output        | Format       | Description                               | Example    |
| ------------- | ------------ | ----------------------------------------- | ---------- |
| response      | `boolean`    | Whether or not the vehicle can be on road | true       |

Example output

```json
{
    "response": true
}
```

## Questions

If you have any doubt or question do not hesitate to contact me at `sannt43@gmail.com`.

