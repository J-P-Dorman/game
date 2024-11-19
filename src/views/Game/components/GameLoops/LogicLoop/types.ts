export type LogicAction<
  ActionId extends string,
  Payload extends Record<string, unknown>,
> = {
  id: ActionId;
  func: (props: {
    action: LogicAction<ActionId, Payload>;
    logicQueue: LogicAction<ActionId, Payload>[];
  }) => void;
  repeat: boolean;
  tags: string[];
  pause: boolean;
  payload: Payload;
  time: number;
  maxTime: number;
};

export type LogicActionPartial<
  ActionId extends string,
  Payload extends Record<string, unknown>,
> = LogicAction<ActionId, Payload> & {
  id: ActionId;
  func: (props: {
    action: LogicAction<ActionId, Payload>;
    logicQueue: LogicAction<ActionId, Payload>[];
  }) => void;
  repeat?: boolean;
  tags?: string[];
  pause?: boolean;
  payload?: Payload;
  time?: number;
  maxTime?: number;
};

export type LogicActionAny = LogicAction<string, Record<string, unknown>>;
