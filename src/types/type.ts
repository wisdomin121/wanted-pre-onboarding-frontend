export interface ICreateTodo {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  list: any[];
  setList: React.Dispatch<React.SetStateAction<any[]>>;
}

export interface ILi {
  text: string;
  _checked: boolean;
  isEdit: boolean;
  _onChange: (e: {
    target: { checked: boolean | ((prevState: boolean) => boolean) };
  }) => void;
  editTodo: string;
  setEditTodo: React.Dispatch<React.SetStateAction<string>>;
  editOnClick: () => void;
  deleteOnClick: () => void;
  submitOnClick: () => void;
  cancelOnClick: () => void;
}

export type ILiButton = Pick<
  ILi,
  "isEdit" | "editOnClick" | "deleteOnClick" | "submitOnClick" | "cancelOnClick"
>;

export type ILiTextInput = Pick<
  ILi,
  "text" | "isEdit" | "editTodo" | "setEditTodo"
>;

export type ILiCheckBox = Pick<ILi, "_checked" | "_onChange">;
