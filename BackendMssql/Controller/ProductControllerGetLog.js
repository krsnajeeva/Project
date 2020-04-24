var express = require('express');
var router = express.Router();
var sql = require("mssql");
var conn = require("../connection/connect")();

var routes = function () {
    router.route('/:id')
        .get(function (req, res) {
            var _productID = req.params.id;
            conn.connect().then(function () {
                var transaction = new sql.Transaction(conn);
                transaction.begin().then(function () {
                    var sqlQuery = "Select name, messge, convert(varchar, [createdDate], 100) as createdDate, HelpdeskID from Issue_Lognote where HelpdeskID ="+_productID+"order by createdDate asc";
                    var req = new sql.Request(conn);
                    req.query(sqlQuery).then(function (recordset) {
                        res.json(recordset.recordset);
                        conn.close();
                    })
                        .catch(function (err) {
                            conn.close();
                            res.status(400).send("Error while data");
                        });
                }).catch(function (err) {
                    conn.close();
                    res.status(400).send("Error while connecting");
                });
            })
        });
    return router;
};
module.exports = routes;