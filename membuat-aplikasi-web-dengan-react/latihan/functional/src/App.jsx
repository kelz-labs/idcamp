// pakai cara tradisional
/*import React from 'react';
import { createRoot } from 'react-dom/client';

const heading = React.createElement('h1', null, 'Biodata Perusahaan');

const listItem1 = React.createElement('li', null, 'Nama: Dicoding Indonesia');
const listItem2 = React.createElement('li', null, 'Bidang: Education');
const listItem3 = React.createElement('li', null, 'Tagline: Decode Ideas, Discover Potential');

const unorederedList = React.createElement('ul', null, [listItem1, listItem2, listItem3]);
const root = createRoot(document.getElementById('root'));
root.render(heading);
*/

/*import { createRoot } from 'react-dom/client';
import React from 'react';
// import gambar
import Dicoding from '../public/dicoding.png';

const element = (
  <div>
    <h1>Biodata perusahaan</h1>
    <ul>
      <li>Nama: Dicoding Indonesia</li>
      <li>Bidang: Education</li>
      <li>Tagline: Decode Ideas, Discover Potential.</li>
      <img src={Dicoding} alt="Dicoding logo" />
    </ul>
  </div>
);

const root = createRoot(document.getElementById('root'));
root.render(element);
*/

import React from "react";
import ContactApp from "./components/ContactApp";
import Layout from "./components/layout";

const App = () => {
  return (
    <Layout>
      <ContactApp />
    </Layout>
  )
}

export default App; 
