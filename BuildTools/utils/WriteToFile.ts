
import fs from 'fs';
import path from 'path';

/**
 * Writes text into a file at a given file path.
 * The file path is relative to the execution context.
 * If the directory does not exist it will be created.
 * @param {string} source The text to be stored in the file 
 * @param {string} name The title of the file to be saved
 * @param {string} writePath Where to save the file to
 * @param {string} extension What is the suffix of the file, eg .txt, .json, .js. Do not include the dot, that will be added automatically
 */


export const writeToFile = (
    source: string = "",
    name: string = "default",
    writePath = "output",
    extension = "js"
): string => {
    if (!fs.existsSync(writePath)) {
        fs.mkdirSync(writePath);
    }
    const filePath = path.join(writePath, `${name}.${extension}`);
    try {
        fs.writeFileSync(filePath, source);
        console.log(`${filePath} - has been created`);
    } catch (err) {
        console.error(err);
    }
    return filePath;
};