export const FileManagerReducer = (state = {}, action) => {

    switch (action.type) {
        case 'Get_File_Source':
            return {
                ...state,
                GetFileSourceObj: action.data
            };
        
        default:
            return state;
    }
};