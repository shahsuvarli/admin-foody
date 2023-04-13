import "react-toastify/dist/ReactToastify.css";
import loginImg from "../../Image/components/login.jpg";
import logoImg from "../../Image/logo/logo.svg";
import az from "../../Image/flag/az.svg";
import en from "../../Image/flag/en.svg";
import fr from "../../Image/flag/fr.svg";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useTranslation } from "react-i18next";
import { useFormik } from "formik";
import { useSelector, useDispatch } from "react-redux";
import { DropdownItem, DropdownToggle } from "reactstrap";
import { setLogin } from "../../store/slice/loginSlice";
import { useNavigate } from "react-router-dom";
import {
  LoginForm,
  LoginImage,
  LogoDiv,
  LoginDiv,
  DropdownLang,
  DropdownMenuLang,
  WelcomeText,
  SignInForm,
  SignInput,
  SignBtn,
  ErrorText,
  LoginSection,
} from "./LoginContainer.styled.js";

const lngs = {
  az: { nativeName: "Az" },
  en: { nativeName: "En" },
  fr: { nativeName: "Fr" },
};

const flags = {
  az,
  en,
  fr,
};

const LoginContainer = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen((prevState) => !prevState);
  const state = useSelector((state) => state);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      userName: "",
      password: "",
    },
    validate: (values) => {
      let errors = {};
      if (!values.userName) {
        errors.userName = t("nameRequired");
      }
      if (!values.password) {
        errors.password = t("passwordRequired");
      }
      if (values.password.length < 8) {
        errors.password = t("passwordLength");
      }
      return errors;
    },
    onSubmit: (values) => {
      if (values.userName !== state.loginSlice.user.userName) {
        toast.error(t("nameError"), {
          autoClose: 2000,
          pauseOnHover: true,
        });
      } else if (values.password !== state.loginSlice.user.password) {
        toast.error(t("passwordError"), {
          autoClose: 2000,
          pauseOnHover: true,
        });
      } else {
        localStorage.setItem("isLogin", true);
        dispatch(setLogin(true));
        navigate("/panel/dashboard");
      }
    },
  });
  return (
    <LoginSection>
      <LogoDiv>
        <img src={logoImg} alt="logo" />
      </LogoDiv>
      <LoginDiv>
        <LoginForm>
          <WelcomeText>{t("welcome")}</WelcomeText>
          <SignInForm onSubmit={formik.handleSubmit}>
            <SignInput
              placeholder={t("username")}
              id="userName"
              name="userName"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.userName}
            />
            <i>username: admin</i>
            {formik.errors.userName && (
              <ErrorText>{formik.errors.userName}</ErrorText>
            )}
            <SignInput
              placeholder={t("password")}
              id="password"
              name="password"
              type="password"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
            <i>password: 12345678</i>
            {formik.errors.password && (
              <ErrorText>{formik.errors.password}</ErrorText>
            )}
            <SignBtn type="submit">{t("sign-in")}</SignBtn>
          </SignInForm>
        </LoginForm>
        <LoginImage>
          <img src={loginImg} alt="" />
          <DropdownLang isOpen={isOpen} toggle={toggle}>
            <DropdownToggle>
              <img
                src={flags[i18n.resolvedLanguage]}
                alt={flags[i18n.resolvedLanguage]}
              />
            </DropdownToggle>
            <DropdownMenuLang>
              {Object.keys(lngs).map((lng) => (
                <DropdownItem
                  type="submit"
                  className={i18n.resolvedLanguage === lng ? "d-none" : ""}
                  key={lng}
                  onClick={() => i18n.changeLanguage(lng)}
                >
                  <img src={flags[lng]} alt={flags[lng]} />
                </DropdownItem>
              ))}
            </DropdownMenuLang>
          </DropdownLang>
        </LoginImage>
      </LoginDiv>
      <ToastContainer />
    </LoginSection>
  );
};

export default LoginContainer;
