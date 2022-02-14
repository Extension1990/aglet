module.exports = function (app, connection) {

    //Add movie to favorites
    app.post('/add/fav-movie', (req, res) => {
        const movie = req.body;
        connection.query('INSERT INTO movieapp.favmovies SET ?', movie, (err, rows) => {
            if (err) {
                res.status(404).send('Couldnot add movie to favorites.');
            } else {
                res.status(200).send(rows);
            }
        });
    })
}
