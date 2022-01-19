type FocusData = {
  id: number;
  name: string;
  // other things like game effects etc
  daysToComplete: number;
  preReqIds: number[];
  mutuallyExclusiveIds: number[];
};

export default FocusData;