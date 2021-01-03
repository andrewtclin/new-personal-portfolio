import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  mainFeatured: {
    position: "relative",
    background: "linear-gradient(150deg, #5a5a5a 50%, lightgray)",
    marginBottom: theme.spacing(4),
    backgroundImage: "url(https://source.unsplash.com/random)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
  mainFeatured__overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,.3)",
  },
  mainFeatured__avatar: {
    margin: "20px 100px 20px 0px",
    objectFit: "contain",
    maxHeight: "200px",
    borderRadius: "150px",
    zIndex: "1000",
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
    fontSize: "1.8rem",
    textShadow: "2px 2px #2B0A00",
    color: "white",
  },
  mainFeatured__content: {
    position: "relative",
    fontSize: "20px",
    fontWeight: "400",
    marginLeft: "20px",
    marginTop: "30px",
    color: "white",
    // textShadow: "2px 2px #2B0A00",
  },
}));
