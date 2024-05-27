import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import { modal } from "."

const reducers = { modal }

const store = configureStore({ reducer: combineReducers(reducers), })
export default store