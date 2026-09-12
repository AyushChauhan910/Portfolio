import { Html, useProgress } from "@react-three/drei";

const CanvasLoader = () => {
  const { progress } = useProgress();
  return (
    <Html
      as='div'
      style={{
        position: "fixed",
        bottom: "1.5rem",
        right: "1.5rem",
        display: "flex",
        alignItems: "center",
        gap: "8px",
        pointerEvents: "none",
      }}
    >
      <span className='canvas-loader' style={{ transform: "scale(0.6)" }}></span>
      <p
        style={{
          fontSize: 11,
          color: "#aaa",
          fontWeight: 600,
          margin: 0,
          whiteSpace: "nowrap",
        }}
      >
        {progress.toFixed(0)}%
      </p>
    </Html>
  );
};

export default CanvasLoader;
