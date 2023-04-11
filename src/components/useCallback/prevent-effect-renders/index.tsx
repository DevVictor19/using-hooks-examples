import { useCallback, useEffect } from "react";

function ChatRoom({ roomId }: { roomId: string }) {
  const createOptions = useCallback(() => {
    return {
      serverUrl: "https://localhost:1234",
      roomId: roomId,
    };
  }, [roomId]);

  useEffect(() => {
    createOptions();
  }, [createOptions]);
}

export default ChatRoom;
