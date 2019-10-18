const initialState = {
    userList: []
}
export const SAVE_USER = 'user';

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SAVE_USER: 
            
            return {userList: [...state.userList, action.payload]};
        default:
            return state;
    }
}