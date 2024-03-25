import {apiSlice} from '../apiSlice';
import {ISmsReq} from './authApiType';

export const authApi = apiSlice.injectEndpoints({
  endpoints: builder => ({
    sendSms: builder.mutation<null, ISmsReq>({
      query: data => ({
        url: '/users/send-verification-code',
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

export const {useSendSmsMutation} = authApi;
