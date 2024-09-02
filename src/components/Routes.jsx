import React from 'react'
import { Routes as Rs, Route } from 'react-router-dom';
import Search from './Search';
const Routes = () => {
  return (
    <div className='p-4'>
        <Rs>
        <Route path="/" element={<Routes />} />
        <Route path="/quiz" element={<Search />} />
        </Rs>
    </div>
  )
}

export default Routes