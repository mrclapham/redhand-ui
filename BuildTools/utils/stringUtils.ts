export const removeSuffix = (str: string): string => {
    return str.split('.')[0];
}

export const makeKeyString = (str: string, removeString?: string): string => {
    if (removeString) {
        str = str.toLocaleLowerCase().replace(removeString.toLocaleLowerCase(), '');
    }  
    return str.replace(/[^a-zA-Z0-9]/g, '')//.toLowerCase();
}