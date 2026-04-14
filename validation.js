// Функции валидации формы обратной связи

function validateEmail(email, isRequired = true) {
    if (!email) return !isRequired;
    return email.includes('@') && email.includes('.');
}

function validatePhone(phone, isRequired = true) {
    if (!phone) return !isRequired;
    const digits = phone.replace(/\D/g, '');
    return digits.length >= 10;
}

function validateForm(formData) {
    const errors = {};
    
    if (!validateEmail(formData.email, true)) {
        errors.email = 'Введите корректный email';
    }
    
    if (!validatePhone(formData.phone, true)) {
        errors.phone = 'Введите корректный номер телефона';
    }
    
    return {
        isValid: Object.keys(errors).length === 0,
        errors: errors
    };
}

export { validateEmail, validatePhone, validateForm };
