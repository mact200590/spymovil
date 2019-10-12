import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import React from "react";

export const PYCopyright: React.FC = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"PedidosYa © "}
      <Link color="inherit" href="https://material-ui.com/">
        2010-2019
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};
