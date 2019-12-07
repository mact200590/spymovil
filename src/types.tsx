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
  updatePlayerByName: Scalars['Boolean'],
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


export type MutationUpdatePlayerByNameArgs = {
  name: Scalars['String'],
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
  rules: Array<Rule>,
};

export type Rule = {
   __typename?: 'Rule',
  id: Scalars['String'],
  move: Movement,
  kill: Movement,
};

export type UseGetAllMovementsQueryVariables = {};


export type UseGetAllMovementsQuery = (
  { __typename?: 'Query' }
  & { movements: Array<(
    { __typename?: 'Movement' }
    & Pick<Movement, 'id' | 'name'>
  )> }
);

export type UseGetAllPlayersQueryVariables = {};


export type UseGetAllPlayersQuery = (
  { __typename?: 'Query' }
  & { players: Array<(
    { __typename?: 'Player' }
    & Pick<Player, 'id' | 'name' | 'win' | 'lose'>
  )> }
);

export type UseAddPlayerMutationVariables = {
  name: Scalars['String']
};


export type UseAddPlayerMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'createPlayer'>
);

export type UseUpdatePlayerMutationVariables = {
  id: Scalars['String'],
  win?: Maybe<Scalars['String']>,
  lose?: Maybe<Scalars['String']>
};


export type UseUpdatePlayerMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'updatePlayer'>
);

export type UseGetAllRulesQueryVariables = {};


export type UseGetAllRulesQuery = (
  { __typename?: 'Query' }
  & { rules: Array<(
    { __typename?: 'Rule' }
    & Pick<Rule, 'id'>
    & { move: (
      { __typename?: 'Movement' }
      & Pick<Movement, 'id' | 'name'>
    ), kill: (
      { __typename?: 'Movement' }
      & Pick<Movement, 'id' | 'name'>
    ) }
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
export const UseGetAllPlayersDocument = gql`
    query useGetAllPlayers {
  players {
    id
    name
    win
    lose
  }
}
    `;

/**
 * __useUseGetAllPlayersQuery__
 *
 * To run a query within a React component, call `useUseGetAllPlayersQuery` and pass it any options that fit your needs.
 * When your component renders, `useUseGetAllPlayersQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUseGetAllPlayersQuery({
 *   variables: {
 *   },
 * });
 */
export function useUseGetAllPlayersQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<UseGetAllPlayersQuery, UseGetAllPlayersQueryVariables>) {
        return ApolloReactHooks.useQuery<UseGetAllPlayersQuery, UseGetAllPlayersQueryVariables>(UseGetAllPlayersDocument, baseOptions);
      }
export function useUseGetAllPlayersLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<UseGetAllPlayersQuery, UseGetAllPlayersQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<UseGetAllPlayersQuery, UseGetAllPlayersQueryVariables>(UseGetAllPlayersDocument, baseOptions);
        }
export type UseGetAllPlayersQueryHookResult = ReturnType<typeof useUseGetAllPlayersQuery>;
export type UseGetAllPlayersLazyQueryHookResult = ReturnType<typeof useUseGetAllPlayersLazyQuery>;
export type UseGetAllPlayersQueryResult = ApolloReactCommon.QueryResult<UseGetAllPlayersQuery, UseGetAllPlayersQueryVariables>;
export const UseAddPlayerDocument = gql`
    mutation useAddPlayer($name: String!) {
  createPlayer(name: $name)
}
    `;
export type UseAddPlayerMutationFn = ApolloReactCommon.MutationFunction<UseAddPlayerMutation, UseAddPlayerMutationVariables>;

/**
 * __useUseAddPlayerMutation__
 *
 * To run a mutation, you first call `useUseAddPlayerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUseAddPlayerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [useAddPlayerMutation, { data, loading, error }] = useUseAddPlayerMutation({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useUseAddPlayerMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UseAddPlayerMutation, UseAddPlayerMutationVariables>) {
        return ApolloReactHooks.useMutation<UseAddPlayerMutation, UseAddPlayerMutationVariables>(UseAddPlayerDocument, baseOptions);
      }
export type UseAddPlayerMutationHookResult = ReturnType<typeof useUseAddPlayerMutation>;
export type UseAddPlayerMutationResult = ApolloReactCommon.MutationResult<UseAddPlayerMutation>;
export type UseAddPlayerMutationOptions = ApolloReactCommon.BaseMutationOptions<UseAddPlayerMutation, UseAddPlayerMutationVariables>;
export const UseUpdatePlayerDocument = gql`
    mutation useUpdatePlayer($id: String!, $win: String, $lose: String) {
  updatePlayer(id: $id, win: $win, lose: $lose)
}
    `;
export type UseUpdatePlayerMutationFn = ApolloReactCommon.MutationFunction<UseUpdatePlayerMutation, UseUpdatePlayerMutationVariables>;

/**
 * __useUseUpdatePlayerMutation__
 *
 * To run a mutation, you first call `useUseUpdatePlayerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUseUpdatePlayerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [useUpdatePlayerMutation, { data, loading, error }] = useUseUpdatePlayerMutation({
 *   variables: {
 *      id: // value for 'id'
 *      win: // value for 'win'
 *      lose: // value for 'lose'
 *   },
 * });
 */
export function useUseUpdatePlayerMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UseUpdatePlayerMutation, UseUpdatePlayerMutationVariables>) {
        return ApolloReactHooks.useMutation<UseUpdatePlayerMutation, UseUpdatePlayerMutationVariables>(UseUpdatePlayerDocument, baseOptions);
      }
export type UseUpdatePlayerMutationHookResult = ReturnType<typeof useUseUpdatePlayerMutation>;
export type UseUpdatePlayerMutationResult = ApolloReactCommon.MutationResult<UseUpdatePlayerMutation>;
export type UseUpdatePlayerMutationOptions = ApolloReactCommon.BaseMutationOptions<UseUpdatePlayerMutation, UseUpdatePlayerMutationVariables>;
export const UseGetAllRulesDocument = gql`
    query useGetAllRules {
  rules {
    id
    move {
      id
      name
    }
    kill {
      id
      name
    }
  }
}
    `;

/**
 * __useUseGetAllRulesQuery__
 *
 * To run a query within a React component, call `useUseGetAllRulesQuery` and pass it any options that fit your needs.
 * When your component renders, `useUseGetAllRulesQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUseGetAllRulesQuery({
 *   variables: {
 *   },
 * });
 */
export function useUseGetAllRulesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<UseGetAllRulesQuery, UseGetAllRulesQueryVariables>) {
        return ApolloReactHooks.useQuery<UseGetAllRulesQuery, UseGetAllRulesQueryVariables>(UseGetAllRulesDocument, baseOptions);
      }
export function useUseGetAllRulesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<UseGetAllRulesQuery, UseGetAllRulesQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<UseGetAllRulesQuery, UseGetAllRulesQueryVariables>(UseGetAllRulesDocument, baseOptions);
        }
export type UseGetAllRulesQueryHookResult = ReturnType<typeof useUseGetAllRulesQuery>;
export type UseGetAllRulesLazyQueryHookResult = ReturnType<typeof useUseGetAllRulesLazyQuery>;
export type UseGetAllRulesQueryResult = ApolloReactCommon.QueryResult<UseGetAllRulesQuery, UseGetAllRulesQueryVariables>;