export const RemoveTags = (text: string, tags: string[]) : string => {
    let ogString = text;
    let newText = ogString;

    tags.forEach(tag => {
        newText = newText.replace(tag, '')
    });

    return newText;
}