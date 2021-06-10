import envs from '../../envs';

/**
 * Manipulate with the stringified object placed in the LocalStorage for
 * persisting the data from the admin panel
 */
const getLsObject = (): Record<string, any> => {
  if (!envs.LOCAL_STORAGE_KEY) {
    throw new Error(`
    Please, set the LOCAL_STORAGE_KEY in the "envs.ts" file! 
    It is required for saving persistent data.
    `);
  }

  const ls = localStorage.getItem(envs.LOCAL_STORAGE_KEY);
  if (ls) {
    try {
      return JSON.parse(ls);
    } catch (_) {
      return {};
    }
  } else {
    localStorage.setItem(envs.LOCAL_STORAGE_KEY, JSON.stringify({}));
    return {};
  }
};

/** Simple functions for manipulating localStorage object */
const lstorage = {
  read: (field: string): any => getLsObject()[field],

  put: (field: string, value: any) => {
    const ls = getLsObject();
    ls[field] = value;
    localStorage.setItem(envs.LOCAL_STORAGE_KEY, JSON.stringify(ls));
  },

  delete: (field: string) => {
    const ls = getLsObject();
    delete ls[field];
    localStorage.setItem(envs.LOCAL_STORAGE_KEY, JSON.stringify(ls));
  },
};

export default lstorage;