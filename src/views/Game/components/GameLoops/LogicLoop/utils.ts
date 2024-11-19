import { LogicAction, LogicActionPartial } from "./types";

export const createLogicAction = <
  ActionId extends string,
  Payload extends Record<string, unknown>,
>({
  id,
  func,
  repeat = false,
  tags = [],
  pause = false,
  payload = {} as Payload,
  time = 0,
  maxTime = 0,
}: LogicActionPartial<ActionId, Payload>): LogicAction<ActionId, Payload> => ({
  id,
  func,
  repeat,
  tags,
  pause,
  payload,
  time,
  maxTime,
});
