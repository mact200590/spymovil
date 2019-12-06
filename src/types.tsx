import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
};

export type Movement = {
   __typename?: 'Movement',
  id: Scalars['String'],
  name: Scalars['String'],
};

export type Mutation = {
   __typename?: 'Mutation',
  createPlayer: Scalars['String'],
  updatePlayer: Scalars['Boolean'],
  createMovement: Scalars['String'],
  updateMovement: Scalars['Boolean'],
};


export type MutationCreatePlayerArgs = {
  name: Scalars['String']
};


export type MutationUpdatePlayerArgs = {
  id: Scalars['String'],
  name?: Maybe<Scalars['String']>,
  win?: Maybe<Scalars['String']>,
  lose?: Maybe<Scalars['String']>
};


export type MutationCreateMovementArgs = {
  name: Scalars['String']
};


export type MutationUpdateMovementArgs = {
  id: Scalars['String'],
  name?: Maybe<Scalars['String']>
};

export type Player = {
   __typename?: 'Player',
  id: Scalars['String'],
  name: Scalars['String'],
  win: Scalars['String'],
  lose: Scalars['String'],
};

export type Query = {
   __typename?: 'Query',
  players: Array<Player>,
  movements: Array<Movement>,
};

export type UseGetAllMovementsQueryVariables = {};


export type UseGetAllMovementsQuery = (
  { __typename?: 'Query' }
  & { movements: Array<(
    { __typename?: 'Movement' }
    & Pick<Movement, 'id' | 'name'>
  )> }
);


export const UseGetAllMovementsDocument = gql`
    query useGetAllMovements {
  movements {
    id
    name
  }
}
    `;

/**
 * __useUseGetAllMovementsQuery__
 *
 * To run a query within a React component, call `useUseGetAllMovementsQuery` and pass it any options that fit your needs.
 * When your component renders, `useUseGetAllMovementsQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUseGetAllMovementsQuery({
 *   variables: {
 *   },
 * });
 */
export function useUseGetAllMovementsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<UseGetAllMovementsQuery, UseGetAllMovementsQueryVariables>) {
        return ApolloReactHooks.useQuery<UseGetAllMovementsQuery, UseGetAllMovementsQueryVariables>(UseGetAllMovementsDocument, baseOptions);
      }
export function useUseGetAllMovementsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<UseGetAllMovementsQuery, UseGetAllMovementsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<UseGetAllMovementsQuery, UseGetAllMovementsQueryVariables>(UseGetAllMovementsDocument, baseOptions);
        }
export type UseGetAllMovementsQueryHookResult = ReturnType<typeof useUseGetAllMovementsQuery>;
export type UseGetAllMovementsLazyQueryHookResult = ReturnType<typeof useUseGetAllMovementsLazyQuery>;
export type UseGetAllMovementsQueryResult = ApolloReactCommon.QueryResult<UseGetAllMovementsQuery, UseGetAllMovementsQueryVariables>;