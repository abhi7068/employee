const initialState = {
    employeeData: [],
    employeeCopy: [],
    teamCopy:[],
    teams: [],
    repos: [],
    error:false,
}
const teamsreducer = (state = initialState, action) => {
    console.log("it works?",action)
    switch (action.type) {
        case "ADD_EMPLOYEE":
            return {
                ...state,
                employeeData: [...state.employeeData, action.details],
                employeeCopy: [...state.employeeData, action.details],
                 teamCopy:[...state.employeeData, action.details],
            }
        case "OWNER":
            console.log("teammate check",action)
            return {
                ...state,
                employeeCopy: state.employeeData.filter((element, i) => element.employees.name != action.name),
                teamCopy: state.employeeData.filter((element, i) => element.employees.name!=action.name)
            }
         case "TEAMMATE":
            console.log("teammate check",action)
            return {
                ...state,
                teamCopy: state.teamCopy.filter((element, i) => element.employees.name!=action.teammate)
            }
        case "TEAM_LIST":
            console.log("teammate check",action)
            return {
                ...state,
                teams: [...state.teams, action.name]
            }
        case "GET_REPOSITORY":
            console.log("teammate check",action)
            return {
                ...state,
               repos: [...state.repos, action.payload]
            }
        case "ERROR":
            return {
                ...state,
                error:action.isTrue
            }
        default:return state
    }
}
export default teamsreducer
