import { RenderAction, RenderActionPartial } from "./types";
import { State } from "../../../../../types";

declare global {
  interface Window {
    state: State;
    scene: any;
  }
}

export const createRenderAction = <
  ActionId extends string,
  Payload extends Record<string, unknown>,
>({
  id,
  func,
  repeat = false,
  tags = [],
  pause = false,
}: RenderActionPartial<ActionId, Payload>): RenderAction<
  ActionId,
  Payload
> => ({
  id,
  func,
  repeat,
  tags,
  pause,
});

export const pushToRenderQueue = <
  ActionId extends string,
  Payload extends Record<string, unknown>,
>(
  renderAction: RenderAction<ActionId, Payload>
) => {
  window.state.renderQueue.push(renderAction);
};
