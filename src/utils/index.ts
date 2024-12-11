export function combineClasses(
  styles: CSSModuleClasses,
  ...classNames: string[]
): string {
  return classNames.map((className) => styles[className]).join(" ");
}
