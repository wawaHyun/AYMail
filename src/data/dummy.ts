import { IMail } from "../model/mail.model";

export const mailDummy:IMail[] = [
  {
    id: 1,
    sender: 'Alex',
    subject: 'Welcome to your mailbox',
    preview: 'There is a new message waiting for you.',
    time: '10:42 AM',
    unread: true,
  },
  {
    id: 2,
    sender: 'Mina',
    subject: 'About yesterday',
    preview: 'I wanted to tell you something...',
    time: '9:18 AM',
    unread: true,
  },
  {
    id: 3,
    sender: 'System',
    subject: 'Your daily report',
    preview: 'Here is your activity report.',
    time: 'Yesterday',
    unread: false,
  },
  {
    id: 4,
    sender: 'Unknown',
    subject: 'You have a new message',
    preview: 'Please read this message carefully.',
    time: 'Yesterday',
    unread: false,
  },
];  