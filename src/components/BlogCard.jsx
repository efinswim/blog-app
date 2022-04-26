import {Card, CardActions, CardContent, Typography, Button} from "@mui/material";

const BlogCard = ({body, title}) => {

  return (
    <Card
      sx={{ maxWidth: 800 }}
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

export default BlogCard;