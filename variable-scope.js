// 4 global variables are declared:
var avatar = "generic";
var skill = 1.0;
var pointsPerLevel = 1000;
var userPoints = 2008;

function getAvatar(points) {                // 'points' has local scope as well
    var level = points / pointsPerLevel;    // 'level' is a local variable that can be accessed only inside a function
                                            // 'pointPerLevel' is a global function that is used inside a function
    if (level == 0) {
        return "Teddy bear";
    } else if (level == 1) {
        return "Cat";
    } else if (level >= 2) {
        return "Gorilla";
    }
}

function updatePoints(bonus, newPoints) {   // 'bonus' and 'newPoints' are local
    var i = 0;                              // 'i' is a local variable inside updatePoints function
    while (i < bonus) {
        newPoints = newPoints + skill * bonus;
        i = i + 1;
    }
    return newPoints + userPoints;          // 'userPoints' is global
}

userPoints = updatePoints(2, 100);          // here in code only global variables can be used
avatar = getAvatar(2112);