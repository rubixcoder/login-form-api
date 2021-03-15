# login-form-api
A mock api to validate credentials

# Steps to run the code
`npm install`

`npm start` // This will run the code at 3000 port

# Command to run the tests
`npm run test`

# Command to run tests with code coverage
`npm run test-coverage`

# Steps to run build and run docker image
`docker build -t login-form-api .`

`docker run -dp 3000:3000 login-form-api`

## What to improve
Right now the unit tests are written only for service file, this can be improved by covering other files as well.
I have not used any authentication mechanism in order to access API, we can integrate that as well (if other APIs are being added)
