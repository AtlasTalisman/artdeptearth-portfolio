"use client";

interface AnnotationLabelProps {
  text: string;
  position: { top?: string; bottom?: string; left?: string; right?: string };
  lineDirection?: "left" | "right" | "up" | "down";
  lineLength?: number;
  className?: string;
  onClick?: () => void;
}

export default function AnnotationLabel({
  text,
  position,
  lineDirection = "left",
  lineLength = 40,
  className = "",
  onClick,
}: AnnotationLabelProps) {
  const getLineStyle = () => {
    switch (lineDirection) {
      case "left":
        return {
          line: { right: "100%", top: "50%", width: lineLength, height: 1, transform: "translateY(-50%)" },
          endpoint: { right: `calc(100% + ${lineLength}px)`, top: "50%", transform: "translate(50%, -50%)" },
        };
      case "right":
        return {
          line: { left: "100%", top: "50%", width: lineLength, height: 1, transform: "translateY(-50%)" },
          endpoint: { left: `calc(100% + ${lineLength}px)`, top: "50%", transform: "translate(-50%, -50%)" },
        };
      case "up":
        return {
          line: { left: "50%", bottom: "100%", width: 1, height: lineLength, transform: "translateX(-50%)" },
          endpoint: { left: "50%", bottom: `calc(100% + ${lineLength}px)`, transform: "translate(-50%, 50%)" },
        };
      case "down":
        return {
          line: { left: "50%", top: "100%", width: 1, height: lineLength, transform: "translateX(-50%)" },
          endpoint: { left: "50%", top: `calc(100% + ${lineLength}px)`, transform: "translate(-50%, -50%)" },
        };
    }
  };

  const styles = getLineStyle();

  return (
    <div
      className={`absolute ${className}`}
      style={{ ...position }}
    >
      <div className="relative">
        {/* The label box */}
        <button
          onClick={onClick}
          className="label-box whitespace-nowrap"
        >
          {text}
        </button>

        {/* Connector line */}
        <div
          className="absolute bg-black pointer-events-none"
          style={styles.line}
        />

        {/* Endpoint square */}
        <div
          className="endpoint pointer-events-none"
          style={styles.endpoint}
        />
      </div>
    </div>
  );
}
