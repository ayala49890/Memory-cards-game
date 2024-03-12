// let arr=["djvbj","jhvg","ayalla"];
// let my_arr=JSON.stringifty(arr);
// arr.forEach(function(element) {
//     localStorage.setItem("arr",element);
// }, this);

let name1="";
document.querySelector(`#my_form`).addEventListener("submit", function (e) {
    e.preventDefault();
    document.querySelector(`#players_name`).innerHTML = document.querySelector(`#name`).value;
    name1=document.querySelector(`#name`).value;
    document.querySelector(`.submit`).classList.add("dontShow");
    document.querySelector(`.link1`).classList.remove("dontShow");
    document.querySelector(`.link1`).classList.add("show");
    const new_div=document.createElement(`div`);

   
    // let p=localStorage.getItem(arr);
    // let arr1=JSON.parse(arr);
    // if(!arr1)
    // {
    //     arr=[name1];
    //     let my_arr=JSON.stringifty(arr);
    //     localStorage.setItem("arr",my_arr);
    // }
    // else{
    //     let i=-1;
    //     i= arr1.findIndex(function(value){
    //   return value==name1;
    //    });
    //     if(i!=-1)
    //         {
            //    new_div.innerHTML=name1+`!, תודה על שחזרת למשחק! למעבר למשחק יש ללחוץ על play`; 
    //            new_div.classList.add("new_div");
    //             document.querySelector("#body1").append(new_div); 
    //         }
    //         else{
                 new_div.innerHTML=name1+`!, תודה על שנכנסת למשחק! למעבר למשחק יש ללחוץ על play`;
                 new_div.classList.add("new_div");
                 document.querySelector("#body1").append(new_div);
    //              arr1.push(name1);
    //              arr=JSON.stringifty(arr1);
    //              localStorage.setItem("arr",arr);

    //         }
    // }
 });



 function add_error_msg(input,msg)
 {
     let lavel=document.createElement('div');
     lavel.innerHTML=msg;
     input.after(lavel);
 }

 add_error_msg(name1,name1.dataset.msgpattern)


