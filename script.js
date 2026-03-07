const icons=document.querySelectorAll(".icon");
const popup=document.getElementById("popup");
const close=document.querySelector(".close");

icons.forEach(icon=>{
icon.addEventListener("click",()=>{
popup.style.display="flex";
});
});

close.addEventListener("click",()=>{
popup.style.display="none";
});

window.addEventListener("click",(e)=>{
if(e.target===popup){
popup.style.display="none";
}
});


const notification=document.getElementById("message");

function showMessage(){
notification.classList.remove("show");
void notification.offsetWidth;
notification.classList.add("show");
}

showMessage();
setInterval(showMessage,10000);


const input=document.getElementById("chatInput");
const chatBox=document.getElementById("chatBox");

input.addEventListener("keyup",function(e){

if(e.key==="Enter"){

const text=input.value.trim();
if(text==="")return;

const msg=document.createElement("div");
msg.className="chat-message";
msg.textContent=text;

chatBox.appendChild(msg);

setTimeout(()=>{
chatBox.scrollTop=chatBox.scrollHeight;
},10);

input.value="";
}

});

const emojis = document.querySelectorAll(".emoji");

emojis.forEach(e=>{
  e.addEventListener("click",()=>{
    input.value += e.textContent;
    input.focus();
  });
});

const sendBtn = document.getElementById("sendBtn");

function sendMessage(){
if(input.value.trim() === "") return;

const msg = document.createElement("div");
msg.className = "chat-message";
msg.textContent = input.value;

chatBox.appendChild(msg);
input.value="";
chatBox.scrollTop = chatBox.scrollHeight;
}

sendBtn.addEventListener("click", sendMessage);

input.addEventListener("keypress", e=>{
if(e.key==="Enter"){
sendMessage();
}
});