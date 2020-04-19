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
                    var request = new sql.Request(transaction);
                    request.input("id", sql.Int, _productID)
                    request.execute("sp_FindOneHelpDesk").then(function () {
                        transaction.commit().then(function (recordSet) {
                            conn.close();
                            res.status(200).send(req.body);
                            // res.status(200).json("id:" + _productID);
                        }).catch(function (err) {
                            conn.close();
                            res.status(400).send("Error while Deleting data");
                        });
                    }).catch(function (err) {
                        conn.close();
                        res.status(400).send("Error while procedure");
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