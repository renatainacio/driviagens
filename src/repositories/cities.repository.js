import { db } from "../configs/database.connection.js";

async function create(city) {
    await db.query(
        `INSERT INTO cities (name) VALUES ($1)`, [city.name]
    );
}

async function findCityByName(cityName) {
    const city = await db.query(
        `SELECT name FROM cities WHERE name = $1`, [cityName]
    );
    return city;
}

async function findCityById(id){
    const city = await db.query(
        `SELECT name FROM cities WHERE id = $1`, [id]
    );
    return city;    
}


export const citiesRepository = {
    create,
    findCityByName,
    findCityById
};