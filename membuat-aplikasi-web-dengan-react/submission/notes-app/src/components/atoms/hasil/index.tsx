import { Box, Button, Text } from "@chakra-ui/react";

const Hasil = ({ contacts, handleEdit, handleDelete }: any) => {
  return (
    <>
      {/*
      {contacts.map((contact: any, index: number) => (
          <Box>
          <Text>{contact.id}</Text>
          <Text>{contact.nama}</Text>
          <Text>{contact.telp}</Text>
          <Button onClick={() => handleEdit(contact.id)}>Edit</Button>
          <Button onClick={() => handleDelete(contact.id)}>Add</Button>
        </Box>
      ))}
        */}
    </>
  );
};

export default Hasil;
