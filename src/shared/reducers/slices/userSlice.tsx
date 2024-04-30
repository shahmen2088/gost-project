import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type UserBaseState = {
  email: string;
  password: string;
};

interface UserState extends UserBaseState {
  name: string;
  documents: [];
}

const userSlice = createSlice({
  name: 'user',
  initialState: {
    name: '',
    email: '',
    password: '',
    documents: [],
  },
  reducers: {
    setUserLogin: (state, { payload }: PayloadAction<UserBaseState>) => {
      // state.name = payload.name;
      state.email = payload.email;
      state.password = payload.password;
      // state.documents = payload.documents;
    },
    setSignUp: (state, { payload }: PayloadAction<UserState>) => {
      state.name = payload.name;
      state.email = payload.email;
      state.password = payload.password;
      state.documents = payload.documents;
    },
    setSignOut: (state) => {
      state.name = '';
      state.email = '';
      state.password = '';
      state.documents = [];
    },
  },
});

export const { setUserLogin, setSignUp, setSignOut } = userSlice.actions;
