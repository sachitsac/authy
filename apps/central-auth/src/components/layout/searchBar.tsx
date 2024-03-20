import { ReactElement } from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import "./searchBar.css";

export const SearchBar = (): ReactElement => {
  return (
    <>
      <div className="search-bar">
        <Label title="Search">
          <Input
            placeholder="Search..."
            autoComplete="off"
            name="name"
            type="text"
            className="mb-3"
          />
        </Label>
      </div>
    </>
  );
};
