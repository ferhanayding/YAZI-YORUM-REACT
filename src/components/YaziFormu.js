import { api } from "../api";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
const YaziFormu = (props) => {
  const { id } = useParams();
  const [yazi, setYazi] = useState({ title: "", content: "" });
  const [hata, setHata] = useState("");
  const history = useHistory();

  const onInputChange = (e) => {
    setYazi({ ...yazi, [e.target.name]: e.target.value });
  };
  const onFormSubmit = (e) => {
    e.preventDefault();
    setHata("");
    if (props.yazi?.title) {
      api()
        .put(`/posts/${id}`, yazi)
        .then((res) => {
          console.log(res);
          history.push(`/posts/${id}`);
        })
        .catch((err) => {
          setHata("başlık ve yazı içeriği alanları zorunludur");
        });
    } else {
      api()
        .post("/posts", yazi)
        .then((res) => history.push("/"))
        .catch((err) => setHata("başlık ve yazı içeriği alanları zorunludur"));
    }
  };
  useEffect(() => {
    if (props.yazi?.title && props.yazi.content) {
      setYazi(props.yazi);
    }
  }, [props.yazi]);

  return (
    <React.Fragment>
      {hata && (
        <div className="ui error message">
          <div className="header">Hata</div>
          <p>{hata}</p>
        </div>
      )}
      <div className="ui form">
        <div className="field">
          <label>Yazı Başlığı</label>

          <input
            value={yazi.title}
            type="text"
            name="title"
            onChange={onInputChange}
          />
        </div>
        <div className="field">
          <label>Yazı İçeriği</label>
          <textarea
            value={yazi.content}
            rows="3"
            name="content"
            onChange={onInputChange}
          ></textarea>
        </div>
        <button className="ui primary button" onClick={onFormSubmit}>
          Gönder
        </button>
        <button className="ui button">İptal Et</button>
      </div>
    </React.Fragment>
  );
};
export default YaziFormu;
