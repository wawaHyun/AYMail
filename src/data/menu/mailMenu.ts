import { IMenu } from "@/src/model/common.model";

export const mailMenuData:IMenu[] = [
  {id:0,icon:'▣',name:'Inbox',url:'/mail',script:'받은 편지함',state:true , unread:2},
  {id:1,icon:'★',name:'Starred',url:'/mail/starred',script:'시나리오',state:false, unread:0},
  {id:2,icon:'◷',name:'Snoozed',url:'/mail',script:'게임log',state:false, unread:0},
  {id:3,icon:'➤',name:'Sent',url:'/mail/ending',script:'Endings',state:false, unread:0},
  {id:4,icon:'▱',name:'Drafts',url:'/mail',script:'',state:false, unread:0},
  {id:5,icon:'⌄',name:'More',url:'/mail',script:'',state:false, unread:0},
]
export const mailMenuBottomData:IMenu[] = [
  {id:0,icon:'▣',name:'Inbox',url:'/mail',script:'받은 편지함',state:true , unread:2},
  {id:1,icon:'★',name:'Starred',url:'/mail',script:'시나리오 진행상황',state:false, unread:0},
  {id:3,icon:'➤',name:'Sent',url:'/mail',script:'게임log',state:false, unread:0},
  {id:5,icon:'⌄',name:'More',url:'/mail',script:'',state:false, unread:0},
]