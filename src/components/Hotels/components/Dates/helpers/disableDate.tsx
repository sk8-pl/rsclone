import moment, { Moment } from "moment";

export const disabledDate = (current: Moment) => {
  const customDate = new Date();
  return current && current < moment(customDate, "YYYY-MM-DD");
};
