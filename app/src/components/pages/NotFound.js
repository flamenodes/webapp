import React from 'react';
import FuzzyText from '../FuzzyText';
import { Button } from '../ui/button';
import { useNavigate } from '@tanstack/react-router';
const NotFound = () => {
    const handleGoBack = () => {
        window.history.back();
    };
    const navigate = useNavigate();
    return (<div className="h-screen w-screen flex justify-center items-center flex-col gap-6">
      <FuzzyText fontFamily="Oi" baseIntensity={0.2} hoverIntensity={0.3} enableHover>
        404
      </FuzzyText>
      <FuzzyText fontSize={60} baseIntensity={0.2} hoverIntensity={0.3} enableHover>
        Page Not Found
      </FuzzyText>
      <div className="space-x-6">
        <Button onClick={handleGoBack} size="great">
          Go Back
        </Button>
        <Button onClick={() => navigate({ to: '/' })} className="bg-secondary hover:bg-secondary/50 text-secondary-foreground" size="great">
          Home Page
        </Button>
      </div>
    </div>);
};
export default NotFound;
//# sourceMappingURL=NotFound.js.map