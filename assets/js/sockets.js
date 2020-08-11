import { hadleNewUser, handleDisconnected } from "./notifications";

let socket = null;

export const getSocket = () => socket;

export const UpdateSocket = aSocket => (socket = aSocket);

export const initSocket = aSocket => {
    const { events } = window;
    UpdateSocket(aSocket);
    aSocket.on(events.newUser, hadleNewUser);
    aSocket.on(events.disconnected, handleDisconnected);
};