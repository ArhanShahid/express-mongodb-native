"use strict";
const db = require('../repository');
const helper = require('../helper');

exports.reportsData = async (req, res) => {
    try {
        const data = await db.rawget('companies', {});
        res.status(200).json(helper.success_message(data));
    } catch (e) {
        console.log(e);
        res.status(200).json(helper.error_message(e));
    }
}