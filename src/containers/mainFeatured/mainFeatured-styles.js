import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  mainFeatured: {
    position: "relative",
    backgroundColor: theme.palette.grey[800],
    background: "linear-gradient(150deg, #5a5a5a 50%, lightgray)",
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    // backgroundImage: "url(https://unsplash.com/photos/pjAH2Ax4uWk)",
    // backgroundSize: "cover",
    // backgroundRepeat: "no-repeat",
    // backgroundPosition: "center",
  },
  mainFeatured__avatar: {
    margin: "20px 50px 20px 0px",
    objectFit: "contain",
    maxHeight: "200px",
    borderRadius: "150px",
  },
  mainFeatured__contentGrid: {
    display: "flex",
    justifyContent: "space-around",
  },
  mainFeatured__contentContainer: {
    padding: theme.spacing(6),
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  mainFeatured__contentTitle: {
    position: "relative",
    fontSize: "1.5rem",
    textShadow: "2px 2px #2B0A00",
  },
  mainFeatured__content: {
    position: "relative",
    fontSize: "18px",
    fontWeight: "400",
    marginLeft: "20px",
    marginTop: "30px",
    textShadow: "2px 2px #2B0A00",
  },
}));
