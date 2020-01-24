"use strict";
const db = require('../repository');
const helper = require('../helper');

exports.reportsData = async (req, res) => {
    try {
        if (!req.body.collection) {
            res.status(200).json(helper.error_message('Required Data Missing.'));
        } else {
            if (req.body.limit !== null) {
                req.body.limit =  Number(req.body.limit);
            }
            const data = await db.rawget('companies', {}, req.body.limit);
            res.status(200).json(helper.success_message(data));
        }
    } catch (e) {
        console.log(e);
        res.status(200).json(helper.error_message(e));
    }
}