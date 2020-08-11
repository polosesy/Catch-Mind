const notifications = document.getElementById("jsNotifications");

const fireNotification = (text, color) =>{
    const notification = document.createElement("div");
    notification.innerHTML = text;
    notification.style.background = color;
    notifications.appendChild(notification);
}

export const hadleNewUser = ({ nickname }) => {
    fireNotification(`${nickname} just Joined!`, "rgb(0, 122, 255)");
};

export const handleDisconnected = ({ nickname }) => {
    fireNotification(`${nickname} just left!`, "rgb(255, 149, 0)");
};