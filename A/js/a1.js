// Lấy thông tin về mảng A1
var A1 = [];
var lengthA1 = parseInt(prompt("Hãy nhập vào số phần tử của mảng A1: "));
for (let i = 0; i < lengthA1; i++) {
    var newElement1 = prompt("Hãy nhập vào giá trị của phần tử thứ " + (i+1) + " trong mảng A1: ");
    if (!isNaN(newElement1)) {
        newElement1 = parseInt(newElement1);
    }
    else if (Number.isInteger(parseFloat(newElement1))) {
        newElement1 = parseFloat(newElement1);
    }
    A1.push(newElement1)
};
console.log("Mảng A1 vừa nhập là: ")
console.log(A1)


// Lấy thông tin về mảng A2
var A2 = [];
var lengthA2 = parseInt(prompt("Hãy nhập vào số phần tử của mảng A2: "));
for (let j = 0; j < lengthA2; j++) {
    var newElement2 = prompt("Hãy nhập vào giá trị của phần tử thứ " + (j+1) + " trong mảng A2: ");
    if (!isNaN(newElement2)) {
        newElement2 = parseInt(newElement2);
    }
    else if (Number.isInteger(parseFloat(newElement2))) {
        newElement2 = parseFloat(newElement2);
    }
    A2.push(newElement2)
};
const A2_OldVer = A2;
console.log("Mảng A2 vừa nhập là: ")
console.log(A2_OldVer)


// Ra output
var A = [];
for (let i = 0; i < lengthA1; i++) {
    var add_check = "True";
    for (let j = 0; j < lengthA2; j++) {
        if (A1[i] == A2[j]) { 
            add_check = "False";
            var removedItem = A2.splice(j, 1);
            break;
        }
    }

    if (add_check == "True") {
        A.push(A1[i]);
    }
}

A2.reverse();
A = A.concat(A2);
console.log("Mảng ghép được là: ")
console.log(A)

document.getElementById("a1").innerHTML = `Mảng A1: ${A1} <br></br>
Mảng A2: ${A2_OldVer} <br></br>
Mảng ghép được là: ${A}
`



