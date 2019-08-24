function recipes (state=[], action){
    switch(action.type){
        case 'RECENT_RECIPE_REQUESTED':
            return action.recipes
        default :
        return state;
    }
}

export default recipes;