export function mapObjectToInsertQuery(object, offset = 1) {
  const columns = Object.keys(object).map((key) => `"${key}"`).join(",");
  const values = Object.values(object);
  const paramsOrder = values.map((_, index) => `$${index + offset}`).join(",");

  return { columns, values, paramsOrder };
}

export function mapObjectToUpdateQuery(object, offset = 1) {
  const columns = Object.keys(object).map((key, index) => `"${key}"=$${index + offset}`).join(",");
  const values = Object.values(object);

  return { columns, values };
}