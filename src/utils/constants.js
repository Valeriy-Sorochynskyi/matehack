const currentTime = new Date();
const monthNow = currentTime.getMonth() + 1;
const yearNow = currentTime.getFullYear();
const monthes = [
  'Январь',
  'Февраль',
  'Март',
  'Апрель',
  'Май',
  'Июнь',
  'Июль',
  'Август',
  'Сентябрь',
  'Октябрь',
  'Ноябрь',
  'Декабрь',
];
export const daysTitle = [
  'Sun',
  'Mon',
  'Tue',
  'Wed',
  'Thu',
  'Fri',
  'Sat',
];

export default {
  currentTime, monthNow, yearNow, monthes, daysTitle,
};
