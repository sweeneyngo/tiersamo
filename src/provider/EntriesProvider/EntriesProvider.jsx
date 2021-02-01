import React, { useState } from "react";
import EntriesContext from "../../context/EntriesContext/EntriesContext";
const EntriesProvider = (props) => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(-1);
  const [entries, setEntries] = useState([
    {
      id: "2197e7",
      key: "2197e7",
      name: "SS",
      color: "#c07fc0",
      pool: [],
    },
    {
      id: "bd30e9",
      key: "bd30e9",
      name: "S",
      color: "#80ff80",
      pool: [],
    },
    {
      id: "210b97",
      key: "210b97",
      name: "A",
      color: "#c1fc83",
      pool: [],
    },
    {
      id: "c741b0",
      key: "c741b0",
      name: "B",
      color: "#ffff80",
      pool: [],
    },
    {
      id: "cb70b4",
      key: "cb70b4",
      name: "C",
      color: "#ffdf7e",
      pool: [],
    },
    {
      id: "85470d",
      key: "85470d",
      name: "D",
      color: "#ffbf7e",
      pool: [],
    },
    {
      id: "c84b57",
      key: "c84b57",
      name: "E",
      color: "#ff7f7f",
      pool: [],
    },
    {
      id: "d25e33",
      key: "d25e33",
      name: "F",
      color: "#cfcfcf",
      pool: [],
    },
  ]);
  const [pool, updatePool] = useState([
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
    {
      id: 3,
      src: "./images/icon_shuten03.png",
      name: "shuten3",
      chosen: false,
      selected: false,
    },
    {
      id: 4,
      src: "./images/icon_oniwaka01.png",
      name: "oniwaka1",
      chosen: false,
      selected: false,
    },
    {
      id: 5,
      src: "./images/icon_oniwaka02.png",
      name: "oniwaka2",
      chosen: false,
      selected: false,
    },
    {
      id: 6,
      src: "./images/icon_oniwaka03.png",
      name: "oniwaka3",
      chosen: false,
      selected: false,
    },
  ]);

  // Modal-specific code
  const onModal = (id) => {
    setIndex(id);
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  // Entry-specific code
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

  const onClear = () => {
    console.log("onClear: " + index);
    entries.map((entry) =>
      entry.id === index ? updatePool(pool.concat(entry.pool)) : 0
    );

    setEntries(
      entries.map((entry) =>
        entry.id === index ? { ...entry, pool: [] } : entry
      )
    );
    console.log(pool);
  };

  const onChange = ({ pool, id }) => {
    const history = { previous: -1, pastEntries: [] };
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

  const onChangePool = (pool, id) => {
    setEntries(
      entries.map((entry) =>
        entry.id === id ? { ...entry, pool: pool } : entry
      )
    );
  };

  const setPool = (pool) => {
    updatePool(pool);
  };

  return (
    <EntriesContext.Provider
      value={{
        data: entries,
        pool: pool,

        // class Modal
        onModal: (id) => onModal(id),
        onClose: () => onClose(),
        open: open,

        // class Entries
        onErase: () => onErase(),
        onSubmit: (values) => onSubmit(values),
        onAdd: (pos) => onAdd(pos),
        onClear: () => onClear(),
        onChange: ({ pool, id }) => onChange({ pool, id }),
        onChangePool: (pool, id) => onChangePool(pool, id),
        setPool: (pool) => setPool(pool),

        updateEntries: () => setEntries({ ...entries }),
      }}
    >
      {props.children}
    </EntriesContext.Provider>
  );
};

export default EntriesProvider;
