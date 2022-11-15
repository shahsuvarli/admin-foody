import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import {
  DeleteImage,
  LoadingImage,
  OffersDiv,
  OffersSpan,
  OffersStyled,
  TablePaginationStyle,
} from "./OfferContainer.styled";
import { useTranslation } from "react-i18next";
import { AddProductBtn } from "../../shared/components/Header/AddProductBtn";
import { Image } from "react-bootstrap";
import DeleteIcon from "../../Image/icon/delete.svg";
import LoadGif from "../../Image/icon/loading.gif";
import Swal from "sweetalert2";
import { ToastContainer, toast } from "react-toastify";
import { offersAPI } from "../../api/offers";
import { offersDeleteAPI } from "../../api/offers";
import { setOffers } from "../../store/slice/offersSlice";
import { useDispatch, useSelector } from "react-redux";

const columns = [
  { id: "id", label: "id", minWidth: 100, align: "center" },
  { id: "title", label: "title", minWidth: 100, align: "center" },
  { id: "description", label: "description", minWidth: 170, align: "center" },
  { id: "image", label: "image", minWidth: 170, align: "center" },
];

export default function OfferContainer() {
  const { t } = useTranslation();

  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  React.useEffect(() => {
    getOffers();
  }, []);

  const getOffers = () => {
    offersAPI
      .then((res) => {
        dispatch(setOffers(res.data.offers));
      })
      .catch((err) => { });
  };

  const deleteOffers = (id) => {
    Swal.fire({
      title: t("title delete"),
      text: t("subtitle offer delete"),
      showCancelButton: true,
      cancelButtonColor: "transparent",
      cancelButtonText: t("cancel"),
      confirmButtonColor: "#D63626",
      confirmButtonText: t("delete"),
    }).then((result) => {
      if (result.isConfirmed) {
        offersDeleteAPI(id)
          .then((res) => {
            let newArray = [...state.offersSlice.data].filter((item) => item.id !== id);
            dispatch(setOffers(newArray));
          })
          .catch(() => { });
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

  if (!state.offersSlice.data[0]) {
    return <LoadingImage src={LoadGif} alt="loading" />;
  }

  return (
    <OffersStyled className="category-page">
      <OffersDiv>
        <OffersSpan>{t("menu.offers")}</OffersSpan>
        <AddProductBtn name={t("add offer")} pagename="offers" placement="end" />
      </OffersDiv>

      <Paper sx={{ width: "99%", boxShadow: "none" }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns?.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    cellwidth={column.minWidth}
                  >
                    {t(`form.` + column.label)}
                  </TableCell>
                ))}
                <TableCell align={"right"} cellwidth={"20"}></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {state.offersSlice.data
                ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={`table-${row.id}`}
                    >
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.id === "image" ? (
                              <Image
                                width="60"
                                className="rounded"
                                alt={column.id}
                                src={value}
                              />
                            ) : value.length > 30 ? (
                              `${value.slice(0, 30)}...`
                            ) : (
                              value
                            )}
                          </TableCell>
                        );
                      })}

                      <TableCell key={row.id} align={"right"}>
                        <DeleteImage
                          onClick={() => deleteOffers(row.id)}
                          src={DeleteIcon}
                        />
                      </TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePaginationStyle
          rowsPerPageOptions={[10, 25, 50]}
          component="div"
          count={state.offersSlice.data?.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      <ToastContainer />
    </OffersStyled>
  );
}
