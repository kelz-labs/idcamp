import React from "react";

const DeleteButton = ({ id, onDelete }) => {
    return (
        <button className="contact-item__delete font-bold text-2xl py-2 px-4 bg-red-400 rounded-full" onClick={() => onDelete(id)}>X</button>
    )
}

export default DeleteButton