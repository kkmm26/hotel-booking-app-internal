import Row from "../ui/Row.jsx";
import CabinTable from "../features/cabins/CabinTable.jsx";
import Heading from "../ui/Heading.jsx";
import Button from "../ui/Button.jsx";
import CreateCabinForm from "../features/cabins/CreateCabinForm.jsx";
import { useState } from "react";

function Cabins() {
  const [showForm, setShowForm] = useState(false);
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
      </Row>

      <Row type="vertical">
        <CabinTable></CabinTable>
        <Button
          size={"medium"}
          variation={"primary"}
          onClick={() => {
            setShowForm((prev) => !prev);
          }}
        >
          Add new cabin
        </Button>
        {showForm && <CreateCabinForm />}
      </Row>
    </>
  );
}

export default Cabins;
