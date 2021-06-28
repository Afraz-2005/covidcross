
function dark() {

    let dark_mode = document.getElementById('body').style.backgroundColor = "#2f3640";
    let light_mode = document.getElementById('body').style.color = "white";

    if (dark_mode){

        document.getElementById('mode1')
        .style.display = "none";
        document.getElementById('mode2')
        .style.display = "block";
    }
}
function light() {

    let light_mode = document.getElementById('body').style.backgroundColor = "white";
    let dark_mode = document.getElementById('body').style.color = "#2f3640";

    if (light_mode){
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

