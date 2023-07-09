import React from 'react';
import PropTypes from 'prop-types';
import { DeleteButton, ListItem } from './contactItem.styled';

export const ContactItem = ({ contact, onDeleteContact }) => {
  const handleDelete = () => {
    onDeleteContact(contact.id);
  };

  return (
    <ListItem>
      {contact.name}: {contact.number}
      <DeleteButton type="button" onClick={handleDelete}>
        Delete
      </DeleteButton>
    </ListItem>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
