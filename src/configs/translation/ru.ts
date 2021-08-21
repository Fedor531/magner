import type { CustomTranslationSchema } from 'configs/translation/en';

const ruCustom: CustomTranslationSchema = {
  pages: {
    home: 'Домашняя',
    patient: 'Пациент',
    patients: 'Пациенты',
    dictionaries: 'Справочники',
    specialization: 'Специализация',
    specializations: 'Специализации',
    consultation_types: 'Типы консультаций',
    form_test: 'Тест формы',
    form_layout: 'Пример разметки',
  },
  login: {
    title: 'Вход',
    submitButton: 'Войти',
    fields: {
      email_placeholder: 'Е-мейл',
      password_placeholder: 'Пароль',
    },
  },
  patients: {
    filters: {
      create_new: 'Создать',
      submit: 'Подтвердить',
      fullname_placeholder: 'Полное имя',
      sort_placeholder: 'Пример селекта',
      sort_alphabetical: 'В алфавитном порядке по имени',
      sort_alphabetical_reverse: 'В обратном алфавитном порядке по имени',
    },
    table: {
      not_found: 'Пациенты не найдены',
      id: 'ID',
      fullname: 'Полное имя',
      gender: 'Пол',
      email: 'Е-мейл',
      address: 'Адрес',
      apartments: 'Квартира',
      latitude: 'Широта',
      longitude: 'Долгота',
    },
  },
  patient: {
    title: 'Пациент',
    tabs: {
      patient: 'Пациент',
      specializations: 'Специализации',
    },
    form: {
      submit_button: 'Сохранить',
      lastname_label: 'Фамилия',
      lastname_placeholder: 'Иванов',
      firstname_label: 'Имя',
      firstname_placeholder: 'Иван',
      patronymic_label: 'Отчество',
      patronymic_placeholder: 'Иванович',
      email_label: 'Е-мейл',
      phone_number_label: 'Номер телефона',
      phone_number_placeholder: '+7-910-000-00-00',
      birthday_label: 'Дата рождения',
      birthday_placeholder: '1984-04-18',
      gender_label: 'Пол',
      gender_placeholder: 'Выбрать',
      gender_male: 'Мужской',
      gender_female: 'Женский',
      city_label: 'Город',
      city_placeholder: 'Москва',
      city_loading_text: 'Загрузка',
      city_no_data_text: 'Город не найден',
      address_label: 'Адрес',
      address_placeholder: 'Ленина д.4',
      apartments_label: 'Квартира',
      apartments_placeholder: 'кв. 4',
      photo_label: 'Фотография',
    },
  },
  form_test: {
    title: 'Тест формы',
    submit_text: 'Сохранить',
    form: {
      example_label: 'Пример',
      layout_text: 'Делайте со структурой что хотите!',
      custom_layout: 'Это полностью кастомный блок!',
      phone_label: 'Пример текстового поля с маской и валидацией',
      textarea_label: 'Пример расширяемого текстового поля',
      textarea_placeholder: 'Здесь мог быть ваш текст',
      city_label: 'Пример селекта с загружаемыми данными',
      city_placeholder: 'Москва',
      city_loading_text: 'Загрузка',
      city_no_data_text: 'Город не найден',
      city_moscow: 'Москва',
      city_berlin: 'Берлин',
      country_label: 'Страна (пример взаимодействия полей формы)',
      country_placeholder: 'Выбрать',
      country_russia: 'Россия',
      country_norussia: 'Не россия',
      country_hint: `Когда выберете страну, появится поле города<br/>
        с авто-заданными опциями (города конкретной страны)`,
      city_plain_label: 'Город',
      city_plain_placeholder: 'Выбрать',
      radio_label: 'Группа радио',
      radio_button_label: 'Группа радио кнопок',
      checkbox_label: 'Группа чекбоксов',
      checkbox_button_label: 'Пример группы чекбокс-кнопок. Разрешены только 3 опции',
      switch_label: 'Вы активны?',
      option_teen: 'Подросток',
      option_young: 'Молодой',
      option_old: 'Старый',
      option_any: 'Любой',
      option_adult: 'Взрослый',
      option_child: 'Ребенок',
      dropzone_label: 'Пример дропзоны',
      editor: {
        placeholder: 'Начните писать историю',
        button_text: 'Открыть модальное окно с редактором',
        dialog_text: 'Редактор текста',
      },
      dates: {
        title: 'Date Pickers',
        label1: 'День',
        label2: 'Неделя',
        label3: 'Месяц',
        label4: 'Год',
        label5: 'Дата и время',
        label6: 'Промежуток дат',
        label7: 'Промежуток дат и времени',
        label8: 'Промежуток месяцев',
      },
      collection: {
        title: 'Добавить пользователя',
        name_placeholder: 'Имя',
        surname_placeholder: 'Фамилия',
      },
      dialog: {
        title: 'Вложенная форма',
        city_label: 'Название города',
        city_placeholder: 'Москва',
        timezone: 'Временная зона',
        timezone_placeholder: 'Europe/Moscow',
      },
    },
  },
  home: {
    hello: 'Привет из универсальной админки!',
    custom: 'Эта страница полностью кастомная. И вы можете создать такую же!',
    explore: 'К таблицам',
  },
};

export default ruCustom;