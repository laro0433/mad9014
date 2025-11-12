document.addEventListener("DOMContentLoaded", init); 

function init() {
    document.body.addEventListener("click", handleClick)
}

function handleClick() {
    const choice = Math.round(Math.random()); 
    if (choice === 0) { 
        bgColor()
        .then ((hex) => {
            document.body.style.backgroundColor = hex;
        });

    } else { 
        messagePrompt() 
        .then ((message) => {
            const p = document.createElement("p");
            p.textContent = message; 
            document.querySelector("main").appendChild(p);
        });
    }
}

function bgColor(){
    return new Promise((resolve) => {
        const delay = 1000 + Math.random() * 1000;
        setTimeout(() => {
            const hex = "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
            resolve (hex);
        }, delay);
    });
}

function messagePrompt(){
    return new Promise((resolve) => {
        const delay = 1000 + Math.random() * 1000;
        setTimeout(() => {
            const messages = [
                "Hello", "having fun?", "your being testy"
            ];
            const randomMessage = messages[Math.floor(Math.random() * messages.length)];
            resolve(randomMessage);
        }, delay);
    });
}