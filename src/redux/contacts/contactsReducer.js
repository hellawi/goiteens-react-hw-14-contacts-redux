import { combineReducers, createReducer } from "@reduxjs/toolkit";
import { addContactAction } from "./contactsActions";

const contactsReducer = createReducer([], (builder) => {
  builder.addCase(addContactAction, (state, action) => {
    console.log(action.payload)
  })
})

export default combineReducers({
  contacts: contactsReducer
})