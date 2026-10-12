export interface IInputbox {
    name?:string
    style?: string, 
    type? : string,
    defaultValue?:string,
    placeholder? : string,
}

export const WhiteInputbox = ({name, style,type, defaultValue, placeholder}: IInputbox) =>{
    return(
            <input name={`${name}`}  type={type} defaultValue={defaultValue ? `${defaultValue}`: ''}
            className={`${style} not-odd:h-11 w-full rounded-lg border px-3 text-sm outline-none`}
            style={{ backgroundColor: 'var(--color-surface)', borderColor: 'var(--color-border)', color: 'var(--color-text)' }} 
            placeholder={placeholder} />
        )
} 