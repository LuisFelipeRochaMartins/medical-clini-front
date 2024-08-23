export function getDayMonthAndHours(date: Date) {
  return `${formatDayAndMonth(date)}: ${formatHours(date)}`
}

function formatDayAndMonth(date: Date) {
  const day = date.getDate()
  const month = date.getMonth() + 1

  const formattedDay = day > 9 ? day : `0${day}`
  const formattedMonth = month > 9 ? month : `0${month}`

  return `${formattedDay}/${formattedMonth}`
}

function formatHours(date: Date) {
  const hours = date.getHours()
  const min = date.getMinutes()

  const formattedHours = hours > 9 ? hours : `0${hours}` 
  const formattedMin = min > 9 ? min : `0${min}` 

  return `${formattedHours}:${formattedMin}`
}