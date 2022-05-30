const todo=[];
const complete=[];
const pass=[];

function submit(id){
    var new_task = document.getElementById("new-task").value;
    if(new_task==""){
        alert("Please add a task");
        return;
    }
    document.getElementById("new-task").value="";
    if(id=="Add"){
        todo.push(new_task);
       display();
    }
    else if(id="Update"){
        if(pass[1]==0){
        todo[pass[0]]=new_task;
        display();
        }
        else if(pass[1]==1){
        complete[pass[0]]=new_task;
        displayComplete();
        }
        pass.splice(0,pass.length);
        
        document.getElementById("Update").style.display="none";
        document.getElementById("Add").style.display="block";
    }
}

function edit( id,val){
    if (val==0){
        document.getElementById("new-task").value= todo[id] ;
    }
    else if(val==1) {
        document.getElementById("new-task").value= complete[id] ;
    }
    document.getElementById("Add").style.display="none";
    document.getElementById("Update").style.display="block";
    pass.push(id);
    pass.push(val);
        
}
function display(){
    document.getElementById("incomplete-tasks").innerHTML="";
    var text = "";
    for(let i=0;i<todo.length;i++){
        text += "<li><input type='checkbox' id="+i+"  onclick='checkIncomplete(this.id);'><label> "+todo[i]+" </label><input type='text'><button class='edit' id="+i+" value='0' onclick='edit(this.id,this.value);'>Edit</button><button class='delete' id="+i+" value='0' onclick='deleteLi(this.id,this.value);'>Delete</button></li>";
    }  
    document.getElementById("incomplete-tasks").innerHTML=text;
}

function deleteLi(id,value){
    document.getElementById("new-task").value="";
    document.getElementById("Update").style.display="none";
    document.getElementById("Add").style.display="block";
 if(value==0){
    todo.splice(id,1);
    display();
  }
  else if(value==1){
    complete.splice(id,1);
    displayComplete();
  }
 
}

function checkIncomplete(i){
    document.getElementById("new-task").value="";
    document.getElementById("Update").style.display="none";
    document.getElementById("Add").style.display="block";
    complete.push(todo[i]);
    todo.splice(i,1);
    display();
    displayComplete();
}

function displayComplete(){
    document.getElementById("completed-tasks").innerHTML="";
    var text = "";
    for(let i=0;i<complete.length;i++){
        text += "<li><input type='checkbox' id="+i+" onclick='uncheckComplete(this.id);' checked><label> "+complete[i]+" </label><input type='text'><button class='edit' id="+i+" value='1' onclick='edit(this.id,this.value);'>Edit</button><button class='delete' value='1' id="+i+" onclick='deleteLi(this.id,this.value);'>Delete</button></li>";
    }  
    document.getElementById("completed-tasks").innerHTML=text;
}
function uncheckComplete(i){
    document.getElementById("new-task").value="";
    document.getElementById("Update").style.display="none";
    document.getElementById("Add").style.display="block";
    todo.push(complete[i]);
    complete.splice(i,1);
    display();
    displayComplete();

}

