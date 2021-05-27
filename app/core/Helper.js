
import {DateTime} from 'luxon';

/**
 *
 */
class Helper {
  /**
   *
   * @param {string} timeZone
   * @param {string} difference
   * @param {string} offset
   * @return {DateTime}
   */
  dateTimeFromTimeZone(timeZone, difference, offset) {
    let dateTime = DateTime.local().setZone(timeZone);

    if (offset !== undefined) {
      switch (difference) {
        case '+':
          dateTime = dateTime.plus({hours: offset});
          break;
        case '-':
          dateTime = dateTime.minus({hours: offset});
          break;
      }
    }

    return dateTime;
  }
}

export default new Helper;
