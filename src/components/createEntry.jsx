import React from "react";
import Entry from "./Entry";

function createEntry(entry) {
  return (
    <Entry
      id={entry.id}
      emoji={entry.emoji}
      name={entry.name}
      meaning={entry.meaning}
    />
  );
}

export default createEntry;
