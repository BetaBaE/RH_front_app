import { Box } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import "./style.css";

const PrintPdf = () => {
  let apiUrl = "http://10.111.1.95:8081";
  const [ficheInsertion, setFicheInsertion] = useState([
    {
      id: null,
      dateEmbauche: "",
      NomComplet: "",
    },
  ]);
  const [selectCin, setSelectCin] = useState();
  console.log(setSelectCin);
  useEffect(() => {
    fetch(`${apiUrl}/Members`)
      .then((response) => response.json())
      .then((json) => setFicheInsertion(json));
  }, []);
  const showLoadingPdf = (json) => {
    let jsonPath = "file:" + json.replaceAll("\\", "/");
    Swal.fire({
      title: "Pdf est prêt",
      html: `${jsonPath}`,
      icon: "success",
      allowOutsideClick: false,
      allowEscapeKey: false,
    });
  };
  return (
    <Box component="span" display="flex" justifyContent="center" m={1}>
      <form>
        <select
          className="select-css"
          required="required"
          onChange={(e) => {
            //  console.log("pskch",e.target.value);
            setSelectCin(e.target.value);
          }}
        >
          <option disabled="disabled" selected={true} value="">
            choisir un membre
          </option>
          {ficheInsertion.map((member) => {
            return (
              <option key={member.id} value={member.id}>
                {member.NomComplet} - {member.id}
              </option>
            );
          })}
        </select>
        <div className="button-container">
          <button
            className="button-6 "
            type="submit"
            onClick={(e) => {
              if (selectCin !== undefined) {
                e.preventDefault();

                Swal.fire({
                  title: "Preparation du pdf en cours",
                  html: "Merci de patienter",
                  allowOutsideClick: false,
                  allowEscapeKey: false,
                  timer: 600000,
                  timerProgressBar: true,
                  didOpen: () => {
                    Swal.showLoading();
                  },
                }).then((result) => {
                  /* Read more about handling dismissals below */
                  if (result.dismiss === Swal.DismissReason.timer) {
                    Swal.fire({
                      icon: "error",
                      title: "Oops...",
                      text: "Quelque chose s'est mal passé!",
                      allowOutsideClick: false,
                      allowEscapeKey: false,
                    });
                  }
                });

                // console.log(selctov);

                fetch(
                  `${apiUrl}/printMember/${selectCin}?members={"id":"${selectCin}"}}`
                )
                  .then((response) => response.json())
                  .then((json) => {
                    console.log(json);
                    showLoadingPdf(json);
                  });
              } else {
                e.preventDefault();
                Swal.fire({
                  icon: "error",
                  title: "Error",
                  text: "Veuillez choisir un membre",
                  allowOutsideClick: false,
                  allowEscapeKey: false,
                });
              }
            }}
          >
            Submit
          </button>
        </div>
      </form>
    </Box>
  );
};
export default PrintPdf;
