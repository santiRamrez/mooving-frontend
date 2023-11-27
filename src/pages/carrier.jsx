import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLoaderData } from 'react-router-dom';

import { ModalCarrier } from 'src/sections/carrier/modal-edit';
import { CarrierTableView } from 'src/sections/carrier/table-view';
// ----------------------------------------------------------------------

export default function CarrierPage() {
  const data = useLoaderData();
  const [modalEdit, setModalEdit] = useState(false);
  const [selectedCarrier, setSelectedCarrier] = useState({});

  const choosenEdit = (id) => {
    const selected = data.find((val) => val.local_id.toUpperCase() === id.toUpperCase());
    if (selected) {
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

      <CarrierTableView data={data} toEdit={(id) => choosenEdit(id)} />
      <ModalCarrier showUp={modalEdit} values={selectedCarrier} close={(id) => cleanData(id)} />
    </>
  );
}
