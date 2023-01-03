// any는 제한적으로 쓰임
// 매개변수의 타입이 들어가지 않으면 any라고 판단함

const returnAny = (message: string): any => {
  console.log(message)
}

const any1 = returnAny("리턴은 아무거나")

any1.toString(); // 런타임에서 오류 발생

let looselyTyped: any = {}

const d = looselyTyped.a.b.c.d.e.f.g // 컴파일에선 오류가 발생되지않음

const leakingAny = (obj: any) => {
  const a = obj.num
  const b = a + 1
  return b;
}

const c = leakingAny({num: 0});

c.indexOf("0")