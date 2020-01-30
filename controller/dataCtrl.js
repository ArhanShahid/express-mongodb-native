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
                req.body.limit = Number(req.body.limit);
            }

            const timeStart = new Date();
            const data = await db.rawget(req.body.collection, {
                // location: 'US-OR'
            }, req.body.limit);
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

            const n = events.concat(eventGenerator(Number(req.body.month), Number(req.body.num)));
            res.status(200).json(helper
                .success_message(n));
        }
    } catch (e) {
        console.log(e);
        res.status(200).json(helper.error_message(e));
    }
}

exports.eventData2 = async (req, res) => {
    try {
        res.status(200).json(helper
            .success_message(generateEvents()));
        
    } catch (e) {
        console.log(e);
        res.status(200).json(helper.error_message(e));
    }
}

exports.createData = async (req, res) => {
    try {
        var a = 0;
        for (var i = 0; i < 10000; i++) {
            var obj = {
                name: `User ${i}`,
                company: `Company ${i} limited.`,
                address: `Building 123 street 11, Flat-${i}`,
                location: `sdgfhsdghfgdshf-${i}`,
                lat: `1231.123.12-${i}`,
                long: `123123.123.1-${i}`,
                email: `asdf@sadf.com-${i}`,
                email2: `asdf@sadf.com-${i}`,
                phone: `23423432432-${i}`,
                contact: `23423423423-${i}`,
                createdDate: `123213123-${i}`,
                vision: `saf sad asdf asdf asdfa fds asdf adsf adsf wersvbxc xc zxc-${i}`,
                manager: `John Def-${i}`,
                NTN: `234 324324 234234 -${i}`,
                employees: `Devid -${i}`,
                country: `united States of peoples-${i}`,
                products: `testing -${i}`,
                items: `ecomerce items -${i}`,
                documents: `testing doc -${i}`,
                owners: `farhan -${i}`,
                records: `comapany -${i}`,
                details: {
                    documents: `tax doc-${i}`,
                    owners: `Usman -${i}`,
                    createdDate: `324234 3243242-${i}`,
                    vision: `alpha bravo charlie docker abc -${i}`
                }
            }
            if (i < 3000) {
                obj.location = 'US-VA';
            } else {
                obj.location = 'US-OR';

            }
            db.createData(obj);
            console.log(a++);
        }


        res.status(200).json(helper.success_message('Done'));

    } catch (e) {
        console.log(e);
        res.status(200).json(helper.error_message(e));
    }
}


function eventGenerator(month, num) {
    const arr = [];
    for (let i = 1; i <= num; i++) {
        const id = i;
        const date = Math.floor(Math.random() * 24) + 1;
        const hour = Math.floor(Math.random() * 24) + 1;
        const nextHour = hour + 1;
        arr.push({
            'id': id,
            'title': `App ${id}`,
            'start': `2020-0${month}-${date}T${hour}:00:00`,
            'end': `2020-0${month}-${date}T${nextHour}:00:00`,
            'color': '#00D6D6',
            'backgroundColor': '#00D6D6',
            'allDay': false,
            'textColor': '#FFFFFF',
            'extendedProps': {
                data: 'Data'
            }
        });
    }
    return arr;
}


function generateEvents() {
    const subjectCollection = ['Oil Change', 'Brake Shoe Change', 'Engine Repair'];
    const collections = [];
    const dataCollections = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let id = 1;
    for (const data of dataCollections) {
        const startDate = new Date(2020, 0, 1);
        startDate.setMilliseconds(1000 * 60 * 60 * .5 * (data - 1));
        const lastDate = new Date((+startDate) + (1000 * 60 * 60 * 24 * 30));
        for (let date = startDate; date.getTime() < lastDate.getTime(); date = new Date(date.getTime() + (1000 * 60 * 60 * 5))) {
            const strDate = new Date(+date);
            const endDate = new Date((+strDate) + (1000 * 60 * 60 * (2.5 + (0.5 * data))));
            collections.push({
                Id: id,
                Subject: subjectCollection[id % 2],
                StartTime: new Date(+strDate),
                EndTime: new Date(+endDate),
                TechnicianId: data
            });
            id += 1;
        }
    }
    return collections;
}