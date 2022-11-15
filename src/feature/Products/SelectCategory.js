import * as React from "react";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { categoryAPI } from "../../api/category";

export default function SelectCategory() {
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

  return (
    <Box sx={{ maxWidth: "199px", height: 35 }}>
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
  );
}
