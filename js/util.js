export function RandomNumber(min, max){
    let ramdomInt = Math.floor(Math.random() * (max - min + 1)) + min;
    return ramdomInt;
}