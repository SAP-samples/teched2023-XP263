function timestampToISO(ts) {
  if (typeof ts === 'number') return new Date(ts).toISOString()
  if (ts instanceof Date) return ts.toISOString()
  return ts
}

module.exports = {
  timestampToISO
}
