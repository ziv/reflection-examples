// deno-lint-ignore ban-types
type Target = Function | Object;
type Key = string | symbol;


export function Cls(): ClassDecorator {
  return (_t: Target) => {
  };
}

export function Mth(): MethodDecorator {
  return (_t: Target, _k: Key, _d: TypedPropertyDescriptor<any>) => {
  };
}

export function Prm(): ParameterDecorator {
  return (_t: Target, _k: Key, _i: number) => {
  };
}

export function Prp(): PropertyDecorator {
  return (_t: Target, _k: Key) => {

  };
}
