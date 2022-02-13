module.exports = function (app, connection) {
    app.post('/login', function(request, response) {
        
        let email = request.body.email;
        let password = request.body.password;
        
        if (email && password) {
            
            connection.query('SELECT * FROM users WHERE email = ? AND password = ?', [email, password], function(error, results, fields) {

                // If there is an issue with the query, output the error
                if (error) throw error;

                // If the account exists
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