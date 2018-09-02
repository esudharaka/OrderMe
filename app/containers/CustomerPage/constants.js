/*
 * HomeConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const CHANGE_FIRST_NAME = 'app/CUSTOMER/CHANGE_FIRST_NAME';
export const CHANGE_LAST_NAME = 'app/CUSTOMER/CHANGE_LAST_NAME';
export const CHANGE_EMAIL = 'app/CUSTOMER/CHANGE_EMAIL';
export const CHANGE_PHONE = 'app/CUSTOMER/CHANGE_PHONE';
export const CHANGE_SHIPPING_ADDRESS = 'app/CUSTOMER/CHANGE_SHIPPING_ADDRESS';
export const SAVE_CUSTOMER = 'app/CUSTOMER/SAVE_CUSTOMER';
export const COMPLETE_SAVE_CUSTOMER = 'app/CUSTOMER/COMPLETE_SAVE_CUSTOMER';
