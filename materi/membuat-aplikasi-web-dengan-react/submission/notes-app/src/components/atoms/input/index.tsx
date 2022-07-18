import { Box, Button, FormControl, FormLabel, Input } from "@chakra-ui/react";

const InputData = ({ input, setInput, judul, setJudul }: any) => {
  const inputJudul = (event: any) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    setJudul([...judul, { title: input }]);
    setInput("");
  };

  console.log(judul);
  return (
    <Box>
      <FormControl onSubmit={handleSubmit}>
        <FormLabel htmlFor="judul">Judul</FormLabel>
        <Input
          placeholder="Ketik disini"
          id="judul"
          type="text"
          fontWeight={"semibold"}
          required
          onChange={inputJudul}
        />
        {/*<FormLabel htmlFor="keterangan">Keterangan</FormLabel>
        <Input id="keterangan" type="text" height={"28"} />*/}
      </FormControl>
      <Button type="submit">Add</Button>
    </Box>
  );
};

export default InputData;
