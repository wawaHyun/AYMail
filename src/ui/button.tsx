export interface IButton {
  onClick?: () => void,
  children?: React.ReactNode;
  style?: string,
  select?: boolean;
}
interface ISidebarButton extends IButton {
  icon: string,
  name: string,
  unread:number, 
}


export const MenuButton1 = ({ onClick, style, children, select}: IButton) => {
  return (
    <button className={`${style} flex h-10 w-10 items-center justify-center rounded-full transition`}
      style={{ color: 'var(--color-text)' }}
      onClick={onClick} >
      <span className="text-xl">{children}</span>
    </button>
  )
}
export const MenuButton2 = ({ onClick, style, children, select}: IButton) => {
  return (
    <button className={`${style} flex h-10 w-10 items-center justify-center rounded-full transition`}
      style={{ color: 'var(--color-text-muted)' }}
      onClick={onClick} >
      <span className="text-xl">{children}</span>
    </button>
  )
}
export const SidebarButton = ({ onClick, style, children, select, icon,name,unread }: ISidebarButton ) => {
  return (
    <button className={`${style} flex w-full items-center rounded-r-full px-4 py-2.5 text-left text-sm`}
      style={select ? { backgroundColor: 'var(--color-primary-light)', color: 'var(--color-primary)' }:{ color: 'var(--color-text)' }}
      onClick={onClick}>
      <span className="mr-4 font-semibold">{icon}</span>
      <span>{name}</span>
      <span className="ml-auto">{unread!=0 ? unread:null}</span>
    </button>
  )
}