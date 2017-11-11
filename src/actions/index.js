export const ADD_RECIPE = "ADD_RECIPE"
export const REMOVE_FROM_CALENDAR = "REMOVE_FROM_CALENDAR"

function ADD_RECIPE({ day, recipe, meal }) {
    return {
        type: ADD_RECIPE,
        recipe,
        day,
        meal,
    }
}

function REMOVE_FROM_CALENDAR({ day, meal }) {
    return {
        type: REMOVE_FROM_CALENDAR,
        day,
        meal,
    }
}