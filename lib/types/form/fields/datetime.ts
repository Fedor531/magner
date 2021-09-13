import type { BaseField, BaseProps } from '../base';
import type { TranslateData } from '../../../utils/core/translate';

export interface DateTimeProps extends BaseProps {
  /** Type of the DateTime picker. Please, refer to the https://element-plus.org/#/en-US/component/datetime-picker */
  type: 'year' | 'month' | 'date' | 'dates' | 'datetime' | 'week' | 'datetimerange' | 'daterange' | 'monthrange',

  /** Format of the displayed value in the input box */
  format?: string,

  /** Placeholder in non-range mode */
  placeholder?: TranslateData,
  /** Placeholder for the start date in range mode */
  startPlaceholder?: TranslateData,
  /** Placeholder for the end date in range mode */
  endPlaceholder?: TranslateData,

  /** Whether the input is editable. Default is 'true' */
  editable?: boolean,

  /** Whether to pick time using arrow buttons */
  timeArrowControl?: boolean,

  /** */
  popperClass?: string,
  /** Set custom className for the calendar cell */
  cellClassName?: (arg: Date) => string,

  /** Range separator. Default is '-' */
  rangeSeparator?: string,

  /** Optional, default date of the calendar */
  defaultValue?: Date,
  /** Default time value after picking a date. If non-range, just Date. If range, array of two Dates */
  defaultTime?: Date | [Date, Date],

  /** Allow both panels of the picker select month and year independently of each other */
  unlinkPanels?: boolean,

  /** Whether to show clear button */
  clearable?: boolean,
}

export interface DateTimeField extends BaseField {
  type: 'datetime',
  dataType: 'date' | 'array',
  props: DateTimeProps,
}
