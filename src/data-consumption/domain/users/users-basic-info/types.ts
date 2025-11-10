import { GraphqlResponseWrapper } from '../../../../core';

export interface UsersBasicInfoData {
  userId: string;
  extId: string;
  name: string;
  nameSortable: string;
  /**
   * @deprecated use {@link isModerator} instead
   */
  role: string;
  avatar: string;
  color: string;
  isModerator: boolean;
  presenter: boolean;
}

export interface UsersBasicInfoResponseFromGraphqlWrapper {
  user: UsersBasicInfoData[];
}

export type UseUsersBasicInfoFunction = () => GraphqlResponseWrapper<
  UsersBasicInfoResponseFromGraphqlWrapper
>;
