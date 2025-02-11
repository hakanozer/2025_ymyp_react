import { UnknownAction } from "redux"

export interface ILikesAction extends UnknownAction {
    type: string,
    payload: string[]
}

export const likesReducer = ( state: string[] = [], action: ILikesAction  ) => {
    switch (action.type) {
        case 'ALL_LIKES':
            return action.payload
        default:
            return state
    }
}