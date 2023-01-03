// void = 값을 반환하지않는 일종의 undefined를 반환하는 리턴타입에 사용함
// undefined만 유일하게 할당이 가능함

const returnVoid = (message: string): void => {
  console.log(message);

  return undefined;
}

returnVoid("리턴이 없다");

