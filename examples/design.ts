import "https://deno.land/x/reflection/mod.ts";
import { designType, header, text, title } from "./utils.ts";
import { Cls, Prp, Prm, Mth } from "./decorators.ts";
//
//design:paramtypes
//design:type
//design:returntype
//design:properties

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


// console.log(Reflect.getMetadata("design:properties", App));
// console.log(Reflect.getMetadata(DRT, foo.foo));
// console.log(Reflect.getMetadata(DPT, foo.foo));
// ;
// display("Type (constructor)", Design.ParamTypes, Reflect.getMetadata(Metadata.ParamTypes, Foo));
// display("Property", Design.Type, Reflect.getMetadata(Metadata.Type, foo, "name"));
// console.log("ParamTypes design parameters:")
// console.log("@ParamTypes(", Reflect.getMetadata("design:paramtypes", Foo), ")");
// console.log("");
// console.log("Type design parameters:")
// console.log(Reflect.getMetadataKeys(Foo));


/*
import 'reflect-metadata'

console.clear()

function readTypes () {
  const decorator: MethodDecorator = (target, propertyKey, description) => {
    const args = Reflect.getMetadata('design:paramtypes', target, propertyKey)
      .map(c => c.name)
    const ret = Reflect.getMetadata('design:returntype', target, propertyKey)
    console.log(`Arguments type: ${args.join(', ')}.`)
    console.log(`Return type:    ${ret.name}.`)
  }
  return decorator
}

class Foo {

}

class Bar {

  @readTypes()
  public fn (a: number, b: string, c: Foo): boolean {
    return true
  }

}

 */
