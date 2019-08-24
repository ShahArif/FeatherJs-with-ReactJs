export function getRecentRecipes(app){
    const recipes =app.service('recipes');
    return recipes.get(
        // {
        //     query:{'$sort': {'createdAt':-1 }}
        // }
    ).then((data ,err) => data.data);
}