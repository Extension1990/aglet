module.exports = function (app, fs, jwt) {
    var publicKEY = fs.readFileSync('./public.txt', 'utf8');
    var privateKEY = fs.readFileSync('./private.txt', 'utf8');
    
    var payload = {
        data1: "Data 1",
        data2: "Data 2",
        data3: "Data 3",
        data4: "Data 4",
    };
    var i = 'Mysoft corp';
    var s = 'some@user.com';
    var a = 'http://mysoftcorp.in';
    var signOptions = {
        issuer: i,
        subject: s,
        audience: a,
        expiresIn: "12h",
        algorithm: "RS256" // RSASSA [ "RS256", "RS384", "RS512" ]
    };
    var token = jwt.sign(payload, privateKEY, signOptions);

    app.get('/jwt', (req, res) => {
        try {
            var verifyOptions = {
                issuer: i,
                subject: s,
                audience: a,
                expiresIn: "12h",
                algorithm: ["RS256"]
            };
            var legit = jwt.verify("sdfs", publicKEY, verifyOptions);
            res.send({
                result: JSON.stringify(legit),
                token: token
            });
        } catch (err) {
            console.log("This is the error" + err)
            res.status(404).send("error here")
        }
    
    });
}