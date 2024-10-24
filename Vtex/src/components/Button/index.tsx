interface ButtonProps {
    children: React.ReactNode
    py: string
    px: string
    textSize: string
    fontWeight: string
    uppercase?: string
    width?: string
}

export function Button(props: ButtonProps) {
    return (
        <button className={`${props.width} ${props.py} ${props.px} ${props.fontWeight} ${props.textSize} ${props.uppercase} bg-primary-color hover:bg-primary-color-hover text-text-color-primary rounded-md`}>
            {props.children}
        </button>
    )
}