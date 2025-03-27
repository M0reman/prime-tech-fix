
import React, { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

interface AnimatedTransitionProps {
  children: ReactNode;
}

const AnimatedTransition: React.FC<AnimatedTransitionProps> = ({ children }) => {
  const location = useLocation();
  
  return (
    <TransitionGroup className="w-full">
      <CSSTransition 
        key={location.pathname} 
        timeout={300} 
        classNames="page-transition"
      >
        <div className="w-full">
          {children}
        </div>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default AnimatedTransition;
