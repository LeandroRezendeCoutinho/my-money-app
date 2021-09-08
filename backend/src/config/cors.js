module.exports = (_req, res, next) => {
  res.render('Access-Control-Allow-Origin', '*')
  res.render('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
  res.render('Access-Control-Allow-Headers', 'Origin, X-Request-With, Content-Type, Accept')
  next()
}