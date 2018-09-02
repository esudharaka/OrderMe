/*
 * CustomerPage
 *
 * List all the features
 */
import React from 'react';
import { Helmet } from 'react-helmet';
// import './style.scss';

export default class CustomerPage extends React.Component {

  componentWillMount() {
    this.props.loadItems();
  }

  render() {
    const { items } = this.props;
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
          <p>Placing the order with following fields</p>
          <form>
            <div className="form-group">
              <label htmlFor="usr">Name:</label>
              <input type="text" className="form-control" id="usr"/>
            </div>


            <div className="dropdown">
              <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton"
                      data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Select Item
              </button>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              {
                items.map((item)=> {
                  return <a className="dropdown-item"  key={item.get('id')} href="#">{item.get('name')}</a>
                })
              }
              </div>
            </div>
            <button type="submit" className="btn btn-primary">Save</button>
          </form>


        </div>
      </div>
    );
  }
}
