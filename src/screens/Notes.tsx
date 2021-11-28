import React from "react";
import { Button, makeStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import StarIcon from "@material-ui/icons/Star";
import { limitString } from "../utils/limitString";
import { Link, useNavigate } from "react-router-dom";
import routes from "../constants/routes";
import { getNotes, switchStar } from "../store/notes";
import { useSelector, useDispatch } from "react-redux";
import { DescriptionOutlined } from "@material-ui/icons";

import "../App.css";

const useStyles = makeStyles({
  noteCard: {
    maxWidth: 250,
    backgroundColor: "whitesmoke",
    boxShadow: "3px 3px 7px 0px #8080804f",
    padding: 15,
    height: 300,
    overflow: "hidden",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "rgb(231, 231, 231)",
    },
  },
  noNoteIcon: {
    fill: "gray",
    fontSize: "10vw",
    position: "absolute",
    top: "40%",
    left: "46.5%",
  },
  addBtn: {
    position: "fixed",
    alignSelf: "center",
    bottom: 30,
    left: "50%",
    fontWeight: "bold",
    borderRadius: 20,
  },
});

function Notes() {
  const styles = useStyles();

  const notes = useSelector(getNotes);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleSwitchStar =
    (id: number): React.MouseEventHandler<SVGSVGElement> =>
    (e) => {
      dispatch(switchStar({ id }));
      e.stopPropagation();
    };

  return (
    <>
      <Grid
        wrap="wrap"
        style={{ margin: "auto", width: "100%" }}
        spacing={5}
        container
        justifyContent="flex-start"
        alignItems="stretch"
        alignContent="stretch"
      >
        {notes &&
          notes.map((note) => (
            <Grid
              key={note.id}
              item
              onClick={() => navigate(`${routes.AddNote}/${note.id}`)}
            >
              <div className={styles.noteCard}>
                {note.isFavorite ? (
                  <StarIcon
                    style={{ fill: "gold" }}
                    onClick={handleSwitchStar(note.id)}
                  />
                ) : (
                  <StarBorderIcon onClick={handleSwitchStar(note.id)} />
                )}
                <h3>{note.title.toUpperCase()}</h3>
                <p>{limitString(note.text)}</p>
              </div>
            </Grid>
          ))}
      </Grid>
      {notes.length === 0 && (
        <DescriptionOutlined className={styles.noNoteIcon} />
      )}
      <Link to={routes.AddNote}>
        <Button variant="contained" color="secondary" className={styles.addBtn}>
          +
        </Button>
      </Link>
    </>
  );
}

export default Notes;
