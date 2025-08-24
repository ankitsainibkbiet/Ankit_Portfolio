function Container({ children, className = "" }) {
  return (
    <div className={`max-w-[85%] mx-auto ${className}`}>
      {children}
    </div>
  );
}

export default Container;
