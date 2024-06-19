/**
 * This file is provided ready-made for use in your application by HackYourFuture.
 * There should be no reason to make any changes to this file.
 */

// Log levels in increasing severity
type LogLevel = 'silly' | 'debug' | 'info' | 'warn' | 'error' | 'fatal' | 'none';
const LEVELS: LogLevel[] = ['silly', 'debug', 'info', 'warn', 'error', 'fatal', 'none'];


function logger() {
  let minLevel = LEVELS.length - 1;

  // Check the requested level against the minimum level
  const isMinLevel = (level: LogLevel) => LEVELS.indexOf(level) >= minLevel;

  // The function that does the actual logging.
  const log = (level: LogLevel, label: string, ...args: any) => {
    if (!isMinLevel(level)) {
      return;
    }

    let logFn;

    switch (level) {
      case 'warn':
        logFn = console.warn;
        break;
      case 'info':
        logFn = console.info;
        break;
      case 'error':
        logFn = console.error;
        break;
      default:
        logFn = console.log;
    }

    logFn(`${level}: [${label}]`, ...args);
  };

  // Return an object with convenience functions for logging at specific
  // log levels.
  return {
    setLevel(level: LogLevel) {
      const newLevel = LEVELS.indexOf(level);
      if (newLevel !== -1) {
        minLevel = newLevel;
      }
    },
    getLevel() {
      return LEVELS[minLevel];
    },
    isMinLevel,
    log,
    silly(label: string, ...args: any) {
      log('silly', label, ...args);
    },
    debug(label: string, ...args: any) {
      log('debug', label, ...args);
    },
    info(label: string, ...args: any) {
      log('info', label, ...args);
    },
    warn(label: string, ...args: any) {
      log('warn', label, ...args);
    },
    error(label: string, ...args: any) {
      log('error', label, ...args);
    },
    fatal(label: string, ...args: any) {
      log('fatal', label, ...args);
    },
  };
}

export default logger();
