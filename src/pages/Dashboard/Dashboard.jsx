import React from "react";
import Panels from "../../components/Panels/Panels";
import GFXModal from "../../components/GFX/GFXModal/GFXModal";

import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper, Typography, Button } from "@material-ui/core";

import EntriesProvider from "../../provider/EntriesProvider/EntriesProvider";

import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflow: "hidden",
    padding: theme.spacing(0, 3),
    height: "auto",
  },
  header: {
    padding: theme.spacing(5, 3, 0, 3),
  },
  hpaper: {
    width: "80%",
    height: "200px",
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
    backgroundColor: "#121212",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: "#1a1a1a",
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  download: {
    padding: "3% 20% 3% 20%",
    borderRadius: "30px",
    backgroundColor: "#FBDA61",
    backgroundImage: "linear-gradient(45deg, #FBDA61 0%, #FF5ACD 100%)",
    fontFamily: "Chakra Petch",
    backgroundSize: "200% 200%",
    animation: `$Gradient 50000ms ${theme.transitions.easing.easeInOut}`,
  },
  center: { display: "flex", alignItems: "center", justifyContent: "center" },
  "@keyframes Gradient": {
    "0%": {
      backgroundPosition: "0% 50%",
    },
    "50%": {
      backgroundPosition: "100% 50%",
    },
    "100%": {
      backgroundPosition: "0% 50%",
    },
  },
}));

const header = `tiersamo`;

const Dashboard = (props) => {
  const cfx = useStyles();
  const printDocument = () => {
    console.log("Printing!");
    const input = document.getElementById("print");
    try {
      html2canvas(input, {
        backgroundColor: "#121212",
        scrollY: -window.scrollY,
      }).then((canvas) => {
        const imgData = canvas.toDataURL("image/png");

        const pdf = new jsPDF("p", "px", [canvas.width, canvas.height]);
        const width = pdf.internal.pageSize.getWidth();
        const height = pdf.internal.pageSize.getHeight();
        pdf.addImage(imgData, "JPEG", 0, 0, width, height);
        pdf.save("download.pdf");
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <EntriesProvider>
      <React.Fragment>
        <div className={cfx.root} id="print">
          <GFXModal />
          <Grid container spacing={3}>
            <Grid container className={cfx.header} spacing={2}>
              <Paper className={cfx.hpaper}>
                <Grid
                  container
                  wrap="nowrap"
                  spacing={2}
                  justify="center"
                  alignItems="center"
                >
                  <Typography className={cfx.text}>{header}</Typography>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Panels />
          </Grid>
        </div>
        <Paper className={cfx.hpaper}>
          <Grid item xs={12} className={cfx.center}>
            <Button
              variant="contained"
              color="primary"
              className={cfx.download}
              onClick={printDocument}
            >
              Download
            </Button>
          </Grid>
        </Paper>
      </React.Fragment>
    </EntriesProvider>
  );
};

export default Dashboard;
