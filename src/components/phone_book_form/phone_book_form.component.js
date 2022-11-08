import React, { useState } from "react";

import {initialRecord} from './phone_book_form.constant';
import { style } from "../task_2/task_2.style";

export function PhoneBookForm({ phoneBookData, setPhoneBookData, deletedRecord, setDeletedRecord }) {
  const [phoneBookRecord, setPhoneBookRecord] = useState(initialRecord);
  const [isDuplicateError, setDuplicateError] = useState(false);
  const [isRequiredError, setIsRequiredError] = useState(false);

  const isDuplicateRecord = (records, newRecord) => {
    const duplicateRecord = records.find(record => record.userFirstname === newRecord.userFirstname
      && record.userLastname === newRecord.userLastname
    );

    return duplicateRecord && Object.keys(duplicateRecord).length > 0 ? true : false
  }

  const checkValidation = (record) => {
    return record.userFirstname.length > 0 && record.userLastname.length > 0 && record.userPhone.length > 0 ? false : true;
  }

  const resetStates = () => {
    setDuplicateError(false);
    setIsRequiredError(false);
    setDeletedRecord(null);
  }

  const handleSubmit = () => {
    resetStates();

    if (checkValidation(phoneBookRecord)) {
      setIsRequiredError(true);
      return;
    }

    const phoneBookRecords = [...phoneBookData, phoneBookRecord];
    const isDuplicate = isDuplicateRecord(phoneBookData, phoneBookRecord);

    if (isDuplicate) {
      setDuplicateError(true);
    } else {
      setPhoneBookData(phoneBookRecords);
      setPhoneBookRecord(initialRecord);
    }
  }

  const onChange = (event) => {
    setPhoneBookRecord({ ...phoneBookRecord, [event.target.name]: event.target.value });
  }

  const renderDuplicateError = (isDuplicateError) => <div>
    {isDuplicateError &&
      <p style={style.error}>The User with First name: "{phoneBookRecord.userFirstname}" and Last name "{phoneBookRecord.userLastname}" already exists</p>
    }
  </div>;

  const renderRequiredError = (isRequiredError) => <div>
    {isRequiredError &&
      <p style={style.error}>First name, Last name and Phone number are required</p>
    }
  </div>;

  const renderDeletedMessage = (record) => {
    return record
      && record.userFirstname
      && <div style={style.success}>
        User with First name: "{record.userFirstname}" and Last name: "{record.userLastname}" is deleted successfully.
      </div>;
  }

  return <>
    <div style={style.form.errorContainer}>
      {renderDuplicateError(isDuplicateError)}
      {renderRequiredError(isRequiredError)}
      {renderDeletedMessage(deletedRecord)}
    </div>

    <div style={style.form.container}>


      <div>
        <label>First name:</label>
      </div>
      <div>
        <input
          style={style.form.inputs}
          onChange={onChange}
          value={phoneBookRecord.userFirstname}
          className="userFirstname"
          name="userFirstname"
          type="text" />
      </div>

      <div>
        <label>Last name:</label>
      </div>
      <div>
        <input
          style={style.form.inputs}
          onChange={onChange}
          value={phoneBookRecord.userLastname}
          className="userLastname"
          name="userLastname"
          type="text" />
      </div>

      <div>
        <label>Phone:</label>
      </div>
      <div>
        <input
          style={style.form.inputs}
          onChange={onChange}
          value={phoneBookRecord.userPhone}
          className="userPhone"
          name="userPhone"
          type="text"
        />
      </div>

      <div style={style.form.btnContainer}>
        <input style={style.form.submitBtn} className="submitButton" type="submit" value="Add User" onClick={handleSubmit} />
      </div>

    </div>
  </>
}