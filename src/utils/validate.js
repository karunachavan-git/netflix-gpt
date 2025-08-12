export const checkValidData = (email, password) => {
    const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(password);;
    if (!isEmailValid) return "Invalid email format";
    if (!isPasswordValid) return "Password must minimum eight characters, at least one uppercase letter, one lowercase letter and one number";
    return null;
}
