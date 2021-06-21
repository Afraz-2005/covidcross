
function dark() {

    document.getElementById('body').style.backgroundColor = "#2f3640";
    document.getElementById('body').style.color = "white";

    if (document.getElementById('body').style.backgroundColor = "#2f3640"){
        document.getElementById('mode1')
        .style.display = "none";
        document.getElementById('mode2')
        .style.display = "block";
    }
}
function light() {

    document.getElementById('body')
    .style.backgroundColor = "white";
    document.getElementById('body')
    .style.color = "#2f3640";

    if (document.getElementById('body').style.backgroundColor = "white"){
        document.getElementById('mode2')
        .style.display = "none";
        document.getElementById('mode1')
        .style.display = "block";
    }
}

if (document.getElementById('body').style.backgroundColor = "white"){

    document.getElementById('mode2')
    .style.display = "none";
    document.getElementById('mode1')
    .style.display = "block";
}

