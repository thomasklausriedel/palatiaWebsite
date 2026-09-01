import { useState, type ReactNode, useId } from "react";
import "./Tooltip.scss";

interface TooltipProps {
  text: string;
  children: ReactNode;
  className?: string;
}

export const Tooltip = ({ text, children, className = "" }: TooltipProps) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const tooltipId = useId();

  return (
    <div
      className={`tooltip-container ${className}`.trim()}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      onFocus={() => setIsVisible(true)}
      onBlur={() => setIsVisible(false)}
      tabIndex={0}
      aria-describedby={isVisible ? tooltipId : undefined}
    >
      {children}
      {isVisible && (
        <div id={tooltipId} className="tooltip-box" role="tooltip">
          {text}
        </div>
      )}
    </div>
  );
};