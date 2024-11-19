export type RenderActionPartial<
  ActionId extends string,
  Payload extends Record<string, unknown>,
> = {
  id: ActionId;
  func: (props: {
    action: RenderAction<ActionId, Payload>;
    actionQueue: RenderAction<ActionId, Payload>[];
  }) => void;
  repeat?: boolean;
  tags?: string[];
  pause?: boolean;
};

export type RenderAction<
  ActionId extends string,
  Payload extends Record<string, unknown>,
> = {
  id: ActionId;
  func: (props: {
    action: RenderAction<ActionId, Payload>;
    actionQueue: RenderAction<ActionId, Payload>[];
  }) => void;
  repeat: boolean;
  tags: string[];
  pause: boolean;
};

export type RenderActionAny = RenderAction<string, Record<string, unknown>>;
