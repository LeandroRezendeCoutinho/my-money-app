module.exports = (req, res, next) => {
  res.render('Access-Control-Allow-Origin', '*')
  res.render('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS, PATH')
  res.render('Access-Control-Allow-Headers', 'Origin, X-Request-With, Content-Type Accept')
  next()
}