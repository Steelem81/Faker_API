// import { Express } from 'express';
// import { Faker } from '@faker-js/faker';


const express = require("express");
const app = express();
const port = 8000;

const { faker } = require('@faker-js/faker');
const createUser = () => {
    const newFake = {
        password: faker.internet.password(),
        email: faker.internet.email(),
        phoneNumber: faker.phone.number(),
        lastName: faker.name.lastName(),
        firstName: faker.name.firstName(),
        _id: faker.database.mongodbObjectId()
    };
    return newFake;
}

const createCompany = () => {
    const newFake = {
        _id: faker.database.mongodbObjectId(),
        name: faker.company.name(),
        address: { 
        street: faker.address.streetAddress(),
        city: faker.address.city(),
        state: faker.address.state(),
        zipCode: faker.address.zipCode(),
        country: faker.address.country()
        }
    };
    return newFake;
}

app.get("/api", (req, res) => {
    res.json({ message: "Hello World" });
});
app.get("/api/users/new", (req, res) => {
    const newUser = createUser();
    res.json({newUser});
});

app.get("/api/companies/new", (req, res) => {
    const newCompany  = createCompany();
    res.json({newCompany});
})

app.get("/api/user/company", (req, res) => {
    const newCompany = createCompany();
    const newUser = createUser();
    res.json({newUser, newCompany})
})

app.listen( port, () => console.log(`Listening on port: ${port}`) );