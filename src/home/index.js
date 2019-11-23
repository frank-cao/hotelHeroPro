import React from 'react';
import TableHeader from './components/TableHeader'
import TableContent from './components/TableContent'
import { Provider } from 'react-redux';
import store from '../../src/store';
import './index.scss';


class Home extends React.Component {

  render() {
    return (
      <div className="home">
        <Provider store={store} >
          <TableHeader></TableHeader>
          <TableContent> </TableContent>
        </Provider>
      </div>
    );
  }
}

export default Home

