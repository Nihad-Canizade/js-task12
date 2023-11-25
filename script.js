// Input type(text)
let title = document.getElementById('title');
let author = document.getElementById('author');
let color = document.getElementById('color');

// Input type(radio)
let radio1 = document.getElementById('radio1');
let radio2 = document.getElementById('radio2');
let radio3 = document.getElementById('radio3');

// Button
let btn = document.getElementById('btn');

// ...
let tablemain = document.getElementById('tableMain');

btn.addEventListener('click', () => {
    let titleValue = title.value.trim();
    let authorValue = author.value.trim();
    let colorValue = color.value.trim();

    if (titleValue == "" || authorValue == "") {
        alert("Please fill in all the fields");
    }

    if (radio1.checked == "" && radio2.checked == "" && radio3.checked == "") {
        alert("Please fill in all the circles");
    }

    let x;
    if (radio1.checked == true) {
        x = "Phsycology";
    } else if (radio2.checked == true) {
        x = "Drama";
    } else if (radio3.checked == true) {
        x = "Motivation";
    }

    if (titleValue == "" || authorValue == "") {
        let y = "Example";
    } else {
        let newtr = document.createElement("tr");
        let newtd1 = document.createElement("td");
        newtd1.innerHTML = title.value;
        let newtd2 = document.createElement("td");
        newtd2.innerHTML = author.value;
        let newtd3 = document.createElement("td");
        newtd3.innerHTML = x;

        tablemain.append(newtr);
        newtr.append(newtd1, newtd2, newtd3);
    }

    title.value = "";
    author.value = "";
    color.value = "";
    radio1.checked = "";
    radio2.checked = "";
    radio3.checked = "";
});