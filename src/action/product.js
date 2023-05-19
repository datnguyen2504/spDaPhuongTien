export const getProduct = (hobby) => {
    return {
        type: 'GET_PRODUCT',
        data: hobby,
    }


}