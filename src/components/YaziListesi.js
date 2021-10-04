import React, { useEffect, useState } from "react";
import { api } from "../api";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { yaziListesiGetir } from "../actions";

const YaziListesi = (props) => {
  const yaziListesi = useSelector((state) => state.yaziListesi);
  const dispatch = useDispatch();
  console.log({ yaziListesi });
  useEffect(() => {
    dispatch(yaziListesiGetir());
  }, []);

  return (
    <div className="ui relaxed divided list">
      <Link to="/yaziekle" className="ui primary button">
        Yazı Ekle
      </Link>
      <h3>BİR KONU BELİRLE VE DÜŞÜNCELERİNİ PAYLAŞ</h3>
      {yaziListesi.map((yazi) => {
        return (
          <div className="item" key={yazi.id}>
            <i className="large github middle aligned icon"></i>
            <div className="content">
              <Link to={`/posts/${yazi.id}`} className="header">
                {yazi.title}
              </Link>
              <div className="description">{yazi.created_at}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default YaziListesi;
