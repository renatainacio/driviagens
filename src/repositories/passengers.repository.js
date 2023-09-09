import { db } from "../configs/database.connection.js";
import { mapObjectToInsertQuery } from "../utils/sqlUtils.js";

async function create(passenger) {
    const { columns, values , paramsOrder } = mapObjectToInsertQuery(passenger);
    await db.query(
        `INSERT INTO passengers (${columns}) VALUES (${paramsOrder});`, values
    );
}

export const passengersRepository = {
    create
};