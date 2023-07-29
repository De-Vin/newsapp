import React from "react";
import {
  Card,
  CardActions,
  CardActionArea,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";

import useStyles from "./style.js";
import classnames from "classnames"

function NewsCard({
  article: { description, publishedAt, source, title, url, urlToImage },
  i,activeArticle,
}) {
  const classes = useStyles();

  return (
    <Card className={classnames(classes.card,activeArticle===i?classes.activeCard:null)}>
      <CardActionArea href={url} target="_blank">
        <CardMedia
          className={classes.media}
          image={
            urlToImage ||
            "https://thumbs.dreamstime.com/b/news-newspapers-folded-stacked-word-wooden-block-puzzle-dice-concept-newspaper-media-press-release-42301371.jpg"
          }
        />
        <div className={classes.details}>
          <Typography  varint="body2" color="text-secondary" component="h2">
            {new Date(publishedAt).toDateString()}
          </Typography>
          <Typography varint="body2" color="textSecondary" component="h2">
            {source.name}
          </Typography>
        </div>
        <div className={classes.boxer}>
        <Typography className={classes.title} gutterBottom variant="H5" >
          {title}
        </Typography>
        </div>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.cardActions}>
        <Button size="small" color="primary">
          Learn More
        </Button>
        <Typography variant="h5" color="textSecondary">
          {i + 1}
        </Typography>
      </CardActions>
    </Card>
  );
}

export default NewsCard;
