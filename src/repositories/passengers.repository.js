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

async function getAllPassengersWithTotalTravels(partialName){
    let sql = "";
    if (partialName)
        sql += `WHERE "firstName" ILIKE $1 OR "lastName" ILIKE $2`;

    const passengers = await db.query(`
        SELECT p."firstName" || ' ' || p."lastName" as "fullName" , COUNT(t.id) as travels
        FROM passengers p
        LEFT JOIN travels t
        ON t."passengerId" = p.id
        ${sql}
        GROUP BY p.id
        ORDER BY travels DESC
    `, sql ? [`%${partialName}%`, `%${partialName}%`] : "");
    return passengers;
}

export const passengersRepository = {
    create,
    findPassengerById,
    getAllPassengersWithTotalTravels
};