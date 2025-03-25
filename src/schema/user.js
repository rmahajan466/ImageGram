import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minLength: 5,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        minLength: 5,
        validate: {
            validator: function (emailValue) {
                return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(emailValue);
            },
            message: 'Email is not valid',
        },
    },
    password: {
        type: String,
        required: true,
        minLength: 6,
        validate: {
            validator: function (passwordValue) {
                return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/.test(passwordValue);
            },
            message: 'Password must be at least 6 characters long, contain at least one uppercase letter, one lowercase letter, and one number',
        }
    },
}, {
    timestamps: true,
});

const user = mongoose.model("User", userSchema); // model name is User and collection name is users

export default user;