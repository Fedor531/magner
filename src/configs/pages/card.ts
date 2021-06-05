import loginRequest from 'app/requests/login';
import type { CardConfig } from '../../core/types/configs';

/**
 * Configuration for the 'card' route preset.
 */
const cardConfig: CardConfig = {
  title: 'Карточка',
  request: loginRequest,
};

export default cardConfig;
