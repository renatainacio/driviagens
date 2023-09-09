import { db } from "../configs/database.connection.js";
import { mapObjectToInsertQuery } from "../utils/sqlUtils.js";

async function create(flight) {
    const { columns, values , paramsOrder } = mapObjectToInsertQuery(flight);
    await db.query(
        `INSERT INTO flights (${columns}) VALUES (${paramsOrder});`, values
    );
}

async function findFlightById(id){
    const flight = await db.query(
        `SELECT * FROM flights WHERE id = $1`, [id]
    );
    return flight;    
}

export const flightsRepository = {
    create,
    findFlightById
};