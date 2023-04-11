import { useState, useCallback, memo } from "react";

// memo: skip re-rendering when its props are the same as on last render
const Child = memo(({ onSubmit }: { onSubmit: () => void }) => {
  const handleSubmit = () => onSubmit();

  console.log("Child render");

  return <button onClick={handleSubmit}>Submit Child</button>;
});

function Parent() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  const handleChangeTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
  };

  // ao remover useCallback, a referencia da fn nunca vai ser igual
  const handleSubmit = useCallback(() => {
    console.log("submit");
  }, []);

  console.log("Parent render");

  return (
    <div>
      <h1>Theme: {theme}</h1>
      <button onClick={handleChangeTheme}>ChangeTheme</button>
      <Child onSubmit={handleSubmit} />
    </div>
  );
}

export default Parent;
