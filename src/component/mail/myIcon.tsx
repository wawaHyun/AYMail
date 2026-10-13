'use client'
import { IButton } from "@/src/ui/button"

export const MyIcon = ({onClick, style, children, }: IButton) =>{
    return(
      <button className={`${style} ml-2 flex h-10 w-10 items-center justify-center rounded-full`} style={{ backgroundColor: 'var(--color-primary-light)', color: 'var(--color-primary)' }}
      onClick={onClick} >
        <span className="text-sm font-semibold">{children}</span>
      </button>
        )
} 