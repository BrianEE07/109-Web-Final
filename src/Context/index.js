// import { loginUser, logout } from './actions';
import checkUser, {signUp} from './actions'
import { AuthProvider, useAuthDispatch, useAuthState } from './context';
 
export { AuthProvider, useAuthState, useAuthDispatch, signUp, checkUser };