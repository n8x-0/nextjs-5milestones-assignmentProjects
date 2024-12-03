export const validatePassword = (password: string): void => {
    if (!password) {
        throw new Error("Password is required.");
    }

    if (password.length < 8) {
        throw new Error("Password must be at least 8 characters long.");
    }

    if (!/[A-Z]/.test(password)) {
        throw new Error("Password must contain at least one uppercase letter.");
    }

    if (!/[a-z]/.test(password)) {
        throw new Error("Password must contain at least one lowercase letter.");
    }

    // if (!/[0-9]/.test(password)) {
    //     throw new Error("Password must contain at least one number.");
    // }

    // if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    //     throw new Error("Password must contain at least one special character.");
    // }
};

export const validateEmail = (email: string): void => {
    if (!email) {
        throw new Error("Email is required.");
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        throw new Error("Invalid email format.");
    }
};
