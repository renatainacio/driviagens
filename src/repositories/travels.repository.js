import { db } from "../configs/database.connection.js";
import { mapObjectToInsertQuery } from "../utils/sqlUtils.js";

async function create(travel) {
    const { columns, values , paramsOrder } = mapObjectToInsertQuery(travel);
    await db.query(
        `INSERT INTO travels (${columns}) VALUES (${paramsOrder});`, values
    );
}

export const travelsRepository = {
    create,
};