//Test case:
// nhập vào:
[{
    name: "Arsenal",
    points: 99,
    GD: 45
},
{
    name: "Chelsea",
    points: 75,
    GD: 39
},
{
    name: "Manchester United",
    points: 60,
    GD: 29
},
{
    name: "Liverpool",
    points: 88,
    GD: 39
}]

function swap(x, y) {
    x = x + y;
    y = x - y;
    x = x - y;
    return [x, y];
}

