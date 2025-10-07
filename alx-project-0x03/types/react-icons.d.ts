declare module 'react-icons/*' {
  // allow any named export (FaHome, etc.)
  const anyExport: { [key: string]: any };
  export = anyExport;
}

declare module 'react-icons/fa' {
  export const FaHome: any;
  const _default: { [key: string]: any };
  export default _default;
}
