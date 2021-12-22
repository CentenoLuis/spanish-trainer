const routes = {
  home: "/",
  quizzes: "/quizzes",
  login: "/login",
  register: "/register",
  account: "/account",
  quizz: (quizzesId) =>
    quizzesId ? `/quizzes/:${quizzesId}` : "/quizzes/:quizzesid",
  admin: {
    users: "/admin/users",
  },
};

export default routes;
