// 계산 기능을 하는 파일
const add = (a, b) => a + b;
const sub = (a, b) => a - b;

// 모듈을 내보내야 다른 js 파일에서 함수를 호출 가능함
// 모듈 내보내는 방법
module.exports = {
    moduleName : 'calc module',
    add : add,
    sub : sub,
};