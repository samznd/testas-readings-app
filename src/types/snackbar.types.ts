import { ToastIcon } from 'react-toastify';

  type GSnackBar = 'info' | 'error' | 'warn' | 'success' | 'message';

export interface SnackBarEvent {
    delay?: number;
    message: string;
    type?: GSnackBar;
    icon?: undefined | ToastIcon;
    position?:
      | 'top-left'
      | 'top-right'
      | 'top-center'
      | 'bottom-right'
      | 'bottom-center'
      | 'bottom-left';
  }