import "https://deno.land/x/reflection/mod.ts";
import { designType, header, text, title } from "./utils.ts";
import { Cls, Prp, Prm, Mth } from "./decorators.ts";

@Cls()
class Foo {
  constructor(_n: number,
              _s: string) {
  }

  @Prp()
  get name(): string {
    return "foo";
  }

  @Mth()
  foo(@Prm() _f: boolean): Date {
    return new Date();
  }
}

const foo = new Foo(0, "str");

const DT = "design:type";
const DPT = "design:paramtypes";
const DRT = "design:returntype";

title("Static");

header("Constructor");
text("Apply on a type (class/constructor)");
designType("ParamTypes", Reflect.getMetadata(DPT, Foo));


title("Dynamic");
text("Apply on an instance");

header("Properties");
text("foo.name (getter)");
designType("Type", Reflect.getMetadata(DT, foo, "name"));

header("Methods");
text("foo.foo()");
designType("Type", Reflect.getMetadata(DT, foo, "foo"));
designType("ParamTypes", Reflect.getMetadata(DPT, foo, "foo"));
designType("ReturnType", Reflect.getMetadata(DRT, foo, "foo"));
