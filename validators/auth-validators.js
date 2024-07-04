const { z } = require("zod");

const signupSchema = z.object({
  username: z
    .string({ required_error: "Name is Required" })
    .trim()
    .min(3, { message: "name must be at least 3 char." })
    .max(255, { message: "name must not be more than 255 char." }),
  email: z
    .string({ required_error: "email is Required" })
    .trim()
    .email({ message: "Invalid email !" })
    .min(3, { message: "email must be at least 3 char." })
    .max(255, { message: "email must not be more than 255 char." }),
  phone: z
    .string({ required_error: "phone is Required" })
    .trim()
    .min(10, { message: "phone must be at least 10 char." })
    .max(20, { message: "phone must not be more than 20 char." }),
  password: z
    .string({ required_error: "password is Required" })
    .min(7, { message: "password must be at least 3 char." })
    .max(1024, { message: "password must not be more than 1024 char." }),
});

module.exports = signupSchema;
