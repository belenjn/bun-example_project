export const App = () => {
  const handleClick = () => {
    alert("click");
  };
  return (
    <>
      <h1>Hola mundo</h1>
      <h2> Probando</h2>
      <button onClick={handleClick}>Click me</button>
    </>
  );
};
