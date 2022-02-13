module.exports = function (app, connection) {

    app.get('/test', (req, res) => {
       res.send('Testing Aglet Test App API server')
    });

    // Get user
    app.get('/user', (req, res) => {
        const user = req.body;
        connection.query('SELECT * FROM movieapp.users WHERE id = '+ 1, user, (err, rows) => {
            if (err) {
                res.status(400).send('User Not Found')
            } else {
                console.log(`User received for Id: ${req.params.id}  Db:\n`);
                console.log(rows);
                res.status(200).send(rows)
            }
        });
    })
}
