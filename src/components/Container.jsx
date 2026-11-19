// One shared width + side margin for every section
export default function Container({ children, className = "" }) {
  return <div className={`mx-auto w-full max-w-6xl px-6 lg:px-10 ${className}`}>{children}</div>;
}