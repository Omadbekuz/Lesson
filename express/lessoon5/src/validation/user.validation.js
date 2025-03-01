const validate = require("../utils/validate.helper");
const { v4: isUuid } = require('uuid');

class userValidation {
  // POST va PUT uchun validatsiya
  async createUser(req, res, next) {
    const schema = {
      type: "object",
      properties: {
        name: { type: "string", minLength: 3, maxLength: 32 },
        birthday: { type: "string", format: "date" },
        email: { type: "string", format: "email" },
      },
      required: ["name", "birthday", "email"],
      additionalProperties: false,
      errorMessage: {
        type: "Ma'lumot object bo'lishi kerak",
        required: {
          name: "Ismni kiritish shart",
          birthday: "Tug'ilgan kunini kiritish shart",
          email: "Emailni kiritish shart",
        },
        properties: {
          name: "Ism string va 3-32 belgidan ko'p bo'lmasligi kerak",
          birthday: "Tug'ilgan kun string va formati date bo'lishi kerak (YYYY-MM-DD)",
          email: "Email string bo'lishi kerak va formati email bo'lishi kerak",
        },
        additionalProperties: "Qo'shimcha ma'lumotlar kiritilmaydi",
      },
    };

    const result = validate(schema, req.body);
    if (result) return res.status(400).json({ message: result });
    next();
  }

  // UUID ni tekshirish funksiyasi
  checkUuid(req, res, next) {
    const { id } = req.params;
    if (!isUuid(id)) {
      return res.status(400).json({ message: "Noto'g'ri UUID" });
    }
    next();
  }
}

module.exports = new userValidation();
