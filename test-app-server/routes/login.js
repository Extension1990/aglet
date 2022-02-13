module.exports = function (app, connection) {
    app.post('/login', function(request, response) {
        
        let email = request.body.email;
        let password = request.body.password;
        
        if (email && password) {
            
            connection.query('SELECT * FROM users WHERE email = ? AND password = ?', [email, password], function(error, results, fields) {

                if (error) throw error;

                if (results.length > 0) {
                    response.send(results);
                } else {
                    response.send('Incorrect email and/or password!');
                }			
                response.end();
            });
        } else {
            response.send('Please enter Username and Password!');
            response.end();
        }
    });
}