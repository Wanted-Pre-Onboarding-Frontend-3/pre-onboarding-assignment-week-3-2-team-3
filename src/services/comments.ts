import { WithRequiredProperty } from "./../utils/typeUtils";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface Comment {
  id?: number;
  profile_url: string;
  author: string;
  content: string;
  createdAt: string;
}

interface CommentsResult {
  comments: Array<Comment>;
  totalCount: number;
}

interface CommentsSearchParams {
  _page: string;
  _limit: string;
  _order?: 'desc' | 'asc';
  _sort?: string;
}

export const commentsApi = createApi({
  reducerPath: 'commentsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://json-server-vercel1.vercel.app/' }),
  tagTypes: ['Comments'],
  endpoints: (builder) => ({
    getComments: builder.query<CommentsResult, CommentsSearchParams>({
      query: () => {
        return 'comments';
      },
      transformResponse: (response: Comment[], _, arg) => {
        const { _limit, _page } = arg;
        const limit = parseInt(_limit, 10);
        const page = parseInt(_page, 10);

        const pagenated2DArray = [];

        for (let i = 0; i < response.length; i += limit) pagenated2DArray.push(response.slice(i, i + limit));

        return {
          comments: pagenated2DArray?.[page - 1],
          totalCount: response.length,
        };
      },
      providesTags: (result) =>
        result
          ? [...result?.comments.map(({ id }) => ({ type: 'Comments', id } as const)), { type: 'Comments', id: 'LIST' }]
          : [{ type: 'Comments', id: 'LIST' }],
    }),

    addComment: builder.mutation<Comment, Omit<Comment, "id">>({
      query: (body) => ({
        url: 'comments',
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'Comments', id: 'LIST' }],
    }),

    updateComment: builder.mutation<
      Comment,
      WithRequiredProperty<Comment, "id">
    >({
      query: ({ id, ...body }) => ({
        url: `comments/${id}`,
        method: 'PUT',
        body,
      }),
      invalidatesTags: [{ type: 'Comments', id: 'LIST' }],
    }),

    deleteComment: builder.mutation<Comment, Pick<Comment, 'id'>>({
      query: ({ id }) => ({
        url: `comments/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: [{ type: 'Comments', id: 'LIST' }],
    }),
  }),
});

export const { useGetCommentsQuery, useAddCommentMutation, useUpdateCommentMutation, useDeleteCommentMutation } =
  commentsApi;
