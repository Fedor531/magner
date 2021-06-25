import type { SupportedValidators } from 'core/utils/validators';
import type { SupportedDataTypes } from 'core/utils/form';

export type SupportedComponentTypes =
  'input'
  | 'textarea'
  | 'checkbox'
  | 'radio'
  | 'select'
  | 'dropzone';

export interface BaseComponent {}

export interface BaseValidation {
  /** Choose any supported validators to speed up the validation process */
  type: SupportedValidators,

  /** An event that triggers the validation to start */
  trigger: 'blur'|'change'|'input',
}

export interface BaseField {
  /** Choose any supported type of the field */
  type: SupportedComponentTypes,

  /** Unique name identifier of the field. It is required to be the same one incoming or outcoming to the backend */
  name: string,

  /** A label to be displayed next to the field component */
  label?: string,
  labelWidth?: string,

  /** Any attributes passed to the base HTML-tag */
  component: BaseComponent,

  /** How and when to validate the field. Use 'null' if no validation needed */
  validation: BaseValidation|null,

  /** Needed to setup initial values for the fields. Default is 'string' that returns and empty string '' */
  dataType?: SupportedDataTypes,

  /** Is the field required.
   * !!! Doesn't work as expected, so use validation with type 'empty' on a field */
  required?: boolean,
}
