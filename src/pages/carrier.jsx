import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLoaderData } from 'react-router-dom';

import { CarrierView } from 'src/sections/carrier/view';
import ModalEditView from 'src/sections/modal-edit/ModalEditView';
// ----------------------------------------------------------------------

export default function CarrierPage() {
  const data = useLoaderData();
  const [modalEdit, setModalEdit] = useState(false);
  const [selectedCarrier, setSelectedCarrier] = useState({});

  const choosenEdit = (id) => {
    const selected = data.find((val) => val.local_id.toUpperCase() === id.toUpperCase());
    if (selected) {
      console.log(selected);
      setModalEdit(true);
      setSelectedCarrier(selected);
    }
  };

  const cleanData = (id) => {
    setModalEdit(id);
    setSelectedCarrier({});
  };

  return (
    <>
      <Helmet>
        <title> Transportistas | Mooving </title>
      </Helmet>

      <CarrierView data={data} toEdit={(id) => choosenEdit(id)} />
      <ModalEditView showUp={modalEdit} values={selectedCarrier} close={(id) => cleanData(id)} />
    </>
  );
}
