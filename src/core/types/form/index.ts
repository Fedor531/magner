import type { InputField } from './input';
import type { TextareaField } from './textarea';
import type { CheckboxField } from './checkbox';
import type { RadioField } from './radio';
import type { SelectField } from './select';
import type { ButtonComponent } from './button';
import type { DropzoneField } from './dropzone';

/**
 * The type of a field used in the forms. Defined by its required 'type' which
 * can be literally anything: from text input to color picker.
 */
export type GenericComponent =
  InputField
  | TextareaField
  | CheckboxField
  | RadioField
  | SelectField
  | DropzoneField;

export interface GenericForm {
  fields: GenericComponent[],
  submit: ButtonComponent|null,

  size?: 'medium'|'small'|'mini',

  /**
   * Reacting to which event the form will trigger 'submit' event.
   * Case 'submit' - only on Submit button or Enter key press
   * Case 'input' – on any child component's change event
   * */
  submitEvent?: 'submit'|'input',
}
