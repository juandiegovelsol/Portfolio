import * as React from "react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setHomeEnglish, setHomeSpanish } from "../../pages/Home/homeSlice";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "./language-selector.scss";

export default function LanguageSelector() {
  const dispatch = useDispatch();
  const [lang, setLang] = useState("");

  const handleChange = (event) => {
    setLang(event.target.value);
  };

  useEffect(() => {
    if (lang === "eng") {
      dispatch(setHomeEnglish());
    }
    if (lang === "esp") {
      dispatch(setHomeSpanish());
    }
  }, [lang]);

  return (
    <section className="language">
      <Box>
        <FormControl>
          <InputLabel id="demo-simple-select-label">Lng</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={lang}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value={"eng"}>English</MenuItem>
            <MenuItem value={"esp"}>Español</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </section>
  );
}
