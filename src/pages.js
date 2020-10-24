const orfanato = require('./database/fakedata.js')



module.exports = {
    index(req, res) {
        const city = req.query.city
        return res.render('index')
    },
    orfanato(req, res) {
        return res.render('orfanato')

    },
    orfanatos(req, res) {
        return res.render('orfanatos', { orfanato })

    },
    createOrfa(req, res) {
        return res.render('create-orfa')

    }
}