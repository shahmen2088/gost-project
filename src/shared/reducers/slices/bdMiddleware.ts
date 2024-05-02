import { createListenerMiddleware } from '@reduxjs/toolkit';
import { AppDispatch, RootState } from '../../../app/providers/store/store';
import {
  addNewUserBD,
  deleteUserFromOnline,
  loginUserBD,
} from '../../utils/bdUtils';
import { setSignOut, setSignUp, setUserLogin } from './userSlice';

export const bdMiddleware = createListenerMiddleware();

const startListeningApp = bdMiddleware.startListening.withTypes<
  RootState,
  AppDispatch
>();

startListeningApp({
  actionCreator: setSignUp,
  effect: ({ payload }) => {
    if (payload.email) {
      addNewUserBD(payload.name, payload.email, payload.password);
    }
  },
});

startListeningApp({
  actionCreator: setUserLogin,
  effect: ({ payload }) => {
    if (payload.email) {
      loginUserBD(payload.email, payload.password);
    }
  },
});

startListeningApp({
  actionCreator: setSignOut,
  effect: () => {
    deleteUserFromOnline();
  },
});
