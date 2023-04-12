///checked

export const isRequired = (val) => ({
  hasPassed: val,
  message: "Будь ласка введіть дані",
});

export const charLimit = (limit) => (val) => ({
  hasPassed: val.length <= limit,
  message: "Ви перевищили ліміт",
});

export const emailValidation = (val) => ({
  hasPassed: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(val),
  message: "Невірна пошта",
});

export const passwordValidation = (val) => ({
  hasPassed: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(val),
  message: "Minimum eight characters, at least one letter and one number",
});
