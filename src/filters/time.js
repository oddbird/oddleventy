'use strict';

const dateFormat = require('date-fns/format');
const { utcToZonedTime } = require('date-fns-tz');

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

const now = () => new Date();

const formatDate = (date, format) => {
  // https://date-fns.org/v2.21.2/docs/format
  const formats = {
    month_date: 'MMM d',
    iso: 'yyyy-MM-dd',
    range: 'MMM yyyy',
    date: 'd',
    short_month: 'MMM',
    month: 'MMMM',
    year: 'yyyy',
    date_year: 'd, yyyy',
    url: 'yyyy/MM/dd',
    short: 'PP',
    long: 'MMMM d, yyyy',
  };

  return dateFormat(utcToZonedTime(date, '+00:00'), formats[format] || format);
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
const getDate = (date, format) => {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return format ? formatDate(dateObj, format) : dateObj;
};

module.exports = { now, getDate };
