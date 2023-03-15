/* eslint-disable space-before-function-paren */
export const calcDaysAgo = (inputDate) => {
  /* Expects inputDate in standard string format 2019-12-21 23:05:59 */
  /* OK: console.log("calcDaysAgo() input = " + inputDate); */
  if (!inputDate || inputDate == null) {
    console.log('inputDate is invalid.')
    return 'Invalid date'
  } else {
    const dateParam = inputDate.split(/[\s-:]/)
    dateParam[1] = (parseInt(dateParam[1], 10) - 1).toString()
    const itemDate = new Date(...dateParam)
    /* TEST SAM: The next line adds 3 hours to show DH DB's PST as FF EST: */
    /* itemDate.setTime(itemDate.getTime() + 3 * 60 * 60 * 1000); */
    const itemTimeString = itemDate.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit'
    }) /* Returns '7:30 PM' */
    const today = new Date()
    const daysAgoInteger = Math.round(Math.abs((itemDate.getTime() - today.getTime()) / (24 * 60 * 60 * 1000)))
    if (daysAgoInteger > 1) {
      return daysAgoInteger + ' days ago'
    } else {
      if (daysAgoInteger === 1) {
        return 'Yesterday at ' + itemTimeString
      } else if (daysAgoInteger === 0) {
        return 'Today at ' + itemTimeString
      }
    }
  }
}
