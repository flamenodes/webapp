import React from 'react';
interface FuzzyTextProps {
    children: React.ReactNode;
    fontSize?: number | string;
    fontWeight?: number | string;
    fontFamily?: string;
    color?: string;
    enableHover?: boolean;
    baseIntensity?: number;
    hoverIntensity?: number;
    fuzzRange?: number;
    fps?: number;
    direction?: 'horizontal' | 'vertical' | 'both';
    transitionDuration?: number;
    clickEffect?: boolean;
    glitchMode?: boolean;
    glitchInterval?: number;
    glitchDuration?: number;
    gradient?: string[] | null;
    letterSpacing?: number;
    className?: string;
}
declare const FuzzyText: ({ children, fontSize, fontWeight, fontFamily, color, enableHover, baseIntensity, hoverIntensity, fuzzRange, fps, direction, transitionDuration, clickEffect, glitchMode, glitchInterval, glitchDuration, gradient, letterSpacing, className, }: FuzzyTextProps) => React.JSX.Element;
export default FuzzyText;
//# sourceMappingURL=FuzzyText.d.ts.map