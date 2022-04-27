import {Card, CardActions, CardContent, Typography, Button} from "@mui/material";
import {Link} from "react-router-dom";

const BlogCard = ({body, title, id}) => {

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
        <Link key={id} to={`/posts/${id}`}>
          <Button>Подробнее</Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default BlogCard;