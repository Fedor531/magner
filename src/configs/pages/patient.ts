import type { CardConfig } from 'core/types/configs';
import patientRequest from 'app/requests/patient';

/**
 * Real-life example of extending the CardConfig route in case of the patient card
 */
const patientConfig: CardConfig = {
  title: 'Пациент',
  request: patientRequest,
  submit: {
    text: 'Сохранить',
  },
  fields: [
    {
      type: 'input',
      name: 'surname',
      label: 'Фамилия',
      component: {
        type: 'text',
        placeholder: 'Иванов',
      },
      validation: {
        type: 'empty',
        trigger: 'blur',
      },
    },
    {
      type: 'input',
      name: 'firstname',
      label: 'Имя',
      component: {
        type: 'text',
        placeholder: 'Иван',
      },
      validation: {
        type: 'empty',
        trigger: 'blur',
      },
    },
    {
      type: 'input',
      name: 'patronymic',
      label: 'Отчество',
      component: {
        type: 'text',
        placeholder: 'Иванович',
      },
      validation: {
        type: 'empty',
        trigger: 'blur',
      },
    },
    {
      type: 'input',
      name: 'email',
      label: 'Е-мейл',
      validation: {
        type: 'email',
        trigger: 'blur',
      },
      component: {
        type: 'email',
        placeholder: 'ivanivanov@gmail.com',
        icon: 'mail',
      },
    },
    {
      type: 'input',
      name: 'phone',
      label: 'Номер телефона',
      validation: {
        type: 'empty',
        trigger: 'blur',
      },
      component: {
        type: 'tel',
        placeholder: '+7-915-820-14-02',
      },
    },
    {
      type: 'input',
      name: 'birthDate',
      label: 'Дата рождения',
      component: {
        type: 'text',
        placeholder: '1984-12-21',
      },
      validation: {
        type: 'empty',
        trigger: 'blur',
      },
    },
    {
      type: 'select',
      name: 'gender',
      label: 'Пол',
      options: [
        {
          value: 'female',
          label: 'Женский',
        },
        {
          value: 'male',
          label: 'Мужской',
        },
      ],
      validation: null,
      component: {
        placeholder: 'Выбрать',
      },
    },
    {
      type: 'input',
      name: 'address',
      label: 'Адрес',
      component: {
        type: 'text',
        placeholder: 'ул. Южная, д. 14',
      },
      validation: {
        type: 'empty',
        trigger: 'blur',
      },
    },
    {
      type: 'input',
      name: 'apartment',
      label: 'Квартира',
      component: {
        type: 'text',
        placeholder: 'кв. 4',
      },
      validation: {
        type: 'empty',
        trigger: 'blur',
      },
    },
    {
      type: 'input',
      name: 'lat',
      label: 'Широта',
      component: {
        type: 'number',
        placeholder: '55.7558',
      },
      validation: {
        type: 'empty',
        trigger: 'blur',
      },
    },
    {
      type: 'input',
      name: 'long',
      label: 'Долгота',
      component: {
        type: 'number',
        placeholder: '37.6173',
      },
      validation: {
        type: 'empty',
        trigger: 'blur',
      },
    },
    {
      type: 'input',
      name: 'photo',
      label: 'Фотография',
      component: {
        type: 'text',
        placeholder: 'Заменить на компонент дропзоны!',
      },
      validation: null,
    },
  ],
};

export default patientConfig;
