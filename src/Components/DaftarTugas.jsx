import React, { useState } from "react";
import Input from "../css/Input";
import Tugas from "../css/Tugas";
import Checkbox from "../css/Checkbox";
import Selesai from "../css/Selesai";
import Hapus from "../css/Hapus";

export default function DaftarTugas() {
  const [tugasTerkini, setTugasTerkini] = useState("");
  const [tugas, setTugas] = useState([
    {
      tetugas: "tambah pengetahuan fronted",
      isCompleted: false,
    },
    {
      tetugas: "buat project portfolio fronted",
      isCompleted: false,
    },
    {
      tetugas: "mencari kerja freelance fronted",
      isCompleted: false,
    },
  ]);

  function buatTetugasBaru(tugasTerkini) {
    let larikTugas = [...tugas];
    larikTugas.push({
      tetugas: tugasTerkini,
      isCompleted: false,
    });
    setTugas(larikTugas);
  }

  function completeTodo(index) {
    const todosArray = [...tugas];
    todosArray[index].isCompleted = !todosArray[index].isCompleted;
    setTugas(todosArray);
  }

  function hapusTugas(index) {
    let larikTugas = [...tugas];
    larikTugas.splice(index, 1);
    setTugas(larikTugas);
  }

  return (
    <div>
      <Input
        value={tugasTerkini}
        onChange={(e) => {
          setTugasTerkini(e.target.value);
        }}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            buatTetugasBaru(tugasTerkini);
            setTugasTerkini("");
          }
        }}
        placeholder="Apa yang ingin anda selesaikan?"
      />

      {tugas.map((todo, index) => (
        <Tugas key={index}>
          <Checkbox
            onClick={() => completeTodo(index)}
            isCompleted={todo.isCompleted}
          >
            {todo.isCompleted && <span>&#x2714;</span>}
          </Checkbox>
          <Selesai isCompleted={todo.isCompleted}>{todo.tetugas}</Selesai>
          <Hapus onClick={() => hapusTugas(index)}>&#128465;</Hapus>
        </Tugas>
      ))}

      {tugas.length > 0 && `${tugas.length} daftar tugas`}
    </div>
  );
}
