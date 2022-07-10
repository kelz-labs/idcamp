import {
  Flex,
  Text,
  SimpleGrid,
  Box,
  Input,
  FormControl,
} from "@chakra-ui/react";
import { useState } from "react";
import { Notes } from "../../utils/notes";
import Layout from "../../components/template/layout";
import InputData from "../../components/atoms/input";
import DarkMode from "../../components/atoms/darkMode";
import Hasil from "../../components/atoms/hasil";
import { uid } from "uid";

const Home = () => {
  const [notes, setNotes] = useState([
    {
      id: "1",
      judul: "Anime",
      ket: "Mending ngoding bang",
    },
    {
      id: "2",
      judul: "Anime Lucu",
      ket: "Mending ngoding bang",
    },
  ]);

  const [isUpdate, setIsUpdate] = useState({
    id: null,
    status: false,
  });

  const [formData, setFormData] = useState({
    judul: "",
    ket: "",
  });

  const handleChange = (event: any) => {
    console.log(typeof event);
    let data = { ...formData };
    // data[event.target.judul] = event.target.value;
    setFormData(data);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    let data = [...notes];

    if (formData.judul === "" || formData.ket === "") {
      return false;
    }

    if (isUpdate.status) {
      data.forEach((note) => {
        if (note.id === isUpdate.id) {
          note.judul = formData.judul;
          note.ket = formData.ket;
        }
      });
    } else {
      data.push({ id: uid(), judul: formData.judul, ket: formData.ket });
    }

    setNotes(data);
    setFormData({ judul: "", ket: "" });
    setIsUpdate({ id: null, status: false });
  };
  return (
    <Layout>
      <DarkMode />
      {/* 
     <Box>
        <Input
          type="text"
          value={formData.judul}
          name="name"
          onChange={handleChange}
        />
      </Box>
    */}

      <FormControl onSubmit={handleSubmit}>
        <Input
          type={"text"}
          value={formData.judul}
          required
          onChange={handleChange}
        />
        <Input
          type={"text"}
          value={formData.ket}
          required
          onChange={handleChange}
        />
      </FormControl>
      {/*<InputData
        input={input}
        setInput={setInput}
        judul={judul}i
        setJudul={setJudul}
  />*/}
      {/*
     <SimpleGrid column={3} row={1}>
        {Notes.map((note, key) => (
          <Flex key={key}>
            <Text>{note.id}</Text>
            <Text>{note.archived}</Text>
            <Text>{note.title}</Text>
            <Text>{note.body}</Text>
            <Text>{note.createdAt}</Text>
          </Flex>
        ))}
      </SimpleGrid>
          */}
    </Layout>
  );
};

export default Home;
