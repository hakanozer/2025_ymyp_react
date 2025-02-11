import { UnknownAction } from "redux"

export interface IBasketAction extends UnknownAction {
    type: string,
    payload: number[]
}

export const basketReducer = ( state: number[] = [], action: IBasketAction  ) => {
    switch (action.type) {
        case 'ALL_BASKET':
            return action.payload
        default:
            return state
    }
}