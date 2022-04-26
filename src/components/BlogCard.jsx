import {Card, CardActions, CardContent, Typography, Button} from "@mui/material";

const BlogCard = ({body, title}) => {

  return (
    <Card
      sx={{ maxWidth: 800 }}
    >
      <CardContent>
        <Typography
          variant="h6"
          gutterBottom
        >
          {title}
        </Typography>
        <Typography>
          {body}
        </Typography>
      </CardContent>
      <CardActions>
        <Button>Поделиться</Button>
        <Button>Подробнее</Button>
      </CardActions>
    </Card>
  );
};

export default BlogCard;