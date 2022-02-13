module.exports = function (app, connection) {
    
    // Get user
    app.get('/user', (req, res) => {
        const user = req.body;
        connection.query('SELECT * FROM movieapp.users WHERE id = '+ 1, user, (err, rows) => {
            if (err) {
                res.status(400).send('User Not Found')
            } else {
                res.status(200).send(rows)
            }
        });
    });

    // Get favoritemovies
    app.get('/fav-movies', (req, res) => {
        const favmovies = req.body;
        connection.query('SELECT * FROM movieapp.favmovies', favmovies, (err, rows) => {
            if (err) {
                res.status(400).send('Movies Not Found')
            } else {
                res.status(200).send(rows)
            }
        });
    });
}
