"use strict";
// never은 모든 타입의 subtype임
// 하지만 never에는 그 무엇도 할당이 불가능
// any조차도 never에게 할당 할 수 없음
// 잘못된 타입을 넣는 실수를 막고자할떄 사용하기도 함
const error = (message) => {
    throw new Error(message);
};
const fail = () => {
    return error("failed Error");
};
const infiniteLoop = () => {
    while (true) { }
};
if (typeof a !== "string") { //typeOf 가드
    a; //never type
}
// extends 만약 T가 String이면
// 그게아니면 never타입이 나와야함
