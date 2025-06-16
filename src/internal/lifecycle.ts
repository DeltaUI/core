/**
 * Decorator used to mark StencilJS lifecycle methods.
 */
export function Lifecycle() {
  return (..._: any) => {};
}
