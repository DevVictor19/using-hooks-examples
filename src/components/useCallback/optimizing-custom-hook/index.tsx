import { useCallback } from "react";

const dispatch = (obj: object) => {
  return obj;
};

/* If you’re writing a custom Hook, it’s recommended to wrap any functions that it 
returns into useCallback */
// This ensures that the consumers of your Hook can optimize their own code when needed.
function useRouter() {
  const navigate = useCallback(
    (url: string) => {
      dispatch({ type: "navigate", url });
    },
    [dispatch]
  );

  const goBack = useCallback(() => {
    dispatch({ type: "back" });
  }, [dispatch]);

  return {
    navigate,
    goBack,
  };
}

export default useRouter;
