import ViewListIcon from "@material-ui/icons/ViewList";
import StarIcon from "@material-ui/icons/Star";
import { showAll, showFavorites } from "../store/notes";
import { AppDispatch } from "../store/store";

export default Object.freeze([
  {
    onClick: (dispatch: AppDispatch) => {
      dispatch(showAll());
    },
    Icon: <ViewListIcon color="secondary" />,
    text: "All Notes",
  },
  {
    onClick: (dispatch) => {
      dispatch(showFavorites());
    },
    Icon: <StarIcon style={{ fill: "gold" }} />,
    text: "Favorites",
  },
]);
