import React, { useEffect, useState } from "react";
import Select from "react-select";

export const CountrySelect = ({countries, setCountries,selectedCountry, setSelectedCountry}) => {

  useEffect(() => {
    fetch(
      "https://valid.layercode.workers.dev/list/countries?format=select&flags=true&value=code"
    )
      .then((response) => response.json())
      .then((data) => {
        setCountries(data.countries);
        setSelectedCountry(data.userSelectValue);
      });
  }, []);
  const styles = {
    control: (base) => ({
        ...base,
        borderRadius: '9999px', // Full radius
        padding:"1px"
      }),
  };
  return (
    <Select
    // className="rounded-full"
      options={countries}
      styles={styles}
      value={selectedCountry}
      onChange={(selectedOption) => setSelectedCountry(selectedOption)}
    />
  );
};

