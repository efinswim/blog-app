import {Card, CardActions, CardContent, Typography, Button} from "@mui/material";

const BlogPage = ({key, body, title}) => {

  return (
    <Card
      sx={{ maxWidth: 800 }}
      //key={key + 1}
    >
      <CardContent>
        <Typography>{body}</Typography>
        <Typography>{title}</Typography>
      </CardContent>
      <CardActions>
        <Button>Поделиться</Button>
        <Button>Подробнее</Button>
      </CardActions>
    </Card>
  );
};

export default BlogPage;