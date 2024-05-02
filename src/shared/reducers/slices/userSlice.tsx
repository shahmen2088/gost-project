import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type UserBaseState = {
  email: string;
  password: string;
};

interface UserState extends UserBaseState {
  name: string;
  applicationHistory: [];
}

const userSlice = createSlice({
  name: 'user',
  initialState: {
    name: '',
    email: '',
    password: '',
    applicationHistory: [],
  },
  reducers: {
    setUserLogin: (state, { payload }: PayloadAction<UserState>) => {
      state.name = payload.name;
      state.email = payload.email;
      state.password = payload.password;
      state.applicationHistory = payload.applicationHistory;
    },
    setSignUp: (state, { payload }: PayloadAction<UserState>) => {
      state.name = payload.name;
      state.email = payload.email;
      state.password = payload.password;
      state.applicationHistory = payload.applicationHistory;
    },
    setSignOut: (state) => {
      state.name = '';
      state.email = '';
      state.password = '';
      state.applicationHistory = [];
    },
  },
});

export const { setUserLogin, setSignUp, setSignOut } = userSlice.actions;

export default userSlice.reducer;
