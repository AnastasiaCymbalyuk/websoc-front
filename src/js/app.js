import Chat from './Chat';

const chat = document.querySelector('.chat');
const chatController = new Chat(chat);
chatController.init();
