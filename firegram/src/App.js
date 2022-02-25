import React, { useState } from 'react';
import ImageGrid from './comps/ImageGrid';
import Modal from './comps/Modal';
import Title from './comps/Title';
import UploadForm from './comps/UploadForm';

function App() {
  const [selecetdImage, setSelectedImage] = useState(null);
  return (
    <div className="App">
      <Title/>
      <UploadForm/>
      <ImageGrid  setSelectedImage={setSelectedImage} />
      {selecetdImage && <Modal selecetdImage={selecetdImage} setSelectedImage={setSelectedImage}/>}
    </div>
  );
}

export default App;
