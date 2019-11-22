import React from 'react';
import TableHeader from './components/TableHeader'
import TableContent from './components/TableContent'
import { Provider } from 'react-redux';
import store from '../../src/store';
import './index.scss';


class Home extends React.Component {

  render() {
    return (
        <Provider store={store} >
          <TableHeader></TableHeader>
          <TableContent> </TableContent>
        </Provider>
    );
  }
}

export default Home

