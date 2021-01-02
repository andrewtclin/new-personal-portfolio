import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  header: {
    marginTop: "20px",
    flexGrow: 1,
  },
  header__top: { marginBottom: "2px" },
  header__title: {
    fontFamily: '"Roboto", "Helvetica", "Arial", "sans-serif"',
    fontSize: "1.5rem",
    fontWeight: "400",
    lineHeight: "1.334",
    letterSpacing: "0",
    textAlign: "center",
  },
  header__selectContainer: {
    display: "flex",
    alignItems: "center",
  },
  header__select: { marginLeft: "10px" },
  header__option: {
    fontSize: "18px",
    fontWeight: "500",
    color: "#0c0c0c",
    "&:hover": {
      color: "rgb(128,37,8)",
    },
    textAlign: "center",
    cursor: "pointer",
  },
});
