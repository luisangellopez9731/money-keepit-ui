export const currencyFormat = (num: number) => {
  let formatted = Intl.NumberFormat('en-US').format(parseInt(num.toFixed(2)))
  if(!/\./.test(formatted)) {
    formatted += '.00'
  }
  return formatted;
}