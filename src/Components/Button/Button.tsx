import {ReactNode} from 'react';

export type ButtonProps = {
    label?: string;
    size?: 'small' | 'medium' | 'large';
    variant?: 'primary' | 'secondary';
    children?: ReactNode | string | undefined;
    onclick: () => void;
}

export const Button = ({ children = undefined, onclick = ()=> {}, variant = 'primary',  size = 'medium', label="Button" }: ButtonProps) => {
    
    return <button className={ ` font-sourcesanspro  button-sass button-sass-${variant} button-sass-${size} btn-red`} onClick={onclick}>
        <span>{`${label}`}</span>
        {children}</button>;
    };
