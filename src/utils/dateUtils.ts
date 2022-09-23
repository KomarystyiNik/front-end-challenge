const MINUTE_IN_HOUR = 60;
const SECOND_IN_MINUTE = 60;
const MS_IN_SECOND = 1000;

class Duration {
  hour: number;
  minute: number;
  second: number;

  constructor(hour: number, minute: number, second: number) {
    this.hour = hour;
    this.minute = minute;
    this.second = second;
  }

  private formatNumber(number: number) {
    const locale = navigator.language;

    return new Intl.NumberFormat(locale, {
      style: 'decimal',
      minimumIntegerDigits: 2,
    }).format(number);
  }

  toString() {
    return `${this.formatNumber(this.hour)}:${this.formatNumber(
      this.minute
    )}:${this.formatNumber(this.second)}`;
  }
}

export const formatDuration = (duration: number): Duration => {
  if (duration < 0) duration = -duration;

  let seconds = Math.floor(duration / MS_IN_SECOND);
  let minutes = Math.floor(seconds / SECOND_IN_MINUTE);
  const hours = Math.floor(minutes / MINUTE_IN_HOUR);

  seconds = seconds % SECOND_IN_MINUTE;
  minutes = minutes % MINUTE_IN_HOUR;

  return new Duration(hours, minutes, seconds);
};
