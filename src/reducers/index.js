import { REMOVE_FEATURE, BUY_ITEM } from "../actions/index"

export const initialState = {
    additionalPrice: 0,
    car: {
        price: 26395,
        name: '2019 Ford Mustang',
        image:
            'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
        features: []
    },
    additionalFeatures: [
        { id: 1, name: 'V-6 engine', price: 1500 },
        { id: 2, name: 'Racing detail package', price: 1500 },
        { id: 3, name: 'Premium sound system', price: 500 },
        { id: 4, name: 'Rear spoiler', price: 250 }
    ]
}

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case REMOVE_FEATURE:
            return {
                ...state,
                car: {
                    price: state.car.price,
                    name: state.car.name,
                    image: state.car.image,
                    features: state.car.features.filter(item => item.id !== action.payload)
                }
            }

        case BUY_ITEM:
            return {
                ...state,
                car: {
                    price: state.car.price,
                    name: state.car.name,
                    image: state.car.image,
                    feature: [...state.car.features, action.payload]
                }
            }

        default:
            return state
    }
}