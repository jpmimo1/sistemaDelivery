import React from "react";
import ConfirmGeneral from "../../modals/confirmGeneral";

function ConfirmDeleteCategory({ open, categoryName, onClose, onSuccess }) {
  return (
    <ConfirmGeneral
      open={open}
      title={"Eliminar Categoria"}
      content={`Si elimina ${
        categoryName ? `"${categoryName}"` : "esta categoría"
      }, se eliminaran todos los platos contenidos. Confirma para proceder.
      `}
      labelSuccess="Confirmar"
      onClose={onClose}
      onCancel={onClose}
      onSuccess={onSuccess}
    />
  );
}

export default ConfirmDeleteCategory;
