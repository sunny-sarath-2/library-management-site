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
  let images = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdfpFTpK1IGbNEMANtsT4yJT6Gz4ozm3313Dk15vH84WgLdFNHMA1EOKQYZIyHil72qzY&usqp=CAU",
    "https://i.harperapps.com/covers/9780062889805/x300.jpg",
    "https://www.abramsbooks.com/wp-content/uploads/2016/04/9781419723445-208x300.jpg",
    "https://i.pinimg.com/736x/49/10/13/4910136af3577d4ce0bba0e1271c9515.jpg",
    "https://www.openculture.com/wp-content/uploads/2011/04/harperlee1.jpeg",
    "https://www.alastore.ala.org/sites/default/files/styles/imagezoom_gallery_image/public/book_covers/9781728244853.jpg?itok=G-Q6s4T2",
    "https://www.theuncorkedlibrarian.com/wp-content/uploads/2021/12/Books-With-A-Color-In-The-Title.jpg.webp",
    "https://www.maryhannawilson.com/wp-content/uploads/2021/02/Booklist-for-Kids-PINs-683x1024.jpg",
    "https://everyday-reading.com/wp-content/uploads/2018/09/Recommended-POI.jpg",
    "https://i.harperapps.com/covers/9780062317650/x300.jpg",
  ];
  return (
    <ThemeProvider theme={theme}>
      <main>
        {/* Hero unit */}
        <Container sx={{ py: 8 }} maxWidth="lg">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {props.books.map((book, index) => (
              <Grid item key={book._id} xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    width: "300px",
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
                    image={images[index % 10]}
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
