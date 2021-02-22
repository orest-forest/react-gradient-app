import { ADD_GRADIENT } from "./action-types";
import {START_EDITING_GRADIENT} from "./action-types";
import {CONFIRM_EDIT} from "./action-types";
import {CANCEL_EDIT} from "./action-types";

export function addGradient(gradient) {
    return { type: "ADD_GRADIENT", gradient}
}

export function editGradient(payload) {
    return {type: 'START_EDITING_GRADIENT',payload }
}

export function confirmEdit(payload) {
    return {type: 'CONFIRM_EDIT', payload }
}

export function cancelEdit() {
    return {type: 'CANCEL_EDIT' }
}