'use strict';

const logger = require('./logger');

/**
 * Handle sending a sign of life to let the user know that the deployer is still working
 *
 * @class Liveness_Ping
 */
class Liveness_Ping {
  /**
   * Creates an instance of Liveness_Ping.
   *
   * @memberOf Liveness_Ping
   */
  constructor () {
    this.last_liveness_ping = Date.now();
    const last_message_interval = 30000;
    const timer_interval = 5000;
    const interval_id = setInterval(() => {
      if (Date.now() - this.last_liveness_ping >= last_message_interval) {
        logger.log('Working ...');
      } else {
        // Do nothing, no need to update status, since a message has already been sent in the last seconds.
      }
    }, timer_interval);

    this.stop = () => {
      clearInterval(interval_id);
    };
  }

  /**
   * Tracks when the last sign of life was sent.
   *
   *
   * @memberOf Liveness_Ping
   */
  sent () {
    this.last_liveness_ping = Date.now();
  }
}

module.exports = Liveness_Ping;
