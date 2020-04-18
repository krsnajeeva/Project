var sql = require("mssql");
var connect = function()
{
    var conn = new sql.ConnectionPool({
        user: 'sa',
        password: 'Krsna53382',
        server: 'localhost',
        database: 'TrialDB',
        // enableArithAbort: true
    });

    return conn;
};

module.exports = connect;