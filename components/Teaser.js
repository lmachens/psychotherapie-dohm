function Teaser({ title, children }) {
  return (
    <div className="d-flex flex-column justify-content-center h-100 text-center p-5">
      <h2>{title}</h2>
      {children}
    </div>
  );
}

export default Teaser;
