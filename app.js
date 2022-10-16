const _ = require('lodash');

const arr = [3,1,3,3,7];

console.log(_.mean(arr));

console.log(_.min(arr));

console.log(_.max(arr));

const user = {
    name: 'Imie',
    surname: 'Nazwisko',
    allGrades: [
        {
            subjectName: 'Name1',
            grades: [5,4,3,5,2],
            weight: 3
        },
        {
            subjectName: 'Name2',
            grades: [3,3.5,2],
            weight: 1
        },
        {
            subjectName: 'Name3',
            grades: [4,3,3.5],
            weight: 5
        }
    ]
}
function userinfo(user){
    let srednia=0;
    let wagi=0;
    let srednia_wazona;

    for (const userElement of user.allGrades) {
        for (const userElementElement of userElement.grades) {
            srednia+=userElementElement*userElement.weight;
            wagi+=userElement.weight;
        }
    }
    srednia_wazona=srednia/wagi


    console.log('Imie: '+user.name)
    console.log('Nazwisko: '+user.surname)
    console.log('średnia ważona: '+srednia_wazona)

    console.log(_.find(user.allGrades, {weight: 1}))
}

userinfo(user)

const collections = [
    {},
    15,
    "hello@test.pl",
    null,
    ['aaa', 'bbb', 5],
    'admin@gmail.com',
    undefined,
    'a34@yahoo.com',
    '321@a',
    '321.pl'
];

function getMails(collection) {
    const reg = new RegExp(/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/, "gm");

    collection = collections;

    let mails = [];

    for (const Element of collection) {
        if (reg.test(Element)){
            mails.push(Element)
        }
    }
    mails.sort()
    console.log(mails)
}

getMails(collections)

