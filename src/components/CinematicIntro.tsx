import React, { useEffect, useRef, useState, useCallback } from "react";
import { Volume2, VolumeX, FastForward, Sparkles } from "lucide-react";
import { brandConfig } from "../config/brandConfig";
import { useCountdown } from "../hooks/useCountdown";
import "./CinematicIntro.css";

interface CinematicIntroProps {
  onComplete: () => void;
}

type IntroPhase = "opening" | "count-3" | "count-2" | "count-1" | "digital" | "launch" | "reveal";

export const CinematicIntro: React.FC<CinematicIntroProps> = ({ onComplete }) => {
  const [phase, setPhase] = useState<IntroPhase>("opening");
  const [isAudioEnabled, setIsAudioEnabled] = useState(true);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [cameraShake, setCameraShake] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  // Digital scrambler states for futuristic launch control lock-in
  const [digitalLocked, setDigitalLocked] = useState(false);
  const [scrambleD, setScrambleD] = useState("88");
  const [scrambleH, setScrambleH] = useState("88");
  const [scrambleM, setScrambleM] = useState("88");
  const [scrambleS, setScrambleS] = useState("88");

  // Synchronized countdown values to target launch date
  const { days, hours, minutes, seconds } = useCountdown(brandConfig.launchDateISO);

  // Audio Context Ref (Synthesized Web Audio API — No external MP3 files needed)
  const audioCtxRef = useRef<AudioContext | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const particlesRef = useRef<Array<{ x: number; y: number; vx: number; vy: number; size: number; alpha: number; color: string }>>([]);
  const animFrameRef = useRef<number | null>(null);

  // Initialize Web Audio safely respecting browser restrictions
  const getAudioContext = useCallback(() => {
    if (!audioCtxRef.current && typeof window !== "undefined") {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioContextClass) {
        audioCtxRef.current = new AudioContextClass();
      }
    }
    if (audioCtxRef.current && audioCtxRef.current.state === "suspended") {
      audioCtxRef.current.resume().catch(() => {});
    }
    return audioCtxRef.current;
  }, []);

  // Global listeners to automatically un-suspend Web Audio on any micro interaction
  useEffect(() => {
    const ctx = getAudioContext();
    if (ctx && ctx.state === "suspended") {
      ctx.resume().catch(() => {});
    }

    const unlockAudio = () => {
      const audioCtx = getAudioContext();
      if (audioCtx && audioCtx.state === "suspended") {
        audioCtx.resume().catch(() => {});
      }
    };

    const events = ["pointerdown", "mousedown", "touchstart", "keydown", "mousemove", "wheel", "focus"];
    events.forEach((evt) => window.addEventListener(evt, unlockAudio, { passive: true, once: true }));

    return () => {
      events.forEach((evt) => window.removeEventListener(evt, unlockAudio));
    };
  }, [getAudioContext]);

  // 1. Synthesize Cinematic Sub-Bass Impact Boom (Dual oscillator for punchy, deep bass)
  const playSubBoom = useCallback((freq = 80, duration = 0.85) => {
    if (!isAudioEnabled) return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;

      const trigger = () => {
        const osc = ctx.createOscillator();
        const subOsc = ctx.createOscillator();
        const gain = ctx.createGain();

        // Main deep sub-bass drop (80Hz down to 24Hz)
        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(24, ctx.currentTime + duration);

        // Rich warm harmonic punch
        subOsc.type = "triangle";
        subOsc.frequency.setValueAtTime(freq * 1.5, ctx.currentTime);
        subOsc.frequency.exponentialRampToValueAtTime(32, ctx.currentTime + duration * 0.7);

        gain.gain.setValueAtTime(0.85, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);

        osc.connect(gain);
        subOsc.connect(gain);
        gain.connect(ctx.destination);

        osc.start();
        subOsc.start();
        osc.stop(ctx.currentTime + duration);
        subOsc.stop(ctx.currentTime + duration);
      };

      if (ctx.state === "suspended") {
        ctx.resume().then(trigger).catch(() => {});
      } else {
        trigger();
      }
    } catch {
      // Audio playback silently caught
    }
  }, [getAudioContext, isAudioEnabled]);

  // 2. Synthesize High-Tech Digital Glitch Lock Click
  const playDigitalClick = useCallback(() => {
    if (!isAudioEnabled) return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;

      const trigger = () => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = "triangle";
        osc.frequency.setValueAtTime(2400, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(700, ctx.currentTime + 0.05);

        gain.gain.setValueAtTime(0.28, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.05);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start();
        osc.stop(ctx.currentTime + 0.05);
      };

      if (ctx.state === "suspended") {
        ctx.resume().then(trigger).catch(() => {});
      } else {
        trigger();
      }
    } catch {
      // Silent catch
    }
  }, [getAudioContext, isAudioEnabled]);

  // 3. Synthesize Supernova Launch Moment Blast & Harmonic Chimes
  const playLaunchBlast = useCallback(() => {
    if (!isAudioEnabled) return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;

      const trigger = () => {
        // Deep sub blast
        const subOsc = ctx.createOscillator();
        const subGain = ctx.createGain();
        subOsc.type = "sine";
        subOsc.frequency.setValueAtTime(100, ctx.currentTime);
        subOsc.frequency.exponentialRampToValueAtTime(22, ctx.currentTime + 1.3);
        subGain.gain.setValueAtTime(0.95, ctx.currentTime);
        subGain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 1.3);
        subOsc.connect(subGain);
        subGain.connect(ctx.destination);
        subOsc.start();
        subOsc.stop(ctx.currentTime + 1.3);

        // Shimmering luxury harmonic chord (F major / A / C ethereal chime)
        [523.25, 659.25, 783.99, 1046.5].forEach((frequency, index) => {
          const chime = ctx.createOscillator();
          const chimeGain = ctx.createGain();
          chime.type = "sine";
          chime.frequency.setValueAtTime(frequency, ctx.currentTime + index * 0.04);
          chimeGain.gain.setValueAtTime(0.22, ctx.currentTime + index * 0.04);
          chimeGain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 1.5);
          chime.connect(chimeGain);
          chimeGain.connect(ctx.destination);
          chime.start(ctx.currentTime + index * 0.04);
          chime.stop(ctx.currentTime + 1.5);
        });
      };

      if (ctx.state === "suspended") {
        ctx.resume().then(trigger).catch(() => {});
      } else {
        trigger();
      }
    } catch {
      // Silent catch
    }
  }, [getAudioContext, isAudioEnabled]);

  // Trigger camera shake effect
  const triggerCameraShake = useCallback(() => {
    setCameraShake(true);
    setTimeout(() => setCameraShake(false), 420);
  }, []);

  // Handle completion and smooth exit
  const handleFinish = useCallback(() => {
    setIsExiting(true);
    setTimeout(() => {
      onComplete();
    }, 750);
  }, [onComplete]);

  // Handle Skip option
  const handleSkip = useCallback(() => {
    handleFinish();
  }, [handleFinish]);

  // Digital scrambler effect during "digital" phase
  useEffect(() => {
    if (phase !== "digital") return;

    let iterations = 0;
    const interval = setInterval(() => {
      iterations++;
      setScrambleD(String(Math.floor(Math.random() * 90) + 10));
      setScrambleH(String(Math.floor(Math.random() * 24)).padStart(2, "0"));
      setScrambleM(String(Math.floor(Math.random() * 60)).padStart(2, "0"));
      setScrambleS(String(Math.floor(Math.random() * 60)).padStart(2, "0"));

      if (iterations > 14) {
        clearInterval(interval);
        setDigitalLocked(true);
        playDigitalClick();
      }
    }, 40);

    return () => clearInterval(interval);
  }, [phase, playDigitalClick]);

  // Listen to Escape key to skip intro
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleSkip();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [handleSkip]);

  // Canvas floating stars & particles
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const onResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", onResize);

    // Initialize 70 ambient particles
    const particles: Array<{ x: number; y: number; vx: number; vy: number; size: number; alpha: number; color: string }> = [];
    const colors = ["#FFFFFF", "#FF85A2", "#FF2E74", "#FFD2DF"];
    for (let i = 0; i < 70; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 2 + 0.8,
        alpha: Math.random() * 0.7 + 0.2,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }
    particlesRef.current = particles;

    let lastTime = performance.now();
    const render = (time: number) => {
      const dt = (time - lastTime) / 1000;
      lastTime = time;

      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.x += p.vx * 60 * dt;
        p.y += p.vy * 60 * dt;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.save();
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.shadowBlur = 8;
        ctx.shadowColor = p.color;
        ctx.fill();
        ctx.restore();
      });

      animFrameRef.current = requestAnimationFrame(render);
    };

    animFrameRef.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("resize", onResize);
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, []);

  // Burst explosion particles on launch moment
  const triggerParticleExplosion = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const cx = canvas.width / 2;
    const cy = canvas.height / 2;

    for (let i = 0; i < 80; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 6 + 3;
      particlesRef.current.push({
        x: cx,
        y: cy,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        size: Math.random() * 3 + 1.5,
        alpha: 1,
        color: i % 2 === 0 ? "#FF4D80" : "#FFFFFF",
      });
    }
  }, []);

  // Timeline Sequence Director (Total duration ~ 6.8 seconds)
  useEffect(() => {
    const timeline = [
      // 0.0s: Opening - black screen, ambient glow begins
      { time: 50, action: () => setPhase("opening") },

      // 0.7s: Number "3" impacts with camera shake and sub-bass boom
      {
        time: 700,
        action: () => {
          setPhase("count-3");
          triggerCameraShake();
          playSubBoom(85, 0.75);
        },
      },

      // 1.9s: Number "2" impacts
      {
        time: 1900,
        action: () => {
          setPhase("count-2");
          triggerCameraShake();
          playSubBoom(75, 0.8);
        },
      },

      // 3.1s: Number "1" impacts
      {
        time: 3100,
        action: () => {
          setPhase("count-1");
          triggerCameraShake();
          playSubBoom(65, 0.9);
        },
      },

      // 4.3s: Futuristic Digital Launch Control System sync
      {
        time: 4300,
        action: () => {
          setPhase("digital");
          playDigitalClick();
          setTimeout(playDigitalClick, 160);
          setTimeout(playDigitalClick, 320);
        },
      },

      // 5.8s: Launch Moment (Flash & Supernova pulse)
      {
        time: 5800,
        action: () => {
          setPhase("launch");
          triggerCameraShake();
          triggerParticleExplosion();
          playLaunchBlast();
        },
      },

      // 6.6s: Website Reveal transition
      {
        time: 6600,
        action: () => {
          setPhase("reveal");
          handleFinish();
        },
      },
    ];

    const timeouts = timeline.map((item) => setTimeout(item.action, item.time));

    return () => {
      timeouts.forEach((t) => clearTimeout(t));
    };
  }, [playSubBoom, playDigitalClick, playLaunchBlast, triggerCameraShake, triggerParticleExplosion, handleFinish]);

  // First user interaction unlocks AudioContext smoothly
  const handleUserInteraction = () => {
    if (!hasInteracted) {
      setHasInteracted(true);
      getAudioContext();
    }
  };

  return (
    <div
      className={`cinematic-intro-overlay ${cameraShake ? "camera-shake-active" : ""} ${isExiting ? "intro-exiting" : ""}`}
      onClick={handleUserInteraction}
      role="dialog"
      aria-modal="true"
      aria-label="Cinematic Launch Countdown Intro"
    >
      {/* 1. Starlight particle canvas background */}
      <canvas ref={canvasRef} className="cinematic-particle-canvas" />

      {/* 2. Deep ambient radial pink glow */}
      <div className="cinematic-ambient-glow" />

      {/* 3. Top Action Bar: Sound Toggle & Skip Option */}
      <div className="cinematic-top-controls">
        <button
          type="button"
          className="cinematic-btn"
          onClick={(e) => {
            e.stopPropagation();
            setIsAudioEnabled(!isAudioEnabled);
            if (!hasInteracted) {
              setHasInteracted(true);
              getAudioContext();
            }
          }}
          title={isAudioEnabled ? "Mute audio" : "Enable sound"}
          aria-label={isAudioEnabled ? "Mute audio" : "Enable sound"}
        >
          {isAudioEnabled ? <Volume2 size={15} color="#FF4D80" /> : <VolumeX size={15} color="#FF9EBB" />}
          <span>{isAudioEnabled ? "SOUND ON" : "MUTED"}</span>
        </button>

        <button
          type="button"
          className="cinematic-btn"
          onClick={(e) => {
            e.stopPropagation();
            handleSkip();
          }}
          title="Skip intro directly to website"
          aria-label="Skip intro"
        >
          <span>SKIP INTRO</span>
          <FastForward size={14} color="#FF4D80" />
        </button>
      </div>

      {/* 4. Center Stage Dynamic Sequence */}
      <div className="cinematic-stage">
        
        {/* Pre-title status badge */}
        <div className="cinematic-eyebrow">
          <span className="dot-radar" />
          <span>SKU THE LABEL · OFFICIAL LAUNCH ACTIVATION</span>
        </div>

        {/* Phase 1: Countdown 3 */}
        {phase === "count-3" && (
          <div key="count-3" style={{ position: "relative" }}>
            <div className="shockwave-ring" />
            <div className="cinematic-count-number">3</div>
          </div>
        )}

        {/* Phase 2: Countdown 2 */}
        {phase === "count-2" && (
          <div key="count-2" style={{ position: "relative" }}>
            <div className="shockwave-ring" />
            <div className="cinematic-count-number">2</div>
          </div>
        )}

        {/* Phase 3: Countdown 1 */}
        {phase === "count-1" && (
          <div key="count-1" style={{ position: "relative" }}>
            <div className="shockwave-ring" />
            <div className="cinematic-count-number">1</div>
          </div>
        )}

        {/* Phase 4: Digital Countdown Futuristic System */}
        {phase === "digital" && (
          <div className="digital-countdown-panel">
            <div
              className="digital-timer-grid"
              style={{
                borderColor: digitalLocked ? "#FF2E74" : "rgba(255, 77, 128, 0.45)",
                boxShadow: digitalLocked
                  ? "0 0 60px rgba(255, 46, 116, 0.45), inset 0 0 35px rgba(255, 46, 116, 0.18)"
                  : "0 0 40px rgba(255, 46, 116, 0.2)",
                transition: "all 0.3s ease",
              }}
            >
              <div className="digital-digit-box">
                <span className="digital-digit-value">
                  {digitalLocked ? String(days).padStart(2, "0") : scrambleD}
                </span>
                <span className="digital-digit-label">DAYS</span>
              </div>
              <span className="digital-separator">:</span>
              <div className="digital-digit-box">
                <span className="digital-digit-value">
                  {digitalLocked ? String(hours).padStart(2, "0") : scrambleH}
                </span>
                <span className="digital-digit-label">HOURS</span>
              </div>
              <span className="digital-separator">:</span>
              <div className="digital-digit-box">
                <span className="digital-digit-value">
                  {digitalLocked ? String(minutes).padStart(2, "0") : scrambleM}
                </span>
                <span className="digital-digit-label">MINS</span>
              </div>
              <span className="digital-separator">:</span>
              <div className="digital-digit-box">
                <span className="digital-digit-value">
                  {digitalLocked ? String(seconds).padStart(2, "0") : scrambleS}
                </span>
                <span className="digital-digit-label">SECS</span>
              </div>
            </div>

            <div className="digital-status-text">
              <Sparkles size={14} color="#FF2E74" />
              <span>
                {digitalLocked
                  ? "COUNTDOWN SYNCHRONIZED · 01 DEC 2026"
                  : "CALIBRATING LAUNCH TRAJECTORY..."}
              </span>
            </div>
          </div>
        )}

        {/* Phase 5: Launch Moment (Supernova Flash & Logo Medallion Reveal) */}
        {(phase === "launch" || phase === "reveal") && (
          <div style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div className="launch-moment-flash" />
            
            <div
              className="launch-logo-reveal"
              style={{
                width: "clamp(120px, 20vw, 170px)",
                height: "clamp(120px, 20vw, 170px)",
                borderRadius: "50%",
                padding: "3px",
                background: "linear-gradient(135deg, #FF2E74 0%, #FF85A2 50%, #FF2E74 100%)",
                boxShadow: "0 0 55px rgba(255, 46, 116, 0.75), 0 0 100px rgba(255, 77, 128, 0.4)",
                overflow: "hidden",
                marginBottom: "1.5rem",
              }}
            >
              <img
                src="/logo.png"
                alt="SKU THE LABEL Logo"
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "50%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </div>

            <div
              style={{
                fontFamily: "var(--font-serif, serif)",
                fontSize: "clamp(2.5rem, 5vw, 3.8rem)",
                fontWeight: 600,
                letterSpacing: "0.14em",
                color: "#FFFFFF",
                textShadow: "0 0 35px rgba(255, 77, 128, 0.6)",
                lineHeight: 1,
              }}
            >
              SKU THE LABEL
            </div>
            
            <div
              style={{
                fontSize: "clamp(0.72rem, 1.2vw, 0.88rem)",
                letterSpacing: "0.26em",
                fontWeight: 600,
                color: "#FF9EBB",
                marginTop: "0.75rem",
                textTransform: "uppercase",
              }}
            >
              ACTIVATING FLAGSHIP EXPERIENCE
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default CinematicIntro;
