export function invalidFilterDate() {
    return {
        type: "invalidFilterDate",
        message: "É necessário informar duas datas para filtrar os voos"
    }
}