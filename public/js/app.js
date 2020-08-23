import checkConnection from './check-connection.js';

window.addEventListener("load", () => {
  /**
   * This Example show how you can create a new instance of checkConnection class
   * for show top banner with #contentMessage id and with a delay for hide in 1000 milliseconds.
   */
  const instanceCheckConnection = new checkConnection(
    'contentMessage',
    '✅ The network connection has been restored',
    '🚫 The network connection has been lost',
    1000
  );
  // Active for show top banner if the connection change.
  instanceCheckConnection.active();
  /**
   * You can desactive this component with the next line:
   * instanceCheckConnection.desactive();
   */ 
});