import { IMenu } from "@/src/model/common";

export const sidebarData:IMenu[] = [
  {id:0,icon:'▣',name:'Inbox',url:'',state:true , unread:2},
  {id:1,icon:'★',name:'Starred',url:'',state:false, unread:0},
  {id:2,icon:'◷',name:'Snoozed',url:'',state:false, unread:0},
  {id:3,icon:'➤',name:'Sent',url:'',state:false, unread:0},
  {id:4,icon:'▱',name:'Drafts',url:'',state:false, unread:0},
  {id:5,icon:'⌄',name:'More',url:'',state:false, unread:0},
]