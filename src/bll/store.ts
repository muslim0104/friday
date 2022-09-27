import { combineReducers, legacy_createStore } from "redux";
import {profileReducer} from "./reducers/profile-reducer";
import {passwordReducer} from "./reducers/password-reducer";
import {loginReducer} from "./reducers/login-reducer";
import {registrationReducer} from "./reducers/registration-reducer";



const rootReducer=combineReducers({
    profile:profileReducer,
    password:passwordReducer,
    passwordRecovery:passwordReducer,
    login:loginReducer,
    registration:registrationReducer
})
type AppRootStateType=ReturnType<typeof rootReducer>
export let store=legacy_createStore(rootReducer)