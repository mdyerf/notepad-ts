import React from "react";
import routes from "./constants/routes";
import AppLayout from "./containers/AppLayout";
import AddNote from "./screens/AddNote";
import Notes from "./screens/Notes";
import store from "./store/store";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <AppLayout>
        <BrowserRouter>
          <Routes>
            <Route path={routes.Home} element={<Notes />} />
            <Route path={routes.AddNote} element={<AddNote />} />
            <Route path={`${routes.AddNote}/:id`} element={<AddNote />} />
          </Routes>
        </BrowserRouter>
      </AppLayout>
    </Provider>
  );
}

export default App;
