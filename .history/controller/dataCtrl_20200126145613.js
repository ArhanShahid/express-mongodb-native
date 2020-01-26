"use strict";
const db = require('../repository');
const helper = require('../helper');
const moment = require('moment');

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
            const timeEnd = new Date();
            const sec = moment.utc(moment(timeEnd, 'HH:mm:ss').diff(moment(timeStart, 'HH:mm:ss'))).format('ss')
            console.log(`Start: ${timeStart}, End: ${timeEnd}, Sec: ${sec}`);
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
            const events = [
                {
                    'id': '1',
                    'title': 'Event 1',
                    'start': '2020-01-27',
                    'color': '#00D6D6',
                    'backgroundColor': '#00D6D6',
                    'allDay': true,
                    'textColor': '#FFFFFF',
                    'extendedProps': {
                        data: 'Data'
                    },
                },
                {
                    'id': '2',
                    'title': 'Event 2',
                    'start': '2020-01-27T02:00:00',
                    'end': '2020-01-27T03:00:00',
                    'color': '#00D6D6',
                    'backgroundColor': '#00D6D6',
                    'allDay': false,
                    'textColor': '#FFFFFF',
                    'extendedProps': {
                        data: 'Data'
                    },
                },
                {
                    'id': '3',
                    'title': 'Event 3',
                    'start': '2020-01-27T05:00:00',
                    'end': '2020-01-27T07:00:00',
                    'color': '#00D6D6',
                    'backgroundColor': '#00D6D6',
                    'allDay': false,
                    'textColor': '#FFFFFF',
                    'extendedProps': {
                        data: 'Data'
                    },
                },
                {
                    'id': '4',
                    'title': 'Event 4',
                    'start': '2020-01-27T14:00:00',
                    'end': '2020-01-27T17:00:00',
                    'color': '#00D6D6',
                    'backgroundColor': '#00D6D6',
                    'allDay': false,
                    'textColor': '#FFFFFF',
                    'extendedProps': {
                        data: 'Data'
                    },
                },
                {
                    'id': '5',
                    'title': 'Event 5',
                    'start': '2020-01-29',
                    'color': '#00D6D6',
                    'backgroundColor': '#00D6D6',
                    'allDay': true,
                    'textColor': '#FFFFFF',
                    'extendedProps': {
                        data: 'Data'
                    },
                },
                {
                    'id': '6',
                    'title': 'Event 6',
                    'start': '2020-01-29',
                    'color': '#00D6D6',
                    'backgroundColor': '#00D6D6',
                    'allDay': true,
                    'textColor': '#FFFFFF',
                    'extendedProps': {
                        data: 'Data'
                    },
                },
                {
                    'id': '7',
                    'title': 'Event 7',
                    'start': '2020-01-29',
                    'color': '#00D6D6',
                    'backgroundColor': '#00D6D6',
                    'allDay': true,
                    'textColor': '#FFFFFF',
                    'extendedProps': {
                        data: 'Data'
                    },
                },
                {
                    'id': '8',
                    'title': 'Event 8',
                    'start': '2020-01-28T24:00:00',
                    'end': '2020-01-29T01:15:00',
                    'color': '#00D6D6',
                    'backgroundColor': '#00D6D6',
                    'allDay': false,
                    'textColor': '#FFFFFF',
                    'extendedProps': {
                        data: 'Data'
                    },
                },
                {
                    'id': '9',
                    'title': 'Event 9',
                    'start': '2020-01-29T02:00:00',
                    'end': '2020-01-29T03:00:00',
                    'color': '#00D6D6',
                    'backgroundColor': '#00D6D6',
                    'allDay': false,
                    'textColor': '#FFFFFF',
                    'extendedProps': {
                        data: 'Data'
                    },
                },
                {
                    'id': '10',
                    'title': 'Event 10',
                    'start': '2020-01-29T03:00:00',
                    'end': '2020-01-29T04:30:00',
                    'color': '#00D6D6',
                    'backgroundColor': '#00D6D6',
                    'allDay': false,
                    'textColor': '#FFFFFF',
                    'extendedProps': {
                        data: 'Data'
                    },
                },
                {
                    'id': '11',
                    'title': 'Event 11',
                    'start': '2020-01-29T04:50:00',
                    'end': '2020-01-29T06:30:00',
                    'color': '#00D6D6',
                    'backgroundColor': '#00D6D6',
                    'allDay': false,
                    'textColor': '#FFFFFF',
                    'extendedProps': {
                        data: 'Data'
                    },
                },
                {
                    'id': '12',
                    'title': 'Event 12',
                    'start': '2020-01-29T07:30:00',
                    'end': '2020-01-29T08:25:00',
                    'color': '#00D6D6',
                    'backgroundColor': '#00D6D6',
                    'allDay': false,
                    'textColor': '#FFFFFF',
                    'extendedProps': {
                        data: 'Data'
                    },
                },
                {
                    'id': '13',
                    'title': 'Event 13',
                    'start': '2020-01-30',
                    'color': '#00D6D6',
                    'backgroundColor': '#00D6D6',
                    'allDay': true,
                    'textColor': '#FFFFFF',
                    'extendedProps': {
                        data: 'Data'
                    },
                },
                {
                    'id': '14',
                    'title': 'Event 14',
                    'start': '2020-01-31',
                    'color': '#00D6D6',
                    'backgroundColor': '#00D6D6',
                    'allDay': true,
                    'textColor': '#FFFFFF',
                    'extendedProps': {
                        data: 'Data'
                    },
                },
                {
                    'id': '15',
                    'title': 'Event 15',
                    'start': '2020-01-31T02:30:00',
                    'end': '2020-01-31T04:25:00',
                    'color': '#00D6D6',
                    'backgroundColor': '#00D6D6',
                    'allDay': false,
                    'textColor': '#FFFFFF',
                    'extendedProps': {
                        data: 'Data'
                    },
                },
                {
                    'id': '16',
                    'title': 'Event 16',
                    'start': '2020-01-31T07:30:00',
                    'end': '2020-01-31T08:25:00',
                    'color': '#00D6D6',
                    'backgroundColor': '#00D6D6',
                    'allDay': false,
                    'textColor': '#FFFFFF',
                    'extendedProps': {
                        data: 'Data'
                    },
                },
            ];

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
