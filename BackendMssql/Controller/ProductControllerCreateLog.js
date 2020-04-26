var express = require('express');
var router = express.Router();
var sql = require("mssql");
var conn = require("../connection/connect")();

var routes = function () {
    router.route('/:id')
        .post(function (req, res) {
            var name = req.params.name;
            var messge = req.params.messge;
            var HelpdeskID = req.params.id;
            conn.connect().then(function () {
                var transaction = new sql.Transaction(conn);
                transaction.begin().then(function () {
                    var sqlQuery = "Insert Into Issue_Lognote (name, messge, createdDate, HelpdeskID) values (@name, @messge, getDate(),@id)";
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