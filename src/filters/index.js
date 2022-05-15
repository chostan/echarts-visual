import moment from 'moment';

export function tansformDate(time, format = 'YYYY-MM-DD HH:mm:ss') {
  return moment(time).format(format);
}
