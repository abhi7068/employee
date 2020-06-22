import axios from 'axios'
export const addEmployee = (employeeDetails) => {
    console.log("action working?",employeeDetails)
    return {
        type: "ADD_EMPLOYEE",
        details:employeeDetails
    }
}
export const ownerAdded = (empName) => {
    console.log("teammate",empName)
    return {
        type: "OWNER",
        name:empName
    }
}
export const teammateAdded = (empName) => {
    console.log("teammate",empName)
    return {
        type: "TEAMMATE",
        teammate:empName
    }
}
export const listTeam = (team) => {
    console.log("teammate",team)
    return {
        type: "TEAM_LIST",
        name:team
    }
}
export const getRepo = (name) => {
    return(dispatch)=>{
        return axios.get("https://api.github.com/users/" + name)
            .then(res => {
            dispatch(getUserRepo(res.data))
            })
            .catch(err => {
                console.log(err)
                dispatch(getError())
        })
    }
}
export const getUserRepo=(repository) => {
    return {
        type: "GET_REPOSITORY",
        payload:repository
    }
}
export const getError = () => {
    return {
        type: 'ERROR',
        isTrue:true
    }
}