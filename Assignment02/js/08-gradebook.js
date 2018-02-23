/*eslint-env browser*/
//8. Gradebook
var ursulaPnts = parseFloat(window.prompt("Enter points for Ursula"));
var paulPnts = parseFloat(window.prompt("Enter points for Paul"));
var henryPnts = parseFloat(window.prompt("Enter points for Henry"));
var tabithaPnts = parseFloat(window.prompt("Enter points for Tabitha"));
var lucyPnts = parseFloat(window.prompt("Enter points for Lucy"));

var total;
total = ursulaPnts + paulPnts + henryPnts + tabithaPnts + lucyPnts;
var averagePts;
averagePts = (total / 5);

var grA = "";
var grB = "";
var grC = "";
var grD = "";
var grF = "";

if (ursulaPnts < 60) {
    ursulaPnts = "Ursula";
    grF += ursulaPnts + ", ";
} else if (ursulaPnts < 70) {
    ursulaPnts = "Ursula";
    grD += ursulaPnts + ", ";
} else if (ursulaPnts < 80) {
    ursulaPnts = "Ursula";
    grC += ursulaPnts + ", ";
} else if (ursulaPnts < 90) {
    ursulaPnts = "Ursula";
    grB += ursulaPnts + ", ";
} else if (ursulaPnts < 100) {
    ursulaPnts = "Ursula";
    grA += ursulaPnts + ", ";
}
   
if (paulPnts < 60) {
    paulPnts = "Paul";
    grF += paulPnts + ", ";
} else if (paulPnts < 70) {
    paulPnts = "Paul";
    grD += paulPnts + ", ";
} else if (paulPnts < 80) {
    paulPnts = "Paul";
    grC += paulPnts + ", ";
} else if (paulPnts < 90) {
    paulPnts = "Paul";
    grB += paulPnts + ", ";
} else if (paulPnts < 100) {
    paulPnts = "Paul";
    grA += paulPnts + ", ";
}

if (henryPnts < 60) {
    henryPnts = "Henry";
    grF += henryPnts + ", ";
} else if (henryPnts < 70) {
    henryPnts = "Henry";
    grD += henryPnts + ", ";
} else if (henryPnts < 80) {
    henryPnts = "Henry";
    grC += henryPnts + ", ";
} else if (henryPnts < 90) {
    henryPnts = "Henry";
    grB += henryPnts + ", ";
} else if (henryPnts < 100) {
    henryPnts = "Henry";
    grA += henryPnts + ", ";
}

if (tabithaPnts < 60) {
    tabithaPnts = "Tabitha";
    grF += tabithaPnts + ", ";
} else if (tabithaPnts < 70) {
    tabithaPnts = "Tabitha";
    grD += tabithaPnts + ", ";
} else if (tabithaPnts < 80) {
    tabithaPnts = "Tabitha";
    grC += tabithaPnts + ", ";
} else if (tabithaPnts < 90) {
    tabithaPnts = "Tabitha";
    grB += tabithaPnts + ", ";
} else if (tabithaPnts < 100) {
    tabithaPnts = "Tabitha";
    grA += tabithaPnts + ", ";
}

if (lucyPnts < 60) {
    lucyPnts = "Lucy";
    grF += lucyPnts + ", ";
} else if (lucyPnts < 70) {
    lucyPnts = "Lucy";
    grD += lucyPnts + ", ";
} else if (lucyPnts < 80) {
    lucyPnts = "Lucy";
    grC += lucyPnts + ", ";
} else if (lucyPnts < 90) {
    lucyPnts = "Lucy";
    grB += lucyPnts + ", ";
} else if (lucyPnts < 100) {
    lucyPnts = "Lucy";
    grA += lucyPnts + ", ";
}

window.console.log("Student(s)" + "\t\t" + "Grade");

if (grA.length >= 1) {
    window.console.log(grA + "\t\t" + "A");
}
if (grB.length > 0) {
    window.console.log(grB + "\t\t" + "B");
}
if (grC.length > 0) {
    window.console.log(grC + "\t\t" + "C");
}
if (grD.length > 0) {
    window.console.log(grD + "\t\t" + "D");
}
if (grF.length > 0) {
    window.console.log(grF + "\t\t" + "F");
}

window.console.log("Average Points: " + averagePts);








