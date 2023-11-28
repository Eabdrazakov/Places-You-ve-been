function Place(location, landmarks, timeOfYear, notes) {
    this.location = location;
    this.landmarks = landmarks;
    this.timeOfYear = timeOfYear;
    this.notes = notes;
}

let kyrgyzstan = new Place("Kyrgyzstan", "Bishkek", 2020, "Ermek was a student");
let southKorea = new Place("South Korea", "Seoul", 2020, "Hayeong was born here.");
let philippines = new Place("Philippines", "Manila", 2011, "Hayeong went to high school there.");
let hongKong = new Place("Hong Kong", "Kowloon", 2018, "Hayeong's younger brother is doing an internship there.");
let kazakhstan = new Place("Kazakhstan", "Astana", 2018, "Ermek was treveling in Kazakhstan");

Place.prototype.allInfo = function () {
    return "You've selected " + this.location + ". Its landmark is " + this.landmarks + ". We have visited in " + this.timeOfYear + ". Additional note: " + this.notes;
}

function getPlaceValue() {
    const radioBtns = document.getElementsByName("place");
    let selected = 0;
    for (let i = 0; i < radioBtns.length; i++) {
        if (radioBtns[i].checked) {
            selected = radioBtns[i].value;
            break;
        }
    }
    return selected;
}

function getData() {
    const selected = getPlaceValue();
    let getAllInfo = 0;
    if (selected === "kyrgyzstan") {
        getAllInfo = kyrgyzstan.allInfo();
    } else if (selected === "southkorea") {
        getAllInfo = southKorea.allInfo();
    } else if (selected === "philippines") {
        getAllInfo = philippines.allInfo();
    } else if (selected === "hongkong") {
        getAllInfo = hongKong.allInfo();
    } else if (selected === "kazakhstan") {
        getAllInfo = kazakhstan.allInfo();
    } else {
        getAllInfo = null;
    }
    return getAllInfo;
}

//UI logic
function formHandler() {
    const form = document.querySelector("form");
    const result = document.getElementById("result");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const getInfo = getData();
        result.classList.remove("hidden");
        result.innerText = getInfo;
    });
    form.addEventListener("reset", () => {
        form.reset();
        result.classList.add("hidden");
        result.innerText = "";
    });
}

window.onload = () => {
    formHandler();
}