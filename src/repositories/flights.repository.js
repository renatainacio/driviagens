import { db } from "../configs/database.connection.js";
import { mapObjectToInsertQuery } from "../utils/sqlUtils.js";

async function create(flight) {
    const { columns, values , paramsOrder } = mapObjectToInsertQuery(flight);
    await db.query(
        `INSERT INTO flights (${columns}) VALUES (${paramsOrder});`, values
    );
}

export const flightsRepository = {
    create,
};