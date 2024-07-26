import React from "react";
import HeaderBind from "../components/HeaderBind";
import RateCard from "../components/RateCard";
import Popular from "../components/Popular";
import Project from "../components/Project";
import Location from "../components/Location";
import Residential from "../components/Residential";
import Office from "../components/Office";
import Shops from "../components/Shops";
import Agents from "../components/Agents";
import data from "../data/data";

const Main = () => {
  return (
    <>
      <HeaderBind />
      <Popular data={data.popular} />
      <Project data={data.project} />
      <Location data={data.location} />
      <Residential data={data.residential} />
      <Office data={data.office} />
      <Shops data={data.shop} />
      <Agents />
      <RateCard />
    </>
  );
};

export default Main;
