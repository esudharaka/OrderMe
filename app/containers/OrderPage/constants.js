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

export const CHANGE_USERNAME = 'Home/CHANGE_USERNAME';
export const LOAD_ORDER_PAGE = 'ORDER/LOAD_ORDER_PAGE';
export const ITEM_LOADED = 'ORDER/ITEM_LOADED';
export const CUSTOMERS_LOADED = 'ORDER/CUSTOMERS_LOADED';
export const ITEM_SELECTED = 'ORDER/ITEM_SELECTED';
