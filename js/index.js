
const thead = $('#thead tr')
const tbody = $('#tbody')

let canonical = []
let childs = []
let childsArr = []

Object.keys(links).forEach(e => {
    Object.keys(links[e]).forEach(el => {
        childsArr.push(el)
    });
    canonical.push(e)
});

// canonical.forEach((e) => {


//     childs.push(links[e])
// })

const newChildArr = childsArr.filter(function(elem, pos) {
    return childsArr.indexOf(elem) == pos;
});

newChildArr.forEach((e) => {
    const th = $('<th></th>'); 
    thead.append(th)
    th.text(e)
})

for (const [key, value] of Object.entries(links)) {
    const tr = $('<tr></tr>'); 
    const td = $('<td></td>');
    tbody.append(tr)
    tr.append(td)
    td.text(key)
    for (const [k, v] of Object.entries(value)) {
        
        if (key.indexOf(k)) {
            console.log(v);
            const td = $('<td></td>');
            tr.append(td)
            td.text(v)
        } else {
            const td = $('<td></td>');
            tr.append(td)
            td.text('')
        }
    }
}

// childs.forEach((e) => {
//     Object.values(newChildArr).forEach(el => {
//         console.log(e[el]);
//     })
// })

// console.log(canonical);
// console.log(newChildArr);
// console.log(childs);

