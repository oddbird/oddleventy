import { UTCDateMini } from '@date-fns/utc';
import { format as dateFormat } from 'date-fns';

/* @docs
label: Date & Time Filters
category: File
note: |
  In addition to the date/time filters,
  we have a `getDate` shortcode
  that outputs the current date in a given format.
example: |
  Copyright &copy; {% getDate 'year' %}
*/

export const now = () => new Date();

const formatDate = (date, format) => {
  // https://date-fns.org/v2.21.2/docs/format
  const formats = {
    day: 'd',
    month: 'MMM',
    year: 'yyyy',
    long_month: 'MMMM',
    day_year: 'd, yyyy',
    month_day: 'MMM d',
    month_year: 'MMM yyyy',
    short: 'PP',
    long: 'MMMM d, yyyy',
    iso: 'yyyy-MM-dd',
    url: 'yyyy/MM/dd',
  };

  if (!formats[format]) {
    // eslint-disable-next-line no-console
    console.warn(`Unknown date format used: "${format}"`);
  }
  return dateFormat(new UTCDateMini(date), formats[format] || format);
};

/* @docs
label: getDate
category: Formatting
note: |
  Returns a date in any format.
example: |
  {{ pubdate | getDate('iso') }}
params:
  date:
    type: date | string
    note: If no date is given, returns the current date
  format:
    type: string
    note: See js file for a list of available date formats
*/
export const getDate = (date, format) => {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return format ? formatDate(dateObj, format) : dateObj;
};
