const replaceManagedData = require('../../common/utils/dollar')

const _object = (row, user, now) => {
  Object.keys(row).forEach(k => {
    replaceManagedData(row, k, user, now)
  })
}

const _array = (row, user, now) => {
  for (let i = 0; i < row.length; i++) {
    replaceManagedData(row, i, user, now)
  }
}

const entries = (_entries, user, now) => {
  if (!Array.isArray(_entries)) _object(_entries, user, now)
  else for (const row of _entries) _object(row, user, now)
}

const values = (_values, user, now) => {
  _array(_values, user, now)
}

const rows = (_rows, user, now) => {
  for (const row of _rows) _array(row, user, now)
}

const data = (_data, user, now) => {
  _object(_data, user, now)
}

module.exports = {
  entries,
  values,
  rows,
  data
}
