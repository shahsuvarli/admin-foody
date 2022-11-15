import * as React from "react";
import "../Products/Products.css";
import TableContainer from "@mui/material/TableContainer";
import {
  RestaurantDiv,
  RestaurantSpan,
  RestaurantStyled,
  LoadingImage,
  RestaurantImage,
  RestaurantImageContainer,
  DeleteImage,
} from "./RestaurantContainer.styled";
import { useTranslation } from "react-i18next";
import { AddProductBtn } from "../../shared/components/Header/AddProductBtn";
import LoadGif from "../../Image/icon/loading.gif";
import Swal from "sweetalert2";
import { ToastContainer, toast } from "react-toastify";
import DeleteIcon from "../../Image/icon/delete.svg";
import {
  Box,
  CardContent,
  Grid,
  MenuItem,
  Pagination,
  Select,
  Typography,
} from "@mui/material";
import { restaurantAPI, restaurantDeleteAPI } from "../../api/restaurant";
import { Stack } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setRestaurant } from "../../store/slice/restaurantSlice";
import { categoryAPI } from "../../api/category";

export default function RestaurantContainer() {
  const { t } = useTranslation();

  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const [category, setCategory] = React.useState([]);
  const [cat, setCat] = React.useState("All");

  React.useEffect(() => {
    getCategory();
  }, []);

  const getCategory = () => {
    categoryAPI
      .then((res) => {
        setCategory([...new Set(res.data.category.map((item) => item.name))]);
      })
      .catch((err) => {});
  };

  const handleChange = (event) => {
    setCat(event.target.value);
  };

  React.useEffect(() => {
    getRestaurant();
  }, []);

  const getRestaurant = () => {
    restaurantAPI
      .then((res) => {
        dispatch(setRestaurant(res.data.restaurant));
      })
      .catch((err) => {});
  };

  const deleteRestaurant = (id) => {
    Swal.fire({
      title: t("title delete"),
      text: t("subtitle restaurant delete"),
      showCancelButton: true,
      cancelButtonColor: "transparent",
      cancelButtonText: t("cancel"),
      confirmButtonColor: "#D63626",
      confirmButtonText: t("delete"),
    }).then((result) => {
      if (result.isConfirmed) {
        restaurantDeleteAPI(id)
          .then((res) => {
            let newArray = [...state.restaurantSlice.data].filter(
              (item) => item.id !== id
            );
            dispatch(setRestaurant(newArray));
          })
          .catch(() => {});
        toast.success(t("The operation is succesful!"), {
          autoClose: 1000,
          pauseOnHover: true,
        });
      }
    });
  };

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  if (!state.restaurantSlice.data[0]) {
    return <LoadingImage src={LoadGif} alt="loading" />;
  }

  return (
    <RestaurantStyled>
      <RestaurantDiv>
        <RestaurantSpan>{t("menu.restaurants")}</RestaurantSpan>
        <div className="right-side">
          <Box sx={{ minWidth: "40%", height: 35 }}>
            <Select
              value={cat || "All"}
              onChange={handleChange}
              sx={{
                height: 35,
                width: 150,
                fontFamily: "Roboto",
                fontSize: 14,
                fontWeight: 500,
              }}
            >
              <MenuItem value="All" selected>
                Category type
              </MenuItem>
              {category.map((item) => (
                <MenuItem key={item} value={item} sx={{ fontSize: 14 }}>
                  {item}
                </MenuItem>
              ))}
            </Select>
          </Box>
          <AddProductBtn
            name={t("add restaurant")}
            pagename="restaurant"
            placement="end"
          />
        </div>
      </RestaurantDiv>

      <TableContainer
        sx={{
          width: "100%",
          maxHeight: "1000px",
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {state.restaurantSlice.data
          .filter(
            cat !== "All"
              ? (item) => item.category_name === cat
              : (item) => item
          )
          .map((item) => {
            return (
              <Grid
                key={item.id}
                sx={{
                  width: 247,
                  height: 83,
                  background: "#FFFFFF",
                  boxShadow: "0px 4px 4px rgba(57, 57, 57, 0.25)",
                  borderRadius: "5px",
                  marginRight: 3,
                  marginBottom: 3,
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <RestaurantImageContainer>
                  <RestaurantImage
                    src={item.image}
                    alt={item.restaurant_name}
                  />
                </RestaurantImageContainer>

                <CardContent
                  sx={{
                    width: "65%",
                    height: "100%",
                    alignItems: "center",
                    display: "grid",
                  }}
                >
                  <Typography
                    variant="h5"
                    component="div"
                    sx={{ color: "#1E1E30", fontSize: 18 }}
                  >
                    {item.restaurant_name}
                  </Typography>
                  <Typography
                    variant="h5"
                    component="div"
                    sx={{ color: "#828282", fontSize: 14 }}
                  >
                    {item.category_name}
                  </Typography>
                </CardContent>
                <DeleteImage
                  onClick={() => deleteRestaurant(item.id)}
                  src={DeleteIcon}
                  alt="delete"
                />
              </Grid>
            );
          })}
      </TableContainer>
      <Stack spacing={5} className="mt-5">
        <Pagination count={page || 1} color="primary" />
      </Stack>
      <ToastContainer />
    </RestaurantStyled>
  );
}
