import React, { useState } from "react";
import EntriesContext from "../context/EntriesContext/EntriesContext";
const EntriesProvider = (props) => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(-1);
  // const [clear, setClear] = useState(-1);

  // Modal-specific code
  const onModal = (id) => {
    setIndex(id);
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const onErase = () => {
    alert("Erasing: " + index);
    setEntries(entries.filter((entry) => entry.id !== index));
    setOpen(false);
  };

  const onSubmit = (values) => {
    console.log(values);
    if (Object.keys(values).length <= 1 && values.constructor === Object)
      return;
    console.log("Yuh.");
    setEntries(
      entries.map((entry) =>
        entry.id === index
          ? { ...entry, name: values.label, color: values.color }
          : entry
      )
    );
    onClose();
  };

  const onAdd = (pos) => {
    console.log("Add!");
    console.log("ID: " + index);

    const hex =
      "#" + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, "0");

    const entry = {
      id: hex,
      key: hex,
      name: "?",
      color: "#ddd",
      pool: [],
    };

    const i = entries.map((e) => e.id).indexOf(index);

    console.log(i);
    entries.splice(i + pos, 0, entry);
    setOpen(false);
  };

  /* WIP */
  // const handleClear = () => {
  //   console.log("Clear");
  //   setEntries(
  //     entries.map((entry) =>
  //       entry.id === index ? { ...entry, clear: true } : entry
  //     )
  //   );
  // };

  const history = { previous: -1, pastEntries: [] };
  const onChange = ({ pool, id }) => {
    if (id === history.previous) return;
    history.pastEntries.push(history.previous);
    history.previous = id;
    setEntries(
      entries.map((entry) =>
        entry.id === id ? { ...entry, pool: pool } : entry
      )
    );
    console.log("Pool: " + JSON.stringify(pool));
    console.log("ID: " + id);
    console.log(entries.map((entry) => entry.pool));
  };

  const setPool = (pool, id) => {
    setEntries(
      entries.map((entry) =>
        entry.id === id ? { ...entry, pool: pool } : entry
      )
    );
  };

  const [entries, setEntries] = useState([
    {
      id: "2197e7",
      key: "2197e7",
      name: "SS",
      color: "#c07fc0",
      pool: [
        {
          id: 1,
          src: "./images/icon_shuten01.png",
          name: "shuten1",
          chosen: false,
          selected: false,
        },
        {
          id: 2,
          src: "./images/icon_shuten02.png",
          name: "shuten2",
          chosen: false,
          selected: false,
        },
      ],
    },
    {
      id: "bd30e9",
      key: "bd30e9",
      name: "S",
      color: "#80ff80",
      pool: [
        {
          id: 1,
          src: "./images/icon_shuten01.png",
          name: "shuten1",
          chosen: false,
          selected: false,
        },
        {
          id: 2,
          src: "./images/icon_shuten02.png",
          name: "shuten2",
          chosen: false,
          selected: false,
        },
      ],
    },
    {
      id: "210b97",
      key: "210b97",
      name: "A",
      color: "#c1fc83",
      pool: [
        {
          id: 1,
          src: "./images/icon_shuten01.png",
          name: "shuten1",
          chosen: false,
          selected: false,
        },
        {
          id: 2,
          src: "./images/icon_shuten02.png",
          name: "shuten2",
          chosen: false,
          selected: false,
        },
      ],
    },
    {
      id: "c741b0",
      key: "c741b0",
      name: "B",
      color: "#ffff80",
      pool: [
        {
          id: 1,
          src: "./images/icon_shuten01.png",
          name: "shuten1",
          chosen: false,
          selected: false,
        },
        {
          id: 2,
          src: "./images/icon_shuten02.png",
          name: "shuten2",
          chosen: false,
          selected: false,
        },
      ],
    },
    {
      id: "cb70b4",
      key: "cb70b4",
      name: "C",
      color: "#ffdf7e",
      pool: [
        {
          id: 1,
          src: "./images/icon_shuten01.png",
          name: "shuten1",
          chosen: false,
          selected: false,
        },
        {
          id: 2,
          src: "./images/icon_shuten02.png",
          name: "shuten2",
          chosen: false,
          selected: false,
        },
      ],
    },
    {
      id: "85470d",
      key: "85470d",
      name: "D",
      color: "#ffbf7e",
      pool: [
        {
          id: 1,
          src: "./images/icon_shuten01.png",
          name: "shuten1",
          chosen: false,
          selected: false,
        },
        {
          id: 2,
          src: "./images/icon_shuten02.png",
          name: "shuten2",
          chosen: false,
          selected: false,
        },
      ],
    },
    {
      id: "c84b57",
      key: "c84b57",
      name: "E",
      color: "#ff7f7f",
      pool: [
        {
          id: 1,
          src: "./images/icon_shuten01.png",
          name: "shuten1",
          chosen: false,
          selected: false,
        },
        {
          id: 2,
          src: "./images/icon_shuten02.png",
          name: "shuten2",
          chosen: false,
          selected: false,
        },
      ],
    },
    {
      id: "d25e33",
      key: "d25e33",
      name: "F",
      color: "#cfcfcf",
      pool: [
        {
          id: 1,
          src: "./images/icon_shuten01.png",
          name: "shuten1",
          chosen: false,
          selected: false,
        },
        {
          id: 2,
          src: "./images/icon_shuten02.png",
          name: "shuten2",
          chosen: false,
          selected: false,
        },
      ],
    },
  ]);

  return (
    <EntriesContext.Provider
      value={{
        data: entries,
        updateEntries: () => {
          setEntries({ ...entries });
        },
        onErase: () => onErase(),
        onAdd: (pos) => onAdd(pos),
        onSubmit: (values) => onSubmit(values),
        onChange: ({ pool, id }) => onChange({ pool, id }),
        setPool: (pool, id) => setPool(pool, id),

        // modal-specific functions
        onModal: (id) => onModal(id),
        onClose: () => onClose(),
        open: open,
      }}
    >
      {props.children}
    </EntriesContext.Provider>
  );
};

export default EntriesProvider;
