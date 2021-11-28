import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { RootState } from "./store";

interface Note {
  id: number;
  title: string;
  text: string;
  isFavorite: boolean;
}

const slice = createSlice({
  name: "notes",
  initialState: {
    showFavoritesOnly: false,
    notes: [
      {
        id: 1,
        title: "program",
        text: "this is a note that I have writen about my program",
        isFavorite: true,
      },
      {
        id: 2,
        title: "another note for program",
        text: "this is another note that I have writen about my program which is a bit longer",
        isFavorite: false,
      },
    ],
  },
  reducers: {
    addNote: (state, action) => {
      state.notes.push({
        id: getMaxId(state.notes) + 1,
        isFavorite: false,
        text: action.payload.text,
        title: action.payload.title,
      });
    },
    editNote: (state, action) => {
      state.notes = state.notes.map((note) => {
        if (note.id === action.payload.id) return action.payload;
        return note;
      });
    },
    deleteNote: (state, action) => {
      state.notes = state.notes.filter(
        (note) => note.id.toString() !== action.payload.id
      );
    },
    switchStar: (state, action) => {
      state.notes.map((note) => {
        if (note.id === action.payload.id) note.isFavorite = !note.isFavorite;
        return note;
      });
    },
    showAll: (state) => {
      state.showFavoritesOnly = false;
    },
    showFavorites: (state) => {
      state.showFavoritesOnly = true;
    },
  },
});

const getNotes = createSelector(
  (state: RootState) => state.notes.notes,
  (state: RootState) => state.notes.showFavoritesOnly,
  (notes, showFavoritesOnly) =>
    showFavoritesOnly ? notes.filter((note) => note.isFavorite) : notes
);
const getNoteById = (id: string | undefined) =>
  createSelector(
    (state: RootState) => state.notes.notes,
    (notes) => notes.find((note) => note.id.toString() === id)
  );

const getMaxId = createSelector(
  (notes: Note[]) => notes,
  (notes) => Math.max(0, ...notes.map((n) => n.id))
);

export default slice.reducer;
export const {
  addNote,
  editNote,
  deleteNote,
  switchStar,
  showAll,
  showFavorites,
} = slice.actions;
export { getNoteById, getNotes };
export type { Note };
