//js file for the copied Quiz program
var position=0,board,qus,choice,A,B,C,correct=0;
var questions=[

// ["#include<Iostream.h>","#include<iostram.h>","#include<iostream.h>","No error","B"],
["C++ has -----functions","Default 1","No","Exactly 2","A"],
["C++ supports","OOPS Concept","string functions","All the mentioned","C"],
["C++ can handle","exceptions","inheritance","All the mentioned","C"],
["Java is based on","OOPS Concept","basic functions","All the mentioned","A"],
["cout<<10+10; will give an output of","20","10","syntax error","A"]
];  
function Display_question()
{
   board=document.getElementById("board");
    if(position>=questions.length)
    {
       board.innerHTML="<h2>You have scored "+correct+" out of "+questions.length+"</h2>";
        document.getElementById("status").innerHTML="Quiz completed";
        position=0;
        correct=0;
        return false;
    }
    document.getElementById("status").innerHTML="Question"+(position+1)+" of "+questions.length;
    qus=questions[position][0];
    A=questions[position][1];
    B=questions[position][2];
    C=questions[position][3];
   board.innerHTML="<h3>"+qus+"</h3>";
   board.innerHTML+="<label><input type='radio' name='user_option' value='A'>"+A+"</input></label>";
   board.innerHTML+="<label><input type='radio' name='user_option' value='B'>"+B+"</input></label>";
   board.innerHTML+="<label><input type='radio' name='user_option' value='C'>"+C+"</input></label>";
   board.innerHTML+="<button onclick='check_answer()'>Submit</button>";
}
function check_answer()
{
    var ch;
    choice=document.getElementsByName("user_option");
    for(var i=0;i<choice.length;i++)
    {
        if(choice[i].checked)
        {
            ch=choice[i].value;
        }
    }
    if(ch==questions[position][4])
    {
        correct++;
    }
    position++;
    Display_question();
}
console.log(questions);