import { CustomQueryArguments } from './custom-query/types';
import { CustomSubscriptionArguments } from './custom-subscription/types';

export type DataConsumptionArguments = CustomSubscriptionArguments | CustomQueryArguments;
