let num_points;
let Name = 'computer'
function point() {
    //שליפת נתונים קודמים
    let p = localStorage.getItem(Name);
    let pi = JSON.parse(p);
    if (!pi) {
        localStorage.setItem(Name, "0");
        pi = "0"
    }
    //הצגת נתונים
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
///////////////////////////////////////////פונקציות///////////////////////////////////////////////////
// פונקצית ערבוב מערך
function shuffle_arr() {
    game_cards.sort(function (a, b) { return Math.round(Math.random()) - Math.round(Math.random()) });
}
//פונקציית החבאת כרטיס
let hide;
function hideCard() {
    shuffle_arr();
    hide = game_cards[0];
    game_cards[0] = 'qestion.jpg';

    // הצגת התמונות למסך
    document.querySelector('#question').innerHTML = "חפש את התמונה המסתתרת";
    showImg();
    // הדלקת טיימר
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
///פונקציית ניחושים
function guess() {
    // הדלקת טיימר

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

    //בדיקה האם נבחרה התמונה שהוחבאה

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

        //הכנסת נתונים חדשים
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

        // let btnn = document.querySelectorAll(".im1");
        // for (item of btnn) {
        //     item.classList.add("dontWork");
        // }

    }



    //     document.querySelector("#chooseLevel").classList.add("work");
    //     document.querySelector("#chooseLevel").classList.remove("dontWork");
    //     document.querySelector("#intro").classList.add("work");
    //     document.querySelector("#intro").classList.remove("dontWork");
}

// // הצגת  התמונות למסך
// document.querySelector('#question').innerHTML = "התבוננו היטב בתמונות";
function showImg() {
    let string = ``;
    for (const item of game_cards) {
        string += `<img class="im" src="../images/` + item + `"` + `/>`;
    }
    document.querySelector("#board").innerHTML = string;
}


///פונקציית אתחול משחק
function init_game() {

    document.querySelector('#question').innerHTML = "התבוננו היטב בתמונות";
    // ערבוב  מערך הכרטיסים
    all_cards.sort(function (a, b) { return Math.round(Math.random()) - Math.round(Math.random()) });
    // העתקת חלק מן המערך המקורי לתוך מערך המשחק
    for (let i = 0; i < 12; i++) {
        game_cards[i] = all_cards[i];
    }

    // הדלקת טיימר
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
    // הצגת  התמונות למסך
    showImg();

}
/////////////////////////////////////////////////////////////////////////////////////////////
//התחלת המשחק ע"י זימון פונקציית אתחול משחק
point();
init_game();

/*#board.guess div:nth-child(3) {
    background-image: url(question.png);
}
#board.guess div:nth-child(3) img {
    display: none;
}*/



