module.exports = function (app, connection) {

    //Add movie to favorites
    app.post('/api/fav-movies', (req, res) => {
        const movie = req.body;
        console.log(movie)
        connection.query('INSERT INTO favmovies.movie SET ?', movie, (err, rows) => {
            if (err) {
                console.log(err)
                res.status(404).send('Couldnot add movie to favorites.')

            } else {
                res.status(200).send('Movie added to favorites')
            }
        });
    })
}
