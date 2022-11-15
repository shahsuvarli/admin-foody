import * as React from "react";
import { useTranslation } from "react-i18next";
import {
  ModalDiv,
  ErrorText,
  ImageText,
  AddData,
  BtnDiv,
  CancelBtn,
  CreateBtn,
  DataDiv,
  DataInput,
  DataLabel,
  ImageDiv,
  ImageIconSection,
  ImageInput,
  ImageSpan,
  ImageTitle,
  ImageUpload,
  DataTitle,
  ImageTitleText,
  ImagePreview,
  DataSelect,
  DataScroll,
} from "./AddModal.styled";
import UploadIcon from "../Image/icon/upload.svg";
import { restaurantCreateAPI } from "../api/restaurant";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { setRestaurant } from "../store/slice/restaurantSlice";
import { ToastContainer, toast } from "react-toastify";
import { categoryAPI } from "../api/category";

export const RestaurantModal = (props) => {
  const { t } = useTranslation();
  const [file, setFile] = React.useState();
  const [category, setCategory] = React.useState(null);

  React.useEffect(() => {
    getCategory();
  }, []);

  function getCategory() {
    categoryAPI.then((res) => {
      setCategory(res.data.category);
    });
  }

  const catlist = [...new Set(category?.map((cat) => cat.name))];

  function handleChange(e) {
    setFile(URL.createObjectURL(e.target.files[0]));
    formik.values.image = URL.createObjectURL(e.target.files[0]) || "";
    formik.errors.image = false;
    return formik.values.image;
  }

  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const formik = useFormik({
    initialValues: {
      image: "",
      restaurant_name: "",
      cuisine: "",
      delivery_price: "",
      delivery_min: "",
      address: "",
      category_name: "",
    },
    validate: (values) => {
      let errors = {};
      if (!values.image) {
        errors.image = t("form.image-required");
      }
      if (!values.restaurant_name) {
        errors.restaurant_name = t("form.name-required");
      }
      if (!values.cuisine) {
        errors.cusine = t("form.cuisine-required");
      }
      if (!values.delivery_price) {
        errors.delivery_price = t("form.delivery-price-required");
      }
      if (!values.delivery_min) {
        errors.delivery_min = t("form.delivery-min-required");
      }
      if (!values.address) {
        errors.address = t("form.address-required");
      }
      if (!values.category_name) {
        errors.category_name = t("form.category-required");
      }
      return errors;
    },
    onSubmit: (values) => {
      let id = state.restaurantSlice.data.slice(-1)[0].id + 1;
      let item = {
        id: id,
        image: values.image,
        restaurant_name: values.restaurant_name,
        cuisine: values.cuisine,
        delivery_price: values.delivery_price,
        delivery_min: values.delivery_min,
        address: values.address,
        category_name: values.category_name,
      };
      restaurantCreateAPI(item)
        .then((res) => {
          let newArray = [...state.restaurantSlice.data, item];
          dispatch(setRestaurant(newArray));
        })
        .catch(() => { });
      toast.success(t("form.added"), {
        autoClose: 1000,
        pauseOnHover: true,
      });
      props.closeFunc();
    },
  });

  return (
    <ModalDiv>
      <form onSubmit={formik.handleSubmit}>
        <ImageDiv>
          <ImageTitle>
            <ImageTitleText>{t("form.upload-img")}</ImageTitleText>
            {file ? <ImagePreview src={file} alt="preview" /> : ""}
          </ImageTitle>

          <ImageUpload>
            <ImageInput
              type="file"
              id="image"
              name="image"
              onChange={handleChange}
            />
            <ImageIconSection>
              <img src={UploadIcon} alt="upload" />
              <ImageSpan>{t("form.upload")}</ImageSpan>
            </ImageIconSection>
            {formik.errors.image && (
              <ImageText>{formik.errors.image}</ImageText>
            )}
          </ImageUpload>
        </ImageDiv>
        <DataDiv>
          <DataTitle>{t("form.form title")}</DataTitle>
          <AddData>
            <DataScroll>
              <DataLabel>{t("form.name")}</DataLabel>
              <DataInput
                placeholder="Soup"
                id="restaurant_name"
                name="restaurant_name"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.restaurant_name || ""}
              />
              {formik.errors.restaurant_name && <ErrorText>{formik.errors.restaurant_name}</ErrorText>}
              <DataLabel>{t("form.cuisine")}</DataLabel>
              <DataInput
                placeholder="Fast Food, Drink, Ice Cream, Sea Food"
                id="cuisine"
                name="cuisine"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.cuisine || ""}
              />
              {formik.errors.cuisine && (
                <ErrorText>{formik.errors.cuisine}</ErrorText>
              )}
              <DataLabel>{t("form.delivery-price")}</DataLabel>
              <DataInput
                placeholder={5}
                id="delivery_price"
                name="delivery_price"
                type="number"
                onChange={formik.handleChange}
                value={formik.values.delivery_price || ""}
              />
              {formik.errors.delivery_price && (
                <ErrorText>{formik.errors.delivery_price}</ErrorText>
              )}
              <DataLabel>{t("form.delivery-min")}</DataLabel>
              <DataInput
                placeholder={11}
                id="delivery_min"
                name="delivery_min"
                type="number"
                onChange={formik.handleChange}
                value={formik.values.delivery_min || ""}
              />
              {formik.errors.delivery_min && (
                <ErrorText>{formik.errors.delivery_min}</ErrorText>
              )}
              <DataLabel>{t("form.address")}</DataLabel>
              <DataInput
                placeholder="Nizami street 45 Baku Azerbaijan"
                id="address"
                name="address"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.address || ""}
              />
              {formik.errors.address && (
                <ErrorText>{formik.errors.address}</ErrorText>
              )}
              <DataLabel>{t("form.category")}</DataLabel>
              <DataSelect
                placeholder="Fast Food"
                id="category_name"
                name="category_name"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.category_name || ""}
              >
                {catlist.map((item) => {
                  return (
                    <option value={item} key={item}>
                      {item.toUpperCase()}
                    </option>
                  );
                })}
              </DataSelect>
              {formik.errors.category_name && (
                <ErrorText>{formik.errors.category_name}</ErrorText>
              )}
            </DataScroll>
          </AddData>
        </DataDiv>

        <BtnDiv>
          <CancelBtn type="button" onClick={() => props.closeFunc()}>
            {t("cancel").charAt(0).toUpperCase() + t("cancel").slice(1)}
          </CancelBtn>
          <CreateBtn type="submit">{t("form." + props.createname)}</CreateBtn>
        </BtnDiv>
      </form>
      <ToastContainer />
    </ModalDiv>
  );
};
