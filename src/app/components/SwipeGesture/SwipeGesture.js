import { useState, useCallback } from 'react';

export const useSwipeGesture = ({ 
  onSwipeLeft, 
  onSwipeRight, 
  threshold = 50,
  lockVertical = true 
}) => {
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [touchStartY, setTouchStartY] = useState(null);
  const [isSwiping, setIsSwiping] = useState(false);

  const onTouchStart = useCallback((e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
    setTouchStartY(e.targetTouches[0].clientY);
    setIsSwiping(true);
  }, []);

  const onTouchMove = useCallback((e) => {
    if (!isSwiping) return;
    setTouchEnd(e.targetTouches[0].clientX);
    
    // If lockVertical is true, check for vertical scrolling
    if (lockVertical && touchStartY !== null) {
      const verticalDistance = Math.abs(e.targetTouches[0].clientY - touchStartY);
      const horizontalDistance = Math.abs(e.targetTouches[0].clientX - touchStart);
      
      // If scrolling more vertical than horizontal, cancel swipe
      if (verticalDistance > horizontalDistance) {
        setIsSwiping(false);
        return;
      }
    }
    
    // Prevent default to stop page scrolling during swipe
    e.preventDefault();
  }, [isSwiping, touchStart, touchStartY, lockVertical]);

  const onTouchEnd = useCallback(() => {
    if (!touchStart || !touchEnd || !isSwiping) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > threshold;
    const isRightSwipe = distance < -threshold;
    
    if (isLeftSwipe && onSwipeLeft) {
      onSwipeLeft();
    }
    
    if (isRightSwipe && onSwipeRight) {
      onSwipeRight();
    }
    
    setTouchStart(null);
    setTouchEnd(null);
    setTouchStartY(null);
    setIsSwiping(false);
  }, [touchStart, touchEnd, threshold, onSwipeLeft, onSwipeRight, isSwiping]);

  return {
    onTouchStart,
    onTouchMove,
    onTouchEnd,
    isSwiping
  };
};