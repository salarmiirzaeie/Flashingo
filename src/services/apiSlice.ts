import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {RootState} from '../stores/store';

const BASE_URL = 'http://192.168.5.143:3333';

const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  // prepareHeaders: (Headers, {getState}) => {
  //   const state = getState() as RootState;
  //   const token = state.authorization.token;

  //   if (token) {
  //     Headers.set('Authorization', `Bearer ${token}`);
  //   }
  // },
});

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery,
  endpoints: builder => ({}),
});
