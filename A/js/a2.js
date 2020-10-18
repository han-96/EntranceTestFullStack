//Test case:
// nhập vào:
teams = [{
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

// function swap(x, y) {
//     var temp = x; 
//     x = y;
//     y = temp;
//     return [x, y];
// }

// console.log(swap(3,2))

for (let i = 0; i < teams.length-1; i++) {
    for (let j = i + 1; j < teams.length; j++) {
        if (teams[i]["points"] > teams[j]["points"]) {
            teams[j] = [teams[i], teams[i] = teams[j]][0]
        }
        else if (teams[i]["points"] == teams[j]["points"]) {
            if (teams[i]["GD"] > teams[j]["GD"]) {
                teams[j] = [teams[i], teams[i] = teams[j]][0]
            }
            else if (teams[i]["GD"] == teams[j]["GD"]) {
                if (teams[i]["name"][0] > teams[j]["name"][0]) {
                    teams[j] = [teams[i], teams[i] = teams[j]][0]
                }
            }
        }
    }
    
}

for (let i = 0; i < teams.length; i++) {
    teams[i]["position"] = i
}

console.log(teams)
