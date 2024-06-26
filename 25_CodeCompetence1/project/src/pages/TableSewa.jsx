import React from 'react'
import ListTableSewa from '../components/Konten/ListTable';
import Navbar from '../components/Homepage/Navbar';
import Footer from '../components/Homepage/Footer';

const TableSewa = () => {
  return (
      <>
          <Navbar />
          <ListTableSewa />
          <Footer />
      </>
  );
}

export default TableSewa