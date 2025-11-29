import { useEffect, useRef } from "react";

export default function MusicPlayer() {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    audio.volume = 0.4;
    audio.muted = true;

    audio.play().catch(() => {});

    const enableSound = () => {
      audio.muted = false;
      audio.play();
      window.removeEventListener("click", enableSound);
      window.removeEventListener("keydown", enableSound);
    };

    window.addEventListener("click", enableSound);
    window.addEventListener("keydown", enableSound);

    return () => {
      window.removeEventListener("click", enableSound);
      window.removeEventListener("keydown", enableSound);
    };
  }, []);

  return (
    <audio
      ref={audioRef}
      src="/music/stranger_things_intro.mp3"
      loop
    />
  );
}
