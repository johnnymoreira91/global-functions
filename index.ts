import moment from './modules/moment-timezone'
import { fluxo_infracao } from './interface/fluxo_infracao'

export { fluxo_infracao }

export async function MediaDWY(array) {
  const data = array
  const total = ReduceQtdePassagemDia(data)
  const media = getMedia(data.length, total)
  return media
}

export async function MediaDay(array) {
  const data = ChangeDate(array)
  const dateArray = []
  let mapDates = data.map(obj => obj.data)
  mapDates = [...new Set(mapDates)]
  for (const date of mapDates) {
    const filterDay = data.filter(obj => obj.data === date)
    const reduce = ReduceQtdePassagemDia(filterDay)
    let media = getMedia(filterDay.length, reduce)
    media = Math.round(media * 100) / 100
    const obj = {
      date: date,
      total_passage_day: reduce,
      media_day: media
    }
    dateArray.push(obj)
  }
  return dateArray
}

export function ReduceQtdePassagemDia(array) {
  const passagens = []
  for (const obj of array) {
    passagens.push(obj.qtde_passagem_dia)
  }
  const reduceArray = passagens.reduce((total, currentElement) => total + currentElement)
  return reduceArray
}

export function ChangeDate(array) {
  const data = array
  const alteredData = []
  for (const obj of data) {
    obj.data = moment(obj.data).tz('Europe/Lisbon').format('YYYY-MM-DD')
    alteredData.push(obj)
  }
  return alteredData
}

export function getMedia(total, value) {
  const a = total
  const b = value
  const media = value / total
  return media
}