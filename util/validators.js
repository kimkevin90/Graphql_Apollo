module.exports.validateRegisterInput = (
  username,
  email,
  password,
  confirmPassword
) => {
  const errors = {};
  if (username.trim() === "") {
    errors.username = "이름을 입력해주세요";
  }
  if (email.trim() === "") {
    errors.email = "이메일을 입력해주세요";
  } else {
    const regEx = /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/;
    if (!email.match(regEx)) {
      errors.email = "유효하지 않은 이메일입니다.";
    }
  }
  if (password === "") {
    errors.password = "패스워드를 입력해주세요.";
  } else if (password !== confirmPassword) {
    errors.confirmPassword = "패스워드가 일치하지 않습니다.";
  }

  return {
    errors,
    valid: Object.keys(errors).length < 1,
  };
};

module.exports.validateLoginInput = (username, password) => {
  const errors = {};
  if (username.trim() === "") {
    errors.username = "이름을 입력해주세요.";
  }
  if (password.trim() === "") {
    errors.password = "패스워드를 입력해주세요.";
  }

  return {
    errors,
    valid: Object.keys(errors).length < 1,
  };
};
