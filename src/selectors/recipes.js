const getVisibleRecipes = (recipes, filters) => {
    return recipes.filter((recipe) => {
        const textMatch = recipe.name.toLowerCase().includes(filters.text.toLowerCase())
        return textMatch
    // eslint-disable-next-line array-callback-return
    }).sort((a, b) => {
        if (filters.sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1
        }
    })
}

export default getVisibleRecipes; 