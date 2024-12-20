/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import { default as toaster, ToasterContainer } from './toaster';

export { toaster, ToasterContainer };
export { default as Toast } from './toast';
// Constants
export { KIND, PLACEMENT, TYPE } from './constants';
// Styled elements
export {
  Root as StyledRoot,
  Body as StyledBody,
  CloseIconSvg as StyledCloseIcon,
} from './styled-components';
export * from './types';
export type { ToastLocale } from './locale';
/** @deprecated To be removed in future versions.*/
export type IToaster = typeof toaster;
