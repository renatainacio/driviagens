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

async function getAllFlights(origin, destination, biggerDate, smallerDate){
    let sql = "";
    let values = [];
    if (origin) {
        values.push(origin);
        sql += `AND o.name = $${values.length}`
    }
    if (destination) {
        values.push(destination);
        sql += `AND d.name = $${values.length}`
    }
    if (biggerDate) {
        values.push(biggerDate);
        sql += `AND date <= $${values.length}`
    }
    if (smallerDate) {
        values.push(smallerDate);
        sql += `AND date >= $${values.length}`
    }

    let offset = "";
    if (page){
        offset += `OFFSET ${(page - 1) * 10} LIMIT 10`
    }

    const flights = await db.query(`
        SELECT f.id, o.name AS origin, d.name AS destination, f.date
        FROM flights f, cities o, cities d
        WHERE o.id = f.origin
        AND d.id = f.destination ${sql}
        ORDER BY date
        ${offset}
    `, values.length ? values : ""
    )
    return flights;
}

export const flightsRepository = {
    create,
    findFlightById,
    getAllFlights
};