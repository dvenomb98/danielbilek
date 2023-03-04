import moment, { Moment } from 'moment';

export const formatDate = (date: string | Date | Moment) => moment(date).format('LL');
