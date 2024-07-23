import {ReactNode} from 'react';

export type ButtonTwProps = {
    label?: string;
    size?: 'small' | 'medium' | 'large';
    variant?: 'primary' | 'secondary';
    children?: ReactNode | string | undefined;
    onclick: () => void;
}

export const ButtonTw = ({ children = undefined, onclick = ()=> {}, label="Button" }: ButtonTwProps) => {
    
    return <div className=' bg-Secondary-80'><button className="" onClick={onclick}>
        <span>{`${label}`}</span>
        <div className=' heading bg-Primary-100'>just testing</div>
        {children}</button></div>;
    };
