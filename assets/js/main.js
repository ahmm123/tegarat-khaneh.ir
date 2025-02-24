const navItems = document.querySelector(".nav-items");
const chatBot = document.querySelector(".chat-bot");
let isNavOpen = false;
let isBotChating = false;

function toggleNav() {
    if (!isNavOpen) {
        navItems.classList.remove("hidden");
        isNavOpen = true;
        return;
    }else{
        navItems.classList.add("hidden");
        isNavOpen = false;
        return;
    }
}

function toggleChatBot() {
    if (isBotChating) {
        chatBot.classList.add("hidden");
        isBotChating = false;
        return;
    }else{
        chatBot.classList.remove("hidden");
        isBotChating = true;
        return;
    }
}
