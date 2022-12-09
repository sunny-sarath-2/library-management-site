import React from "react";

import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

export default function Album(props) {
  return (
    <ThemeProvider theme={theme}>
      <main>
        {/* Hero unit */}
        <Container sx={{ py: 8 }} maxWidth="lg">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {props.books.map((book) => (
              <Grid item key={book._id} xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardMedia
                    component="img"
                    sx={
                      {
                        // 16:9
                      }
                    }
                    image="https://source.unsplash.com/random"
                    alt="random"
                  />
                  <CardContent
                    sx={{ flexGrow: 1 }}
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h2"
                      sx={{ flexShrink: 0 }}
                    >
                      {book?.title.length > 20
                        ? `${book?.title.slice(0, 20)}...`
                        : book?.title}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      onClick={() => props.onViewClick(book._id)}
                      size="small"
                    >
                      View
                    </Button>
                    <Button
                      size="small"
                      onClick={() => props.onButtonClick(book._id)}
                    >
                      {props.myBook ? "Submit Book" : "Get Book"}
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
    </ThemeProvider>
  );
}
