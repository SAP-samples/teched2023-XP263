function getObjectAndDataSubject(entry) {
  const { dataObject, dataSubject } = entry
  dataObject.id = dataObject.id.reduce((acc, cur) => {
    acc[cur.keyName] = cur.value
    return acc
  }, {})
  if (dataSubject) {
    dataSubject.id = dataSubject.id.reduce((acc, cur) => {
      acc[cur.keyName] = cur.value
      return acc
    }, {})
  }
  return { dataObject, dataSubject }
}

function getAttributeToLog(ele) {
  return { name: ele.name, old: ele.oldValue || 'null', new: ele.newValue || 'null' }
}

module.exports = {
  getObjectAndDataSubject,
  getAttributeToLog
}
