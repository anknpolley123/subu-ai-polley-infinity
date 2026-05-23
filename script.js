function sendMessage(){

    let input = document.getElementById("user-input");
    let chatBox = document.getElementById("chat-box");

    let message = input.value;

    if(message.trim() === ""){
        return;
    }

    let userDiv = document.createElement("div");
    userDiv.className = "user-message";
    userDiv.innerText = message;

    chatBox.appendChild(userDiv);

    input.value = "";

    setTimeout(() => {

        let botDiv = document.createElement("div");
        botDiv.className = "bot-message";

        botDiv.innerText =
        "Subu AI is thinking about: " + message;

        chatBox.appendChild(botDiv);

        chatBox.scrollTop = chatBox.scrollHeight;

    },1000);

}