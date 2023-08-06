export interface ISign {
  isSignUp?: boolean;
}

// Li 컴포넌트 관련
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

export interface ICheckTodo {
  list: any[];
  setList: React.Dispatch<React.SetStateAction<any[]>>;
  checkedId: number[];
  setCheckedId: React.Dispatch<React.SetStateAction<number[]>>;
}

// apis 관련
export interface ISignUpIn {
  email: string;
  password: string;
  setErrorText: React.Dispatch<React.SetStateAction<string>>;
}

export interface IGetTodos {
  setList: React.Dispatch<React.SetStateAction<any[]>>;
  setCheckedId?: React.Dispatch<React.SetStateAction<number[]>>;
}

export interface ICreateTodo {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  list: any[];
  setList: React.Dispatch<React.SetStateAction<any[]>>;
}

export interface IUpdateTodo {
  id: number;
  todo: string;
  isCompleted: boolean;
  checkedId?: number[];
  setCheckedId?: React.Dispatch<React.SetStateAction<number[]>>;
  list?: any[];
  setList?: React.Dispatch<React.SetStateAction<any[]>>;
}

export interface IDeleteTodo {
  id: number;
  list: any[];
  setList: React.Dispatch<React.SetStateAction<any[]>>;
}
