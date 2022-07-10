let txtBtn= document.getElementById("add-btn") 
let txtInput= document.getElementById("note-txt")
let txtOutPut=document.getElementById("output1")



//local storage


function testEvent(e){
e.preventDefault;

txtOutPut.innerHTML=txtInput.value;


//   if (txtInput.value===''){
  //     alert('please insert data!')
    //} 

    
}



txtBtn.addEventListener("click", testEvent);
