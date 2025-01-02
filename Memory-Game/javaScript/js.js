let num_points;
let Name = 'computer'
function point() {
    let p = localStorage.getItem(Name);
    let pi = JSON.parse(p);
    if (!pi) {
        localStorage.setItem(Name, "0");
        pi = "0"
    }
    num_points = parseInt(pi);
    let point = " מספר הנקודות שלך הוא"
    point += num_points;
    document.querySelector('#poi').innerHTML = point;
}
const all_cards = [
    '1.png',
    '2.png',
    '3.png',
    '4.png',
    '5.png',
    '6.png',
    '7.png',
    '8.png',
    '9.png',
    '10.png',
    '11.png',
    '12.png',
    '13.png',
    '14.png',
    '15.png',
    '16.png',
    '17.png',
    '18.png',
    '19.png',
    '20.png',
    '21.png',
    '22.png',
    '23.png',
    '24.png',
    '25.png',
    '26.png',
    '27.png',
    '28.png',
    '29.png'
];
let game_cards = [];

function shuffle_arr() {
    game_cards.sort(function (a, b) { return Math.round(Math.random()) - Math.round(Math.random()) });
}
let hide;
function hideCard() {
    shuffle_arr();
    hide = game_cards[0];
    game_cards[0] = 'qestion.jpg';
    document.querySelector('#question').innerHTML = "חפש את התמונה המסתתרת";
    showImg();
    setTimeout(function () {
        guess();
        document.querySelector("#chooseLevel").classList.add("work");
        document.querySelector("#chooseLevel").classList.remove("dontWork");
        document.querySelector("#intro").classList.add("work");
        document.querySelector("#intro").classList.remove("dontWork");

    }, 6000 /*parseInt(window.level)*/)
    let index = 5;
    let myTimer = setInterval(function () {
        document.querySelector("#num").classList.remove("dontWork");
        document.querySelector("#num").classList.add("work");
        document.querySelector("#num").innerHTML = index--;

        if (index == -1) {
            clearInterval(myTimer);
            document.querySelector("#num").innerHTML = "";
            document.querySelector("#num").classList.add("dontWork");
            document.querySelector("#num").classList.remove("work");


        }
    }, 1000);


}
function guess() {

    let index = 5;
    let myTimer = setInterval(function () {
        document.querySelector("#num").classList.remove("dontWork");
        document.querySelector("#num").classList.add("work");
        document.querySelector("#num").innerHTML = index--;

        if (index == -1) {
            clearInterval(myTimer);
            document.querySelector("#num").innerHTML = "";
            document.querySelector("#num").classList.add("dontWork");
            document.querySelector("#num").classList.remove("work");
        }
    }, 1000);
    setTimeout(function () {
        init_game();
    }, 5000 /*parseInt(window.level)*/)
    let array = [];
    array.push(`<img class=" im1 gess btnCard" src="../images/` + hide + `"` + `/>`);

    let i = 0;
    game_cards[0] = '29.png';
    shuffle_arr();
    for (const item of game_cards) {

        array.push(`<img class=" im1 btnCard" src="../images/` + item + `"` + `/>`);
        if (i++ == 3)
            break;

    }
    array.sort(function (a, b) { return Math.round(Math.random()) - Math.round(Math.random()) });

    document.querySelector("#board").innerHTML = array;

    document.querySelector('#question').innerHTML = "? מי היא התמונה שהסתתרה ";




    let btnn = document.querySelectorAll(".im1");
    for (item of btnn) {
        item.onclick = function () {
            num_points--;
            let str = JSON.stringify(num_points);
            localStorage.setItem(Name, num_points);
            let point = "  מספר הנקודות שלך הוא"
            point += num_points;
            document.querySelector('#poi').innerHTML = point;
            alert("mistake");
        }
    }
    document.querySelector(".gess").onclick = function () {
        alert("good");

        num_points += 2;
        let str = JSON.stringify(num_points);
        localStorage.setItem(Name, num_points);
        let point = "  מספר הנקודות שלך הוא"
        point += num_points;
        document.querySelector('#poi').innerHTML = point;
        clearInterval(myTimer);
        document.querySelector("#num").innerHTML = "";
        document.querySelector("#num").classList.add("dontWork");
        window.document.querySelector("#num").classList.remove("work");

    

    }

}

function showImg() {
    let string = ``;
    for (const item of game_cards) {
        string += `<img class="im" src="../images/` + item + `"` + `/>`;
    }
    document.querySelector("#board").innerHTML = string;
}

function init_game() {

    document.querySelector('#question').innerHTML = "התבוננו היטב בתמונות";
    all_cards.sort(function (a, b) { return Math.round(Math.random()) - Math.round(Math.random()) });
    for (let i = 0; i < 12; i++) {
        game_cards[i] = all_cards[i];
    }

    setTimeout(function () {
        hideCard();
    }, 11500/* parseInt(window.level)*/)


    let index10 = 10;
    let myTimer1 = setInterval(function () {
        document.querySelector("#num").classList.remove("dontWork");
        document.querySelector("#num").classList.add("work");
        document.querySelector("#num").innerHTML = index10--;

        if (index10 == -1) {
            clearInterval(myTimer1);
            document.querySelector("#num").innerHTML = "";
            document.querySelector("#num").classList.add("dontWork");
            document.querySelector("#num").classList.remove("work");
        }
    }, 1000);
    showImg();

}

point();
init_game();




