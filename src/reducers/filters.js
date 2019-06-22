const defaultFiltersReducerState = {
    text: '',
    sortBy: 'date'
}

const filtersReducer = (state = defaultFiltersReducerState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return { ...state, text: action.text }

        default:
            return state
    }
}

export default filtersReducer