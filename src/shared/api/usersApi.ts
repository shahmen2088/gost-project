import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export type User = {
  id: string;
  name: string;
  position: string;
  contract: string;
};

type UserInfo = {
  name: string;
};

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/' }),
  endpoints: (builder) => ({
    getUsers: builder.query<User[], UserInfo>({
      query: ({ name = 'constructors' }) => ({
        url: name,
      }),
    }),
  }),
});

export const { useGetUsersQuery } = userApi;
