/*
 * CustomerPage
 *
 * List all the features
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import {customers} from "./tests/Items";
import {onItemSelect} from "./actions";
// import './style.scss';

export default class CustomerPage extends React.Component {

  componentWillMount() {
    this.props.loadItems();
  }

  render() {
    const { items, customers, selectItem, changeItemQty, selectedQty, addItemToOrder } = this.props;
    return (
      <div>
        <Helmet>
          <title>Feature Page</title>
          <meta
            name="description"
            content="Customer page"
          />
        </Helmet>
        <div className="container">
          <h2>Order</h2>
            <div className="form-group">
              <label htmlFor="usr">Select Customer</label>
              <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Select Customer
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  {
                    customers.map((customer)=> {
                      return <a className="dropdown-item"  key={ `customer_${customer.get('id')}`} href="#" onClick={
                        () => {

                        }
                      }>{customer.get('firstName')}</a>
                    })
                  }
                </div>
              </div>
            </div>


          <div className="form-group">
            <label htmlFor="usr">Select Customer</label>
            <div className="dropdown">
              <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton"
                      data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Select Item
              </button>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                {
                  items.map((item)=> {
                    return <a className="dropdown-item"  id={item.get('id')}  key={ `item_${item.get('id')}`} href="#"
                              onClick={ (target) => { selectItem(target.currentTarget.id) }
                              }
                    >{item.get('name')}</a>
                  })
                }
              </div>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="pwd">Quantity</label>
            <input type="text"  value={selectedQty} className="form-control" id="pwd"
                   onChange={({target: {value}}) => {
                     changeItemQty(value);
                   }}/>
          </div>

            <button type="submit" onClick={ addItemToOrder ()} className="btn btn-primary">Add To Order</button>
        </div>
      </div>
    );
  }
}
