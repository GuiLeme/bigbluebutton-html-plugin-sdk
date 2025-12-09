import { DeepPartial } from '../../../../data-consumption/factory/types';
import { useProjectedValue } from '../../../../data-consumption/factory/hooks';
import { DataConsumptionHooks } from '../../../enums';
import { createDataConsumptionHook } from '../../../factory/hookCreator';
import { MeetingData } from './types';

export const useMeetingData = (
  projectionFunction?: (q: MeetingData) => DeepPartial<MeetingData>,
) => useProjectedValue<MeetingData>(
  createDataConsumptionHook<
    MeetingData
  >(
    DataConsumptionHooks.MEETING_DATA,
  ),
  projectionFunction,
);
