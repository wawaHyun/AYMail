export interface IButton {
  onClick?: () => void,
  children?: React.ReactNode;
  style?: string,
  select?: boolean;
}
interface ISidebarButton extends IButton {
  icon?: string,
  name?: string,
  unread?: number,
}


export const ThreelineMenuButton = ({ onClick, style, children, select }: IButton) => {
  return (
    <button className={`${style} flex h-10 w-10 items-center justify-center rounded-full transition`}
      style={{ color: 'var(--color-text)' }}
      onClick={onClick} >
      <span className="text-xl">{children}</span>
    </button>
  )
}
export const MaruiMenuButton = ({ onClick, style, children, select }: IButton) => {
  return (
    <button className={`${style} flex h-10 w-10 items-center justify-center rounded-full transition`}
      style={{ color: 'var(--color-text-muted)' }}
      onClick={onClick} >
      <span className="text-xl">{children}</span>
    </button>
  )
}
export const TopbarLogoButton = ({ onClick, style, children, select }: IButton) => {
  return (
    <button className={`${style} mr-auto text-xl font-semibold tracking-tight`}
      style={{ color: 'var(--color-primary)' }}
      onClick={onClick} >
      <span className="text-xl">AYMail</span>
    </button>
  )
}
export const SidebarButton = ({ onClick, style, children, select, icon, name, unread }: ISidebarButton) => {
  return (
    <button className={`${style} group relative flex w-full items-center rounded-r-full px-4 py-2.5 text-left text-sm`}
      style={select ? { backgroundColor: 'var(--color-primary-light)', color: 'var(--color-primary)' } : { color: 'var(--color-text)' }}
      onClick={onClick}>
      <span className="mr-4 font-semibold">{icon}</span>
      <span>{children}</span>
      {!!unread && <span className="ml-auto rounded-full w-7 h-7 text-center content-center" style={ {backgroundColor: 'var(--color-primary-light)', color: 'var(--color-primary)'} }>{unread}</span>}
      
      {name && (
        <span
          role="tooltip"
          className="pointer-events-none absolute left-full top-1/2 z-10 ml-2 -translate-y-1/2 whitespace-nowrap rounded-md px-2 py-1 text-xs opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100"
          style={{ backgroundColor: 'var(--color-text)', color: 'var(--color-background)' }}>
          {name}
        </span>
      )}
    </button>
  )
}
export const BottombarButton = ({ onClick, style, children, select, icon, name, unread }: ISidebarButton) => {
  return (
    <button className={`${style} flex flex-col items-center text-xs`}
      style={select ? { color: 'var(--color-primary)' } : { color: 'var(--color-text-muted)' }}
      onClick={onClick}>
      <span className="mb-1 text-lg">{icon}</span>
      <span>{name}</span>
      {!!unread && <span className="ml-auto">{unread}</span>}
    </button>
  )
}
export const MailButton = ({ onClick, style, children, select, icon, name, unread }: ISidebarButton) => {
  return (
    <button className={`${style} rounded-full border px-5 py-2.5 text-sm font-medium`}
      style={select ? { borderColor: 'var(--color-primary)', color: 'var(--color-primary)' } : { borderColor: 'var(--color-border)', color: 'var(--color-text)' }}
      onClick={onClick}>
      <span className="">{children}</span>
    </button>
  )
}