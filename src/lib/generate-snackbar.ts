import { SNACKBAR_EVENT_NAME } from "@/shared/constants/snackbar";
import { SnackBarEvent } from "@/types/snackbar.types";

export function generateSnackbar(options: SnackBarEvent) {
  if (typeof CustomEvent === 'undefined') return;
  const event = new CustomEvent(SNACKBAR_EVENT_NAME, {
    detail: options
  });
  window.dispatchEvent(event);
}