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
            const timeStart = new Date();
            const data = await db.rawget(req.body.collection, {}, req.body.limit);
            res.status(200).json(helper.success_message(data));
        }
    } catch (e) {
        console.log(e);
        res.status(200).json(helper.error_message(e));
    }
}

exports.eventData = async (req, res) => {
    try {
        if (!req.body.month && !req.body.num) {
            res.status(200).json(helper.error_message('Required Data Missing.'));
        } else {
            res.status(200).json(helper
                .success_message(eventGenerator(Number(req.body.month),
                Number(req.body.num))));
        }
    } catch (e) {
        console.log(e);
        res.status(200).json(helper.error_message(e));
    }
}

function eventGenerator (month, num) {
    const arr = [];
    for (let i = 1; i <= num; i++) {
        const id = i;
        const date = Math.floor(Math.random() * 24) + 1;
        const hour = Math.floor(Math.random() * 24) + 1;
        const nextHour = hour + 1;
        arr.push({
            'id': id,
            'title': `Appointment ${id}`,
            'start': `2020-0${month}-${date}T${hour}:00:00`,
            'end': `2020-0${month}-${date}T${nextHour}:00:00`,
            'color': '#bad066',
            'backgroundColor': '#f3f0f0',
            'allDay': false,
            'textColor': '#000000',
            'extendedProps': {
                data: 'Data'
            }
        });
    }
    return arr;
}
