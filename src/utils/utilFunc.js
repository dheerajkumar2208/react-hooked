export function restructureData(records) {
  // Create an object to store fiscal years, quarters, and periods
  const fiscalData = {};

  // Loop through the records and group them by fiscal year and quarter
  records.forEach((record) => {
    const fiscalYear = record.FISCAL_YEAR;
    const fiscalQuarter = record.FISCAL_QUARTER;

    if (!fiscalData[fiscalYear]) {
      fiscalData[fiscalYear] = {};
    }

    if (!fiscalData[fiscalYear][fiscalQuarter]) {
      fiscalData[fiscalYear][fiscalQuarter] = [];
    }

    fiscalData[fiscalYear][fiscalQuarter].push(record.FISCAL_PERIOD);
  });

  // Now, fiscalData contains fiscal years, quarters, and periods
  console.log(fiscalData);

  return fiscalData;
}

export function transformData(inputObj, mapping) {
  const transformedData = [];

  for (const key in mapping) {
    if (Object.prototype.hasOwnProperty.call(mapping, key)) {
      const bindVarName = mapping[key];
      const inputValue = inputObj[key];

      // Check if the value is an object
      if (
        inputValue !== undefined &&
        typeof inputValue === "object" &&
        inputValue !== null &&
        inputValue.value
      ) {
        // Assign the value inside that key
        transformedData.push({
          bindVarName,
          bindVarVal: inputValue.value, // You might want to add a check here as well
        });
      } else if (inputValue !== undefined) {
        // Add the transformed data to the result array
        transformedData.push({
          bindVarName,
          bindVarVal: inputValue,
        });
      }
    }
  }

  return transformedData;
}

export function createStructureObjFromApi(arrayOfObjects) {
  const formedObj = [];

  // Iterate through the array of objects
  arrayOfObjects.forEach((obj) => {
    // Push key-value pair into the new array
    if (obj.data && obj.data.serviceName) {
      formedObj[obj.data.serviceName] = obj.datas;
    }
  });

  return formedObj;
}

export function getInvoiceInputs(userProfile) {
  const bindVars = [];
    bindVars.push({
        "bindVarName": "IN_REQUEST_TYPE_CD",
        "bindVarVal": "O"
    });
    bindVars.push({
        "bindVarName": "IN_USER_DS_ID",
        "bindVarVal": userProfile.userId
    });
    bindVars.push({
        "bindVarName": "IN_USER_DS_NAME",
        "bindVarVal": userProfile.firstName + " " + userProfile.lastName
    });
    bindVars.push({
        "bindVarName": "IN_USER_DS_GROUP",
        "bindVarVal": ""
    });
    bindVars.push({
        "bindVarName": "IN_USER_EMAIL_ID",
        "bindVarVal": userProfile.emailId
    });
    bindVars.push({
        "bindVarName": "IN_HISTORY_DURATION",
        "bindVarVal": "10"
    });
    return bindVars;
}




// getInvoiceInputs: function (userProfile) {
//   const bindVars = [];
//   bindVars.push({
//       "bindVarName": "IN_REQUEST_TYPE_CD",
//       "bindVarVal": "O"
//   });
//   bindVars.push({
//       "bindVarName": "IN_USER_DS_ID",
//       "bindVarVal": userProfile.userId
//   });
//   bindVars.push({
//       "bindVarName": "IN_USER_DS_NAME",
//       "bindVarVal": userProfile.firstName + " " + userProfile.lastName
//   });
//   bindVars.push({
//       "bindVarName": "IN_USER_DS_GROUP",
//       "bindVarVal": ""
//   });
//   bindVars.push({
//       "bindVarName": "IN_USER_EMAIL_ID",
//       "bindVarVal": userProfile.emailId
//   });
//   bindVars.push({
//       "bindVarName": "IN_HISTORY_DURATION",
//       "bindVarVal": "10"
//   });
//   return bindVars;
// },


// Add more utility functions as needed
