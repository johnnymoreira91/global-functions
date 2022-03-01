import { asDate } from './helpers/asDate'
import { fluxo_infracao } from './interface/fluxo_infracao'
import 'prototypes-array'

export { fluxo_infracao }

export const MediaDWY = async(array: fluxo_infracao[]) => {
  const data = array
  const total = ReduceQtdePassagemDia(data)
  const media = getMedia(data.length, total)
  return media
}

export const MediaDay = async(array: fluxo_infracao[]) => {
  const data = ChangeDate(array)
  const dateArray = []
  let mapDates = data.Distinct('data')
  for (const date of mapDates) {
    const filterDay = data.filter(obj => asDate(obj.data) === asDate(date))
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

export const ReduceQtdePassagemDia = (array: fluxo_infracao[]) => {
  const passagens = []
  for (const obj of array) {
    passagens.push(obj.qtde_passagem_dia)
  }
  const reduceArray = passagens.reduce((total, currentElement) => total + currentElement)
  return reduceArray
}

export const ChangeDate = (array: fluxo_infracao[]) => {
  const data = array
  const alteredData = []
  for (const obj of data) {
    const x = asDate(obj.data)
    alteredData.push({...obj, data:x})
  }
  return alteredData
}

export const getMedia = (total: number, value: number) => {
  const media = value / total
  return media
}