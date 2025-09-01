
function toggle_display(element_id){
    const element=document.getElementById(element_id);
    if(element.style.display=='none'){
        element.style.display='block';
    } else{
        element.style.display='none';
    }
}

function hide(element_id){
    document.getElementById(element_id).style.display='none';
}
function show(element_id){
    document.getElementById(element_id).style.display='block';
}

function hide_all(){
    hide("select_mode_page_id");
    hide("mode_each_page_id");
}


function select_mode_page(){
    hide_all();
    show("select_mode_page_id");
}

function set_problem(){
    problem=gen(10, 2);
    document.getElementById("each_problem_id").innerHTML=
    "Evaluate: "+problem; // for now limited to 0s and 1s
    document.getElementById("each_answer_id").value="";
    return problem;
}

function mode_each_page(){
    const submit_button=document.getElementById("each_submit_button_id");
    const input=document.getElementById("each_answer_id");
    hide_all();
    show("mode_each_page_id");
    problem=set_problem();
    user_answer="";
    correct_count=0;
    incorrect_count=0;
    submit_button.addEventListener("click", ()=>{
        let answer=solve(problem);
        user_answer=input.value;
        if (user_answer==""){
            return;
        } else if (user_answer==answer){
            document.getElementById("each_correct_text_id").innerHTML=
            "# of questions correct: "+(++correct_count);
        } else {
            document.getElementById("each_incorrect_text_id").innerHTML=
            "# of questions incorrect: "+(++incorrect_count);
        }
        problem=set_problem();
    })
    
}

function mode_after_page(){

}

function main(){
    document.getElementById("each_button_id").onclick=function(){
        mode_each_page();
    }
    document.getElementById("after_button_id").onclick=function(){
        mode_after_page();
    }
    select_mode_page();
}

main();