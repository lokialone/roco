export const isPhone = (phone: string): boolean => {
    return /^1\d{10}$/.test(phone);
};

export const chineseRegex = /^[\u4e00-\u9fa5]+$/;
export const isChinese = (s: string): boolean => {
    return chineseRegex.test(s);
};

export const isEnglish = (s: string): boolean => {
    return /^[a-zA-Z]+$/.test(s);
};

export const isChineseOrEnglish = (s: string): boolean => {
    return /^[\u4e00-\u9fa5A-Za-z]+$/.test(s);
};

export const isPositiveInteger = (s: string): boolean => {
    return /^[0-9]+$/.test(s);
};
