import * as Types from '../types.d';

import gql from 'graphql-tag';
import * as React from 'react';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export type HeroNameConditionalInclusionQueryVariables = {
  episode?: Types.Maybe<Types.Episode>;
  includeName: Types.Scalars['Boolean'];
};

export type HeroNameConditionalInclusionQuery = { __typename?: 'Query' } & {
  hero: Types.Maybe<
    ({ __typename?: 'Human' } & Pick<Types.Human, 'name'>) | ({ __typename?: 'Droid' } & Pick<Types.Droid, 'name'>)
  >;
};

export type HeroNameConditionalExclusionQueryVariables = {
  episode?: Types.Maybe<Types.Episode>;
  skipName: Types.Scalars['Boolean'];
};

export type HeroNameConditionalExclusionQuery = { __typename?: 'Query' } & {
  hero: Types.Maybe<
    ({ __typename?: 'Human' } & Pick<Types.Human, 'name'>) | ({ __typename?: 'Droid' } & Pick<Types.Droid, 'name'>)
  >;
};

export const HeroNameConditionalInclusionDocument = gql`
  query HeroNameConditionalInclusion($episode: Episode, $includeName: Boolean!) {
    hero(episode: $episode) {
      name @include(if: $includeName)
    }
  }
`;
export type HeroNameConditionalInclusionComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<
    HeroNameConditionalInclusionQuery,
    HeroNameConditionalInclusionQueryVariables
  >,
  'query'
> &
  ({ variables: HeroNameConditionalInclusionQueryVariables; skip?: boolean } | { skip: boolean });

export const HeroNameConditionalInclusionComponent = (props: HeroNameConditionalInclusionComponentProps) => (
  <ApolloReactComponents.Query<HeroNameConditionalInclusionQuery, HeroNameConditionalInclusionQueryVariables>
    query={HeroNameConditionalInclusionDocument}
    {...props}
  />
);

export type HeroNameConditionalInclusionProps<TChildProps = {}> = ApolloReactHoc.DataProps<
  HeroNameConditionalInclusionQuery,
  HeroNameConditionalInclusionQueryVariables
> &
  TChildProps;
export function withHeroNameConditionalInclusion<TProps, TChildProps = {}>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    HeroNameConditionalInclusionQuery,
    HeroNameConditionalInclusionQueryVariables,
    HeroNameConditionalInclusionProps<TChildProps>
  >
) {
  return ApolloReactHoc.withQuery<
    TProps,
    HeroNameConditionalInclusionQuery,
    HeroNameConditionalInclusionQueryVariables,
    HeroNameConditionalInclusionProps<TChildProps>
  >(HeroNameConditionalInclusionDocument, {
    alias: 'heroNameConditionalInclusion',
    ...operationOptions,
  });
}
export type HeroNameConditionalInclusionQueryResult = ApolloReactCommon.QueryResult<
  HeroNameConditionalInclusionQuery,
  HeroNameConditionalInclusionQueryVariables
>;
export const HeroNameConditionalExclusionDocument = gql`
  query HeroNameConditionalExclusion($episode: Episode, $skipName: Boolean!) {
    hero(episode: $episode) {
      name @skip(if: $skipName)
    }
  }
`;
export type HeroNameConditionalExclusionComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<
    HeroNameConditionalExclusionQuery,
    HeroNameConditionalExclusionQueryVariables
  >,
  'query'
> &
  ({ variables: HeroNameConditionalExclusionQueryVariables; skip?: boolean } | { skip: boolean });

export const HeroNameConditionalExclusionComponent = (props: HeroNameConditionalExclusionComponentProps) => (
  <ApolloReactComponents.Query<HeroNameConditionalExclusionQuery, HeroNameConditionalExclusionQueryVariables>
    query={HeroNameConditionalExclusionDocument}
    {...props}
  />
);

export type HeroNameConditionalExclusionProps<TChildProps = {}> = ApolloReactHoc.DataProps<
  HeroNameConditionalExclusionQuery,
  HeroNameConditionalExclusionQueryVariables
> &
  TChildProps;
export function withHeroNameConditionalExclusion<TProps, TChildProps = {}>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    HeroNameConditionalExclusionQuery,
    HeroNameConditionalExclusionQueryVariables,
    HeroNameConditionalExclusionProps<TChildProps>
  >
) {
  return ApolloReactHoc.withQuery<
    TProps,
    HeroNameConditionalExclusionQuery,
    HeroNameConditionalExclusionQueryVariables,
    HeroNameConditionalExclusionProps<TChildProps>
  >(HeroNameConditionalExclusionDocument, {
    alias: 'heroNameConditionalExclusion',
    ...operationOptions,
  });
}
export type HeroNameConditionalExclusionQueryResult = ApolloReactCommon.QueryResult<
  HeroNameConditionalExclusionQuery,
  HeroNameConditionalExclusionQueryVariables
>;
