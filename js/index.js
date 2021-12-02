
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


const newChildArr = childsArr.filter(function(elem, pos) {
    return childsArr.indexOf(elem) == pos;
});

newChildArr.forEach((e) => {
    const th = $('<th></th>'); 
    thead.append(th)
    th.text(e)
})
// for (const [a, b] of Object.entries(canonical)) {
//     for (const [key, value] of Object.entries(links)) {
//         if (key === b) {
//             const tr = $('<tr></tr>'); 
//             tbody.append(tr)
//             for (const [k, v] of Object.entries(value)) {
//                 const td = $('<td></td>');
//                 if (newChildArr.indexOf(k)) {
//                     tr.append(td)
//                     td.text(v)
//                 } else if (key === b) {
//                     td.text(b)
//                 } else {
//                     tr.append(td)
//                     td.text('')
//                 }
//             }
//         }
        
//     }
// }
canonical.forEach((e)=> {
    const tr = $('<tr></tr>'); 
    const td = $('<td></td>');
    tbody.append(tr)
    tr.append(td)
    td.text(e)
})


for (let i = 0; i < $('tr').length - 1; i++) {
    var m = $(`tr:nth-child(${i + 1}) td`).text()
    var childArr = links[m]
    var n = Object.keys(childArr).length
    for (let k = 0; k < n; k++) {
        console.log(k);
        var childVal = $(`thead tr th:nth-child(${k + 1})`).text()
        console.log(childsArr);
        if (childsArr.indexOf(childVal) != -1) {
            $(`tr:nth-child(${i})`).append(`<td>${childArr[childVal]}</td>`)
        } else {
            $(`tr:nth-child(${i})`).append(`<td></td>`)
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

