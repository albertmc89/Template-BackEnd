import chalk from "chalk";
import app from ".";

const startServer = () => {
  const port = process.env.PORT ?? 4000;

  app.listen(() => {
    chalk.inverse.bgYellowBright(`Listening on http://localhost:${port}`);
  });
};

export default startServer;
