
let name1="";
document.querySelector(`#my_form`).addEventListener("submit", function (e) {
    e.preventDefault();
    document.querySelector(`#players_name`).innerHTML = document.querySelector(`#name`).value;
    name1=document.querySelector(`#name`).value;
    document.querySelector(`.submit`).classList.add("dontShow");
    document.querySelector(`.link1`).classList.remove("dontShow");
    document.querySelector(`.link1`).classList.add("show");
    const new_div=document.createElement(`div`);


 function add_error_msg(input,msg)
 {
     let lavel=document.createElement('div');
     lavel.innerHTML=msg;
     input.after(lavel);
 }

 add_error_msg(name1,name1.dataset.msgpattern)


