import styles from "./select.module.css";
import { useState , useEffect } from "react";

type SelectOption = {
  label: string;
  value: string | number;
};

type SelectProps = {
  options: SelectOption[];
  value?: SelectOption;
  onChange: (value: SelectOption | undefined) => void;
};

export const Select = ({ value, onChange, options }: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedInded, setHighlightedInded] = useState(0);

  useEffect( () => {
    if(isOpen){
     return setHighlightedInded(0)
    }
  },[isOpen])
  const clearOptions = () => {
    onChange(undefined);
  };

  const selectOptions = (option: SelectOption) => {
    if (option !== value) onChange(option);
  };

  const isOptionSelected = (option: SelectOption) => {
    return option === value;
  };
  return (
    <>
      <div
        onBlur={() => setIsOpen(false)}
        onClick={() => setIsOpen((perv) => !perv)}
        tabIndex={0}
        className={styles.container}
      >
        <span className={styles.value}>{value?.label}</span>
        <button
          onClick={(e) => {
            e.stopPropagation();
            clearOptions();
          }}
          className={styles["clear-btn"]}
        >
          X
        </button>
        <div className={styles.divider}></div>
        <div className={styles.caret}></div>
        <ul className={`${styles.options} ${isOpen && styles.show}`}>
          {options.map((option , index) => (
            <li
              onClick={(e) => {
                e.stopPropagation();
                selectOptions(option);
                setIsOpen(false);
              }}
              onMouseEnter={()=> {setHighlightedInded(index)}}
              key={option.value}
              className={`${styles.option} ${
                isOptionSelected(option) && styles.selected
              } ${index === highlightedInded && styles.highlighted}`}
            >
              {option.label}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
