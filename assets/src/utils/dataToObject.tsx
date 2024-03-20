export function dataToObject(string: { [key: string]: FormDataEntryValue }) {
    const result = {} as { [key: string]: any };

    for (const key in string) {
        const parts = key.split("[").map((part) => part.replace("]", ""));
        let temp = result;

        for (let i = 0; i < parts.length; i++) {
            const part = parts[i];

            if (!temp[part]) {
                if (i === parts.length - 1) {
                    temp[part] = string[key];
                } else {
                    temp[part] = {};
                }
            }

            temp = temp[part];
        }
    }

    return result;
}
