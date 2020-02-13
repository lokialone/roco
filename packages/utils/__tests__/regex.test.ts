import {isPhone, isChinese, isEnglish, isChineseOrEnglish, isPositiveInteger} from '../src/regex';

test('isPhone', () => {
    expect(isPhone('1222')).toBe(false);
    expect(isPhone('15757129710')).toBe(true);
});

test('isChinese', () => {
    expect(isChinese('你')).toBe(true);
    expect(isChinese('a你')).toBe(false);
    expect(isChinese('-')).toBe(false);
    expect(isChinese('0')).toBe(false);
});

test('isEnglish', () => {
    expect(isEnglish('a')).toBe(true);
    expect(isEnglish('0')).toBe(false);
    expect(isEnglish('')).toBe(false);
    expect(isEnglish('.')).toBe(false);
});

test('isChineseOrEnglish', () => {
    expect(isChineseOrEnglish('你')).toBe(true);
    expect(isChineseOrEnglish('i')).toBe(true);
    expect(isChineseOrEnglish('你i')).toBe(true);
    expect(isChineseOrEnglish('i你')).toBe(true);
    expect(isChineseOrEnglish('3')).toBe(false);
    expect(isChineseOrEnglish('0i')).toBe(false);
    expect(isChineseOrEnglish('i0')).toBe(false);
    expect(isChineseOrEnglish('')).toBe(false);
});

test('isPositiveInteger', () => {
    expect(isPositiveInteger('30')).toBe(true);
    expect(isPositiveInteger('0.5')).toBe(false);
    expect(isPositiveInteger('-10')).toBe(false);
    expect(isPositiveInteger('30e')).toBe(false);
    expect(isPositiveInteger('a')).toBe(false);
});
