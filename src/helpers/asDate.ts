export const asDate = (x: any, format = '') => {
  const date = new Date(x);
  date.setMinutes(date.getMinutes() + date.getTimezoneOffset());


  const Format = new Intl.DateTimeFormat('pt-BR', format ? {
    day: format.includes('d') ? 'numeric' : undefined,
    month: format.includes('m') ? 'numeric' : undefined,
    year: format.includes('y') ? 'numeric' : undefined,
    hour: format.includes('h') ? 'numeric' : undefined, 
    minute: format.includes('i') ? 'numeric' : undefined, 
    second: format.includes('s') ? 'numeric' : undefined
  } : {}).format(date)

  console.log( Format );
  // console.log(spreads[0], spreads[1], spreads[2]);
  // date.setDate(date.getDate() + 1)
  // date.setHours(0);
  return Format;
}