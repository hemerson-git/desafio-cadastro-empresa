export function convertMillisecondsToYears(milliseconds: number) {
  const millisecondsPerMinute = 1000 * 60; // Number of milliseconds in a minute
  const minutesPerHour = 60; // Number of minutes in an hour
  const hoursPerDay = 24; // Number of hours in a day
  const daysPerYear = 365; // Number of days in a year

  const millisecondsPerYear =
    millisecondsPerMinute * minutesPerHour * hoursPerDay * daysPerYear;

  const years = Math.floor(milliseconds / millisecondsPerYear);
  return years;
}
