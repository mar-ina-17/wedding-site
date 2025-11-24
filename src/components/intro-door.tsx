import { useCallback, useEffect, useMemo, useState } from "react";

const DISMISS_DELAY = 500;
const FADE_DURATION = 4000; 

export function IntroDoor() {
  const [visible, setVisible] = useState(true);
  const [ready, setReady] = useState(false);
  const [dismissing, setDismissing] = useState(false);
  const sources = useMemo(
    () => [
      "/images/decorations/sunflower8.webp",
      "/images/decorations/sunflower9.webp",
      "/images/decorations/sunflower1.webp",
    ],
    []
  );

  useEffect(() => {
    let cancelled = false;
    const preload = (src: string) =>
      new Promise<void>((resolve) => {
        const img = new Image();
        img.onload = () => resolve();
        img.onerror = () => resolve();
        img.src = src;
      });

    Promise.all(sources.map(preload)).then(() => {
      if (!cancelled) {
        setReady(true);
      }
    });

    return () => {
      cancelled = true;
    };
  }, [sources]);

  const startDismiss = useCallback(() => {
    setDismissing((prev) => (prev ? prev : true));
  }, []);

  useEffect(() => {
    if (!ready || dismissing) {
      return;
    }

    const timer = window.setTimeout(() => startDismiss(), DISMISS_DELAY);

    const handleUserDismiss = () => startDismiss();
    const events: Array<keyof WindowEventMap> = [
      "click",
      "keydown",
      "touchstart",
    ];

    events.forEach((event) =>
      window.addEventListener(event, handleUserDismiss, { once: true })
    );

    return () => {
      window.clearTimeout(timer);
      events.forEach((event) =>
        window.removeEventListener(event, handleUserDismiss)
      );
    };
  }, [ready, dismissing, startDismiss]);

  useEffect(() => {
    if (!dismissing) {
      return;
    }

    const timer = window.setTimeout(() => setVisible(false), FADE_DURATION);

    return () => window.clearTimeout(timer);
  }, [dismissing]);

  if (!visible) {
    return null;
  }

  const classNames = ["intro-door"];
  if (ready) {
    classNames.push("intro-door--loaded");
  }
  if (dismissing) {
    classNames.push("intro-door--dismiss");
  }
  const rootClassName = classNames.join(" ");

  return (
    <div className={rootClassName} aria-live="polite">
      <div className="intro-door__sunflower intro-door__sunflower--top">
        <img
          src="/images/decorations/sunflower8.webp"
          alt=""
          role="presentation"
          loading="eager"
        />
      </div>
      <div className="intro-door__sunflower intro-door__sunflower--middle">
        <img
          src="/images/decorations/sunflower9.webp"
          alt=""
          role="presentation"
          loading="eager"
        />
      </div>
      <div className="intro-door__content">
        <h1 className="intro-door__welcome_names relative z-10 text-xl md:text-2xl font-bold text-black font-secondary">
          Momchil &amp; Marina
        </h1>
        <p className="intro-door__welcome">...запазете датата...</p>
        <p className="intro-door__date">22.05.2026</p>
      </div>
      <div className="intro-door__sunflower-base">
        <img
          src="/images/decorations/sunflower1.webp"
          alt=""
          role="presentation"
          loading="eager"
        />
      </div>
    </div>
  );
}
