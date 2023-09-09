import httpStatus from "http-status";

export default function errorHandler(error, req, res, next) {
    console.log(error);

    if (error.type === "invalidFormat")
        return res.status(httpStatus.UNPROCESSABLE_ENTITY).send(error.message);

        res.status(httpStatus.INTERNAL_SERVER_ERROR).send("Something went wrong.")
}