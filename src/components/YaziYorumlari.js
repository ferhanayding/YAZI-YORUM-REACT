import React from "react";
import YorumListesi from "./YorumListesi";
import YorumFormu from "./YorumFormu";

const YaziYorumlari = (props) => {
  return (
    <React.Fragment>
      <h2>yorumlar</h2>
      <YorumListesi yorumlar={props.yorumlar} />
      <YorumFormu handleSubmit={props.handleSubmit} />
    </React.Fragment>
  );
};

export default YaziYorumlari;
