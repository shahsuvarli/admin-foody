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
  OrdersDiv,
  OrdersSpan,
  OrdersStyled,
  TablePaginationStyle,
} from "./OrderContainer.styled";
import { useTranslation } from "react-i18next";
import { Image } from "react-bootstrap";
import DeleteIcon from "../../Image/icon/delete.svg";
import LoadGif from "../../Image/icon/loading.gif";
import Swal from "sweetalert2";
import { ToastContainer, toast } from "react-toastify";
import { ordersAPI } from "../../api/orders";
import { ordersDeleteAPI } from "../../api/orders";

const columns = [
  { id: "id", label: "id", minWidth: 100, align: "center" },
  { id: "customer_id", label: "customer_id", minWidth: 100, align: "center" },
  { id: "date", label: "date", minWidth: 170, align: "center" },
  { id: "address", label: "address", minWidth: 170, align: "center" },
  { id: "amount", label: "amount", minWidth: 170, align: "center" },
  { id: "payment", label: "payment", minWidth: 170, align: "center" },
  { id: "contact", label: "contact", minWidth: 170, align: "center" },
];

export default function OrderContainer() {
  const { t } = useTranslation();

  const [orders, setOrders] = React.useState(null);

  React.useEffect(() => {
    getOrders();
  }, []);

  const getOrders = () => {
    ordersAPI
      .then((res) => {
        setOrders(res.data.orders);
      })
      .catch((err) => {});
  };

  const deleteOrders = (id) => {
    Swal.fire({
      title: t("title delete"),
      text: t("subtitle order delete"),
      showCancelButton: true,
      cancelButtonColor: "transparent",
      cancelButtonText: t("cancel"),
      confirmButtonColor: "#D63626",
      confirmButtonText: t("delete"),
    }).then((result) => {
      if (result.isConfirmed) {
        ordersDeleteAPI(id)
          .then((res) => {
            let newArray = [...orders].filter((item) => item.id !== id);
            setOrders(newArray);
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

  if (!orders) {
    return <LoadingImage src={LoadGif} alt="loading" />;
  }

  return (
    <OrdersStyled className="category-page">
      <OrdersDiv>
        <OrdersSpan>{t("menu.orders")}</OrdersSpan>
      </OrdersDiv>

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
              {orders
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
                          onClick={() => deleteOrders(row.id)}
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
          count={orders?.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      <ToastContainer />
    </OrdersStyled>
  );
}
