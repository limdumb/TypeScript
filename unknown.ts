declare const maybe: unknown;

// const aNumber: number = maybe; // unknown에 즉각적으로 number를 할당 할 수 없음

if (maybe === true) {
  const aBoolean: boolean = maybe;

  // const aString: string = maybe;  오류 발생
}

if (typeof maybe === "string") {
  const aString: string = maybe;
}
