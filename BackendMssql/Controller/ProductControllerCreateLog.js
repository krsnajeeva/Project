var express = require('express');
var router = express.Router();
var sql = require("mssql");
var conn = require("../connection/connect")();

var routes = function () {
    router.route('/')
        .post(function (req, res) {
            conn.connect().then(function () {
                var transaction = new sql.Transaction(conn);
                transaction.begin().then(function () {
                    var request = new sql.Request(transaction);
                    request.input("Name", sql.VarChar(30), req.body.name);
                    request.input("Message", sql.VarChar(30), req.body.message)
                    request.input("HelpdeskID", sql.Int, req.body.id);
                    request.execute("sp_InsertLogNote")
                        .then(function () {
                            transaction.commit().then(function (recordSet) {
                                conn.close();
                                res.status(200).send(req.body);
                            }).catch(function (err) {
                                conn.close();
                                res.status(400).send("Error while inserting data", err);
                            });
                        }).catch(function (err) {
                            conn.close();
                            res.status(400).send("Error while procedure", err);
                        });
                }).catch(function (err) {
                    conn.close();
                    res.status(400).send("Error while request data");
                });
            }).catch(function (err) {
                conn.close();
                res.status(400).send("Error while connecting");
            });
        });
    return router;
};
module.exports = routes;