// Deletes all HTML tags
export const RemoveTags = (text: string) : string => {
    let ogString = text;
    let newText = ogString.replace(/<(.|\n)*?>/g, '');
    console.log(newText)

    return newText;
}