import { db } from "../configs/database.connection.js";
import { mapObjectToInsertQuery } from "../utils/sqlUtils.js";

async function create(passenger) {
    const { columns, values , paramsOrder } = mapObjectToInsertQuery(passenger);
    await db.query(
        `INSERT INTO passengers (${columns}) VALUES (${paramsOrder});`, values
    );
}

async function findPassengerById(id){
    const passenger = await db.query(
        `SELECT * FROM passengers WHERE id = $1`, [id]
    );
    return passenger;    
}

export const passengersRepository = {
    create,
    findPassengerById
};