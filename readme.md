# Backend

## Run mongodb from docker
`docker pull mongodb`
`docker run --name mongodb -p 27017:27017 -d mongo`

## Populate database
- Use postman
- POST on localhost:3000/api/billingCycles
- body - x-www-form with text values

name: Janeiro/17
month: 1
year: 2017
credit[0][name]: Salario Empresa
credit[0][value]: 6500
credit[1][name]: Salario Professor
credit[1][value]: 2700
debts[0][name]: Telefone
debts[0][value]: 80.56
debts[1][name]: Condomínio
debts[1][value]: 150.00
