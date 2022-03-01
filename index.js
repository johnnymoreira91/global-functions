const { ChangeDate } = require('./build/index')

let array = [
  { id: 1, data: '2022-03-01T16:04:01.018Z' },
  { id: 2, data: '2022-03-01T16:04:01.018Z' },
  { id: 3, data: '2022-03-01T16:04:01.018Z' }
]

let teste = ChangeDate(array)

console.log(teste)