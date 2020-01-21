"use strict";
const db = require('../repository');
const helper = require('../helper');

exports.reportsData = async (req, res) => {
    try {
        const data = await db.rawget('heads', {});
        res.status(200).json(helper.success_message(data));
    } catch (e) {
        res.status(200).json(helper.error_message(e));
    }
}