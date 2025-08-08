import { DataConsumptionHooks } from '../../../../data-consumption/enums';
import { createDataConsumptionHook } from '../../../factory/hookCreator';
import { UsersBasicInfoResponseFromGraphqlWrapper } from './types';

export const useUsersBasicInfo = () => createDataConsumptionHook<
  UsersBasicInfoResponseFromGraphqlWrapper>(
    DataConsumptionHooks.USERS_BASIC_INFO,
  );
