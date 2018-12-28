window.onload = function(){
    var prrx_01 = document.getElementsByClassName("prrx_01");
    var imgarea = document.createElement("div");
    imgarea.classList.add("imgarea");
    imgarea.classList.add("bk_04");

    for(var i = 0;i < prrx_01.length;i++){
        prrx_01[i].insertBefore(imgarea.cloneNode(true),prrx_01[i].firstElementChild);
        prrx_01[i].appendChild(imgarea.cloneNode(true));
        prrx_01[i].getElementsByClassName("imgarea")[0].classList.add("bk_at_scl");
    }


    window.onscroll = function(){
        var nowy = window.pageYOffset;

        for(var i = 0; i < prrx_01.length;i++){
            var pointy = prrx_01[i].getBoundingClientRect().top + window.pageYOffset;

            if(nowy  > pointy){
                if(prrx_01[i].getElementsByClassName("imgarea")[0].classList.contains("bk_at_scl")){
                    prrx_01[i].getElementsByClassName("imgarea")[0].classList.remove("bk_at_scl");
                }
            }else{
                if(!prrx_01[i].getElementsByClassName("imgarea")[0].classList.contains("bk_at_scl")){
                    prrx_01[i].getElementsByClassName("imgarea")[0].classList.add("bk_at_scl");
                }

            }



            pointy = prrx_01[i].getBoundingClientRect().top + window.pageYOffset + prrx_01[i].clientHeight;

            if(nowy + window.innerHeight > pointy){
                if(!prrx_01[i].getElementsByClassName("imgarea")[1].classList.contains("bk_at_scl")){
                    prrx_01[i].getElementsByClassName("imgarea")[1].classList.add("bk_at_scl");
                }
            }else{
                if(prrx_01[i].getElementsByClassName("imgarea")[1].classList.contains("bk_at_scl")){
                    prrx_01[i].getElementsByClassName("imgarea")[1].classList.remove("bk_at_scl");
                }

            }


        }
    }

}

/*var prrx_bk_fix = [];
var prrx_bk_fix_rectar = [];
var first_y = 0;
var s_height = screen.height;
window.onload = function(){
    prrx_bk_fix = document.getElementsByClassName("prrx_bk_fix");

    for(var i = 0; i < prrx_bk_fix.length;i++){
//        prrx_bk_fix[i].style.height = prrx_bk_fix[i].getElementsByClassName("into")[0].style.height;
        prrx_bk_fix_rectar[i] = prrx_bk_fix[i].getBoundingClientRect();
    }

    first_y = window.pageYOffset;
    bk_fix(first_y);

}
    window.onscroll = function(){
        bk_fix(first_y);
    }
function bk_fix(first_y){
    var nowtop = window.pageYOffset;
    for(var i = 0;i < prrx_bk_fix.length;i++){
        var top = prrx_bk_fix_rectar[i].top + first_y;
        var bottom = prrx_bk_fix_rectar[i].top + prrx_bk_fix_rectar[i].height + first_y;
console.log(nowtop);
console.log(top +"|"+ bottom);
        if(nowtop > top && nowtop < bottom){

            if(!prrx_bk_fix[i].classList.contains("prrx_bk_fix_prrx")){
                prrx_bk_fix[i].classList.add("prrx_bk_fix_prrx");
            }

        }else{
            if(prrx_bk_fix[i].classList.contains("prrx_bk_fix_prrx")){
                prrx_bk_fix[i].classList.remove("prrx_bk_fix_prrx");
            }

        }
    }

}
*/
