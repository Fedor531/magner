import patientsRequest from 'app/requests/patients';
import { tablePageController } from 'core/controllers';
import patientsFilters from 'configs/pages/patients/filters';
import patientsTable from 'configs/pages/patients/table';

/**
 * Since Patients extend the 'table' route preset, it must extend TableConfig.
 * Read more about table configuration in app/configs/table.ts
 */
export default tablePageController({
  title: 'Пациенты',

  request: patientsRequest,
  dataField: 'users',

  filters: patientsFilters,
  table: patientsTable,
});