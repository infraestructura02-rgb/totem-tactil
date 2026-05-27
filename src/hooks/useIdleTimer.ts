/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useRef, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export function useIdleTimer(timeoutMs: number = 60000, warningMs: number = 15000) {
  const [isWarningActive, setIsWarningActive] = useState(false);
  const [secondsRemaining, setSecondsRemaining] = useState(Math.round(warningMs / 1000));
  const navigate = useNavigate();
  const location = useLocation();

  const activityTimerRef = useRef<NodeJS.Timeout | null>(null);
  const warningIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const remainingRef = useRef(Math.round(warningMs / 1000));

  // Reset function called on any user interaction
  const resetTimer = () => {
    // Clear any previous timers
    if (activityTimerRef.current) {
      clearTimeout(activityTimerRef.current);
    }
    if (warningIntervalRef.current) {
      clearInterval(warningIntervalRef.current);
    }

    setIsWarningActive(false);
    const initialWarningSeconds = Math.round(warningMs / 1000);
    setSecondsRemaining(initialWarningSeconds);
    remainingRef.current = initialWarningSeconds;

    // Do NOT start timers if we are already on the HOME page (root '/')
    // It's the landing, which is already the idle state, so we don't need a warning popup there!
    if (location.pathname === "/") {
      return;
    }

    // Set timer for when the warning should start
    // Standard timeout (60s) - Warning period (15s) = 45 seconds of silence before popup
    const idlePeriodBeforeWarning = timeoutMs - warningMs;

    activityTimerRef.current = setTimeout(() => {
      // User has been idle for (timeoutMs - warningMs)
      setIsWarningActive(true);
      
      // Start counting down every second
      warningIntervalRef.current = setInterval(() => {
        remainingRef.current -= 1;
        setSecondsRemaining(remainingRef.current);

        if (remainingRef.current <= 0) {
          // Time is up! Go to Home
          if (warningIntervalRef.current) {
            clearInterval(warningIntervalRef.current);
          }
          setIsWarningActive(false);
          navigate("/");
        }
      }, 1000);
    }, idlePeriodBeforeWarning);
  };

  useEffect(() => {
    // Define interactive events
    const events = [
      "mousedown",
      "mousemove",
      "keypress",
      "scroll",
      "touchstart",
      "touchmove",
      "click"
    ];

    // Bind event listeners
    const handleActivity = () => {
      // If the warning dialog is open, touching the screen resets/closes it
      resetTimer();
    };

    events.forEach((event) => {
      window.addEventListener(event, handleActivity, { passive: true });
    });

    // Initialize timer
    resetTimer();

    // Cleanup on unmount or path change
    return () => {
      events.forEach((event) => {
        window.removeEventListener(event, handleActivity);
      });
      if (activityTimerRef.current) {
        clearTimeout(activityTimerRef.current);
      }
      if (warningIntervalRef.current) {
        clearInterval(warningIntervalRef.current);
      }
    };
  }, [location.pathname]); // Re-run state machine whenever page routes change

  const keepExploring = () => {
    resetTimer();
  };

  return {
    isWarningActive,
    secondsRemaining,
    keepExploring
  };
}
