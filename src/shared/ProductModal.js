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
import { productsCreateAPI } from "../api/products";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../store/slice/productsSlice";
import { ToastContainer, toast } from "react-toastify";
import { restaurantAPI } from "../api/restaurant";

export const ProductModal = (props) => {
  const { t } = useTranslation();
  const [file, setFile] = React.useState();

  const [restaurants, setRestaurants] = React.useState(null);

  React.useEffect(() => {
    getRestaurant();
  }, []);

  const getRestaurant = () => {
    restaurantAPI
      .then((res) => {
        setRestaurants(res.data.restaurant);
      })
      .catch((err) => { });
  };

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
      name: "",
      description: "",
      price: "",
      restaurants: "",
    },
    validate: (values) => {
      let errors = {};
      if (!values.image) {
        errors.image = t("form.image-required");
      }
      if (!values.name) {
        errors.name = t("form.name-required");
      }
      if (!values.description) {
        errors.description = t("form.description-required");
      }
      if (!values.price) {
        errors.price = t("form.price-required");
      }
      if (!values.restaurants) {
        errors.restaurants = t("form.restaurants-required");
      }
      return errors;
    },
    onSubmit: (values) => {
      let id = state.productsSlice.data.slice(-1)[0].id + 1;

      let item = {
        id: id,
        image: values.image,
        product_name: values.name,
        description: values.description,
        product_price: values.price,
        restaurant_name: values.restaurants,
      };
      productsCreateAPI(item)
        .then((res) => {
          let newArray = [...state.productsSlice.data, item];
          dispatch(setProducts(newArray));
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
          <DataTitle>{t("form.product title")}</DataTitle>
          <AddData>
            <DataScroll>
              <DataLabel>{t("form.name")}</DataLabel>
              <DataInput
                placeholder="Soup"
                id="name"
                name="name"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.name || ""}
              />
              {formik.errors.name && <ErrorText>{formik.errors.name}</ErrorText>}
              <DataLabel>{t("form.description")}</DataLabel>
              <DataInput
                placeholder="description"
                id="description"
                name="description"
                type="textarea"
                onChange={formik.handleChange}
                value={formik.values.description || ""}
              />
              {formik.errors.description && (
                <ErrorText>{formik.errors.description}</ErrorText>
              )}
              <DataLabel>{t("form.price")}</DataLabel>
              <DataInput
                placeholder="price"
                id="price"
                name="price"
                type="number"
                onChange={formik.handleChange}
                value={formik.values.price || ""}
              />
              {formik.errors.price && (
                <ErrorText>{formik.errors.price}</ErrorText>
              )}
              <DataLabel>{t("form.restaurants")}</DataLabel>
              <DataSelect
                placeholder="restaurants"
                id="restaurants"
                name="restaurants"
                type="textarea"
                onChange={formik.handleChange}
                value={formik.values.restaurants || ""}
              >
                {restaurants?.map((restaurant) => {
                  return (
                    <option
                      value={restaurant.restaurant_name}
                      key={restaurant.id}
                    >
                      {restaurant.restaurant_name}
                    </option>
                  );
                })}
                )
              </DataSelect>
              {formik.errors.restaurants && (
                <ErrorText>{formik.errors.restaurants}</ErrorText>
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
