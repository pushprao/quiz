export const getQuizList = () => {
  return fetch("https://wordquiz.p.rapidapi.com/questions", {
    method: "GET",
    headers: {
      "x-rapidapi-host": "wordquiz.p.rapidapi.com",
      "x-rapidapi-key": "6eb4ae14fcmsh32aff8138116af9p1c6b49jsn67b52f1a9a6f",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data.quizList);
      this.setState({
        quizList: data.quizList,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
