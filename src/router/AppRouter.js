import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/page/Home/Home";
import Account from "../pages/page/Account/Account";
import Login from "../pages/page/Login/Login";
import Quizzes from "../pages/page/Quizzes/Quizzes";
import Quizz from "../pages/page/Quizz/Quizz";
import Register from "../pages/page/Register/Register";
import Users from "../pages/admin/Users/Users";
import NotFound from "../pages/page/NotFound/NotFound";
import Layout from "../Layouts/Layout";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import routes from "../helpers/routes";
import roles from "../helpers/roles";

const AppRouter = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route exact path={routes.home} element={<Home />} />

          <Route
            exact
            path={routes.login}
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />

          <Route
            exact
            path={routes.register}
            element={
              <PublicRoute>
                <Register />
              </PublicRoute>
            }
          />

          <Route
            exact
            path={routes.account}
            element={
              <PrivateRoute>
                <Account />
              </PrivateRoute>
            }
          />

          <Route
            exact
            path={routes.quizzes}
            element={
              <PrivateRoute>
                <Quizzes />
              </PrivateRoute>
            }
          />

          <Route
            exact
            path={routes.quizz()}
            element={
              <PrivateRoute>
                <Quizz />
              </PrivateRoute>
            }
          />

          <Route
            exact
            path={routes.admin.users}
            element={
              <PrivateRoute hasRole={roles.admin}>
                <Users />
              </PrivateRoute>
            }
          />
          <Route exact path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default AppRouter;
