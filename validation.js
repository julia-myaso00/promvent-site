// Функции валидации формы обратной связи

function validateEmail(email) {
    if (!email) return false;
    return email.includes('@') && email.includes('.');
}

function validatePhone(phone) {
    if (!phone) return false;
    const digits = phone.replace(/\D/g, '');
    return digits.length >= 10;
}

function validateForm(formData) {
    const errors = {};
    
    if (!validateEmail(formData.email)) {
        errors.email = 'Введите корректный email';
    }
    
    if (!validatePhone(formData.phone)) {
        errors.phone = 'Введите корректный номер телефона';
    }
    
    return {
        isValid: Object.keys(errors).length === 0,
        errors: errors
    };
}

export { validateEmail, validatePhone, validateForm };
