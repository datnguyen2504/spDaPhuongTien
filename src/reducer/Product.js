const initialState = {
    list: [],
}

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_PRODUCT': {

            const newList = []
            newList.push(action.data);
            // console.log(newList)
            return {
                list: newList
            };


        }

        default: {
            return state;
        }

    }
}

export default productReducer