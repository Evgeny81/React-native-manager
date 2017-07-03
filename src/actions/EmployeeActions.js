import {EMPLOYEE_UPDATE} from "./types";

export const employeeUpdate = ({prop, value}) => {
    return {
        type: EMPLOYEE_UPDATE,
        payload: {prop, value}
    }
};

export const empoyeeCreate = ({name, phone, shift}) = {
    return {
        type: EMPLOYEE_CREATE
    }
};