const isNavigationToMany = req => {
  // REVISIT: get rid of getUriInfo
  if (!req.getUriInfo) return

  const segments = req.getUriInfo().getPathSegments()
  return segments[segments.length - 1].getKind() === 'NAVIGATION.TO.MANY'
}

module.exports = {
  isNavigationToMany
}
