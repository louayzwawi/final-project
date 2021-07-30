var c=0

function check() {
    
    var q1=document.quiz.question1.value
    if (q1=="script") {c++}
    var q2=document.quiz.question2.value
    if (q2=="both") {c++}
    var q3=document.quiz.question3.value
    if (q3=="external") {c++}
    var q4=document.quiz.question4.value
    if (q4=="src") {c++}
    var q5=document.quiz.question5.value
    if (q5=="alert") {c++}
}

var finish = document.querySelector(".finish_btn")
finish.addEventListener("click",function(){
    c=0
    check()
    c=c*100/5
if(!document.getElementsByClassName("progress").length){
 var pourc=document.createElement("div")
    pourc.setAttribute("class", "progress")
    var main=document.querySelector(".quiz")
    var prog=document.createElement("div")
    prog.setAttribute("class", "progress-bar")
    prog.setAttribute("role", "progressbar")
    prog.setAttribute("style","width: "+ c+"%")

    prog.setAttribute("aria-valuenow", toString(c))
    prog.setAttribute("aria-valuemin", "0")
    prog.setAttribute("aria-valuemax", "100")
pourc.appendChild(prog)
prog.innerText=c+"%"

    main.appendChild(pourc);
}

})