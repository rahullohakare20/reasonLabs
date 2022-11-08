import React, { useState } from "react";
import { InformationTable } from "../information_table/information_table.component";
import { PhoneBookForm } from "../phone_book_form/phone_book_form.component";


export default function Task_2() {
  const [phoneBookData, setPhoneBookData] = useState([]);
  const [deletedRecord, setDeletedRecord] = useState();

  const handleDelete = (firstName, lastName) => {
    // Delete record
    const updatedData = phoneBookData.filter(
      record => record.userFirstname !== firstName || record.userLastname !== lastName
    );

    setPhoneBookData([...updatedData]);

    //Set deleted record
    const deletedData = phoneBookData.filter(
      record => record.userFirstname === firstName && record.userLastname === lastName
    );

    if (deletedData && deletedData.length) {
      setDeletedRecord(deletedData[0]);
    }
  }

  return (
    <section>
      <PhoneBookForm
        phoneBookData={phoneBookData}
        setPhoneBookData={setPhoneBookData}
        deletedRecord={deletedRecord}
        setDeletedRecord={setDeletedRecord}
      />

      <InformationTable
        phoneBookData={phoneBookData}
        handleDelete={handleDelete}
      />
    </section>
  );
}
