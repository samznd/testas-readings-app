import { useEffect } from 'react';
import { ToastContainer, toast, Slide, Zoom, Flip, Bounce } from 'react-toastify';

import {
  SNACKBAR_TYPES,
  SNACKBAR_POSITIONS,
  SNACKBAR_EVENT_NAME
} from '@/shared/constants/snackbar';

import 'react-toastify/dist/ReactToastify.css';
import { SnackBarEvent } from '@/types/snackbar.types';

const TOAST_COLOR_TYPES: {
  DARK: 'dark';
  LIGHT: 'light';
  COLORED: 'colored';
} = {
  DARK: 'dark',
  COLORED: 'colored',
  LIGHT: 'light'
};

const TOAST_TRANSITION_TYPES = {
  ZOOM: Zoom,
  FLIP: Flip,
  SLIDE: Slide,
  BOUNCE: Bounce
};

interface SnackBarDetail {
  detail: SnackBarEvent;
}

export const SnackbarWrapper = () => {
  const createSnackBar = (event: SnackBarDetail) => {
    const {
      icon,
      message,
      delay = 3000,
      type = SNACKBAR_TYPES.MESSAGE,
      position = SNACKBAR_POSITIONS.BOTTOM_CENTER
    } = event.detail;
    const toastId = type + message;

    if (type === SNACKBAR_TYPES.MESSAGE) {
      toast(message, {
        icon,
        toastId,
        position,
        autoClose: delay,
        theme: TOAST_COLOR_TYPES.DARK,
        transition: TOAST_TRANSITION_TYPES.SLIDE
      });
      return;
    }

    toast[type]?.(message, {
      icon,
      toastId,
      position,
      autoClose: delay,
      theme: TOAST_COLOR_TYPES.COLORED,
      transition: TOAST_TRANSITION_TYPES.SLIDE
    });
  };

  useEffect(() => {
    // @ts-ignore: Unreachable code error
    window.addEventListener(SNACKBAR_EVENT_NAME, createSnackBar);
    return () => {
      // @ts-ignore: Unreachable code error
      window.removeEventListener(SNACKBAR_EVENT_NAME, createSnackBar);
    };
  }, []);

  return (
    <ToastContainer
      limit={4}
      draggable
      closeOnClick
      pauseOnHover
      hideProgressBar
      pauseOnFocusLoss={false}
    />
  );
}