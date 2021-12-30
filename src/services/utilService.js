export function makeId(length = 5) {
  var text = ''
  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length))
  }
  return text
}

export function parseSeconds(seconds) {
  let date = new Date(0)
  date.setSeconds(seconds)
  let timeString = date.toISOString().substr(11, 8)
  return timeString.startsWith('00') ? timeString.substring(3) : timeString
}

export function parseISO(iso) {
  return iso.substring(0, 10)
}
