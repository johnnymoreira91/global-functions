import moment from 'moment-timezone'

export function ReduceQtdePassagemDia (array) {
  const passagens = []
  for (const obj of array) {
    passagens.push(obj.qtde_passagem_dia)
  }
  const reduceArray = passagens.reduce((total, currentElement) => total + currentElement)
  return reduceArray
}

export function ChangeDate (array) {
  const data = array
  const alteredData = []
  for (const obj of data) {
    obj.data = moment(obj.data).tz('Europe/Lisbon').format('YYYY-MM-DD')
    alteredData.push(obj)
  }
  return alteredData
}

export function getMedia (total, value) {
  const a = total
  const b = value
  const media = value / total
  return media
}