import httpStatus from "http-status";

export default function errorHandler(error, req, res, next) {
    
    if (error.type === "invalidFormat")
        return res.status(httpStatus.UNPROCESSABLE_ENTITY).send(error.message);

    if (error.type === "invalidFilterDate")
        return res.status(httpStatus.UNPROCESSABLE_ENTITY).send(error.message);

    if (error.type === "biggerDateBeforeSmaller")
        return res.status(httpStatus.BAD_REQUEST).send(error.message);

    if (error.type === "invalidDateNewFlight")
        return res.status(httpStatus.UNPROCESSABLE_ENTITY).send(error.message);

    if (error.type === "conflict")
        return res.status(httpStatus.CONFLICT).send(error.message);

    if (error.type === "notFound")
        return res.status(httpStatus.NOT_FOUND).send(error.message);

    if (error.type === "tooManyResults")
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error.message);

    if (error.type === "invalidPageValue")
        return res.status(httpStatus.BAD_REQUEST).send(error.message);

    res.status(httpStatus.INTERNAL_SERVER_ERROR).send("Something went wrong.")
}