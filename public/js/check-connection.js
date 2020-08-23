/**
 * @name checkConnection
 * @description With this class you can create a new instance of a visual top bar element.
 * @param {string} containerId Id of html container, for example contentMessage.
 * @param {string} onlineMessage Id of html container, for example contentMessage.
 * @param {string} offlineMessage Id of html container, for example contentMessage.
 * @param {number} delayToHide (Optional) Number of milliseconds, for example: 1000 (1 second).
 */
export default class checkConnection {
  
  constructor(containerId, onlineMessage, offlineMessage, delayToHide){
    this.actualStatus = this.onLine();
    this.contentMessage = document.getElementById(containerId);
    this.onlineMessage = onlineMessage;
    this.offlineMessage = offlineMessage;
    if(typeof delayToHide === 'number') this.delayToHide = delayToHide;
  }

  /**
   * @name onLine
   * @description This method return if the navigator have or not connection.
   * @return {boolean} True or False if is online or not.
   */
  onLine () {
    return window.navigator.onLine;
  }

  /**
   * @name updateStatus
   * @description This method change the actual status.
   */
  updateStatus () {
    this.actualStatus = this.onLine();
  }

  /**
   * @name removeClass
   * @param {string} name The name of the css class that you want to remove.
   * @description This method remove css class of the html container element.
   */
  removeClass (name){
    this.contentMessage.classList.remove(name);
  }

  /**
   * @name addClass
   * @param {string} name The name of the css class that you want to add.
   * @description This method add css class to the html container element.
   */
  addClass (name) {
    this.contentMessage.classList.add(name);
  }

  /**
   * @name setMessage
   * @param {string} message The message that you want show.
   * @description This method set the visual message into the
   *              html container element.
   */
  setMessage (message) {
    this.contentMessage.innerHTML = message;
  }

  /**
   * @name toggleMessage
   * @description This method have all the logic for show
   *              the component if the status changed.
   */
  toggleMessage(){
    // Get online status.
    const onLine = this.onLine();
    // Remove css class of the before status.
    this.removeClass(this.actualStatus);
    setTimeout(() => {
      // Set message.
      this.setMessage(onLine ? this.onlineMessage : this.offlineMessage);
      // Add css class of the actual status.
      this.addClass(onLine);
      // Update status to the new.
      this.updateStatus();
      // If exist delay we remove the css class.
      if (this.delayToHide) setTimeout(() => this.removeClass(this.actualStatus), this.delayToHide);
    }, 600);
  }

  /**
   * @name active
   * @description This method active two listeners, online and offline
   *              for show all component if the connection status change.
   */
  active(){
    window.addEventListener("online", () => this.toggleMessage());
    window.addEventListener("offline", () => this.toggleMessage());
  }

  /**
   * @name desactive
   * @description This method desactive two listeners, online and offline
   *              for not show a component if the connection status change.
   */
  desactive() {
    window.removeEventListener("online");
    window.removeEventListener("offline");
  }
}