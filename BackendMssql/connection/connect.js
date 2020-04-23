var sql = require("mssql");
var connect = function()
{
    var conn = new sql.ConnectionPool({
        // user: 'sa',
        // password: 'Krsna53382',
        // server: 'localhost',
        // database: 'TrialDB',
        // enableArithAbort: true

        user: 'sfcsadmin',
        password: 'Am$87c!Id4m31&',
        server: '13.71.115.202',
        database: 'DEVCMSDB01',
    });

    return conn;
};

module.exports = connect;