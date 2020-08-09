import React from "react";
import ConfirmGeneral from "../../modals/confirmGeneral";

function ConfirmDeleteDish({ open, dishName, onClose, onSuccess }) {
  return (
    <ConfirmGeneral
      open={open}
      title={"Eliminar Plato"}
      content={`Confirma para eliminar ${dishName ? `"${dishName}"` : ""}.`}
      labelSuccess={"Confirmar"}
      onClose={onClose}
      onSuccess={onSuccess}
      onCancel={onClose}
    />
  );
}

export default ConfirmDeleteDish;
