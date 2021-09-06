import boxen from "boxen";
import chalk from "chalk";

export enum Severity {
  success = "success",
  warning = "warning",
  error = "error",
}

const LOGGERS = {
  success: chalk.green.bold,
  warning: chalk.yellow.bold,
  error: chalk.red.bold,
};

const BOX_COLORS = {
  success: "green",
  warning: "yellow",
  error: "red",
};

export default function logger(
  message: string,
  severity: Severity = Severity.success,
  box?: boolean
) {
  const log = LOGGERS[severity](message);
  if (box) {
    console.log(
      boxen(log, {
        padding: 1,
        borderColor: BOX_COLORS[severity],
      })
    );
    return;
  }
  console.log(log);
}