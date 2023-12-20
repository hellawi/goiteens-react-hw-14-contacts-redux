import { combineReducers, createReducer } from "@reduxjs/toolkit";
import { addContactAction, removeContactAction, setQueryAction } from "./contactsActions";

const contactsReducer = createReducer([], (builder) => {
  builder.addCase(addContactAction, (state, action) => {
    state.unshift(action.payload)
  })
  builder.addCase(removeContactAction, (state, action) => {
    const index = state.findIndex((contact) => contact.id === action.payload)
    state.splice(index, 1)
  })
})

const queryReducer = createReducer("", (builder) => {
  builder.addCase(setQueryAction, (_, action) => action.payload)
})

export default combineReducers({
  contacts: contactsReducer,
  query: queryReducer
})