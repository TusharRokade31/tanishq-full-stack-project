import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Accordion from "react-bootstrap/Accordion";
import { IoFilterSharp } from "react-icons/io5";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

const OffCanvas = () => {
  const [show, setShow] = useState(false);

  function valuetext(value) {
    return `${value}°C`;
  }

  const [value, setValue] = React.useState([3786, 991961]);

  const handlepriceChange = (event, newValue) => {
    setValue(newValue);
  };

  const [checked, setChecked] = React.useState([
    {
      Diamond: false,
      Gold: false,
      kids: false,
      unisex: false,
      men: false,
      women: false,
      k18:false,
      k22:false
    },
  ]);

  const handleCheckChange = (event) => {
    setChecked({
      ...checked,
      [event.target.name]: event.target.checked,
    });
  };

  const { Diamond, Gold, kids, unisex, men, women, k18, k22 } = checked;

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button className="filterBtn" onClick={handleShow}>
        <IoFilterSharp className="me-2" /> FILTER
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>FILTER</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Accordion flush>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Price</Accordion.Header>
              <Accordion.Body>
                <span className="priceFilter">₹ {value[0]}</span>
                <span className="priceFilter">₹ {value[1]}</span>
                <Box sx={{ width: 300 }}>
                  <Slider
                    getAriaLabel={() => "Price range"}
                    value={value}
                    onChange={handlepriceChange}
                    min={3786}
                    max={1591961}
                  />
                </Box>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Jewellery Type</Accordion.Header>
              <Accordion.Body>
                <Box sx={{ display: "flex", flexDirection: "column", ml: 3 }}>
                  <FormControlLabel
                    label="Diamond Jewellery"
                    control={
                      <Checkbox
                        checked={Diamond}
                        onChange={handleCheckChange}
                      />
                    }
                  />
                  <FormControlLabel
                    label="Gold Jewellery"
                    control={
                      <Checkbox checked={Gold} onChange={handleCheckChange} />
                    }
                  />
                </Box>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>Gender</Accordion.Header>
              <Accordion.Body>
                <Box sx={{ display: "flex", flexDirection: "column", ml: 3 }}>
                  <FormControlLabel
                    label="Kids"
                    control={
                      <Checkbox
                        checked={kids}
                        onChange={handleCheckChange}
                      />
                    }
                  />
                  <FormControlLabel
                    label="Men"
                    control={
                      <Checkbox checked={men} onChange={handleCheckChange} />
                    }
                  />
                  <FormControlLabel
                    label="Unisex"
                    control={
                      <Checkbox checked={unisex} onChange={handleCheckChange} />
                    }
                  />
                  <FormControlLabel
                    label="Women"
                    control={
                      <Checkbox checked={women} onChange={handleCheckChange} />
                    }
                  />
                </Box>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>Purity</Accordion.Header>
              <Accordion.Body>
              <Box sx={{ display: "flex", flexDirection: "column", ml: 3 }}>
                  <FormControlLabel
                    label="18"
                    control={
                      <Checkbox
                        checked={k18}
                        onChange={handleCheckChange}
                      />
                    }
                  />
                  <FormControlLabel
                    label="22"
                    control={
                      <Checkbox
                        checked={k22}
                        onChange={handleCheckChange}
                      />
                    }
                  />
                  </Box>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header>Collection</Accordion.Header>
              <Accordion.Body></Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="5">
              <Accordion.Header>Type</Accordion.Header>
              <Accordion.Body></Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default OffCanvas;
