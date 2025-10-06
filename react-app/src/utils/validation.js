export const required = (v) => (v ? undefined : 'Required');
export const email = (v) => (/^\S+@\S+\.\S+$/.test(v) ? undefined : 'Invalid email');
export const minLength = (min) => (v) => (v.length >= min ? undefined : `Must be at least ${min} characters`);
export const maxLength = (max) => (v) => (v.length <= max ? undefined : `Must be at most ${max} characters`);

export const composeValidators = (...validators) => (value) => validators.reduce((error, validator) => error || validator(value), undefined);

export const validateTask = (task) => {
    const errors = {};
    if (!task.customerName) errors.customerName = 'Required';
    if (!task.serviceType) errors.serviceType = 'Required';
    if (!task.office) errors.office = 'Required';
    if (!task.advance) errors.advance = 'Required';
    return errors;
};

export const validateUser = (user) => {
    const errors = {};
    if (!user.name) errors.name = 'Required';
    if (!user.email) errors.email = 'Required';
    if (!user.password) errors.password = 'Required';
    return errors;
};

export const validateLogin = (user) => {
    const errors = {};
    if (!user.email) errors.email = 'Required';
    if (!user.password) errors.password = 'Required';
    return errors;
};

export const validateUpdateUser = (user) => {
    const errors = {};
    if (!user.name) errors.name = 'Required';
    if (!user.email) errors.email = 'Required';
    return errors;
};

export const validateUpdatePassword = (user) => {
    const errors = {};
    if (!user.password) errors.password = 'Required';
    return errors;
};