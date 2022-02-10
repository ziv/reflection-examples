import { blue, gray, green, yellow } from "https://deno.land/std@0.125.0/fmt/colors.ts";

export function designType(type: string, values: unknown) {
  console.log(" ", blue(`@${type}(`), values, blue(")"));
}

export function text(t: string) {
  console.log(" ", gray(t));
}

export function title(t: string) {
  console.log("\n", green(t));
}

export function header(t: string) {
  console.log("\n", yellow(t));
}
